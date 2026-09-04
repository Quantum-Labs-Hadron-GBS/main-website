"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Initialize Lenis for buttery smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2, // Enhances mobile scroll handling
    });

    // 2. Sync GSAP ScrollTrigger with Lenis
    gsap.registerPlugin(ScrollTrigger);
    
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 3. Global Parallax Injection (Non-Destructive)
    // Automatically apply a subtle parallax effect to specific background elements across the site
    setTimeout(() => {
      const bgWords = document.querySelectorAll('[class*="bgWord"]'); // Target huge background words (e.g., Footer)
      bgWords.forEach((el) => {
        gsap.to(el, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });

      // Target background videos globally to give them a slight parallax pull
      const videos = document.querySelectorAll('video');
      videos.forEach((video) => {
        // Only apply if it looks like a background video (absolute positioning)
        const computedStyle = window.getComputedStyle(video);
        if (computedStyle.position === 'absolute' || computedStyle.position === 'fixed') {
          gsap.to(video, {
            y: "15%",
            ease: "none",
            scrollTrigger: {
              trigger: video.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          });
        }
      });
    }, 500);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <>{children}</>;
}
