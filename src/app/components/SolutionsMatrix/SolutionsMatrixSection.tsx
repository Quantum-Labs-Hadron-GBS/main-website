"use client";

import { motion } from "framer-motion";
import styles from "./SolutionsMatrixSection.module.css";

const SOLUTIONS = [
  {
    title: "ServiceNow Ecosystem",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    desc: "End-to-end implementation and managed services for ITSM, HRSD, and ITOM to digitize enterprise workflows.",
  },
  {
    title: "GenAI & Automation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
      </svg>
    ),
    desc: "Leveraging generative AI and Robotic Process Automation (RPA) to accelerate decision making and eliminate manual tasks.",
  },
  {
    title: "DevOps & Cloud",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    desc: "Modernizing infrastructure with scalable cloud architecture, CI/CD pipelines, and secure deployment strategies.",
  },
  {
    title: "Tailored CRM Solutions",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    desc: "Custom Salesforce and bespoke CRM implementations designed to align perfectly with your unique sales pipeline.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function SolutionsMatrixSection() {
  return (
    <section className={styles.section} id="solutions-matrix">
      <div className={`${styles.inner} container`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.eyebrow}>Core Expertise</span>
          <h2 className={styles.headline}>Comprehensive Business Solutions</h2>
          <p className={styles.subheadline}>
            Before diving into specific product lines, explore our high-level capabilities designed to digitally transform your entire enterprise architecture.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SOLUTIONS.map((sol, i) => (
            <motion.div key={i} className={styles.card} variants={itemVariants}>
              <div className={styles.iconWrapper}>{sol.icon}</div>
              <h3 className={styles.cardTitle}>{sol.title}</h3>
              <p className={styles.cardDesc}>{sol.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
