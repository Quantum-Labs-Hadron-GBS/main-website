/* eslint-disable */
"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";
import PartnerMarquee from "../PartnerMarquee/PartnerMarquee";

function useCounter(target: number, duration = 1800, format = true) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      if (ref.current) {
        const val = Math.round(eased * target);
        ref.current.textContent = format ? val.toLocaleString() : val.toString();
      }
      if (p < 1) requestAnimationFrame(step);
    };
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { requestAnimationFrame(step); obs.disconnect(); }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return ref;
}

const STATS = [
  { value: 2020, suffix: "",  label: "Founded", format: false },
  { value: 4,    suffix: "+", label: "Global Offices" },
  { value: 100,  suffix: "%", label: "Quality Delivery" },
];

function StatCounter({ value, suffix, label, format = true }: { value: number; suffix: string; label: string; format?: boolean }) {
  const ref = useCounter(value, 1800, format);
  return (
    <div className={styles.stat}>
      <div className={styles.statValue}><span ref={ref}>0</span><span>{suffix}</span></div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero" aria-label="Hero">
      <div className={styles.noiseBg} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.content}>

          {/* Eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Enterprise Technology Partner
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          <span className={styles.headlineLine}>Your Enterprise</span>
          <span className={styles.headlineLine}>Platforms Should</span>
          <span className={styles.headlineLine}>Work as <span className={styles.headlineAccent}>Hard as You Do</span></span>
        </h1>

        {/* Sub copy */}
        <p className={styles.subCopy}>
          Hadron GBS turns complex technology investments into real operational outcomes. From strategy to managed services, we make enterprise platforms deliver what was promised.
        </p>

        {/* Action Row: CTAs and Stats adjacent */}
        <div className={styles.actionRow}>
          {/* CTAs */}
          <div className={styles.ctaRow}>
            <a href="#services" id="hero-get-demo" className={styles.ctaPrimary}>Explore Services</a>
            <a href="#contact" id="hero-see-product" className={styles.ctaSecondary}>
              Contact Us
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className={styles.statsRow}>
            {STATS.map(s => <StatCounter key={s.label} {...s} />)}
          </div>
        </div>
        </div>
      </div>

      {/* Globe spacer (now hidden — globe sits to the right) */}
      <div className={styles.globeSpacer} aria-hidden="true" />

      {/* Marquee pinned to bottom of Hero */}
      <div className={styles.heroMarquee}>
        <PartnerMarquee />
      </div>
    </section>
  );
}
