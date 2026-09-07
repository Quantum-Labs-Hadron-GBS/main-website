"use client";

import React from 'react';
import styles from './InteractiveBento.module.css';

export interface BentoItem {
  title: string;
  desc: string;
  img: string;
}

export default function InteractiveBento({ items }: { items?: BentoItem[] }) {
  const cards = [
    {
      title: "Architecture-Led Delivery",
      desc: "We treat every engagement as a systems problem. Our architects design for structure, coherence, and long-term platform health.",
      img: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324512/ChatGPT_Image_Jul_29_2026_04_43_09_PM_akexyx.png"
    },
    {
      title: "Outcome-Driven Accountability",
      desc: "We define success through measurable KPIs from day one (MTTR, CSAT, throughput) and stay accountable to them.",
      img: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324511/ChatGPT_Image_Jul_29_2026_04_41_26_PM_sxuoeq.png"
    },
    {
      title: "GenAI-Powered Transformation",
      desc: "Embedding automation across ServiceNow, Salesforce, and SAP.",
      img: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324510/ChatGPT_Image_Jul_29_2026_03_33_33_PM_p6zjbb.png"
    },
    {
      title: "Flexible Engagement Models and Lifecycle Accountability",
      desc: "We adapt our operating model to match your business priorities, providing end-to-end accountability from hypercare to managed services to keep your platforms continually optimized.",
      img: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324505/ChatGPT_Image_Jul_29_2026_04_38_36_PM_lk2skj.png"
    }
  ];

  const cardsToRender = items || cards;

  return (
    <div className={styles.container}>
      {cardsToRender.map((card, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.cardBg}>
             <img src={card.img} alt={card.title} loading="lazy" />
          </div>
          <div className={styles.textBox}>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.desc}>{card.desc}</p>
            {(card.title === "Flexible Engagement Models" || card.title === "Outstanding Support") && (
              <a href="/contact" className={styles.link}>
                Learn More ↗
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
