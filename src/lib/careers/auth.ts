// HR dashboard authentication (server only).
//
// HR signs in with three secrets configured on the Worker:
//   HR_DASHBOARD_EMAIL         login email
//   HR_DASHBOARD_SECURITY_KEY  security key
//   HR_DASHBOARD_PASSWORD      password
//   HR_DASHBOARD_SESSION_SECRET  random string (32+ chars) used to sign the session cookie
//
// The session is a signed, HttpOnly cookie (no session table). Changing the password or the
// session secret signs everyone out.
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export const SESSION_COOKIE = "hadron_hr_session";
const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

interface HrConfig {
  email: string;
  securityKey: string;
  password: string;
  sessionSecret: string;
}

export function getHrConfig(): HrConfig | null {
  const email = process.env.HR_DASHBOARD_EMAIL?.trim();
  const securityKey = process.env.HR_DASHBOARD_SECURITY_KEY;
  const password = process.env.HR_DASHBOARD_PASSWORD;
  const sessionSecret = process.env.HR_DASHBOARD_SESSION_SECRET;
  if (!email || !securityKey || !password || !sessionSecret || sessionSecret.length < 32) return null;
  return { email, securityKey, password, sessionSecret };
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

export async function checkCredentials(email: string, securityKey: string, password: string): Promise<boolean> {
  const cfg = getHrConfig();
  if (!cfg) return false;
  // Evaluate all three so timing doesn't reveal which one was wrong
  const results = await Promise.all([
    safeEqual(email.trim().toLowerCase(), cfg.email.toLowerCase(), cfg.sessionSecret),
    safeEqual(securityKey, cfg.securityKey, cfg.sessionSecret),
    safeEqual(password, cfg.password, cfg.sessionSecret),
  ]);
  return results.every(Boolean);
}

// The signing key includes the password, so a password change invalidates existing sessions
const signingKey = (cfg: HrConfig) => `${cfg.sessionSecret}:${cfg.password}:${cfg.securityKey}`;

export async function createSessionToken(email: string): Promise<{ token: string; maxAge: number }> {
  const cfg = getHrConfig();
  if (!cfg) throw new Error("HR dashboard is not configured");
  const payload = b64url(enc.encode(JSON.stringify({ e: email, x: Date.now() + SESSION_TTL_MS })));
  const sig = b64url(await hmac(signingKey(cfg), payload));
  return { token: `${payload}.${sig}`, maxAge: SESSION_TTL_MS / 1000 };
}

export async function verifySessionToken(token: string | undefined): Promise<{ email: string } | null> {
  const cfg = getHrConfig();
  if (!cfg || !token) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  try {
    const expected = await hmac(signingKey(cfg), payload);
    if (!equalBytes(expected, fromB64url(sig))) return null;
    const data = JSON.parse(new TextDecoder().decode(fromB64url(payload))) as { e?: string; x?: number };
    if (!data.e || !data.x || data.x < Date.now()) return null;
    if (data.e.toLowerCase() !== cfg.email.toLowerCase()) return null;
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
