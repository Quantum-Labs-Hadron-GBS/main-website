"use client";

import React, { useEffect, useState } from "react";
import styles from "./EngineeringQuality.module.css";
import Link from "next/link";
import { 
  ChevronsRight
} from "lucide-react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

export default function EngineeringQualityPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>
        
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <video 
            className={styles.heroVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            src="https://res.cloudinary.com/dyhlpxwwo/video/upload/v1788329551/Use_the_attached_image_as_the_4_ggixnn.mp4" 
          />
          <div className={styles.heroOverlay}></div>
          <div className={`${styles.heroContentWrapper} container`}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Engineering Quality and Reliability
              </h1>
              <p className={styles.heroSubText}>
                Hadron GBS embeds quality engineering across every stage, enabling resilient systems and predictable delivery.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT CONTAINER (White Background) */}
        <div className={styles.container}>
          
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Quality Engineering Across <br/>
              <span className={styles.highlightOrange}>Enterprise Systems and Workflows</span>
            </h2>
          </div>

          {/* CARDS SECTION */}
          <section className={styles.solutionsSection}>
            <div className={styles.cardsContainer}>
              
              {/* Card 1 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788329643/eng_3_codj5w.avif" alt="Shift-Left and Shift-Right Quality Engineering" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Shift-Left and Shift-Right Quality Engineering</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS embeds quality across the full lifecycle, from early design validation to real-time production monitoring, ensuring defects are prevented, not just detected.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Early identification and resolution of defects</div>
                    <div className={styles.subBox}>Reduced rework and cost of quality</div>
                    <div className={styles.subBox}>Continuous feedback loops for improvement</div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788329637/eng_5_toqpmx.avif" alt="Intelligent Test Automation at Scale" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Intelligent Test Automation at Scale</h3>
                    <p className={styles.cardDesc}>
                      We implement AI-driven test automation frameworks that accelerate testing while improving coverage and accuracy.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Faster release cycles with automated regression</div>
                    <div className={styles.subBox}>Increased test coverage across applications and integrations</div>
                    <div className={styles.subBox}>Reduced manual testing effort and errors</div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788329648/eng_2_b820oi.avif" alt="Continuous Testing in DevSecOps Pipelines" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Continuous Testing in DevSecOps Pipelines</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS integrates testing into CI/CD pipelines, enabling continuous validation without slowing down delivery.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Real-time quality checks during development and deployment</div>
                    <div className={styles.subBox}>Faster feedback to development teams</div>
                    <div className={styles.subBox}>Higher confidence in every release</div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788329640/eng_4_kcrl5h.avif" alt="Performance, Reliability, and Resilience Engineering" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Performance, Reliability, and Resilience Engineering</h3>
                    <p className={styles.cardDesc}>
                      We ensure systems are not only functional but also scalable, reliable, and capable of handling real-world demands.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Improved system performance under peak loads</div>
                    <div className={styles.subBox}>Reduced downtime and service disruptions</div>
                    <div className={styles.subBox}>Enhanced end-user experience</div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788329658/eng_1_lestnz.avif" alt="Observability and Proactive Quality Insights" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Observability and Proactive Quality Insights</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS applies advanced monitoring, analytics, and observability to detect and resolve issues before they impact users.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Real-time visibility into application health</div>
                    <div className={styles.subBox}>Proactive issue detection and resolution</div>
                    <div className={styles.subBox}>Data-driven insights for continuous optimization</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* EXECUTION GRID SECTION (Structured Framework) */}
          <section className={styles.executionSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.highlightOrange}>Our Approach</span>
              </h2>
              <p className={styles.sectionSubtitle} style={{ marginTop: '1rem', maxWidth: '800px', marginInline: 'auto' }}>
                Our approach moves organizations from quality maturity assessment to a continuously optimizing, automation-driven quality engineering practice.
              </p>
            </div>
            
            <div className={styles.executionGrid}>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Assess</h4>
                <p className={styles.execDesc}>Evaluate current quality maturity, gaps, and risks.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Embed</h4>
                <p className={styles.execDesc}>Integrate quality engineering practices across the delivery lifecycle.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Automate</h4>
                <p className={styles.execDesc}>Implement scalable automation frameworks and pipelines.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Optimize</h4>
                <p className={styles.execDesc}>Continuously improve through insights, analytics, and feedback.</p>
              </div>
            </div>
          </section>

          {/* WHY HADRON BLOCK */}
          <section className={styles.infoBlock}>
            <div className={styles.infoContent}>
              <div className={styles.infoImageWrapper}>
                <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788330310/eng_m1_h8hlcu.webp" alt="Why Hadron GBS for Engineering Quality and Reliability" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Why Hadron GBS for Engineering Quality and Reliability</h2>
                <p className={styles.infoDesc}>
                  Hadron GBS treats quality engineering as an operational discipline that spans architecture, development, testing, deployment, and production observability rather than a standalone QA function.
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Deep expertise in quality engineering and DevSecOps integration</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Outcome-driven approach focused on reliability and speed</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Proven ability to scale quality across complex, distributed environments</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Strong focus on automation, observability, and continuous improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* MEASURABLE BUSINESS IMPACT BLOCK */}
          <section className={styles.infoBlock} style={{ paddingTop: 0 }}>
            <div className={styles.infoContent}>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Operational Gains Enabled Through Reliability Engineering</h2>
                <ul className={styles.bulletList} style={{ marginTop: '1.5rem' }}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>40–60% reduction in production defects</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Faster, more reliable release cycles</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Lower cost of quality through early defect detection</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Improved system uptime and performance</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Enhanced customer trust and satisfaction</span>
                  </li>
                </ul>
              </div>
              <div className={styles.infoImageWrapper}>
                <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788330307/eng_m2_me3czz.avif" alt="Operational Gains Enabled Through Reliability Engineering" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </section>

        </div>

        {/* BOTTOM CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Turn Quality Engineering Into a <span className={styles.highlightOrange}>Strategic</span></h2>
          <h2 className={`${styles.ctaTitle}`}><span className={styles.highlightOrange}>Business Advantage</span></h2>
          <p style={{ color: 'white', marginTop: '1.5rem', maxWidth: '600px', marginInline: 'auto', textAlign: 'center', fontSize: '1.1rem' }}>
            Deliver reliable, high-performing systems that scale with your business.
          </p>
          <Link href="/contact" className={styles.ctaButton} style={{ marginTop: '2.5rem' }}>
            Consult with us ↗
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
