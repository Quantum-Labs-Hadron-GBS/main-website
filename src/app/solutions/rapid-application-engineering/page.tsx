"use client";

import React, { useEffect, useState } from "react";
import styles from "./RapidApplication.module.css";
import Link from "next/link";
import { 
  ChevronsRight
} from "lucide-react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

export default function RapidApplicationPage() {
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
          {/* Background Video/Image placeholder - Using a dark gradient as fallback if video isn't available */}
          <video 
            className={styles.heroVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            src="https://res.cloudinary.com/dyhlpxwwo/video/upload/v1788272661/Animate_the_attached_image_usi_a13sng.mp4" 
          />
          <div className={styles.heroOverlay}></div>
          <div className={`${styles.heroContentWrapper} container`}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle} style={{ color: 'white' }}>
                Rapid Application Engineering
              </h1>
              <p className={styles.heroSubText}>
                Hadron GBS accelerates application engineering, delivering high-impact solutions with speed, scalability, and engineering discipline
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT CONTAINER (White Background) */}
        <div className={styles.container}>
          
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              What Rapid Application Engineering <br/>
              <span className={styles.highlightOrange}>Looks Like in Practice</span>
            </h2>
          </div>

          {/* CARDS SECTION */}
          <section className={styles.solutionsSection}>
            <div className={styles.cardsContainer}>
              
              {/* Card 1 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788273529/rapid_5_zsiara.avif" alt="Accelerated Application Modernization" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Accelerated Application Modernization</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS transforms legacy systems into modern, modular applications using low-code and no-code platforms, reducing development time while enhancing functionality.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Rapid turnaround for new features and enhancements</div>
                    <div className={styles.subBox}>Reduced technical debt and maintenance overhead</div>
                    <div className={styles.subBox}>Application architecture built for future change</div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788273530/rapid_3_zg4b5o.avif" alt="Business-Led Development Enablement" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Business-Led Development Enablement</h3>
                    <p className={styles.cardDesc}>
                      We enable business teams and citizen developers to co-create applications, reducing reliance on IT backlogs while maintaining governance.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Faster innovation driven by business users</div>
                    <div className={styles.subBox}>Improved alignment between business needs and technology</div>
                    <div className={styles.subBox}>Increased productivity across teams</div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788273530/rapid_2_q0t1eq.avif" alt="Agile and Scalable Delivery Models" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Agile and Scalable Delivery Models</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS applies agile frameworks combined with low-code platforms to deliver applications iteratively and at scale.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Shortened development cycles and faster time-to-market</div>
                    <div className={styles.subBox}>Flexibility to adapt to changing requirements</div>
                    <div className={styles.subBox}>Continuous delivery of incremental business value</div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788273530/rapid_4_dio2iw.avif" alt="Integration With Enterprise Ecosystems" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Integration With Enterprise Ecosystems</h3>
                    <p className={styles.cardDesc}>
                      We ensure modern applications integrate with existing ERP, CRM, and core systems to enable unified operations.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Connected enterprise applications and workflows</div>
                    <div className={styles.subBox}>Elimination of data silos</div>
                    <div className={styles.subBox}>Enhanced end-to-end process efficiency</div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788273531/rapid_1_mirfhs.avif" alt="Governance, Security, and Quality by Design" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Governance, Security, and Quality by Design</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS establishes governance frameworks to ensure rapid development does not compromise enterprise standards.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Secure and compliant application development</div>
                    <div className={styles.subBox}>Standardized development practices across teams</div>
                    <div className={styles.subBox}>High-quality, scalable solutions</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* EXECUTION GRID SECTION (Structured Framework) */}
          <section className={styles.executionSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Our Application Transformation <br />
                <span className={styles.highlightOrange}>Delivery Model</span>
              </h2>
              <p className={styles.sectionSubtitle} style={{ marginTop: '1rem', maxWidth: '800px', marginInline: 'auto' }}>
                Our approach integrates process, data, and technology to deliver value faster, reduce risk, and build scalable enterprise platforms.
              </p>
            </div>
            
            <div className={styles.executionGrid}>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Identify</h4>
                <p className={styles.execDesc}>Prioritize applications and use cases for modernization.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Architect</h4>
                <p className={styles.execDesc}>Define low-code and no-code architecture aligned to enterprise standards.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Build</h4>
                <p className={styles.execDesc}>Rapidly develop and deploy applications using agile methodologies.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Scale</h4>
                <p className={styles.execDesc}>Expand capabilities across the enterprise with continuous improvement.</p>
              </div>
            </div>
          </section>

          {/* WHY HADRON BLOCK */}
          <section className={styles.infoBlock}>
            <div className={styles.infoContent}>
              {/* Image Placeholder */}
              <div className={styles.infoImageWrapper}>
                <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788274236/rapid_m1_k0gb78.jpg" alt="Why Hadron GBS for Rapid Application Engineering" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Why Hadron GBS for Rapid Application Engineering</h2>
                <p className={styles.infoDesc}>
                  Many low-code initiatives fail after initial deployment because architecture standards arrive too late. We establish governance, integration patterns, and lifecycle controls from the beginning.
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Deep expertise in low-code and no-code platforms and enterprise modernization</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Outcome-focused approach aligned to business priorities</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Proven capability to accelerate delivery across complex environments</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Strong governance ensuring scalability, security, and sustainability</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* MEASURABLE BUSINESS IMPACT BLOCK */}
          <section className={styles.infoBlock} style={{ paddingTop: 0 }}>
            <div className={styles.infoContent}>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Enterprise Performance Improvements Through Agile Development</h2>
                <ul className={styles.bulletList} style={{ marginTop: '1rem' }}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>40-70% faster application development and deployment</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Reduced IT backlog and faster response to business needs</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Lower development and maintenance costs</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Improved user experience and adoption</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Increased organizational agility and innovation capacity</span>
                  </li>
                </ul>
              </div>
              {/* Image Placeholder */}
              <div className={styles.infoImageWrapper}>
                <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788274434/rapid_m2_ztjofs.jpg" alt="Enterprise Performance Improvements" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </section>

        </div>

        {/* BOTTOM CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Build the Future of Enterprise Applications</h2>
          <h2 className={`${styles.ctaTitle}`}>With <span className={styles.highlightOrange}>Hadron GBS</span></h2>
          <Link href="/contact" className={styles.ctaButton} style={{ marginTop: '2.5rem' }}>
            Consult with us ↗
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
