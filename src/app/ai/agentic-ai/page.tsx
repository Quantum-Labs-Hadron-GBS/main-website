"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function AgenticAI() {
  const solutions = [
    {
      title: "Perceive & Reason",
      desc: "Agents understand events, requests, data, and system signals, then evaluate context and rules to determine intent."
    },
    {
      title: "Decide & Act",
      desc: "Agents determine the appropriate next action and execute tasks across connected enterprise systems."
    },
    {
      title: "IT & Service Management",
      desc: "Automate incident investigation, autonomous triage, root-cause analysis, and contextual escalation."
    },
    {
      title: "Employee & Business Operations",
      desc: "Orchestrate employee onboarding, access provisioning, process routing, and exception handling autonomously."
    }
  ];

  const framework = [
    {
      step: "01",
      title: "Discover",
      desc: "Identify high-value workflows and automation opportunities.",
      outcome: "Targeted autonomous workflows"
    },
    {
      step: "02",
      title: "Design",
      desc: "Define agents, tools, data, integrations, controls, and escalation paths.",
      outcome: "Governed autonomous architecture"
    },
    {
      step: "03",
      title: "Deploy",
      desc: "Implement and integrate agents into enterprise workflows.",
      outcome: "Agentic execution at scale"
    },
    {
      step: "04",
      title: "Evolve",
      desc: "Measure performance and continuously improve agent behavior and outcomes.",
      outcome: "Increasing operational efficiency"
    }
  ];

  const whyHadron = [
    {
      title: "30–60% Reduction in Effort",
      desc: "Agentic AI drives massive reductions in manual effort by shifting from automated rules to intelligent, autonomous execution."
    },
    {
      title: "Governed Autonomy",
      desc: "Agentic systems need boundaries. Our approach considers identity, permissions, auditability, and responsible AI guardrails."
    },
    {
      title: "Human + AI Synergy",
      desc: "Autonomy does not mean removing humans. AI handles the execution where appropriate; people retain control where judgment matters."
    }
  ];

  return (
    <ServiceLayout 
      title="From Automation to Autonomy"
      subtitle="Traditional automation follows predefined rules. Agentic AI introduces a different operating model — systems that can understand context, reason through tasks, make decisions, take action, and adapt based on outcomes."
      solutionsImgUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="Agentic AI"
    />
  );
}
