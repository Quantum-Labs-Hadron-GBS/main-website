"use client";

import React, { useEffect, useState } from "react";
import styles from "./UnifiedService.module.css";
import Link from "next/link";
import { 
  ChevronsRight
} from "lucide-react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

export default function UnifiedServicePage() {
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
            src="https://res.cloudinary.com/dyhlpxwwo/video/upload/v1788325868/Use_the_attached_image_as_the_2_nyko8s.mp4" 
          />
          <div className={styles.heroOverlay}></div>
          <div className={`${styles.heroContentWrapper} container`}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Unified Service Experience Management
              </h1>
              <p className={styles.heroSubText}>
                Hadron GBS brings together execution expertise to unify IT, customer, and enterprise services into an experience-centric operating model through outcomes-driven delivery.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT CONTAINER (White Background) */}
        <div className={styles.container}>
          
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Enterprise Service Solutions Built Around <br/>
              <span className={styles.highlightOrange}>Experience and Efficiency</span>
            </h2>
          </div>

          {/* CARDS SECTION */}
          <section className={styles.solutionsSection}>
            <div className={styles.cardsContainer}>
              
              {/* Card 1 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788326307/unified_5_zjibfe.avif" alt="Converged Service Management Model" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Converged Service Management Model</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS integrates ITSM, CSM, and enterprise service workflows into a single, cohesive platform, eliminating silos and enabling consistent service delivery across the enterprise.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Unified service experience across IT, HR, finance, and customer</div>
                    <div className={styles.subBox}>Standardized processes and service catalogs</div>
                    <div className={styles.subBox}>Improved collaboration across teams and functions</div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788326311/unified_4_cwzq1n.avif" alt="Experience-Centric Service Design" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Experience-Centric Service Design</h3>
                    <p className={styles.cardDesc}>
                      We redesign service interactions with a focus on user experience, ensuring intuitive, responsive, and personalized engagement across channels.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Enhanced employee and customer satisfaction</div>
                    <div className={styles.subBox}>Omnichannel service access across portal, mobile</div>
                    <div className={styles.subBox}>Personalized, context-aware service delivery</div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788326309/unified_3_zxip79.avif" alt="Intelligent Workflow Automation" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Intelligent Workflow Automation</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS embeds automation and AI into service workflows to reduce manual intervention and accelerate resolution.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Faster ticket resolution and reduced cycle times</div>
                    <div className={styles.subBox}>Automated routing, prioritization, and resolution</div>
                    <div className={styles.subBox}>Proactive issue detection and prevention</div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788326315/Unified_1_m4tcih.avif" alt="Single Pane of Glass for Operations" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Single Pane of Glass for Operations</h3>
                    <p className={styles.cardDesc}>
                      We provide unified dashboards and analytics to monitor service performance across the enterprise in real time.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>End-to-end visibility into service health and KPIs</div>
                    <div className={styles.subBox}>Data-driven insights for continuous improvement</div>
                    <div className={styles.subBox}>Better SLA adherence and governance</div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788326313/unified_2_sfl3sm.avif" alt="Integration Across Service Ecosystems" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Integration Across Service Ecosystems</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS ensures tight integration between service platforms and core enterprise systems including ERP, CRM, and monitoring tools.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Connected workflows across systems and functions</div>
                    <div className={styles.subBox}>Elimination of data silos and duplication</div>
                    <div className={styles.subBox}>Improved operational efficiency and accuracy</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* EXECUTION GRID SECTION (Structured Framework) */}
          <section className={styles.executionSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                How We Deliver Connected <span className={styles.highlightOrange}>Enterprise</span> <br />
                <span className={styles.highlightOrange}>Service Operations</span>
              </h2>
              <p className={styles.sectionSubtitle} style={{ marginTop: '1rem', maxWidth: '800px', marginInline: 'auto' }}>
                Our approach moves organizations from fragmented service management to a unified, continuously improving service ecosystem.
              </p>
            </div>
            
            <div className={styles.executionGrid}>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Assess</h4>
                <p className={styles.execDesc}>Evaluate the current service management landscape and identify gaps.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Integrate</h4>
                <p className={styles.execDesc}>Unify ITSM, CSM, and enterprise workflows into a common platform.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Optimize</h4>
                <p className={styles.execDesc}>Streamline processes and embed automation and AI.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Transform</h4>
                <p className={styles.execDesc}>Continuously enhance service experience using analytics and feedback.</p>
              </div>
            </div>
          </section>

          {/* WHY HADRON BLOCK */}
          <section className={styles.infoBlock}>
            <div className={styles.infoContent}>
              {/* Image Placeholder */}
              <div className={styles.infoImageWrapper}>
                <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788327256/unified_m1_auvyhg.webp" alt="Why Hadron GBS for Unified Service Experience Management" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Why Hadron GBS for Unified Service Experience Management</h2>
                <p className={styles.infoDesc}>
                  Unified service management only works when integrations remain operationally reliable. We prioritize interoperability across ITSM, CRM, ERP, monitoring, and collaboration platforms from the start.
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Deep expertise in ITSM, CSM, and enterprise service transformation</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Proven ability to unify complex service ecosystems</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Outcome-driven approach focused on experience and efficiency</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Strong focus on governance, scalability, and continuous improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* MEASURABLE BUSINESS IMPACT BLOCK */}
          <section className={styles.infoBlock} style={{ paddingTop: 0 }}>
            <div className={styles.infoContent}>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>The Measurable Value of Connected Service Operations</h2>
                <ul className={styles.bulletList} style={{ marginTop: '1rem' }}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>30-50% faster service resolution times</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Improved employee productivity and customer satisfaction</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Reduced operational complexity and cost</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Higher SLA compliance and service reliability</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Enhanced visibility and control over enterprise services</span>
                  </li>
                </ul>
              </div>
              {/* Image Placeholder */}
              <div className={styles.infoImageWrapper}>
                <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788327255/unified_m2_wiorfu.jpg" alt="The Measurable Value of Connected Service Operations" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
