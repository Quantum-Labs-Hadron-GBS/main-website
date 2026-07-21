import ServiceLayout from "../ServiceLayout";

export default function Page() {
  return (
    <ServiceLayout
      title={`Accelerate Innovation with Hadron GBS: <span style="color: var(--accent);">Your Low-Code & No-Code Partner</span>`}
      subtitle="At Hadron GBS, we believe that technology should be an accelerator, not a bottleneck. As a specialist partner in Low-Code and No-Code (LCNC) platforms, we empower organizations to bridge the gap between business ideas and functional software."
      solutions={[
        { title: "Rapid Application Development (RAD)", desc: "Build and deploy custom business applications quickly to solve unique challenges without the overhead of traditional coding." },
        { title: "Workflow & Process Automation", desc: "Modernize manual, paper-based, or Excel-driven processes with automated digital workflows that reduce errors and save time." },
        { title: "Legacy Modernization", desc: "Wrap or replace aging legacy systems with modern, mobile-responsive interfaces that extend the life and utility of your data." },
        { title: "Customer & Partner Portals", desc: "Launch secure, branded external portals that allow customers and vendors to interact with your business systems in real-time." },
        { title: "Data Visualization & Dashboards", desc: "Consolidate data from multiple sources into interactive, low-code dashboards for instant business intelligence." },
        { title: "Citizen Developer Enablement", desc: "We help you establish 'Guardrails' and centers of excellence, allowing your business users to build their own tools safely and securely." },
        { title: "AI-Enhanced Low-Code", desc: "Integrate Generative AI and machine learning models directly into your apps to automate decision-making and content generation." }
      ]}
      framework={[
        { step: "01", title: "Consulting & Advisory", desc: "Not every low-code platform is right for every problem. We assess your technical landscape and business goals to recommend the right stack—whether it’s focused on UI, database complexity, or deep integration.", outcome: "A strategic LCNC roadmap and a governed framework that prevents ‘Shadow IT’ while fostering innovation." },
        { step: "02", title: "Implementation & Execution", desc: "Our agile delivery model focuses on ‘Minimum Viable Products’ (MVPs) that deliver value fast. We work in short sprints, involving your stakeholders at every step to ensure the final product perfectly matches user needs.", outcome: "A fully functional, integrated application deployed in a fraction of the time required for traditional development." },
        { step: "03", title: "Operational Support & Managed Services", desc: "As your portfolio of low-code apps grows, management becomes critical. We provide ongoing support, platform updates, and security audits to ensure your apps remain performant and compliant with enterprise standards.", outcome: "A sustainable and secure application ecosystem that evolves as your business processes change." }
      ]}
      whyHadron={[
        { title: "10x Faster Delivery", desc: "We significantly reduce development cycles, allowing you to move from concept to production with unprecedented speed." },
        { title: "Reduced Total Cost of Ownership", desc: "By minimizing the need for specialized coding talent and long development hours, we make innovation more affordable." },
        { title: "Business-IT Alignment", desc: "We bring deep expertise in translating complex business requirements into functional workflows that drive measurable efficiency." }
      ]}
    />
  );
}
