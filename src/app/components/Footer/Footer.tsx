"use client";

import { useState } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" }
];

const OFFICE_LOCATIONS = [
  { 
    title: "Pune", 
    name: "Hadron Global Business Solutions Pvt Ltd", 
    address: "Pyramid Axis 10th Floor, Veerbhadra Nagar, Baner, Pune, Maharashtra 411045",
    mapUrl: "https://maps.google.com/maps?q=Hadron%20GBS%20India%20Office&t=&z=14&ie=UTF8&iwloc=&output=embed"
  },
  { 
    title: "Pune (Hinjewadi)", 
    name: "Hadron Global Business Solutions Pvt Ltd", 
    address: "A 1004, High Mont, Phase 2, Hinjewadi, Pune, Maharashtra-411057"
  },
  { 
    title: "Singapore", 
    name: "Hadron GBS Pte Ltd", 
    address: "7 Temasek Boulevard, Suntec Tower One, Singapore 038987",
    mapUrl: "https://maps.google.com/maps?q=7%20Temasek%20Boulevard,%20Suntec%20Tower%20One,%20Singapore&t=&z=14&ie=UTF8&iwloc=&output=embed"
  },
  { 
    title: "UAE", 
    name: "HADRON TECHNOLOGIES LLC", 
    address: "303, Westburry Tower 1, Business Bay, Dubai, UAE",
    mapUrl: "https://maps.google.com/maps?q=Westburry%20Tower%201,%20Business%20Bay,%20Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
  },
  { 
    title: "USA", 
    name: "Hadron GBS Inc.", 
    address: "8 The Green, Ste R, Dover, DE 19901, USA",
    mapUrl: "https://maps.google.com/maps?q=8%20The%20Green,%20Dover,%20DE&t=&z=14&ie=UTF8&iwloc=&output=embed"
  }
];

export default function Footer() {
  const [activeMapIndex, setActiveMapIndex] = useState(0);
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`${styles.inner} container`}>
        {/* Top row */}
        <div className={styles.top}>
          {/* Brand & Map */}
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <Image 
                src="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324498/Hadron-Logo_lt4uaa.png" 
                alt="Hadron GBS" 
                width={160}
                height={40}
                className={styles.logoImage} 
                loading="lazy"
              />
              <p className={styles.tagline}>
                We work with a passion of taking challenges and Investing in building new capabilities. We are serving the best output with confidence and responsibility. We deliver powerful solutions that drive business growth and success.
              </p>
            </div>
            
            <div className={styles.mapSection}>
              <div className={styles.mapTabs}>
                {OFFICE_LOCATIONS.filter(loc => loc.mapUrl).map((loc, i) => (
                  <button 
                    key={loc.title}
                    onClick={() => setActiveMapIndex(OFFICE_LOCATIONS.indexOf(loc))}
                    className={`${styles.mapTab} ${OFFICE_LOCATIONS.indexOf(loc) === activeMapIndex ? styles.mapTabActive : ''}`}
                  >
                    {loc.title}
                  </button>
                ))}
              </div>
              <div className={styles.mapContainer}>
                {OFFICE_LOCATIONS[activeMapIndex]?.mapUrl && (
                  <iframe 
                    key={OFFICE_LOCATIONS[activeMapIndex].title}
                    src={OFFICE_LOCATIONS[activeMapIndex].mapUrl} 
                    width="100%" 
                    height="260" 
                    style={{ border: 0, borderRadius: '8px', filter: 'grayscale(0.8) contrast(1.2)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkGroup}>
            <span className={styles.groupLabel}>Quick Links</span>
            <ul className={styles.linkList}>
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.footerLink}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Offices */}
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
