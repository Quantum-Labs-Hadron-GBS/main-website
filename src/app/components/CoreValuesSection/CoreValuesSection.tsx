"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./CoreValuesSection.module.css";
import SimpleCardSwap, { Card } from "../SimpleCardSwap/SimpleCardSwap";

const VALUES = [
  { title: "Predictive", desc: "We anticipate platform risks, technology shifts, and organizational needs before they become problems. By leveraging AI-driven analytics, we forecast IT demands and mitigate bottlenecks proactively." },
  { title: "Proactive", desc: "We identify improvement opportunities and surface them to clients without waiting to be asked. Our teams continuously audit your infrastructure to ensure zero downtime and optimal performance." },
  { title: "Progressive", desc: "We continually expand our capabilities from ITSM to GenAI to keep clients at the forefront. Innovation is in our DNA, ensuring your enterprise scales with the latest technological breakthroughs." },
  { title: "Perfection", desc: "We hold ourselves to the highest standards of quality, craftsmanship, and engineering discipline. Every line of code, infrastructure deployment, and architectural decision is meticulously reviewed." }
];

export default function CoreValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % VALUES.length);
    }, 5000); // 5 seconds loop

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section 
      ref={sectionRef}
      className={styles.section} 
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      id="core-values"
    >
      <div className={styles.contentWrapper} style={{ width: '100%', padding: '6rem 0' }}>
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

          <div style={{ height: '460px', position: 'relative', marginTop: '1.5rem' }}>
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

          <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 100, pointerEvents: 'auto' }}>
            {VALUES.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  position: 'relative', width: '32px', height: '32px', borderRadius: '50%',
                  background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', padding: 0
                }}
                aria-label={`Go to value ${i + 1}`}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
                  <circle cx="16" cy="16" r="14" fill="none" stroke="var(--border-strong)" strokeWidth="2" />
                  {i === activeIndex && (
                    <motion.circle 
                      cx="16" cy="16" r="14" fill="none" stroke="var(--accent)" strokeWidth="2"
                      strokeDasharray="88"
                      strokeDashoffset="88"
                      initial={{ strokeDashoffset: 88 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 5, ease: "linear" }}
                      key={`timer-${activeIndex}`}
                    />
                  )}
                </svg>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === activeIndex ? 'var(--accent)' : 'var(--fg-subtle)' }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
