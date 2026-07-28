import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CtaSection from "../components/CtaSection/CtaSection";
import BreadcrumbNav from "../components/BreadcrumbNav/BreadcrumbNav";
import AboutScrollSection from "./AboutScrollSection";
import AboutTimeline from "./AboutTimeline";
import styles from "./About.module.css";
import { Metadata } from "next";

import { generatePageMetadata } from "../lib/seo";
import { getBreadcrumbSchema } from "../lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "About Hadron GBS | Top IT Consulting & Digital Transformation Company",
  description: "Learn about Hadron GBS, a highly motivated group with creative minds providing the best IT service solutions.",
  path: "/about"
});

const FEATURES = [
  {
    title: "Customer Centric Approach",
    body: "We work in a customer-centric manner to meet the demands of our clients. This enables our clients to achieve their greatest growth and Returns of Interest.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: "Agile Methodology",
    body: "By following agile methodology we assure you to quick delivery with excellent technology solution. We keep complete transparency to our customers throughout the whole development cycle without additional cost.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/><path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    )
  },
  {
    title: "Dedicated Development Team",
    body: "With their expertise, our staff will deliver the greatest outcomes for your requirements. The team puts in all of its effort and does not look back until goals are achieved.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    )
  },
  {
    title: "Outstanding Support",
    body: "We provide end to end support for your business needs to ensure that the client gets satisfied with what they want.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    )
  }
];

export default function AboutPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About", item: "/about" }
  ]);

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Navbar />
      
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroTextColumn}>
            <BreadcrumbNav items={[
              { label: "Home", href: "/" },
              { label: "About" }
            ]} />
            <span className={styles.heroTag}>About Us</span>
            <h1 className={styles.heroTitle}>Choose The Best IT Service Company</h1>
            <p className={styles.heroDesc}>
              Hadron Global Business Solutions is a highly motivated group with creative minds.
            </p>
          </div>
          
          <div className={styles.heroVideoStrip}>
            <video autoPlay loop muted playsInline preload="auto" disablePictureInPicture>
              <source src="https://res.cloudinary.com/djxbxhgat/video/upload/f_auto,q_auto,h_1080,c_limit/v1784804662/20610-312672589_lscygw.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <AboutScrollSection />

      {/* Quote Section with Floating Card */}
      <section className={styles.quoteSection}>
        <div className={`${styles.quoteInner} container`}>
          
          <div className={styles.quoteTextColumn}>
            <h2 className={styles.quoteTitle}>Welcome to Hadron GBS: Powering the Universe of Enterprise Service Management</h2>
            <p className={styles.quoteBody}>
              "At Hadron GBS, we believe in harnessing the immense power of the universe’s fundamental forces and translating it into the very essence of our business. Just as the Hadron is an integral part of one of the strongest forces in the universe, we aim to make our presence felt as a formidable entity."
            </p>
            <span className={styles.quoteAuthor}>The Hadron GBS Team</span>
          </div>

          <div className={styles.floatingCard}>
            <h3 className={styles.floatingCardTitle}>For Inquiries</h3>
            <span className={styles.contactPerson}>Contact Our Team</span>
            <span className={styles.contactRole}>Global Business Solutions</span>

            <div className={styles.contactMethod}>
              <svg className={styles.contactMethodIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div className={styles.contactMethodText}>
                <span className={styles.contactMethodLabel}>Phone</span>
                <span className={styles.contactMethodValue}>+91 98765 43210</span>
              </div>
            </div>

            <div className={styles.contactMethod}>
              <svg className={styles.contactMethodIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <div className={styles.contactMethodText}>
                <span className={styles.contactMethodLabel}>Email</span>
                <span className={styles.contactMethodValue}>info@hadrongbs.com</span>
              </div>
            </div>

            <a href="/contact" className={styles.contactBtn}>Contact Us ↗</a>
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <AboutTimeline />

      {/* Partners Block */}
      <section className={styles.textSection} >
        <div className={`${styles.textInner} container`} >
          <span className={styles.heroTag} >Our Partners</span>
          <h2 className={styles.textTitle} >Long Time Project, with <span className={styles.textTitleAccent}>Our Best Partner</span></h2>
          <p className={styles.textParagraph} >
            Hadron Global Business Solutions (Hadron GBS), a leading provider of innovative IT solutions, is pleased to announce a strategic partnership with BMC Software, a global software company that specializes in providing solutions for IT service management, cloud management, and digital enterprise automation.
          </p>
          <p className={styles.textParagraph} >
            We are partnered with NetBrain who is the global leader for network automation. The fourth-generation network automation solution provides automated problem diagnosis, remediation, and end-to-end visibility for your hybrid network.
          </p>
        </div>
      </section>

      {/* Features Block */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featuresHeader}>
            <h2 className={styles.textTitle}>Preparing For Your Success</h2>
            <p className={styles.textParagraph} >
              Provide Best IT Solutions appropriate for your specific business, making it easy for you to have quality IT services.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {FEATURES.map((feature, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
