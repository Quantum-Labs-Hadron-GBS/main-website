"use client";

import { motion } from "framer-motion";
import styles from "./WhyHadronSection.module.css";
import InteractiveBento from "../InteractiveBento/InteractiveBento";
import { WavyBackground } from "../WavyBackground/WavyBackground";

// The specific product features are now hardcoded in InteractiveBento.tsx

export default function WhyHadronSection() {
  return (
    <section className={styles.section} id="why-hadron">
      {/* Premium CSS-only background */}
      <div className={styles.ambientGlow}></div>
      
      <div className={`${styles.inner} container`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title} style={{ fontSize: '2.5rem', color: 'var(--fg)', fontWeight: 600, marginBottom: '1rem', textTransform: 'none', letterSpacing: 'normal' }}>
            The <span style={{ color: 'var(--accent)' }}>Hadron</span> Advantage
          </h2>
          <p style={{ color: 'var(--fg-muted)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.6, textTransform: 'none' }}>
            What sets us apart is our commitment to engineering world-class solutions. From intelligent automation to seamless cloud integration, we empower your business to scale with absolute confidence.
          </p>
        </motion.div>

        <InteractiveBento />
      </div>
    </section>
  );
}
