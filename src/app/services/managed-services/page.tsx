import ServiceLayout from "../ServiceLayout";

export default function ManagedServicesPage() {
  return (
    <ServiceLayout
      title="Managed Services"
      subtitle="Stop Managing Vendors. Start Owning Outcomes"
      solutions={[
        { title: "End-to-End Service Ownership", desc: "One accountable team owns requests, incidents, enhancements, and governance across all platforms in scope." },
        { title: "SLA-Driven Delivery", desc: "Response windows, resolution targets, and throughput set at engagement start, tracked continuously and reported on schedule." },
        { title: "Predictable Costs", desc: "A defined commercial model replaces reactive cost exposure with consistent, measurable operating costs." },
        { title: "Vendor Consolidation", desc: "Multiple platforms covered within one governed delivery structure, reducing fragmented vendor dependencies." },
        { title: "Structured Governance", desc: "Bi-weekly sprint reviews and monthly governance meetings keep stakeholders informed and delivery on track." },
        { title: "Built-In Improvement", desc: "Regular assessment cycles identify failure patterns and efficiency gaps, run through the same sprint structure as operational tasks." }
      ]}
      framework={[
        { step: "01", title: "Application & platform managed services", desc: "Service Now, Salesforce, SAP, BMC, Ivanti, and Atlassian, incidents, changes, and enhancements delivered in one integrated model.", outcome: "A single pane of glass for enterprise application health." },
        { step: "02", title: "Business process & PMO managed services", desc: "Execution control, backlog and dependency management, risk oversight, and stakeholder reporting as an ongoing service.", outcome: "Strategic alignment and predictable project velocity." },
        { step: "03", title: "Reporting, analytics & performance management", desc: "Cadence-driven dashboards, KPIs, and analytics enabling faster, data backed resourcing decisions.", outcome: "Clear visibility into ROI and operational bottlenecks." },
        { step: "04", title: "Release, Change, and Environment Management", desc: "All changes planned, controlled, and traceable, released with monitoring and rollback readiness within a governed framework.", outcome: "Zero-surprise deployments and protected production environments." },
        { step: "05", title: "Service Governance, SLA and Integration Monitoring", desc: "Continuous monitoring and SLA governance for early issue detection, consistent performance, and operational continuity.", outcome: "Guaranteed uptime and strict adherence to business commitments." }
      ]}
      whyHadron={[
        { title: "A Shift in Ownership", desc: "Managed services are not staff augmentation or ad-hoc support. It’s a shift in ownership, from your team to ours, with clear accountability, defined SLAs, and predictable costs." },
        { title: "Continuity and Performance", desc: "At Hadron GBS, the teams who build your platform stay to run it. That means continuity, performance, and no knowledge lost in a handoff." },
        { title: "Structured Accountability", desc: "Operational responsibility comes with defined ownership, performance commitments, and governance that make both visible." }
      ]}
    />
  );
}
