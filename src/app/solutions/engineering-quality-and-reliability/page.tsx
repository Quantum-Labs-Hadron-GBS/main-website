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
                Hadron GBS implements test automation, performance engineering, and chaos testing to build resilience into your most critical applications.
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
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788329643/eng_3_codj5w.avif" alt="Continuous Test Automation" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Continuous Test Automation</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS shifts testing left by embedding automated test suites into CI/CD pipelines, accelerating delivery while ensuring consistent quality.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Reduced manual testing effort and accelerated time-to-market</div>
                    <div className={styles.subBox}>High test coverage across APIs, UI, and backend services</div>
                    <div className={styles.subBox}>Early detection and resolution of defects</div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788329637/eng_5_toqpmx.avif" alt="Performance and Reliability Engineering" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Performance and Reliability Engineering</h3>
                    <p className={styles.cardDesc}>
                      We ensure applications meet performance SLAs under peak loads through rigorous load, stress, and endurance testing.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Resilient architectures that scale without degradation</div>
                    <div className={styles.subBox}>Identification of bottlenecks before they impact users</div>
                    <div className={styles.subBox}>High availability for mission-critical applications</div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788329648/eng_2_b820oi.avif" alt="Enterprise Application Testing" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Enterprise Application Testing</h3>
                    <p className={styles.cardDesc}>
                      Comprehensive testing for complex enterprise platforms (ERP, CRM, HCM), ensuring seamless integration and data integrity.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Validated end-to-end business workflows</div>
                    <div className={styles.subBox}>Ensured interoperability across complex ecosystems</div>
                    <div className={styles.subBox}>Reduced risk during major upgrades or migrations</div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788329640/eng_4_kcrl5h.avif" alt="Chaos Engineering and Resilience" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Chaos Engineering and Resilience</h3>
                    <p className={styles.cardDesc}>
                      We proactively inject failures into systems to identify weaknesses and build confidence in application recovery and fault tolerance.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Uncovered hidden vulnerabilities in distributed systems</div>
                    <div className={styles.subBox}>Improved system recovery times and disaster readiness</div>
                    <div className={styles.subBox}>Enhanced confidence in production stability</div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788329658/eng_1_lestnz.avif" alt="AI-Driven Quality Assurance" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>AI-Driven Quality Assurance</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS leverages AI to optimize test generation, execution, and defect analysis, reducing testing cycles and improving accuracy.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Intelligent test creation and maintenance</div>
                    <div className={styles.subBox}>Predictive analytics for defect prevention</div>
                    <div className={styles.subBox}>Self-healing test automation scripts</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* EXECUTION GRID SECTION (Structured Framework) */}
          <section className={styles.executionSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Delivering Engineering Quality Through <br />
                <span className={styles.highlightOrange}>Structured Execution</span>
              </h2>
              <p className={styles.sectionSubtitle} style={{ marginTop: '1rem', maxWidth: '800px', marginInline: 'auto' }}>
                Our approach moves organizations from reactive testing to proactive, continuous quality engineering.
              </p>
            </div>
            
            <div className={styles.executionGrid}>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Plan</h4>
                <p className={styles.execDesc}>Define quality objectives and automation strategies.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Automate</h4>
                <p className={styles.execDesc}>Build and integrate continuous test frameworks.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Validate</h4>
                <p className={styles.execDesc}>Execute performance, security, and functional tests.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Optimize</h4>
                <p className={styles.execDesc}>Use feedback loops to improve code and test quality.</p>
              </div>
            </div>
          </section>

          {/* WHY HADRON BLOCK */}
          <section className={styles.infoBlock}>
            <div className={styles.infoContent}>
              {/* Image Placeholder */}
              <div className={styles.infoImageWrapper}>
                <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788330310/eng_m1_h8hlcu.webp" alt="Why Hadron GBS for Engineering Quality and Reliability" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Why Hadron GBS for Engineering Quality and Reliability</h2>
                <p className={styles.infoDesc}>
                  Software failures are costly. We treat quality as a continuous engineering discipline rather than a final checklist, ensuring that applications are built to perform, scale, and recover.
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Deep expertise in modern quality engineering and automation</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Outcome-driven approach focused on defect reduction</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Proven experience in securing complex enterprise ecosystems</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* MEASURABLE BUSINESS IMPACT BLOCK */}
          <section className={styles.infoBlock} style={{ paddingTop: 0 }}>
            <div className={styles.infoContent}>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Measurable Impact of Quality Engineering</h2>
                <ul className={styles.bulletList} style={{ marginTop: '1rem' }}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Faster release cycles with continuous testing</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Reduced production defects and downtime</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Lower total cost of quality and maintenance</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Higher customer satisfaction and user adoption</span>
                  </li>
                </ul>
              </div>
              {/* Image Placeholder */}
              <div className={styles.infoImageWrapper}>
                <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788330307/eng_m2_me3czz.avif" alt="Measurable Impact of Quality Engineering" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </section>

        </div>

        {/* BOTTOM CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Engineer Predictable Releases Across the</h2>
          <h2 className={`${styles.ctaTitle}`}><span className={styles.highlightOrange}>Software Lifecycle</span></h2>
          <Link href="/contact" className={styles.ctaButton} style={{ marginTop: '2.5rem' }}>
            Consult with us ↗
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
