import Navbar from "../components/Navbar/Navbar";
import CtaSection from "../components/CtaSection/CtaSection";
import Footer from "../components/Footer/Footer";
import styles from "./Careers.module.css";

const WHY_JOIN = [
  { title: "Work That Matters", desc: "Every engagement we take on is high-stakes, high-impact, and high-visibility. Our clients are global enterprises grappling with real transformation challenges, and you’ll be at the center of solving them." },
  { title: "Global Exposure, Real Responsibility", desc: "Work on international projects across industries while enjoying the ownership and agility of a growing firm. Gain meaningful responsibilities early in your career." },
  { title: "A Practice Built for Specialists", desc: "Build expertise within focused practice areas such as ESM, DevOps, automation, ERP, and cloud, developing deep domain knowledge and recognized specialization." },
  { title: "Leadership Within Reach", desc: "Our leadership team is accessible, collaborative, and actively invested in developing the next generation. Career paths are real, visible, and fast-tracked for those who deliver." }
];

const GROWTH = [
  { title: "Certification Support", desc: "Funding and time for platform certifications (ServiceNow, BMC, Salesforce, SAP, AWS, Azure, Microsoft, and more)." },
  { title: "Mentorship Programs", desc: "Structured pairing with senior practitioners from day one." },
  { title: "Cross-Functional Exposure", desc: "Opportunities to work across service lines and geographies." },
  { title: "Internal Knowledge Sharing", desc: "Regular sessions, workshops, and practice forums led by domain experts." },
  { title: "Innovation Sandbox", desc: "Space and resources to explore new technologies, build POCs, and prototype ideas." }
];

export default function CareersOverviewPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={`${styles.hero} container`}>
        <span className={styles.heroTag}>Careers at Hadron GBS</span>
        <h1 className={styles.heroTitle}>Built Together. Delivered Better.</h1>
        <p className={styles.heroDesc}>
          We believe the most powerful enterprise transformations happen at the intersection of complementary capabilities. That’s why we build deep, lasting alliances with technology leaders worldwide.
        </p>
      </section>

      <section className={`${styles.section} container`} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Join Hadron GBS</h2>
          <p className={styles.heroDesc} style={{ margin: 0 }}>
            We’re not a typical IT services firm. We’re a consulting organization built on specialization, and that changes everything about how we work, what we work on, and what you’ll learn.
          </p>
        </div>

        <div className={styles.grid}>
          {WHY_JOIN.map((item, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Growth & Learning</h2>
          <p className={styles.heroDesc} style={{ margin: 0 }}>
            We invest in your development because the quality of our work depends on it.
          </p>
        </div>

        <div className={styles.grid}>
          {GROWTH.map((item, i) => (
            <div key={i} className={styles.card} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
              <div>
                <strong style={{ color: 'var(--fg)', display: 'block', marginBottom: '0.25rem' }}>{item.title}</strong>
                <span style={{ color: 'var(--fg-muted)', fontSize: '0.9rem' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection 
        title="Explore Open Roles at Hadron GBS"
        subtitle="Enterprise transformation starts with the right conversation. Tell us where your platforms are falling short."
        buttonText="View Open Positions"
      />

      <Footer />
    </main>
  );
}
