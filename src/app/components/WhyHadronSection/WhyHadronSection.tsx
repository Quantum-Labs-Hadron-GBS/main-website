"use client";

import { motion } from "framer-motion";
import styles from "./WhyHadronSection.module.css";
import MagicBento, { BentoCardData } from "../MagicBento/MagicBento";
import { WavyBackground } from "../WavyBackground/WavyBackground";

const FEATURES: BentoCardData[] = [
  { title: "Architecture-Led Delivery", description: "We treat every engagement as a systems problem. Our architects design for structure, coherence, and long-term platform health, not just immediate go-live requirements.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>, glowColor: "0, 82, 155" },
  { title: "Outcome-Driven Accountability", description: "We define success through measurable KPIs from day one (MTTR, CSAT, throughput, adoption) and stay accountable to them throughout the engagement lifecycle.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>, glowColor: "244, 124, 54" },
  { title: "GenAI-Powered Transformation", description: "We embed next-generation automation and AI capabilities across ServiceNow, Salesforce, and SAP, accelerating time-to-value and unlocking new operational possibilities.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>, glowColor: "0, 82, 155" },
  { title: "Transparent, Collaborative Governance", description: "No black boxes. We co-create architectures, share patterns openly, and run structured governance cadences so clients always understand what is being built and why.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, glowColor: "244, 124, 54" },
  { title: "Rigorous Discovery Before Execution", description: "Decisions are grounded in real operating conditions — actual constraints, real workflows, genuine priorities, not vendor-led narratives or untested assumptions.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>, glowColor: "0, 82, 155" },
  { title: "Lifecycle Accountability", description: "We stay involved after delivery. From hypercare to managed services, we keep platforms optimized, secure, and ready to evolve with your organization.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M2.13 15.57a10 10 0 1 0 1.95-9.15"></path><path d="M2.5 22v-6h6M21.87 8.43a10 10 0 1 0-1.95 9.15"></path></svg>, glowColor: "244, 124, 54" },
  { title: "Flexible Engagement Models", description: "Fixed scope, agile delivery pods, or SLA-backed managed services, we adapt our operating model to match your business priorities, not the other way around.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>, glowColor: "0, 82, 155" }
];

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

        <MagicBento
          cards={FEATURES}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={400}
          particleCount={12}
          disableAnimations={false}
        />
      </div>
    </section>
  );
}
