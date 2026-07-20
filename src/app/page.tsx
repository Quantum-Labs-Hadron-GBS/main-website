import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import LanguageScrollSection from "./components/LanguageScroll/LanguageScrollSection";
import FeatureScrollSection from "./components/FeatureScroll/FeatureScrollSection";
import AssetsOfExcellenceSection from "./components/AssetsOfExcellence/AssetsOfExcellenceSection";
import CtaSection from "./components/CtaSection/CtaSection";
import styles from "./page.module.css";

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
