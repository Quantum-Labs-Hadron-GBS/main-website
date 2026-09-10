"use client";

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./SuccessStories.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SuccessStoriesPage() {
  const metrics = [
    { value: "60%", label: "Avg. incident reduction" },
    { value: "87d", label: "Fastest cloud migration" },
    { value: "2x", label: "Faster time-to-market" },
    { value: "12+", label: "Teams governed at scale" }
  ];

  const stories = [
    {
      industry: "Core Transformation",
      metric: "72%",
      metricDesc: "Fewer release failures",
      title: "Governance That Scaled With the Business",
      subtitle: "Building delivery discipline across 12 product teams",
      challenge: "A rapidly scaling tech company had 12 autonomous product teams working in silos, causing release collisions and quality drops.",
      approach: "Introduced a federated governance model with shared delivery gates, unified CI/CD pipelines, and automated testing standards.",
      result: "Release failure rate dropped by 72%. Executive confidence restored."
    },
    {
      industry: "Financial Services",
      metric: "2x",
      metricDesc: "Faster to market",
      title: "Cutting Time-to-Market in Half",
      subtitle: "Rapid application engineering for a fintech scale-up",
      challenge: "A fintech scale-up was losing competitive ground due to a monolithic architecture and 18-week feature cycles.",
      approach: "Deployed our Rapid Application Engineering framework, decomposing the monolith into microservices and implementing low-code acceleration.",
      result: "Average feature cycle dropped from 18 weeks to 8. Two new revenue-generating products launched within the first quarter."
    },
    {
      industry: "Retail",
      metric: "60%",
      metricDesc: "Fewer incidents",
      title: "From Fragile to Fault-Tolerant",
      subtitle: "How a global retailer cut platform incidents by 60% in two quarters",
      challenge: "A global retailer’s core commerce platform was suffering multiple outages during peak shopping seasons, threatening revenue.",
      approach: "Introduced observability-first engineering, re-architected the checkout flow for high availability, and implemented chaos engineering practices.",
      result: "60% reduction in platform incidents across two quarters, with zero downtime during Black Friday."
    },
    {
      industry: "Financial Services",
      metric: "87",
      metricDesc: "Days to migrate",
      title: "90 Days to Cloud-Native",
      subtitle: "A legacy-to-cloud migration without a single missed SLA",
      challenge: "A financial services firm needed to exit an on-premise data center within a strict 90-day window due to lease expiration.",
      approach: "Phased lift-and-modernise using our Cloud Adoption framework, utilizing automated migration tools and infrastructure-as-code.",
      result: "Full cloud migration completed in 87 days. Zero SLA breaches and immediate performance improvements."
    }
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO BANNER */}
        <section className={styles.heroBanner}>
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
            alt="Success Stories Hero Background" 
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
              Resources
            </motion.span>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Proof, Not Promises
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real transformations, real numbers, real teams. See how enterprises worked with Hadron GBS to build platforms that hold together.
            </motion.p>
          </div>
        </section>

        {/* METRICS GRID */}
        <section className={styles.metricsSection}>
          <div className={styles.container}>
            <div className={styles.metricsGrid}>
              {metrics.map((item, index) => (
                <motion.div 
                  key={index}
                  className={styles.metricItem}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.metricValue}>{item.value}</div>
                  <div className={styles.metricLabel}>{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STORIES LIST */}
        <section className={styles.storiesSection}>
          <div className={styles.container}>
            <div className={styles.storiesIntro}>
              <motion.p 
                className={styles.storiesIntroText}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Every engagement starts with a hard question and ends with a measurable outcome. These are the stories behind the systems we’ve helped stabilize, modernize, and scale — told with the detail that matters to technical and business stakeholders alike.
              </motion.p>
            </div>

            {stories.map((story, index) => (
              <motion.div 
                key={index}
                className={styles.storyCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.storyHeader}>
                  <div className={styles.storyIndustry}>{story.industry}</div>
                  <div className={styles.storyMetric}>{story.metric}</div>
                  <div className={styles.storyMetricDesc}>{story.metricDesc}</div>
                </div>
                <div className={styles.storyBody}>
                  <h2 className={styles.storyTitle}>{story.title}</h2>
                  <h3 className={styles.storySubtitle}>{story.subtitle}</h3>
                  
                  <div className={styles.storySection}>
                    <div className={styles.storySectionTitle}>Challenge</div>
                    <p className={styles.storySectionText}>{story.challenge}</p>
                  </div>
                  
                  <div className={styles.storySection}>
                    <div className={styles.storySectionTitle}>Approach</div>
                    <p className={styles.storySectionText}>{story.approach}</p>
                  </div>
                  
                  <div className={styles.storySection} style={{ marginBottom: 0 }}>
                    <div className={styles.storySectionTitle}>Result</div>
                    <p className={styles.storySectionText}>{story.result}</p>
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
              Want results like these?
            </motion.h2>
            <motion.p 
              className={styles.ctaSubtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let’s talk about where your platform stands today — and what a stable, ROI-driven roadmap could look like.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/contact" className={styles.ctaBtn}>
                Schedule a Discovery Discussion
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
