"use client";

import React from "react";
import ServiceLayout from "../../components/ServiceLayout"; // Update relative path as needed
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import styles from "../../services/ServiceLayout.module.css";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.heroBanner}>
          <div className={styles.heroOverlay}></div>
          <div className={`${styles.container} ${styles.heroContent}`}>
            <h1 className={styles.heroTitle}>Responsible Ai</h1>
            <p className={styles.heroSubtitle}>This section is currently being optimized as part of our new AI-First strategy.</p>
          </div>
        </section>
      </main>
      <CtaSection title="Ready to transform?" subtitle="Contact us to get started." />
      <Footer />
    </>
  );
}
