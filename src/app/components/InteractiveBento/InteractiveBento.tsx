"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './InteractiveBento.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function InteractiveBento() {
  return (
    <div className={styles.bentoContainer}>
      <motion.div 
        className={styles.bentoGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Card 1: Architecture-Led Delivery */}
        <motion.div className={`${styles.bentoCard} ${styles.card1}`} variants={cardVariants}>
          <h3 className={`${styles.cardTitle} ${styles.lightText}`}>Architecture-Led<br/>Delivery</h3>
          <p className={`${styles.cardDesc} ${styles.lightText}`}>
            We treat every engagement as a systems problem. Our architects design for structure, coherence, and long-term platform health.
          </p>
          
          <div className={styles.blueprintMockup}>
             <div className={styles.blueprintHeader}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
             </div>
             <div className={styles.blueprintGrid}>
                <div className={`${styles.bpNode} ${styles.bpNodeMain}`}>Core Engine</div>
                <div className={styles.bpConnection}></div>
                <div className={styles.bpRow}>
                   <div className={styles.bpNode}>Auth</div>
                   <div className={styles.bpNode}>Data</div>
                   <div className={styles.bpNode}>API</div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Card 2: Outcome-Driven Accountability */}
        <motion.div className={`${styles.bentoCard} ${styles.card2}`} variants={cardVariants}>
          <div className={styles.capexContent}>
            <h3 className={`${styles.cardTitle} ${styles.lightText}`}>Outcome-Driven Accountability</h3>
            <p className={`${styles.cardDesc} ${styles.subtleText}`}>
              We define success through measurable KPIs from day one (MTTR, CSAT, throughput) and stay accountable to them.
            </p>
          </div>
          
          <div className={styles.kpiMockup}>
            <div className={styles.kpiHeader}>
               <span>Live Dashboard</span>
               <span className={styles.kpiStatus}>Syncing</span>
            </div>
            <div className={styles.kpiMain}>
               <div className={styles.kpiStat}>
                  <h4>MTTR</h4>
                  <div className={styles.kpiValue}>-42% <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg></div>
               </div>
               <div className={styles.chartArea}>
                  <div className={styles.bar} style={{height: '40%'}}></div>
                  <div className={styles.bar} style={{height: '60%'}}></div>
                  <div className={styles.bar} style={{height: '30%'}}></div>
                  <div className={styles.bar} style={{height: '80%'}}></div>
                  <div className={`${styles.bar} ${styles.barActive}`} style={{height: '100%'}}></div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: GenAI-Powered Transformation */}
        <motion.div className={`${styles.bentoCard} ${styles.card3}`} variants={cardVariants}>
          <h3 className={`${styles.cardTitle} ${styles.lightText}`}>GenAI-Powered<br/>Transformation</h3>
          <p className={`${styles.cardDesc} ${styles.subtleText}`}>
            Embedding automation across ServiceNow, Salesforce, and SAP.
          </p>
          
          <div className={styles.chatInterface}>
             <div className={`${styles.chatBubble} ${styles.chatUser}`}>Analyze workflow bottlenecks</div>
             <div className={`${styles.chatBubble} ${styles.chatAI}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                Optimizing 14 redundant steps...
             </div>
          </div>
        </motion.div>

        {/* Card 4: Transparent, Collaborative Governance */}
        <motion.div className={`${styles.bentoCard} ${styles.card4}`} variants={cardVariants}>
          <h3 className={`${styles.cardTitle} ${styles.lightText}`}>Collaborative<br/>Governance</h3>
          <p className={`${styles.cardDesc} ${styles.lightText}`}>
            No black boxes. Open patterns and structured governance cadences.
          </p>
          
          <div className={styles.approvalWidget}>
             <div className={styles.approvalItem}>
                <div className={styles.avatar}>JD</div>
                <div className={styles.approvalText}>Architecture Review</div>
                <div className={styles.statusIcon}>✓</div>
             </div>
             <div className={styles.approvalItem}>
                <div className={styles.avatar} style={{background: '#111', color: 'white'}}>AI</div>
                <div className={styles.approvalText}>Security Gate</div>
                <div className={styles.statusIcon}>✓</div>
             </div>
          </div>
        </motion.div>

        {/* Card 5: Rigorous Discovery Before Execution */}
        <motion.div className={`${styles.bentoCard} ${styles.card5}`} variants={cardVariants}>
          <div className={styles.capexContent}>
            <h3 className={`${styles.cardTitle} ${styles.lightText}`}>Rigorous Discovery</h3>
            <p className={`${styles.cardDesc} ${styles.subtleText}`}>
              Decisions grounded in real operating conditions and workflows, not untested assumptions.
            </p>
          </div>
          
          <div className={styles.checklistWidget}>
            <div className={styles.checklistItem}>
              <div className={styles.checkCircle}></div>
              <span>Real Workflows Mapped</span>
            </div>
            <div className={styles.checklistItem}>
              <div className={styles.checkCircle}></div>
              <span>Constraints Identified</span>
            </div>
            <div className={styles.checklistItem}>
              <div className={styles.checkCircle}></div>
              <span>Priorities Aligned</span>
            </div>
          </div>
        </motion.div>

        {/* Card 6: Lifecycle Accountability */}
        <motion.div className={`${styles.bentoCard} ${styles.card6}`} variants={cardVariants}>
          <h3 className={`${styles.cardTitle} ${styles.lightText}`}>Lifecycle<br/>Accountability</h3>
          <p className={`${styles.cardDesc} ${styles.subtleText}`}>
            From hypercare to managed services, keeping platforms optimized.
          </p>
          
          <div className={styles.lifecycleTracker}>
             <div className={styles.lcStep}>
                <div className={`${styles.lcDot} ${styles.lcDone}`}></div>
                <span>Deploy</span>
             </div>
             <div className={styles.lcLine}></div>
             <div className={styles.lcStep}>
                <div className={`${styles.lcDot} ${styles.lcDone}`}></div>
                <span>Hypercare</span>
             </div>
             <div className={styles.lcLine}></div>
             <div className={styles.lcStep}>
                <div className={`${styles.lcDot} ${styles.lcActive}`}></div>
                <span className={styles.lcTextActive}>Managed Ops</span>
             </div>
          </div>
        </motion.div>

        {/* Card 7: Flexible Engagement Models */}
        <motion.div className={`${styles.bentoCard} ${styles.card7}`} variants={cardVariants}>
          <h3 className={`${styles.cardTitle} ${styles.lightText}`}>Flexible Engagement Models</h3>
          <p className={`${styles.cardDesc} ${styles.lightText}`} style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            We adapt our operating model to match your business priorities, not the other way around.
          </p>
          
          <div className={styles.segmentedControl}>
             <div className={styles.segment}>Fixed Scope</div>
             <div className={`${styles.segment} ${styles.segmentActive}`}>Agile Pods</div>
             <div className={styles.segment}>Managed SLA</div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
