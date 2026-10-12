"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function AIEnterprisePlatforms() {
  const solutions = [
    {
      title: "ServiceNow AI",
      desc: "Transform enterprise workflows across ITSM, ITOM, CSM, HRSD and more with Now Assist, AI Search, intelligent automation and AI Agents."
    },
    {
      title: "BMC Helix AI",
      desc: "Modernize service operations with HelixGPT, AI-powered service management, AIOps and intelligent automation to improve productivity and accelerate resolution."
    },
    {
      title: "Salesforce Agentforce",
      desc: "Transform customer and employee experiences with Agentforce and AI Agents, enabling intelligent automation across CRM, service, sales and enterprise workflows."
    },
    {
      title: "Atlassian, Freshworks, ManageEngine & Other OEMs",
      desc: "Enable AI-powered service management, intelligent automation and connected workflows across Atlassian, Freshworks, ManageEngine and other enterprise platforms."
    },
    {
      title: "SAP Transformation",
      desc: "Enable intelligent enterprise transformation across SAP S/4HANA, BTP and connected business workflows, combining automation, data and AI."
    },
    {
      title: "Microsoft & AWS",
      desc: "Scale enterprise AI with Microsoft Azure AI and Copilot, alongside AI-ready cloud foundations and generative AI capabilities on AWS."
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
      subtitle="Enterprises operate on ServiceNow, Salesforce, SAP, Microsoft, AWS, BMC Helix, and Atlassian. The opportunity is to make these platforms more intelligent by combining platform expertise with automation, AI, and integration."
      heroVideoUrl="https://res.cloudinary.com/dyhlpxwwo/video/upload/v1789976918/Use_the_attached_image_as_the_9_e2rgt4.mp4"
      solutionsImgUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="Platform Intelligence"
    />
  );
}
