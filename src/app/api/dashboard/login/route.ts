import { NextRequest, NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  checkPassword,
  clientKey,
  createSessionToken,
  getHrConfig,
  isSameOrigin,
  sessionCookieOptions,
} from "@/lib/careers/auth";
import { clearLoginFailures, loginLockRemaining, recordLoginFailure } from "@/lib/careers/db";

export const dynamic = "force-dynamic";

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
  const password = typeof body.password === "string" ? body.password.slice(0, 500) : "";
  if (!email || !password) {
    return NextResponse.json({ error: "Enter your email and password." }, { status: 400 });
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

  if (!(await checkPassword(email, password))) {
    await recordLoginFailure(key).catch(() => {});
    return NextResponse.json(
      { error: "That email and password don't match. First time signing in? Use your security key to set a password." },
      { status: 401 }
    );
  }

  await clearLoginFailures(key).catch(() => {});
  const { token, maxAge } = await createSessionToken(email.trim().toLowerCase());
  const res = NextResponse.json({ success: true });
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions(maxAge));
  return res;
}
