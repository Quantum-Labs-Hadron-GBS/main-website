import Navbar from "../../components/Navbar/Navbar";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import styles from "../ServicePage.module.css";
import { Metadata } from "next";

import { generatePageMetadata } from "../../lib/seo";
import { getBreadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "BMC Helix & ITOM Consulting Partner | Hadron GBS",
  description: "Hadron GBS and BMC Software – Elevating IT solutions through comprehensive Helix ITSM and ITOM services.",
  path: "/services/bmc"
});

const OFFERINGS = [
  { title: "Impact on IT Service Management", body: "Clients can expect improved IT service delivery with the combined expertise of Hadron GBS and BMC Software. The partnership focuses on streamlining processes and introducing innovative solutions that enhance the overall efficiency of IT service management." },
  { title: "Cloud Management Advancements", body: "Cloud technology is at the forefront of modern IT solutions, and the collaboration leverages this technology to provide clients with cutting-edge, cloud-centric solutions. The benefits include increased flexibility, scalability, and cost-effectiveness in service delivery." },
  { title: "Digital Enterprise Automation", body: "Digital enterprise automation is the future of efficient business operations. The partnership between Hadron GBS and BMC Software contributes to advancements in automation, enabling businesses to optimize their processes and achieve greater productivity." },
  { title: "Future Collaborative Initiatives", body: "From tackling industry-specific challenges to contributing to technological advancements, the collaborative efforts of Hadron GBS and BMC Software promise a future filled with innovation." },
];

export default function BMCPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "BMC", item: "/services/bmc" }
  ]);

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Navbar />
      
      {/* Hero */}
      <section className={`${styles.hero} container`}>
        <span className={styles.heroTag}>Elevating Possibilities</span>
        <h1 className={styles.heroTitle}>Hadron GBS and <span style={{color: "var(--accent)"}}>BMC Software</span></h1>
        <p className={styles.heroDesc}>
          Powering Innovation, Transforming Solutions.
        </p>
        <p className={styles.heroDesc}>
          Hadron Global Business Solutions (Hadron GBS), a leading provider of innovative IT solutions, is pleased to announce a strategic partnership with BMC Software, a global software company that specializes in providing solutions for IT service management, cloud management, and digital enterprise automation.
        </p>
        <p className={styles.heroDesc}>
          This collaboration aims to provide clients with robust and scalable solutions that optimize their IT infrastructure and drive digital innovation. Hadron GBS and BMC Software share a commitment to excellence, customer satisfaction, and pushing the boundaries of technological possibilities.
        </p>
      </section>

      {/* Offerings */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>BMC Software Services</h2>
          <p className={styles.sectionSubtitle}>Enhancing IT Solutions with strategic implementations and advanced cloud management.</p>
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
