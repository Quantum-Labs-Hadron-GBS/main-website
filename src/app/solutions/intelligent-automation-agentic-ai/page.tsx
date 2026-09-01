"use client";

import React, { useEffect, useState } from "react";
import styles from "./IntelligentAutomation.module.css";
import Link from "next/link";
import { 
  ChevronsRight
} from "lucide-react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

export default function IntelligentAutomationPage() {
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
          <div className={styles.heroVideo} style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a24 100%)' }}>
            {/* 
              Since no specific background was provided, we use a dark placeholder matching the theme. 
              The user can replace this with a <video> tag if they have the specific asset.
            */}
          </div>
          <div className={styles.heroOverlay}></div>
          <div className={`${styles.heroContentWrapper} container`}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                AI-Driven Enterprise Operations Built for <br />
                <span className={styles.highlightOrange}>Real-Time Decision Execution</span>
              </h1>
              <p className={styles.heroSubText}>
                Hadron GBS translates deep automation expertise into measurable business value through outcomes-driven execution across intelligent automation and agentic AI
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT CONTAINER (White Background) */}
        <div className={styles.pageContent}>
          
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Automation and AI Services Across <br/>
              <span className={styles.highlightOrange}>Enterprise Workflows</span>
            </h2>
          </div>

          {/* CARDS SECTION */}
          <section className={styles.solutionsSection}>
            <div className={styles.cardsContainer}>
              
              {/* Card 1 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  {/* Placeholder for Card Image */}
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
                    [Image Placeholder]
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>From Automation to Autonomy</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS moves enterprises beyond rule-based automation to agentic AI, where intelligent agents perceive, decide, and act independently within defined business contexts.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Reduced human intervention in complex workflows</div>
                    <div className={styles.subBox}>Faster execution with intelligent decision-making</div>
                    <div className={styles.subBox}>Continuous learning and optimization of processes</div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  {/* Placeholder for Card Image */}
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
                    [Image Placeholder]
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Intelligent Orchestration at Scale</h3>
                    <p className={styles.cardDesc}>
                      We design orchestration layers that connect systems, data, and AI agents into a unified automation fabric across the enterprise.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>End-to-end visibility and control across processes</div>
                    <div className={styles.subBox}>Integration across ERP, CRM, and third-party platforms</div>
                    <div className={styles.subBox}>Real-time responsiveness to business events</div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  {/* Placeholder for Card Image */}
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
                    [Image Placeholder]
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Hyper Automation of Business Operations</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS combines RPA, AI and ML, NLP, and analytics to automate entire value chains, not just isolated tasks.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Significant reduction in cycle times and operational costs</div>
                    <div className={styles.subBox}>Improved accuracy and compliance</div>
                    <div className={styles.subBox}>Scalable automation across finance, HR, supply chain</div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  {/* Placeholder for Card Image */}
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
                    [Image Placeholder]
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Data-Driven Decision Intelligence</h3>
                    <p className={styles.cardDesc}>
                      We embed advanced analytics and AI models into workflows, enabling systems to make contextual, real-time decisions.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Predictive and prescriptive insights at the point of action</div>
                    <div className={styles.subBox}>Enhanced decision quality and speed</div>
                    <div className={styles.subBox}>Ability to respond proactively to risks and opportunities</div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className={styles.solutionCard}>
                <div className={styles.cardImageContainer}>
                  {/* Placeholder for Card Image */}
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
                    [Image Placeholder]
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>Human and AI Collaboration</h3>
                    <p className={styles.cardDesc}>
                      Hadron GBS ensures automation augments human capability, enabling teams to focus on strategic, high-value work.
                    </p>
                  </div>
                  <div className={styles.subBoxesContainer}>
                    <div className={styles.subBox}>Increased workforce productivity and engagement</div>
                    <div className={styles.subBox}>Better exception handling through human-in-the-loop</div>
                    <div className={styles.subBox}>Accelerated innovation and problem-solving</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* EXECUTION GRID SECTION (Structured Framework) */}
          <section className={styles.executionSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                A Structured Framework for <br />
                <span className={styles.highlightOrange}>Autonomous Enterprise Operations</span>
              </h2>
              <p className={styles.sectionSubtitle} style={{ marginTop: '1rem', maxWidth: '800px', marginInline: 'auto' }}>
                Our approach integrates process, data, and technology to deliver value faster, reduce risk, and build scalable enterprise platforms.
              </p>
            </div>
            
            <div className={styles.executionGrid}>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Discover</h4>
                <p className={styles.execDesc}>Identify high-impact automation opportunities and assess process maturity.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Design</h4>
                <p className={styles.execDesc}>Architect intelligent workflows and agentic AI models aligned to business goals.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Deploy</h4>
                <p className={styles.execDesc}>Implement scalable automation with defined governance and integration.</p>
              </div>
              <div className={styles.execCard}>
                <h4 className={styles.execTitle}>Evolve</h4>
                <p className={styles.execDesc}>Continuously optimize through learning systems and performance insights.</p>
              </div>
            </div>
          </section>

          {/* WHY HADRON BLOCK */}
          <section className={styles.infoBlock}>
            <div className={styles.infoContent}>
              {/* Image Placeholder */}
              <div className={styles.infoImageWrapper}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
                  [Image Placeholder]
                </div>
              </div>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Why Hadron GBS for Intelligent Automation</h2>
                <p className={styles.infoDesc}>
                  From RPA to agentic AI and enterprise orchestration, our teams bring certified expertise across the full automation stack.
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Expertise in combining RPA, AI, and enterprise orchestration</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Outcome driven approach focused on measurable business impact</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Proven ability to scale automation across complex, global enterprises</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Strong governance, security, and ethical AI frameworks</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* MEASURABLE BUSINESS IMPACT BLOCK */}
          <section className={styles.infoBlock} style={{ paddingTop: 0 }}>
            <div className={styles.infoContent}>
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>Measurable Enterprise Impact Through Agentic AI</h2>
                <ul className={styles.bulletList} style={{ marginTop: '1rem' }}>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>30-50% reduction in manual effort across operations</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Faster, more accurate decision-making at scale</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Lower operational costs with higher process efficiency</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Increased agility to respond to market changes</span>
                  </li>
                  <li className={styles.bulletItem}>
                    <ChevronsRight className={styles.bulletIcon} size={20} />
                    <span>Foundation for a truly autonomous enterprise</span>
                  </li>
                </ul>
              </div>
              {/* Image Placeholder */}
              <div className={styles.infoImageWrapper}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
                  [Image Placeholder]
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* BOTTOM CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Transform Your Operations From</h2>
          <h2 className={`${styles.ctaTitle} ${styles.highlightOrange}`}>Automated to Autonomous</h2>
          <p className={styles.ctaDesc}>
            Leverage agentic AI to drive intelligent, scalable, and resilient business outcomes.
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
