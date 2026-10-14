"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CtaSection from "../components/CtaSection/CtaSection";
import styles from "../services/ServiceLayout.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IndustriesHubPage() {
  const industriesList = [
    {
      title: "Manufacturing",
      tagline: "Where Enterprise Operations Meet Industrial Complexity",
      desc: "Connect technology, processes, and operations across shop floor, supply chain, asset maintenance, and enterprise platforms to create transparent, resilient industrial ecosystems.",
      link: "/industries/manufacturing",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Financial Services",
      tagline: "Transforming the Technology Behind Financial Operations",
      desc: "Modernize the core technology foundation behind banking, capital markets, and insurance operations with resilient architecture, zero downtime, and regulatory compliance.",
      link: "/industries/financial-services",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Retail",
      tagline: "Technology That Keeps Retail Moving",
      desc: "Deliver seamless omnichannel customer experiences, scale commerce platforms, and automate inventory and supply chain workflows to perform reliably under peak demand.",
      link: "/industries/retail",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Government & Public Sector",
      tagline: "Modernizing the Systems Behind Public Services",
      desc: "Upgrade legacy infrastructure, adhere to stringent compliance, and deliver accessible, citizen-first digital services with enterprise-grade security.",
      link: "/industries/government-and-public-sector",
      img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2074&auto=format&fit=crop"
    },
    {
      title: "Education",
      tagline: "Modern Technology for Connected Education Operations",
      desc: "Modernize legacy campus applications, streamline faculty and administrative workflows, and establish connected digital platforms that elevate student and faculty experiences.",
      link: "/industries/education",
      img: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788259026/ET_M1_cdjlli.jpg"
    }
  ];

  const industryValues = [
    {
      title: "Domain-Driven Architecture",
      desc: "We design technology architectures that address sector-specific complexities, regulatory frameworks, and operational workflows rather than applying generic one-size-fits-all templates."
    },
    {
      title: "Platform Coexistence & Modernization",
      desc: "We orchestrate seamless integration between mission-critical legacy platforms (core banking, SIS, SCADA, ERPs) and modern enterprise platforms like ServiceNow, Salesforce, and Cloud."
    },
    {
      title: "Operational Resilience & Governance",
      desc: "Every solution is built with strict governance, zero-trust security controls, and high-availability design to maintain business continuity during peak demand and rigorous audits."
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO BANNER */}
        <section className={styles.heroBanner}>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="https://res.cloudinary.com/dyhlpxwwo/video/upload/v1789975086/Use_the_attached_image_as_the_6_y2sga7.mp4"
            className={styles.heroVideo}
          />
          <div 
            className={styles.heroOverlay} 
            style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.72) 100%)' }}
          ></div>
          <div className={`${styles.container} ${styles.heroContent}`}>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Industry Solutions Engineered for <br />Complexity and Performance
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Every industry faces distinct operational realities, compliance standards, and digital demands. Hadron GBS connects modern technology, platform architecture, and industry workflows to build visible, reliable, and intelligent enterprise environments.
            </motion.p>
            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#industries" className={styles.heroButton}>
                Explore Our Industries
              </a>
            </motion.div>
          </div>
        </section>

        {/* THE BUSINESS VALUE OF OUR INDUSTRY EXPERTISE */}
        <section style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
          <div className={styles.container}>
            <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '50rem', margin: '0 auto 4rem auto' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#16325F', fontWeight: 700, marginBottom: '1rem' }}>
                Deep Domain Expertise Meets Platform Engineering
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: 1.6 }}>
                We bridge the gap between deep sector challenges and scalable enterprise platforms. From stringent regulatory standards to mission-critical operational uptime, our industry solutions deliver measurable, sustainable business outcomes.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(18.75rem, 1fr))', gap: '2rem' }}>
              {industryValues.map((value, i) => (
                <div 
                  key={i} 
                  style={{ 
                    padding: '2.5rem', 
                    backgroundColor: '#f8fafc', 
                    borderRadius: '1rem', 
                    borderTop: '4px solid #F17943', 
                    boxShadow: '0 10px 25px rgba(0,0,0,0.03)' 
                  }}
                >
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16325F', marginBottom: '1rem' }}>
                    {value.title}
                  </h3>
                  <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '1.1rem' }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES CAPABILITIES GRID */}
        <section id="industries" className={styles.whySection} style={{ backgroundColor: '#f0f4f8' }}>
          <div className={styles.container}>
            <div className={styles.whyHeader} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className={styles.whyTitle}>Industries We Transform</h2>
              <p style={{ color: '#4b5563', fontSize: '1.25rem', maxWidth: '50rem', margin: '1rem auto 0 auto', lineHeight: 1.6 }}>
                Discover how Hadron GBS empowers organizations across critical sectors to modernize operations, enhance customer and employee experience, and accelerate platform value.
              </p>
            </div>
            
            <style>{`
              .industries-cards-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 2rem;
              }
              .industry-card-link {
                text-decoration: none;
                display: flex;
                flex-direction: column;
                width: 100%;
              }
              @media (min-width: 48rem) {
                .industry-card-link {
                  width: calc((100% - 2rem) / 2);
                  max-width: calc((100% - 2rem) / 2);
                }
              }
              @media (min-width: 64rem) {
                .industry-card-link {
                  width: calc((100% - 4rem) / 3);
                  max-width: calc((100% - 4rem) / 3);
                }
              }
            `}</style>
            <div className="industries-cards-container">
              {industriesList.map((ind, i) => (
                <Link key={i} href={ind.link} className="industry-card-link">
                  <motion.div 
                    className={styles.whyCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{ height: '100%', width: '100%' }}
                  >
                    <div className={styles.whyCardImgWrapper}>
                      <img src={ind.img} alt={ind.title} className={styles.whyCardImg} />
                    </div>
                    <div className={styles.whyCardBody}>
                      <h3 className={styles.whyCardTitle}>{ind.title}</h3>
                      <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F17943', marginBottom: '0.5rem' }}>
                        {ind.tagline}
                      </p>
                      <p className={styles.whyCardDesc} style={{ fontSize: '1.05rem', color: '#475569' }}>
                        {ind.desc}
                      </p>
                      <div className={styles.whyCardLink}>
                        Explore Industry <span style={{ fontSize: '1.2rem' }}>→</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaSection 
        title="Transform Your Industry Operations" 
        subtitle="Consult with our industry practice leaders to evaluate your enterprise platform architecture and operational readiness." 
      />
      <Footer />
    </>
  );
}
