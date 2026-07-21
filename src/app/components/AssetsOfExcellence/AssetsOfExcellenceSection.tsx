"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./AssetsOfExcellenceSection.module.css";

const ASSETS = [
  {
    tab: "Experience and Expertise",
    tagline: "Leading Business through expertise",
    title: "Our Assets Of Excellence",
    body: "We have a team of experienced and skilled professionals who have worked with a diverse range of clients across different industries. We understand the unique challenges and requirements of each business and can provide customized solutions to meet their needs. Our team stays updated with the latest tech trends and tools to stay ahead in the game.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    tab: "Focus on Quality Delivery",
    tagline: "Delivering exceptional results",
    title: "Uncompromising Quality",
    body: "We understand that quality is as important as timeliness for any business. Our team ensures that the solutions we deliver are of the highest quality and meet your expectations. Our processes are designed to deliver solutions that are not only efficient and effective but also reliable and scalable.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    tab: "Cost-effective Solutions",
    tagline: "Smart investment for your business",
    title: "Maximum Value, Optimal Cost",
    body: "We offer cost-effective solutions that meet your budget requirements. We work closely with our clients to understand their project scope and budget, and provide them with customized solutions that are efficient and cost-effective. We believe in building long-term relationships with our clients and strive to add value to their businesses.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    tab: "Personalized Approach",
    tagline: "Solutions tailored to your unique needs",
    title: "Tailored to Your Success",
    body: "We take a personalized approach to every project and work closely with our clients to understand their specific needs and requirements. Our team believes in open communication, transparency, and collaboration to ensure that every project is successfully delivered on time and within budget.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
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
  const isScrollingRef = useRef(false);

  const handleScrollTo = (idx: number) => {
    if (!sectionRef.current || isScrollingRef.current) return;
    const el = sectionRef.current;
    const rect = el.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const targetScrollY = window.scrollY + rect.top + (scrollable / (ASSETS.length - 1)) * idx;
    
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

    const handleKeyDown = (e: KeyboardEvent) => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      
      // Only hijack if the section is currently fully in view
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (activeIndex < ASSETS.length - 1) {
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
        if (activeIndex < ASSETS.length - 1) {
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
                onClick={() => handleScrollTo(i)}
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
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.imagePlaceholder}
                  style={{ position: 'relative', overflow: 'hidden', border: 'none', borderRadius: '16px' }}
                >
                  <Image 
                    src={currentAsset.img} 
                    alt={currentAsset.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    loading="lazy"
                  />
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

          {/* Manual Navigation Controls for accessibility */}
          <div className={styles.navControls}>
            <button 
              className={styles.navButton} 
              onClick={() => handleScrollTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous asset"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
            <button 
              className={styles.navButton} 
              onClick={() => handleScrollTo(activeIndex + 1)}
              disabled={activeIndex === ASSETS.length - 1}
              aria-label="Next asset"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
