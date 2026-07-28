import Navbar from "../components/Navbar/Navbar";
import CtaSection from "../components/CtaSection/CtaSection";
import Footer from "../components/Footer/Footer";
import BreadcrumbNav from "../components/BreadcrumbNav/BreadcrumbNav";
import styles from "./ServicePage.module.css";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  solutions: { title: string; desc: string; img?: string; category?: string }[];
  framework: { step: string; title: string; desc: string; outcome: string; img?: string }[];
  whyHadron: { title: string; desc: string; img?: string }[];
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
              <img 
                src={sol.img || `https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&sig=${i}`} 
                alt={sol.title} 
                className={styles.cardImage} 
              />
              <div className={styles.cardContent}>
                <span className={styles.cardPill}>{sol.category || "Solution"}</span>
                <h3 className={styles.cardTitle}>{sol.title}</h3>
                <p className={styles.cardBody}>{sol.desc}</p>
                <a href="#contact" className={styles.cardLink}>Read More ↗</a>
              </div>
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
            <div key={i} className={styles.card}>
              <img 
                src={fw.img || `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&sig=${i}`} 
                alt={fw.title} 
                className={styles.cardImage} 
              />
              <div className={styles.cardContent}>
                <span className={styles.cardPill}>Step {fw.step}</span>
                <h3 className={styles.cardTitle}>{fw.title}</h3>
                <p className={styles.cardBody}>{fw.desc}</p>
                <div style={{ marginTop: 'auto', background: '#f8fafc', padding: '1rem', borderRadius: '8px', width: '100%' }}>
                  <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem', fontSize: '0.85rem' }}>Outcome:</strong>
                  <p style={{ color: '#4b5563', margin: 0, fontSize: '0.9rem' }}>{fw.outcome}</p>
                </div>
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
              <div className={styles.cardContent}>
                <span className={styles.cardPill}>Differentiator</span>
                <h3 className={styles.cardTitle}>{why.title}</h3>
                <p className={styles.cardBody} style={{ marginBottom: 0 }}>{why.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
