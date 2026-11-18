"use client";

import { useEffect, useRef, useState } from "react";
import { LinkBubble, TypingBubble } from "../ChatBubble/ChatBubble";
import styles from "./LatestJobToast.module.css";

const AVATAR = "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324497/favicon-hadron_g5wrvr.png";
const SEEN_KEY = "hgbs-latest-job-toast";
const START_DELAY = 2500; // let the hero settle first
const TYPING_MS = 900;
const VISIBLE_MS = 4000;

type Phase = "hidden" | "typing" | "message" | "leaving";

/**
 * Home page: a chat-style message slides in bottom-right, says "Explore latest job post",
 * stays ~4 s (paused while hovered) and leaves. Shown once per browser session, and only
 * when there is at least one open role.
 */
export default function LatestJobToast() {
  const [phase, setPhase] = useState<Phase>("hidden");
  const [latest, setLatest] = useState("");
  const hovering = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      // storage blocked: still show it
    }
    let cancelled = false;
    const later = (fn: () => void, ms: number) => timers.current.push(setTimeout(fn, ms));

    fetch("/api/jobs")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        const job = Array.isArray(d?.jobs) ? d.jobs[0] : null;
        if (cancelled || !job?.title) return;
        setLatest(job.title);
        later(() => {
          setPhase("typing");
          try {
            sessionStorage.setItem(SEEN_KEY, "1");
          } catch {}
        }, START_DELAY);
        later(() => setPhase("message"), START_DELAY + TYPING_MS);
      })
      .catch(() => {});

    const all = timers.current;
    return () => {
      cancelled = true;
      all.forEach(clearTimeout);
    };
  }, []);

  // Auto-dismiss after the message has been visible for VISIBLE_MS (waits while hovered)
  useEffect(() => {
    if (phase !== "message") return;
    let t: ReturnType<typeof setTimeout>;
    const tryLeave = () => {
      if (hovering.current) t = setTimeout(tryLeave, 800);
      else setPhase("leaving");
    };
    t = setTimeout(tryLeave, VISIBLE_MS);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "leaving") return;
    const t = setTimeout(() => setPhase("hidden"), 450);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      className={`${styles.toast} ${phase === "leaving" ? styles.leaving : ""}`}
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
      onFocus={() => (hovering.current = true)}
      onBlur={() => (hovering.current = false)}
    >
      <div className={styles.stack}>
        <span className={styles.sender}>Hadron Careers · now</span>
        {phase === "typing" ? (
          <TypingBubble side="right" />
        ) : (
          <div className={styles.pop}>
            <LinkBubble href="/careers/explore-jobs" side="right" onClick={() => setPhase("hidden")}>
              <span className={styles.text}>Explore latest job post</span>
              {latest && <span className={styles.sub}>{latest}</span>}
            </LinkBubble>
          </div>
        )}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={AVATAR} alt="" className={styles.avatar} />
    </div>
  );
}
