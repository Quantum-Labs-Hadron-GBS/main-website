"use client";

import { motion } from "framer-motion";
import { Briefcase, BadgeCheck, TrendingUp, Compass, type LucideIcon } from "lucide-react";
import styles from "./InteractiveCanvasSection.module.css";

interface ExcellenceItem {
  title: string;
  lead: string;
  body: string;
  icon: LucideIcon;
}

const EXCELLENCE: ExcellenceItem[] = [
  {
    title: "Experience",
    lead: "Leading Business through expertise.",
    body: "We have a team of experienced and skilled professionals who have worked with a diverse range of clients across different industries.",
    icon: Briefcase,
  },
  {
    title: "Quality",
    lead: "Delivering exceptional results.",
    body: "We understand that quality is as important as timeliness for any business. Our team ensures that the solutions meet your expectations.",
    icon: BadgeCheck,
  },
  {
    title: "Value",
    lead: "Smart investment for your business.",
    body: "We offer cost-effective solutions that meet your budget requirements and provide customized solutions that are efficient.",
    icon: TrendingUp,
  },
  {
    title: "Approach",
    lead: "Solutions tailored to your unique needs.",
    body: "We take a personalized approach to every project and work closely with our clients to understand their specific needs.",
    icon: Compass,
  },
];

export default function InteractiveCanvasSection() {
  return (
    <section className={styles.wrapper} aria-labelledby="excellence-heading">
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 id="excellence-heading" className={styles.title}>
            Our <span className={styles.accent}>Excellence</span>
          </h2>
        </motion.header>

        <div className={styles.grid}>
          {EXCELLENCE.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.iconBox} aria-hidden="true">
                    <Icon className={styles.icon} strokeWidth={1.75} />
                  </span>
                  <span className={styles.number}>{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardLead}>{item.lead}</p>
                <p className={styles.cardBody}>{item.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
