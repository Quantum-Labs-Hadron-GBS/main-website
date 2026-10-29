import dynamic from "next/dynamic";
import Navbar from "./components/Navbar/Navbar";
import styles from "./page.module.css";
import { pageMetadata } from "./lib/seo";

export const metadata = pageMetadata("/");

import HeroSection from "./components/HeroSection/HeroSection";

// Below-fold sections — loaded after initial paint
const CorePracticesSection    = dynamic(() => import("./components/CorePracticesSection/CorePracticesSection"));
const InteractiveCanvasSection = dynamic(() => import("./components/InteractiveCanvasSection/InteractiveCanvasSection"));
const WhyHadronSection        = dynamic(() => import("./components/WhyHadronSection/WhyHadronSection"));
const CoreServicesSection     = dynamic(() => import("./components/CoreServicesSection/CoreServicesSection"));
const CtaSection              = dynamic(() => import("./components/CtaSection/CtaSection"));
const Footer                  = dynamic(() => import("./components/Footer/Footer"));

export default function HomePage() {
  return (
    <main className={`${styles.main} light-theme`}>
      <Navbar />

      {/* ── HERO (design from commit 39f14ae) ── */}
      <HeroSection />

      {/* ── INTERACTIVE CANVAS SECTION (NEW) ── */}
      <InteractiveCanvasSection />

      {/* ── ALPY-STYLE STICKY SOLUTIONS (Core Offerings) ── */}
      <CorePracticesSection />

      {/* ── WHY HADRON GBS (Advantage) ── */}
      <WhyHadronSection />

      <div style={{ backgroundColor: '#16325F' }}>
        {/* ── CORE SERVICES ── */}
        <CoreServicesSection />
      </div>

      {/* ── CONTACT CTA ── */}
      <CtaSection />

      <Footer />
    </main>
  );
}
