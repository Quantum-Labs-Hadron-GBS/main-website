import React from "react";
import styles from "./JobDescription.module.css";

/**
 * Renders a job description typed in the HR dashboard. Light formatting, no HTML:
 *  - a blank line starts a new paragraph
 *  - a line ending with ":" (e.g. "Responsibilities:") or starting with "## " becomes a heading
 *  - lines starting with "-", "*", "•" or "1." become list items
 *  - **text** is bold
 */
type Block =
  | { kind: "h"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul" | "ol"; items: string[] };

function parse(src: string): Block[] {
  const blocks: Block[] = [];
  let para: string[] = [];
  const flush = () => {
    if (para.length) blocks.push({ kind: "p", text: para.join(" ") });
    para = [];
  };

  for (const raw of src.split("\n")) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    const bullet = line.match(/^[-*•]\s+(.*)$/);
    const numbered = line.match(/^\d+[.)]\s+(.*)$/);
    if (bullet || numbered) {
      flush();
      const kind = bullet ? "ul" : "ol";
      const text = (bullet ?? numbered)![1];
      const last = blocks[blocks.length - 1];
      if (last && last.kind === kind) last.items.push(text);
      else blocks.push({ kind, items: [text] });
      continue;
    }
    const heading = line.match(/^#{1,3}\s+(.*)$/);
    if (heading || (line.endsWith(":") && line.length <= 80)) {
      flush();
      blocks.push({ kind: "h", text: heading ? heading[1] : line.slice(0, -1) });
      continue;
    }
    para.push(line);
  }
  flush();
  return blocks;
}

function inline(text: string): React.ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") && part.length > 4 ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  );
}

export default function JobDescription({ text, compact = false, size }: { text: string; compact?: boolean; size?: "large" }) {
  const blocks = parse(text);
  return (
    <div className={`${styles.jd} ${compact ? styles.compact : ""} ${size === "large" ? styles.large : ""}`}>
      {blocks.map((b, i) => {
        if (b.kind === "h") return <h3 key={i} className={styles.heading}>{b.text}</h3>;
        if (b.kind === "p") return <p key={i} className={styles.para}>{inline(b.text)}</p>;
        const List = b.kind;
        return (
          <List key={i} className={b.kind === "ul" ? styles.list : styles.olist}>
            {b.items.map((it, j) => <li key={j}>{inline(it)}</li>)}
          </List>
        );
      })}
    </div>
  );
}

/** Plain-text summary for cards and meta descriptions. */
export function jdExcerpt(text: string, max = 180): string {
  const flat = text
    .split("\n")
    .map((l) => l.trim().replace(/^([-*•]|\d+[.)]|#{1,3})\s+/, "").replace(/\*\*/g, ""))
    .filter((l) => l && !(l.endsWith(":") && l.length <= 80))
    // Separate lines (e.g. bullet points) so they don't run together
    .map((l, i, all) => (i < all.length - 1 && !/[.!?;,]$/.test(l) ? `${l};` : l))
    .join(" ")
    .replace(/\s+/g, " ");
  return flat.length > max ? flat.slice(0, max).replace(/\s+\S*$/, "") + "…" : flat;
}
