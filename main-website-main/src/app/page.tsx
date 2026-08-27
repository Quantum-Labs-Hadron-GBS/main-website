import dynamic from "next/dynamic";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import LanguageScrollSection from "./components/LanguageScroll/LanguageScrollSection";
import styles from "./page.module.css";

// Below-fold sections — loaded after initial paint
const FeatureScrollSection    = dynamic(() => import("./components/FeatureScroll/FeatureScrollSection"));
const WhyHadronSection        = dynamic(() => import("./components/WhyHadronSection/WhyHadronSection"));
const CoreValuesSection       = dynamic(() => import("./components/CoreValuesSection/CoreValuesSection"));
const CoreServicesSection     = dynamic(() => import("./components/CoreServicesSection/CoreServicesSection"));
const AssetsOfExcellenceSection = dynamic(() => import("./components/AssetsOfExcellence/AssetsOfExcellenceSection"));
const CtaSection              = dynamic(() => import("./components/CtaSection/CtaSection"));
const Footer                  = dynamic(() => import("./components/Footer/Footer"));

export default function HomePage() {
  return (
    <main className={`${styles.main} light-theme`}>
      <Navbar />

      {/* ── HERO ── */}
      <HeroSection />


      {/* ── FEATURE NUMBER TICKER ── */}
      <FeatureScrollSection />

      {/* ── WHY HADRON GBS ── */}
      <WhyHadronSection />

      <div style={{ backgroundColor: '#0f172a' }}>
        {/* ── CORE SERVICES ── */}
        <CoreServicesSection />

        {/* ── MISSION & VISION (4 P's) ── */}
        <CoreValuesSection />
      </div>

      {/* ── ASSETS OF EXCELLENCE ── */}
      <AssetsOfExcellenceSection />

      {/* ── LANGUAGE REEL + zooming globe ── */}
      <LanguageScrollSection />

      {/* ── CONTACT CTA ── */}
      <CtaSection />

      <Footer />
    </main>
  );
}
