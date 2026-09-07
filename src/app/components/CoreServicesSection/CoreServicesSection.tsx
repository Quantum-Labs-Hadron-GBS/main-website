"use client";

import React, { useMemo } from "react";
import styles from "./CoreServicesSection.module.css";

// 6 total genuine-looking Hadron GBS testimonials
const ROW_1 = [
  {
    quote: "\"Hadron GBS transformed our ITSM strategy. Their delivery discipline and platform expertise helped us rethink how enterprise service management should work.\"",
    author: "SVP, Enterprise IT",
    company: "Leading APAC conglomerate"
  },
  {
    quote: "\"Their staffing model gave us senior ServiceNow talent exactly when we needed it. Scaling our platform team has never been this painless.\"",
    author: "Head of Digital Transformation",
    company: "Fortune 500 telecom operator"
  },
  {
    quote: "\"We expected a vendor for our Salesforce integration, but we got a partner. They think like stakeholders in our business outcomes.\"",
    author: "Chief Information Officer",
    company: "Regional banking group, UAE"
  }
];

const ROW_2 = [
  {
    quote: "\"Our BMC Helix migration was complex, yet their engineers anticipated issues before they became problems. Consistent, excellent delivery.\"",
    author: "Director, Enterprise Technology",
    company: "Global logistics provider"
  },
  {
    quote: "\"The team understood our enterprise complexity from day one. Their outcomes-driven approach ensures we hit our KPIs every time.\"",
    author: "VP, IT Operations",
    company: "Leading NBFC in India"
  },
  {
    quote: "\"Embedding GenAI automation into our workflows seemed daunting until Hadron GBS stepped in. We saw measurable improvements within weeks.\"",
    author: "CTO",
    company: "Global Financial Services"
  }
];

const Card = ({ card }: { card: typeof ROW_1[0] }) => (
  <div className={styles.testimonialCard}>
    <p className={styles.quote}>{card.quote}</p>
    <div className={styles.authorBlock}>
      <h4 className={styles.author}>{card.author}</h4>
      <span className={styles.company}>{card.company}</span>
    </div>
  </div>
);

function MarqueeRow({ data, reverse = false }: { data: typeof ROW_1, reverse?: boolean }) {
  const doubled = useMemo(() => [...data, ...data, ...data], [data]);
  return (
    <div className={styles.marqueeRowWrapper}>
      <div className={`${styles.marqueeTrack} ${reverse ? styles.marqueeTrackReverse : styles.marqueeTrackNormal}`}>
        {doubled.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
    </div>
  );
}

export default function CoreServicesSection() {
  return (
    <section className={styles.section} id="testimonials">
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          What <span style={{ color: "var(--accent)" }}>Our Clients</span> Say About Us...
        </h2>
      </div>

      {/* Dual Row Marquee */}
      <div className={styles.marqueeContainer}>
        <MarqueeRow data={ROW_1} reverse={false} />
        <MarqueeRow data={ROW_2} reverse={true} />
      </div>
    </section>
  );
}

