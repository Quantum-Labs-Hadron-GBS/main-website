import styles from "./PartnersSection.module.css";
import Image from "next/image";

const PARTNERS = [
  {
    id: "servicenow",
    name: "ServiceNow",
    logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523675/ServiceNow-Logo_kbaxks.png",
    description: "Hadron GBS has been awarded a Consulting & Implementation partnership with ServiceNow. As a ServiceNow Partner, we are committed to empowering organizations with state-of-the-art technologies, spearheading digital transformation initiatives, and fostering business growth.",
    link: "/services/service-now",
    linkText: "Unleash the Power of ServiceNow"
  },
  {
    id: "bmc",
    name: "BMC Software",
    logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523792/Logo_BMC_Software_oqiorh.png",
    description: "Hadron Global Business Solutions (Hadron GBS), a leading provider of innovative IT solutions, is pleased to announce a strategic partnership with BMC Software, a global software company that specializes in providing solutions for IT service management, cloud management, and digital enterprise automation.",
    link: "/services/bmc",
    linkText: "Elevating Possibilities"
  },
  {
    id: "salesforce",
    name: "Salesforce",
    logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523790/Salesforce-Logo_y5q2ir.png",
    description: "Hadron partners with Salesforce, merging expertise to redefine global business solutions. Our collaboration unlocks innovation, streamlines processes, and drives growth, empowering organizations to thrive in a dynamic market. Experience the future of enterprise solutions with us.",
    link: "/services/salesforce",
    linkText: "Empowering Your Success with Salesforce"
  },
  {
    id: "freshworks",
    name: "Freshworks",
    logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523791/freshworks-logo_brandlogos.net_c6t5u_hu6w9j.png",
    description: "We are proud to partner with Freshworks, a global leader in customer engagement and IT service management. Through this collaboration, we deliver modern, AI-powered solutions that enhance customer satisfaction, streamline service delivery, and empower organizations to achieve operational excellence across every touchpoint.",
  },
  {
    id: "ivanti",
    name: "Ivanti",
    logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523791/Logo_Ivanti_ww1j1c.png",
    description: "We have been lucky to collaborate with Ivanti to serve our customers for their need for IT Security, IT Service Management, IT Asset Management, Unified Endpoint Management, Identity Management, and supply chain management.",
  }
];

export default function PartnersSection() {
  return (
    <section className={styles.section} id="partners" aria-label="Our Partners">
      <div className={`${styles.inner} container`}>
        {/* Header */}
        <div className={styles.header}>
          <span className="section-tag">Ecosystem</span>
          <h2 className={styles.title}>Our <span className={styles.titleAccent}>Partners</span></h2>
          <p className={styles.subtitle}>
            We collaborate with industry-leading technology providers to deliver cutting-edge enterprise solutions.
          </p>
        </div>

        {/* Partners List */}
        <div className={styles.partnersList}>
          {PARTNERS.map((partner) => (
            <div key={partner.id} className={styles.partnerCard}>
              <div className={styles.logoContainer}>
                <Image 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`} 
                  width={200}
                  height={80}
                  style={{ objectFit: 'contain' }}
                  className={styles.partnerLogo} 
                  loading="lazy"
                />
              </div>
              <div className={styles.partnerContent}>
                <h3 className={styles.partnerName}>{partner.name}</h3>
                <p className={styles.partnerDesc}>{partner.description}</p>
                {partner.link && (
                  <a href={partner.link} className={styles.partnerLink}>
                    {partner.linkText}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
