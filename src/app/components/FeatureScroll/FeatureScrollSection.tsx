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

/* Slot-machine digit variants */
const digitVariants = {
  enter: (dir: number) => ({ y: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { y: "0%", opacity: 1 },
  exit: (dir: number) => ({ y: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

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
  const prevRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolledIn = -rect.top;
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, scrolledIn / scrollable));
      const idx = Math.min(FEATURES.length - 1, Math.floor(progress * FEATURES.length));
      if (idx !== prevRef.current) {
        setDirection(idx > prevRef.current ? 1 : -1);
        prevRef.current = idx;
        setActiveIndex(idx);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionHeight = (FEATURES.length + 1) * 100;

  return (
    <div
      ref={sectionRef}
      className={styles.section}
      style={{ height: `${sectionHeight}vh` }}
      id="product"
      aria-label="Product features"
    >
      <div className={styles.sticky}>
        <div className={styles.inner}>

          {/* ── LEFT: Number ticker ── */}
          <div className={styles.numberCol} aria-hidden="true">
            {/* Static "0" — the tens-place, never moves */}
            <span className={styles.staticZero}>0</span>

            {/* Animated slot — units digit slides up/down */}
            <div className={styles.slotMask}>
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.span
                  key={activeIndex}
                  custom={direction}
                  variants={digitVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.slotDigit}
                >
                  {FEATURES[activeIndex].digit}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* ── DIVIDER ── */}
          <div className={styles.divider} aria-hidden="true">
            <div className={styles.dividerLine} />
          </div>

          {/* ── RIGHT: Content ── */}
          <div className={styles.contentCol}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={styles.contentBlock}
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

        {/* Progress track on the left edge */}
        <div className={styles.progressTrack} aria-hidden="true">
          {FEATURES.map((_, i) => (
            <div
              key={i}
              className={`${styles.trackItem} ${i === activeIndex ? styles.trackActive : ""} ${i < activeIndex ? styles.trackPast : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
