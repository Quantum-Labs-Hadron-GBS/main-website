import Navbar from "../../components/Navbar/Navbar";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import styles from "../../services/ServicePage.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={${styles.hero} container}>
        <span className={styles.heroTag}>Coming Soon</span>
        <h1 className={styles.heroTitle}>This resource page is under construction.</h1>
        <p className={styles.heroDesc}>
          We are currently updating our portfolio. Check back soon for detailed offerings.
        </p>
      </section>
      <CtaSection />
      <Footer />
    </main>
  );
}
