"use client";

import ServiceLayout from "../ServiceLayout";

export default function OperationalSupportPage() {
  return (
    <ServiceLayout
      expertName="Operations"
      title="Operational Support Services"
      subtitle="Post-go-live environments are where platforms drift from business reality, driven by shifting demands, growing backlogs, and unclear ownership. Hadron GBS Operational Support restores control with defined processes, accountable ownership, and a team that knows your platform from the inside. Because the people who built your solution stay on to run it, the knowledge that makes operations work doesn’t get lost in a handoff."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785324517/now_in_this_same_theme_like_amrowr.mp4"
      heroVideoRotated={false}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324505/ChatGPT_Image_Jul_29_2026_04_38_36_PM_lk2skj.png"
      solutions={[
        { title: "Structured Operations", desc: "Every function has an owner, a process, and an escalation path defined before operations begin." },
        { title: "Unified Support Model", desc: "Business users and technology teams operate from a single, coordinated support framework." },
        { title: "Issue & Request Management", desc: "Incidents tracked, owned, and resolved within defined windows. Root cause analysis prevents recurrence." },
        { title: "Performance Visibility", desc: "KPIs, dashboards, and service reports on a defined cadence not produced on request." },
        { title: "Continuous Improvement", desc: "Regular assessments identify failure patterns and efficiency gaps. Improvement is part of the operating model." },
        { title: "Single Coordination Layer", desc: "Business, IT, vendors, and support teams aligned around one model eliminating the coordination gaps where instability originates." }
      ]}
      framework={[]}
      whyHadron={[
        { title: "End-to-end L1–L3 Support", desc: "Issues routed by complexity across ServiceNow, Salesforce, SAP, BMC, Ivanti, Atlassian, and related platforms." },
        { title: "ESM and ITSM Operations", desc: "Incident, service request, and change management within a governed ITSM model, with full root-cause visibility." },
        { title: "Operational Governance and Compliance", desc: "Process compliance, governance frameworks, and documentation across platforms and teams. Regular review cadences drive accountability." },
        { title: "Performance Reporting", desc: "KPI tracking and dashboards aligned to SLA cadences, driving prioritisation, resource allocation, and continuous improvement." },
        { title: "Service Optimisation", desc: "Regular assessments surface recurring issues and optimisation opportunities to reduce incident volume and strengthen long-term performance." }
      ]}
    />
  );
}
