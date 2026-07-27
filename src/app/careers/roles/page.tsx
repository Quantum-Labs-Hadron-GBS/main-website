import Navbar from "../../components/Navbar/Navbar";
// import CtaSection from "../../components/CtaSection/CtaSection";
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

      <section className={`${styles.section} container`} >
        <div className={styles.sectionHeader} >
          <h2 className={styles.sectionTitle}>Featured Postings</h2>
        </div>

        <div className={styles.grid} >
          {POSTINGS.map((job, i) => (
            <div key={i} className={styles.card} >
              <div >
                <div>
                  <h3 className={styles.cardTitle} >{job.title}</h3>
                  <div >
                    <span>📍 {job.location}</span>
                    <span>⏳ {job.experience}</span>
                    <span>💼 {job.type}</span>
                  </div>
                </div>
                <a href="/careers/apply" className={styles.btnPrimary}>Apply Now</a>
              </div>

              <div >
                <div>
                  <strong >About the Role</strong>
                  <p >{job.about}</p>
                  
                  <strong >What You'll Do</strong>
                  <ul >
                    {job.duties.map((duty, idx) => <li key={idx} >{duty}</li>)}
                  </ul>
                </div>

                <div>
                  <strong >What You Bring</strong>
                  <ul >
                    {job.requirements.map((req, idx) => <li key={idx} >{req}</li>)}
                  </ul>

                  <div >
                    <strong >What You'll Get</strong>
                    <ul >
                      <li >Competitive salary + performance bonus</li>
                      <li >Certification and training budget</li>
                      <li >Hybrid/remote flexibility and global project exposure</li>
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
        <div className={styles.sectionHeader} >
          <h2 className={styles.sectionTitle}>Practice Areas We're Hiring In</h2>
        </div>

        <div className={styles.jobList}>
          <div className={styles.jobHeader} >
            <span>Category</span>
            <span>Roles</span>
          </div>
          {CATEGORIES.map((cat, i) => (
            <div key={i} className={styles.jobRow} >
              <strong >{cat.category}</strong>
              <span >{cat.roles}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} container`} >
        <h2 className={styles.sectionTitle}>Ready to redefine your digital workflows?</h2>
        <p className={styles.heroDesc} >
          We’re growing rapidly — and some of our best hires come before we post the job. If you believe your expertise has a home at Hadron GBS, we want to hear from you.
        </p>
        <a href="/careers/apply" >
          Apply Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
