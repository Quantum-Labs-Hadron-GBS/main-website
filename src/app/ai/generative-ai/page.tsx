"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function GenerativeAI() {
  const solutions = [
    {
      title: "Enterprise Knowledge",
      desc: "Give employees and service teams faster access to relevant organizational knowledge via discovery and intelligent search."
    },
    {
      title: "Service & Support",
      desc: "Use AI to understand requests, summarize cases, recommend actions, and assist service teams in real time."
    },
    {
      title: "Business Workflows",
      desc: "Bring Generative AI directly into workflows rather than treating it as a separate application, extracting information autonomously."
    },
    {
      title: "Application Engineering",
      desc: "Use AI to accelerate engineering through code assistance and test generation without removing engineering discipline."
    }
  ];

  const framework = [
    {
      step: "01",
      title: "Discover",
      desc: "Identify high-value use cases, data sources, workflows, and readiness gaps.",
      outcome: "Clear AI opportunity pipeline"
    },
    {
      step: "02",
      title: "Design",
      desc: "Define the AI architecture, integration model, governance, and experience.",
      outcome: "A secure, enterprise-ready blueprint"
    },
    {
      step: "03",
      title: "Deploy",
      desc: "Integrate Generative AI into enterprise platforms and workflows.",
      outcome: "Embedded intelligence across operations"
    },
    {
      step: "04",
      title: "Evolve",
      desc: "Measure usage, quality, business impact, and continuously improve.",
      outcome: "Sustainable, improving AI value"
    }
  ];

  const whyHadron = [
    {
      title: "From Conversation to Action",
      desc: "Generative AI becomes more valuable when it is connected to enterprise systems. Data → Knowledge → Applications → Workflows → Automation."
    },
    {
      title: "Enterprise-Ready AI",
      desc: "We consider enterprise data, security, integration architecture, human oversight, and model selection before any deployment."
    },
    {
      title: "Embedded Execution",
      desc: "The objective is not another AI interface. It is AI embedded into the way the enterprise actually works."
    }
  ];

  return (
    <ServiceLayout 
      title="Turn Enterprise Knowledge Into Action"
      subtitle="Generative AI is changing how people interact with information, applications, and enterprise systems. Hadron GBS helps organizations apply Generative AI to enterprise knowledge, service operations, and business workflows."
      solutionsImgUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="Generative AI"
    />
  );
}
