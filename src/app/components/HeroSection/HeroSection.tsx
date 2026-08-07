/* eslint-disable */
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./HeroSection.module.css";
import PartnerMarquee from "../PartnerMarquee/PartnerMarquee";

export default function HeroSection() {
  const [activeCaption, setActiveCaption] = useState<string | null>("Where Challenges Meet Intelligence.");
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    if (isIntroFinished) return;
    const time = e.currentTarget.currentTime;
    
    // Changed to 16.4s because video might loop before exactly hitting 16.600s
    if (time >= 16.4) {
      setIsIntroFinished(true);
      setActiveCaption(null);
    } else if (time >= 14.0) {
      setActiveCaption("Build What's Next");
    } else if (time >= 10.8) {
      setActiveCaption("Connecting IT. AI. Quantum.");
    } else if (time >= 8.0) {
      setActiveCaption("Designed for Simplicity");
    } else if (time >= 4.8) {
      setActiveCaption("AI That Works Beside You");
    } else if (time >= 2.5) {
      setActiveCaption("Powered by Hadron GBS");
    } else {
      setActiveCaption("Where Challenges Meet Intelligence.");
    }
  };

  // Manage global body class for navbar hiding
  useEffect(() => {
    if (!isIntroFinished) {
      document.body.classList.add("intro-running");
      // Failsafe timer: force the intro to end after 16.6s real-time
      const timer = setTimeout(() => {
        setIsIntroFinished(true);
        setActiveCaption(null);
      }, 16600);
      return () => {
        clearTimeout(timer);
      }
    } else {
      document.body.classList.remove("intro-running");
    }
  }, [isIntroFinished]);

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.hero} id="hero" aria-label="Hero">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          onTimeUpdate={handleTimeUpdate}
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
          <source src="https://res.cloudinary.com/ax6dtcht/video/upload/v1786108868/Untitled_design_czx0vh.mp4" type="video/mp4" />
        </video>

        {/* Darkening Overlay for Video (appears after intro) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isIntroFinished ? 0.6 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ position: 'absolute', inset: 0, backgroundColor: '#000000', zIndex: -1 }}
        />

        {/* Gradient Overlay */}
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'radial-gradient(circle at bottom left, rgba(26, 115, 232, 0.4) 0%, transparent 50%), linear-gradient(to left, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.4) 100%)', 
            zIndex: -1 
          }} 
        />

        {/* Intro Captions */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, pointerEvents: 'none' }}>
          <AnimatePresence mode="wait">
            {!isIntroFinished && activeCaption && (
              <motion.div
                key={activeCaption}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h2 className={styles.introCaptionText}>{activeCaption}</h2>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main Content Box */}
        <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
          <AnimatePresence>
            {isIntroFinished && (
              <motion.div 
                className={styles.content}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
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
                    <a href="#services" id="hero-learn-more" className={styles.ctaGlass}>Learn More</a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Marquee Section exactly 10px above bottom of Hero section */}
        <AnimatePresence>
          {isIntroFinished && (
            <motion.div 
              className={styles.marqueeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <PartnerMarquee />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
