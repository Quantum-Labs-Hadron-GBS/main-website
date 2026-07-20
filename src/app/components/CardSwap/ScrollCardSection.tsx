"use client";

import { useEffect, useRef, useState } from "react";
import CardSwap from "../CardSwap/CardSwap";
import type { CardData } from "../CardSwap/CardSwap";
import styles from "./ScrollCardSection.module.css";

interface ScrollCardSectionProps {
  cards: CardData[];
  sectionHeader: React.ReactNode;
}

export default function ScrollCardSection({ cards, sectionHeader }: ScrollCardSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      // How far we've scrolled into the section (px past the top of the section)
      const scrolledIn = -rect.top;
      // Total scrollable distance within this sticky section
      const scrollable = rect.height - window.innerHeight;

      if (scrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, scrolledIn / scrollable));
      const newIndex = Math.min(cards.length - 1, Math.floor(progress * cards.length));
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards.length]);

  // Height: 100vh per card + extra 100vh for the initial sticky viewport
  const sectionHeight = (cards.length + 1) * 100;

  return (
    <div
      ref={sectionRef}
      className={styles.scrollSection}
      style={{ height: `${sectionHeight}vh` }}
      id="product"
      aria-label="Product features"
    >
      {/* Sticky display area */}
      <div className={styles.stickyPane}>
        {/* Section header */}
        <div className={styles.sectionHeader}>
          {sectionHeader}
        </div>

        {/* Card swap */}
        <CardSwap cards={cards} activeIndex={activeIndex} />

        {/* Scroll hint (only shown at top) */}
        <div
          className={styles.scrollHint}
          style={{ opacity: activeIndex === 0 ? 1 : 0 }}
          aria-hidden="true"
        >
          <span className={styles.scrollHintDot} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </div>
  );
}
