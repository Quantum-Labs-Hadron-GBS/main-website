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
    logoSrc: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324428/hadron_logo_white_wwzyij.png",
  },
  {
    label: "About Us",
    href: "/about",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
  },
  {
    label: "Services",
    href: "/#services",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    subItems: [
      { 
        label: "ServiceNow", 
        href: "/services/service-now",
        nestedItems: [
          { label: "Overview", href: "/services/service-now" },
          { label: "Tennon", href: "/services/service-now/tennon" },
          { label: "Precision Bridge", href: "/services/service-now/precision-bridge" }
        ]
      },
      { label: "BMC Software", href: "/services/bmc" },
      { label: "Ivanti", href: "/services/ivanti" },
      { label: "Atlassian", href: "/services/atlassian" },
      { label: "Salesforce", href: "/services/salesforce" },
      { label: "Microsoft Cloud", href: "/services/microsoft-cloud" },
      { label: "SAP", href: "/services/sap" },
      { label: "Low Code – No Code", href: "/services/low-code" },
      { label: "AWS Cloud", href: "/services/aws-cloud" },
      { label: "Freshworks", href: "/services/freshworks" },
    ]
  },
  {
    label: "Resources",
    href: "#",
    gradient: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.06) 50%, rgba(190,24,93,0) 100%)",
    subItems: [
      { label: "Success Stories", href: "/resources/success-stories" },
      { label: "Videos", href: "/resources/videos" }
    ]
  },
  {
    label: "Partners",
    href: "/partners",
    gradient: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.06) 50%, rgba(4,120,87,0) 100%)",
  },
  {
    label: "Quantum",
    href: "https://quantum-landing-page.pages.dev/",
    gradient: "radial-gradient(circle, rgba(244,124,54,0.15) 0%, rgba(244,124,54,0.06) 50%, rgba(244,124,54,0) 100%)",
    textColor: "#F47C36"
  }
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
