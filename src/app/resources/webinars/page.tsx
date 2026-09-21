"use client";

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import styles from "./Webinars.module.css";
import { motion } from "framer-motion";
import { Play, ArrowRight, Mic, Briefcase, HelpCircle } from "lucide-react";

export default function WebinarsPage() {
  const pastWebinars = [
    {
      image: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1789979573/crm_web_ghbggh.png",
      videoUrl: "https://www.youtube.com/watch?v=XYJRIYvGyzc&feature=youtu.be"
    },
    {
      image: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1789979581/webinar2_skmk43.png",
      videoUrl: "https://www.youtube.com/watch?v=Qs2ASM7fToE&feature=youtu.be"
    }
  ];

  const library = [
    {
      category: "Core Transformation",
      title: "Where Programs Actually Fail",
      desc: "The three inflection points that decide a program’s fate."
    },
    {
      category: "Reliability",
      title: "Building for Reliability",
      desc: "SRE fundamentals adapted for enterprise scale."
    },
    {
      category: "Advisory",
      title: "Making the ROI Case for Modernization",
      desc: "A framework CFOs and CTOs both sign off on."
    },
    {
      category: "Q&A",
      title: "Ask Our Architects Anything",
      desc: "Unedited questions from a live audience."
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={`${styles.container} ${styles.heroContent}`}>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Live Conversations.<br />Real Answers.
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ideas, frameworks, and lessons from the field — written by the architects and engineers who build enterprise platforms every day.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="/contact" className={styles.primaryBtn}>
                See Upcoming Webinars
              </a>
            </motion.div>
            
            <motion.p 
              className={styles.heroDesc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              No pitch decks disguised as thought leadership. Our webinars are working sessions — we bring a point of view, share what we’re seeing across industries, and leave real time for your questions.
            </motion.p>
          </div>
        </section>

        {/* PAST SESSIONS */}
        <section id="past" className={styles.upcomingSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>View Past Webinars</h2>
            <p className={styles.sectionSubtitle}>Catch up on our recent sessions and discussions.</p>
            
            <div className={styles.upcomingGrid}>
              {pastWebinars.map((webinar, idx) => (
                <a href={webinar.videoUrl} target="_blank" rel="noopener noreferrer" className={styles.webinarCard} key={idx} style={{ textDecoration: 'none' }}>
                  <div className={styles.webinarImgWrapper}>
                    <img src={webinar.image} alt="Webinar Thumbnail" className={styles.webinarImg} />
                    <div className={styles.playIconWrapper}>
                      <Play fill="currentColor" size={24} />
                    </div>
                  </div>
                  <div className={styles.webinarContent} style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
                    <div className={styles.watchBtn} style={{ marginTop: '0', paddingTop: '0', borderTop: 'none', color: '#1e293b' }}>
                      Watch Session <ArrowRight size={18} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ON DEMAND LIBRARY */}
        <section className={styles.librarySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>On-Demand Library</h2>
            <p className={styles.sectionSubtitle}>View past webinars and catch up on sessions you missed.</p>
            
            <div className={styles.libraryGrid}>
              {library.map((item, idx) => (
                <div className={styles.libraryCard} key={idx}>
                  <div className={styles.libraryCategory}>{item.category}</div>
                  <h3 className={styles.libraryTitle}>{item.title}</h3>
                  <p className={styles.libraryDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ATTEND */}
        <section className={styles.whySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why Attend</h2>
            <div className={styles.whyGrid}>
              <div className={styles.whyCard}>
                <div className={styles.whyCardImgWrapper}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788330307/eng_m2_me3czz.avif" alt="Direct access" className={styles.whyCardImg} />
                </div>
                <div className={styles.whyCardBody}>
                  <h3 className={styles.whyTitle}>Direct access</h3>
                  <p className={styles.whyDesc}>You hear from the people doing the work, not sales reps.</p>
                </div>
              </div>
              
              <div className={styles.whyCard}>
                <div className={styles.whyCardImgWrapper}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788328794/cloud_m1_xopdvs.png" alt="Practical frameworks" className={styles.whyCardImg} />
                </div>
                <div className={styles.whyCardBody}>
                  <h3 className={styles.whyTitle}>Practical frameworks</h3>
                  <p className={styles.whyDesc}>Take away something you can apply the same week.</p>
                </div>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.whyCardImgWrapper}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788327256/unified_m1_auvyhg.webp" alt="Live Q&A" className={styles.whyCardImg} />
                </div>
                <div className={styles.whyCardBody}>
                  <h3 className={styles.whyTitle}>Live Q&A</h3>
                  <p className={styles.whyDesc}>Bring your hardest questions — we answer them on air.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <CtaSection title="Missed a session?" subtitle="Every webinar is recorded and added to our on-demand library within 48 hours." />
      <Footer />
    </>
  );
}
