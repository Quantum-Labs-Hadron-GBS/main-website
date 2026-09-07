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

    // 4. Arrow Keys Section Snapping (Full-Slide Animation Completion)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input or textarea
      const targetTag = (e.target as HTMLElement).tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(targetTag)) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        // Find all main sections on the page. We use .pin-spacer for GSAP pinned sections, 
        // and direct sections for regular content, avoiding nested sections.
        const sections = Array.from(document.querySelectorAll('.pin-spacer, section:not(.pin-spacer section), footer')) as HTMLElement[];
        if (sections.length === 0) return;
        
        if (e.key === 'ArrowDown') {
          // Find the next section whose bottom is visibly below the viewport bottom
          const nextSection = sections.find(sec => {
            const rect = sec.getBoundingClientRect();
            return rect.bottom > window.innerHeight + 10;
          });
          
          if (nextSection) {
            // Scroll to the BOTTOM of the section to complete all its animations
            const offset = Math.max(0, nextSection.offsetHeight - window.innerHeight);
            lenis.scrollTo(nextSection, { offset, duration: 1.2 });
          } else {
            lenis.scrollTo('bottom', { duration: 1.2 });
          }
        } else if (e.key === 'ArrowUp') {
          // Find the previous section whose top is visibly above the viewport top
          const prevSections = [...sections].reverse();
          const prevSection = prevSections.find(sec => {
            const rect = sec.getBoundingClientRect();
            return rect.top < -10;
          });
          
          if (prevSection) {
            // Scroll to the TOP of the section to rewind its animations
            lenis.scrollTo(prevSection, { offset: 0, duration: 1.2 });
          } else {
            lenis.scrollTo('top', { duration: 1.2 });
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <>{children}</>;
}
