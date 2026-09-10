# Page: Home

## Outgoing Links
- [/services](/services)
- [/contact](/contact)

## Images & Media
- https://res.cloudinary.com/ax6dtcht/video/upload/v1786108868/Untitled_design_czx0vh.mp4
- https://res.cloudinary.com/ax6dtcht/image/upload/v1785324428/hadron_logo_white_wwzyij.png
- https://res.cloudinary.com/ax6dtcht/image/upload/v1785324497/favicon-hadron_g5wrvr.png

## Text Content
```text


--- Source: src/app/page.tsx ---

{/* ── ALPY-STYLE PARTNER RING (NEW HERO) ── */}

{/* ── INTERACTIVE CANVAS SECTION (NEW) ── */}

{/* ── WHY HADRON GBS (Advantage) ── */}

{/* ── ALPY-STYLE STICKY SOLUTIONS ── */}

{/* ── CORE SERVICES ── */}

{/* ── LANGUAGE REEL + zooming globe ── */}

{/* ── CONTACT CTA ── */}

--- Source: src/app/components/HeroSection/HeroSection.tsx ---

Where Challenges

Meet Intelligence.

},
  { key: 'intro-1', node:

Powered by

Hadron GBS

},
  { key: 'intro-2', node:

AI That Works

Beside You

},
  { key: 'intro-3', node:

Designed for

Simplicity

},
  { key: 'intro-4', node:

Connecting IT.

AI. Quantum.

},
  { key: 'intro-5', node:

Build

What's Next

}
];

export default function HeroSection() {
  const [activeCaptionIndex, setActiveCaptionIndex] = useState

(0);
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const [isLoadingFinished, setIsLoadingFinished] = useState(false);
  const videoRef = useRef

{/* Background Video */}

{/* Darkening Overlay for Video (appears after intro) */}

{/* Gradient Overlay */}

{/* Intro Elements (Logo + Captions) */}

{/* Static Logo during intro */}

{!isIntroFinished && isLoadingFinished && (

{/* Cycling Captions */}

{!isIntroFinished && isLoadingFinished && activeCaptionIndex !== null && (

{INTRO_CAPTIONS[activeCaptionIndex].node}

{/* Skip Button */}

{!isIntroFinished && (

Skip Intro ↗

{/* Main Content Box */}

{isIntroFinished && (

{/* Headline */}

Connecting Enterprise

Systems That Matter

{/* Sub copy */}

We consult, build, and manage enterprise platforms so digital and cloud systems run reliably every day.

{/* Action Row: CTAs */}

{/* CTAs */}

Explore Services

{/* Marquee Section exactly 10px above bottom of Hero section */}

{isIntroFinished && (

{/* Loading Screen Overlay */}

{!isLoadingFinished && (

Hadron GBS

--- Source: src/app/components/FeatureScroll/FeatureScrollSection.tsx ---

Salesforce

Tailored CRM implementations

DevOps

Faster application releases

IT Service Management

Enterprise Services Management

IT Operations Management

Solution-agnostic approach

Robotic Process Automation

Realigning processes with automation

1rem

2rem

{/* ── Section Header ── */}

OUR EXPERTISE

{activeIndex + 1} / {FEATURES.length}

{/* ── Horizontal Carousel Track ── */}

{/* Left Image */}

{/* Right Text */}

{feature.title}

{feature.body}

Read More ↗

--- Source: src/app/components/WhyHadronSection/WhyHadronSection.tsx ---

Architecture-Led Delivery

We treat every engagement as a complex systems challenge, rather than a mere implementation task. Our elite enterprise architects design for structural integrity, operational coherence, and long-term platform health. By embedding strict governance into our pipelines, we ensure the digital cores we build are highly scalable, secure, and fiercely resilient against technical debt.

Outcome-Driven Accountability

Implementation isn't enough; we measure success strictly by business impact. We align our delivery model with your core strategic objectives from day one, defining success through hard KPIs like MTTR reduction and improved CSAT. We tie our operational success directly to yours, staying ruthlessly accountable to these metrics at every stage of the journey.

GenAI-Powered Transformation

We are pioneering the next era of enterprise operations by natively embedding intelligent automation into ServiceNow, Salesforce, and SAP workflows. Our custom GenAI integrations transform static processes into dynamic, self-optimizing ecosystems that reduce manual overhead, accelerate decisions, and unlock new dimensions of operational efficiency.

Lifecycle Accountability

We refuse to simply deploy and walk away. We adapt our operating model to seamlessly match your evolving business priorities, providing continuous, end-to-end accountability from day-zero architecture through post-deployment hypercare and ongoing managed services. We stand by our builds, ensuring your enterprise platforms evolve flawlessly as your business scales.

(min-width: 768px)

12vh

45%

calc(45% - 55px)

16px

{
  const points = [];
  const offset = -Math.PI / 2 - Math.PI / sides;
  for (let i = 0; i

(null);
  const panRef = useRef

(null);
  const rollerRef = useRef

(null);
  const polygonRef = useRef

(null);
  const circleRef = useRef

{`
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
      `}

{/* Top-left header: Single line, right side empty */}

The

Hadron

Advantage

{/* Full-screen track container pushing content to bottom */}

{/* Global Dashed Guideline passing perfectly through the origin dot */}

{/* Rolling Geometric Shape */}

{/* Morphing Polygon Layer */}

{/* Perfect Circle Layer (Faded in during final phase) */}

{/* Persistent Center Pivot Dot */}

{/* Cards Grid Architecture */}

{/* Clean Top Number Badge anchored near top */}

{item.num}

{/* Spacer to push content to the bottom */}

{/* Card Title & Body Area (Fixed height ensures perfect alignment) */}

{item.title}

{item.desc}

--- Source: src/app/components/InteractiveBento/InteractiveBento.tsx ---

Architecture-Led Delivery

We treat every engagement as a systems problem. Our architects design for structure, coherence, and long-term platform health.

Outcome-Driven Accountability

We define success through measurable KPIs from day one (MTTR, CSAT, throughput) and stay accountable to them.

GenAI-Powered Transformation

Embedding automation across ServiceNow, Salesforce, and SAP.

Flexible Engagement Models and Lifecycle Accountability

We adapt our operating model to match your business priorities, providing end-to-end accountability from hypercare to managed services to keep your platforms continually optimized.

{card.title}

{card.desc}

{(card.title === "Flexible Engagement Models" || card.title === "Outstanding Support") && (

Learn More ↗

--- Source: src/app/components/CoreValuesSection/CoreValuesSection.tsx ---

P1

Predictive

We anticipate platform risks, technology shifts, and organizational needs before they become problems. Leveraging AI-driven analytics, we forecast IT demands and mitigate bottlenecks proactively.

P2

Proactive

We identify improvement opportunities and surface them to clients without waiting to be asked. Our teams continuously audit your infrastructure to ensure zero downtime and optimal performance.

P3

Progressive

We continually expand our capabilities from ITSM to GenAI to keep clients at the forefront. Innovation is in our DNA, ensuring your enterprise scales with the latest technological breakthroughs.

P4

Perfection

We hold ourselves to the highest standards of quality, craftsmanship, and engineering discipline. Every deployment and architectural decision is meticulously reviewed.

(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (

{/* ── Header ── */}

Mission &amp; Vision

The 4 Ps of Hadron

Our core values form the foundation of how we operate, deliver, and partner with our clients.

{/* ── Cards ── */}

{/* Content */}

{card.p}

{card.title}

{card.desc}

--- Source: src/app/components/CoreServicesSection/CoreServicesSection.tsx ---

{card.quote}

{card.author}

{card.company}

);
}

export default function CoreServicesSection() {
  return (

{/* Header */}

What

Our Clients

Say About Us...

{/* Dual Row Marquee */}

--- Source: src/app/components/AssetsOfExcellence/AssetsOfExcellenceSection.tsx ---

Our Assets Of Excellence

Uncompromising Quality

Maximum Value, Optimal Cost

Tailored to Your Success

Assets of Excellence

{asset.tag}

{asset.title}

{asset.body}

--- Source: src/app/components/LanguageScroll/LanguageScrollSection.tsx ---

Global Presence

{/* Text sits on the LEFT — GlobalGlobe renders the globe on the RIGHT via fixed canvas */}

{currentItem.text}

{currentItem.sub}

{/* Progress dots */}

{/* Manual Navigation Controls for accessibility */}

--- Source: src/app/components/CtaSection/CtaSection.tsx ---

{title || "Ready to transform your business?"}

{subtitle || "Let's collaborate to build the future of your enterprise with our world-class IT solutions."}

{buttonText || "Contact Us Today"}

&rarr;
```
