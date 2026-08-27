"use client";

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Videos.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function VideosPage() {
  const videoIds = [
    "XYJRIYvGyzc",
    "xu2sNA5LXww",
    "BzbQj_IsFvA",
    "Qs2ASM7fToE",
    "Ny37JBq9hGY",
    "bLxFnQDD8_E",
    "TAhYW2r_uR8",
    "XJY6Bqfwe6w",
    "81xnnTN3CSg",
    "BTmq4GNAUJI",
    "cQO1uN-R7jE",
    "daAWJNCsTzg",
    "kCQfLLvZuNw"
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO BANNER */}
        <section className={styles.heroBanner}>
          <img 
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop" 
            alt="Videos Hero Background" 
            className={styles.heroBg} 
          />
          <div className={styles.heroOverlay}></div>
          <div className={`${styles.container} ${styles.heroContent}`}>
            <motion.span 
              className={styles.categoryTag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Resources / Videos
            </motion.span>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hadron GBS Videos
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Check out our videos featuring Hadron GBS webinars, employee testimonials, celebrations, and success stories.
            </motion.p>
          </div>
        </section>

        {/* VIDEOS BENTO GRID */}
        <section className={styles.videosSection}>
          <div className={styles.container}>
            <div className={styles.videoGrid}>
              {videoIds.map((id, index) => {
                // Make the 1st and 6th video larger in the bento grid
                const isFeatured = index === 0 || index === 5;
                
                return (
                  <motion.div 
                    key={id}
                    className={`${styles.videoCard} ${isFeatured ? styles.videoCardFeatured : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                  >
                    <iframe 
                      className={styles.iframeWrapper}
                      src={`https://www.youtube.com/embed/${id}`} 
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </motion.div>
                );
              })}
            </div>
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
