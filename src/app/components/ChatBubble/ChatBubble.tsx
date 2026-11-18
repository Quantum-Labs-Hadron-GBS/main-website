import React from "react";
import Link from "next/link";
import styles from "./ChatBubble.module.css";

/** iMessage-style tail, drawn as SVG so it blends on any background. */
function Tail({ side }: { side: "left" | "right" }) {
  return (
    <svg className={`${styles.tail} ${side === "left" ? styles.tailLeft : styles.tailRight}`} viewBox="0 0 17 21" aria-hidden="true">
      <path d="M0 21c3.6-.6 6-4.4 6-10.5V0h11v21z" />
    </svg>
  );
}

/** Three bouncing dots shown while the "message" is being typed. */
export function TypingBubble({ side = "left" }: { side?: "left" | "right" }) {
  return (
    <div className={`${styles.bubble} ${styles.typing}`} role="status" aria-label="Typing">
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
      <Tail side={side} />
    </div>
  );
}

/** A tappable chat bubble linking somewhere. */
export function LinkBubble({
  href,
  side = "left",
  children,
  className,
  onClick,
}: {
  href: string;
  side?: "left" | "right";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link href={href} className={`${styles.bubble} ${styles.linkBubble} ${className ?? ""}`} onClick={onClick}>
      {children}
      <Tail side={side} />
    </Link>
  );
}

export { styles as chatStyles };
