"use client";

import React, { useEffect, useState } from "react";
import styles from "./CloudAdoption.module.css";
import Link from "next/link";
import { 
  ChevronsRight
} from "lucide-react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

export default function CloudAdoptionPage() {
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
            src="https://res.cloudinary.com/dyhlpxwwo/video/upload/v1788327963/Use_the_attached_image_as_the_3_gshigo.mp4" 
          />
          <div className={styles.heroOverlay}></div>
          <div className={`${styles.heroContentWrapper} container`}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Cloud Adoption and Cloud-First Engineering
              </h1>
              <p className={styles.heroSubText}>
                Hadron GBS delivers measurable outcomes by designing, building, and operating cloud-first ecosystems that scale with your business.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT CONTAINER (White Background) */}
        <div className={styles.container}>
          
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Enterprise Cloud Services <span className={styles.highlightOrange}>Across</span> <br/>
              <span className={styles.highlightOrange}>Architecture and Operations</span>
            </h2>
          </div>

          {/* CARDS SECTION */}
          <section className={styles.solutionsSection}>
            <div className={styles.cardsContainer}>
              
              {/* Card 1 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788327976/cloud_3_g4y3kv.avif" alt="Cloud-First Strategy and Architecture" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Cloud-First Strategy and Architecture</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS defines a business-aligned cloud-first strategy, ensuring applications and platforms are designed to fully use cloud capabilities from the ground up.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Architecture aligned to growth and scalability needs</div>
                    <div className={styles.subBox}>Right-fit deployment models across multi-cloud and hybrid environments</div>
                    <div className={styles.subBox}>Reduced complexity and improved agility</div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788327982/cloud_1_xf0pmt.avif" alt="Cloud-Native Engineering at Scale" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Cloud-Native Engineering at Scale</h3>
                    <p className={styles.cardDesc}>
                      We design and build applications using microservices, containers, APIs, and serverless frameworks to enable modular, scalable, and resilient systems.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Faster development and deployment cycles</div>
                    <div className={styles.subBox}>High availability and fault-tolerant architectures</div>
                    <div className={styles.subBox}>Improved performance and user experience</div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788327974/cloud_4_d6swps.avif" alt="Accelerated Migration With Modernization" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Accelerated Migration With Modernization</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS combines migration with re-platforming and re-architecture, ensuring applications are optimized for cloud, not just relocated.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Reduced technical debt and legacy constraints</div>
                    <div className={styles.subBox}>Better resource utilization and cost efficiency</div>
                    <div className={styles.subBox}>Enhanced flexibility to adapt to business changes</div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788327978/cloud_2_jv7wun.avif" alt="DevSecOps-Driven Delivery" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>DevSecOps-Driven Delivery</h3>
                    <p className={styles.cardDesc}>
                      We embed DevSecOps practices into cloud engineering to enable secure, automated, and continuous delivery pipelines.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Faster releases with automated CI/CD pipelines</div>
                    <div className={styles.subBox}>Built-in security and compliance across the lifecycle</div>
                    <div className={styles.subBox}>Consistent, reliable deployments at scale</div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788327989/cloud_5_zedufn.avif" alt="Operational Excellence and FinOps" className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Operational Excellence and FinOps</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS ensures your cloud environment is fully operationalized with governance, observability, and cost optimization frameworks.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Real-time monitoring and performance insights</div>
                    <div className={styles.subBox}>Optimized cloud spending with FinOps practices</div>
                    <div className={styles.subBox}>Governance frameworks for risk, compliance, and security</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* EXECUTION GRID SECTION (Structured Framework) */}
          <section className={styles.executionSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Delivering Cloud-First Operations Through <br />
                <span className={styles.highlightOrange}>Structured Execution</span>
              </h2>
              <p className={styles.sectionSubtitle} style={{ marginTop: '1rem', maxWidth: '800px', marginInline: 'auto' }}>
                Our approach moves organizations from cloud readiness assessment to a fully operationalized, continuously improving cloud-first environment.
              </p>
            </div>
            
            <div className={styles.executionGrid}>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Discover</h4>
                <p className={styles.execDesc}>Assess application landscape, cloud readiness, and business priorities.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Design</h4>
                <p className={styles.execDesc}>Define cloud-first architecture and engineering blueprint.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Build</h4>
                <p className={styles.execDesc}>Execute migration and cloud-native development using agile methods.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Operate</h4>
                <p className={styles.execDesc}>Enable continuous optimization, governance, and innovation.</p>
              </div>
            </div>
          </section>

          {/* WHY HADRON BLOCK */}
          <section className={styles.infoBlock}>
            <div className={styles.infoContent}>
              {/* Image Placeholder */}
              <div className={styles.infoImageWrapper}>
                <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788328794/cloud_m1_xopdvs.png" alt="Why Hadron GBS for Cloud Adoption and Cloud-First Engineering" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Why Hadron GBS for Cloud Adoption and Cloud-First Engineering</h2>
                <p className={styles.infoDesc}>
                  Most cloud environments become difficult to manage because operational readiness arrives after migration. We embed observability, resilience planning, access controls, and automation into the foundation itself.
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Deep expertise in cloud platforms and cloud-native engineering</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Outcome-driven approach focused on measurable business value</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Proven experience in large-scale, complex cloud transformations</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* MEASURABLE BUSINESS IMPACT BLOCK */}
          <section className={styles.infoBlock} style={{ paddingTop: 0 }}>
            <div className={styles.infoContent}>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Real Business Results From Cloud-First Operations</h2>
                <ul className={styles.bulletList} style={{ marginTop: '1rem' }}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span><strong>87-day cloud migration</strong> — legacy infrastructure migrated to cloud with zero SLA breaches.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span><strong>2× faster time-to-market</strong> — feature cycles reduced from 18 weeks to 8 weeks, enabling two new revenue-generating products.</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span><strong>98% CMDB accuracy</strong> — automated discovery and service mapping created a more reliable infrastructure data foundation.</span>
                  </li>
                </ul>
              </div>
              {/* Image Placeholder */}
              <div className={styles.infoImageWrapper}>
                <img src="https://res.cloudinary.com/dyhlpxwwo/image/upload/v1788328792/cloud_m2_seg0hy.jpg" alt="Real Business Results From Cloud-First Operations" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </section>

        </div>

        {/* BOTTOM CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Accelerate Innovation Through</h2>
          <h2 className={`${styles.ctaTitle}`}><span className={styles.highlightOrange}>Cloud-First Operations</span></h2>
          <p style={{ color: 'white', marginTop: '1.5rem', maxWidth: '600px', marginInline: 'auto', textAlign: 'center', fontSize: '1.1rem' }}>
            Engineer a cloud-first foundation that drives speed, resilience, and sustained business growth.
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
