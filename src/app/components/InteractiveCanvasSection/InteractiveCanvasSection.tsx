"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./InteractiveCanvasSection.module.css";



const TABS = ["INDUSTRIES", "PLATFORMS", "EXCELLENCE"];

// Handwritten content for each tab
const TAB_CONTENT = [
  // Industries
  [
    { title: "Manufacturing", body: "We help manufacturing organizations leverage AI, automation, and IoT to optimize supply chains and increase production efficiency." },
    { title: "Financial Services", body: "Empowering financial institutions with secure, scalable cloud solutions and agentic AI to enhance customer experience and compliance." },
    { title: "Retail", body: "Transforming retail through unified commerce solutions, predictive analytics, and personalized customer journeys." },
    { title: "Government", body: "Modernizing public services with secure cloud infrastructure, digital workflows, and citizen-centric applications." },
    { title: "Education", body: "Enhancing educational experiences through digital transformation, secure learning platforms, and operational efficiency." }
  ],
  // Platforms
  [
    { title: "ServiceNow", body: "As a ServiceNow Partner, we are committed to empowering organizations with state-of-the-art technologies, spearheading digital transformation initiatives." },
    { title: "BMC Helix", body: "We partner with BMC Software to deliver innovative solutions for IT service management, cloud management, and digital enterprise automation." },
    { title: "Salesforce", body: "Hadron partners with Salesforce, merging expertise to redefine global business solutions. Our collaboration unlocks innovation and drives growth." },
    { title: "SAP", body: "We deliver SAP solutions that streamline enterprise operations, from ERP migrations to intelligent enterprise architecture and core modernization." },
    { title: "Microsoft Cloud", body: "As a certified Microsoft Solutions Partner, Hadron GBS empowers enterprises to modernize their infrastructure and reinvent productivity." },
    { title: "AWS Cloud", body: "We accelerate your journey to AWS with secure, scalable cloud architecture and AI-powered data solutions." }
  ],
  // Excellence
  [
    { title: "EXPERIENCE", body: "Leading Business through expertise. We have a team of experienced and skilled professionals who have worked with a diverse range of clients across different industries." },
    { title: "QUALITY", body: "Delivering exceptional results. We understand that quality is as important as timeliness for any business. Our team ensures that the solutions meet your expectations." },
    { title: "VALUE", body: "Smart investment for your business. We offer cost-effective solutions that meet your budget requirements and provide customized solutions that are efficient." },
    { title: "APPROACH", body: "Solutions tailored to your unique needs. We take a personalized approach to every project and work closely with our clients to understand their specific needs." }
  ]
];

export default function InteractiveCanvasSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);



  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        <div className={styles.notepadContainer}>
          
          {/* Visually hidden text to force the browser to preload the Caveat font immediately */}
          <span style={{ fontFamily: "'Caveat', cursive", position: "absolute", opacity: 0, pointerEvents: "none" }}>Preload</span>

          {/* Header Tabs (iOS 18 Liquid Glass Pill) */}
          <div 
            className={styles.tabsContainer} 
            onMouseLeave={() => setHoveredTab(null)}
            role="tablist"
            aria-label="Capabilities"
            onKeyDown={(e) => {
              let newIdx = activeTab;
              if (e.key === "ArrowRight") {
                newIdx = (activeTab + 1) % TABS.length;
              } else if (e.key === "ArrowLeft") {
                newIdx = (activeTab - 1 + TABS.length) % TABS.length;
              } else if (e.key === "Home") {
                newIdx = 0;
              } else if (e.key === "End") {
                newIdx = TABS.length - 1;
              } else {
                return;
              }
              e.preventDefault();
              setActiveTab(newIdx);
              tabRefs.current[newIdx]?.focus();
            }}
          >
            {TABS.map((tab, idx) => {
              const isActive = activeTab === idx;
              const isHovered = hoveredTab === idx;
              const hasPill = hoveredTab !== null ? isHovered : isActive;

              return (
                <button
                  key={tab}
                  ref={(el) => { tabRefs.current[idx] = el; }}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${idx}`}
                  id={`tab-${idx}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`${styles.tabButton} ${isActive ? styles.tabButtonActive : ""}`}
                  onClick={() => setActiveTab(idx)}
                  onMouseEnter={() => setHoveredTab(idx)}
                  style={{ position: 'relative' }}
                >
                  {hasPill && (
                    <motion.div
                      layoutId="canvasTabPill"
                      className={styles.activePill}
                      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.8 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{tab}</span>
                </button>
              );
            })}
          </div>

          {/* HTML Content Layer */}
          <div 
            className={styles.contentWrapper}
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            tabIndex={0}
          >
            <div className={`${styles.contentGrid} ${activeTab === 1 ? styles.partnersLayout : ''}`}>
              {TAB_CONTENT[activeTab].map((item, idx) => (
                <div key={idx} className={styles.contentItem}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
