"use client";

import { motion } from "framer-motion";
import styles from "./IndiaSection.module.css";

const MODULES = [
  { script: "⚙️", name: "ITSM", consulting: true, impl: true, support: true },
  { script: "👥", name: "HRSD", consulting: true, impl: true, support: true },
  { script: "🛡️", name: "IRM", consulting: true, impl: true, support: false },
  { script: "🚀", name: "DevOps", consulting: true, impl: true, support: false },
  { script: "☁️", name: "ITOM", consulting: true, impl: true, support: true },
  { script: "🤖", name: "RPA & AI", consulting: true, impl: false, support: false },
];

const PARTNERS = [
  {
    title: "BMC Software",
    tag: "Strategic Partner",
    body: "A global software company that specializes in providing solutions for IT service management, cloud management, and digital enterprise automation.",
  },
  {
    title: "NetBrain",
    tag: "Global Leader",
    body: "The global leader for network automation. Provides automated problem diagnosis, remediation, and end-to-end visibility for your hybrid network.",
  },
  {
    title: "ServiceNow",
    tag: "Training & Consulting",
    body: "We provide world-class training expertise tailored to meet the standards of Fortune 500 companies in the United States and globally.",
  },
];

function Dot({ active }: { active: boolean }) {
  return (
    <span className={`${styles.dot} ${active ? styles.dotActive : styles.dotOff}`} />
  );
}

export default function IndiaSection() {
  return (
    <section className={styles.section} id="india" aria-label="India language support">
      <div className={`${styles.inner} container`}>

        {/* Header */}
        <div className={styles.header}>
          <span className="section-tag">Our Partners</span>
          <h2 className={styles.title}>
            Long Time Project, with<br />
            <span className={styles.titleAccent}>Our Best Partners.</span>
          </h2>
          <p className={styles.subtitle}>
            Preparing For Your Success Provide Best IT Solutions. Appropriate for your specific business, making it easy for you to have quality IT services.
          </p>
        </div>

        {/* Capabilities row */}
        <div className={styles.capabilitiesRow}>
          {PARTNERS.map((cap, i) => (
            <motion.div
              key={cap.tag}
              className={styles.capCard}
              
              
              
              
            >
              <span className={styles.capTag}>{cap.tag}</span>
              <h3 className={styles.capTitle}>{cap.title}</h3>
              <p className={styles.capBody}>{cap.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Language grid */}
        <div className={styles.gridWrapper}>
          <div className={styles.gridHeader}>
            <span className={styles.gridHeaderLang}>Module</span>
            <span className={styles.gridHeaderCap}>Consulting</span>
            <span className={styles.gridHeaderCap}>Implementation</span>
            <span className={styles.gridHeaderCap}>Support</span>
          </div>
          <div className={styles.langGrid}>
            {MODULES.map((lang, i) => (
              <motion.div
                key={lang.name}
                className={styles.langCard}
                
                
                
                
              >
                <div className={styles.langLeft}>
                  <span className={styles.langScript}>{lang.script}</span>
                  <span className={styles.langName}>{lang.name}</span>
                </div>
                <div className={styles.langCaps}>
                  <Dot active={lang.consulting} />
                  <Dot active={lang.impl} />
                  <Dot active={lang.support} />
                </div>
              </motion.div>
            ))}
          </div>
          <p className={styles.gridNote}>
            🔵 Available &nbsp;·&nbsp; ○ In development
          </p>
        </div>

        {/* Stat strip */}
        <div className={styles.statStrip}>
          {[
            { value: "10+", label: "Years of Experience" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "50+",  label: "Successful Projects" },
            { value: "24/7", label: "Expert Support" },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
