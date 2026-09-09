"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function RetailIndustry() {
  const solutions = [
    {
      title: "Digital Commerce & Customer Experience",
      desc: "Build reliable, connected experiences across customer-facing platforms and enterprise services."
    },
    {
      title: "Application Modernization",
      desc: "Modernize legacy applications and architectures to improve scalability, maintainability, and release velocity."
    },
    {
      title: "Cloud Transformation",
      desc: "Migrate and modernize infrastructure and applications for scalable, resilient cloud operations."
    },
    {
      title: "Reliability Engineering",
      desc: "Design systems for peak demand using observability, performance engineering, resilience practices, and proactive monitoring."
    },
    {
      title: "Service Operations",
      desc: "Connect IT and business service operations to improve visibility, response, and operational consistency."
    },
    {
      title: "Intelligent Automation",
      desc: "Automate repetitive workflows and introduce AI-driven decision support across enterprise operations."
    }
  ];

  const framework = [
    {
      step: "01",
      title: "Assess",
      desc: "Evaluate commerce platforms, peak-load resilience, and operational bottlenecks.",
      outcome: "Identified risk areas and modernization targets"
    },
    {
      step: "02",
      title: "Design",
      desc: "Architect scalable, high-availability checkout flows and observability-first infrastructure.",
      outcome: "A resilient technical blueprint"
    },
    {
      step: "03",
      title: "Transform",
      desc: "Execute cloud modernization, chaos engineering, and application restructuring.",
      outcome: "Scalable retail infrastructure"
    },
    {
      step: "04",
      title: "Operate",
      desc: "Provide proactive monitoring and automated remediation during peak demand.",
      outcome: "Zero downtime during critical periods"
    },
    {
      step: "05",
      title: "Optimize",
      desc: "Implement predictive analytics to continually refine customer and IT experiences.",
      outcome: "Continuous performance improvement"
    }
  ];

  const whyHadron = [
    {
      title: "60% Reduction in Incidents",
      desc: "Reduced platform incidents for a global retailer's core commerce platform through observability-first engineering."
    },
    {
      title: "Zero Downtime",
      desc: "Ensured 100% uptime during Black Friday by implementing high-availability architecture and chaos engineering."
    },
    {
      title: "Enterprise Solutions",
      desc: "Integrated solutions across ServiceNow, Salesforce, AWS, Microsoft, Atlassian, SAP, and Freshworks."
    }
  ];

  return (
    <ServiceLayout 
      title="Technology That Keeps Retail Moving"
      subtitle="Retail depends on technology that can perform when demand is highest. Customer experience, commerce platforms, applications, infrastructure, service operations, and data must work together to build resilient operations."
      solutionsImgUrl="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="Retail Technology"
    />
  );
}
