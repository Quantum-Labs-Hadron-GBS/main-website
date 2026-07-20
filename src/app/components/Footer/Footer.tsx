import styles from "./Footer.module.css";

const QUICK_LINKS = ["Home", "About Us", "Services", "Partners", "Contact Us", "Privacy Policy", "Refund and Cancellation Policy"];

const OFFICE_LOCATIONS = [
  { title: "India - Pune (Baner)", name: "Hadron Global Business Solutions Pvt Ltd", address: "Pyramid Axis 10th Floor, Veerbhadra Nagar, Baner, Pune, Maharashtra 411045" },
  { title: "India - Pune (Hinjewadi)", name: "Hadron Global Business Solutions Pvt Ltd", address: "A 1004, High Mont, INFOTECH PARK Road, Phase 2, Hinjewadi, Pune, Maharashtra-411057" },
  { title: "Singapore", name: "Hadron GBS Pte Ltd", address: "7 Temasek Boulevard, Suntec Tower One, Singapore 038987" },
  { title: "UAE", name: "HADRON TECHNOLOGIES LLC", address: "303, Westburry Tower 1, Business Bay, Dubai, UAE" },
  { title: "USA", name: "Hadron GBS Inc.", address: "8 The Green, Ste R, Dover, DE 19901, USA" }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`${styles.inner} container`}>
        {/* Top row */}
        <div className={styles.top}>
          {/* Brand & Map */}
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <img 
                src="https://res.cloudinary.com/djxbxhgat/image/upload/v1784309674/Hadron-Logo_sb3pfk.png" 
                alt="Hadron GBS" 
                className={styles.logoImage} 
              />
              <p className={styles.tagline}>
                We work with a passion of taking challenges and Investing in building new capabilities. We are serving the best output with confidence and responsibility. We deliver powerful solutions that drive business growth and success.
              </p>
            </div>
            
            <div className={styles.mapSection}>
              <span className={styles.groupLabel}>Our Headquarters</span>
              <div className={styles.mapContainer}>
                <iframe 
                  src="https://maps.google.com/maps?q=Hadron%20GBS%20India%20Office&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="220" 
                  style={{ border: 0, borderRadius: '8px', filter: 'grayscale(0.8) contrast(1.2)' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Links groups */}
          <nav className={styles.linksGrid} aria-label="Footer navigation">
            <div className={styles.linkGroup}>
              <span className={styles.groupLabel}>Quick Links</span>
              <ul className={styles.linkList}>
                {QUICK_LINKS.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className={styles.footerLink}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupLabel}>Global Offices</span>
              <div className={styles.locationsList}>
                {OFFICE_LOCATIONS.map((loc) => (
                  <div key={loc.title} className={styles.locationItem}>
                    <strong className={styles.locTitle}>{loc.title}</strong>
                    <span className={styles.locName}>{loc.name}</span>
                    <span className={styles.locAddress}>{loc.address}</span>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom row */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {year} Hadron - Global Business Solutions. All rights reserved.
          </span>
          <div className={styles.socialLinks}>
            <a href="https://x.com/HadronGBS" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={styles.socialIcon}>𝕏</a>
            <a href="https://www.linkedin.com/company/hadron-gbs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>in</a>
            <a href="https://www.youtube.com/@HadronGBS" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialIcon}>▶</a>
            <a href="https://www.facebook.com/profile.php?id=61560719736422" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialIcon}>f</a>
          </div>
        </div>
      </div>

      {/* Large BG word */}
      <div className={styles.bgWord} aria-hidden="true">HADRON</div>
    </footer>
  );
}
