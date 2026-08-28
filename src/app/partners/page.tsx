"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./Partners.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PartnersPage() {
  const partners = [
    {
      name: "ServiceNow",
      desc: "Hadron GBS has been awarded a Consulting & Implementation partnership with ServiceNow. As a ServiceNow Partner, we are committed to empowering organizations with state-of-the-art technologies, spearheading digital transformation initiatives, and fostering business growth.",
      logo: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327265/ServiceNow-Logo_cqo5uy.png",
      link: "/services/service-now",
      btnText: "Unleash the Power of ServiceNow",
      logoStyle: { maxHeight: "120px", transform: "scale(1.5)" }
    },
    {
      name: "BMC Software",
      desc: "Hadron Global Business Solutions (Hadron GBS), a leading provider of innovative IT solutions, is pleased to announce a strategic partnership with BMC Software, a global software company that specializes in providing solutions for IT service management, cloud management, and digital enterprise automation.",
      logo: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327265/Logo_BMC_Software_yuz81r.png",
      link: "/services/bmc",
      btnText: "Elevating Possibilities",
    },
    {
      name: "Salesforce",
      desc: "Hadron partners with Salesforce, merging expertise to redefine global business solutions. Our collaboration unlocks innovation, streamlines processes, and drives growth, empowering organizations to thrive in a dynamic market. Experience the future of enterprise solutions with us.",
      logo: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327266/Salesforce-Logo_j4dnwn.png",
      link: "/services/salesforce",
      btnText: "Empowering Your Success with Salesforce",
    },
    {
      name: "Freshworks",
      desc: "We are proud to partner with Freshworks, a global leader in customer engagement and IT service management. Through this collaboration, we deliver modern, AI-powered solutions that enhance customer satisfaction, streamline service delivery, and empower organizations to achieve operational excellence across every touchpoint.",
      logo: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327265/freshworks-logo_brandlogos.net_c6t5u_vu8yih.png",
      link: "/services/freshworks",
      btnText: "Reimagine Experience with Freshworks",
    },
    {
      name: "Ivanti",
      desc: "We have been lucky to collaborate with Ivanti to serve our customers for their need for IT Security, IT Service Management, IT Asset Management, Unified Endpoint Management, Identity Management, and supply chain management.",
      logo: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327265/Logo_Ivanti_rrsp6x.png",
      link: "/services/ivanti",
      btnText: "Secure & Manage with Ivanti",
    },
    {
      name: "Microsoft",
      desc: "As a certified Microsoft Solutions Partner, Hadron GBS empowers enterprises to modernize their infrastructure and reinvent productivity. We specialize in Azure cloud migrations, enterprise-grade security, and Microsoft 365 integrations, driving seamless collaboration and AI-powered innovation across your organization.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      link: "/services/microsoft-cloud",
      btnText: "Empower Your Digital Future",
    },
    {
      name: "Amazon Web Services (AWS)",
      desc: "Hadron GBS is a strategic AWS partner, delivering highly scalable, secure, and resilient cloud solutions. From complex data lake architecture to seamless enterprise workload migrations, we help businesses harness the full breadth of AWS services to accelerate growth and operational agility.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      link: "/services/aws-cloud",
      btnText: "Scale Without Limits",
    },
    {
      name: "SAP",
      desc: "Drive true intelligent enterprise transformation with our dedicated SAP consulting services. We guide organizations through end-to-end S/4HANA migrations, supply chain optimizations, and core HR transformations using SAP SuccessFactors, ensuring real-time data visibility and compliance.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
      link: "/services/sap",
      btnText: "Drive Intelligent Excellence",
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO BANNER */}
        <section className={styles.heroBanner}>
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
            alt="Partners Hero Background" 
            className={styles.heroBg} 
          />
          <div className={styles.heroOverlay}></div>
          <div className={`${styles.container} ${styles.heroContent}`}>
            <motion.span 
              className={styles.ecosystemTag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ecosystem
            </motion.span>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our Partners
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We collaborate with industry-leading technology providers to deliver cutting-edge enterprise solutions.
            </motion.p>
          </div>
        </section>

        {/* PARTNERS LIST */}
        <section className={styles.partnersSection}>
          <div className={`${styles.container} ${styles.partnersGrid}`}>
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.name}
                className={styles.partnerCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* 3D Border Hover Lines */}
                <span className={styles.borderTop}></span>
                <span className={styles.borderRight}></span>
                <span className={styles.borderBottom}></span>
                <span className={styles.borderLeft}></span>

                <div className={styles.partnerLogoWrapper}>
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`} 
                    className={styles.partnerLogo} 
                    style={partner.logoStyle || {}}
                  />
                </div>
                <div className={styles.partnerContent}>
                  <h2 className={styles.partnerTitle}>{partner.name}</h2>
                  <p className={styles.partnerDesc}>{partner.desc}</p>
                  <div className={styles.btnWrapper}>
                    <Link href={partner.link} className={styles.partnerBtn}>
                      {partner.btnText}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <motion.h2 
              className={styles.ctaTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Looking for the Best IT Business Solutions?
            </motion.h2>
            <motion.p 
              className={styles.ctaSubtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Contact us today, and let us help you achieve your business objectives.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/contact" className={styles.ctaBtn}>
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
