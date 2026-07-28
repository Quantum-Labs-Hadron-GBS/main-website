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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % ASSETS.length;
        setDirection(1);
        return next;
      });
    }, 5000); // 5 seconds loop

    return () => clearInterval(interval);
  }, [activeIndex]);

  const currentAsset = ASSETS[activeIndex] || ASSETS[0];

  return (
    <div
      ref={sectionRef}
      className={styles.section}
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <div className={styles.contentWrapper} style={{ width: '100%', padding: '6rem 0' }}>
        <div className="container">
          
          {/* Top Tabs */}
          <div className={styles.tabsContainer}>
            {ASSETS.map((asset, i) => (
              <div
                key={asset.tab}
                className={`${styles.tab} ${i === activeIndex ? styles.activeTab : ""}`}
                onClick={() => { setActiveIndex(i); setDirection(i > activeIndex ? 1 : -1); }}
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
          <div className={`glass-card ${styles.contentArea}`}>
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

          {/* Circular Timer Controls */}
          <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', zIndex: 100, pointerEvents: 'auto' }}>
            {ASSETS.map((_, i) => (
              <button 
                key={i}
                onClick={() => { setActiveIndex(i); setDirection(i > activeIndex ? 1 : -1); }}
                style={{
                  position: 'relative', width: '32px', height: '32px', borderRadius: '50%',
                  background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', padding: 0
                }}
                aria-label={`Go to asset ${i + 1}`}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
                  <circle cx="16" cy="16" r="14" fill="none" stroke="var(--border-strong)" strokeWidth="2" />
                  {i === activeIndex && (
                    <motion.circle 
                      cx="16" cy="16" r="14" fill="none" stroke="var(--blue)" strokeWidth="2"
                      strokeDasharray="88"
                      strokeDashoffset="88"
                      initial={{ strokeDashoffset: 88 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 5, ease: "linear" }}
                      key={`timer-${activeIndex}`}
                    />
                  )}
                </svg>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === activeIndex ? 'var(--blue)' : 'var(--fg-subtle)' }} />
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
