import styles from "./PartnerMarquee.module.css";

const PARTNERS = [
  "ServiceNow", "Salesforce", "BMC", "Ivanti", "Atlassian", "SAP", "UiPath", "Ansible"
];

export default function PartnerMarquee() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {PARTNERS.map((p, i) => <span key={i} className={styles.partner}>{p}</span>)}
          {PARTNERS.map((p, i) => <span key={`dup-${i}`} className={styles.partner}>{p}</span>)}
        </div>
      </div>
    </div>
  );
}
