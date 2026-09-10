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
      title: "87-Day Cloud Migration",
      desc: "A financial services organization achieved a complete migration with zero SLA breaches using our automated lift-and-modernize tools."
    },
    {
      title: "2x Faster Time-to-Market",
      desc: "A global retailer reduced feature delivery cycles by adopting our DevSecOps automated pipelines."
    },
    {
      title: "98% CMDB Accuracy",
      desc: "A public sector agency achieved near-perfect visibility into cloud assets to enforce strict compliance and security."
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
