"use client";

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./EnterpriseCore.module.css";
import Link from "next/link";
import { 
  Search,
  PenTool,
  RefreshCw,
  TrendingUp,
  ChevronsRight
} from "lucide-react";

export default function EnterpriseCoreTransformationPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO TITLE SECTION */}
        <section className={styles.heroSection}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroVideo}
          >
            <source src="https://res.cloudinary.com/dyhlpxwwo/video/upload/v1788254535/Animate_the_attached_image_whi_uxz6vf.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay}></div>
          <div className={`${styles.container} ${styles.heroContentWrapper}`}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Enterprise Core Transformation
              </h1>
              <p className={styles.heroSubText}>
                Hadron GBS translates deep platform expertise into measurable business value through outcomes-driven execution across ERP and CRM environments.
              </p>
            </div>
          </div>
        </section>

        <div className={styles.container}>
          
          {/* STRUCTURED EXECUTION SECTION */}
          <section className={styles.executionSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Enterprise Modernization Delivered Through</h2>
              <h2 className={`${styles.sectionTitle} ${styles.highlightOrange}`}>Structured Execution</h2>
              <p className={styles.sectionSubtitle} style={{ marginTop: '1rem' }}>
                Our approach integrates process, data, and technology to deliver value faster, reduce risk, and build scalable enterprise platforms.
              </p>
            </div>

            <div className={styles.executionGrid}>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Assess</h4>
                <p className={styles.execDesc}>Evaluate the current ERP and CRM landscape, identify gaps, and surface opportunities.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Design</h4>
                <p className={styles.execDesc}>Define a future-state architecture aligned to business goals.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Transform</h4>
                <p className={styles.execDesc}>Execute modernization through agile, outcome-driven delivery.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Optimize</h4>
                <p className={styles.execDesc}>Continuously improve with insights, automation, and innovation.</p>
              </div>
            </div>
          </section>

          {/* CARDS SECTION */}
          <section className={styles.solutionsSection}>
            <div className={styles.cardsContainer}>
              
              {/* Card 1 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788258267/ET_1_ejq2ru.jpg" alt="Reimagining the Digital Core" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Reimagining the Digital Core</h3>
                    <p className={styles.cardDesc}>
                      We modernize ERP and CRM ecosystems by aligning technology with business strategy. This is not a system upgrade. It is a redesign of how your enterprise operates.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Unified data across finance, operations, sales.</div>
                    <div className={styles.subBox}>Improved decision velocity with real-time insights</div>
                    <div className={styles.subBox}>Simplified and standardized business processes</div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788258255/ET_3_ynndo7.png" alt="Intelligent Process Transformation" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Intelligent Process Transformation</h3>
                    <p className={styles.cardDesc}>
                      We embed automation, AI, and analytics into core workflows to move organizations from reactive operations to predictive and proactive decision-making.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Reduced manual effort and operational inefficiencies</div>
                    <div className={styles.subBox}>Higher accuracy and consistency in processes</div>
                    <div className={styles.subBox}>Intelligent workflows that adapt to business dynamics</div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788258256/ET_5_btgxff.png" alt="Customer-Centric CRM Modernization" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Customer-Centric CRM Modernization</h3>
                    <p className={styles.cardDesc}>
                      We transform CRM platforms into experience engines that drive engagement, retention, and growth.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>A 360° customer view across every touchpoint</div>
                    <div className={styles.subBox}>Personalized, data-driven interactions</div>
                    <div className={styles.subBox}>Increased sales effectiveness and customer lifetime value</div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788258255/ET_4_omra8h.webp" alt="Cloud-Enabled Scalability and Agility" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Cloud-Enabled Scalability and Agility</h3>
                    <p className={styles.cardDesc}>
                      We apply cloud-native architectures to make ERP and CRM systems scalable, secure, and ready for continuous change.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Faster deployment and reduced infrastructure costs</div>
                    <div className={styles.subBox}>Flexibility to scale with business growth</div>
                    <div className={styles.subBox}>Continuous innovation through modern platforms</div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788258267/ET_2_pdboju.jpg" alt="Data as a Strategic Asset" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Data as a Strategic Asset</h3>
                    <p className={styles.cardDesc}>
                      We enable a single source of truth by integrating and governing enterprise data across systems.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Trusted, high-quality data for decision-making</div>
                    <div className={styles.subBox}>Advanced analytics and forecasting capabilities</div>
                    <div className={styles.subBox}>Improved compliance and risk management</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* WHY HADRON BLOCK */}
          <section className={styles.infoBlock}>
            <div className={styles.infoContent}>
              {/* Image Placeholder */}
              <div className={styles.infoImageWrapper}>
                <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788259026/ET_M1_cdjlli.jpg" alt="Why Hadron GBS" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Why Hadron GBS for Enterprise Core Transformation</h2>
                <p className={styles.infoDesc}>
                  We combine deep domain expertise with proven execution frameworks to modernize legacy landscapes and enable real-time decision-making.
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Deep expertise in enterprise platforms and transformation programs</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Outcome-driven approach focused on measurable business value</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Proven delivery excellence across complex, global environments</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Strong focus on adoption, change management, and business alignment</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* MEASURABLE BUSINESS IMPACT BLOCK */}
          <section className={styles.infoBlock} style={{ paddingTop: 0 }}>
            <div className={styles.infoContent}>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Measurable Business Impact From Core Transformation</h2>
                <ul className={styles.bulletList} style={{ marginTop: '1rem' }}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>20-40% improvement in operational efficiency</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Faster decision-making with real-time insights</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Enhanced customer engagement and retention</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Reduced total cost of ownership</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Increased organizational agility and resilience</span>
                  </li>
                </ul>
              </div>
              {/* Image Placeholder */}
              <div className={styles.infoImageWrapper}>
                <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788259020/ET_M2_qtl4pc.jpg" alt="Measurable Business Impact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </section>

        </div>

        {/* BOTTOM CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Build a Digital Core Ready for</h2>
          <h2 className={`${styles.ctaTitle} ${styles.highlightOrange}`}>Enterprise Growth</h2>
          <p className={styles.ctaDesc}>
            To transform your ERP and CRM into a strategic advantage, build a digital core that drives intelligence, speed, and growth.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Consult with us ↗
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
