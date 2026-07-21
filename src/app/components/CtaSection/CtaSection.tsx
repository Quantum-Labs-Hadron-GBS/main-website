import styles from "./CtaSection.module.css";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function CtaSection({ title, subtitle, buttonText }: CtaSectionProps) {
  return (
    <section className={styles.demoCta} id="contact" aria-label="Contact Us">
      <div className={`${styles.demoCtaInner} container`}>
        <h2 className={styles.demoTitle}>
          {title || "Looking for the Best IT Business Solutions?"}
        </h2>
        <p className={styles.demoSub}>
          {subtitle || "Contact us today, and let us help you achieve your business objectives."}
        </p>
        <div className={styles.demoActions}>
          <a href="mailto:contact@hadrongbs.com" id="demo-email-cta" className={styles.demoPrimary}>
            {buttonText || "Contact Us"}
          </a>
        </div>
      </div>
    </section>
  );
}
