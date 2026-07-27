"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FeatureScrollSection.module.css";
import MatrixGraphic from "./MatrixGraphic";

const FEATURES = [
  {
    digit: "1",
    title: "Salesforce",
    subtitle: "Tailored CRM implementations",
    body: "Our CRM implementation services are specifically tailored to meet your business needs. We offer a range of services that include design, integration, and management of Salesforce solutions.",
  },
  {
    digit: "2",
    title: "DevOps",
    subtitle: "Faster application releases",
    body: "Agile Methodology and DevOps are the two sides of the same coin. Together, these two concepts can help you achieve faster application releases with improved build quality.",
  },
  {
    digit: "3",
    title: "IT Service Management",
    subtitle: "Enterprise Services Management",
    body: "Our Enterprise Services Management (ESM) consulting services help you transform your organization into one that can meet future challenges and requirements.",
  },
  {
    digit: "4",
    title: "IT Operations Management",
    subtitle: "Solution-agnostic approach",
    body: "With ITOM Consulting, we enable IT operations and management teams to simplify data collection and processing by providing a solution-agnostic approach.",
  },
  {
    digit: "5",
    title: "Robotic Process Automation (RPA)",
    subtitle: "Realigning processes with automation",
    body: "We help customers realigning the process with the correct automation approach by providing the right methodologies, tools, products, and services.",
  },
];

/* Content fade variants */
const contentVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? 32 : -32,
  }),
  center: { opacity: 1, y: 0 },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? -32 : 32,
  }),
};

export default function FeatureScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const handlePrev = () => {
    setActiveIndex((current) => {
      const next = current === 0 ? FEATURES.length - 1 : current - 1;
      setDirection(-1);
      return next;
    });
  };

  const handleNext = () => {
    setActiveIndex((current) => {
      const next = (current + 1) % FEATURES.length;
      setDirection(1);
      return next;
    });
  };

  useEffect(() => {
    // Auto-advance every 6 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <div
      ref={sectionRef}
      className={styles.section}
      id="product"
      aria-label="Product features"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <div className={styles.contentWrapper} style={{ width: '100%', padding: '6rem 0' }}>
        <div className={styles.inner}>

          {/* ── Section Header ── */}
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Our Capabilities</span>
            <h2 className={styles.sectionTitle}>Built for Enterprise Scale</h2>
          </div>

          {/* ── Content ── */}
          <div className={styles.contentCol} style={{ width: '100%' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`glass-card ${styles.contentBlock}`}
              >
                <div className={styles.contentLeft}>
                  <span className={styles.contentTag}>{FEATURES[activeIndex].subtitle}</span>
                  <h2 className={styles.contentTitle}>{FEATURES[activeIndex].title}</h2>
                  <p className={styles.contentBody}>{FEATURES[activeIndex].body}</p>
                </div>
                <div className={styles.contentRight}>
                  <div className={styles.imagePlaceholder}>
                    <MatrixGraphic activeIndex={activeIndex} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Circular Timer Controls */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', zIndex: 100, pointerEvents: 'auto' }}>
          {FEATURES.map((_, i) => (
            <button 
              key={i}
              onClick={() => { setActiveIndex(i); setDirection(i > activeIndex ? 1 : -1); }}
              style={{
                position: 'relative', width: '32px', height: '32px', borderRadius: '50%',
                background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center', padding: 0
              }}
              aria-label={`Go to feature ${i + 1}`}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
                <circle cx="16" cy="16" r="14" fill="none" stroke="var(--border-strong)" strokeWidth="2" />
                {i === activeIndex && (
                  <motion.circle 
                    cx="16" cy="16" r="14" fill="none" stroke="var(--accent)" strokeWidth="2"
                    strokeDasharray="88" // 2 * pi * r (14) ~= 88
                    strokeDashoffset="88"
                    initial={{ strokeDashoffset: 88 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 6, ease: "linear" }}
                    key={`timer-${activeIndex}`} // force re-animation when activeIndex changes
                  />
                )}
              </svg>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === activeIndex ? 'var(--accent)' : 'var(--fg-subtle)' }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
