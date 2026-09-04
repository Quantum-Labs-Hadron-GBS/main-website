"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const advantages = [
  {
    num: "01",
    title: "Architecture-Led Delivery",
    desc: "We treat every engagement as a systems problem. Our architects design for structure, coherence, and long-term platform health."
  },
  {
    num: "02",
    title: "Outcome-Driven Accountability",
    desc: "We define success through measurable KPIs from day one (MTTR, CSAT, throughput) and stay accountable to them."
  },
  {
    num: "03",
    title: "GenAI-Powered Transformation",
    desc: "Embedding automation across ServiceNow, Salesforce, and SAP."
  },
  {
    num: "04",
    title: "Lifecycle Accountability",
    desc: "We adapt our operating model to match your business priorities, providing end-to-end accountability from hypercare to managed services."
  }
];

// 32-point normalized polygon generator using Radial Raycasting
// This guarantees that points map strictly radially between shapes, eliminating any mid-morph twisting!
const getPoints = (sides: number) => {
  const points = [];
  const offset = -Math.PI / 2 - Math.PI / sides;
  for (let i = 0; i < 32; i++) {
    const angle = (i / 32) * Math.PI * 2 + offset;
    const sectorAngle = (Math.PI * 2) / sides;
    let theta = ((angle - offset) % (Math.PI * 2));
    if (theta < 0) theta += Math.PI * 2;
    const localTheta = theta % sectorAngle;
    const r = 48 * Math.cos(sectorAngle / 2) / Math.cos(localTheta - sectorAngle / 2);
    const x = 50 + r * Math.cos(angle);
    const y = 50 + r * Math.sin(angle);
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return points.join(" ");
};

export default function WhyHadronSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panRef = useRef<HTMLDivElement>(null);
  const rollerRef = useRef<HTMLDivElement>(null);
  const polygonRef = useRef<SVGPolygonElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".adv-card");

      // Initial state: Cards start completely from the absolute bottom (0px)
      gsap.set(cards, { height: '0px' });
      gsap.set(rollerRef.current, { x: 0, rotation: 0 });
      gsap.set(polygonRef.current, { attr: { points: getPoints(4) }, opacity: 1 });
      gsap.set(circleRef.current, { opacity: 0 });

      const mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)"
      }, (context) => {
        const { isMobile } = context.conditions as { isMobile: boolean };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=800vh", // Extended scroll runway for buttery deliberate scrolling
            pin: true,
            scrub: 1.5, // Eased scrub weight for lightness
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        // If on mobile, pan the container horizontally to create a parallax swipe effect
        if (isMobile) {
          tl.to(panRef.current, {
            // window.innerWidth - 64 accounts for the 2rem (32px) padding on both sides
            x: () => -(panRef.current!.offsetWidth - (window.innerWidth - 64)),
            ease: "none",
            duration: 1.0
          }, 0.00);
        }

        // 1. Simultaneous Staggered Card Growth from absolute bottom
        tl.to(cards[0], { height: '72vh', ease: "power2.out", duration: 0.25 }, 0.00); 
        tl.to(cards[1], { height: '72vh', ease: "power2.out", duration: 0.50 }, 0.00); 
        tl.to(cards[2], { height: '72vh', ease: "power2.out", duration: 0.75 }, 0.00); 
        tl.to(cards[3], { height: '72vh', ease: "power2.out", duration: 1.00 }, 0.00); 

        // 2. Synchronized Roller X Translation & Locked Rotation (Over full 1.0 duration)
        tl.to(rollerRef.current, {
          x: () => (panRef.current ? panRef.current.offsetWidth - 110 : 0),
          rotation: () => {
            // Circumferential proportion rotation: (Distance / Circumference) * 360
            const dist = panRef.current ? panRef.current.offsetWidth - 110 : 1000;
            return (dist / (110 * Math.PI)) * 360;
          },
          ease: "none",
          duration: 1.00 
        }, 0.00);

        // 3. 7-Step Sharp Regular Polygon Morphing
        const step = 1.0 / 7;
        tl.to(polygonRef.current, { attr: { points: getPoints(5) }, ease: "none", duration: step }, 0 * step); // Sq -> Pentagon
        tl.to(polygonRef.current, { attr: { points: getPoints(6) }, ease: "none", duration: step }, 1 * step); // Pentagon -> Hexagon
        tl.to(polygonRef.current, { attr: { points: getPoints(7) }, ease: "none", duration: step }, 2 * step); // Hexagon -> Septagon
        tl.to(polygonRef.current, { attr: { points: getPoints(8) }, ease: "none", duration: step }, 3 * step); // Septagon -> Octagon
        tl.to(polygonRef.current, { attr: { points: getPoints(9) }, ease: "none", duration: step }, 4 * step); // Octagon -> Nonagon
        tl.to(polygonRef.current, { attr: { points: getPoints(10) }, ease: "none", duration: step }, 5 * step); // Nonagon -> Decagon
        tl.to(polygonRef.current, { attr: { points: getPoints(32) }, ease: "none", duration: step }, 6 * step); // Decagon -> Circle approx
        
        // Phase 4: Crossfade to perfect SVG circle for perfect rolling finish
        tl.to(polygonRef.current, { opacity: 0, ease: "none", duration: 0.05 }, 1.00 - 0.05);
        tl.to(circleRef.current, { opacity: 1, ease: "none", duration: 0.05 }, 1.00 - 0.05);

        // 4. Section Scroll Release Hold Buffer (15% buffer at the end)
        tl.to({}, { duration: 0.15 }, 1.00);
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      style={{ 
        width: '100%', 
        backgroundColor: '#ffffff', 
        minHeight: '100vh',
        zIndex: 10,
        position: 'relative',
        borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
      }}
    >
      <style>{`
        .adv-pan-container {
          width: 100%;
        }
        @media (max-width: 767px) {
          .adv-pan-container {
            width: 320vw; /* Expands container to allow horizontal pan on mobile */
          }
          .adv-title {
            font-size: 2.2rem !important;
            white-space: normal !important;
            max-width: 80vw;
            line-height: 1.1 !important;
          }
        }
      `}</style>
      <div 
        style={{ 
          width: '100%', 
          height: '100vh', 
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          padding: '0 2rem',
          borderBottomLeftRadius: '40px',
          borderBottomRightRadius: '40px'
        }}
      >
        {/* Top-left header: Single line, right side empty */}
        <div style={{ position: 'absolute', top: '12vh', left: '2rem', zIndex: 20 }}>
          <h2 
            className="adv-title"
            style={{ 
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
              fontWeight: 700, 
              color: '#0f172a', 
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap'
            }}
          >
            The <span style={{ color: '#F47C36' }}>Hadron</span> Advantage
          </h2>
        </div>

        {/* Full-screen track container pushing content to bottom */}
        <div 
          ref={panRef}
          className="adv-pan-container"
          style={{
            position: 'relative',
            flex: 1,
            display: 'flex',
            alignItems: 'flex-end',
            paddingBottom: '12px'
          }}
        >
          {/* Global Dashed Guideline passing perfectly through the origin dot */}
          <svg 
            style={{ 
              position: 'absolute', 
              top: '45%', 
              left: 0, 
              width: '100%', 
              height: '2px', 
              zIndex: 9 
            }}
          >
            <line x1="0" y1="1" x2="100%" y2="1" stroke="rgba(244, 124, 54, 0.4)" strokeWidth="1" strokeDasharray="6 6" />
          </svg>

          {/* Rolling Geometric Shape */}
          <div 
            ref={rollerRef}
            style={{
              position: 'absolute',
              top: 'calc(45% - 55px)', // Center is at 45%. Shape is 110x110. Top is 55px above 45%.
              left: 0,
              width: '110px',
              height: '110px',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              willChange: 'transform',
              transform: 'translate3d(0,0,0)'
            }}
          >
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              {/* Morphing Polygon Layer */}
              <polygon 
                ref={polygonRef}
                points={getPoints(4)} 
                fill="none" 
                stroke="#F47C36" 
                strokeWidth="2"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              {/* Perfect Circle Layer (Faded in during final phase) */}
              <circle 
                ref={circleRef}
                cx="50" cy="50" r="48"
                fill="none"
                stroke="#F47C36"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                opacity="0"
              />
              {/* Persistent Center Pivot Dot */}
              <circle cx="50" cy="50" r="3" fill="#F47C36" />
            </svg>
          </div>

          {/* Cards Grid Architecture */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px', 
              width: '100%',
              height: '100%',
              alignItems: 'flex-end',
              zIndex: 5
            }}
          >
            {advantages.map((item, index) => {
              return (
                  <div 
                  key={index} 
                  className="adv-card"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(244, 124, 54, 0.5)',
                    width: '100%',
                    height: '0px', // Starts completely from the bottom
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    willChange: 'height',
                    transformOrigin: 'bottom',
                    boxShadow: '0 -10px 30px rgba(0,0,0,0.02)'
                  }}
                >
                  {/* Clean Top Number Badge anchored near top of max height so it never overlaps title when short */}
                    <div 
                    style={{
                      position: 'absolute',
                      bottom: 'calc(72vh - 3.5rem)',
                      left: '1.5rem',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#F47C36'
                    }}
                  >
                    {item.num}
                  </div>

                  {/* Card Title & Body Area (Pinned strictly in lower half) */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      color: '#0f172a'
                    }}
                  >
                    <h3 
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em',
                        color: '#0f172a'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: '#475569'
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
