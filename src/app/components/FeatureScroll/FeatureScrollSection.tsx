"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./FeatureScrollSection.module.css";

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

export default function FeatureScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? FEATURES.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % FEATURES.length);
  };

  useEffect(() => {
    // Auto-advance every 6 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div
      ref={sectionRef}
      className={styles.section}
      id="product"
      aria-label="Product features"
    >
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* ── Section Header ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '0.95rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0f172a', fontWeight: 600 }}>
            OUR EXPERTISE
          </h2>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button 
              onClick={handlePrev} 
              className={`${styles.navArrow} ${styles.navArrowLeft}`}
              aria-label="Previous feature"
            >
              <ArrowLeft size={24} strokeWidth={3} color="black" />
            </button>
            <span style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 500 }}>
              {activeIndex + 1} / {FEATURES.length}
            </span>
            <button 
              onClick={handleNext} 
              className={`${styles.navArrow} ${styles.navArrowRight}`}
              aria-label="Next feature"
            >
              <ArrowRight size={24} strokeWidth={3} color="black" />
            </button>
          </div>
        </div>

        {/* ── Horizontal Carousel Track ── */}
        <div style={{ position: 'relative', width: '100%' }}>
          <motion.div
            animate={{ x: `calc(-${activeIndex} * min(100vw - 4rem, 850px) - ${activeIndex * 2}rem)` }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
            style={{ display: 'flex', gap: '2rem', width: 'max-content' }}
          >
            {FEATURES.map((feature, i) => {
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;
              
              return (
                <motion.div
                  key={i}
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                    scale: isActive ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5 }}
                  className={styles.featureCard}
                >
                  {/* Left Image */}
                  <div className={styles.featureImageContainer}>
                    <img 
                      src={feature.img} 
                      alt={feature.title} 
                      className={styles.featureImage} 
                    />
                  </div>

                  {/* Right Text */}
                  <div className={styles.featureTextContainer}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.2 }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '2rem' }}>
                      {feature.body}
                    </p>
                    <a href={`/services`} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', fontSize: '0.9rem', borderBottom: '1px solid var(--accent)', width: 'max-content', paddingBottom: '2px' }}>
                      Read More ↗
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
