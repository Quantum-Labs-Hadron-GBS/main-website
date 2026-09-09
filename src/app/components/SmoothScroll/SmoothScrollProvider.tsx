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
      const mm = gsap.matchMedia();

      // Only run heavy parallax effects on desktop/tablet to prevent mobile GPU lag
      mm.add("(min-width: 768px)", () => {
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
      });
    }, 500);

    // 4. Arrow Keys Advanced Snap Architecture (1 arrow = 1 section/card)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input or textarea
      const targetTag = (e.target as HTMLElement).tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(targetTag)) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        const snapPoints: number[] = [];
        
        // A. Main Sections & Footer
        const sections = Array.from(document.querySelectorAll('.pin-spacer, section:not(.pin-spacer section), footer')) as HTMLElement[];
        sections.forEach(sec => {
          const rect = sec.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          snapPoints.push(absoluteTop); // Top snap
          
          if (sec.offsetHeight > window.innerHeight || sec.tagName === 'FOOTER') {
            snapPoints.push(absoluteTop + sec.offsetHeight - window.innerHeight); // Bottom snap
          }
        });

        // B. Custom Snap Points (Cards/Elements)
        const customPoints = Array.from(document.querySelectorAll('[data-snap-point="true"]')) as HTMLElement[];
        customPoints.forEach(el => {
          const align = el.getAttribute('data-snap-align') || 'center';
          const offset = parseInt(el.getAttribute('data-snap-offset') || '0', 10);
          const rect = el.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          
          if (align === 'center') {
            snapPoints.push(absoluteTop + (rect.height / 2) - (window.innerHeight / 2) + offset);
          } else if (align === 'top') {
            snapPoints.push(absoluteTop - offset);
          } else if (align === 'bottom') {
            snapPoints.push(absoluteTop + rect.height - window.innerHeight - offset);
          }
        });

        // Sort all possible target scroll positions
        snapPoints.sort((a, b) => a - b);
        
        // Remove close duplicates (within 20px) to prevent tiny redundant jumps
        const uniquePoints = snapPoints.filter((p, i, arr) => i === 0 || p > arr[i - 1] + 20);
        
        const currentY = window.scrollY;
        
        if (e.key === 'ArrowDown') {
          // Find the next Y coordinate strictly below current scroll
          const nextY = uniquePoints.find(y => y > currentY + 10);
          if (nextY !== undefined) {
            lenis.scrollTo(nextY, { duration: 1.2 });
          } else {
            lenis.scrollTo('bottom', { duration: 1.2 });
          }
        } else if (e.key === 'ArrowUp') {
          // Find the previous Y coordinate strictly above current scroll
          const prevPoints = [...uniquePoints].reverse();
          const prevY = prevPoints.find(y => y < currentY - 10);
          if (prevY !== undefined) {
            lenis.scrollTo(prevY, { duration: 1.2 });
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
