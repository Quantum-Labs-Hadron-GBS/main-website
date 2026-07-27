import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import BreadcrumbNav from "@/app/components/BreadcrumbNav/BreadcrumbNav";
import styles from "./Contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={`${styles.hero} container`}>
        <div className={styles.heroContent} >
          <BreadcrumbNav items={[
            { label: "Home", href: "/" },
            { label: "Contact Us" }
          ]} />
          <span className={styles.heroTag}>Get In Touch</span>
          <h1 className={styles.heroTitle}>Let's Build the Future of Your Enterprise.</h1>
          <p className={styles.heroDesc}>
            Whether you need a complete digital transformation, a secure infrastructure overhaul, or specialized IT services, our experts are ready to help.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container" >
          <div className={styles.formWrapper}>
            <ContactForm />
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className={styles.glowElement1} />
        <div className={styles.glowElement2} />
      </section>

      <Footer />
    </main>
  );
}
