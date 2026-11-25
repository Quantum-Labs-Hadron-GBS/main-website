import { NextRequest, NextResponse } from "next/server";
import {
  MIN_PASSWORD_LENGTH,
  SESSION_COOKIE,
  clientKey,
  createSessionToken,
  getHrConfig,
  isSameOrigin,
  sessionCookieOptions,
  setPasswordWithSecurityKey,
} from "@/lib/careers/auth";
import { clearLoginFailures, loginLockRemaining, recordLoginFailure } from "@/lib/careers/db";

export const dynamic = "force-dynamic";

// One-time first sign-in: email + security key, then HR chooses their own password.
export async function POST(req: NextRequest) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  if (!getHrConfig()) {
    console.error("[hr] HR_DASHBOARD_* secrets are not configured");
    return NextResponse.json({ error: "The HR dashboard is not configured yet." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const email = typeof body.email === "string" ? body.email.slice(0, 200) : "";
  const securityKey = typeof body.securityKey === "string" ? body.securityKey.slice(0, 500) : "";
  const newPassword = typeof body.newPassword === "string" ? body.newPassword.slice(0, 500) : "";
  if (!email || !securityKey || !newPassword) {
    return NextResponse.json({ error: "Enter your email, security key and a new password." }, { status: 400 });
  }
  if (newPassword.length < MIN_PASSWORD_LENGTH) {
    return NextResponse.json(
      { error: `Choose a password with at least ${MIN_PASSWORD_LENGTH} characters.` },
      { status: 400 }
    );
  }

  const key = `login:${clientKey(req)}`;
  try {
    const wait = await loginLockRemaining(key);
    if (wait > 0) {
      const mins = Math.ceil(wait / 60000);
      return NextResponse.json(
        { error: `Too many failed attempts. Try again in ${mins} minute${mins > 1 ? "s" : ""}.` },
        { status: 429 }
      );
    }
  } catch (err) {
    console.error("[hr] Login throttle unavailable:", err);
    return NextResponse.json({ error: "The dashboard database is unavailable. Try again shortly." }, { status: 503 });
  }

  const result = await setPasswordWithSecurityKey(email, securityKey, newPassword);
  if (result === "invalid") {
    await recordLoginFailure(key).catch(() => {});
    return NextResponse.json({ error: "That email and security key don't match." }, { status: 401 });
  }
  if (result === "used") {
    return NextResponse.json(
      { error: "This security key has already been used to set a password. Sign in with your password instead." },
      { status: 409 }
    );
  }

  await clearLoginFailures(key).catch(() => {});
  const { token, maxAge } = await createSessionToken(email.trim().toLowerCase());
  const res = NextResponse.json({ success: true });
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions(maxAge));
  return res;
}
