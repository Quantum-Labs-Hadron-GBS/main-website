import Navbar from "../../components/Navbar/Navbar";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import styles from "../ServicePage.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ivanti Services | Hadron GBS",
  description: "Comprehensive Unified Endpoint Management and IT Security solutions powered by Ivanti.",
};

const OFFERINGS = [
  { title: "Unified Endpoint Management (UEM)", body: "Discover, manage, and secure all your endpoints from a single pane of glass. Our Ivanti implementations ensure your workforce remains productive and secure, no matter where they operate." },
  { title: "IT Service Management (ITSM)", body: "Modernize your service delivery with ITIL-aligned processes. We configure Ivanti Neurons for ITSM to automate workflows, reduce resolution times, and improve the employee experience." },
  { title: "IT Asset Management (ITAM)", body: "Optimize software and hardware assets throughout their lifecycle. Gain actionable insights into your IT spend, ensure compliance, and reclaim unused licenses efficiently." },
  { title: "Zero Trust Security", body: "Protect your enterprise network with Ivanti's comprehensive security framework. We deploy robust patch management, threat defense, and identity solutions to safeguard your critical data." },
];

export default function IvantiPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero */}
      <section className={`${styles.hero} container`}>
        <span className={styles.heroTag}>Everywhere Work</span>
        <h1 className={styles.heroTitle}>Securing the Future with <span style={{color: "var(--accent)"}}>Ivanti</span></h1>
        <p className={styles.heroDesc}>
          Delivering comprehensive IT Security, Service Management, and Unified Endpoint solutions.
        </p>
        <p className={styles.heroDesc}>
          Hadron GBS is proud to collaborate with Ivanti, a leader in enabling the "Everywhere Workplace." We help organizations discover, manage, secure, and service all endpoints across their enterprise, ensuring seamless productivity and robust security in a hybrid work environment.
        </p>
      </section>

      {/* Offerings */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Ivanti Solutions</h2>
          <p className={styles.sectionSubtitle}>Empowering your IT infrastructure with intelligent automation and zero-trust security.</p>
        </div>
        <div className={styles.grid}>
          {OFFERINGS.map(off => (
            <div key={off.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{off.title}</h3>
              <p className={styles.cardBody}>{off.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
