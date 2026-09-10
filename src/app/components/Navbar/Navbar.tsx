"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
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
    label: "AI & Automation",
    href: "/ai",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    groups: [
      {
        title: "AI Capabilities",
        items: [
          { label: "Generative AI", href: "/ai/generative-ai" },
          { label: "Agentic AI", href: "/ai/agentic-ai" },
          { label: "Intelligent Automation", href: "/ai/intelligent-automation" }
        ]
      },
      {
        title: "Enterprise AI",
        items: [
          { label: "AI-Powered Operations", href: "/ai/ai-enterprise-operations" },
          { label: "AI for Platforms", href: "/ai/ai-enterprise-platforms" },
          { label: "AI Strategy & Readiness", href: "/ai/ai-strategy" }
        ]
      }
    ],
    featured: {
      eyebrow: "FROM AUTOMATION TO AUTONOMY",
      title: "Intelligent Operations",
      description: "Explore Hadron's approach to intelligent and agentic enterprise transformation.",
      cta: "Explore AI",
      href: "/ai"
    }
  },
  {
    label: "Solutions",
    href: "/solutions",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    groups: [
      {
        title: "Enterprise Transformation",
        items: [
          { label: "AI-Powered Enterprise Transformation", href: "/solutions/ai-powered-enterprise-transformation" },
          { label: "Cloud & Infrastructure Modernization", href: "/solutions/cloud-adoption-and-cloud-first-engineering" },
          { label: "Enterprise Core Transformation", href: "/solutions/enterprise-core-transformation" }
        ]
      },
      {
        title: "Engineering & Experience",
        items: [
          { label: "Engineering Quality & Reliability", href: "/solutions/engineering-quality-and-reliability" },
          { label: "Rapid Application Engineering", href: "/solutions/rapid-application-engineering" },
          { label: "Unified Service Experience", href: "/solutions/unified-service-experience-management" }
        ]
      }
    ],
    featured: {
      eyebrow: "TRANSFORM THE ENTERPRISE",
      title: "Solutions Architecture",
      description: "From core platforms and infrastructure to intelligent experiences.",
      cta: "Explore Solutions",
      href: "/solutions"
    }
  },
  {
    label: "Industries",
    href: "/industries",
    gradient: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.06) 50%, rgba(4,120,87,0) 100%)",
    subItems: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Government & Public Sector", href: "/industries/government-and-public-sector" },
      { label: "Education", href: "/industries/education" }
    ]
  },
  {
    label: "Platforms",
    href: "/platforms",
    gradient: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.06) 50%, rgba(4,120,87,0) 100%)",
    groups: [
      {
        title: "Enterprise Platforms",
        items: [
          { label: "ServiceNow", href: "/platforms/service-now" },
          { label: "Salesforce", href: "/platforms/salesforce" },
          { label: "SAP", href: "/platforms/sap" },
          { label: "BMC", href: "/platforms/bmc" }
        ]
      },
      {
        title: "Cloud & Digital Platforms",
        items: [
          { label: "Microsoft", href: "/platforms/microsoft" },
          { label: "AWS", href: "/platforms/aws" },
          { label: "Atlassian", href: "/platforms/atlassian" },
          { label: "Ivanti", href: "/platforms/ivanti" },
          { label: "Freshworks", href: "/platforms/freshworks" }
        ]
      }
    ],
    featured: {
      eyebrow: "FEATURED PLATFORM",
      title: "ServiceNow",
      description: "AI • Workflow • ITSM • ITOM • CSM",
      cta: "Explore ServiceNow",
      href: "/platforms/service-now"
    }
  },
  {
    label: "Services",
    href: "/services",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    subItems: [
      { label: "Consulting & Advisory", href: "/services/consulting-and-advisory" },
      { label: "Implementation & Execution", href: "/services/implementation-and-execution" },
      { label: "Operational Support", href: "/services/operational-support" },
      { label: "Managed Services", href: "/services/managed-services" }
    ]
  },
  {
    label: "Why Hadron",
    href: "/why-hadron/about",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    subItems: [
      { label: "About Hadron GBS", href: "/why-hadron/about" },
      { label: "Ecosystem & Partners", href: "/why-hadron/ecosystem-and-partners" },
      { label: "Success Stories", href: "/why-hadron/success-stories" }
    ]
  },
  {
    label: "More",
    href: "#",
    gradient: "radial-gradient(circle, rgba(244,124,54,0.15) 0%, rgba(244,124,54,0.06) 50%, rgba(244,124,54,0) 100%)",
    groups: [
      {
        title: "Resources",
        items: [
          { label: "Insights", href: "/resources/insights" },
          { label: "Videos", href: "/resources/videos" },
          { label: "Webinars", href: "/resources/webinars" },
          { label: "Learning Center", href: "/resources/learning-center" }
        ]
      },
      {
        title: "Careers",
        items: [
          { label: "Careers", href: "/careers" },
          { label: "ServiceNow Excellence Hub", href: "/resources/learning-center/excellence-hub" }
        ]
      }
    ]
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const isAlwaysLight = pathname === "/contact" || pathname === "/";
  const isMainPage = pathname === "/";

  const dynamicMenuItems = menuItems.map(item => {
    if (item.isLogo) {
      return {
        ...item,
        logoSrc: isMainPage 
          ? "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324498/Hadron-Logo_lt4uaa.png"
          : "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324428/hadron_logo_white_wwzyij.png"
      };
    }
    return item;
  });

  const [activeItem, setActiveItem] = useState<string>("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLightMode, setIsLightMode] = useState(isAlwaysLight);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openTrees, setOpenTrees] = useState<Record<string, boolean>>({});

  const toggleTree = (key: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpenTrees(prev => ({ [key]: !prev[key] }));
  };
  
  // Use a ref for lastScrollY to avoid re-attaching the event listener on every scroll tick
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const currentScrollY = window.scrollY;
      const hideThreshold = 100;
      let themeThreshold = window.innerHeight * 0.9;
      if (pathname === "/") {
        themeThreshold = window.innerHeight * 0.9;
      } else if (pathname === "/solutions/enterprise-core-transformation" || pathname === "/services/intelligent-automation-agentic-ai" || pathname === "/solutions/rapid-application-engineering" || pathname === "/solutions/unified-service-experience-management" || pathname === "/solutions/cloud-adoption-and-cloud-first-engineering" || pathname === "/solutions/engineering-quality-and-reliability") {
        themeThreshold = window.innerHeight * 0.65;
      } else if (pathname === "/services") {
        themeThreshold = window.innerHeight * 0.65;
      } else if (isAlwaysLight) {
        themeThreshold = 0;
      } else {
        themeThreshold = Math.max(window.innerHeight * 0.55, 450);
      }
      
      setScrolled(currentScrollY > 50);
      setIsLightMode(isAlwaysLight || currentScrollY > themeThreshold);

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
  }, [isAlwaysLight, pathname]);

  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("Home");
    } else if (pathname.startsWith("/ai")) {
      setActiveItem("AI & Automation");
    } else if (pathname.startsWith("/solutions")) {
      setActiveItem("Solutions");
    } else if (pathname.startsWith("/industries")) {
      setActiveItem("Industries");
    } else if (pathname.startsWith("/platforms")) {
      setActiveItem("Platforms");
    } else if (pathname.startsWith("/services")) {
      setActiveItem("Services");
    } else if (pathname.startsWith("/why-hadron")) {
      setActiveItem("Why Hadron");
    } else if (pathname.startsWith("/resources") || pathname.startsWith("/careers")) {
      setActiveItem("More");
    }
  }, [pathname]);

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`} role="banner" style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
      <div className={styles.navContainer}>

        {/* Unique Orange Hamburger Menu Button */}
        <button 
          className={`${styles.hamburgerBtn} ${isDrawerOpen ? styles.hamburgerOpen : ""} ${isLightMode ? styles.hamburgerLight : ""}`} 
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-label="Toggle secondary menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Glow Menu Bar */}
        <MenuBar
          items={dynamicMenuItems}
          activeItem={activeItem}
          onItemClick={setActiveItem}
          isLightMode={isLightMode}
          currentPath={pathname}
        />

        {/* Right side Quantum Pill */}
        <a 
          href="https://quantum.hadrongbs.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.quantumPill} ${isLightMode ? styles.quantumPillLight : ""}`}
        >
          Quantum
        </a>

      </div>
    </header>

      {/* Slide-in Secondary Menu Drawer */}
      <div className={`${styles.drawerOverlay} ${isDrawerOpen ? styles.drawerOverlayOpen : ""}`} onClick={() => setIsDrawerOpen(false)}></div>
      <div className={`${styles.drawerMenu} ${isDrawerOpen ? styles.drawerMenuOpen : ""}`}>
        <button className={styles.drawerCloseBtn} onClick={() => setIsDrawerOpen(false)} aria-label="Close menu">✕</button>
        <nav className={styles.drawerNav}>
          <div className={styles.drawerHeader}>
            <span className={styles.drawerExploreText}>Explore Hadron</span>
          </div>
          
          {dynamicMenuItems.filter(item => !item.isLogo).map((item) => {
            const hasChildren = (item.subItems && item.subItems.length > 0) || (item.groups && item.groups.length > 0);
            const isOpen = openTrees[item.label];

            return (
              <div key={item.label} className={styles.treeNode}>
                <div className={styles.treeNodeHeader}>
                  <a href={item.href} className={styles.drawerLink} onClick={() => setIsDrawerOpen(false)}>
                    {item.label}
                  </a>
                  {hasChildren && (
                    <button 
                      className={styles.treeToggleBtn}
                      onClick={(e) => toggleTree(item.label, e)}
                      aria-label={`Toggle ${item.label} menu`}
                    >
                      {isOpen ? '−' : '+'}
                    </button>
                  )}
                </div>

                {hasChildren && (
                  <div className={`${styles.treeBranch} ${isOpen ? styles.treeBranchOpen : ""}`}>
                    {/* Render standard subItems */}
                    {item.subItems && item.subItems.map((sub, idx) => (
                      <a key={idx} href={sub.href} className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>
                        {sub.label}
                      </a>
                    ))}

                    {/* Render mega menu groups */}
                    {item.groups && item.groups.map((group, gIdx) => (
                      <div key={gIdx} style={{ marginBottom: '1rem' }}>
                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(150,150,150,0.8)', marginBottom: '0.5rem', fontWeight: 600 }}>{group.title}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {group.items.map((sub, idx) => (
                            <a key={idx} href={sub.href} className={styles.drawerSubLink} onClick={() => setIsDrawerOpen(false)}>
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className={styles.drawerBottom}>
            <a href="/contact" className={styles.drawerLink} onClick={() => setIsDrawerOpen(false)}>Contact Us</a>
            <a href="https://quantum.hadrongbs.com/" target="_blank" rel="noopener noreferrer" className={styles.drawerLink} style={{ color: '#F47C36' }} onClick={() => setIsDrawerOpen(false)}>Quantum</a>
          </div>
        </nav>
      </div>
    </>
  );
}
