"use client";

import styles from "./AboutTimeline.module.css";
import Image from "next/image";

const TIMELINE = [
  {
    year: "2020",
    title: "Beginning of the New Journey",
    body: "We started the company with the mission to provide the best of technology consulting services that matches the client's requirements.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400"
  },
  {
    year: "2021",
    title: "Survival During Covid Pandemic",
    body: "With slow but steady growth during the covid, as our employees and their relatives were highly affected, we managed to providing uninterrupted services.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400"
  },
  {
    year: "2022",
    title: "Partnered with Tech Companies",
    body: "Partnered with Technology companies like Ivanti and NetBrain to support our customers on Enterprise service management and Automation.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
  },
  {
    year: "2023",
    title: "Globalization of Business",
    body: "Expansion of business is needed. We opened our first offshore office in Singapore and planning for Europe expansion by having office in Sweden.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400"
  }
];

export default function AboutTimeline() {
  return (
    <section className={styles.timelineSection} aria-label="Company Timeline">
      <div className={`${styles.timelineInner} container`}>
        <div className={styles.timelineTrack}>
          {TIMELINE.map((item, i) => (
            <div key={item.year} className={styles.timelineNode}>
              <div className={styles.nodeImageWrapper}>
                <Image 
                  src={item.img} 
                  alt={`Year ${item.year}`} 
                  width={200}
                  height={200}
                  style={{ objectFit: 'cover' }}
                  className={styles.nodeImage} 
                  loading="lazy"
                />
              </div>
              <div className={styles.nodeArrow}>{item.year}</div>
              <div className={styles.nodeContent}>
                <h3 className={styles.nodeTitle}>{item.title}</h3>
                <p className={styles.nodeDesc}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
