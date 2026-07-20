"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AssetsOfExcellenceSection.module.css";

const ASSETS = [
  {
    tab: "Experience and Expertise",
    tagline: "Leading Business through expertise",
    title: "Our Assets Of Excellence",
    body: "We have a team of experienced and skilled professionals who have worked with a diverse range of clients across different industries. We understand the unique challenges and requirements of each business and can provide customized solutions to meet their needs. Our team stays updated with the latest tech trends and tools to stay ahead in the game.",
  },
  {
    tab: "Focus on Quality Delivery",
    tagline: "Delivering exceptional results",
    title: "Uncompromising Quality",
    body: "We understand that quality is as important as timeliness for any business. Our team ensures that the solutions we deliver are of the highest quality and meet your expectations. Our processes are designed to deliver solutions that are not only efficient and effective but also reliable and scalable.",
  },
  {
    tab: "Cost-effective Solutions",
    tagline: "Smart investment for your business",
    title: "Maximum Value, Optimal Cost",
    body: "We offer cost-effective solutions that meet your budget requirements. We work closely with our clients to understand their project scope and budget, and provide them with customized solutions that are efficient and cost-effective. We believe in building long-term relationships with our clients and strive to add value to their businesses.",
  },
  {
    tab: "Personalized Approach",
    tagline: "Solutions tailored to your unique needs",
    title: "Tailored to Your Success",
    body: "We take a personalized approach to every project and work closely with our clients to understand their specific needs and requirements. Our team believes in open communication, transparency, and collaboration to ensure that every project is successfully delivered on time and within budget.",
  },
];

const contentVariants = {
  enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 30 : -30 }),
  center: { opacity: 1, y: 0 },
  exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -30 : 30 }),
};

export default function AssetsOfExcellenceSection() {
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
      const idx = Math.min(ASSETS.length - 1, Math.floor(progress * ASSETS.length));
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

  const sectionHeight = (ASSETS.length + 1) * 100;
  const currentAsset = ASSETS[activeIndex] || ASSETS[0];

  return (
    <div
      ref={sectionRef}
      className={styles.section}
      style={{ height: `${sectionHeight}vh` }}
    >
      <div className={styles.sticky}>
        <div className="container">
          
          {/* Top Tabs */}
          <div className={styles.tabsContainer}>
            {ASSETS.map((asset, i) => (
              <div
                key={asset.tab}
                className={`${styles.tab} ${i === activeIndex ? styles.activeTab : ""}`}
              >
                {asset.tab}
                {i === activeIndex && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className={styles.activeUnderline}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className={styles.tabDivider} />

          {/* Content Area */}
          <div className={styles.contentArea}>
            {/* Left Image */}
            <div className={styles.imageColumn}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imagePlaceholderText}>Image Placeholder</span>
              </div>
            </div>

            {/* Right Text */}
            <div className={styles.textColumn}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.textBlock}
                >
                  <span className={styles.tagline}>{currentAsset.tagline}</span>
                  <h2 className={styles.title}>{currentAsset.title}</h2>
                  <p className={styles.body}>{currentAsset.body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
