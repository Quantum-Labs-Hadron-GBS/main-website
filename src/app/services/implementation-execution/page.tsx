import ServiceLayout from "../ServiceLayout";

export default function ImplementationExecutionPage() {
  return (
    <ServiceLayout
      breadcrumbName="Implementation & Execution"
      title={`Precision Implementation with <span style="color: var(--accent);">Hadron GBS</span>`}
      subtitle="Turning Strategy into Systems That Deliver Under Real Conditions"
      solutions={[
        { title: "Adoption and stabilisation", desc: "A dedicated hypercare phase follows every release. The team that built the solution stays on to monitor adoption and resolve issues before they settle in." },
        { title: "Post-go-live performance tracking", desc: "Platform adoption rates, resolution times, and process throughput tell you whether the programme delivered what it was meant to." },
        { title: "Architecture-Led Delivery", desc: "We treat every engagement as a systems problem. Our architects design for structure, coherence and long-term platform health." },
        { title: "Outcome-Driven Accountability", desc: "We define success through measurable KPIs from day one and stay accountable throughout the engagement lifecycle." },
        { title: "GenAI-Powered Transformation", desc: "We embed next-generation automation and AI capabilities across enterprise platforms." }
      ]}
      framework={[
        { step: "01", title: "Cloud platforms", desc: "AWS, Azure, and Google Cloud, full lifecycle from system design to end-to-end deployment.", outcome: "Scalable, secure, and highly available infrastructure aligned with business demands." },
        { step: "02", title: "Enterprise platforms", desc: "ServiceNow, Salesforce, SAP, BMC, Ivanti, Microsoft, and Atlassian.", outcome: "Integrated, high-performing enterprise applications that drive operational efficiency." },
        { step: "03", title: "Vendor & stakeholder management", desc: "Aligned goals, clear accountability, and coordinated delivery across organisational boundaries.", outcome: "Eliminated silos and unified execution across all involved parties." },
        { step: "04", title: "PMO & programme governance", desc: "Embedded PMO functions, risk tracking, and dependency management, keeping delivery aligned to business outcomes throughout.", outcome: "Predictable delivery, mitigated risks, and transparent progress reporting." },
        { step: "05", title: "Go-live & business transition", desc: "Go-live planning starts in the design stage. We orchestrate readiness, training, and fallback, then stay through hypercare and hand over to stable operations.", outcome: "Seamless transition with zero disruption to core business operations." }
      ]}
      whyHadron={[
        { title: "Strategy to Systems", desc: "Strategy sets the direction. Implementation is where programmes succeed or fail. The distance between an approved plan and a working system is where complexity compounds, across vendors, teams, platforms, and dependencies." },
        { title: "Delivery Discipline", desc: "Hadron GBS takes your approved plan and turns it into an operational system. We build the governance, coordination, and delivery discipline that holds from the first sprint to the final handover." },
        { title: "Predictable Structures", desc: "Execution that holds is built on predictable structures, clear ownership, and governance that runs throughout. With Hadron GBS as your partner, you get reliable outcomes." }
      ]}
    />
  );
}
