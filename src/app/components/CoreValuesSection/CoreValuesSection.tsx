"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import styles from "./CoreValuesSection.module.css";

const VALUES = [
  {
    p: "P1",
    title: "Predictive",
    desc: "We anticipate platform risks, technology shifts, and organizational needs before they become problems. Leveraging AI-driven analytics, we forecast IT demands and mitigate bottlenecks proactively.",
    gradientFrom: "#F47C36",
    gradientTo: "#ea580c",
  },
  {
    p: "P2",
    title: "Proactive",
    desc: "We identify improvement opportunities and surface them to clients without waiting to be asked. Our teams continuously audit your infrastructure to ensure zero downtime and optimal performance.",
    gradientFrom: "#00529B",
    gradientTo: "#1e3a8a",
  },
  {
    p: "P3",
    title: "Progressive",
    desc: "We continually expand our capabilities from ITSM to GenAI to keep clients at the forefront. Innovation is in our DNA, ensuring your enterprise scales with the latest technological breakthroughs.",
    gradientFrom: "#FF9A5A",
    gradientTo: "#F47C36",
  },
  {
    p: "P4",
    title: "Perfection",
    desc: "We hold ourselves to the highest standards of quality, craftsmanship, and engineering discipline. Every deployment and architectural decision is meticulously reviewed.",
    gradientFrom: "#0ea5e9",
    gradientTo: "#00529B",
  },
];

// All cards on the same baseline
const Y_OFFSETS = ["0px", "0px", "0px", "0px"];

export default function CoreValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="core-values"
    >
      {/* ── Header ── */}
      <div className={`${styles.headerWrapper} container`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tag}>Mission &amp; Vision</span>
          <h2 className={styles.title}>The 4 Ps of Hadron</h2>
          <p className={styles.subtitle}>
            Our core values form the foundation of how we operate, deliver, and partner with our clients.
          </p>
        </motion.div>
      </div>

      {/* ── Cards ── */}
      <div className={styles.cardsRow}>
        {VALUES.map((card, idx) => (
          <motion.div
            key={card.title}
            className={styles.cardOuter}
            style={{ marginTop: Y_OFFSETS[idx] }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* Skewed gradient panel */}
            <span
              className={styles.panelSkew}
              style={{ background: `linear-gradient(315deg, ${card.gradientFrom}, ${card.gradientTo})` }}
            />
            {/* Blurred glow clone */}
            <span
              className={styles.panelGlow}
              style={{ background: `linear-gradient(315deg, ${card.gradientFrom}, ${card.gradientTo})` }}
            />

            {/* Floating blob corners */}
            <span className={styles.blobTL} />
            <span className={styles.blobBR} />

            {/* Content */}
            <div className={styles.cardContent}>
              <div
                className={styles.badge}
                style={{
                  color: card.gradientFrom,
                  borderColor: card.gradientFrom + "55",
                  background: card.gradientFrom + "18",
                }}
              >
                {card.p}
              </div>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
