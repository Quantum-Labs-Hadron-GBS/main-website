"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";
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
  const pathname = usePathname();
  const isServicesPage = pathname === "/services";

  const [activeItem, setActiveItem] = useState<string>("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLightMode, setIsLightMode] = useState(isServicesPage);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openTrees, setOpenTrees] = useState<Record<string, boolean>>({});

  const toggleTree = (key: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpenTrees(prev => ({ ...prev, [key]: !prev[key] }));
  };
  
  // Use a ref for lastScrollY to avoid re-attaching the event listener on every scroll tick
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const currentScrollY = window.scrollY;
      const hideThreshold = isServicesPage ? 200 : window.innerHeight * 0.9;
      const themeThreshold = window.innerHeight * 0.9;
      
      setScrolled(currentScrollY > 50);
      setIsLightMode(isServicesPage || currentScrollY > themeThreshold);

      // Hide only if scrolling down AND past the threshold
      if (currentScrollY > lastScrollY.current && currentScrollY > hideThreshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isServicesPage]);

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`} role="banner" style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
      <div className={styles.navContainer}>

        {/* Glow Menu Bar */}
        <MenuBar
          items={menuItems}
          activeItem={activeItem}
          onItemClick={setActiveItem}
          isLightMode={isLightMode}
        />

        {/* Unique Orange Hamburger Menu Button */}
        <button 
          className={`${styles.hamburgerBtn} ${isDrawerOpen ? styles.hamburgerOpen : ""}`} 
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-label="Toggle secondary menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

      </div>
    </header>

      {/* Slide-in Secondary Menu Drawer */}
      <div className={`${styles.drawerOverlay} ${isDrawerOpen ? styles.drawerOverlayOpen : ""}`} onClick={() => setIsDrawerOpen(false)}></div>
      <div className={`${styles.drawerMenu} ${isDrawerOpen ? styles.drawerMenuOpen : ""}`}>
        <button className={styles.drawerCloseBtn} onClick={() => setIsDrawerOpen(false)} aria-label="Close menu">✕</button>
        <nav className={styles.drawerNav}>
          {/* Services Tree Node */}
          <div className={styles.treeNode} onMouseEnter={() => setOpenTrees(prev => ({ ...prev, 'services': true }))} onMouseLeave={() => setOpenTrees(prev => ({ ...prev, 'services': false }))}>
            <div className={styles.treeNodeHeader}>
              <a href="/#services" className={styles.drawerLink} onClick={() => setIsDrawerOpen(false)}>Services</a>
              <button className={styles.treeToggleBtn} onClick={(e) => toggleTree('services', e)}>
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className={`${styles.treeBranch} ${openTrees['services'] ? styles.treeBranchOpen : ""}`}>
              <a href="/services" className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>Our Services</a>
              <a href="/services/service-now" className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>ServiceNow</a>
              <a href="/services/salesforce" className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>Salesforce</a>
              <a href="/services/bmc" className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>BMC Software</a>
              <a href="/services/ivanti" className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>Ivanti</a>
              <a href="/services/sap" className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>SAP</a>
              <a href="/services/atlassian" className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>Atlassian</a>
              <a href="/services/microsoft-cloud" className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>Microsoft Cloud</a>
              <a href="/services/aws" className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>AWS Cloud</a>
              <a href="/services/freshworks" className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>Freshworks</a>
            </div>
          </div>

          <a href="#" className={styles.drawerLink} onClick={() => setIsDrawerOpen(false)}>Solutions</a>
          <a href="/partners" className={styles.drawerLink} onClick={() => setIsDrawerOpen(false)}>Partners</a>
          
          {/* Resources Tree Node */}
          <div className={styles.treeNode} onMouseEnter={() => setOpenTrees(prev => ({ ...prev, 'resources': true }))} onMouseLeave={() => setOpenTrees(prev => ({ ...prev, 'resources': false }))}>
            <div className={styles.treeNodeHeader}>
              <a href="#" className={styles.drawerLink} onClick={() => setIsDrawerOpen(false)}>Resources</a>
              <button className={styles.treeToggleBtn} onClick={(e) => toggleTree('resources', e)}>
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className={`${styles.treeBranch} ${openTrees['resources'] ? styles.treeBranchOpen : ""}`}>
              <a href="/resources/success-stories" className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>Success Stories</a>
              <a href="/resources/videos" className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>Videos</a>
            </div>
          </div>

          <a href="#" className={styles.drawerLink} onClick={() => setIsDrawerOpen(false)}>Careers</a>
          <a href="/about" className={styles.drawerLink} onClick={() => setIsDrawerOpen(false)}>About us</a>
        </nav>
      </div>
    </>
  );
}
