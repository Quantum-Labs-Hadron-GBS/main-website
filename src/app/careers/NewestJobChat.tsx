"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { LinkBubble, TypingBubble } from "../components/ChatBubble/ChatBubble";
import { jobHref, postedAgo } from "@/lib/careers/types";
import styles from "./NewestJobChat.module.css";

const AVATAR = "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324497/favicon-hadron_g5wrvr.png";

interface NewestJob {
  jobCode: string;
  title: string;
  location: string;
  createdAt: number;
}

/** "Hadron Careers" sends you the newest open role, iMessage style. */
export default function NewestJobChat() {
  const [job, setJob] = useState<NewestJob | null>(null);
  const [typing, setTyping] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    fetch("/api/jobs")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        const j = Array.isArray(d?.jobs) ? d.jobs[0] : null; // API lists open roles newest first
        if (j?.jobCode && j?.title) setJob(j);
      })
      .catch(() => {});
  }, []);

  // Short "typing…" moment once the message scrolls into view, then deliver it
  useEffect(() => {
    if (!job || !inView) return;
    const t = setTimeout(() => setTyping(false), 1100);
    return () => clearTimeout(t);
  }, [job, inView]);

  // The ref'd element must exist from the first render, or the in-view observer never attaches
  if (!job) return <div ref={ref} aria-hidden="true" />;

  return (
    <div ref={ref} className={styles.row}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={AVATAR} alt="" className={styles.avatar} />
      <div className={styles.stack}>
        <span className={styles.sender}>Hadron Careers</span>
        {typing ? (
          <div className={styles.pop}>
            <TypingBubble side="left" />
            {/* keeps the avatar aligned while typing */}
            <span className={styles.meta} style={{ visibility: "hidden" }} aria-hidden="true">.</span>
          </div>
        ) : (
          <div className={styles.pop}>
            <LinkBubble href={jobHref(job.jobCode)} side="left">
              <span className={styles.label}>Newest job posted</span>
              <span className={styles.title}>{job.title}</span>
              {job.location && <span className={styles.loc}>{job.location}</span>}
            </LinkBubble>
            <span className={styles.meta}>
              {postedAgo(job.createdAt).replace(/^Posted (\w)/, (_, c: string) => c.toUpperCase())} ·<span className={styles.metaLink}>Tap to view</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
