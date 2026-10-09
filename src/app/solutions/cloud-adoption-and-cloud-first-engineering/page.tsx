"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function CloudAdoption() {
  const solutions = [
    {
      title: "Cloud-First Strategy",
      desc: "Align cloud adoption with business goals to ensure scalability, security, and measurable ROI."
    },
    {
      title: "Cloud-Native Engineering",
      desc: "Architect applications specifically for the cloud using microservices, containers, and serverless technologies."
    },
    {
      title: "Migration & Modernization",
      desc: "Move workloads to the cloud while modernizing legacy architectures to improve performance and reduce technical debt."
    },
    {
      title: "DevSecOps & Automation",
      desc: "Embed security and automation into the engineering lifecycle for faster, safer, and more reliable releases."
    },
    {
      title: "FinOps & Cloud Optimization",
      desc: "Manage and optimize cloud spend while maintaining performance and architectural efficiency."
    }
  ];

  const framework = [
    {
      step: "01",
      title: "Readiness Assessment",
      desc: "Evaluate infrastructure, security, compliance, data, and application portfolios.",
      outcome: "Clear understanding of gaps and opportunities"
    },
    {
      step: "02",
      title: "Cloud Strategy & Architecture",
      desc: "Design the target operating model, security foundation, and migration path.",
      outcome: "A scalable, governed cloud blueprint"
    },
    {
      step: "03",
      title: "Migration & Modernization",
      desc: "Execute structured workload transitions and refactor applications for cloud-native performance.",
      outcome: "Successful deployment with minimal disruption"
    },
    {
      step: "04",
      title: "Cloud Service Operations",
      desc: "Transition to stable, automated operations using AI, DevSecOps, and FinOps.",
      outcome: "Resilient, cost-optimized, and continuously improving environments"
    }
  ];

  const whyHadron = [
    {
      title: "Faster Time-to-Value",
      desc: "Accelerate enterprise transformation through proven delivery frameworks, platform expertise, reusable accelerators and automation."
    },
    {
      title: "Improved Operational Efficiency",
      desc: "Simplify workflows, reduce manual effort and improve service operations through intelligent automation, AI and integrated enterprise platforms."
    },
    {
      title: "Trusted Data & Visibility",
      desc: "Strengthen CMDB, asset and operational data foundations to improve visibility, governance and informed decision-making."
    },
    {
      title: "AI-Enabled Transformation",
      desc: "Turn AI into practical enterprise outcomes through Now Assist, AI Agents, HelixGPT, Agentforce and other platform-native AI capabilities."
    },
    {
      title: "End-to-End Accountability",
      desc: "Stay supported from consulting and architecture through implementation, hypercare, optimization and managed services."
    }
  ];

  return (
    <ServiceLayout 
      title="Cloud Adoption & Cloud-First Engineering"
      subtitle="A Cloud Foundation That Moves With Your Business. Technology transformation depends on infrastructure and applications that can adapt to changing demands."
      solutionsImgUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="Cloud Engineering"
    />
  );
}
