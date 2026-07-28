"use client";

import { useState, useEffect } from "react";
import { MenuBar } from "@/components/ui/glow-menu";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    label: "Home",
    href: "/",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    isLogo: true,
    logoSrc: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784806399/hadron_logo_white_jsl37p.png",
  },
  {
    label: "About",
    href: "/about",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
  },
  {
    label: "Services",
    href: "/#services",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    subItems: [
      { label: "ServiceNow Services", href: "/services/service-now" },
      { label: "BMC Services", href: "/services/bmc" },
      { label: "Ivanti Services", href: "/services/ivanti" },
      { label: "Atlassian Services", href: "/services/atlassian" },
      { label: "Salesforce Services", href: "/services/salesforce" },
      { label: "Microsoft Cloud", href: "/services/microsoft-cloud" },
      { label: "SAP Services", href: "/services/sap" },
      { label: "AWS Cloud", href: "/services/aws-cloud" },
      { label: "Freshworks", href: "/services/freshworks" },
      { label: "Low Code – No Code", href: "/services/low-code" },
      { label: "Implementation & Execution", href: "/services/implementation-execution" },
      { label: "Operational Support", href: "/services/operational-support" },
      { label: "Managed Services", href: "/services/managed-services" },
    ]
  },
  {
    label: "Resources",
    href: "/#resources",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    subItems: [
      { label: "Success Stories", href: "/resources/success-stories" },
      { label: "Webinars", href: "/resources/webinar" },
      { label: "News & Events", href: "/resources/news-events" },
      { label: "Hadron GBS Videos", href: "/resources/videos" },
    ]
  },
  {
    label: "Partners",
    href: "/partners",
    gradient: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(8,145,178,0.06) 50%, rgba(14,116,144,0) 100%)",
  },
  {
    label: "Quantum",
    href: "https://quantum-landing-page.pages.dev/",
    gradient: "radial-gradient(circle, rgba(244,124,54,0.15) 0%, rgba(244,124,54,0.06) 50%, rgba(244,124,54,0) 100%)",
  },
  {
    label: "Careers",
    href: "/careers",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    subItems: [
      { label: "Careers Overview", href: "/careers" },
      { label: "Open Roles", href: "/careers/roles" },
      { label: "Work Culture", href: "/careers/culture" },
      { label: "Recruitment Process", href: "/careers/process" },
    ]
  },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`} role="banner" style={{ justifyContent: 'center', zIndex: 999 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>

        {/* Glow Menu Bar (Now with restored dropdown connections) */}
        <MenuBar
          items={menuItems}
          activeItem={activeItem}
          onItemClick={setActiveItem}
        />

      </div>
    </header>
  );
}
