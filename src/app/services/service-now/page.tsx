import Navbar from "../../components/Navbar/Navbar";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import BreadcrumbNav from "../../components/BreadcrumbNav/BreadcrumbNav";
import styles from "../ServicePage.module.css";
import { Metadata } from "next";

import { generatePageMetadata } from "../../lib/seo";
import { getBreadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "ServiceNow Consulting Company & Implementation Partner | Hadron GBS",
  description: "Explore our comprehensive range of ServiceNow Solutions and Offerings to elevate your organization's IT service management.",
  path: "/services/service-now"
});

const OFFERINGS = [
  { title: "IT Service Management (ITSM)", body: "Efficiently manage incidents, requests, changes, and problems while automating and streamlining your IT processes." },
  { title: "IT Operations Management (ITOM)", body: "Leverage analytics and reporting capabilities to proactively identify and resolve issues before they escalate." },
  { title: "IT Asset Management (ITAM)", body: "Gain real-time visibility and automate workflows to effectively track and manage your hardware and software assets." },
  { title: "Strategic Portfolio Management (SPM)", body: "Optimize planning, delivery, and tracking of value to enhance customer satisfaction and drive efficiency." },
  { title: "Governance, Risk, and Compliance (GRC)", body: "Achieve real-time visibility and control over your organization’s compliance posture to mitigate risks." },
  { title: "Human Resources Service Delivery (HRSD)", body: "Streamline processes from onboarding to benefits administration and performance evaluations for a seamless HR experience." },
  { title: "Customer Service Management (CSM)", body: "Enhance customer service processes, improve communication, and foster collaboration for better customer engagement." },
  { title: "Security Operations (SecOps)", body: "Utilize Flow Designer, phishing reporting, a SecOps efficiency dashboard, and the MITRE framework for robust security management." },
  { title: "Enterprise Integration", body: "Experience quick time to value, lower total cost of ownership (TCO), and an easy learning curve with our integrated solutions." },
];

const SERVICES = [
  { title: "ServiceNow Implementation", body: "Kickstart your digital transformation journey with our expert ServiceNow implementation services for IT, HR, Security, Finance & other LOBs. We tailor the platform to your unique needs, ensuring a seamless integration with your existing processes and systems." },
  { title: "ServiceNow Consulting", body: "Leverage our deep industry knowledge and technical expertise to optimize your ServiceNow instance. Our consultants will guide you in aligning your IT & other LOBs strategy with ServiceNow's capabilities to maximize efficiency and ROI." },
  { title: "ServiceNow Customization", body: "Tailor ServiceNow to your specific requirements with our customization services. From creating custom workflows to developing unique applications, we ensure that ServiceNow aligns perfectly with your business goals." },
  { title: "ServiceNow Integration", body: "Integrate ServiceNow seamlessly into your IT, HR, Security, Finance & other LOBs ecosystem with our integration solutions. We connect ServiceNow with your third-party applications, databases, and systems, ensuring data flows effortlessly across your organization." },
  { title: "ServiceNow Upgrades", body: "Stay current with the latest ServiceNow features and enhancements. Our team will handle the entire upgrade process, minimizing downtime and ensuring a smooth transition." },
  { title: "ServiceNow Managed Services", body: "Focus on your core business while we take care of your ServiceNow environment. Our managed services include proactive monitoring, troubleshooting, and continuous improvement to keep your operations running smoothly." },
  { title: "ServiceNow Training", body: "Equip your team with the knowledge and skills they need to make the most of ServiceNow. Our training programs ensure that your employees can harness the full potential of the platform." },
  { title: "ServiceNow Mobile Solutions", body: "Extend the reach of ServiceNow to your mobile workforce. We create mobile-friendly solutions that empower your team to work efficiently on the go." },
  { title: "ServiceNow Performance Optimization", body: "Enhance the performance of your ServiceNow instance to deliver a superior user experience. We fine-tune configurations, resolve bottlenecks, and optimize system resources." },
  { title: "ServiceNow Security and Compliance", body: "Protect your sensitive data and maintain compliance with our security and compliance services. We implement best practices and security measures to safeguard your ServiceNow environment." },
  { title: "ServiceNow Reporting and Analytics", body: "Harness the power of data with our reporting and analytics solutions. Gain insights into your IT, HR, Security, Finance & other LOBs operations, track key performance indicators, and make informed decisions." },
  { title: "ServiceNow Health Checks", body: "Ensure the health and stability of your ServiceNow instance with regular health checks. We identify potential issues, recommend improvements, and provide proactive solutions." },
];

const FAQS = [
  { q: "What industries can benefit from ServiceNow?", a: "ServiceNow is versatile and can benefit a wide range of industries, including IT, healthcare, finance, education, and more. Its customization options make it adaptable to various business needs." },
  { q: "Is ServiceNow suitable for small businesses?", a: "Absolutely! ServiceNow is scalable, making it suitable for businesses of all sizes. Small businesses can start with essential features and expand as they grow." },
  { q: "How does Hadron GBS enhance ServiceNow?", a: "Hadron GBS enhances ServiceNow through tailored configurations, seamless integration, and ongoing support." },
  { q: "What Sets Hadron GBS Apart in the ServiceNow Ecosystem?", a: "Expertise: Certified ServiceNow professionals. Customization: Tailored to your specific needs. Innovation: Cutting-edge solutions. Global Reach: A trusted global partner serving clients worldwide." }
];

export default function ServiceNowPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "ServiceNow", item: "/services/service-now" }
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
        <BreadcrumbNav items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "ServiceNow" }
        ]} />
        <span className={styles.heroTag}>ServiceNow Offerings</span>
        <h1 className={styles.heroTitle}>Unleash the Power of <span >ServiceNow</span></h1>
        <p className={styles.heroDesc}>
          Welcome to Hadron GBS, where innovation and excellence converge to redefine your ServiceNow experience. Our ServiceNow Portfolio is designed to empower your organization, streamline your operations, and elevate your customer service to new heights.
        </p>
        <p className={styles.heroDesc}>
          At its core, ServiceNow is a powerful cloud-based platform designed to centralize and automate various business processes, particularly those related to IT service management (ITSM). But it doesn’t stop there; it extends its capabilities to areas such as HR, customer service, security, and more. ServiceNow is not merely a tool; it’s a transformational platform that unifies and optimizes business operations.
        </p>
      </section>

      {/* Offerings */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Get Started with ServiceNow Solutions</h2>
          <p className={styles.sectionSubtitle}>ServiceNow is a versatile platform with a wide range of practical applications across different business functions.</p>
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

      {/* Services */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Maximize your ServiceNow Platform</h2>
          <p className={styles.sectionSubtitle}>Explore our comprehensive range of ServiceNow Offerings tailored by Hadron GBS.</p>
        </div>
        <div className={styles.grid}>
          {SERVICES.map(svc => (
            <div key={svc.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardBody}>{svc.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Your Queries Clarified</h2>
          <p className={styles.sectionSubtitle}>FAQs on ServiceNow Implementation and Services.</p>
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
