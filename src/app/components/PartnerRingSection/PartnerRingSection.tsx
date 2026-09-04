"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useAnimationFrame, useMotionValue, useSpring } from "framer-motion";
import styles from "./PartnerRingSection.module.css";

const LOGOS = {
  servicenow: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327265/ServiceNow-Logo_cqo5uy.png",
  salesforce: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327266/Salesforce-Logo_j4dnwn.png",
  sap: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  microsoft: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  bmc: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327265/Logo_BMC_Software_yuz81r.png",
  aws: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  freshworks: "https://res.cloudinary.com/ax6dtcht/image/upload/v1785327265/freshworks-logo_brandlogos.net_c6t5u_vu8yih.png",
  atlassian: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787736501/Atlassian_deruww.png",
  ivanti: "https://res.cloudinary.com/dyhlpxwwo/image/upload/v1787734310/Ivanti_esdywa.png",
};

export default function PartnerRingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply spring physics for "drag" and smoothness
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Ring Rotations - Combine Scroll and Time
  const rotate1 = useMotionValue(0);
  const rotate1Rev = useMotionValue(0);
  
  const rotate2 = useMotionValue(0);
  const rotate2Rev = useMotionValue(0);
  
  const rotate3 = useMotionValue(0);
  const rotate3Rev = useMotionValue(0);

  // Scroll mapping (reduced further to 45 degrees so it's barely faster, and uses smooth spring)
  const scrollRotate1 = useTransform(smoothScroll, [0, 1], [0, 45]);
  const scrollRotate2 = useTransform(smoothScroll, [0, 1], [0, -35]);
  const scrollRotate3 = useTransform(smoothScroll, [0, 1], [0, 25]);

  useAnimationFrame((time) => {
    // Constant background rotation (time is in ms, so multiply by small float)
    const timeRotate1 = time * 0.01;   // Clockwise
    const timeRotate2 = time * -0.008; // Counter-clockwise
    const timeRotate3 = time * 0.006;  // Clockwise

    // Combine time rotation + scroll rotation
    const r1 = timeRotate1 + scrollRotate1.get();
    const r2 = timeRotate2 + scrollRotate2.get();
    const r3 = timeRotate3 + scrollRotate3.get();

    rotate1.set(r1);
    rotate1Rev.set(-r1);

    rotate2.set(r2);
    rotate2Rev.set(-r2);

    rotate3.set(r3);
    rotate3Rev.set(-r3);
  });

  return (
    <section className={styles.wrapper} ref={containerRef} style={{ position: 'relative' }}>
      <div className={styles.stickyContainer}>
        
        {/* Central Text */}
        <div className={styles.centerTextContainer}>
          <h2 className={styles.title}>
            Build with your Enterprise Partners.<br/>
            Add taste with <span className={styles.highlight}>Hadron.</span>
          </h2>
        </div>

        {/* ORBITAL RINGS */}
        <div className={styles.ringsWrapper}>
          
          {/* Ring 1 (Inner) */}
          <motion.div className={`${styles.ring} ${styles.ring1}`} style={{ rotate: rotate1 }}>
            {/* Top Left */}
            <div className={styles.logoWrapper} style={{ top: '15%', left: '15%', transform: 'translate(-50%, -50%)' }}>
              <motion.div className={styles.logoCard} style={{ rotate: rotate1Rev }}>
                <img src={LOGOS.aws} alt="AWS" className={styles.logoImg} />
              </motion.div>
            </div>
            {/* Bottom Right */}
            <div className={styles.logoWrapper} style={{ top: '85%', left: '85%', transform: 'translate(-50%, -50%)' }}>
              <motion.div className={styles.logoCard} style={{ rotate: rotate1Rev }}>
                <img src={LOGOS.servicenow} alt="ServiceNow" className={styles.logoImg} style={{ width: '80%', height: '80%' }} />
              </motion.div>
            </div>
            {/* Bottom Left */}
            <div className={styles.logoWrapper} style={{ top: '85%', left: '15%', transform: 'translate(-50%, -50%)' }}>
              <motion.div className={styles.logoCard} style={{ rotate: rotate1Rev }}>
                <img src={LOGOS.atlassian} alt="Atlassian" className={styles.logoImg} style={{ width: '80%', height: '80%' }} />
              </motion.div>
            </div>
            {/* Atoms */}
            <div className={styles.dot} style={{ top: '50%', left: '0%', transform: 'translate(-50%, -50%)' }}></div>
            <div className={styles.dot} style={{ top: '50%', left: '100%', transform: 'translate(-50%, -50%)' }}></div>
          </motion.div>

          {/* Ring 2 (Middle) */}
          <motion.div className={`${styles.ring} ${styles.ring2}`} style={{ rotate: rotate2 }}>
            {/* Center Left */}
            <div className={styles.logoWrapper} style={{ top: '50%', left: '0%', transform: 'translate(-50%, -50%)' }}>
              <motion.div className={styles.logoCard} style={{ rotate: rotate2Rev }}>
                <img src={LOGOS.salesforce} alt="Salesforce" className={styles.logoImg} />
              </motion.div>
            </div>
            {/* Center Right */}
            <div className={styles.logoWrapper} style={{ top: '50%', left: '100%', transform: 'translate(-50%, -50%)' }}>
              <motion.div className={styles.logoCard} style={{ rotate: rotate2Rev }}>
                <img src={LOGOS.bmc} alt="BMC" className={styles.logoImg} />
              </motion.div>
            </div>
            {/* Top Center */}
            <div className={styles.logoWrapper} style={{ top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <motion.div className={styles.logoCard} style={{ rotate: rotate2Rev }}>
                <img src={LOGOS.freshworks} alt="Freshworks" className={styles.logoImg} style={{ width: '75%', height: '75%' }} />
              </motion.div>
            </div>
            {/* Atoms */}
            <div className={styles.dot} style={{ top: '20%', left: '80%', transform: 'translate(-50%, -50%)' }}></div>
            <div className={styles.dot} style={{ top: '80%', left: '20%', transform: 'translate(-50%, -50%)' }}></div>
          </motion.div>

          {/* Ring 3 (Outer) */}
          <motion.div className={`${styles.ring} ${styles.ring3}`} style={{ rotate: rotate3 }}>
            {/* Top Right */}
            <div className={styles.logoWrapper} style={{ top: '15%', left: '85%', transform: 'translate(-50%, -50%)' }}>
              <motion.div className={styles.logoCard} style={{ rotate: rotate3Rev }}>
                <img src={LOGOS.sap} alt="SAP" className={styles.logoImg} />
              </motion.div>
            </div>
            {/* Bottom Left */}
            <div className={styles.logoWrapper} style={{ top: '85%', left: '15%', transform: 'translate(-50%, -50%)' }}>
              <motion.div className={styles.logoCard} style={{ rotate: rotate3Rev }}>
                <img src={LOGOS.microsoft} alt="Microsoft" className={styles.logoImg} />
              </motion.div>
            </div>
            {/* Top Left */}
            <div className={styles.logoWrapper} style={{ top: '15%', left: '15%', transform: 'translate(-50%, -50%)' }}>
              <motion.div className={styles.logoCard} style={{ rotate: rotate3Rev }}>
                <img src={LOGOS.ivanti} alt="Ivanti" className={styles.logoImg} style={{ width: '75%', height: '75%' }} />
              </motion.div>
            </div>
            {/* Atoms */}
            <div className={styles.dot} style={{ top: '95%', left: '70%', transform: 'translate(-50%, -50%)' }}></div>
            <div className={styles.dot} style={{ top: '5%', left: '30%', transform: 'translate(-50%, -50%)' }}></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
