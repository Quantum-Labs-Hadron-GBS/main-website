import Navbar from "../../components/Navbar/Navbar";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import styles from "../Careers.module.css";

const PROCESS = [
  { step: "1", title: "Application", desc: "Submit your application via our careers portal. Every application is reviewed by a Talent Partner, not filtered by a keyword scanner. We acknowledge every submission within 2 business days." },
  { step: "2", title: "Initial Screening", desc: "A 30-minute call with a Talent Partner to understand your background, motivations, and the role in detail. This is a two-way conversation — we encourage questions. Typically within 1 week of application." },
  { step: "3", title: "Technical / Domain Interview", desc: "A structured interview with a senior practitioner from the relevant practice may include a technical assessment, case discussion, or platform-specific scenario walkthrough. Within 1–2 weeks of screening." },
  { step: "4", title: "Leadership / Cultural Fit Interview", desc: "A conversation with a Practice Lead or leadership team member. We explore how you think, how you collaborate, and what drives you. Within 1 week of the technical interview." },
  { step: "5", title: "Offer", desc: "We move quickly when we find the right person. Your Talent Partner walks you through the offer personally. Expect a competitive, transparent offer with clear compensation, benefits, and start date. Within 3–5 business days of the final interview." },
  { step: "6", title: "Onboarding", desc: "Before Day One: welcome kit, system access, and a 30-day plan. On Day One: meet your team, manager, and onboarding buddy. We define what success looks like from the start, for you and for us." }
];

export default function RecruitmentProcessPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={`${styles.hero} container`}>
        <span className={styles.heroTag}>Recruitment Process</span>
        <h1 className={styles.heroTitle}>Our Hiring Journey</h1>
        <p className={styles.heroDesc}>
          We respect your time. Our hiring process is designed to be transparent, communicative, and focused on discovering if we are the right fit for each other.
        </p>
      </section>

      <section className={`${styles.section} container`} >
        <div className={styles.timeline}>
          {PROCESS.map((item, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineNumber}>{item.step}</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.cardTitle} >{item.title}</h3>
                <p className={styles.cardDesc} >{item.desc}</p>
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
