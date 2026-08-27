"use client";

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../ServiceLayout.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceNowHubPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO BANNER */}
        <section className={styles.heroBanner}>
          <video 
            src="https://res.cloudinary.com/ax6dtcht/video/upload/v1785326115/From_Klickpin.com-_Classy_DIY_gift_ideas_that_feel_fresh_elevated_and_surprisingly_easy_to_recreate_at_home_for_people_who_want_stylish_ideas_on_a_brkwa8.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroVideoRotated}
          />
          <div className={styles.heroOverlay}></div>
          <div className={`${styles.container} ${styles.heroContent}`}>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Unleash the Power of ServiceNow
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our specialized offerings built on the world's leading enterprise workflow platform. Choose a solution below to explore how we drive marketing excellence and risk-free data migrations.
            </motion.p>
          </div>
        </section>

        <section className={styles.whySection} style={{ minHeight: '50vh' }}>
          <div className={styles.container}>
            <div className={styles.whyHeader}>
              <h2 className={styles.whyTitle}>ServiceNow Specialized Offerings</h2>
            </div>
            <div className={styles.whyGrid} style={{ gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
              
              <Link href="/services/service-now/tennon" style={{ textDecoration: 'none' }}>
                <motion.div 
                  className={styles.whyCard}
                  style={{ height: '100%', padding: '4rem 2rem' }}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(13, 110, 253, 0.15)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className={styles.iconCircle} style={{ margin: '0 auto 2rem auto', backgroundColor: 'rgba(244, 124, 54, 0.1)', color: '#F47C36' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h3 className={styles.whyCardTitle} style={{ fontSize: '1.8rem' }}>Tennon</h3>
                  <p className={styles.whyCardDesc} style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
                    Unify Marketing & Enterprise Operations with Hadron GBS & Tennon. Streamline planning and campaign execution directly within ServiceNow.
                  </p>
                  <span style={{ color: '#0d6efd', fontWeight: 'bold', marginTop: '2rem', display: 'inline-block' }}>Explore Tennon &rarr;</span>
                </motion.div>
              </Link>

              <Link href="/services/service-now/precision-bridge" style={{ textDecoration: 'none' }}>
                <motion.div 
                  className={styles.whyCard}
                  style={{ height: '100%', padding: '4rem 2rem' }}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(13, 110, 253, 0.15)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className={styles.iconCircle} style={{ margin: '0 auto 2rem auto', backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0d6efd' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 16 12 12 8 16"></polyline>
                      <line x1="12" y1="12" x2="12" y2="21"></line>
                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                      <polyline points="16 16 12 12 8 16"></polyline>
                    </svg>
                  </div>
                  <h3 className={styles.whyCardTitle} style={{ fontSize: '1.8rem' }}>Precision Bridge</h3>
                  <p className={styles.whyCardDesc} style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
                    Accelerate your ServiceNow migrations. Move millions of records accurately without custom development or risk.
                  </p>
                  <span style={{ color: '#0d6efd', fontWeight: 'bold', marginTop: '2rem', display: 'inline-block' }}>Explore Precision Bridge &rarr;</span>
                </motion.div>
              </Link>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
