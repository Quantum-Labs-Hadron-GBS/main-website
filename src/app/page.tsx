import dynamic from "next/dynamic";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import LanguageScrollSection from "./components/LanguageScroll/LanguageScrollSection";
import styles from "./page.module.css";

// Below-fold sections — loaded after initial paint
const FeatureScrollSection    = dynamic(() => import("./components/FeatureScroll/FeatureScrollSection"));
const AssetsOfExcellenceSection = dynamic(() => import("./components/AssetsOfExcellence/AssetsOfExcellenceSection"));
const CtaSection              = dynamic(() => import("./components/CtaSection/CtaSection"));
const Footer                  = dynamic(() => import("./components/Footer/Footer"));

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── HERO ── */}
      <HeroSection />

      {/* ── LANGUAGE REEL + zooming globe ── */}
      <LanguageScrollSection />

      {/* ── FEATURE NUMBER TICKER ── */}
      <FeatureScrollSection />

      {/* ── ASSETS OF EXCELLENCE ── */}
      <AssetsOfExcellenceSection />

      {/* ── CONTACT CTA ── */}
      <CtaSection />

      <Footer />
    </main>
  );
}
