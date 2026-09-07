import Link from "next/link";
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
        <div className={styles.glowBg}></div>
        <div className={styles.contentWrapper}>
          <h2 className={styles.demoTitle}>
            {title || "Ready to transform your business?"}
          </h2>
          <p className={styles.demoSub}>
            {subtitle || "Let's collaborate to build the future of your enterprise with our world-class IT solutions."}
          </p>
          <div className={styles.demoActions}>
            <Link href="/contact" id="demo-email-cta" className={styles.demoPrimary}>
              <span className={styles.btnText}>{buttonText || "Contact Us Today"}</span>
              <span className={styles.btnArrow}>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
