"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./TechSection.module.css";

const PIPELINE_STEPS = [
  {
    id: "itsm",
    label: "ITSM",
    full: "IT Service Management",
    desc: "Streamline IT operations and boost service delivery.",
    side: "user",
  },
  {
    id: "hrsd",
    label: "HRSD",
    full: "HR Service Delivery",
    desc: "Enhance employee experience and automate HR workflows.",
    side: "user",
  },
  {
    id: "operations",
    label: "Operations",
    full: "Operation Management",
    desc: "Powering the Universe of Enterprise Service Management.",
    side: "center",
    accent: true,
  },
  {
    id: "ai",
    label: "GenAI",
    full: "AI & Automation",
    desc: "Leveraging cutting-edge technology for digital transformation.",
    side: "ai",
  },
  {
    id: "consulting",
    label: "Consulting",
    full: "End-to-End Solutions",
    desc: "Comprehensive solutions that empower your business.",
    side: "ai",
  },
];

const FEATURES = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    title: "Mission",
    body: "Provide our customers with the very best in consulting services. We are committed to delivering exceptional results by tailoring our approach.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    title: "Vision",
    body: "The future will be internet-based, and we employ a strategy that enables us to achieve successful results by instantly interacting with our audience.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13"/><path d="M13 3l3 6-4 13"/></svg>,
    title: "Values",
    body: "Dedication to guaranteeing the happiness of both customers and employees, business ethics, and ongoing efforts to advance a healthy environment.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Partnership",
    body: "True success in this domain lies not just in implementing solutions but in understanding the unique needs and challenges of each organization.",
  },
];

function PipelineNode({
  step,
  delay,
}: {
  step: (typeof PIPELINE_STEPS)[number];
  delay: number;
}) {
  return (
    <motion.div
      className={`${styles.node} ${step.accent ? styles.nodeAccent : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      <span className={styles.nodeLabel}>{step.label}</span>
      <span className={styles.nodeFull}>{step.full}</span>
    </motion.div>
  );
}

export default function TechSection() {
  const waveRef = useRef<HTMLDivElement>(null);
  const inView = useInView(waveRef, { once: false, margin: "-100px" });

  return (
    <section className={styles.section} id="tech" aria-label="Technology">
      <div className={`${styles.inner} container`}>
        {/* Header */}
        <div className={styles.header}>
          <span className="section-tag">About Our Company!</span>
          <h2 className={styles.title}>
            Powering the Universe of <br />
            <span className={styles.titleAccent}>Enterprise Service Management.</span>
          </h2>
          <p className={styles.subtitle}>
            At Hadron GBS, we believe in harnessing the immense power of the universe’s fundamental forces and translating it into the very essence of our business.
          </p>
        </div>

        {/* Pipeline diagram */}
        <div className={styles.pipeline} ref={waveRef}>
          {/* User side label */}
          <div className={styles.sideLabel}>
            <span className={styles.sideDot} />
            Organization
          </div>

          {/* Pipeline row */}
          <div className={styles.pipelineRow}>
            {PIPELINE_STEPS.map((step, i) => (
              <div key={step.id} className={styles.pipelineItem}>
                <PipelineNode step={step} delay={i * 0.1} />
                {i < PIPELINE_STEPS.length - 1 && (
                  <motion.div
                    className={styles.connector}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* AI side label */}
          <div className={`${styles.sideLabel} ${styles.sideLabelRight}`}>
            <span className={`${styles.sideDot} ${styles.sideDotAccent}`} />
            Hadron GBS
          </div>

          {/* Interruption band */}
          <motion.div
            className={styles.interruptBand}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className={styles.interruptLabel}>
              ⟳ One-stop destination for all your Enterprise Service Management needs
            </span>
          </motion.div>
        </div>

        {/* Feature grid */}
        <div className={styles.featureGrid}>
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className={styles.featureIcon}>{f.icon}</span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureBody}>{f.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className={styles.quote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.quoteText}>
            &quot;We are more than just a service provider. We are a partner on your journey towards enhanced efficiency, better customer experiences, and a stronger IT infrastructure.&quot;
          </span>
        </motion.blockquote>
      </div>
    </section>
  );
}
