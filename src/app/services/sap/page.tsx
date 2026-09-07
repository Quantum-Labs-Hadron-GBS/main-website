"use client";

import ServiceLayout from "../ServiceLayout";

export default function SAPPage() {
  return (
    <ServiceLayout
      expertName="SAP"
      title="Drive Intelligent Enterprise Excellence with Hadron GBS & SAP"
      subtitle="At Hadron GBS, we believe that a truly resilient business is built on a foundation of integrated, real-time data. As a strategic SAP partner, we help organizations move beyond legacy ERP systems to become ‘Intelligent Enterprises.’ By leveraging SAP’s powerful suite of cloud solutions, we enable you to streamline global operations, optimize supply chains, and make data-driven decisions with absolute confidence."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785326099/From_Klickpin.com-_Refresh_these_fresh_ways_to_style_your_craft_project_that_bring_style_function_and_personality_together_for_a_stylish_result_th_qpwyfp.mp4"
      heroVideoRotated={true}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324512/ChatGPT_Image_Jul_29_2026_04_43_09_PM_akexyx.png"
      solutions={[
        { title: "SAP S/4HANA Cloud", desc: "The next-generation ERP. Modernize your core business processes—from finance and risk management to sales and R&D—on a single, in-memory platform." },
        { title: "SAP SuccessFactors (HXM)", desc: "Transform the employee experience with human experience management (HXM) solutions that simplify payroll, talent management, and core HR." },
        { title: "SAP Customer Experience (CX)", desc: "Build deeper customer relationships with integrated solutions for commerce, marketing, sales, and service." },
        { title: "SAP Business Technology Platform (SAP BTP)", desc: "The foundation of innovation. We help you integrate applications, create personalized experiences, and turn data into value with advanced analytics and AI." },
        { title: "SAP Ariba & Supply Chain", desc: "Digitalize your procurement and supply chain operations to increase transparency, reduce costs, and improve vendor collaboration." },
        { title: "SAP Joule (Generative AI)", desc: "Integrate SAP's natural-language generative AI assistant into your workflows to accelerate task completion and gain instant business context." }
      ]}
      framework={[
        { step: "01", title: "Consulting & Advisory", desc: "We begin by assessing your current landscape—whether you are looking at a ‘Greenfield’ implementation or a ‘Brownfield’ conversion. We align SAP’s Standard Best Practices with your unique business requirements to create a roadmap that minimizes customization and maximizes scalability.", outcome: "A strategic transformation blueprint (RISE or GROW with SAP) that simplifies your architecture and accelerates ROI." },
        { step: "02", title: "Implementation & Execution", desc: "Our team handles the technical complexity of deployment, including data migration, system integration, and custom development on SAP BTP. We prioritize a ‘Clean Core’ strategy to ensure your system remains easy to upgrade and maintain.", outcome: "A stable, high-performance SAP environment that serves as the ‘Digital Core’ of your enterprise." },
        { step: "03", title: "Operational Support & Managed Services", desc: "ERP systems are mission-critical. We provide proactive application management (AMS), performance tuning, and regular update support to ensure your SAP environment evolves alongside global market changes and regulatory requirements.", outcome: "Continuous platform optimization, regulatory compliance, and 24/7 technical reliability for your global operations." }
      ]}
      whyHadron={[
        { title: "Clean Core Philosophy", desc: "We focus on standard SAP functionality to reduce technical debt and ensure your business is always ‘upgrade-ready.’" },
        { title: "End-to-End Integration", desc: "We specialize in connecting SAP with your broader ecosystem, ensuring data flows seamlessly between your ERP, CRM, and third-party applications." },
        { title: "Industry-Specific Insight", desc: "We bring deep expertise in translating complex business requirements into functional SAP workflows that drive measurable efficiency." }
      ]}
    />
  );
}

