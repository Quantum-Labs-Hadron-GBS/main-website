"use client";

import { useState } from "react";

import styles from "./Navbar.module.css";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Resources", href: "/#resources" },
  { label: "Partners", href: "/partners" },
  { label: "Careers", href: "#careers" },
  { label: "Explore Opportunities", href: "#opportunities" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.navbar} role="banner">
      <div className={`${styles.inner} container`}>
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className={styles.logo} aria-label="Hadron GBS Home">
          <Image 
            src="https://res.cloudinary.com/djxbxhgat/image/upload/v1784309674/Hadron-Logo_sb3pfk.png" 
            alt="Hadron GBS" 
            width={160}
            height={40}
            className={styles.logoImage} 
            priority
          />
        </a>

        {/* Nav links */}
        <nav className={styles.links} aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            if (link.label === "Services") {
              return (
                <div key={link.label} className={styles.dropdownContainer}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label} 
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px", display: "inline-block" }}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <div className={styles.dropdownMenu}>
                    <a href="/services/service-now" className={styles.dropdownItem}>
                      ServiceNow Services
                      <span className={styles.dropdownIcon}>&gt;</span>
                    </a>
                    <a href="/services/bmc" className={styles.dropdownItem}>
                      BMC Services
                    </a>
                    <a href="/services/salesforce" className={styles.dropdownItem}>
                      Salesforce Services
                    </a>
                    <a href="/services/sap" className={styles.dropdownItem}>
                      SAP Services
                    </a>
                    <a href="/services/ivanti" className={styles.dropdownItem}>
                      Ivanti Services
                    </a>
                    <a href="/services/low-code" className={styles.dropdownItem}>
                      Low Code – No Code
                      <span className={styles.dropdownIcon}>&gt;</span>
                    </a>
                  </div>
                </div>
              );
            }
            if (link.label === "Resources") {
              return (
                <div key={link.label} className={styles.dropdownContainer}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label} 
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px", display: "inline-block" }}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <div className={styles.dropdownMenu}>
                    <a href="/resources/videos" className={styles.dropdownItem} style={{ color: "#3b82f6" }}>
                      Hadron GBS Videos
                    </a>
                    <a href="/resources/webinar" className={styles.dropdownItem}>
                      Webinar
                      <span className={styles.dropdownIcon}>&gt;</span>
                    </a>
                    <a href="/resources/dark-web-safety" className={styles.dropdownItem}>
                      Dark Web Safety
                    </a>
                    <a href="/resources/success-stories" className={styles.dropdownItem}>
                      Success Stories
                      <span className={styles.dropdownIcon}>&gt;</span>
                    </a>
                  </div>
                </div>
              );
            }
            return (
              <a key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className={styles.mobileOverlay}>
            <nav className={styles.mobileLinks} aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className={styles.mobileCtaBtn}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}

        {/* CTA */}
        <div className={styles.cta}>
          <a href="#contact" className={styles.ctaBtn} id="nav-get-demo">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
