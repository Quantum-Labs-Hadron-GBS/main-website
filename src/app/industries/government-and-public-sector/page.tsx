"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function GovernmentIndustry() {
  const solutions = [
    {
      title: "Enterprise Service Management",
      desc: "Connect IT, employee, and business services through structured workflows and centralized service management."
    },
    {
      title: "Workflow & Process Automation",
      desc: "Reduce manual handoffs and standardize repetitive processes through enterprise automation."
    },
    {
      title: "Cloud & Infrastructure Modernization",
      desc: "Modernize infrastructure and applications while embedding governance, security, observability, and operational readiness."
    },
    {
      title: "Application Engineering",
      desc: "Build and modernize applications using modular architectures, low-code acceleration, APIs, microservices, and cloud-native approaches."
    },
    {
      title: "Data & Operational Visibility",
      desc: "Create better visibility across enterprise systems, infrastructure, services, and operational processes."
    },
    {
      title: "AI-Ready Enterprise Operations",
      desc: "Establish the architecture, governance, workflows, and data foundations required to adopt AI responsibly across public-sector operations."
    }
  ];

  const framework = [
    {
      step: "01",
      title: "Governance Assessment",
      desc: "Evaluate existing systems for compliance, security, and process fragmentation.",
      outcome: "Clear understanding of regulatory and operational gaps"
    },
    {
      step: "02",
      title: "Design for Accountability",
      desc: "Architect unified enterprise workflows prioritizing security, control, and visibility.",
      outcome: "Compliant, scalable operating model"
    },
    {
      step: "03",
      title: "Modernize & Automate",
      desc: "Execute cloud modernization and standardize repetitive workflows.",
      outcome: "Reduced manual handoffs and modernized platforms"
    },
    {
      step: "04",
      title: "Operational Continuity",
      desc: "Ensure uninterrupted service delivery through managed services and proactive maintenance.",
      outcome: "Reliable public-sector service delivery"
    },
    {
      step: "05",
      title: "Evolve Safely",
      desc: "Introduce AI-ready data foundations and responsible intelligent automation.",
      outcome: "Governed, intelligent enterprise operations"
    }
  ];

  const whyHadron = [
    {
      title: "Designed Around Accountability",
      desc: "Public-sector transformation requires more than implementation. It requires Governance, Visibility, Control, and Operational Continuity."
    },
    {
      title: "End-to-End Delivery",
      desc: "Hadron GBS brings consulting, implementation, operational support, and managed services together across the transformation lifecycle."
    },
    {
      title: "Trusted Platforms",
      desc: "Deep integration expertise across ServiceNow, Microsoft, AWS, BMC, Atlassian, and Ivanti."
    }
  ];

  return (
    <ServiceLayout 
      title="Modernizing the Systems Behind Public Services"
      subtitle="Public-sector organizations operate complex technology environments where reliability, accountability, security, service delivery, and operational efficiency are critical. Hadron GBS helps modernize enterprise platforms and establish stronger technology foundations."
      solutionsImgUrl="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2074&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="Public Sector Transformation"
    />
  );
}
