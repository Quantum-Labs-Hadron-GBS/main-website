import Navbar from "../../components/Navbar/Navbar";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import styles from "../ServicePage.module.css";
import { Metadata } from "next";

import { generatePageMetadata } from "../../lib/seo";
import { getBreadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "Salesforce Development & Consulting Services | Hadron GBS",
  description: "Leverage the power of Salesforce with Hadron GBS's comprehensive CRM implementation, development, and integration services.",
  path: "/services/salesforce"
});

const FEATURES = [
  { title: "Customization", body: "We understand that one size doesn't fit all. Our experts work closely with you to customize Salesforce to align with your specific business processes, industry requirements, and goals." },
  { title: "Data Migration", body: "Moving your data to Salesforce can be a daunting task. Our team ensures a smooth transition, carefully migrating your existing data while maintaining data integrity." },
  { title: "Integration", body: "We at Hadron Global Business Solutions integrate Salesforce with your existing systems, creating a unified ecosystem that enhances productivity and streamlines operations." },
  { title: "Training and Support", body: "We give complete training for your team to maximize the benefits of Salesforce. Our support doesn't end with implementation; we're here to assist you as your business evolves." },
];

const FAQS = [
  { q: "What is the typical duration of a Salesforce implementation project with HGBS?", a: "The duration of an implementation project varies depending on the complexity of your business processes and the level of customization required. Our team works diligently to ensure timely delivery without compromising on quality." },
  { q: "How can I be sure that Salesforce is the right CRM solution for my business?", a: "Salesforce is highly scalable and customizable, making it suitable for businesses of all sizes and industries. Our experts will assess your needs and guide you on the best path forward." },
  { q: "What ongoing support and maintenance services do you offer after the implementation?", a: "We provide comprehensive ongoing support, training, and maintenance to ensure your Salesforce environment continues to operate at peak efficiency as your business grows." }
];

export default function SalesforcePage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "Salesforce", item: "/services/salesforce" }
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
        <span className={styles.heroTag}>Salesforce Integration Services</span>
        <h1 className={styles.heroTitle}>Empowering Your Success with <span style={{color: "var(--accent)"}}>Salesforce</span></h1>
        <p className={styles.heroDesc}>
          Hadron GBS’s Salesforce implementation services are your key to unlocking substantial enterprise value through the seamless design, integration, and adept management of Salesforce solutions. Our expertise and commitment to excellence empower your organization to harness the full potential of Salesforce, driving transformative results that elevate your business to new heights.
        </p>
        <p className={styles.heroDesc}>
          With Hadron GBS by your side, you can rest assured that your Salesforce implementation is in capable hands. Our team of experienced professionals combines in-depth industry knowledge with cutting-edge technical skills to craft tailored Salesforce solutions that precisely align with your business objectives.
        </p>
      </section>

      {/* Features */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Elevate Your Business to New Heights</h2>
          <p className={styles.sectionSubtitle}>In today’s fast-paced business environment, staying ahead of the competition requires innovative solutions. Let us help you embark on a successful Salesforce journey.</p>
        </div>
        <div className={styles.grid}>
          {FEATURES.map(feat => (
            <div key={feat.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardBody}>{feat.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Curious Minds: Your Questions Answered</h2>
          <p className={styles.sectionSubtitle}>HGBS Salesforce Implementation Services are your gateway to unlocking the full potential of this remarkable CRM platform.</p>
        </div>
        <div className={styles.faqList}>
          {FAQS.map(faq => (
            <details key={faq.q} className={styles.faqItem}>
              <summary className={styles.faqQ}>{faq.q}</summary>
              <p className={styles.faqA}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
