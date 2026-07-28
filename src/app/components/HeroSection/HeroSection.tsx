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
            background: 'radial-gradient(circle at bottom left, rgba(26, 115, 232, 0.4) 0%, transparent 50%), linear-gradient(to left, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.4) 100%)', 
            zIndex: -1 
          }} 
        />

        {/* Main Content Box */}
        <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1 }}>
          <div className={styles.content}>



            {/* Headline */}
            <h1 className={styles.headline}>
              <span className={styles.headlineLine}>Connecting Enterprise</span>
              <span className={styles.headlineLine}>Systems That Matter</span>
            </h1>

            {/* Sub copy */}
            <p className={styles.subCopy}>
              We consult, build, and manage enterprise platforms so digital and cloud systems run reliably every day.
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
        
        {/* Marquee Section exactly 10px above bottom of Hero section */}
        <div className={styles.marqueeSection}>
          <PartnerMarquee />
        </div>
      </section>
    </div>
  );
}
