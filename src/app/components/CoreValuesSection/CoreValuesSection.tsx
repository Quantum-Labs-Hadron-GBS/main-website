"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./CoreValuesSection.module.css";
import SimpleCardSwap, { Card } from "../SimpleCardSwap/SimpleCardSwap";

const VALUES = [
  { title: "Predictive", desc: "We anticipate platform risks, technology shifts, and organizational needs before they become problems." },
  { title: "Proactive", desc: "We identify improvement opportunities and surface them to clients without waiting to be asked." },
  { title: "Progressive", desc: "We continually expand our capabilities from ITSM to GenAI to keep clients at the forefront." },
  { title: "Perfection", desc: "We hold ourselves to the highest standards of quality, craftsmanship, and engineering discipline." }
];

export default function CoreValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolledIn = -rect.top;
      const scrollable = rect.height - window.innerHeight;
      
      if (scrollable <= 0) return;
      
      const progress = Math.max(0, Math.min(1, scrolledIn / scrollable));
      const idx = Math.min(VALUES.length - 1, Math.floor(progress * VALUES.length));
      
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionHeight = (VALUES.length + 1) * 100;

  const handleSkip = () => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const targetY = window.scrollY + rect.bottom;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      className={styles.section} 
      style={{ height: `${sectionHeight}vh` }}
      id="core-values"
    >
      <div className={styles.sticky}>
        <div className={`${styles.inner} container`}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.tag}>Mission & Vision</span>
            <h2 className={styles.title}>The 4 Ps of Hadron</h2>
            <p className={styles.subtitle}>
              Our core values form the foundation of how we operate, deliver, and partner with our clients.
            </p>
          </motion.div>

          <div style={{ height: '450px', position: 'relative', marginTop: '1.5rem' }}>
            <SimpleCardSwap
              cardDistance={60}
              verticalDistance={30}
              activeIndex={activeIndex}
            >
            {VALUES.map((value, i) => (
              <Card key={i}>
                <div className={styles.cardIcon}>P</div>
                <h3 className={styles.cardTitle}>{value.title}</h3>
                <p className={styles.cardDesc}>{value.desc}</p>
              </Card>
            ))}
            </SimpleCardSwap>
          </div>
        </div>

        <button onClick={handleSkip} className={styles.skipButton} aria-label="Skip section">
          Skip
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
