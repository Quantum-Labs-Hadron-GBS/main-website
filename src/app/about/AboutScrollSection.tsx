"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AboutScroll.module.css";

const FEATURES = [
  {
    tab: "Our Mission",
    tagline: "Highly reputed Firm",
    title: "Mission",
    body: "Our mission is to provide our customers with the very best in consulting services. We are committed to delivering exceptional results by tailoring our approach to meet the unique needs and objectives of each client. Our team of experienced professionals brings a wealth of knowledge and expertise to every project, and we work closely with our clients to understand their challenges and goals. By listening, collaborating, and leveraging our skills and resources, we help our clients achieve their desired outcomes and take their businesses to the next level.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
  },
  {
    tab: "Our Vision",
    tagline: "Future-friendly solutions",
    title: "Vision",
    body: "To build lifelong valuable relationship with customer by becoming most preferred consulting partner. Hadron GBS believes that the future will be internet-based, and in order to develop future-friendly solutions, we employ a philosophy and strategy that enables us to achieve successful results by instantly interacting with our audience.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600"
  },
  {
    tab: "Our Value",
    tagline: "We adapt our delivery",
    title: "Value",
    body: "Our core values include a dedication to guaranteeing the happiness of both customers and employees, business ethics, and ongoing efforts to advance a healthy business environment. We integrate industry standards to assist our clients in realizing their full potential, get rid of communication issues, foster trust, and boost the effectiveness and productivity of your business unit. Our company was founded on five fundamental principles: mindset, honesty, transparency, quality, and professionalism. To tackle tough situations, we bring uniqueness and the right approach.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
  },
];

const contentVariants = {
  enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 30 : -30 }),
  center: { opacity: 1, y: 0 },
  exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -30 : 30 }),
};

export default function AboutScrollSection() {
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
  const currentAsset = FEATURES[activeIndex] || FEATURES[0];

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
            {FEATURES.map((asset, i) => (
              <div
                key={asset.tab}
                className={`${styles.tab} ${i === activeIndex ? styles.activeTab : ""}`}
              >
                {asset.tab}
                {i === activeIndex && (
                  <motion.div
                    layoutId="activeTabUnderlineAbout"
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
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.imagePlaceholder}
                  style={{ backgroundImage: `url(${currentAsset.img})`, backgroundSize: 'cover', backgroundPosition: 'center', border: 'none' }}
                >
                </motion.div>
              </AnimatePresence>
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
