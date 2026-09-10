"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CtaSection from "../components/CtaSection/CtaSection";
import styles from "./Careers.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Award, Lightbulb, TrendingUp, MonitorPlay, Briefcase } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const APPLY_LINK = "https://forms.cloud.microsoft/pages/responsepage.aspx?id=soqR6AEZV06ruofihBdMg9qxj7aZxXZOtpgaUpRd6jlUMjY4T0xEVTlKR01XUDVJM0RJTTdJT0JWMC4u&route=shorturl";
  const LINKEDIN_LINK = "https://www.linkedin.com/company/hadron-gbs/";

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <motion.div style={{ y: yBg }} className={styles.heroVideo}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className={styles.heroVideo}
            >
              <source src="https://res.cloudinary.com/dyhlpxwwo/video/upload/v1789019876/give_me_video_animating_this_i_coebsv.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              This Is What It Looks Like to Do Your Best Work.
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Life at Hadron GBS is defined by the quality of the problems we solve, the people we solve them with, and the environment we’ve built to do it. It’s demanding, energizing, and deliberately designed for professionals who want more than a job title.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href={APPLY_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                Apply Now
              </a>
            </motion.div>
          </div>
        </section>

        {/* CULTURE SECTION */}
        <section className={`${styles.section} ${styles.container}`}>
          <div className={styles.splitLayout}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.sectionTitle}>A Culture Built on Craft</h2>
              <p className={styles.sectionDesc}>
                We care deeply about the quality of our work, and that shared commitment creates a culture unlike most consulting environments.
              </p>
              <p className={styles.sectionDesc}>
                Our teams are small enough that your contribution is visible, and large enough that you’re working with some of the most experienced practitioners in the industry. We debate ideas vigorously, support each other unconditionally, and hold each other to a standard we’re all proud of.
              </p>
              <p className={styles.sectionDesc}>
                High performance here doesn’t mean long hours for the sake of it. It means smart work, clear ownership, and the satisfaction of solving genuinely hard problems well.
              </p>
            </motion.div>
            <motion.div 
              className={styles.splitImgWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.splitOrangeAccent}></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Culture at Hadron GBS" className={styles.splitImg} />
            </motion.div>
          </div>
        </section>

        {/* GLOBAL WORK SECTION */}
        <section className={styles.section} style={{ backgroundColor: '#f8fafc' }}>
          <div className={`${styles.container} ${styles.splitLayout}`}>
            <motion.div 
              className={styles.splitImgWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.splitOrangeAccent} style={{ left: '-20px', right: 'auto', backgroundColor: 'rgba(56, 189, 248, 0.1)' }}></div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Global Team" className={styles.splitImg} />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.sectionTitle}>Global Work, Grounded Teams</h2>
              <p className={styles.sectionDesc}>
                With operations spanning UAE, Singapore, India, and the USA, our people regularly collaborate across time zones, cultures, and client contexts. This global exposure doesn’t just look good on a resume — it fundamentally changes how you think about enterprise problems.
              </p>
              <p className={styles.sectionDesc}>
                At the same time, our teams remain tight-knit. We invest in local culture, local leadership, and local community because we know that belonging matters as much as ambition.
              </p>
            </motion.div>
          </div>
        </section>

        {/* LEARNING SECTION */}
        <section className={`${styles.section} ${styles.learningBg}`}>
          <div className={styles.container}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className={styles.sectionTitle}>Learning is How We Compete</h2>
              <p className={styles.sectionDesc} style={{ margin: '0 auto' }}>
                In a field that evolves as fast as enterprise technology, standing still is moving backward. Learning at Hadron GBS is not an HR checkbox; it’s a competitive strategy.
              </p>
            </div>

            <div className={styles.learningGrid}>
              <div className={styles.learningCard}>
                <div className={styles.learningIcon}><Award size={24} /></div>
                <h3 className={styles.learningCardTitle}>Continuous Certification Programs</h3>
                <p className={styles.learningCardDesc}>Sponsored certifications across all major platforms</p>
              </div>
              <div className={styles.learningCard}>
                <div className={styles.learningIcon}><MonitorPlay size={24} /></div>
                <h3 className={styles.learningCardTitle}>Practice-Led Knowledge Sessions</h3>
                <p className={styles.learningCardDesc}>Weekly internal deep-dives hosted by domain experts</p>
              </div>
              <div className={styles.learningCard}>
                <div className={styles.learningIcon}><Briefcase size={24} /></div>
                <h3 className={styles.learningCardTitle}>Client Exposure</h3>
                <p className={styles.learningCardDesc}>Real projects, real stakes, real learning from day one</p>
              </div>
              <div className={styles.learningCard}>
                <div className={styles.learningIcon}><Lightbulb size={24} /></div>
                <h3 className={styles.learningCardTitle}>Innovation Fridays</h3>
                <p className={styles.learningCardDesc}>Dedicated time for exploration, prototyping, and side-of-desk innovation</p>
              </div>
              <div className={styles.learningCard}>
                <div className={styles.learningIcon}><TrendingUp size={24} /></div>
                <h3 className={styles.learningCardTitle}>Leadership Coaching</h3>
                <p className={styles.learningCardDesc}>Structured development for high-potential professionals</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div style={{ marginBottom: '4rem' }}>
              <h2 className={styles.sectionTitle}>How We Work</h2>
              <p className={styles.sectionDesc}>
                We’ve designed our work environment around autonomy, flexibility, and collaboration — because those three things together produce our best outcomes.
              </p>
            </div>

            <div className={styles.workGrid}>
              <motion.div className={styles.workItem} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className={styles.workNum}>01</div>
                <div>
                  <h3 className={styles.workItemTitle}>Hybrid & Remote-First Options</h3>
                  <p className={styles.workItemDesc}>We trust our people to do great work wherever they are.</p>
                </div>
              </motion.div>
              <motion.div className={styles.workItem} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }}>
                <div className={styles.workNum}>02</div>
                <div>
                  <h3 className={styles.workItemTitle}>Agile Delivery Model</h3>
                  <p className={styles.workItemDesc}>Sprint-based POD structure means clear ownership and regular rhythm.</p>
                </div>
              </motion.div>
              <motion.div className={styles.workItem} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.2 }}>
                <div className={styles.workNum}>03</div>
                <div>
                  <h3 className={styles.workItemTitle}>Collaboration Tools</h3>
                  <p className={styles.workItemDesc}>Modern tooling to keep globally distributed teams aligned and connected.</p>
                </div>
              </motion.div>
              <motion.div className={styles.workItem} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.3 }}>
                <div className={styles.workNum}>04</div>
                <div>
                  <h3 className={styles.workItemTitle}>Reasonable Intensity</h3>
                  <p className={styles.workItemDesc}>We work hard when it matters; we don’t manufacture urgency.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WELLBEING AND DIVERSITY (Dark Section) */}
        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.container}>
            <div className={styles.splitLayout}>
              <div>
                <h2 className={styles.sectionTitle}>Employee Experience & Wellbeing</h2>
                <ul className={styles.benefitsList}>
                  <li className={styles.benefitsItem}><CheckCircle2 className={styles.benefitsIcon} /> Comprehensive health coverage — self and family</li>
                  <li className={styles.benefitsItem}><CheckCircle2 className={styles.benefitsIcon} /> Performance-based incentives reviewed annually</li>
                  <li className={styles.benefitsItem}><CheckCircle2 className={styles.benefitsIcon} /> Paid time off policies that encourage actual rest</li>
                  <li className={styles.benefitsItem}><CheckCircle2 className={styles.benefitsIcon} /> Mental health and wellness support resources</li>
                  <li className={styles.benefitsItem}><CheckCircle2 className={styles.benefitsIcon} /> Parental leave that doesn’t require an apology</li>
                </ul>
              </div>
              <div>
                <h2 className={styles.sectionTitle}>Diversity, Equity & Inclusion</h2>
                <p className={styles.sectionDesc}>
                  Hadron GBS is a naturally diverse organization — built across four continents by professionals from dozens of backgrounds, disciplines, and cultures. That diversity isn’t a policy. It’s how we were designed.
                </p>
                <ul className={styles.benefitsList}>
                  <li className={styles.benefitsItem}><CheckCircle2 className={styles.benefitsIcon} style={{ color: '#38bdf8' }} /> Equal opportunity in hiring, promotion, and compensation</li>
                  <li className={styles.benefitsItem}><CheckCircle2 className={styles.benefitsIcon} style={{ color: '#38bdf8' }} /> Inclusive leadership that actively seeks out different perspectives</li>
                  <li className={styles.benefitsItem}><CheckCircle2 className={styles.benefitsIcon} style={{ color: '#38bdf8' }} /> Safe, respectful workplaces across every office and every project team</li>
                  <li className={styles.benefitsItem}><CheckCircle2 className={styles.benefitsIcon} style={{ color: '#38bdf8' }} /> Representation at every level — from delivery teams to the leadership table</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className={styles.section} style={{ backgroundColor: '#f0f4f8' }}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '4rem' }}>Hear From Our Team</h2>
            <div className={styles.testimonialGrid}>
              <motion.div className={styles.testimonialCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className={styles.testimonialQuote}>The level of ownership I have at Hadron — at my stage of career — would have taken me years to get anywhere else.</p>
                <div className={styles.testimonialAuthor}>Consultant, ESM Practice</div>
                <div className={styles.testimonialRole}>India</div>
              </motion.div>
              <motion.div className={styles.testimonialCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }}>
                <p className={styles.testimonialQuote}>I’ve worked at larger firms. The work quality here is higher. And I can actually see the impact.</p>
                <div className={styles.testimonialAuthor}>Senior Engineer, DevOps Practice</div>
                <div className={styles.testimonialRole}>UAE</div>
              </motion.div>
              <motion.div className={styles.testimonialCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.2 }}>
                <p className={styles.testimonialQuote}>It’s a place where you’re trusted from day one. That changes everything.</p>
                <div className={styles.testimonialAuthor}>Delivery Manager</div>
                <div className={styles.testimonialRole}>Singapore</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HIRING PROCESS */}
        <section className={`${styles.section} ${styles.timelineSection}`}>
          <div className={styles.container}>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <h2 className={styles.sectionTitle}>From Application to Day One — Here's Exactly What to Expect.</h2>
              <p className={styles.sectionDesc} style={{ margin: '0 auto' }}>
                We respect your time and your career. Our hiring process is structured, transparent, and designed to help both sides make a confident decision. No black holes. No surprises.
              </p>
            </div>

            <div className={styles.timeline}>
              <motion.div className={styles.timelineItem} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className={styles.timelineDot}>1</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Application</h3>
                  <p className={styles.timelineDesc}>Submit your application via our careers portal. Every application is reviewed by a Talent Partner, not filtered by a keyword scanner. We acknowledge every submission within 2 business days.</p>
                </div>
              </motion.div>
              <motion.div className={styles.timelineItem} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, delay: 0.1 }}>
                <div className={styles.timelineDot}>2</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Initial Screening</h3>
                  <p className={styles.timelineDesc}>A 30-minute call with a Talent Partner to understand your background, motivations, and the role in detail. This is a two-way conversation — we encourage questions. Typically within 1 week of application.</p>
                </div>
              </motion.div>
              <motion.div className={styles.timelineItem} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, delay: 0.2 }}>
                <div className={styles.timelineDot}>3</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Technical / Domain Interview</h3>
                  <p className={styles.timelineDesc}>A structured interview with a senior practitioner from the relevant practice may include a technical assessment, case discussion, or platform-specific scenario walkthrough. Within 1–2 weeks of screening.</p>
                </div>
              </motion.div>
              <motion.div className={styles.timelineItem} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, delay: 0.3 }}>
                <div className={styles.timelineDot}>4</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Leadership / Cultural Fit Interview</h3>
                  <p className={styles.timelineDesc}>A conversation with a Practice Lead or leadership team member. We explore how you think, how you collaborate, and what drives you. Within 1 week of the technical interview.</p>
                </div>
              </motion.div>
              <motion.div className={styles.timelineItem} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, delay: 0.4 }}>
                <div className={styles.timelineDot}>5</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Offer</h3>
                  <p className={styles.timelineDesc}>We move quickly when we find the right person. Your Talent Partner walks you through the offer personally. Expect a competitive, transparent offer with clear compensation, benefits, and start date. Within 3–5 business days of the final interview.</p>
                </div>
              </motion.div>
              <motion.div className={styles.timelineItem} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, delay: 0.5 }}>
                <div className={styles.timelineDot}>6</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Onboarding</h3>
                  <p className={styles.timelineDesc}>Before Day One: welcome kit, system access, and a 30-day plan. On Day One: meet your team, manager, and onboarding buddy. We define what success looks like from the start, for you and for us.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h2 className={styles.finalCtaTitle}>Come Work on Problems That Matter.</h2>
            <p className={styles.finalCtaDesc}>
              Enterprise transformation starts with the right conversation. Tell us where your platforms are falling short.
            </p>
            <div className={styles.btnGroup}>
              <a href={APPLY_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                See Open Role
              </a>
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global CTA Section */}
      <CtaSection title="Ready to Transform Your Business?" subtitle="Let's build the future together." />
      <Footer />
    </>
  );
}
