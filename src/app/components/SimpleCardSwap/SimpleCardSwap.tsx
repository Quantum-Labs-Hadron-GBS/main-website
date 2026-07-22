"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SimpleCardSwap.module.css";

interface CardSwapProps {
  children: ReactNode[];
  cardDistance?: number; // scale difference or depth
  verticalDistance?: number; // y offset per card
  delay?: number;
  pauseOnHover?: boolean;
  activeIndex?: number; // Added for external scroll control
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`glass-card ${styles.card} ${className}`}>{children}</div>;
}

export default function SimpleCardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  activeIndex: externalIndex,
}: CardSwapProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const length = React.Children.count(children);
  
  const isScrollDriven = externalIndex !== undefined;
  const activeIdx = isScrollDriven ? externalIndex : internalIndex;

  useEffect(() => {
    if (isScrollDriven || (pauseOnHover && isHovered)) return;
    const interval = setInterval(() => {
      setInternalIndex((prev) => (prev + 1) % length);
    }, delay);
    return () => clearInterval(interval);
  }, [delay, length, pauseOnHover, isHovered, isScrollDriven]);

  const childArray = React.Children.toArray(children);

  return (
    <div 
      className={styles.container} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false}>
        {childArray.map((child, i) => {
          const dist = (i - activeIdx + length) % length;
          
          // Only render the top 4 cards for performance and clean visuals
          if (dist >= 4 && dist !== length - 1) return null;

          // If it's the card that just exited (dist === length - 1), it animates out and up
          const isExiting = dist === length - 1;
          
          const scale = isExiting ? 1.05 : 1 - dist * (cardDistance / 1000); // adjust scale factor
          const y = isExiting ? -150 : dist * verticalDistance;
          const zIndex = isExiting ? length + 1 : length - dist;
          const opacity = isExiting ? 0 : 1;

          return (
            <motion.div
              key={i}
              className={styles.cardWrapper}
              onClick={() => !isScrollDriven && setInternalIndex(i)}
              initial={{ opacity: 0, y: y + 50, scale: 0.8 }}
              animate={{ 
                opacity,
                scale,
                y,
                zIndex
              }}
              exit={{ opacity: 0, y: -200, scale: 1.1 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 1, 0.5, 1], // Custom spring-like easing
                opacity: { duration: 0.4 }
              }}
            >
              {child}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
