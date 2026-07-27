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
        <div className="container" >
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
      </section>

      {/* Horizontal Scroll Section */}
      <AboutScrollSection />

      {/* About Company Text Block */}
      <section className={styles.textSection}>
        <div className={`${styles.textInner} container`}>
          <h2 className={styles.textTitle}>About Our Company!</h2>
          <p className={styles.textParagraph}>
            <strong>Welcome to Hadron GBS: Powering the Universe of Enterprise Service Management, Operation Management & Many more….</strong>
          </p>
          <p className={styles.textParagraph}>
            At Hadron GBS, we believe in harnessing the immense power of the universe’s fundamental forces and translating it into the very essence of our business. Just as the Hadron is an integral part of one of the strongest forces in the universe, we aim to make our presence felt as a formidable entity in the world of Enterprise Service Management, Operation Management & Many more.
          </p>
          <p className={styles.textParagraph}>
            Our journey is guided by a strong belief in the power of fundamental interactions. We understand that the core level interactions are what drive the creation of exceptional customer experiences. At Hadron GBS, these interactions are not just a part of our ethos; they are at the heart of our existence.
          </p>
          <p className={styles.textParagraph}>
            With a core technical team boasting more than 15 years of experience in Enterprise Service Management, Operation Management & other niche technologies we bring a wealth of knowledge and expertise to the table. Our team members have a background deeply rooted in this field, making us well-equipped to navigate the complex and ever-evolving landscape of IT & Other LOBs services.
          </p>
          <p className={styles.textParagraph}>
            But our commitment doesn’t stop at expertise alone. We pride ourselves on being a one-stop destination for all your Enterprise Service Management needs. Not only do we excel in delivering top-notch ESM solutions, but we also offer comprehensive end-to-end consulting services.
          </p>
          <p className={styles.textParagraph}>
            We believe that true success in this domain lies not just in implementing solutions but in understanding the unique needs and challenges of each organization. One of our proudest achievements is our track record of successful migration projects in Enterprise Service Management. We have seamlessly transitioned organizations into more efficient and effective ESM systems, ensuring minimal disruption and maximum benefits.
          </p>
          <p className={styles.textParagraph}>
            At Hadron GBS, we are more than just a service provider. We are a partner on your journey towards enhanced efficiency, better customer experiences, and a stronger IT infrastructure. Our commitment to excellence and our deep-rooted understanding of Enterprise Service Management and other niche technologies services makes us the ideal choice for organizations seeking to unlock their full potential in the digital age.
          </p>
          <p className={styles.textParagraph}>
            Join us on this exciting journey as we continue to explore and harness the fundamental forces of the universe, applying them to the world of IT & Other LOBs services for your benefit. Together, we’ll achieve greatness and push the boundaries of what’s possible in Enterprise Service Management, Operation Management & Many more.
          </p>
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
