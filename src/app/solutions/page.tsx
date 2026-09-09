"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CtaSection from "../components/CtaSection/CtaSection";
import styles from "../services/ServiceLayout.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SolutionsHubPage() {
  const capabilities = [
    {
      title: "AI-Powered Enterprise Transformation",
      desc: "Move beyond isolated pilots. Embed generative AI, intelligence, and automation directly into the core platforms and workflows that run your business.",
      link: "/solutions/ai-powered-enterprise-transformation",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Cloud Adoption & Cloud-First Engineering",
      desc: "Architect a resilient, scalable foundation. Transition workloads to AWS and Microsoft Azure while modernizing legacy applications for cloud-native performance.",
      link: "/solutions/cloud-adoption-and-cloud-first-engineering",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    }
  ];

  const businessValues = [
    {
      title: "Modernize the Core",
      desc: "We don't just patch legacy systems; we re-architect them. We modernize the foundational technologies—like ERP, CRM, and ITSM—that your enterprise depends on to survive."
    },
    {
      title: "Accelerate Delivery",
      desc: "By adopting DevSecOps, cloud-native engineering, and intelligent automation, we help organizations drastically reduce their time-to-market for new digital capabilities."
    },
    {
      title: "Ensure Operational Resilience",
      desc: "Enterprise solutions must perform under pressure. We design high-availability architectures and observability-first infrastructures that guarantee zero downtime during peak demand."
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO BANNER */}
        <section className={styles.heroBanner}>
          <img 
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop" 
            alt="Solutions Hero background" 
            className={styles.heroBg} 
          />
          <div className={styles.heroOverlay} style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.7) 100%)' }}></div>
          <div className={`${styles.container} ${styles.heroContent}`}>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Enterprise Solutions Built for <br/>Scale and Resilience
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Technology transformation is not about adopting new tools; it’s about fundamentally changing how your business operates. Hadron GBS delivers end-to-end solutions that modernize legacy constraints and embed intelligence across the enterprise.
            </motion.p>
            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#capabilities" className={styles.heroButton}>
                Explore Our Solutions
              </a>
            </motion.div>
          </div>
        </section>

        {/* THE BUSINESS VALUE OF OUR SOLUTIONS */}
        <section style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
          <div className={styles.container}>
            <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#111827', fontWeight: 700, marginBottom: '1rem' }}>
                Technology Aligned to Business Outcomes
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: 1.6 }}>
                We bridge the gap between IT engineering and business strategy. Our solutions are designed to solve critical operational bottlenecks, reduce technical debt, and drive measurable ROI.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {businessValues.map((value, i) => (
                <div key={i} style={{ padding: '2.5rem', backgroundColor: '#f8fafc', borderRadius: '1rem', borderTop: '4px solid #1e3a8a', boxShadow: '0 10px 25px rgba(0,0,0,0.03)' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '1rem' }}>{value.title}</h3>
                  <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '1.1rem' }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS CAPABILITIES GRID */}
        <section id="capabilities" className={styles.whySection} style={{ backgroundColor: '#f0f4f8' }}>
          <div className={styles.container}>
            <div className={styles.whyHeader} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className={styles.whyTitle}>Our Core Enterprise Solutions</h2>
              <p style={{ color: '#4b5563', fontSize: '1.25rem', maxWidth: '800px', margin: '1rem auto 0 auto', lineHeight: 1.6 }}>
                From migrating critical workloads to the cloud, to embedding agentic AI across enterprise workflows, we deliver complete transformation services.
              </p>
            </div>
            
            <div className={styles.whyGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
              {capabilities.map((cap, i) => (
                <Link key={i} href={cap.link} style={{ textDecoration: 'none' }}>
                  <motion.div 
                    className={styles.whyCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className={styles.whyCardImgWrapper}>
                      <img src={cap.img} alt={cap.title} className={styles.whyCardImg} />
                    </div>
                    <div className={styles.whyCardBody}>
                      <h3 className={styles.whyCardTitle}>{cap.title}</h3>
                      <p className={styles.whyCardDesc} style={{ fontSize: '1.05rem', color: '#475569' }}>{cap.desc}</p>
                      <div className={styles.whyCardLink}>
                        Explore Solution <span style={{ fontSize: '1.2rem' }}>→</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaSection title="Transform Your Enterprise" subtitle="Connect with our solutions architects to design a scalable, resilient operating model for your organization." />
      <Footer />
    </>
  );
}
