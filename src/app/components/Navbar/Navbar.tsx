"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./Navbar.module.css";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Resources", href: "/#resources" },
  { label: "Partners", href: "/partners" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (approx 100vh)
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`} role="banner">
      <div className={`${styles.inner} container`}>
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <Link href="/" className={styles.logo} aria-label="Hadron GBS Home">
          <Image
            src="https://res.cloudinary.com/djxbxhgat/image/upload/v1784309674/Hadron-Logo_sb3pfk.png"
            alt="Hadron GBS"
            width={160}
            height={40}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className={styles.links} aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            if (link.label === "Services") {
              return (
                <div key={link.label} className={styles.dropdownContainer}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px", display: "inline-block" }}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </Link>
                  <div className={`${styles.dropdownMenu} ${styles.megaMenu}`}>
                    <div className={styles.dropdownItem}>
                      ServiceNow Services
                      <span className={styles.dropdownIcon}>&gt;</span>
                      <div className={styles.nestedMenu}>
                        <Link href="/services/service-now" className={styles.dropdownItem}>
                          Overview
                        </Link>
                        <Link href="/services/service-now/tennon" className={styles.dropdownItem}>
                          Tennon
                        </Link>
                        <Link href="/services/service-now/precision-bridge" className={styles.dropdownItem}>
                          Precision Bridge
                        </Link>
                      </div>
                    </div>
                    <Link href="/services/bmc" className={styles.dropdownItem}>
                      BMC Services
                    </Link>
                    <Link href="/services/ivanti" className={styles.dropdownItem}>
                      Ivanti Services
                    </Link>
                    <Link href="/services/atlassian" className={styles.dropdownItem}>
                      Atlassian Services
                    </Link>
                    <Link href="/services/salesforce" className={styles.dropdownItem}>
                      Salesforce Services
                    </Link>
                    <Link href="/services/microsoft-cloud" className={styles.dropdownItem}>
                      Microsoft Cloud
                    </Link>
                    <Link href="/services/sap" className={styles.dropdownItem}>
                      SAP Services
                    </Link>
                    <Link href="/services/aws-cloud" className={styles.dropdownItem}>
                      AWS Cloud
                    </Link>
                    <Link href="/services/freshworks" className={styles.dropdownItem}>
                      Freshworks
                    </Link>
                    <Link href="/services/low-code" className={styles.dropdownItem}>
                      Low Code – No Code
                    </Link>
                    <Link href="/services/implementation-execution" className={styles.dropdownItem}>
                      Implementation & Execution
                    </Link>
                    <Link href="/services/operational-support" className={styles.dropdownItem}>
                      Operational Support
                    </Link>
                    <Link href="/services/managed-services" className={styles.dropdownItem}>
                      Managed Services
                    </Link>
                  </div>
                </div>
              );
            }
            if (link.label === "Resources") {
              return (
                <div key={link.label} className={styles.dropdownContainer}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px", display: "inline-block" }}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </Link>
                  <div className={styles.dropdownMenu}>
                    <Link href="/resources/success-stories" className={styles.dropdownItem}>
                      Success Stories
                    </Link>
                    <Link href="/resources/webinar" className={styles.dropdownItem}>
                      Webinars
                    </Link>
                    <Link href="/resources/news-events" className={styles.dropdownItem}>
                      News & Events
                    </Link>
                    <Link href="/resources/videos" className={styles.dropdownItem} style={{ color: "#3b82f6" }}>
                      Hadron GBS Videos
                    </Link>
                  </div>
                </div>
              );
            }
            if (link.label === "Careers") {
              return (
                <div key={link.label} className={styles.dropdownContainer}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px", display: "inline-block" }}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </Link>
                  <div className={styles.dropdownMenu}>
                    <Link href="/careers" className={styles.dropdownItem}>
                      Careers Overview
                    </Link>
                    <Link href="/careers/roles" className={styles.dropdownItem}>
                      Open Roles
                    </Link>
                    <Link href="/careers/culture" className={styles.dropdownItem}>
                      Work Culture
                    </Link>
                    <Link href="/careers/process" className={styles.dropdownItem}>
                      Recruitment Process
                    </Link>
                  </div>
                </div>
              );
            }
            return (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
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
                <Link
                  key={link.label}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className={styles.mobileCtaBtn}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}

        {/* CTA */}
        <div className={styles.cta}>
          <Link href="#contact" className={styles.ctaBtn} id="nav-get-demo">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
