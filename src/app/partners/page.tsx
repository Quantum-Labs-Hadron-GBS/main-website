import PartnersSection from "../components/PartnersSection/PartnersSection";
import CtaSection from "../components/CtaSection/CtaSection";
import BreadcrumbNav from "../components/BreadcrumbNav/BreadcrumbNav";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../page.module.css";

export default function PartnersPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className="container" >
        <BreadcrumbNav items={[
          { label: "Home", href: "/" },
          { label: "Partners" }
        ]} />
      </div>
      <div >
        <PartnersSection />
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}
