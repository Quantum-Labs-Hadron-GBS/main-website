"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./InteractiveCanvasSection.module.css";

// Cloudinary transform: crop to the card's photo shape and serve an optimized format
const img = (path: string) => `https://res.cloudinary.com/dyhlpxwwo/image/upload/c_fill,w_720,h_640,g_auto,f_auto,q_auto/${path}`;

const EXCELLENCE = [
  {
    title: "Experience",
    body: "Leading Business through expertise. We have a team of experienced and skilled professionals who have worked with a diverse range of clients across different industries.",
    image: img("v1788259026/ET_M1_cdjlli.jpg"),
    alt: "Hadron GBS consultant leading a strategy session for ServiceNow and Salesforce enterprise transformation",
  },
  {
    title: "Quality",
    body: "Delivering exceptional results. We understand that quality is as important as timeliness for any business. Our team ensures that the solutions meet your expectations.",
    image: img("v1788330307/eng_m2_me3czz.avif"),
    alt: "ServiceNow and BMC Helix platform quality engineering and performance dashboard review",
  },
  {
    title: "Value",
    body: "Smart investment for your business. We offer cost-effective solutions that meet your budget requirements and provide customized solutions that are efficient.",
    image: img("v1788269188/ai_m2_jffznd.png"),
    alt: "Enterprise ROI and business value analytics for ServiceNow, Salesforce, and BMC Helix platforms",
  },
  {
    title: "Approach",
    body: "Solutions tailored to your unique needs. We take a personalized approach to every project and work closely with our clients to understand their specific needs.",
    image: img("v1788274434/rapid_m2_ztjofs.jpg"),
    alt: "Hadron GBS architects collaborating on custom Salesforce, SAP, and AWS cloud migrations",
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
          {EXCELLENCE.map((item, idx) => (
            <motion.article
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
            >
              <div className={styles.media}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 20vw"
                  className={styles.mediaImg}
                />
              </div>
              <div className={styles.content}>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
