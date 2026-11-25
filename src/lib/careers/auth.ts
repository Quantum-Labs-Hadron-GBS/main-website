// HR dashboard authentication (server only).
//
// Secrets on the Worker:
//   HR_DASHBOARD_EMAIL           login email
//   HR_DASHBOARD_SECURITY_KEY    ONE-TIME setup key: used with the email on first sign-in to choose a password
//   HR_DASHBOARD_SESSION_SECRET  random string (32+ chars) used to sign the session cookie
//
// Flow: first sign-in = email + security key + new password (stored as a PBKDF2 hash in D1).
// After that = email + password. A security key can set a password only once; to reset a forgotten
// password, set a NEW HR_DASHBOARD_SECURITY_KEY on the Worker, which re-opens setup one more time.
// Sessions are signed, HttpOnly cookies tied to the current password: a new password signs everyone out.
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { getHrCredential, saveHrCredential, type HrCredentialRow } from "./db";

export const SESSION_COOKIE = "hadron_hr_session";
const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

interface HrConfig {
  email: string;
  securityKey: string;
  sessionSecret: string;
}

export const MIN_PASSWORD_LENGTH = 12;
// Cloudflare Workers caps PBKDF2 at 100,000 iterations
const PBKDF2_ITERATIONS = 100_000;

export function getHrConfig(): HrConfig | null {
  const email = process.env.HR_DASHBOARD_EMAIL?.trim().toLowerCase();
  const securityKey = process.env.HR_DASHBOARD_SECURITY_KEY;
  const sessionSecret = process.env.HR_DASHBOARD_SESSION_SECRET;
  if (!email || !securityKey || !sessionSecret || sessionSecret.length < 32) return null;
  return { email, securityKey, sessionSecret };
}

const enc = new TextEncoder();

const b64url = (bytes: Uint8Array) =>
  btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

const fromB64url = (s: string) => {
  const bin = atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
};

async function hmac(key: string, data: string): Promise<Uint8Array> {
  const k = await crypto.subtle.importKey("raw", enc.encode(key), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return new Uint8Array(await crypto.subtle.sign("HMAC", k, enc.encode(data)));
}

function equalBytes(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

/** Constant-time string comparison (compares HMACs so lengths never leak). */
async function safeEqual(a: string, b: string, key: string): Promise<boolean> {
  const [ha, hb] = await Promise.all([hmac(key, a), hmac(key, b)]);
  return equalBytes(ha, hb);
}

async function pbkdf2(password: string, salt: Uint8Array, iterations: number): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt: new Uint8Array(salt) as Uint8Array<ArrayBuffer>, iterations },
    key,
    256
  );
  return new Uint8Array(bits);
}

/** Tag identifying which security key set the current password (a new key re-opens one-time setup). */
const keyTag = async (cfg: HrConfig) => b64url(await hmac(cfg.sessionSecret, `setup-key:${cfg.securityKey}`));

/** Is first-time setup (email + security key → new password) currently allowed? */
export async function isSetupOpen(): Promise<boolean> {
  const cfg = getHrConfig();
  if (!cfg) return false;
  const row = await getHrCredential(cfg.email);
  return !row || row.key_tag !== (await keyTag(cfg));
}

/** Normal sign-in: email + password chosen at setup. */
export async function checkPassword(email: string, password: string): Promise<boolean> {
  const cfg = getHrConfig();
  if (!cfg) return false;
  const row = await getHrCredential(cfg.email);
  const emailOk = await safeEqual(email.trim().toLowerCase(), cfg.email, cfg.sessionSecret);
  if (!row) {
    // Still run a hash so timing doesn't reveal that no password exists yet
    await pbkdf2(password, new Uint8Array(16), PBKDF2_ITERATIONS);
    return false;
  }
  const hash = await pbkdf2(password, fromB64url(row.salt), Number(row.iterations));
  return emailOk && equalBytes(hash, fromB64url(row.password_hash));
}

export type SetupResult = "ok" | "invalid" | "used";

/** One-time setup: email + security key, then store the new password. */
export async function setPasswordWithSecurityKey(email: string, securityKey: string, newPassword: string): Promise<SetupResult> {
  const cfg = getHrConfig();
  if (!cfg) return "invalid";
  const [emailOk, keyOk] = await Promise.all([
    safeEqual(email.trim().toLowerCase(), cfg.email, cfg.sessionSecret),
    safeEqual(securityKey, cfg.securityKey, cfg.sessionSecret),
  ]);
  if (!emailOk || !keyOk) return "invalid";
  const tag = await keyTag(cfg);
  const existing = await getHrCredential(cfg.email);
  if (existing && existing.key_tag === tag) return "used";
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await pbkdf2(newPassword, salt, PBKDF2_ITERATIONS);
  await saveHrCredential({
    email: cfg.email,
    password_hash: b64url(hash),
    salt: b64url(salt),
    iterations: PBKDF2_ITERATIONS,
    key_tag: tag,
    updated_at: Date.now(),
  });
  return "ok";
}

// Signing key includes the stored password hash, so setting a new password signs everyone out
const signingKey = (cfg: HrConfig, row: HrCredentialRow) => `${cfg.sessionSecret}:${row.password_hash}:${row.updated_at}`;

export async function createSessionToken(email: string): Promise<{ token: string; maxAge: number }> {
  const cfg = getHrConfig();
  if (!cfg) throw new Error("HR dashboard is not configured");
  const row = await getHrCredential(cfg.email);
  if (!row) throw new Error("HR password is not set");
  const payload = b64url(enc.encode(JSON.stringify({ e: email, x: Date.now() + SESSION_TTL_MS })));
  const sig = b64url(await hmac(signingKey(cfg, row), payload));
  return { token: `${payload}.${sig}`, maxAge: SESSION_TTL_MS / 1000 };
}

export async function verifySessionToken(token: string | undefined): Promise<{ email: string } | null> {
  const cfg = getHrConfig();
  if (!cfg || !token) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  try {
    const row = await getHrCredential(cfg.email);
    if (!row) return null;
    const expected = await hmac(signingKey(cfg, row), payload);
    if (!equalBytes(expected, fromB64url(sig))) return null;
    const data = JSON.parse(new TextDecoder().decode(fromB64url(payload))) as { e?: string; x?: number };
    if (!data.e || !data.x || data.x < Date.now()) return null;
    if (data.e.toLowerCase() !== cfg.email) return null;
    return { email: data.e };
  } catch {
    return null;
  }
}

/** Current HR session in a Server Component / Route Handler. */
export async function getHrSession(): Promise<{ email: string } | null> {
  const store = await cookies();
  return verifySessionToken(store.get(SESSION_COOKIE)?.value);
}

export const sessionCookieOptions = (maxAge: number) => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge,
});

/** Rejects cross-site requests to state-changing endpoints (defence in depth on top of SameSite=Strict). */
export function isSameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return req.headers.get("sec-fetch-site") !== "cross-site";
  try {
    return new URL(origin).host === (req.headers.get("x-forwarded-host") || req.headers.get("host"));
  } catch {
    return false;
  }
}

export function clientKey(req: NextRequest): string {
  return (
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unknown"
  );
}
