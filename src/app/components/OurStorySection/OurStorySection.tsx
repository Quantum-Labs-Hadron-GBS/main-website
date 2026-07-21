"use client";

import { motion } from "framer-motion";
import styles from "./OurStorySection.module.css";

export default function OurStorySection() {
  return (
    <section className={styles.storySection} id="our-story">
      <div className={styles.glow} />
      <div className={`${styles.inner} container`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tag}>Our Story</span>
          <h2 className={styles.title}>Built to Close the Gap Between Deployment and Value</h2>
        </motion.div>

        <div className={styles.content}>
          <motion.p 
            className={styles.paragraph}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            In 2020, a team of seasoned enterprise architects identified a problem hiding in plain sight: organizations were investing heavily in digital transformation but rarely reaching the outcomes they were sold on. Platforms were deployed but not optimized. Systems were connected but not truly integrated. Hadron GBS was founded on a single conviction: that enterprise technology should work as intended, and that closing the gap between investment and ROI requires a partner who stays accountable beyond go-live.
          </motion.p>
          <motion.p 
            className={styles.paragraph}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our name comes from physics. A ‘Hadron’ is a fundamental particle, small but incredibly powerful, held together by the strongest force in nature. That’s the role we play in enterprise technology: a binding force that brings complex platforms, data, and teams into one coherent, resilient system. Today, with more than 250 professionals across Singapore, India, the UAE, and the USA, we specialize in ServiceNow, BMC Helix, SAP, Salesforce, AWS, Azure, and more, driving digital and cloud automation that empowers the people behind every workflow.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
