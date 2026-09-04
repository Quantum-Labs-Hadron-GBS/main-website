import dynamic from "next/dynamic";
import Navbar from "./components/Navbar/Navbar";
import LanguageScrollSection from "./components/LanguageScroll/LanguageScrollSection";
import styles from "./page.module.css";

// Below-fold sections — loaded after initial paint
const PartnerRingSection      = dynamic(() => import("./components/PartnerRingSection/PartnerRingSection"));
const CorePracticesSection    = dynamic(() => import("./components/CorePracticesSection/CorePracticesSection"));
const WhyHadronSection        = dynamic(() => import("./components/WhyHadronSection/WhyHadronSection"));
const CoreServicesSection     = dynamic(() => import("./components/CoreServicesSection/CoreServicesSection"));
const CtaSection              = dynamic(() => import("./components/CtaSection/CtaSection"));
const Footer                  = dynamic(() => import("./components/Footer/Footer"));

export default function HomePage() {
  return (
    <main className={`${styles.main} light-theme`}>
      <Navbar />

      {/* ── ALPY-STYLE PARTNER RING (NEW HERO) ── */}
      <PartnerRingSection />

      {/* ── ALPY-STYLE STICKY SOLUTIONS (NEW) ── */}
      <CorePracticesSection />

      {/* ── WHY HADRON GBS ── */}
      <WhyHadronSection />

      <div style={{ backgroundColor: '#0f172a' }}>
        {/* ── CORE SERVICES ── */}
        <CoreServicesSection />
      </div>

      {/* ── LANGUAGE REEL + zooming globe ── */}
      <LanguageScrollSection />

      {/* ── CONTACT CTA ── */}
      <CtaSection />

      <Footer />
    </main>
  );
}
