import Image from "next/image";
import Link from "next/link";
import styles from "./AssetsOfExcellenceSection.module.css";

const ASSETS = [
  {
    tag: "Experience",
    title: "Our Assets Of Excellence",
    body: "Leading Business through expertise. We have a team of experienced and skilled professionals who have worked with a diverse range of clients across different industries.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    tag: "Quality",
    title: "Uncompromising Quality",
    body: "Delivering exceptional results. We understand that quality is as important as timeliness for any business. Our team ensures that the solutions meet your expectations.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    tag: "Value",
    title: "Maximum Value, Optimal Cost",
    body: "Smart investment for your business. We offer cost-effective solutions that meet your budget requirements and provide customized solutions that are efficient.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    tag: "Approach",
    title: "Tailored to Your Success",
    body: "Solutions tailored to your unique needs. We take a personalized approach to every project and work closely with our clients to understand their specific needs.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
];

export default function AssetsOfExcellenceSection() {
  return (
    <section className={styles.section} id="assets">
      <div className={`${styles.inner} container`}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Assets of Excellence</h2>
        </div>
        
        <div className={styles.grid}>
          {ASSETS.map((asset, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={asset.img} 
                  alt={asset.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.tag}>{asset.tag}</span>
                <h3 className={styles.cardTitle}>{asset.title}</h3>
                <p className={styles.cardBody}>{asset.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
