/* eslint-disable */
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./HeroSection.module.css";
import PartnerMarquee from "../PartnerMarquee/PartnerMarquee";

const INTRO_CAPTIONS = [
  { key: 'intro-0', node: <>Where Challenges <br className={styles.mobileBreak} />Meet Intelligence.</> },
  { key: 'intro-1', node: <>Powered by <br className={styles.mobileBreak} />Hadron GBS</> },
  { key: 'intro-2', node: <>AI That Works <br className={styles.mobileBreak} />Beside You</> },
  { key: 'intro-3', node: <>Designed for <br className={styles.mobileBreak} />Simplicity</> },
  { key: 'intro-4', node: <>Connecting IT. <br className={styles.mobileBreak} />AI. Quantum.</> },
  { key: 'intro-5', node: <>Build <br className={styles.mobileBreak} />What's Next</> }
];

export default function HeroSection() {
  const [activeCaptionIndex, setActiveCaptionIndex] = useState<number | null>(0);
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  const handleSkip = () => {
    setIsIntroFinished(true);
    setActiveCaptionIndex(null);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    if (isIntroFinished) return;
    const time = e.currentTarget.currentTime;
    
    if (time >= 16.4) {
      setIsIntroFinished(true);
      setActiveCaptionIndex(null);
    } else if (time >= 14.0) {
      setActiveCaptionIndex(5);
    } else if (time >= 10.8) {
      setActiveCaptionIndex(4);
    } else if (time >= 8.0) {
      setActiveCaptionIndex(3);
    } else if (time >= 4.8) {
      setActiveCaptionIndex(2);
    } else if (time >= 2.5) {
      setActiveCaptionIndex(1);
    } else {
      setActiveCaptionIndex(0);
    }
  };

  // Manage global body class for navbar hiding
  useEffect(() => {
    if (!isIntroFinished) {
      document.body.classList.add("intro-running");
      // Failsafe timer: force the intro to end after 16.6s real-time
      const timer = setTimeout(() => {
        setIsIntroFinished(true);
        setActiveCaptionIndex(null);
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
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, pointerEvents: 'none', width: '100vw' }}>
          <AnimatePresence mode="wait">
            {!isIntroFinished && activeCaptionIndex !== null && (
              <motion.div
                key={INTRO_CAPTIONS[activeCaptionIndex].key}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                <h2 className={styles.introCaptionText}>{INTRO_CAPTIONS[activeCaptionIndex].node}</h2>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Skip Button */}
        <AnimatePresence>
          {!isIntroFinished && (
            <motion.button
              className={styles.skipBtn}
              onClick={handleSkip}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Skip Intro ↗
            </motion.button>
          )}
        </AnimatePresence>

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
