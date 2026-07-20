/* eslint-disable */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CardSwap.module.css";

export interface CardData {
  number: string;
  title: string;
  subtitle: string;
  body: string;
}

interface CardSwapProps {
  cards: CardData[];
  /** When provided externally (scroll-driven), overrides internal timer */
  activeIndex?: number;
  delay?: number;
  pauseOnHover?: boolean;
}

export default function CardSwap({
  cards,
  activeIndex: externalIndex,
  delay = 5000,
  pauseOnHover = true,
}: CardSwapProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Use external (scroll-driven) index if provided, else internal timer index
  const activeIndex = externalIndex !== undefined ? externalIndex : internalIndex;
  const isScrollDriven = externalIndex !== undefined;

  const advance = useCallback(() => {
    setInternalIndex((i) => (i + 1) % cards.length);
  }, [cards.length]);

  // Only run internal timer when not scroll-driven
  useEffect(() => {
    if (isScrollDriven || isPaused) return;
    intervalRef.current = setInterval(advance, delay);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [advance, delay, isPaused, isScrollDriven]);

  const getStackOrder = () =>
    cards.map((_, i) => {
      const offset = (i - activeIndex + cards.length) % cards.length;
      return { card: cards[i], offset, index: i };
    });

  const stack = getStackOrder().sort((a, b) => b.offset - a.offset);

  return (
    <div
      className={styles.swapRoot}
      onMouseEnter={() => pauseOnHover && !isScrollDriven && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && !isScrollDriven && setIsPaused(false)}
      aria-label="Feature cards carousel"
    >
      {/* Left label column */}
      <div className={styles.labelCol}>
        {cards.map((card, i) => (
          <div
            key={card.number}
            id={`card-label-${card.number}`}
            className={`${styles.labelItem} ${i === activeIndex ? styles.labelActive : ""}`}
            role="button"
            tabIndex={isScrollDriven ? -1 : 0}
            aria-pressed={i === activeIndex}
          >
            <span className={styles.labelNum}>{card.number}</span>
            <span className={styles.labelTitle}>{card.title}</span>
          </div>
        ))}
      </div>

      {/* Stacked cards */}
      <div className={styles.cardStack}>
        <AnimatePresence>
          {stack.map(({ card, offset, index }) => {
            const isActive = offset === 0;
            const depth = Math.min(offset, 2);

            return (
              <motion.div
                key={card.number}
                className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                animate={{
                  opacity: isActive ? 1 : 1 - depth * 0.25,
                  y: isActive ? 0 : depth * 28,
                  x: isActive ? 0 : depth * 18,
                  scale: isActive ? 1 : 1 - depth * 0.04,
                  zIndex: cards.length - depth,
                  rotateY: isActive ? 0 : depth * -4,
                }}
                exit={{ opacity: 0, y: -60, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNum}>{card.number}</span>
                    <div className={styles.cardDivider} />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardSubtitle}>{card.subtitle}</p>
                  <p className={styles.cardBody}>{card.body}</p>

                  {/* Progress indicator */}
                  {isActive && (
                    <div className={styles.progressBar} key={`progress-${activeIndex}`}>
                      <motion.div
                        className={styles.progressFill}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: isScrollDriven ? 0.4 : delay / 1000,
                          ease: isScrollDriven ? "easeOut" : "linear",
                        }}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
