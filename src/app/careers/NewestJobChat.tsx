"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { LinkBubble } from "../components/ChatBubble/ChatBubble";
import { jobHref } from "@/lib/careers/types";
import styles from "./NewestJobChat.module.css";

const AVATAR = "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324497/favicon-hadron_g5wrvr.png";

interface NewestJob {
  jobCode: string;
  title: string;
  location: string;
}

/** "Hadron Careers" sends the newest open role as a one-line chat message. */
export default function NewestJobChat() {
  const [job, setJob] = useState<NewestJob | null>(null);

  useEffect(() => {
    fetch("/api/jobs")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        const j = Array.isArray(d?.jobs) ? d.jobs[0] : null; // API lists open roles newest first
        if (j?.jobCode && j?.title) setJob(j);
      })
      .catch(() => {});
  }, []);

  if (!job) return null;

  return (
    <div className={styles.row}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={AVATAR} alt="" className={styles.avatar} />
      <div className={styles.stack}>
        <span className={styles.sender}>Hadron Careers</span>
        <LinkBubble href={jobHref(job.jobCode)} side="left" className={styles.wide}>
          <span className={styles.label}>Newest job posted</span>
          <span className={styles.sep} aria-hidden="true">–</span>
          <span className={styles.title}>{job.title}</span>
          {job.location && <span className={styles.loc}>{job.location}</span>}
          <ArrowRight size={18} className={styles.arrow} aria-hidden="true" />
        </LinkBubble>
      </div>
    </div>
  );
}
