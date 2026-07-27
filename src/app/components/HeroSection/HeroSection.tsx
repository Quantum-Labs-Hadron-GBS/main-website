/* eslint-disable */
"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";
import PartnerMarquee from "../PartnerMarquee/PartnerMarquee";

export default function HeroSection() {
  return (
    <div className={styles.heroWrapper}>
      <section className={styles.hero} id="hero" aria-label="Hero">
        
        {/* Background Video (Optimized for performance) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -2,
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          {/* Cloudinary f_auto,q_auto,h_1080,c_limit added for 1080p max resolution */}
          <source src="https://res.cloudinary.com/djxbxhgat/video/upload/f_auto,q_auto,h_1080,c_limit/v1784804662/20610-312672589_lscygw.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay for Text Readability - Darker on the right */}
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to left, rgba(9,5,20,0.9) 0%, rgba(9,5,20,0.3) 100%)', 
            zIndex: -1 
          }} 
        />

        {/* Main Content Box */}
        <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1 }}>
          <div className={styles.content}>

            {/* Eyebrow */}
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Optimize Your Workflow
            </div>

            {/* Headline */}
            <h1 className={styles.headline}>
              <span className={styles.headlineLine}>Your Enterprise</span>
              <span className={styles.headlineLine}>Platforms Should</span>
              <span className={styles.headlineLine}>Work as Hard as You Do</span>
            </h1>

            {/* Sub copy */}
            <p className={styles.subCopy}>
              Hadron GBS turns complex technology investments into real operational outcomes. From strategy to managed services, we make enterprise platforms deliver what was promised.
            </p>

            {/* Action Row: CTAs */}
            <div className={styles.actionRow}>
              {/* CTAs */}
              <div className={styles.ctaRow}>
                <a href="#services" id="hero-get-demo" className={styles.ctaPrimary}>Start Free Trial →</a>
                <a href="#contact" id="hero-see-product" className={styles.ctaSecondary}>
                  Book a Demo →
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Marquee Section exactly below the Hero section */}
      <div className={styles.marqueeSection}>
        <PartnerMarquee />
      </div>
    </div>
  );
}
