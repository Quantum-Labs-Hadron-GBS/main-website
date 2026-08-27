"use client";

import { motion } from "framer-motion";
import styles from "./OurStorySection.module.css";
import GradualBlur from "./GradualBlur";

export default function OurStorySection() {
  return (
    <section
      className={styles.storySection}
      id="our-story"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Top blur fade — blends into whatever section is above */}
      <GradualBlur
        target="parent"
        position="top"
        height="7rem"
        strength={2}
        divCount={5}
        curve="bezier"
        opacity={1}
      />

      <div className={styles.glow} />

      <div className={`${styles.inner} container`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tag}>Our Story</span>
          <h2 className={styles.title}>Built to Close the Gap Between Deployment and Value</h2>
        </motion.div>

        <div className={styles.content}>
          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            In 2020, a team of seasoned enterprise architects identified a problem hiding in plain sight: organizations were investing heavily in <span style={{ color: 'var(--accent)' }}>digital transformation</span> but rarely reaching the <span style={{ color: 'var(--accent)' }}>outcomes</span> they were sold on. Platforms were deployed but not <span style={{ color: 'var(--accent)' }}>optimized</span>. Systems were connected but not truly <span style={{ color: 'var(--accent)' }}>integrated</span>. Hadron GBS was founded on a single conviction: that enterprise technology should work as intended, and that closing the gap between investment and <span style={{ color: 'var(--accent)' }}>ROI</span> requires a partner who stays accountable beyond go-live.
          </motion.p>
          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our name comes from physics. A <span style={{ color: 'var(--accent)' }}>'Hadron'</span> is a fundamental particle, small but incredibly powerful, held together by the strongest force in nature. That's the role we play in enterprise technology: a <span style={{ color: 'var(--accent)' }}>binding force</span> that brings complex platforms, data, and teams into one <span style={{ color: 'var(--accent)' }}>coherent, resilient system</span>. Today, with more than 250 professionals across Singapore, India, the UAE, and the USA, we specialize in <span style={{ color: 'var(--accent)' }}>ServiceNow, BMC Helix, SAP, Salesforce, AWS, Azure</span>, and more, driving digital and cloud automation that <span style={{ color: 'var(--accent)' }}>empowers the people</span> behind every workflow.
          </motion.p>
        </div>
      </div>

      {/* Bottom blur fade — blends into whatever section is below */}
      <GradualBlur
        target="parent"
        position="bottom"
        height="7rem"
        strength={2}
        divCount={5}
        curve="bezier"
        opacity={1}
      />
    </section>
  );
}
