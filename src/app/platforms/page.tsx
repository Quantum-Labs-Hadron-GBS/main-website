"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CtaSection from "../components/CtaSection/CtaSection";
import styles from "./Platforms.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PlatformsHubPage() {
  const platforms = [
    {
      name: "ServiceNow",
      desc: "Hadron GBS is an awarded Consulting & Implementation partner for ServiceNow. We empower enterprises with ITSM, ITOM, CSM, HRSD, and cutting-edge Now Assist generative AI workflows.",
      logo: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327265/ServiceNow-Logo_cqo5uy.png",
      link: "/platforms/service-now",
      btnText: "Explore ServiceNow",
      logoStyle: { maxHeight: "2.75rem", transform: "scale(1.15)", transformOrigin: "left center" }
    },
    {
      name: "Salesforce",
      desc: "Unifying CRM, Sales Cloud, Service Cloud, and Agentforce automation. We design integrated customer lifecycles that eliminate silos, enhance retention, and scale revenue operations.",
      logo: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327266/Salesforce-Logo_j4dnwn.png",
      link: "/platforms/salesforce",
      btnText: "Explore Salesforce",
      logoStyle: { maxHeight: "2.5rem" }
    },
    {
      name: "SAP",
      desc: "Driving intelligent enterprise transformations. We guide global organizations through seamless S/4HANA migrations, supply chain optimizations, and real-time core ERP data visibility.",
      logo: "/logos/sap-logo.svg",
      link: "/platforms/sap",
      btnText: "Explore SAP",
      logoStyle: { maxHeight: "2.25rem" }
    },
    {
      name: "BMC Helix",
      desc: "Strategic delivery across BMC Helix ITSM, AIOps, and HelixGPT. We modernize enterprise service operations, automate remediation, and dramatically reduce operational MTTR.",
      logo: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1790836686/bmc-helix-logo_d38xak.png",
      link: "/platforms/bmc",
      btnText: "Explore BMC Helix",
      logoStyle: { maxHeight: "2.4rem" }
    },
    {
      name: "Microsoft",
      desc: "Certified Microsoft Solutions Partner delivering Azure cloud migrations, enterprise-grade identity and security, and Microsoft 365 Copilot AI integrations for modern collaboration.",
      logo: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787736500/Microsoft_c53rme.webp",
      link: "/platforms/microsoft",
      btnText: "Explore Microsoft",
      logoStyle: { maxHeight: "2.4rem" }
    },
    {
      name: "Amazon Web Services (AWS)",
      desc: "Strategic AWS partner delivering resilient cloud architectures, complex data lake engineering, and mission-critical enterprise workload migrations with built-in FinOps governance.",
      logo: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787736501/aws_bbwpm7.png",
      link: "/platforms/aws",
      btnText: "Explore AWS",
      logoStyle: { maxHeight: "2.4rem" }
    },
    {
      name: "Atlassian",
      desc: "Unlocking agile collaboration and modern service delivery. We design and implement Jira, Confluence, and Jira Service Management (JSM) ecosystems for cross-functional teams.",
      logo: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788789011/Atlassian_logo_kiayvy.png",
      link: "/platforms/atlassian",
      btnText: "Explore Atlassian",
      logoStyle: { maxHeight: "2.2rem" }
    },
    {
      name: "Ivanti",
      desc: "Comprehensive solutions for Unified Endpoint Management (UEM), IT Security, IT Asset Management (ITAM), and Service Management across distributed enterprise teams.",
      logo: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327265/Logo_Ivanti_rrsp6x.png",
      link: "/platforms/ivanti",
      btnText: "Explore Ivanti",
      logoStyle: { maxHeight: "2.2rem" }
    },
    {
      name: "Freshworks",
      desc: "Modern, AI-powered customer engagement and IT service management with Freshservice and Freshdesk to enhance satisfaction and streamline omni-channel service delivery.",
      logo: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327265/freshworks-logo_brandlogos.net_c6t5u_vu8yih.png",
      link: "/platforms/freshworks",
      btnText: "Explore Freshworks",
      logoStyle: { maxHeight: "2.25rem" }
    },
    {
      name: "Precision Bridge",
      desc: "Specialist implementation partner for Precision Bridge, automating complex, multi-million record data and workflow migrations to ServiceNow with zero data loss.",
      logo: "/logos/precision-bridge-logo.png",
      link: "/platforms/service-now/precision-bridge",
      btnText: "Explore Precision Bridge",
      logoStyle: { maxHeight: "2.5rem" }
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO BANNER WITH BACKGROUND VIDEO */}
        <section className={styles.heroBanner}>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="https://res.cloudinary.com/ax6dtcht/video/upload/v1785324517/now_in_this_same_theme_like_amrowr.mp4"
            className={styles.heroVideo}
          />
          <div className={styles.heroOverlay}></div>
          <div className={`${styles.container} ${styles.heroContent}`}>
            <motion.span 
              className={styles.platformTag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Enterprise Platforms
            </motion.span>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Platforms
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We partner with and deploy world-leading enterprise platforms, connecting architecture, integration, and managed services to maximize your platform investment.
            </motion.p>
          </div>
        </section>

        {/* 2-COLUMN PLATFORMS GRID WITH 3D BORDER INTERACTION */}
        <section className={styles.platformsSection}>
          <div className={`${styles.container} ${styles.platformsGrid}`}>
            {platforms.map((platform) => (
              <motion.div 
                key={platform.name}
                className={styles.platformCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                {/* 3D Border Hover Lines (Exact interaction from ecosystem-and-partners) */}
                <span className={styles.borderTop}></span>
                <span className={styles.borderRight}></span>
                <span className={styles.borderBottom}></span>
                <span className={styles.borderLeft}></span>

                <div className={styles.cardHeader}>
                  <div className={styles.platformLogoWrapper}>
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} Platform Architecture, Implementation & Solutions - ServiceNow, Salesforce & Cloud Partner Hadron GBS`} 
                      className={styles.platformLogo} 
                      style={platform.logoStyle || {}}
                    />
                  </div>
                </div>

                <h2 className={styles.platformTitle}>{platform.name}</h2>
                <p className={styles.platformDesc}>{platform.desc}</p>
                
                <div className={styles.btnWrapper}>
                  <Link href={platform.link} className={styles.platformBtn}>
                    {platform.btnText}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <CtaSection 
        title="Ready to Accelerate Your Platform Transformation?" 
        subtitle="Consult with our certified platform architects to assess your ecosystem, streamline integrations, and unlock higher platform ROI."
        buttonText="Contact Platform Experts"
      />
      <Footer />
    </>
  );
}
