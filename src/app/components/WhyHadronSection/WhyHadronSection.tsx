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
          <span className={styles.tag}>Why Hadron GBS</span>
          <h2 className={styles.title}>What Sets Us Apart</h2>
        </motion.div>

        <InteractiveBento />
      </div>
    </section>
  );
}
