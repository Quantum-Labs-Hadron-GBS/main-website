"use client";

import React from "react";
import styles from "./HeroArchitecturalBackground.module.css";

export default function HeroArchitecturalBackground() {
  return (
    <div className={styles.backgroundContainer} aria-hidden="true">
      {/* 1. Bottom-Left Warm Orange Gradient Design */}
      <div className={styles.bottomLeftWrapper}>
        <img
          src="/images/hero-gradient-orange.png"
          alt=""
          role="presentation"
          className={styles.bottomLeftGradient}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (!target.src.endsWith(".jpg")) {
              target.src = "/images/hero-gradient-orange.jpg";
            }
          }}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* 2. Top-Right Soft Navy Blue Gradient with <= 80px surrounding fade merge */}
      <div className={styles.topRightWrapper}>
        <div className={styles.topRightAura} />
        <img
          src="/images/hero-gradient-navy.png"
          alt=""
          role="presentation"
          className={styles.topRightGradient}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (!target.src.endsWith(".jpg")) {
              target.src = "/images/hero-gradient-navy.jpg";
            }
          }}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
