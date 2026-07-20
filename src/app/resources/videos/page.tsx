import Navbar from "../../components/Navbar/Navbar";
import CtaSection from "../../components/CtaSection/CtaSection";
import Footer from "../../components/Footer/Footer";
import styles from "./Videos.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hadron GBS Videos | Resources",
  description: "Check out our videos featuring Hadron GBS webinars, employee testimonials, celebrations, and success stories.",
};

const VIDEOS = [
  "XYJRIYvGyzc",
  "xu2sNA5LXww",
  "BzbQj_IsFvA",
  "Qs2ASM7fToE",
  "Ny37JBq9hGY",
  "bLxFnQDD8_E",
  "TAhYW2r_uR8",
  "XJY6Bqfwe6w",
  "81xnnTN3CSg",
  "BTmq4GNAUJI",
  "cQO1uN-R7jE",
  "daAWJNCsTzg",
  "kCQfLLvZuNw",
];

export default function VideosPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero */}
      <section className={`${styles.hero} container`}>
        <span className={styles.heroTag}>Video Library</span>
        <h1 className={styles.heroTitle}>Hadron GBS <span style={{color: "var(--accent)"}}>Videos</span></h1>
        <p className={styles.heroDesc}>
          Check out our videos featuring Hadron GBS webinars, employee testimonials, celebrations, and success stories.
        </p>
      </section>

      {/* Grid */}
      <section className={`${styles.section} container`}>
        <div className={styles.grid}>
          {VIDEOS.map((id, index) => (
            <div key={index} className={styles.videoCard}>
              <div className={styles.iframeWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Hadron GBS Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
