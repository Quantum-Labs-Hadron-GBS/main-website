"use client";

import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import CtaSection from "@/app/components/CtaSection/CtaSection";
import styles from "./ServicesPage.module.css";
import Link from "next/link";

const CAROUSEL_DATA = [
  {
    title: "ServiceNow",
    desc: "Optimise IT Service Management and enterprise operations with tailored ServiceNow implementations.",
    href: "/services/service-now",
    img: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787726300/servicenow-hero_jumtng.png"
  },
  {
    title: "BMC Software",
    desc: "Modernise service delivery and streamline operations using comprehensive BMC platforms.",
    href: "/services/bmc",
    img: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787726322/bmc_ywvbrt.jpg"
  },
  {
    title: "Salesforce",
    desc: "Drive customer success and unified operations with scalable Salesforce enterprise solutions.",
    href: "/services/salesforce",
    img: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787736501/Salesforce_tgmbuv.png"
  },
  {
    title: "SAP",
    desc: "Integrate core business processes and accelerate digital transformation with SAP.",
    href: "/services/sap",
    img: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787726362/sap_wwwmpq.png"
  },
  {
    title: "Ivanti",
    desc: "Unify IT operations, security, and asset management to proactively secure and manage all your endpoints.",
    href: "/services/ivanti",
    img: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787734310/Ivanti_esdywa.png"
  },
  {
    title: "Atlassian",
    desc: "Streamline agile development and enterprise collaboration with integrated Atlassian toolchains.",
    href: "/services/atlassian",
    img: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787736501/Atlassian_deruww.png"
  },
  {
    title: "Microsoft Cloud",
    desc: "Empower your workforce and scale enterprise applications seamlessly with Microsoft Cloud solutions.",
    href: "/services/microsoft-cloud",
    img: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787736500/Microsoft_c53rme.webp"
  },
  {
    title: "AWS Cloud",
    desc: "Architect, migrate, and manage resilient cloud infrastructures powered by Amazon Web Services.",
    href: "/services/aws-cloud",
    img: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787736501/aws_bbwpm7.png"
  },
  {
    title: "Freshworks",
    desc: "Deliver intuitive customer and employee experiences with intelligent, scalable Freshworks platforms.",
    href: "/services/freshworks",
    img: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787736500/Freshworks_ns5lbb.png"
  }
];

