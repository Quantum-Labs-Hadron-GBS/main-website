/* eslint-disable */
"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
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
  const [isLoadingFinished, setIsLoadingFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 250]); // Parallax scroll effect

  // Loading Screen Timer & Video Trigger
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasPlayed = sessionStorage.getItem("introPlayed");
      if (hasPlayed) {
        setIsIntroFinished(true);
        setIsLoadingFinished(true);
        // Ensure video plays immediately on subsequent visits
        if (videoRef.current) {
          videoRef.current.play().catch(e => console.warn("Auto-play blocked:", e));
        }
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play().catch(e => console.warn("Auto-play blocked:", e));
          }
        }, 100);
      } else {
        const timer = setTimeout(() => {
          setIsLoadingFinished(true);
          if (videoRef.current) {
            videoRef.current.play().catch(e => console.warn("Auto-play blocked:", e));
          }
        }, 2800); // 2.8s total loading screen duration
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleSkip = () => {
    setIsIntroFinished(true);
    setActiveCaptionIndex(null);
    sessionStorage.setItem("introPlayed", "true");
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    if (isIntroFinished) return;
    const time = e.currentTarget.currentTime;
    
    if (time >= 16.4) {
      setIsIntroFinished(true);
      setActiveCaptionIndex(null);
      sessionStorage.setItem("introPlayed", "true");
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
      
      // Failsafe timer: force the intro to end after 16.6s real-time, but only start counting after loading finishes
      let timer: NodeJS.Timeout;
      if (isLoadingFinished && !sessionStorage.getItem("introPlayed")) {
        timer = setTimeout(() => {
          setIsIntroFinished(true);
          setActiveCaptionIndex(null);
          sessionStorage.setItem("introPlayed", "true");
        }, 16600);
      }
      return () => {
        if (timer) clearTimeout(timer);
      }
    } else {
      document.body.classList.remove("intro-running");
    }
  }, [isIntroFinished, isLoadingFinished]);

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.hero} id="hero" aria-label="Hero">
        
        {/* Background Video with Parallax */}
        <motion.video
          ref={videoRef as any}
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          onTimeUpdate={handleTimeUpdate as any}
          style={{
            position: 'absolute',
            top: '-15%',
            left: '-10%',
            width: '120%',
            height: '130%',
            objectFit: 'cover',
            zIndex: -2,
            y,
            willChange: 'transform',
          }}
        >
          <source src="https://res.cloudinary.com/ax6dtcht/video/upload/v1786108868/Untitled_design_czx0vh.mp4" type="video/mp4" />
        </motion.video>

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

        {/* Intro Elements (Logo + Captions) */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 1, pointerEvents: 'none', width: '100vw' }}>
          
          {/* Static Logo during intro */}
          <AnimatePresence>
            {!isIntroFinished && isLoadingFinished && (
              <motion.img 
                src="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324428/hadron_logo_white_wwzyij.png" 
                alt="Hadron Logo" 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{ width: '180px', height: 'auto', marginBottom: '2rem' }}
              />
            )}
          </AnimatePresence>

          {/* Cycling Captions */}
          <AnimatePresence mode="wait">
            {!isIntroFinished && isLoadingFinished && activeCaptionIndex !== null && (
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
                    <Link href="/services" id="hero-learn-more" className={styles.ctaGlass}>Explore Services</Link>
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
        {/* Loading Screen Overlay */}
        <AnimatePresence>
          {!isLoadingFinished && (
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: '#050508', // Deep cinematic black
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
              exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            >
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.img 
                  src="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324497/favicon-hadron_g5wrvr.png"
                  alt="Hadron Favicon"
                  style={{ width: '48px', height: '48px', zIndex: 2 }}
                  initial={{ marginRight: '-48px' }} // Start centered (overlapping text origin)
                  animate={{ marginRight: '16px' }} // Slide left to create a gap
                  transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }} 
                />
                <motion.span
                  style={{ 
                    color: 'white', 
                    fontSize: '2.5rem', 
                    fontWeight: 700, 
                    letterSpacing: '-0.03em',
                    zIndex: 1,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden'
                  }}
                  initial={{ width: 0, opacity: 0, paddingLeft: 0 }}
                  animate={{ width: 'auto', opacity: 1, paddingLeft: '8px' }}
                  transition={{ delay: 0.85, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  Hadron GBS
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </div>
  );
}
