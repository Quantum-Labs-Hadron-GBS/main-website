"use client";

import { motion } from "framer-motion";
import styles from "./CoreServicesSection.module.css";

const SERVICES = [
  { title: "Enterprise Core Transformation", desc: "Modernise SAP, Oracle, Salesforce, and Workday environments to unify data, accelerate decisions, and eliminate manual workarounds across finance, operations, and customer systems.", link: "/services/sap" },
  { title: "Intelligent Automation & Agentic AI", desc: "Move beyond task-level RPA to AI-driven orchestration, where intelligent agents handle routing, decisions, and execution across enterprise workflows in real time.", link: "/services/service-now" },
  { title: "Rapid Application Engineering", desc: "Deliver enterprise applications in weeks using low-code and no-code platforms, with governance built in from the start so teams can maintain and extend what we build.", link: "/services/low-code" },
  { title: "Unified Service Experience Management", desc: "Bring ITSM, CSM, and enterprise service workflows into a single operational model with intelligent routing, unified knowledge, and consistent service delivery across every function.", link: "/services/service-now" },
  { title: "Cloud Adoption and Cloud-First Engineering", desc: "Design, migrate, and operate cloud environments on AWS, Azure, and Google Cloud with cost visibility, security controls, and compliance embedded in the architecture, not added after.", link: "/services/aws-cloud" },
  { title: "Engineering Quality and Reliability", desc: "Embed quality across the full delivery pipeline, and value engineering from automated testing gates in CI/CD to real-time production observability, so issues are caught before they reach users.", link: "/services/operational-support" }
];

export default function CoreServicesSection() {
  return (
    <section className={styles.section} id="core-services">
      <div className={`${styles.inner} container`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tag}>What We Do</span>
          <h2 className={styles.title}>Core Services</h2>
        </motion.div>

        <div className={styles.grid}>
          {SERVICES.map((srv, i) => (
            <motion.div 
              key={i} 
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className={styles.cardTitle}>{srv.title}</h3>
              <p className={styles.cardDesc}>{srv.desc}</p>
              <a href={srv.link} className={styles.link}>
                Explore Service
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
