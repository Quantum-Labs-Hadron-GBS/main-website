import Navbar from "../components/Navbar/Navbar";
import CtaSection from "../components/CtaSection/CtaSection";
import Footer from "../components/Footer/Footer";
import styles from "./ServicePage.module.css";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  solutions: { title: string; desc: string }[];
  framework: { step: string; title: string; desc: string; outcome: string }[];
  whyHadron: { title: string; desc: string }[];
}

export default function ServiceLayout({ title, subtitle, solutions, framework, whyHadron }: ServiceLayoutProps) {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={`${styles.hero} container`}>
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
            <div key={i} className={styles.card} style={{ borderColor: 'var(--accent-border)' }}>
              <span className={styles.heroTag} style={{ marginBottom: '1rem' }}>{fw.step}</span>
              <h3 className={styles.cardTitle}>{fw.title}</h3>
              <p className={styles.cardBody} style={{ marginBottom: '1rem' }}>{fw.desc}</p>
              <div style={{ padding: '1rem', background: 'var(--surface)', borderRadius: '12px' }}>
                <strong style={{ display: 'block', color: 'var(--accent)', marginBottom: '0.25rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Outcome</strong>
                <p className={styles.cardBody} style={{ fontSize: '0.9rem' }}>{fw.outcome}</p>
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
