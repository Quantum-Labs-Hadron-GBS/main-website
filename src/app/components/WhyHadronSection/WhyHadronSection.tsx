"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const advantages = [
  {
    num: "01",
    title: "Architecture-Led Delivery",
    desc: "We approach every engagement with an architecture-first mindset. Our solutions are designed for scalability, security, integration, governance and long-term platform health - helping reduce complexity and technical debt as your business evolves."
  },
  {
    num: "02",
    title: "Outcome-Driven Accountability",
    desc: "We align technology delivery with measurable business outcomes from the start. Clear KPIs such as improved service experience, faster resolution, greater automation and operational efficiency - help ensure our solutions deliver meaningful and measurable value."
  },
  {
    num: "03",
    title: "AI-Powered Transformation",
    desc: "We bring AI, GenAI, Agentic AI and intelligent automation into enterprise platforms and workflows. By combining platform capabilities with practical AI use cases, we help reduce manual effort, accelerate decisions, improve user experiences and drive operational efficiency."
  },
  {
    num: "04",
    title: "Lifecycle Accountability",
    desc: "Our responsibility extends beyond implementation. From architecture and deployment to hypercare, optimization and managed services - we provide end-to-end support to keep your platforms reliable, relevant and aligned with evolving business priorities."
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
  const headerRef = useRef<HTMLDivElement>(null);
  const rollerRef = useRef<HTMLDivElement>(null);
  const polygonRef = useRef<SVGPolygonElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".adv-card") as HTMLElement[];

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

        // Pin length in px (GSAP ignores "vh" in "+=" offsets, so the old "+=800vh" was 800px)
        const PIN_DISTANCE = 800;
        // Start animating while the section is still entering: once its top reaches 75% of the viewport
        const START_VIEWPORT_RATIO = 0.75;

        // Pin is its own trigger so the animation can begin before the pin engages
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${PIN_DISTANCE}`,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top ${START_VIEWPORT_RATIO * 100}%`,
            // End exactly where the pin releases
            end: () => `+=${window.innerHeight * START_VIEWPORT_RATIO + PIN_DISTANCE}`,
            scrub: 1.5, // Eased scrub weight for lightness
            invalidateOnRefresh: true
          }
        });

        // If on mobile, pan the container horizontally to create a parallax swipe effect
        if (isMobile) {
          tl.to(panRef.current, {
            // window.innerWidth - 64 accounts for the 2rem (32px) padding on both sides
            x: () => -(panRef.current!.offsetWidth - (window.innerWidth - 64)),
            ease: "none",
            duration: 0.75
          }, 0.25); // Delay start so the 1st card grows fully before it slides left
        }

        // Cards grow to 72vh, but never past the heading + tagline above them (which can wrap on
        // narrow/short screens). Measured on each refresh so it adapts to any viewport.
        const cardHeight = () => {
          const header = headerRef.current;
          const pan = panRef.current;
          if (!header || !pan) return window.innerHeight * 0.72;
          const padBottom = parseFloat(getComputedStyle(pan).paddingBottom) || 0;
          const available = pan.getBoundingClientRect().bottom - padBottom - header.getBoundingClientRect().bottom - 24;
          const height = Math.max(0, Math.min(window.innerHeight * 0.72, available));

          // Run the dashed guideline + roller through the middle of the cards' empty upper area
          const textArea = pan.querySelector<HTMLElement>(".adv-card-text")?.offsetHeight ?? 0;
          const cardTop = pan.clientHeight - padBottom - height;
          pan.style.setProperty("--adv-line", `${cardTop + Math.max(0, height - textArea) / 2}px`);
          return height;
        };

        // 1. Simultaneous Staggered Card Growth from absolute bottom
        tl.to(cards[0], { height: cardHeight, ease: "power2.out", duration: 0.25 }, 0.00);
        tl.to(cards[1], { height: cardHeight, ease: "power2.out", duration: 0.50 }, 0.00);
        tl.to(cards[2], { height: cardHeight, ease: "power2.out", duration: 0.75 }, 0.00);
        tl.to(cards[3], { height: cardHeight, ease: "power2.out", duration: 1.00 }, 0.00);

        // 2. Synchronized Roller X Translation & Locked Rotation (Over full 1.0 duration)
        tl.to(rollerRef.current, {
          // Roller size is in rem (scales with screen), so measure it rather than assuming 110px
          x: () => (panRef.current ? panRef.current.offsetWidth - (rollerRef.current?.offsetWidth ?? 110) : 0),
          rotation: () => {
            // Circumferential proportion rotation: (Distance / Circumference) * 360
            const size = rollerRef.current?.offsetWidth ?? 110;
            const dist = panRef.current ? panRef.current.offsetWidth - size : 1000;
            return (dist / (size * Math.PI)) * 360;
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
        borderBottomLeftRadius: '2.5rem',
        borderBottomRightRadius: '2.5rem',
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
          .adv-card-text {
            transform: translateY(-8px);
          }
        }
      `}</style>
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          padding: '0 2rem',
          borderBottomLeftRadius: '2.5rem',
          borderBottomRightRadius: '2.5rem'
        }}
      >
        <div ref={headerRef} style={{ position: 'absolute', top: '12vh', left: '2rem', right: '2rem', zIndex: 20 }}>
          <h2
            className="adv-title"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 700,
              color: '#16325F',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
              marginBottom: '0.5rem'
            }}
          >
            The <span style={{ color: '#F17943' }}>Hadron</span> Advantage
          </h2>
          <p
            style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#475569',
              letterSpacing: '0.02em'
            }}
          >
            Architect it right → Deliver measurable outcomes → Accelerate with AI → Own the lifecycle
          </p>
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
            paddingBottom: '1.875rem'
          }}
        >
          {/* Global Dashed Guideline passing perfectly through the origin dot */}
          <svg
            style={{
              position: 'absolute',
              top: 'var(--adv-line, 45%)',
              left: 0,
              width: '100%',
              height: '2px',
              zIndex: 9
            }}
          >
            <line x1="0" y1="1" x2="100%" y2="1" stroke="rgba(241, 121, 67, 0.4)" strokeWidth="1" strokeDasharray="6 6" />
          </svg>

          {/* Rolling Geometric Shape */}
          <div
            ref={rollerRef}
            style={{
              position: 'absolute',
              top: 'calc(var(--adv-line, 45%) - 3.4375rem)', // Centered on the guideline (half the shape's size above it)
              left: 0,
              width: '6.875rem',
              height: '6.875rem',
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
                fill="#F17943"
                stroke="#F17943"
                strokeWidth="2"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              {/* Perfect Circle Layer (Faded in during final phase) */}
              <circle
                ref={circleRef}
                cx="50" cy="50" r="48"
                fill="#F17943"
                stroke="#F17943"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                opacity="0"
              />
              {/* Persistent Center Pivot Dot */}
              <circle cx="50" cy="50" r="3" fill="#ffffff" />
            </svg>
          </div>

          {/* Cards Grid Architecture */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
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
                    border: '1px solid rgba(241, 121, 67, 0.5)',
                    width: '100%',
                    height: '0px', // Starts completely from the bottom
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '1rem',
                    willChange: 'height',
                    transformOrigin: 'bottom',
                    boxShadow: '0 -10px 30px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >


                  {/* Spacer to push content to the bottom */}
                  <div style={{ flex: 1, minHeight: '1.5rem' }} />

                  {/* Card Title & Body Area (Fixed height ensures perfect alignment) */}
                  <div
                    className="adv-card-text"
                    style={{
                      width: '100%',
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      color: '#16325F',
                      height: '18.5rem',
                      flexShrink: 0
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em',
                        color: '#16325F',
                        minHeight: '3.36rem' // Ensure title consistently takes 2 lines of space
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
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
