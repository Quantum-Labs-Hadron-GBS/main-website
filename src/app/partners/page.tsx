import PartnersSection from "../components/PartnersSection/PartnersSection";
import CtaSection from "../components/CtaSection/CtaSection";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../page.module.css";

export default function PartnersPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <PartnersSection />
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}