export default function ServicesPage() {
  return (
    <main className={`${styles.main} light-theme`}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Background Video */}
        <div className={styles.heroVideoContainer}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.heroVideo}
          >
            <source src="https://res.cloudinary.com/dyhlpxwwo/video/upload/v1787732744/Use_the_attached_image_as_the_htroef.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container">
          <h1 className={styles.heroTitle}>Our Services</h1>
          <p className={styles.heroOverview}>
            Convert System Complexity into Decision Clarity. We consult, build, and manage enterprise platforms so digital and cloud systems run reliably every day.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className={styles.carouselSection}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* ── Section Header ── */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '0.95rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0f172a', fontWeight: 600 }}>
              SERVICES
            </h2>
          </div>

          {/* ── Services Hover Grid ── */}
          <div className={styles.servicesGrid}>
            {CAROUSEL_DATA.map((card, i) => (
              <div key={i} className={styles.serviceGridCard}>
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className={styles.serviceGridImage} 
                />
                <div className={styles.serviceGridOverlay}>
                  <h3 className={styles.serviceGridTitle}>{card.title}</h3>
                  <p className={styles.serviceGridDesc}>{card.desc}</p>
                  <Link href={card.href} className={styles.serviceGridBtn}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Detailed Services */}
      <section className={styles.detailsSection}>
        <div className={styles.detailsContainer}>
        
        {/* Service 1: Advisory */}
        <div className={styles.detailBlock}>
          <div className={styles.detailContent}>
            <span className={styles.serviceTag}>SERVICE 1 OF 4</span>
            <h2 className={styles.detailTitle}>Consulting & Advisory Services</h2>
            <h3 className={styles.detailSubtitle}>Convert System Complexity into Decision Clarity</h3>
            <p className={styles.detailText}>
              Enterprise platforms are high-stakes investments. Without the right strategy and governance in place, organisations struggle to realise their full ROI, especially amid accelerating AI adoption, cloud migration, and ESM modernisation. Hadron GBS Advisory gives you the clarity, governance, and architectural grounding to move forward with confidence, before commitments are locked in.
            </p>
            <ul className={styles.detailList}>
              <li className={styles.detailListItem}><strong>Platform Strategy & Architecture:</strong> Align technology choices to business outcomes and design scalable foundations.</li>
              <li className={styles.detailListItem}><strong>Technology Assessments:</strong> Establish a clear baseline and compare actual versus designed performance.</li>
              <li className={styles.detailListItem}><strong>Transformation Advisory:</strong> Align your people, decision-making structures, and operating model.</li>
              <li className={styles.detailListItem}><strong>Programme & Delivery Advisory:</strong> Build oversight structures that keep programmes strategically aligned.</li>
            </ul>
            <Link href="/contact" className={styles.ctaAction}>→ Schedule a Discovery Discussion</Link>
          </div>
          <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787726230/consulting_vvqqhe.jpg" alt="Consulting & Advisory Services" className={styles.detailImage} />
        </div>

        {/* Service 2: Implementation */}
        <div className={`${styles.detailBlock} ${styles.detailBlockReverse}`}>
          <div className={styles.detailContent}>
            <span className={styles.serviceTag}>SERVICE 2 OF 4</span>
            <h2 className={styles.detailTitle}>Implementation & Execution</h2>
            <h3 className={styles.detailSubtitle}>Turning Strategy into Systems That Deliver</h3>
            <p className={styles.detailText}>
              Strategy sets the direction. Implementation is where programmes succeed or fail. Hadron GBS takes your approved plan and turns it into an operational system. We build the governance, coordination, and delivery discipline that holds from the first sprint to the final handover.
            </p>
            <ul className={styles.detailList}>
              <li className={styles.detailListItem}><strong>Governance inside every cadence:</strong> Weekly steering reviews, sprint demos, and live KPI dashboards.</li>
              <li className={styles.detailListItem}><strong>Coordinated multi-vendor delivery:</strong> We manage the coordination layer and ensure no team is waiting on another.</li>
              <li className={styles.detailListItem}><strong>Risk & dependency management:</strong> Risks are logged, owned, and reviewed early.</li>
              <li className={styles.detailListItem}><strong>Adoption & stabilisation:</strong> A dedicated hypercare phase follows every release.</li>
            </ul>
            <Link href="/contact" className={styles.ctaAction}>→ Request a Programme Review</Link>
          </div>
          <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787725935/implementation_vde2yp.png" alt="Implementation & Execution" className={styles.detailImage} />
        </div>

        {/* Service 3: Support */}
        <div className={styles.detailBlock}>
          <div className={styles.detailContent}>
            <span className={styles.serviceTag}>SERVICE 3 OF 4</span>
            <h2 className={styles.detailTitle}>Operational Support Services</h2>
            <h3 className={styles.detailSubtitle}>Keep Your Platforms Running After Go-Live</h3>
            <p className={styles.detailText}>
              Implementation ends. Operations don't. Hadron GBS Operational Support restores control with defined processes, accountable ownership, and a team that knows your platform from the inside. Because the people who built your solution stay on to run it, knowledge doesn't get lost in a handoff.
            </p>
            <ul className={styles.detailList}>
              <li className={styles.detailListItem}><strong>End-to-end L1–L3 support:</strong> Issues routed by complexity across enterprise platforms.</li>
              <li className={styles.detailListItem}><strong>ESM and ITSM operations:</strong> Incident, service request, and change management.</li>
              <li className={styles.detailListItem}><strong>Performance reporting:</strong> KPI tracking and dashboards aligned to SLA cadences.</li>
              <li className={styles.detailListItem}><strong>Service optimisation:</strong> Regular assessments surface recurring issues to reduce incident volume.</li>
            </ul>
            <Link href="/contact" className={styles.ctaAction}>→ Start the Conversation</Link>
          </div>
          <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787726082/operational_servies_zfrag1.png" alt="Operational Support Services" className={styles.detailImage} />
        </div>

        {/* Service 4: Managed Services */}
        <div className={`${styles.detailBlock} ${styles.detailBlockReverse}`}>
          <div className={styles.detailContent}>
            <span className={styles.serviceTag}>SERVICE 4 OF 4</span>
            <h2 className={styles.detailTitle}>Managed Services</h2>
            <h3 className={styles.detailSubtitle}>Stop Managing Vendors. Start Owning Outcomes.</h3>
            <p className={styles.detailText}>
              Managed services are not staff augmentation or ad-hoc support. It's a shift in ownership, from your team to ours, with clear accountability, defined SLAs, and predictable costs. The teams who build your platform stay to run it.
            </p>
            <ul className={styles.detailList}>
              <li className={styles.detailListItem}><strong>End-to-End Ownership:</strong> One accountable team owns requests, incidents, and governance.</li>
              <li className={styles.detailListItem}><strong>SLA-Driven Delivery:</strong> Response windows, resolution targets, and throughput tracked continuously.</li>
              <li className={styles.detailListItem}><strong>Vendor Consolidation:</strong> Multiple platforms covered within one governed delivery structure.</li>
              <li className={styles.detailListItem}><strong>Predictable Costs:</strong> A defined commercial model replaces reactive cost exposure.</li>
            </ul>
            <Link href="/contact" className={styles.ctaAction}>→ Start the Conversation</Link>
          </div>
          <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787726177/Managed_Services_yh3ukg.png" alt="Managed Services" className={`${styles.detailImage} ${styles.managedServicesImage}`} />
        </div>

        </div>
      </section>

      {/* Why Hadron Section */}
      <section className={styles.whySection}>
        <div className={styles.whyContainer}>
          <h2 className={styles.whyTitle}>Why Organisations Choose Hadron GBS</h2>
          <p className={styles.whySubtitle}>
            Our model is built around one principle: the teams who design your solution should be the same teams that deliver and run it. That continuity is where most enterprise partners fall short.
          </p>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <h4 className={styles.whyCardTitle}>Continuity of Knowledge</h4>
              <p className={styles.whyCardText}>The same people who build your platform stay to run it. No knowledge lost in handoffs.</p>
            </div>
            <div className={styles.whyCard}>
              <h4 className={styles.whyCardTitle}>Enterprise-Tested Expertise</h4>
              <p className={styles.whyCardText}>Our guidance is shaped by direct experience in complex, high-stakes environments — not theory.</p>
            </div>
            <div className={styles.whyCard}>
              <h4 className={styles.whyCardTitle}>Governance Built In</h4>
              <p className={styles.whyCardText}>Structured oversight runs throughout every engagement — not bolted on at the end.</p>
            </div>
            <div className={styles.whyCard}>
              <h4 className={styles.whyCardTitle}>Outcomes, Not Activities</h4>
              <p className={styles.whyCardText}>We measure success by business impact: adoption rates, resolution times, cost predictability, and ROI.</p>
            </div>
            <div className={styles.whyCard}>
              <h4 className={styles.whyCardTitle}>Proactive Risk Management</h4>
              <p className={styles.whyCardText}>We surface governance gaps and integration weaknesses early — before they become expensive problems.</p>
            </div>
            <div className={styles.whyCard}>
              <h4 className={styles.whyCardTitle}>Platform Breadth</h4>
              <p className={styles.whyCardText}>ServiceNow, Salesforce, SAP, BMC, Ivanti, Atlassian, AWS, Azure, GCP — one partner across your full environment.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
