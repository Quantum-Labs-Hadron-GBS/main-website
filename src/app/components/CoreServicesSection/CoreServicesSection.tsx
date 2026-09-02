"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./CoreServicesSection.module.css";
import Folder from "../Folder/Folder";

const SERVICES_1 = [
  { title: "Enterprise Core Transformation", desc: "Modernise SAP, Oracle, Salesforce, and Workday environments to unify data, accelerate decisions, and eliminate manual workarounds.", link: "/solutions/enterprise-core-transformation" },
  { title: "Intelligent Automation & Agentic AI", desc: "Move beyond task-level RPA to AI-driven orchestration — intelligent agents handle routing, decisions, and execution in real time.", link: "/solutions/intelligent-automation-agentic-ai" },
  { title: "Rapid Application Engineering", desc: "Deliver enterprise applications in weeks using low-code and no-code platforms, with governance built in from the start.", link: "/solutions/rapid-application-engineering" },
];

const SERVICES_2 = [
  { title: "Unified Service Experience Management", desc: "Bring ITSM, CSM, and enterprise workflows into a single operational model with intelligent routing and unified knowledge.", link: "/solutions/unified-service-experience-management" },
  { title: "Cloud Adoption & Engineering", desc: "Design, migrate, and operate cloud environments on AWS, Azure, and GCP with cost visibility and security controls embedded in the architecture.", link: "/solutions/cloud-adoption-and-cloud-first-engineering" },
  { title: "Engineering Quality & Reliability", desc: "Embed quality across the full delivery pipeline — from automated testing gates in CI/CD to real-time production observability.", link: "/solutions/engineering-quality-and-reliability" },
];

const renderPapers = (services: typeof SERVICES_1) =>
  services.map((srv, i) => (
    <div key={i} style={{ display: 'flex', flexDirection: 'column', height: '100%', color: 'inherit' }} className="paper-card-wrapper">
      <h4 className="paper-title">{srv.title}</h4>
      <p className="paper-desc">{srv.desc}</p>
      <Link href={srv.link} className="paper-link" style={{ marginTop: 'auto', textDecoration: 'none' }}>
        Explore
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </Link>
    </div>
  ));

export default function CoreServicesSection() {
  return (
    <section className={styles.section} id="core-services">
      <div className={`${styles.inner} container`}>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tag}>What We Do</span>
          <h2 className={styles.title}>Core Services</h2>
          <p className={styles.subtitle}>
            We engineer high-performance platforms that drive enterprise efficiency. Click the folders to explore our specializations.
          </p>
        </motion.div>

        {/* Folders */}
        <div className={styles.folderContainer}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Folder
              label="Platform Modernization"
              color="#F47C36"
              size={1.2}
              items={renderPapers(SERVICES_1)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Folder
              label="Operational Excellence"
              color="#1A73E8"
              size={1.2}
              items={renderPapers(SERVICES_2)}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
