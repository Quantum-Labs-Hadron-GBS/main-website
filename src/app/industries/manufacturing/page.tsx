"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function ManufacturingIndustry() {
  const solutions = [
    {
      title: "Enterprise Service Management",
      desc: "Connect IT, employee, and business services through structured workflows and service management."
    },
    {
      title: "Supply Chain Transformation",
      desc: "Modernize the technology supporting interconnected supply chain processes with cloud modernization and data-driven decisions."
    },
    {
      title: "Asset & Operations Management",
      desc: "Improve visibility across enterprise assets and operational environments with proactive issue management."
    },
    {
      title: "Cloud & Application Modernization",
      desc: "Modernize applications and infrastructure to support scalability and operational resilience via DevSecOps."
    },
    {
      title: "Intelligent Automation",
      desc: "Move repetitive operational processes toward intelligent, automated workflows and agentic AI."
    },
    {
      title: "Employee Experience",
      desc: "Create simpler, connected experiences for employees across enterprise services and self-service portals."
    }
  ];

  const framework = [
    {
      step: "01",
      title: "Assess",
      desc: "Analyze existing manufacturing environments, applications, and supply chain technology.",
      outcome: "Clear visibility into current operational gaps"
    },
    {
      step: "02",
      title: "Design",
      desc: "Architect a connected, scalable ecosystem targeting disconnected assets.",
      outcome: "A standardized enterprise blueprint"
    },
    {
      step: "03",
      title: "Transform",
      desc: "Implement unified platforms and migrate legacy workloads to modern infrastructure.",
      outcome: "Seamless integration across operations"
    },
    {
      step: "04",
      title: "Operate",
      desc: "Maintain platform reliability and application performance post-transformation.",
      outcome: "Uninterrupted industrial scale"
    },
    {
      step: "05",
      title: "Optimize",
      desc: "Introduce AI and intelligent automation for continued operational improvement.",
      outcome: "Predictive, resilient manufacturing operations"
    }
  ];

  const whyHadron = [
    {
      title: "Relevant Solutions",
      desc: "We bring specialized AI-Powered Enterprise Transformation and Cloud Adoption engineering to manufacturing challenges."
    },
    {
      title: "Platform Expertise",
      desc: "Deep integration capabilities across ServiceNow, SAP, BMC, Microsoft, AWS, and Salesforce."
    },
    {
      title: "The Outcome",
      desc: "Connected operations. Better visibility. Less manual effort. More resilient enterprise systems."
    }
  ];

  return (
    <ServiceLayout 
      title="Where Enterprise Operations Meet Industrial Complexity"
      subtitle="Manufacturing organizations operate across interconnected environments — production, supply chain, assets, service operations, employees, applications, and infrastructure. Hadron GBS connects technology, processes, and operations to create more visible, reliable, and intelligent enterprise environments."
      solutionsImgUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="Manufacturing Operations"
    />
  );
}
