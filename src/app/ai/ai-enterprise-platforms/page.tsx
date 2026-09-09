"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function AIEnterprisePlatforms() {
  const solutions = [
    {
      title: "ServiceNow AI",
      desc: "Transform service and workflows across ITSM, ITOM, CSM, and HRSD using Now Assist and Autonomous AI Agents."
    },
    {
      title: "Salesforce Einstein",
      desc: "Drive intelligent CRM and customer operations through generative AI, predictive intelligence, and AI-powered sales."
    },
    {
      title: "SAP Transformation",
      desc: "Embed AI-enabled enterprise transformation across SAP S/4HANA, BTP, and intelligent enterprise workflows."
    },
    {
      title: "Microsoft & AWS",
      desc: "Scale intelligence across the Microsoft ecosystem (Azure AI, Copilot) and build AI-ready cloud foundations on AWS (Amazon Bedrock)."
    },
    {
      title: "Atlassian, BMC & Freshworks",
      desc: "Inject AI into engineering (Atlassian Intelligence), AIOps (BMC Helix), and omnichannel customer service (Freddy AI)."
    }
  ];

  const framework = [
    {
      step: "01",
      title: "Data Foundation",
      desc: "Ensure enterprise data is clean, accessible, and structured for AI consumption.",
      outcome: "Reliable inputs for intelligence"
    },
    {
      step: "02",
      title: "Platform Integration",
      desc: "Connect data to the core enterprise platforms running the business.",
      outcome: "Centralized operational hubs"
    },
    {
      step: "03",
      title: "Intelligence Layer",
      desc: "Embed native AI or custom models into platform workflows.",
      outcome: "Context-aware processing"
    },
    {
      step: "04",
      title: "Agentic Execution",
      desc: "Allow AI agents to autonomously execute tasks and orchestrate actions.",
      outcome: "Accelerated business outcomes"
    }
  ];

  const whyHadron = [
    {
      title: "AI is the Intelligence Layer",
      desc: "The platform remains important, but the value increasingly comes from what intelligence can do within and across the platform."
    },
    {
      title: "Beyond Platform AI",
      desc: "Enterprise workflows rarely stop at one system. We focus on the connections between ServiceNow ↔ SAP ↔ Salesforce ↔ Microsoft ↔ AWS."
    },
    {
      title: "Make Existing Platforms Smarter",
      desc: "You don't always need another platform. Sometimes you need to make the platforms you already have work harder via intelligent orchestration."
    }
  ];

  return (
    <ServiceLayout 
      title="Bring Intelligence Into the Platforms That Run Your Business"
      subtitle="Enterprises operate on ServiceNow, Salesforce, SAP, Microsoft, AWS, BMC, and Atlassian. The opportunity is to make these platforms more intelligent by combining platform expertise with automation, AI, and integration."
      solutionsImgUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="Platform Intelligence"
    />
  );
}
