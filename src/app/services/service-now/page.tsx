"use client";

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../ServiceLayout.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import CtaSection from "../../components/CtaSection/CtaSection";

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
                  <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}>
                    <img 
                      src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788245410/Tenon_Logos-Dark_zelsgc.jpg" 
                      alt="Tennon Logo" 
                      style={{ height: '60px', width: 'auto', objectFit: 'contain' }} 
                    />
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
                  <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}>
                    <img 
                      src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788245410/pb_iptauc.png" 
                      alt="Precision Bridge Logo" 
                      style={{ height: '80px', width: 'auto', objectFit: 'contain', transform: 'scale(1.8)' }} 
                    />
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
      <CtaSection 
        title="Contact our ServiceNow expert" 
        subtitle="Contact us today, and let us help you achieve your business objectives." 
      />
      <Footer />
    </>
  );
}
