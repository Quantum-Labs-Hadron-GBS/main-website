"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

export default function ShareButton({ title, className, tipClassName }: { title: string; className?: string; tipClassName?: string }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = window.location.href.split("?")[0];
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (err) {
        if ((err as Error)?.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link:", url);
    }
  };

  return (
    <button type="button" className={className} onClick={share} aria-label="Share this job" title="Share this job">
      <Share2 size={34} strokeWidth={1.6} />
      {copied && <span className={tipClassName} role="status">Link copied</span>}
    </button>
  );
}
