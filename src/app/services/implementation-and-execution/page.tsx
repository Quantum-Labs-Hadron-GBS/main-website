"use client";

import ServiceLayout from "../ServiceLayout";

export default function ImplementationExecutionPage() {
  return (
    <ServiceLayout
      expertName="Implementation"
      title="Implementation and Execution"
      subtitle="Turning Strategy into Systems That Deliver Under Real Conditions. Strategy sets the direction. Execution delivers the results. Implementation is where plans succeed or fail. Hadron GBS builds the governance and delivery discipline to turn your strategy into a system that works, from first sprint to final handover. What Our Implementation Model Delivers: Execution that holds is built on predictable structures, clear ownership, and governance that runs throughout."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785324517/now_in_this_same_theme_like_amrowr.mp4"
      heroVideoRotated={false}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324510/ChatGPT_Image_Jul_29_2026_03_33_33_PM_p6zjbb.png"
      solutions={[
        { title: "Architecture-Led Delivery", desc: "We treat every engagement as a systems problem. Our architects design for structure, coherence and long-term platform health." },
        { title: "Outcome-Driven Accountability", desc: "We define success through measurable KPIs from day one and stay accountable throughout the engagement lifecycle." },
        { title: "GenAI-Powered Transformation", desc: "We embed next-generation automation and AI capabilities across enterprise platforms." },
        { title: "Adoption and stabilisation", desc: "A dedicated hypercare phase follows every release. The team that built the solution stays on to monitor adoption and resolve issues before they settle in." },
        { title: "Post-go-live performance tracking", desc: "Platform adoption rates, resolution times, and process throughput tell you whether the programme delivered what it was meant to." }
      ]}
      framework={[]}
      whyHadron={[]}
    />
  );
}
