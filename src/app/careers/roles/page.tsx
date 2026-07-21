import Navbar from "../../components/Navbar/Navbar";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import styles from "../Careers.module.css";

const POSTINGS = [
  {
    title: "ServiceNow Consultant — ITSM / ESM",
    location: "Pune / Dubai / Remote",
    experience: "4-8 Years",
    type: "Full-Time",
    about: "Lead end-to-end ServiceNow ITSM/ESM implementations for global enterprise clients, driving measurable improvements in service delivery, operational efficiency, and user experience.",
    duties: [
      "Lead end-to-end implementation of ServiceNow ITSM/ESM modules for enterprise clients",
      "Conduct requirements workshops, solution design sessions, and stakeholder presentations",
      "Manage sprint-based delivery within Hadron’s Agile POD model",
      "Contribute to pre-sales activities including demos, RFP responses, and POC development",
      "Mentor junior team members and contribute to internal knowledge-sharing"
    ],
    requirements: [
      "4+ years of hands-on ServiceNow experience (ITSM, ESM, HRSD, or CSM)",
      "CIS-ITSM or ITIL V4 certification preferred",
      "Strong client-facing skills — comfortable in a boardroom and a sprint review",
      "Experience in cross-functional, globally distributed team environments"
    ]
  }
];

const CATEGORIES = [
  { category: "ESM / ITSM Consulting", roles: "ServiceNow Consultant, ESM Architect, ITSM Process Consultant" },
  { category: "DevOps & Cloud", roles: "DevOps Engineer, Cloud Solutions Architect, AWS / Azure Specialist" },
  { category: "ERP & CRM", roles: "SAP Consultant, Microsoft Dynamics Consultant, Salesforce Consultant" },
  { category: "Automation & RPA", roles: "RPA Developer, Automation Architect, AI / ML Integration Specialist" },
  { category: "Testing & QA", roles: "Test Automation Engineer, Performance Testing Specialist" },
  { category: "Sales & Pre-Sales", roles: "Solutions Consultant, Business Development Manager" },
  { category: "Operations & Delivery", roles: "Delivery Manager, Scrum Master, Project Manager" }
];

export default function OpenRolesPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={`${styles.hero} container`}>
        <span className={styles.heroTag}>Join The Team</span>
        <h1 className={styles.heroTitle}>Open Roles at Hadron GBS</h1>
        <p className={styles.heroDesc}>
          We’re growing — and we’re looking for professionals who bring precision, expertise, and ambition to everything they do. Browse our current openings and find where your skills fit best.
        </p>
      </section>

      <section className={`${styles.section} container`} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader} style={{ marginBottom: '2rem', alignItems: 'flex-start' }}>
          <h2 className={styles.sectionTitle}>Featured Postings</h2>
        </div>

        <div className={styles.grid} style={{ gridTemplateColumns: '1fr' }}>
          {POSTINGS.map((job, i) => (
            <div key={i} className={styles.card} style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                <div>
                  <h3 className={styles.cardTitle} style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{job.title}</h3>
                  <div style={{ display: 'flex', gap: '1rem', color: 'var(--fg-muted)', fontSize: '0.95rem' }}>
                    <span>📍 {job.location}</span>
                    <span>⏳ {job.experience}</span>
                    <span>💼 {job.type}</span>
                  </div>
                </div>
                <a href="#apply" className={styles.btnPrimary}>Apply Now</a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div>
                  <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>About the Role</strong>
                  <p style={{ color: 'var(--fg-muted)', lineHeight: 1.6 }}>{job.about}</p>
                  
                  <strong style={{ color: 'var(--accent)', display: 'block', margin: '2rem 0 1rem' }}>What You'll Do</strong>
                  <ul style={{ color: 'var(--fg-muted)', lineHeight: 1.6, paddingLeft: '1.2rem', margin: 0 }}>
                    {job.duties.map((duty, idx) => <li key={idx} style={{ marginBottom: '0.5rem' }}>{duty}</li>)}
                  </ul>
                </div>

                <div>
                  <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>What You Bring</strong>
                  <ul style={{ color: 'var(--fg-muted)', lineHeight: 1.6, paddingLeft: '1.2rem', margin: 0 }}>
                    {job.requirements.map((req, idx) => <li key={idx} style={{ marginBottom: '0.5rem' }}>{req}</li>)}
                  </ul>

                  <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--bg)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>What You'll Get</strong>
                    <ul style={{ color: 'var(--fg)', lineHeight: 1.6, paddingLeft: '1.2rem', margin: 0 }}>
                      <li style={{ marginBottom: '0.5rem' }}>Competitive salary + performance bonus</li>
                      <li style={{ marginBottom: '0.5rem' }}>Certification and training budget</li>
                      <li style={{ marginBottom: '0.5rem' }}>Hybrid/remote flexibility and global project exposure</li>
                      <li>A clear career path in a high-growth consulting environment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader} style={{ marginBottom: '2rem' }}>
          <h2 className={styles.sectionTitle}>Practice Areas We're Hiring In</h2>
        </div>

        <div className={styles.jobList}>
          <div className={styles.jobHeader} style={{ gridTemplateColumns: '1fr 2fr' }}>
            <span>Category</span>
            <span>Roles</span>
          </div>
          {CATEGORIES.map((cat, i) => (
            <div key={i} className={styles.jobRow} style={{ gridTemplateColumns: '1fr 2fr' }}>
              <strong style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>{cat.category}</strong>
              <span style={{ color: 'var(--fg-muted)', lineHeight: 1.5 }}>{cat.roles}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaSection 
        title="Ready to redefine your digital workflows?"
        subtitle="We’re growing rapidly — and some of our best hires come before we post the job. If you believe your expertise has a home at Hadron GBS, we want to hear from you."
        buttonText="Send Us your profile"
      />

      <Footer />
    </main>
  );
}
