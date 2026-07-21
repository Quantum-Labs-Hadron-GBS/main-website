import ServiceLayout from "../ServiceLayout";

export default function OperationalSupportPage() {
  return (
    <ServiceLayout
      title="Operational Support Services"
      subtitle="Implementation ends. Operations don’t."
      solutions={[
        { title: "Structured Operations", desc: "Every function has an owner, a process, and an escalation path defined before operations begin." },
        { title: "Unified Support Model", desc: "Business users and technology teams operate from a single, coordinated support framework." },
        { title: "Issue & Request Management", desc: "Incidents tracked, owned, and resolved within defined windows. Root cause analysis prevents recurrence." },
        { title: "Performance Visibility", desc: "KPIs, dashboards, and service reports on a defined cadence not produced on request." },
        { title: "Continuous Improvement", desc: "Regular assessments identify failure patterns and efficiency gaps. Improvement is part of the operating model." },
        { title: "Single Coordination Layer", desc: "Business, IT, vendors, and support teams aligned around one model eliminating the coordination gaps where instability originates." }
      ]}
      framework={[
        { step: "01", title: "End-to-end L1–L3 support", desc: "Issues routed by complexity across ServiceNow, Salesforce, SAP, BMC, Ivanti, Atlassian, and related platforms.", outcome: "Rapid resolution times and minimized downtime for critical systems." },
        { step: "02", title: "ESM and ITSM Operations", desc: "Incident, service request, and change management within a governed ITSM model, with full root-cause visibility.", outcome: "Controlled environments and streamlined service delivery." },
        { step: "03", title: "Operational Governance and Compliance", desc: "Process compliance, governance frameworks, and documentation across platforms and teams. Regular review cadences drive accountability.", outcome: "Audit-ready environments and strict adherence to organizational policies." },
        { step: "04", title: "Performance reporting", desc: "KPI tracking and dashboards aligned to SLA cadences, driving prioritisation, resource allocation, and continuous improvement.", outcome: "Data-driven decision making and transparent operational health." },
        { step: "05", title: "Service optimisation", desc: "Regular assessments surface recurring issues and optimisation opportunities to reduce incident volume and strengthen long-term performance.", outcome: "A proactive support culture that fixes root causes, not just symptoms." }
      ]}
      whyHadron={[
        { title: "Operations that Hold", desc: "Post-go-live environments are where platforms drift from business reality, driven by shifting demands, growing backlogs, and unclear ownership. Hadron GBS Operational Support restores control with defined processes, accountable ownership, and a team that knows your platform from the inside." },
        { title: "No Knowledge Lost", desc: "Because the people who built your solution stay on to run it, the knowledge that makes operations work doesn’t get lost in a handoff." },
        { title: "Why Operational Stability Matters", desc: "Operational noise absorbs internal resources. A stable, well-governed support function removes that drag, freeing your teams to focus on strategic work instead of firefighting recurring issues." }
      ]}
    />
  );
}
