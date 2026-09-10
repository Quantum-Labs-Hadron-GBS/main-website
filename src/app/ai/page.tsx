"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CtaSection from "../components/CtaSection/CtaSection";
import styles from "../services/ServiceLayout.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AIHubPage() {
  const capabilities = [
    {
      title: "Generative AI",
      desc: "Turn your organization's hidden knowledge into instant action. Empower your workforce with answers, not search results.",
      link: "/ai/generative-ai",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Agentic AI",
      desc: "Deploy autonomous digital workers that can handle complex, multi-step business processes from end to end without supervision.",
      link: "/ai/agentic-ai",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Intelligent Operations",
      desc: "Stop reacting to operational fires. Use predictive intelligence to foresee issues and resolve them before they impact the bottom line.",
      link: "/ai/ai-enterprise-operations",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    },
    {
      title: "Platform AI",
      desc: "Maximize the ROI of your existing investments. We inject intelligence directly into ServiceNow, SAP, Salesforce, and AWS.",
      link: "/ai/ai-enterprise-platforms",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "AI Strategy & Readiness",
      desc: "Cut through the hype. We help executives identify high-ROI use cases, govern risks, and build an actionable AI roadmap.",
      link: "/ai/ai-strategy",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const businessValues = [
    {
      title: "Radical Efficiency",
      desc: "Reduce manual, repetitive workflows by up to 60%. Free your workforce to focus on high-value, strategic growth initiatives rather than administrative overhead."
    },
    {
      title: "Accelerated Decision-Making",
      desc: "Move from gut-feeling to data-driven certainty. AI synthesizes millions of data points across your enterprise to deliver actionable insights in real-time."
    },
    {
      title: "Risk & Governance",
      desc: "Innovation shouldn't compromise security. We deploy AI with enterprise-grade guardrails, ensuring data privacy, compliance, and human-in-the-loop oversight."
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO BANNER */}
        <section className={styles.heroBanner}>
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" 
            alt="AI Hero background" 
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
              AI is No Longer an Experiment. <br/>It’s an Operational Mandate.
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The era of isolated AI pilots is over. To drive real business value, intelligence must be embedded directly into the systems, workflows, and people that run your enterprise. We help business leaders move from basic automation to complete operational autonomy.
            </motion.p>
            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#capabilities" className={styles.heroButton}>
                Discover the Business Value of AI
              </a>
            </motion.div>
          </div>
        </section>

        {/* THE BUSINESS VALUE OF AI (New Section for Non-Tech Execs) */}
        <section style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
          <div className={styles.container}>
            <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#111827', fontWeight: 700, marginBottom: '1rem' }}>
                Why AI Matters to Your Bottom Line
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: 1.6 }}>
                Technology for technology’s sake is a sunk cost. At Hadron GBS, we approach AI strictly through the lens of business outcomes—optimizing costs, protecting margins, and accelerating speed-to-market.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {businessValues.map((value, i) => (
                <div key={i} style={{ padding: '2.5rem', backgroundColor: '#f8fafc', borderRadius: '1rem', borderTop: '4px solid #F47C36', boxShadow: '0 10px 25px rgba(0,0,0,0.03)' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '1rem' }}>{value.title}</h3>
                  <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '1.1rem' }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE JOURNEY TO AUTONOMY */}
        <section style={{ padding: '6rem 0', backgroundColor: '#1e293b', color: '#ffffff' }}>
          <div className={styles.container}>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ffffff' }}>
                  The Evolution of Enterprise Efficiency
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Many organizations are stuck in the "Automation" phase—using rigid bots to handle simple, repetitive tasks. The true competitive advantage lies in moving toward <strong>Autonomy</strong>.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: 700, color: '#94a3b8' }}>1</div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.25rem' }}>Basic Automation</h4>
                      <p style={{ color: '#94a3b8', margin: 0 }}>Rules-based systems that break when exceptions occur.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: 700, color: '#38bdf8' }}>2</div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.25rem' }}>Intelligence</h4>
                      <p style={{ color: '#94a3b8', margin: 0 }}>AI assists human workers by surfacing insights and summarizing data.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#F47C36', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: 700, color: '#ffffff' }}>3</div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.25rem' }}>Autonomy (Agentic AI)</h4>
                      <p style={{ color: '#cbd5e1', margin: 0 }}>Digital workers that can reason through problems, make decisions, and execute end-to-end workflows independently.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ flex: 1, padding: '2rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#F47C36', marginBottom: '1rem' }}>We Don't Just Build Models. We Solve Business Problems.</h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '1.1rem' }}>
                  Most AI initiatives fail because they are treated as IT projects. We treat AI as an organizational transformation. We assess your operations, identify where intelligence will actually move the needle, and deploy solutions that your workforce can trust and adopt immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI CAPABILITIES GRID */}
        <section id="capabilities" className={styles.whySection} style={{ backgroundColor: '#f0f4f8' }}>
          <div className={styles.container}>
            <div className={styles.whyHeader} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className={styles.whyTitle}>Our AI Capabilities</h2>
              <p style={{ color: '#4b5563', fontSize: '1.25rem', maxWidth: '800px', margin: '1rem auto 0 auto', lineHeight: 1.6 }}>
                Comprehensive AI solutions designed for the enterprise. From strategic readiness to the deployment of autonomous digital workers.
              </p>
            </div>
            
            <div className={styles.whyGrid}>
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
                        View Executive Brief <span style={{ fontSize: '1.2rem' }}>→</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaSection title="Cut Through the AI Hype" subtitle="Schedule an executive briefing to discuss how AI can drive measurable impact in your organization." />
      <Footer />
    </>
  );
}
