"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function AIEnterpriseTransformation() {
  const solutions = [
    {
      title: "Generative AI & Enterprise Knowledge",
      desc: "Transform how employees and customers interact with enterprise information, moving beyond basic chat interfaces into deeply integrated knowledge retrieval and document processing."
    },
    {
      title: "Agentic AI & Autonomous Workflows",
      desc: "Move from simple task automation to intelligent agents capable of perceiving context, reasoning through options, and executing tasks across connected enterprise systems."
    },
    {
      title: "Intelligent Service Operations",
      desc: "Embed AI directly into service management to classify, route, and resolve requests automatically while providing proactive insights."
    },
    {
      title: "AIOps & Infrastructure Reliability",
      desc: "Use machine learning and event correlation to predict IT issues, automate remediation, and maintain operational stability."
    }
  ];

  const framework = [
    {
      step: "01",
      title: "Sense",
      desc: "Integrate with ITOM, APM, IoT, and service logs to gather telemetry.",
      outcome: "Comprehensive visibility across the enterprise"
    },
    {
      step: "02",
      title: "Understand",
      desc: "Apply machine learning to correlate events and identify patterns.",
      outcome: "Contextual awareness of operational state"
    },
    {
      step: "03",
      title: "Decide",
      desc: "Use decision intelligence to recommend the best remediation path.",
      outcome: "Faster, more accurate decision-making"
    },
    {
      step: "04",
      title: "Act",
      desc: "Trigger automated workflows through ServiceNow, automation platforms, or scripts.",
      outcome: "Immediate resolution with reduced manual effort"
    },
    {
      step: "05",
      title: "Learn",
      desc: "Continuously improve models based on the outcomes of previous actions.",
      outcome: "Increasingly autonomous operations over time"
    }
  ];

  const whyHadron = [
    {
      title: "ServiceNow AI Capabilities",
      desc: "Implement Now Assist, AI Search, Task Intelligence, and autonomous agents natively within the platform."
    },
    {
      title: "Salesforce Einstein",
      desc: "Drive intelligent CRM and customer operations with generative and predictive capabilities."
    },
    {
      title: "SAP & Enterprise Core",
      desc: "Integrate intelligent workflows directly into ERP and core business systems."
    },
    {
      title: "Cloud Native AI",
      desc: "Build scalable, secure AI foundations on AWS and Microsoft environments."
    }
  ];

  return (
    <ServiceLayout 
      title="AI-Powered Enterprise Transformation"
      subtitle="From Digital Transformation to Intelligent Transformation. Move beyond isolated pilots and embed intelligence, generative AI, and automation directly into the platforms and workflows that run your business."
      solutionsImgUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="AI Transformation"
    />
  );
}
