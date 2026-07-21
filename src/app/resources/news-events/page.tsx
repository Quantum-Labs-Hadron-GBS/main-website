import Navbar from "../../components/Navbar/Navbar";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import BreadcrumbNav from "../../components/BreadcrumbNav/BreadcrumbNav";
import styles from "../Resources.module.css";

// Data structure prepared for future CMS integration
const STATS = [
  { value: "6", label: "News this year" },
  { value: "6", label: "Upcoming events" },
  { value: "6", label: "Awards & honours" }
];

const NEWS = [
  { date: "June 2025", type: "Award", title: "Hadron GBS recognized as a Digital Transformation Excellence finalist for Enterprise Transformation" },
  { date: "May 2025", type: "Expansion", title: "Hadron GBS expands managed services presence across Southeast Asia and the Middle East" },
  { date: "April 2025", type: "Partnership", title: "New partnership announced with NovaBridge Technologies to accelerate cloud adoption offerings" },
  { date: "March 2025", type: "Recognition", title: "Hadron GBS named to the Global IT Services Leaders 2025 annual ranking" },
  { date: "February 2025", type: "Launch", title: "Hadron GBS launches next-generation Governance Accelerator platform for enterprise clients" },
  { date: "January 2025", type: "Award", title: "Hadron GBS wins Engineering Quality Excellence award at the APAC Technology Summit" }
];

const EVENTS = [
  { event: "Enterprise Tech Summit 2025", location: "Singapore", date: "15–17 July 2025", details: "Meet our team at Booth 42" },
  { event: "Cloud & Infrastructure Leaders Forum", location: "Dubai, UAE", date: "29 July 2025", details: "Rohan Mehta presenting on Governance at Scale" },
  { event: "Global CIO Forum", location: "London, UK", date: "12 August 2025", details: "Meet our team at Booth 19" },
  { event: "APAC Digital Transformation Congress", location: "Sydney, Australia", date: "2–3 September 2025", details: "Priya Nair presenting on Cloud-Native Migration Playbooks" },
  { event: "FinTech & Banking Innovation Week", location: "New York, USA", date: "22–24 September 2025", details: "Meet our team at Booth 7" },
  { event: "Manufacturing Technology Expo", location: "Frankfurt, Germany", date: "8 October 2025", details: "James Osei presenting on Rapid Application Engineering" }
];

const AWARDS = [
  { title: "Top Enterprise IT Services Firm", year: "2025", org: "Technology Business Review", icon: "🏆" },
  { title: "Best Places to Work in Tech", year: "2025", org: "WorkTech Global", icon: "⭐" },
  { title: "Top Enterprise IT Services Firm", year: "2024", org: "Cloud Industry Forum", icon: "🏆" },
  { title: "Digital Transformation Excellence Finalist", year: "2024", org: "Enterprise IT Awards", icon: "🌟" },
  { title: "Top 50 Managed Services Providers", year: "2024", org: "Channel Futures MSP 50", icon: "🏅" },
  { title: "Engineering Quality Leadership Award", year: "2023", org: "APAC Technology Summit", icon: "⚙️" }
];

export default function NewsEventsPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={`${styles.hero} container`}>
        <BreadcrumbNav items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/#resources" },
          { label: "News & Events" }
        ]} />
        <span className={styles.heroTag}>News & Events</span>
        <h1 className={styles.heroTitle}>Where We're Showing Up</h1>
        <p className={styles.heroDesc}>
          Company news, industry recognition, and the events where you can meet the Hadron GBS team in person.
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
          From industry awards to conference stages, this is where we share what’s happening at Hadron GBS — and where you can find us next.
        </p>

        <div className={styles.grid} style={{ gap: '4rem' }}>
          {/* Left Column: News Timeline */}
          <div>
            <h2 className={styles.sectionTitle} style={{ fontSize: '2rem', marginBottom: '2rem' }}>Latest News</h2>
            <div className={styles.eventList}>
              {NEWS.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ minWidth: '100px' }}>
                    <span style={{ display: 'block', fontWeight: 700, color: 'var(--fg)' }}>{item.date}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase' }}>{item.type}</span>
                  </div>
                  <p style={{ color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Awards */}
          <div>
            <h2 className={styles.sectionTitle} style={{ fontSize: '2rem', marginBottom: '2rem' }}>Awards & Recognition</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {AWARDS.map((award, i) => (
                <div key={i} className={styles.card} style={{ padding: '1.5rem', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ fontSize: '2rem' }}>{award.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--fg)' }}>{award.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', margin: 0 }}>{award.year} · {award.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Table */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader} style={{ marginBottom: '2rem' }}>
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>
        </div>
        
        <div className={styles.eventList}>
          <div className={styles.eventHeader}>
            <span>Event</span>
            <span>Location</span>
            <span>Date</span>
            <span>Details</span>
          </div>
          {EVENTS.map((evt, i) => (
            <div key={i} className={styles.eventRow}>
              <strong style={{ color: 'var(--fg)' }}>{evt.event}</strong>
              <span style={{ color: 'var(--fg-muted)' }}>{evt.location}</span>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{evt.date}</span>
              <span style={{ color: 'var(--fg-muted)', fontSize: '0.9rem' }}>{evt.details}</span>
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
