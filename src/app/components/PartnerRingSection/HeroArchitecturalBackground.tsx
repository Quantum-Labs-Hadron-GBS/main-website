"use client";

import React from "react";
import styles from "./HeroArchitecturalBackground.module.css";

export default function HeroArchitecturalBackground() {
  return (
    <div className={styles.backgroundContainer} aria-hidden="true">
      {/* 1. Bottom-Left Warm Orange Gradient Design */}
      <img
        src="/images/hero-gradient-orange.jpg"
        alt="Hadron GBS - Enterprise Digital Transformation for ServiceNow, Salesforce, BMC Helix and SAP"
        className={styles.bottomLeftGradient}
        fetchPriority="high"
        loading="eager"
      />

      {/* 2. Top-Right Deep Navy Blue Gradient Design */}
      <img
        src="/images/hero-gradient-navy.jpg"
        alt="Hadron GBS - Cloud Architecture & Solutions for AWS, Microsoft Azure and Enterprise Platforms"
        className={styles.topRightGradient}
        fetchPriority="high"
        loading="eager"
      />
    </div>
  );
}
