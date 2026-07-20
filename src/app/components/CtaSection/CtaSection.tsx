import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.demoCta} id="contact" aria-label="Contact Us">
      <div className={`${styles.demoCtaInner} container`}>
        <h2 className={styles.demoTitle}>
          Looking for the Best IT Business Solutions?
        </h2>
        <p className={styles.demoSub}>
          Contact us today, and let us help you achieve your business objectives.
        </p>
        <div className={styles.demoActions}>
          <a href="mailto:contact@hadrongbs.com" id="demo-email-cta" className={styles.demoPrimary}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
