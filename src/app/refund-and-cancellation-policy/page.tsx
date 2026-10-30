import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../components/PolicyPage/PolicyPage.module.css";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/refund-and-cancellation-policy");

export default function RefundAndCancellationPolicyPage() {
  return (
    <main className={`light-theme ${styles.pageWrapper}`}>
      <Navbar isStatic />

      <div className={styles.contentContainer}>
        <article className={styles.policyCard}>
          <header className={styles.header}>
            <span className={styles.badge}>Billing & Terms</span>
            <h1 className={styles.title}>Refund and Cancellation Policy</h1>
            <p className={styles.updated}>Last Updated: October 2026</p>
          </header>

          <div className={styles.intro}>
            <p>
              At Hadron GBS, we are dedicated to providing excellent services and products to our customers. Due to the nature of our offerings, we have implemented a strict no-refund and no-cancellation policy.
            </p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>No Refunds</h2>
            <p className={styles.paragraph}>
              All purchases are considered final. We do not offer refunds for any products or services under any circumstances.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>No Cancellations</h2>
            <p className={styles.paragraph}>
              Once an order is placed or a service is booked, it cannot be cancelled. We urge our customers to review their orders and service bookings before purchasing.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Questions & Clarification</h2>
            <p className={styles.paragraph}>
              If you have any questions or need further clarification, please email us at:
            </p>
            <div className={styles.contactBox}>
              <p className={styles.contactName}>Hadron Global Business Solutions</p>
              <p className={styles.paragraph} style={{ marginBottom: 0 }}>
                Email: <a href="mailto:info@hadrongbs.com" className={styles.contactEmail}>info@hadrongbs.com</a>
              </p>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
