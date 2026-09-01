"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import InteractiveBento from "../components/InteractiveBento/InteractiveBento";
import OurStorySection from "../components/OurStorySection/OurStorySection";

export default function AboutPage() {
  const timelineEvents = [
    {
      year: "2020",
      title: "Beginning of the New Journey",
      desc: "We started the company with the mission to provide the best of technology consulting services that matches the client's requirements."
    },
    {
      year: "2021",
      title: "Survival During Covid Pandemic",
      desc: "With slow but steady growth during the covid, as our employees and their relatives were highly affected, we managed to providing uninterrupted services."
    },
    {
      year: "2022",
      title: "Partnered with Tech Companies",
      desc: "Partnered with Technology companies like Ivanti and NetBrain to support our customers on Enterprise service management and Automation."
    },
    {
      year: "2023",
      title: "Globalization of Business",
      desc: "Expansion of business is needed. We opened our first offshore office in Singapore and planning for Europe expansion by having office in Sweden."
    }
  ];

  const features = [
    {
      title: "Customer Centric Approach",
      desc: "We work in a customer-centric manner to meet the demands of our clients. This enables our clients to achieve their greatest growth and Returns of Interest.",
      img: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324496/ChatGPT_Image_Jul_29_2026_03_20_31_PM_j7g9xc.png"
    },
    {
      title: "Agile Methodology",
      desc: "By following agile methodology we assure you to quick delivery with excellent technology solution. We keep complete transparency to our customers throughout the whole development cycle without additional cost.",
      img: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324497/ChatGPT_Image_Jul_29_2026_04_31_38_PM_nsgc22.png"
    },
    {
      title: "Dedicated Development Team",
      desc: "With their expertise, our staff will deliver the greatest outcomes for your requirements. The team puts in all of its effort and does not look back until goals are achieved.",
      img: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324498/ChatGPT_Image_Jul_29_2026_04_50_46_PM_tppenb.png"
    },
    {
      title: "Outstanding Support",
      desc: "We provide end to end support for your business needs to ensure that the client gets satisfied with what they want.",
      img: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324503/ChatGPT_Image_Jul_29_2026_04_22_55_PM_zej7ad.png"
    }
  ];

  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* HERO SECTION */}
      <section className={styles.heroBanner}>
        <video 
          src="https://res.cloudinary.com/dyhlpxwwo/video/upload/v1788242997/Use_the_attached_image_as_the_1_pwo6nq.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay}></div>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Choose The Best IT Service Company
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hadron Global Business Solutions is a highly motivated group with creative minds.
          </motion.p>
        </div>
      </section>

      {/* OVERVIEW & VALUES SPLIT */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.splitContainer}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles.sectionTitle}>About Our Company!</h2>
              <p className={styles.sectionText} style={{ fontWeight: 600, color: '#312e81' }}>
                Welcome to Hadron GBS: Powering the Universe of Enterprise Service Management, Operation Management & Many more….
              </p>
              <p className={styles.sectionText}>
                At Hadron GBS, we believe in harnessing the immense power of the universe’s fundamental forces and translating it into the very essence of our business. Just as the Hadron is an integral part of one of the strongest forces in the universe, we aim to make our presence felt as a formidable entity in the world of Enterprise Service Management, Operation Management & Many more.
              </p>
              <p className={styles.sectionText}>
                Our journey is guided by a strong belief in the power of fundamental interactions. We understand that the core level interactions are what drive the creation of exceptional customer experiences. At Hadron GBS, these interactions are not just a part of our ethos; they are at the heart of our existence.
              </p>
              <p className={styles.sectionText}>
                With a core technical team boasting more than 15 years of experience in Enterprise Service Management, Operation Management & other niche technologies we bring a wealth of knowledge and expertise to the table.
              </p>
              <p className={styles.sectionText}>
                We believe that true success in this domain lies not just in implementing solutions but in understanding the unique needs and challenges of each organization. At Hadron GBS, we are more than just a service provider. We are a partner on your journey towards enhanced efficiency, better customer experiences, and a stronger IT infrastructure.
              </p>
              <p className={styles.sectionText} style={{ fontWeight: 500, color: '#111827' }}>
                Join us on this exciting journey as we continue to explore and harness the fundamental forces of the universe, applying them to the world of IT & Other LOBs services for your benefit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.valuesCard}>
                <h3 className={styles.valuesTitle}>Our Core Values</h3>
                <p className={styles.sectionText}>
                  Our core values include a dedication to guaranteeing the happiness of both customers and employees, business ethics, and ongoing efforts to advance a healthy business environment.
                </p>
                <p className={styles.sectionText}>
                  We integrate industry standards to assist our clients in realizing their full potential, get rid of communication issues, foster trust, and boost the effectiveness and productivity of your business unit.
                </p>
                <p className={styles.sectionText} style={{ borderLeft: '4px solid #F47C36', paddingLeft: '1rem', marginTop: '2rem' }}>
                  Our company was founded on five fundamental principles: <strong>mindset, honesty, transparency, quality, and professionalism</strong>. To tackle tough situations, we bring uniqueness and the right approach.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <OurStorySection />

      {/* TIMELINE */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className={styles.sectionTitle}>Our Journey</h2>
          </div>
          <div className={styles.timeline}>
            {timelineEvents.map((item, index) => (
              <motion.div 
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineYear}>{item.year}</div>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className={`${styles.section} ${styles.partnersSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Partners</h2>
          <p className={styles.sectionText} style={{ maxWidth: '800px', margin: '0 auto' }}>
            Hadron Global Business Solutions (Hadron GBS), a leading provider of innovative IT solutions, is pleased to announce a strategic partnership with BMC Software, a global software company that specializes in providing solutions for IT service management, cloud management, and digital enterprise automation. We are also partnered with NetBrain who is the global leader for network automation.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className={styles.sectionTitle}>Preparing For Your Success</h2>
            <p className={styles.sectionText}>
              Provide Best IT Solutions appropriate for your specific business, making it easy for you to have quality IT services.
            </p>
          </div>
          
          <div style={{ padding: '0 2rem' }}>
            <InteractiveBento items={features} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Looking for the Best IT Business Solutions?</h2>
          <p className={styles.ctaDesc}>
            Contact us today, and let us help you achieve your business objectives.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
