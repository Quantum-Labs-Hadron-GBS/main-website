"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function AIStrategy() {
  const solutions = [
    {
      title: "Business & Process Readiness",
      desc: "Identify where AI can create measurable business value and determine which workflows are actually suitable for intelligent automation."
    },
    {
      title: "Technology & Data Assessment",
      desc: "Evaluate if your platforms, applications, and integrations are ready, and whether your data is accessible, reliable, and governed."
    },
    {
      title: "People & Operating Model",
      desc: "Determine what changes are required across roles, skills, and organizational structure to support an AI-driven environment."
    },
    {
      title: "AI Governance",
      desc: "Define how AI will be controlled, monitored, secured, and continuously evaluated to ensure compliance and responsible usage."
    }
  ];

  const framework = [
    {
      step: "01",
      title: "Assess",
      desc: "Understand the current technology, process, data, and AI landscape.",
      outcome: "Clear baseline of organizational readiness"
    },
    {
      step: "02",
      title: "Identify",
      desc: "Find high-value AI and automation opportunities.",
      outcome: "List of potential use cases"
    },
    {
      step: "03",
      title: "Prioritize",
      desc: "Rank use cases based on business value, feasibility, data readiness, and risk.",
      outcome: "A prioritized AI roadmap"
    },
    {
      step: "04",
      title: "Architect",
      desc: "Define the target AI, data, integration, and governance architecture.",
      outcome: "Secure and scalable enterprise blueprint"
    },
    {
      step: "05",
      title: "Roadmap",
      desc: "Create an actionable path from initial pilot to enterprise-wide scale.",
      outcome: "Execution plan for deployment"
    }
  ];

  const whyHadron = [
    {
      title: "Prepare for Agentic AI",
      desc: "Agents need reliable data, connected systems, and defined processes. Without those foundations, autonomy becomes difficult to govern."
    },
    {
      title: "Governed Execution",
      desc: "We prioritize security, access control, model governance, and human oversight as organizations move toward autonomous execution."
    },
    {
      title: "From Strategy to Operations",
      desc: "AI strategy should not end with a PowerPoint. We carry the journey through architecture, implementation, operations, and optimization."
    }
  ];

  return (
    <ServiceLayout 
      title="Before You Deploy AI, Build the Foundation"
      subtitle="AI adoption is moving quickly. But enterprises need more than a list of AI use cases. Hadron GBS helps organizations establish a practical roadmap from AI readiness to secure, scalable enterprise adoption."
      solutionsImgUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="AI Strategy"
    />
  );
}
