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
  const prevRef = useRef(0);
  const isScrollingRef = useRef(false);

  const handleScrollTo = (idx: number) => {
    if (!sectionRef.current || isScrollingRef.current) return;
    const el = sectionRef.current;
    const rect = el.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const targetScrollY = window.scrollY + rect.top + (scrollable / (ITEMS.length - 1)) * idx;
    
    isScrollingRef.current = true;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect       = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const prog = Math.max(0, Math.min(1, -rect.top / scrollable));
      const idx  = Math.min(ITEMS.length - 1, Math.floor(prog * ITEMS.length));
      if (idx !== prevRef.current) {
        setDirection(idx > prevRef.current ? 1 : -1);
        prevRef.current = idx;
        setActiveIndex(idx);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (activeIndex < ITEMS.length - 1) {
            handleScrollTo(activeIndex + 1);
          } else {
            window.scrollTo({ top: window.scrollY + rect.bottom, behavior: 'smooth' });
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (activeIndex > 0) {
            handleScrollTo(activeIndex - 1);
          } else {
            window.scrollTo({ top: window.scrollY + rect.top - 100, behavior: 'smooth' });
          }
        }
      }
    };

    // Auto-advance every 2 seconds
    const interval = setInterval(() => {
      const el = sectionRef.current;
      if (!el || isScrollingRef.current) return;
      const rect = el.getBoundingClientRect();
      
      // If we are currently "sticky" inside the section
      if (rect.top <= 10 && rect.bottom >= window.innerHeight - 10) {
        if (activeIndex < ITEMS.length - 1) {
          handleScrollTo(activeIndex + 1);
        } else {
          // After 1 whole round is finished by itself we can scroll to next section
          window.scrollTo({ top: window.scrollY + rect.bottom, behavior: 'smooth' });
        }
      }
    }, 2000);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    onScroll();
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [activeIndex]);

  const sectionHeight = (ITEMS.length + 1) * 100;
  const currentItem = ITEMS[activeIndex] || ITEMS[0];

  return (
    /*
      id="language-section" — GlobalGlobe reads this via document.getElementById
      to determine when to switch from hero-horizon state to language-zoom state.
    */
    <div
      ref={sectionRef}
      id="language-section"
      className={styles.section}
      style={{ height: `${sectionHeight}vh` }}
      aria-label="VOXITY language support"
    >
      <div className={styles.sticky}>
        <div className={styles.eyebrow}>
          <span className="section-tag">Global Presence</span>
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
                transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
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
                      transition={{ duration: 0.35, delay: 0.15 }}
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
              className={styles.dot}
              animate={{
                background: i === activeIndex ? "var(--accent)" : "var(--border-strong)",
                scale:      i === activeIndex ? 1.5 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        {/* Manual Navigation Controls for accessibility */}
        <div className={styles.navControls}>
          <button 
            className={styles.navButton} 
            onClick={() => handleScrollTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous location"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
          <button 
            className={styles.navButton} 
            onClick={() => handleScrollTo(activeIndex + 1)}
            disabled={activeIndex === ITEMS.length - 1}
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
