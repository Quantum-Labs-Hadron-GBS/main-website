import styles from "./PartnerMarquee.module.css";
import Image from "next/image";

/**
 * Logo display heights are calibrated to the natural aspect ratios of each image
 * so every logo appears visually balanced at the same optical weight.
 *
 * ServiceNow  3000×1887 (AR 1.59) → 48px tall → ~76px wide
 * BMC         1200×507  (AR 2.37) → 36px tall → ~85px wide
 * Salesforce  3840×2160 (AR 1.78) → 52px tall → ~93px wide
 * Freshworks  1220×250  (AR 4.88) → 28px tall → ~137px wide  (very wide logo)
 * Ivanti      600×214   (AR 2.80) → 36px tall → ~101px wide
 */
const PARTNERS = [
  {
    name: "ServiceNow",
    logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523675/ServiceNow-Logo_kbaxks.png",
    displayH: 48,
    naturalW: 3000,
    naturalH: 1887,
  },
  {
    name: "BMC Software",
    logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523792/Logo_BMC_Software_oqiorh.png",
    displayH: 36,
    naturalW: 1200,
    naturalH: 507,
  },
  {
    name: "Salesforce",
    logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523790/Salesforce-Logo_y5q2ir.png",
    displayH: 52,
    naturalW: 3840,
    naturalH: 2160,
  },
  {
    name: "Freshworks",
    logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523791/freshworks-logo_brandlogos.net_c6t5u_hu6w9j.png",
    displayH: 28,
    naturalW: 1220,
    naturalH: 250,
  },
  {
    name: "Ivanti",
    logo: "https://res.cloudinary.com/djxbxhgat/image/upload/v1784523791/Logo_Ivanti_ww1j1c.png",
    displayH: 36,
    naturalW: 600,
    naturalH: 214,
  },
];

export default function PartnerMarquee() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {PARTNERS.map((p, i) => (
            <div key={i} className={styles.partnerItem}>
              <Image
                src={p.logo}
                alt={p.name}
                width={Math.round((p.naturalW / p.naturalH) * p.displayH * 2)}
                height={p.displayH * 2}
                className={styles.partnerLogo}
                style={{ height: `${p.displayH}px`, width: "auto" }}
              />
            </div>
          ))}
          {PARTNERS.map((p, i) => (
            <div key={`dup-${i}`} className={styles.partnerItem}>
              <Image
                src={p.logo}
                alt={p.name}
                width={Math.round((p.naturalW / p.naturalH) * p.displayH * 2)}
                height={p.displayH * 2}
                className={styles.partnerLogo}
                style={{ height: `${p.displayH}px`, width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
