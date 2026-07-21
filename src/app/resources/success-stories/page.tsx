import Navbar from "../../components/Navbar/Navbar";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import styles from "../Resources.module.css";

// Data structure prepared for future CMS integration
const STATS = [
  { value: "60%", label: "Avg. incident reduction" },
  { value: "87d", label: "Fastest cloud migration" },
  { value: "2x", label: "Faster time-to-market" },
  { value: "12+", label: "Teams governed at scale" }
];

const CASE_STUDIES = [
  {
    id: "governance-scaled",
    tag: "Core Transformation",
    title: "Governance That Scaled With the Business",
    subtitle: "Building delivery discipline across 12 product teams",
    metric: "72%",
    metricLabel: "Fewer release failures",
    challenge: "A rapidly scaling tech company had 12 autonomous product teams working in silos, causing release collisions and quality drops.",
    approach: "Introduced a federated governance model with shared delivery gates, unified CI/CD pipelines, and automated testing standards.",
    result: "Release failure rate dropped by 72%. Executive confidence restored."
  },
  {
    id: "rapid-app-engineering",
    tag: "Financial Services",
    title: "Cutting Time-to-Market in Half",
    subtitle: "Rapid application engineering for a fintech scale-up",
    metric: "2x",
    metricLabel: "Faster to market",
    challenge: "A fintech scale-up was losing competitive ground due to a monolithic architecture and 18-week feature cycles.",
    approach: "Deployed our Rapid Application Engineering framework, decomposing the monolith into microservices and implementing low-code acceleration.",
    result: "Average feature cycle dropped from 18 weeks to 8. Two new revenue-generating products launched within the first quarter."
  },
  {
    id: "fault-tolerant-commerce",
    tag: "Retail",
    title: "From Fragile to Fault-Tolerant",
    subtitle: "How a global retailer cut platform incidents by 60% in two quarters",
    metric: "60%",
    metricLabel: "Fewer incidents",
    challenge: "A global retailer’s core commerce platform was suffering multiple outages during peak shopping seasons, threatening revenue.",
    approach: "Introduced observability-first engineering, re-architected the checkout flow for high availability, and implemented chaos engineering practices.",
    result: "60% reduction in platform incidents across two quarters, with zero downtime during Black Friday."
  },
  {
    id: "cloud-native-90-days",
    tag: "Financial Services",
    title: "90 Days to Cloud-Native",
    subtitle: "A legacy-to-cloud migration without a single missed SLA",
    metric: "87",
    metricLabel: "Days to migrate",
    challenge: "A financial services firm needed to exit an on-premise data center within a strict 90-day window due to lease expiration.",
    approach: "Phased lift-and-modernise using our Cloud Adoption framework, utilizing automated migration tools and infrastructure-as-code.",
    result: "Full cloud migration completed in 87 days. Zero SLA breaches and immediate performance improvements."
  }
];

export default function SuccessStoriesPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={`${styles.hero} container`}>
        <span className={styles.heroTag}>Success Stories</span>
        <h1 className={styles.heroTitle}>Proof, Not Promises</h1>
        <p className={styles.heroDesc}>
          Real transformations, real numbers, real teams. See how enterprises worked with Hadron GBS to build platforms that hold together.
        </p>
      </section>

      {/* Stats Grid */}
      <div className={`${styles.statsGrid}`}>
        {STATS.map((stat, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      <section className={`${styles.section} container`} style={{ paddingTop: '40px' }}>
        <p className={styles.heroDesc} style={{ margin: '0 auto 4rem', textAlign: 'center', maxWidth: '900px' }}>
          Every engagement starts with a hard question and ends with a measurable outcome. These are the stories behind the systems we’ve helped stabilize, modernize, and scale — told with the detail that matters to technical and business stakeholders alike.
        </p>

        {/* Case Studies Grid */}
        <div className={styles.grid}>
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className={styles.card}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span className={styles.cardTag}>{study.tag}</span>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)' }}>{study.metric}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', textTransform: 'uppercase' }}>{study.metricLabel}</span>
                </div>
              </div>
              
              <h3 className={styles.cardTitle}>{study.title}</h3>
              <p className={styles.cardDesc} style={{ flexGrow: 0 }}>{study.subtitle}</p>
              
              <div className={styles.caseContent}>
                <span className={styles.caseLabel}>Challenge</span>
                <p className={styles.caseText}>{study.challenge}</p>
                
                <span className={styles.caseLabel} style={{ marginTop: '1rem' }}>Approach</span>
                <p className={styles.caseText}>{study.approach}</p>

                <span className={styles.caseLabel} style={{ marginTop: '1rem' }}>Result</span>
                <p className={styles.caseText} style={{ color: 'var(--fg)', fontWeight: 500 }}>{study.result}</p>
              </div>

              <a href="#" className={styles.linkBtn}>
                Read Full Story
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      <CtaSection 
        title="Want results like these?" 
        subtitle="Let’s talk about where your platform stands today — and what a stable, ROI-driven roadmap could look like."
        buttonText="Schedule a Discovery Discussion"
      />
      <Footer />
    </main>
  );
}
