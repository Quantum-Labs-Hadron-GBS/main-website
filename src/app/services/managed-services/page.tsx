"use client";

import ServiceLayout from "../ServiceLayout";

export default function ManagedServicesPage() {
  return (
    <ServiceLayout
      expertName="Managed Services"
      title="Managed Services"
      subtitle="Stop Managing Vendors. Start Owning Outcomes. Managed services are not staff augmentation or ad-hoc support. It’s a shift in ownership, from your team to ours, with clear accountability, defined SLAs, and predictable costs. At Hadron GBS, the teams who build your platform stay to run it. That means continuity, performance, and no knowledge lost in a handoff."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785324517/now_in_this_same_theme_like_amrowr.mp4"
      heroVideoRotated={false}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324498/ChatGPT_Image_Jul_29_2026_04_50_46_PM_tppenb.png"
      solutions={[
        { title: "End-to-End Service Ownership", desc: "One accountable team owns requests, incidents, enhancements, and governance across all platforms in scope." },
        { title: "SLA-Driven Delivery", desc: "Response windows, resolution targets, and throughput set at engagement start, tracked continuously and reported on schedule." },
        { title: "Predictable Costs", desc: "A defined commercial model replaces reactive cost exposure with consistent, measurable operating costs." },
        { title: "Vendor Consolidation", desc: "Multiple platforms covered within one governed delivery structure, reducing fragmented vendor dependencies." },
        { title: "Structured Governance", desc: "Bi-weekly sprint reviews and monthly governance meetings keep stakeholders informed and delivery on track." },
        { title: "Built-In Improvement", desc: "Regular assessment cycles identify failure patterns and efficiency gaps, run through the same sprint structure as operational tasks." }
      ]}
      framework={[]}
      whyHadron={[
        { title: "Application & Platform Managed Services", desc: "Service Now, Salesforce, SAP, BMC, Ivanti, and Atlassian, incidents, changes, and enhancements delivered in one integrated model." },
        { title: "Business Process & PMO Managed Services", desc: "Execution control, backlog and dependency management, risk oversight, and stakeholder reporting as an ongoing service." },
        { title: "Reporting, Analytics & Performance Management", desc: "Cadence-driven dashboards, KPIs, and analytics enabling faster, data backed resourcing decisions." },
        { title: "Release, Change, and Environment Management", desc: "All changes planned, controlled, and traceable, released with monitoring and rollback readiness within a governed framework." },
        { title: "Service Governance, SLA and Integration Monitoring", desc: "Continuous monitoring and SLA governance for early issue detection, consistent performance, and operational continuity." }
      ]}
    />
  );
}
