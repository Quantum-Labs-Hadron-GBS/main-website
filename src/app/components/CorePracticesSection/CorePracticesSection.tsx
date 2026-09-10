"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./CorePracticesSection.module.css";

const SOLUTIONS = [
  {
    title: "Enterprise Core Transformation",
    desc: "Hadron GBS translates deep platform expertise into measurable business value through outcomes-driven execution across ERP and CRM environments.",
    href: "/solutions/enterprise-core-transformation",
    video: "https://res.cloudinary.com/dyhlpxwwo/video/upload/v1788254535/Animate_the_attached_image_whi_uxz6vf.mp4"
  },
  {
    title: "Intelligent Automation & Agentic AI",
    desc: "Hadron GBS translates deep automation expertise into measurable business value through outcomes-driven execution across intelligent automation and agentic AI.",
    href: "/solutions/intelligent-automation-agentic-ai",
    video: "https://res.cloudinary.com/dyhlpxwwo/video/upload/v1788267903/Animate_the_attached_image_as_xmqsid.mp4"
  },
  {
    title: "Rapid Application Engineering",
    desc: "Hadron GBS accelerates application engineering, delivering high-impact solutions with speed, scalability, and engineering discipline.",
    href: "/solutions/rapid-application-engineering",
    video: "https://res.cloudinary.com/dyhlpxwwo/video/upload/v1788272661/Animate_the_attached_image_usi_a13sng.mp4"
  },
  {
    title: "Unified Service Experience Management",
    desc: "Hadron GBS brings together execution expertise to unify IT, customer, and enterprise services into an experience-centric operating model through outcomes-driven delivery.",
    href: "/solutions/unified-service-experience-management",
    video: "https://res.cloudinary.com/dyhlpxwwo/video/upload/v1788325868/Use_the_attached_image_as_the_2_nyko8s.mp4"
  },
  {
    title: "Cloud Adoption and Cloud-First Engineering",
    desc: "Hadron GBS delivers measurable outcomes by designing, building, and operating cloud-first ecosystems that scale with your business.",
    href: "/solutions/cloud-adoption-and-cloud-first-engineering",
    video: "https://res.cloudinary.com/dyhlpxwwo/video/upload/v1788327963/Use_the_attached_image_as_the_3_gshigo.mp4"
  },
  {
    title: "Engineering Quality and Reliability",
    desc: "Hadron GBS embeds quality engineering across every stage, enabling resilient systems and predictable delivery.",
    href: "/solutions/engineering-quality-and-reliability",
    video: "https://res.cloudinary.com/dyhlpxwwo/video/upload/v1788329551/Use_the_attached_image_as_the_4_ggixnn.mp4"
  }
];

export default function CorePracticesSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Parallax effect on the sticky content
  const stickyY = useTransform(smoothProgress, [0, 1], ["0%", "15%"]);

  // Rotation effect for the circles
  const rotate1 = useTransform(smoothProgress, [0, 1], [0, 120]);
  const rotate2 = useTransform(smoothProgress, [0, 1], [0, -90]);
  const rotate3 = useTransform(smoothProgress, [0, 1], [0, 150]);

  return (
    <section className={styles.wrapper} ref={containerRef}>
      {/* Background Concentric Circles Container */}
      <div className={styles.circlesContainer}>
        <motion.div className={styles.stickyCircles}>
          <motion.div
            className={`${styles.circle} ${styles.circle1}`}
            style={{ x: "-50%", y: "-50%", rotate: rotate1 }}
          >
            <div className={styles.blueDot} style={{ top: '14.6%', left: '85.4%' }} />
            <div className={styles.blueDot} style={{ top: '85.4%', left: '85.4%' }} />
          </motion.div>

          <motion.div
            className={`${styles.circle} ${styles.circle2}`}
            style={{ x: "-50%", y: "-50%", rotate: rotate2 }}
          >
            <div className={styles.blueDot} style={{ top: '50%', left: '100%' }} />
            <div className={styles.blueDot} style={{ top: '14.6%', left: '85.4%' }} />
          </motion.div>

          <motion.div
            className={`${styles.circle} ${styles.circle3}`}
            style={{ x: "-50%", y: "-50%", rotate: rotate3 }}
          >
            <div className={styles.blueDot} style={{ top: '85.4%', left: '85.4%' }} />
            <div className={styles.blueDot} style={{ top: '50%', left: '100%' }} />
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.container}>

        {/* Left Static/Sticky Column */}
        <div className={styles.leftColumn}>
          <motion.div className={styles.stickyContent} style={{ y: stickyY }}>
            <h2 className={styles.title}>
              Core Offerings & Solutions by <span style={{ color: "var(--accent)" }}>Hadron GBS</span>
            </h2>
            <p className={styles.description}>
              We unify platform consulting, modern engineering, and intelligent workflow automation to build resilient digital cores.
            </p>
          </motion.div>
        </div>

        {/* Right Scrolling Column */}
        <div className={styles.rightColumn}>
          {SOLUTIONS.map((solution, idx) => (
            <motion.div
              key={idx}
              data-snap-point="true"
              data-snap-align="center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={solution.href} className={styles.card}>
                <div className={styles.cardMedia}>
                  <video
                    src={solution.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.cardVideo}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{solution.title}</h3>
                  <p className={styles.cardDesc}>{solution.desc}</p>
                  <div className={styles.cardLink}>
                    Learn more <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
