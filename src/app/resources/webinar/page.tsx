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
        <p className={styles.heroDesc} >
          No pitch decks disguised as thought leadership. Our webinars are working sessions — we bring a point of view, share what we’re seeing across industries, and leave real time for your questions.
        </p>
      </section>

      {/* Featured Webinar Banner */}
      <section className="container" >
        <div >
          {/* Subtle background glow */}
          <div  />
          
          <div >
            <span >
              Registrations Open
            </span>
            <span >Upcoming Webinar</span>
            <h2 >
              "{FEATURED_WEBINAR.title}"
            </h2>
            <div >
              <div >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                {FEATURED_WEBINAR.date}
              </div>
              <div >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                {FEATURED_WEBINAR.time}
              </div>
              <div >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                {FEATURED_WEBINAR.speaker}
              </div>
            </div>
            
            <div >
              <button >
                Reserve Your Seat
              </button>
              <div >
                <div ></div>
                {FEATURED_WEBINAR.seatsRemaining} SEATS REMAINING
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Sessions List */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader} >
          <h2 className={styles.sectionTitle}>Upcoming Sessions</h2>
        </div>
        
        <div className={styles.eventList}>
          {UPCOMING_SESSIONS.map((session, i) => (
            <div key={i} className={styles.eventRow} >
              <div >
                <span >{session.date.split(' ')[0]}</span>
                <span >{session.date.split(' ')[1]}</span>
              </div>
              <strong >{session.title}</strong>
              <span >{session.speaker}</span>
              <button >
                Register
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Attend */}
      <section className={`${styles.section} container`} >
        <div className={styles.sectionHeader} >
          <h2 className={styles.sectionTitle}>Why Attend</h2>
        </div>
        <div className={styles.grid}>
          {WHY_ATTEND.map((item, i) => (
            <div key={i} >
              <div >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 >{item.title}</h3>
              <p >{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* On-Demand Library */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader} >
          <h2 className={styles.sectionTitle}>On-Demand Library</h2>
          <p className={styles.heroDesc} >
            Missed a session? Every webinar is recorded and added to our on-demand library within 48 hours.
          </p>
        </div>
        
        <div className={styles.grid}>
          {ON_DEMAND.map((video, i) => (
            <div key={i} className={styles.card} >
              {/* Fake Video Thumbnail */}
              <div >
                <div >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" ><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <span >45:00</span>
              </div>
              
              <div >
                <span className={styles.cardTag}>{video.category}</span>
                <h3 className={styles.cardTitle} >{video.title}</h3>
                <p className={styles.cardDesc} >{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div >
          <button >
            View Past Webinars
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
