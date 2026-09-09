"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function FinancialServicesIndustry() {
  const solutions = [
    {
      title: "Enterprise Core Modernization",
      desc: "Modernize ERP, CRM, and core enterprise environments while improving integration and data visibility."
    },
    {
      title: "Cloud Adoption",
      desc: "Move critical workloads to cloud environments through structured migration, modernization, and operationalization."
    },
    {
      title: "Digital & Customer Experience",
      desc: "Connect customer-facing processes and enterprise workflows to create more consistent service experiences."
    },
    {
      title: "Service & Operations Management",
      desc: "Improve operational visibility through structured ITSM, ITOM, service workflows, monitoring, and automation."
    },
    {
      title: "Engineering Quality & Reliability",
      desc: "Build systems that remain reliable under demanding operational conditions through quality engineering, observability, and resilience."
    },
    {
      title: "Intelligent Automation",
      desc: "Use AI and automation to reduce manual operational effort and support faster decision-making."
    }
  ];

  const framework = [
    {
      step: "01",
      title: "Assess",
      desc: "Evaluate current legacy platforms, regulatory constraints, and fragmented workflows.",
      outcome: "Clear risk and modernization profile"
    },
    {
      step: "02",
      title: "Design",
      desc: "Architect a secure, compliant technology foundation supporting speed and reliability.",
      outcome: "Target state operating model"
    },
    {
      step: "03",
      title: "Transform",
      desc: "Execute core modernization and cloud migrations utilizing automated engineering tools.",
      outcome: "Rapid workload transition with zero SLA breaches"
    },
    {
      step: "04",
      title: "Operate",
      desc: "Provide managed services to maintain resilience and data security post-deployment.",
      outcome: "Stable, high-performance financial systems"
    },
    {
      step: "05",
      title: "Optimize",
      desc: "Embed AI and advanced automation to accelerate decision-making.",
      outcome: "Predictive, agile financial operations"
    }
  ];

  const whyHadron = [
    {
      title: "87-Day Cloud Migration",
      desc: "Achieved a full migration with zero SLA breaches using phased lift-and-modernize, automated tools, and infrastructure-as-code."
    },
    {
      title: "18 Weeks → 8 Weeks",
      desc: "A fintech transformation where feature cycles reduced from 18 weeks to 8 weeks, launching two new revenue-generating products in Q1."
    },
    {
      title: "Platform Ecosystem",
      desc: "Expert delivery across ServiceNow, Salesforce, SAP, AWS, Microsoft, and BMC for integrated financial environments."
    }
  ];

  return (
    <ServiceLayout 
      title="Transforming the Technology Behind Financial Operations"
      subtitle="Financial services organizations operate complex environments where reliability, speed, data, security, and service quality directly influence business performance. Hadron GBS helps financial services organizations modernize the technology foundation behind core operations."
      solutionsImgUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="Financial Services"
    />
  );
}
