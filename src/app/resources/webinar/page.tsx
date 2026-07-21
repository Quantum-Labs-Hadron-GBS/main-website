import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BreadcrumbNav from "../../components/BreadcrumbNav/BreadcrumbNav";
import styles from "../Resources.module.css";

// Data structure prepared for future CMS integration
const FEATURED_WEBINAR = {
  title: "Cloud Adoption Without the Chaos: A Practical Roadmap",
  date: "24 July 2025",
  time: "11:00 AM SGT / 9:00 AM GST",
  speaker: "Priya Nair, Head of Cloud Practice",
  seatsRemaining: 47
};

const UPCOMING_SESSIONS = [
  { date: "22 Jul", title: "Cloud Adoption Without the Chaos: A Practical Roadmap", speaker: "Priya Nathan · VP Cloud Engineering" },
  { date: "22 Jul", title: "Building for Reliability: An SRE Perspective for Enterprise Teams", speaker: "Marcus Diallo · Head of Reliability Engineering" },
  { date: "22 Jul", title: "ROI in Modernization: How to Make the Business Case", speaker: "Elena Cho · Director, Enterprise Advisory" }
];

const ON_DEMAND = [
  { category: "Core Transformation", title: "Where Programs Actually Fail", desc: "The three inflection points that decide a program’s fate." },
  { category: "Reliability", title: "Building for Reliability", desc: "SRE fundamentals adapted for enterprise scale." },
  { category: "Advisory", title: "Making the ROI Case for Modernization", desc: "A framework CFOs and CTOs both sign off on." },
  { category: "Q&A", title: "Ask Our Architects Anything", desc: "Unedited questions from a live audience." }
];

const WHY_ATTEND = [
  { icon: "direct-access", title: "Direct access", desc: "You hear from the people doing the work, not sales reps." },
  { icon: "frameworks", title: "Practical frameworks", desc: "Take away something you can apply the same week." },
  { icon: "qa", title: "Live Q&A", desc: "Bring your hardest questions — we answer them on air." }
];

export default function WebinarPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={`${styles.hero} container`}>
        <BreadcrumbNav items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/#resources" },
          { label: "Webinars" }
        ]} />
        <span className={styles.heroTag}>Webinars</span>
        <h1 className={styles.heroTitle}>Live Conversations. Real Answers.</h1>
        <p className={styles.heroDesc}>
          Ideas, frameworks, and lessons from the field — written by the architects and engineers who build enterprise platforms every day.
        </p>
        <p className={styles.heroDesc} style={{ fontSize: '1rem', marginTop: '-1.5rem' }}>
          No pitch decks disguised as thought leadership. Our webinars are working sessions — we bring a point of view, share what we’re seeing across industries, and leave real time for your questions.
        </p>
      </section>

      {/* Featured Webinar Banner */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <div style={{ 
          background: 'var(--surface)', 
          border: '1px solid var(--accent)', 
          borderRadius: '20px',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle background glow */}
          <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px', background: 'var(--accent)', filter: 'blur(150px)', opacity: 0.2, zIndex: 0 }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: 'var(--bg)', padding: '0.25rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Registrations Open
            </span>
            <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--fg-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Upcoming Webinar</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--fg)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              "{FEATURED_WEBINAR.title}"
            </h2>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem', color: 'var(--fg-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                {FEATURED_WEBINAR.date}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                {FEATURED_WEBINAR.time}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                {FEATURED_WEBINAR.speaker}
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <button style={{ padding: '1rem 2rem', background: 'var(--fg)', color: 'var(--bg)', border: 'none', borderRadius: '999px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'transform 200ms ease' }}>
                Reserve Your Seat
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600 }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s infinite' }}></div>
                {FEATURED_WEBINAR.seatsRemaining} SEATS REMAINING
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Sessions List */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader} style={{ marginBottom: '2rem' }}>
          <h2 className={styles.sectionTitle}>Upcoming Sessions</h2>
        </div>
        
        <div className={styles.eventList}>
          {UPCOMING_SESSIONS.map((session, i) => (
            <div key={i} className={styles.eventRow} style={{ gridTemplateColumns: '100px 3fr 2fr 150px' }}>
              <div style={{ textAlign: 'center', background: 'var(--bg)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg)' }}>{session.date.split(' ')[0]}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase' }}>{session.date.split(' ')[1]}</span>
              </div>
              <strong style={{ color: 'var(--fg)', fontSize: '1.1rem' }}>{session.title}</strong>
              <span style={{ color: 'var(--fg-muted)' }}>{session.speaker}</span>
              <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', borderRadius: '999px', fontWeight: 600, cursor: 'pointer' }}>
                Register
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Attend */}
      <section className={`${styles.section} container`} style={{ background: 'var(--surface)', borderRadius: '24px', margin: '4rem auto', padding: '4rem 2rem' }}>
        <div className={styles.sectionHeader} style={{ marginBottom: '3rem' }}>
          <h2 className={styles.sectionTitle}>Why Attend</h2>
        </div>
        <div className={styles.grid}>
          {WHY_ATTEND.map((item, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg)', border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--accent)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg)', marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* On-Demand Library */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader} style={{ marginBottom: '3rem' }}>
          <h2 className={styles.sectionTitle}>On-Demand Library</h2>
          <p className={styles.heroDesc} style={{ marginBottom: 0 }}>
            Missed a session? Every webinar is recorded and added to our on-demand library within 48 hours.
          </p>
        </div>
        
        <div className={styles.grid}>
          {ON_DEMAND.map((video, i) => (
            <div key={i} className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
              {/* Fake Video Thumbnail */}
              <div style={{ width: '100%', height: '180px', background: 'var(--bg)', borderBottom: '1px solid var(--border)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px' }}><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <span style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(0,0,0,0.8)', color: '#fff', fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>45:00</span>
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <span className={styles.cardTag}>{video.category}</span>
                <h3 className={styles.cardTitle} style={{ fontSize: '1.2rem' }}>{video.title}</h3>
                <p className={styles.cardDesc} style={{ fontSize: '0.9rem', marginBottom: 0 }}>{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button style={{ padding: '0.75rem 2rem', background: 'transparent', color: 'var(--fg)', border: '1px solid var(--fg)', borderRadius: '999px', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer' }}>
            View Past Webinars
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
