import styles from "./PartnerMarquee.module.css";

import Image from "next/image";

const PARTNERS = [
  { name: "ServiceNow", logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523675/ServiceNow-Logo_kbaxks.png" },
  { name: "BMC Software", logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523792/Logo_BMC_Software_oqiorh.png" },
  { name: "Salesforce", logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523790/Salesforce-Logo_y5q2ir.png" },
  { name: "Freshworks", logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523791/freshworks-logo_brandlogos.net_c6t5u_hu6w9j.png" },
  { name: "Ivanti", logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523791/Logo_Ivanti_ww1j1c.png" }
];

export default function PartnerMarquee() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {PARTNERS.map((p, i) => (
            <div key={i} className={styles.partner}>
              <Image src={p.logo} alt={p.name} width={120} height={40} className={styles.partnerLogo} />
            </div>
          ))}
          {PARTNERS.map((p, i) => (
            <div key={`dup-${i}`} className={styles.partner}>
              <Image src={p.logo} alt={p.name} width={120} height={40} className={styles.partnerLogo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
