"use client";

import React from "react";
import styles from "./HeroArchitecturalBackground.module.css";

export default function HeroArchitecturalBackground() {
  return (
    <div className={styles.backgroundContainer} aria-hidden="true">
      <img
        src="/hero-background.png"
        alt=""
        className={styles.backgroundImage}
        fetchPriority="high"
        loading="eager"
      />
    </div>
  );
}
