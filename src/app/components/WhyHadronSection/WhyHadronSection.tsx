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
            Crafting <span style={{ color: 'var(--blue)' }}>Intelligent</span> Experiences
          </h2>
          <p style={{ color: 'var(--fg-muted)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.6, textTransform: 'none' }}>
            Whether you're building your own models, transforming your cloud strategy, or amplifying your digital efforts, we provide the foundation for enterprise success.
          </p>
          <button style={{ background: '#111', color: '#fff', padding: '0.8rem 2rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 500 }}>
            I'm Curious ↗
          </button>
        </motion.div>

        <InteractiveBento />
      </div>
    </section>
  );
}
