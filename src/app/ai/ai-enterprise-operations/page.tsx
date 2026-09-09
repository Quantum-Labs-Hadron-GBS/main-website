"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function AIEnterpriseOperations() {
  const solutions = [
    {
      title: "Intelligent Service Operations",
      desc: "Use AI to understand, classify, prioritize, and route service requests with intelligent triage and case summarization."
    },
    {
      title: "AIOps & IT Operations",
      desc: "Apply AI and analytics to operational telemetry for event correlation, anomaly detection, and automated remediation."
    },
    {
      title: "Intelligent Automation",
      desc: "Combine AI with workflow automation to execute repetitive operational processes via RPA and orchestration."
    },
    {
      title: "Decision Intelligence",
      desc: "Bring predictive and prescriptive intelligence directly into operational workflows to support real-time, proactive response."
    }
  ];

  const framework = [
    {
      step: "01",
      title: "Assess",
      desc: "Understand operational maturity, data, processes, and automation opportunities.",
      outcome: "Clear baseline of operational health"
    },
    {
      step: "02",
      title: "Design",
      desc: "Architect AI-powered workflows and orchestration mapping across the enterprise.",
      outcome: "Proactive intelligence blueprint"
    },
    {
      step: "03",
      title: "Implement",
      desc: "Deploy automation, AI, integrations, and platform capabilities.",
      outcome: "Integrated intelligent operations"
    },
    {
      step: "04",
      title: "Optimize",
      desc: "Continuously improve operational performance using predictive insights.",
      outcome: "Resilient, self-healing environments"
    }
  ];

  const whyHadron = [
    {
      title: "From Reactive to Proactive",
      desc: "Shift from [Event → Human Detection → Action] to [Event → Intelligence → Decision → Action]."
    },
    {
      title: "Connect the Enterprise",
      desc: "AI is applied inside the operating environment across ITSM, ITOM, ITAM, CRM, ERP, and Cloud, rather than as a disconnected layer."
    },
    {
      title: "Human + Intelligent Operations",
      desc: "AI handles detection, classification, and routine execution. People focus on exceptions, complex decisions, and governance."
    }
  ];

  return (
    <ServiceLayout 
      title="Make Enterprise Operations More Intelligent"
      subtitle="Enterprise operations generate enormous amounts of events and data. The challenge is understanding what matters and acting on it quickly. Hadron GBS combines AI, automation, and analytics to move organizations toward predictive operations."
      solutionsImgUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="Intelligent Operations"
    />
  );
}
