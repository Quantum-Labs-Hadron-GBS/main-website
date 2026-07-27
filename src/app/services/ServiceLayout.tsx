import Navbar from "../components/Navbar/Navbar";
import CtaSection from "../components/CtaSection/CtaSection";
import Footer from "../components/Footer/Footer";
import BreadcrumbNav from "../components/BreadcrumbNav/BreadcrumbNav";
import styles from "./ServicePage.module.css";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  solutions: { title: string; desc: string }[];
  framework: { step: string; title: string; desc: string; outcome: string }[];
  whyHadron: { title: string; desc: string }[];
  breadcrumbName?: string;
}

export default function ServiceLayout({ title, subtitle, solutions, framework, whyHadron, breadcrumbName = "Offering" }: ServiceLayoutProps) {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={`${styles.hero} container`}>
        <BreadcrumbNav items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: breadcrumbName }
        ]} />
        <span className={styles.heroTag}>Service Offering</span>
        <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: title }} />
        <p className={styles.heroDesc}>{subtitle}</p>
      </section>

      {/* Comprehensive Solutions Grid */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Comprehensive Solutions</h2>
          <p className={styles.sectionSubtitle}>End-to-end expertise delivering unified, high-performing outcomes.</p>
        </div>
        <div className={styles.grid}>
          {solutions.map((sol, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{sol.title}</h3>
              <p className={styles.cardBody}>{sol.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Framework */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Service Framework</h2>
          <p className={styles.sectionSubtitle}>From Strategy to Scale. Our three-pillar approach ensures operational success.</p>
        </div>
        <div className={styles.grid}>
          {framework.map((fw, i) => (
            <div key={i} className={styles.card} >
              <span className={styles.heroTag} >{fw.step}</span>
              <h3 className={styles.cardTitle}>{fw.title}</h3>
              <p className={styles.cardBody} >{fw.desc}</p>
              <div >
                <strong >Outcome</strong>
                <p className={styles.cardBody} >{fw.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Hadron GBS? */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Hadron GBS?</h2>
        </div>
        <div className={styles.grid}>
          {whyHadron.map((why, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{why.title}</h3>
              <p className={styles.cardBody}>{why.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
