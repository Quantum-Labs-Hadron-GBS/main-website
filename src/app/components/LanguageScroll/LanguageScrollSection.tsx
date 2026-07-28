"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LanguageScrollSection.module.css";

const ITEMS = [
  { text: "Pune, India", sub: "Global Delivery Center & Headquarters. Our primary hub for enterprise software development, offering unparalleled IT service management and dedicated development teams.", region: "Pune, India" },
  { text: "Singapore", sub: "Gateway to APAC & Southeast Asia. Delivering cutting-edge cloud architecture, automation approaches, and digital transformation strategies to the region.", region: "Singapore" },
  { text: "Dubai, UAE", sub: "Serving the Middle East & Africa. Providing tailored CRM implementations, ServiceNow excellence, and agile methodologies for rapidly growing enterprises.", region: "Dubai, UAE" },
  { text: "Dover, USA", sub: "Connecting with North American enterprises. Driving innovation through DevOps, Robotic Process Automation (RPA), and comprehensive end-to-end consulting.", region: "Dover, USA" },
];

const textVariants = {
  enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 70 : -70, filter: "blur(8px)" }),
  center: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit:  (dir: number) => ({ opacity: 0, y: dir > 0 ? -70 : 70, filter: "blur(8px)" }),
};

const regionVariants = {
  enter: { opacity: 0, x: -14 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 14 },
};

export default function LanguageScrollSection() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction,   setDirection]   = useState(1);
  const handlePrev = () => {
    setActiveIndex((current) => {
      const next = current === 0 ? ITEMS.length - 1 : current - 1;
      setDirection(-1);
      return next;
    });
  };

  const handleNext = () => {
    setActiveIndex((current) => {
      const next = (current + 1) % ITEMS.length;
      setDirection(1);
      return next;
    });
  };

  useEffect(() => {
    // Auto-advance every 4 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const currentItem = ITEMS[activeIndex] || ITEMS[0];

  return (
    /*
      id="language-section" — GlobalGlobe reads this via document.getElementById
      to determine when to switch from hero-horizon state to language-zoom state.
    */
    <div
      ref={sectionRef}
      id="language-section"
      data-active-index={activeIndex}
      className={styles.section}
      
      aria-label="VOXITY language support"
    >
      <div className={styles.sticky} >
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowTag}>Global Presence</span>
        </div>

        {/* Text sits on the LEFT — GlobalGlobe renders the globe on the RIGHT via fixed canvas */}
        <div className={styles.textArea}>
          <div className={styles.stage}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={styles.textBlock}
              >
                <span className={styles.mainText}>{currentItem.text}</span>
                <span className={styles.subText}>{currentItem.sub}</span>

                <AnimatePresence mode="wait">
                  {currentItem.region && (
                    <motion.div
                      key={`r-${activeIndex}`}
                      variants={regionVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className={styles.regionTag}
                    >
                      <span className={styles.regionDot} />
                      <span>{currentItem.region}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress dots */}
        <div className={styles.dots} aria-hidden="true">
          {ITEMS.map((_, i) => (
            <motion.div
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
              animate={{ 
                scale: i === activeIndex ? 1.5 : 1,
                opacity: i === activeIndex ? 1 : 0.4
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
          ))}
        </div>

        {/* Manual Navigation Controls for accessibility */}
        <div className={styles.navControls}>
          <button 
            className={styles.navButton} 
            onClick={handlePrev}
            aria-label="Previous location"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
          <button 
            className={styles.navButton} 
            onClick={handleNext}
            aria-label="Next location"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
