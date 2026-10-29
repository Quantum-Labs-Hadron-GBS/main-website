/* eslint-disable */
"use client";

// The cinematic intro (loading screen + timed captions + skip) was removed after commit 08ee0da;
// restore it from git history if needed.

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import PartnerMarquee from "../PartnerMarquee/PartnerMarquee";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Some browsers refuse autoplay (e.g. Safari in macOS Low Power Mode): start on the first user gesture
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const events = ["pointerdown", "keydown", "touchstart", "wheel"] as const;
    const resume = () => {
      video.play().catch(() => {});
      events.forEach((ev) => window.removeEventListener(ev, resume));
    };
    video.play().catch(() => {
      events.forEach((ev) => window.addEventListener(ev, resume, { passive: true }));
    });
    return () => events.forEach((ev) => window.removeEventListener(ev, resume));
  }, []);

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.hero} id="hero" aria-label="Hero">

        {/* Background Video */}
        <video
          ref={videoRef}
          data-no-parallax
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
          <source src="https://res.cloudinary.com/ax6dtcht/video/upload/v1786108868/Untitled_design_czx0vh.mp4" type="video/mp4" />
        </video>

        {/* Darkening Overlay for Video (15% lighter than before: 0.6 → 0.51) */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#000000', opacity: 0.51, zIndex: -1 }} />

        {/* Gradient Overlay (dark stops 15% lighter: 0.95 → 0.81, 0.4 → 0.34) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at bottom left, rgba(26, 115, 232, 0.4) 0%, transparent 50%), linear-gradient(to left, rgba(13,17,23,0.81) 0%, rgba(13,17,23,0.34) 100%)',
            zIndex: -1
          }}
        />

        {/* Main Content Box */}
        <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
          <div className={styles.content}>
            {/* Headline */}
            <h1 className={styles.headline}>
              <span className={styles.headlineLine}>Enterprise Platforms,</span>
              <span className={styles.headlineLine}>
                Made <span className={styles.headlineAccent}>Intelligent.</span>
              </span>
            </h1>

            {/* Sub copy */}
            <p className={styles.subCopy}>
              Hadron GBS helps enterprises turn AI into operational advantage. So your platforms don&apos;t just run; they predict, adapt, and improve.
            </p>

            {/* Action Row: CTA */}
            <div className={styles.actionRow}>
              <div className={styles.ctaRow}>
                <Link href="/contact" id="hero-book-assessment" className={styles.ctaGlass}>
                  Book Free Assessment <span aria-hidden="true" style={{ marginLeft: '0.5rem' }}>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Partner logos below the video box */}
      <div className={styles.marqueeSection}>
        <PartnerMarquee />
      </div>
    </div>
  );
}
