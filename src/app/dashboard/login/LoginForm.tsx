"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, KeyRound, Lock, Eye, EyeOff, ShieldCheck, Loader2, CircleAlert } from "lucide-react";
import styles from "../Dashboard.module.css";

const LOGO = "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324428/hadron_logo_white_wwzyij.png";

export default function LoginForm({ configured }: { configured: boolean }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [securityKey, setSecurityKey] = useState("");
  const [password, setPassword] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const res = await fetch("/api/dashboard/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, securityKey, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Sign-in failed. Try again.");
      router.replace("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign-in failed. Try again.");
      setBusy(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginGlow} aria-hidden="true" />
      <div className={styles.loginWrap}>
        <div className={styles.loginBrand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="Hadron GBS" className={styles.loginLogo} />
          <span className={styles.loginBrandTag}>Careers Dashboard</span>
        </div>

        <form className={styles.loginCard} onSubmit={submit}>
          <div className={styles.loginShield}><ShieldCheck size={26} /></div>
          <h1 className={styles.loginTitle}>HR sign in</h1>
          <p className={styles.loginSub}>Manage the job openings shown on the Hadron GBS careers page.</p>

          {!configured && (
            <div className={styles.alertWarn}>
              <CircleAlert size={18} />
              <span>Sign-in isn&apos;t set up yet. Add the HR_DASHBOARD_* secrets to the website&apos;s Cloudflare Worker.</span>
            </div>
          )}
          {error && (
            <div className={styles.alertError} role="alert">
              <CircleAlert size={18} />
              <span>{error}</span>
            </div>
          )}

          <label className={styles.loginField}>
            <span>Email address</span>
            <div className={styles.inputIcon}>
              <Mail size={18} />
              <input
                type="email"
                autoComplete="username"
                placeholder="hr@hadrongbs.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>
          </label>

          <label className={styles.loginField}>
            <span>Security key</span>
            <div className={styles.inputIcon}>
              <KeyRound size={18} />
              <input
                type={showKey ? "text" : "password"}
                autoComplete="off"
                placeholder="Enter your security key"
                value={securityKey}
                onChange={(e) => setSecurityKey(e.target.value)}
                required
              />
              <button type="button" className={styles.eyeBtn} onClick={() => setShowKey((v) => !v)} aria-label={showKey ? "Hide security key" : "Show security key"}>
                {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          <label className={styles.loginField}>
            <span>Password</span>
            <div className={styles.inputIcon}>
              <Lock size={18} />
              <input
                type={showPass ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" className={styles.eyeBtn} onClick={() => setShowPass((v) => !v)} aria-label={showPass ? "Hide password" : "Show password"}>
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          <button type="submit" className={styles.loginBtn} disabled={busy || !configured}>
            {busy ? <><Loader2 size={18} className={styles.spin} /> Signing in…</> : "Sign in"}
          </button>

          <p className={styles.loginFoot}>Authorised Hadron GBS HR staff only. Sessions expire after 8 hours.</p>
        </form>
      </div>
    </div>
  );
}
