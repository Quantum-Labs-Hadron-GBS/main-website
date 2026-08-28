"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CtaSection from "../components/CtaSection/CtaSection";
import styles from "./ServiceLayout.module.css";
import { motion, AnimatePresence } from "framer-motion";

export interface SolutionItem {
  title: string;
  desc: string;
}

export interface FrameworkItem {
  step: string;
  title: string;
  desc: string;
  outcome: string;
}

export interface WhyHadronItem {
  title: string;
  desc: string;
}

export interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  heroBgUrl?: string;
  heroVideoUrl?: string;
  heroVideoRotated?: boolean;
  solutionsImgUrl?: string;
  solutions: SolutionItem[];
  framework: FrameworkItem[];
  whyHadron: WhyHadronItem[];
  expertName?: string;
}

export default function ServiceLayout({
  title,
  subtitle,
  heroBgUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  heroVideoUrl,
  heroVideoRotated = false,
  solutionsImgUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // vivid abstract blue wave default
  solutions,
  framework,
  whyHadron,
  expertName,
}: ServiceLayoutProps) {
  const [activeTab, setActiveTab] = useState<'offerings' | 'framework'>('offerings');

  // Reduce content length to prevent overwhelming the hero section
  const trimSubtitle = (text: string) => {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    if (sentences.length > 2) {
      return sentences.slice(0, 2).join(' ').trim();
    }
    return text;
  };

  const shortSubtitle = trimSubtitle(subtitle);

  const allAiImages = [
    "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324512/ChatGPT_Image_Jul_29_2026_04_43_09_PM_akexyx.png",
    "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324511/ChatGPT_Image_Jul_29_2026_04_41_26_PM_sxuoeq.png",
    "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324510/ChatGPT_Image_Jul_29_2026_03_33_33_PM_p6zjbb.png",
    "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324505/ChatGPT_Image_Jul_29_2026_04_38_36_PM_lk2skj.png",
    "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324503/ChatGPT_Image_Jul_29_2026_04_22_55_PM_zej7ad.png",
    "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324498/ChatGPT_Image_Jul_29_2026_04_50_46_PM_tppenb.png",
    "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324497/ChatGPT_Image_Jul_29_2026_04_31_38_PM_nsgc22.png",
    "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324496/ChatGPT_Image_Jul_29_2026_03_20_31_PM_j7g9xc.png"
  ];

  // Filter out the solutionsImgUrl to guarantee no duplicates
  const availableWhyImages = allAiImages.filter(img => img !== solutionsImgUrl);
  const defaultWhyImages = availableWhyImages.slice(0, Math.max(4, whyHadron.length));

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO BANNER */}
        <section className={styles.heroBanner}>
          {heroVideoUrl ? (
            <video 
              src={heroVideoUrl}
              autoPlay
              loop
              muted
              playsInline
              className={heroVideoRotated ? styles.heroVideoRotated : styles.heroVideo}
            />
          ) : (
            <img src={heroBgUrl} alt="Hero background" className={styles.heroBg} />
          )}
          <div className={styles.heroOverlay}></div>
          <div className={`${styles.container} ${styles.heroContent}`}>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {shortSubtitle}
            </motion.p>
          </div>
        </section>

        {/* COMPREHENSIVE SOLUTIONS (New Asymmetric Layout) */}
        {solutions.length > 0 && (
          <section id="offerings" className={styles.solutionsSection}>
            <div className={styles.solutionsContainer}>
              {/* Left Sticky Sidebar */}
              <div className={styles.solutionsLeft}>
                <h2 className={styles.solutionsLeftTitle}>Our Offerings</h2>
                <p className={styles.solutionsLeftDesc}>
                  Leverage our end-to-end services and solutions that deliver measurable business impact across your entire enterprise.
                </p>
                <div className={styles.solutionsTabs}>
                  <div 
                    className={`${styles.solutionsTab} ${activeTab === 'offerings' ? styles.active : ''}`}
                    onClick={() => setActiveTab('offerings')}
                  >
                    Service Offerings
                  </div>
                  {framework.length > 0 && (
                    <div 
                      className={`${styles.solutionsTab} ${activeTab === 'framework' ? styles.active : ''}`}
                      onClick={() => setActiveTab('framework')}
                    >
                      Our Service Framework
                    </div>
                  )}
                </div>
              </div>

              {/* Right Content Area */}
              <div className={styles.solutionsRight} style={{ minHeight: '600px', backgroundColor: activeTab === 'framework' ? 'transparent' : '#ffffff', boxShadow: activeTab === 'framework' ? 'none' : '' }}>
                <AnimatePresence mode="wait">
                  {activeTab === 'offerings' && (
                    <motion.div 
                      key="offerings"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                      <div className={styles.solutionsImageWrapper}>
                        <img src={solutionsImgUrl} alt="Solutions banner" className={styles.solutionsImage} />
                      </div>
                      <div className={styles.solutionsListWrapper}>
                        <div className={styles.solutionsList}>
                          {solutions.map((sol, i) => (
                            <div key={i} className={styles.solutionItem}>
                              <span className={styles.solutionNumber}>
                                {String(i + 1).padStart(2, '0')}.
                              </span>
                              <div className={styles.solutionTextWrapper}>
                                <span className={styles.solutionTitle}>{sol.title}</span>
                                <span className={styles.solutionDesc}>{sol.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'framework' && (
                    <motion.div 
                      key="framework"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                      <div className={styles.solutionsImageWrapper}>
                        <img src={solutionsImgUrl} alt="Framework banner" className={styles.solutionsImage} />
                      </div>
                      <div className={styles.solutionsListWrapper}>
                        <div className={styles.solutionsList}>
                          {framework.map((step, i) => (
                            <div key={i} className={styles.solutionItem}>
                              <span className={styles.solutionNumber}>
                                {step.step}.
                              </span>
                              <div className={styles.solutionTextWrapper}>
                                <span className={styles.solutionTitle}>{step.title}</span>
                                <span className={styles.solutionDesc}>{step.desc}</span>
                                <span className={styles.solutionDesc} style={{ fontWeight: 600, color: '#1e3a8a', marginTop: '0.5rem' }}>
                                  Outcome: <span style={{ fontWeight: 400, color: '#6b7280' }}>{step.outcome}</span>
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>
        )}

        {/* WHY HADRON GBS? */}
        {whyHadron.length > 0 && (
          <section className={styles.whySection}>
            <div className={styles.container}>
              <div className={styles.whyHeader}>
                <h2 className={styles.whyTitle}>Why Hadron GBS?</h2>
              </div>
              <div className={styles.whyGrid}>
                {whyHadron.map((why, i) => (
                  <motion.div 
                    key={i} 
                    className={styles.whyCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className={styles.whyCardImgWrapper}>
                      <img src={defaultWhyImages[i % defaultWhyImages.length]} alt={why.title} className={styles.whyCardImg} />
                    </div>
                    <div className={styles.whyCardBody}>
                      <h3 className={styles.whyCardTitle}>{why.title}</h3>
                      <p className={styles.whyCardDesc}>{why.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <CtaSection 
        title={`Contact our ${expertName || "IT"} expert`} 
        subtitle="Contact us today, and let us help you achieve your business objectives." 
      />
      <Footer />
    </>
  );
}
