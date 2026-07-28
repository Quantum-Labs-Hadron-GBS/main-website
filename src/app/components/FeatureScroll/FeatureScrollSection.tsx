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
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    digit: "2",
    title: "DevOps",
    subtitle: "Faster application releases",
    body: "Agile Methodology and DevOps are the two sides of the same coin. Together, these two concepts can help you achieve faster application releases with improved build quality.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    digit: "3",
    title: "IT Service Management",
    subtitle: "Enterprise Services Management",
    body: "Our Enterprise Services Management (ESM) consulting services help you transform your organization into one that can meet future challenges and requirements.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    digit: "4",
    title: "IT Operations Management",
    subtitle: "Solution-agnostic approach",
    body: "With ITOM Consulting, we enable IT operations and management teams to simplify data collection and processing by providing a solution-agnostic approach.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    digit: "5",
    title: "Robotic Process Automation",
    subtitle: "Realigning processes with automation",
    body: "We help customers realigning the process with the correct automation approach by providing the right methodologies, tools, products, and services.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
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
      style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center' }}
    >
      <div className={styles.contentWrapper} style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* ── Section Header (Infosys Style) ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg)', fontWeight: 600 }}>
            OUR CAPABILITIES
          </h2>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button 
              onClick={handlePrev} 
              style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--fg)' }}
            >
              ←
            </button>
            <span style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', fontWeight: 500 }}>{activeIndex + 1} / {FEATURES.length}</span>
            <button 
              onClick={handleNext} 
              style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--fg)' }}
            >
              →
            </button>
          </div>
        </div>

        {/* ── Content Card ── */}
        <div style={{ position: 'relative', width: '100%', minHeight: '400px' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                background: 'var(--card-bg)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                boxShadow: 'var(--card-shadow)',
                overflow: 'hidden'
              }}
            >
              {/* Left Image */}
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
                <img 
                  src={FEATURES[activeIndex].img} 
                  alt={FEATURES[activeIndex].title} 
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              {/* Right Text */}
              <div style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--fg)', marginBottom: '1rem', lineHeight: 1.2 }}>
                  {FEATURES[activeIndex].title}
                </h3>
                <p style={{ color: 'var(--fg-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  {FEATURES[activeIndex].body}
                </p>
                <a href={`/services`} style={{ color: 'var(--fg)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  Read More ↗
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
