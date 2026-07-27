import Navbar from "../../components/Navbar/Navbar";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import styles from "../Careers.module.css";

const PRINCIPLES = [
  { title: "Collaborative by design", desc: "We work in cross-functional PODs, not siloed departments" },
  { title: "High standards, high support", desc: "Expectations are clear; so is the help you'll receive to meet them" },
  { title: "Straight feedback, respectfully delivered", desc: "We believe in honest conversations that make people better" },
  { title: "Globally minded, locally grounded", desc: "A diverse team that brings perspective, not just presence" }
];

const WORKING = [
  { step: "01", title: "Hybrid & Remote-First Options", desc: "We trust our people to do great work wherever they are" },
  { step: "02", title: "Agile Delivery Model", desc: "Sprint-based POD structure means clear ownership and regular rhythm" },
  { step: "03", title: "Collaboration Tools", desc: "Modern tooling to keep globally distributed teams aligned and connected" },
  { step: "04", title: "Reasonable Intensity", desc: "We work hard when it matters; we don’t manufacture urgency" }
];

const BENEFITS = [
  "Comprehensive health coverage — self and family",
  "Performance-based incentives reviewed annually",
  "Paid time off policies that encourage actual rest",
  "Mental health and wellness support resources",
  "Parental leave that doesn’t require an apology"
];

const INCLUSION = [
  "Equal opportunity in hiring, promotion, and compensation",
  "Inclusive leadership that actively seeks out different perspectives",
  "Safe, respectful workplaces across every office and every project team",
  "Representation at every level — from delivery teams to the leadership table"
];

const QUOTES = [
  { role: "Consultant, ESM Practice", location: "India", quote: "The level of ownership I have at Hadron — at my stage of career — would have taken me years to get anywhere else." },
  { role: "Senior Engineer, DevOps Practice", location: "UAE", quote: "I’ve worked at larger firms. The work quality here is higher. And I can actually see the impact." },
  { role: "Delivery Manager", location: "Singapore", quote: "It’s a place where you’re trusted from day one. That changes everything." }
];

export default function WorkCulturePage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={`${styles.hero} container`}>
        <span className={styles.heroTag}>Life at Hadron GBS</span>
        <h1 className={styles.heroTitle}>This Is What It Looks Like to Do Your Best Work.</h1>
        <p className={styles.heroDesc}>
          Life at Hadron GBS is defined by the quality of the problems we solve, the people we solve them with, and the environment we’ve built to do it. It’s demanding, energizing, and deliberately designed for professionals who want more than a job title.
        </p>
      </section>

      <section className={`${styles.section} container`} >
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>A Culture Built on Craft</h2>
          <p className={styles.heroDesc} >
            We care deeply about the quality of our work, and that shared commitment creates a culture unlike most consulting environments. Our teams are small enough that your contribution is visible, and large enough that you’re working with some of the most experienced practitioners in the industry.
          </p>
        </div>

        <div className={styles.grid}>
          {PRINCIPLES.map((item, i) => (
            <div key={i} className={styles.card} >
              <strong >{item.title}</strong>
              <span >{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader} >
          <h2 className={styles.sectionTitle}>How We Work</h2>
          <p className={styles.heroDesc} >
            We’ve designed our work environment around autonomy, flexibility, and collaboration — because those three things together produce our best outcomes.
          </p>
        </div>

        <div className={styles.grid}>
          {WORKING.map((item, i) => (
            <div key={i} className={styles.card} >
              <span >{item.step}</span>
              <strong >{item.title}</strong>
              <span >{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <div >
          <div>
            <h2 className={styles.sectionTitle} >Employee Experience & Wellbeing</h2>
            <ul >
              {BENEFITS.map((item, i) => <li key={i} >{item}</li>)}
            </ul>
          </div>
          <div>
            <h2 className={styles.sectionTitle} >Diversity, Equity & Inclusion</h2>
            <p >
              Hadron GBS is a naturally diverse organization — built across four continents by professionals from dozens of backgrounds, disciplines, and cultures. That diversity isn’t a policy. It’s how we were designed.
            </p>
            <ul >
              {INCLUSION.map((item, i) => <li key={i} >{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Hear From Our Team</h2>
        </div>

        <div className={styles.grid}>
          {QUOTES.map((item, i) => (
            <div key={i} className={styles.card} >
              <span >"</span>
              <p >"{item.quote}"</p>
              <div >
                <strong >{item.role}</strong>
                <span >{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection 
        title="Come Work on Problems That Matter."
        subtitle="Enterprise transformation starts with the right conversation. Tell us where your platforms are falling short."
        buttonText="See Open Roles"
      />

      <Footer />
    </main>
  );
}
