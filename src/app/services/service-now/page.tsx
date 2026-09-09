"use client";

import React from "react";
import ServiceLayout from "../ServiceLayout";

const solutions = [
  {
    title: "IT Service Management (ITSM)",
    desc: "Modernize IT operations with automated service delivery and AI-driven insights to reduce resolution times."
  },
  {
    title: "IT Operations Management (ITOM)",
    desc: "Gain full visibility into your infrastructure to proactively manage health, optimize spend, and prevent outages."
  },
  {
    title: "Customer Service Management (CSM)",
    desc: "Connect your front, middle, and back offices to solve customer issues end-to-end and boost satisfaction."
  },
  {
    title: "HR Service Delivery (HRSD)",
    desc: "Simplify the employee experience with a unified portal for requests, onboarding, and case management."
  },
  {
    title: "Security Operations (SecOps)",
    desc: "Accelerate response times by connecting security tools with automated workflows and threat prioritization."
  },
  {
    title: "Governance, Risk & Compliance (GRC)",
    desc: "Manage risk in real-time by integrating compliance requirements into daily workflows."
  },
  {
    title: "App Engine & Automation",
    desc: "Rapidly build and deploy custom low-code applications tailored to your unique business logic."
  },
  {
    title: "Autonomous AI Agents",
    desc: "Deploy intelligent, goal-driven agents that autonomously execute multi-step tasks across IT, HR, and customer service workflows—reducing human intervention and accelerating resolution at scale."
  },
  {
    title: "Now Assist (GenAI)",
    desc: "Embed generative AI natively across the ServiceNow platform to summarise cases, draft responses, generate code, and surface contextual recommendations—empowering agents and employees with instant, accurate guidance."
  },
  {
    title: "AI Control Tower & Agent Studio",
    desc: "Govern, monitor, and orchestrate your entire AI agent ecosystem from a single control plane. Build, test, and deploy custom agents using Agent Studio—ensuring enterprise-grade reliability, transparency, and compliance across every automated workflow."
  }
];

const framework = [
  {
    step: "01",
    title: "Consulting & Advisory",
    desc: "Before the first line of configuration, we focus on alignment. We assess your current digital maturity, identify process bottlenecks, and build a phased roadmap designed for immediate impact.",
    outcome: "A strategic blueprint that prioritizes high-value use cases and ensures executive alignment."
  },
  {
    step: "02",
    title: "Implementation & Execution",
    desc: "Moving from plan to reality requires precision. Our team handles end-to-end deployment, ensuring seamless integration with your existing tech stack and a rollout that minimizes business disruption.",
    outcome: "A stable, high-performance platform deployed on time, built to scale with your enterprise."
  },
  {
    step: "03",
    title: "Operational Support & Managed Services",
    desc: "Maximize the longevity of your investment with proactive platform management. From version upgrades and performance tuning to daily user support, we ensure your ServiceNow instance evolves with your business.",
    outcome: "Continuous optimization and zero-downtime upgrades, allowing your internal teams to focus on core innovation."
  }
];

const whyHadron = [
  {
    title: "Speed to Value",
    desc: "Our refined deployment methodologies reduce time-to-market, helping you see ROI faster."
  },
  {
    title: "Measurable Impact",
    desc: "We focus on KPIs, reducing manual work, lowering operational costs, and increasing service transparency."
  },
  {
    title: "Reliability",
    desc: "We act as an extension of your team, providing the technical depth and consistency required to manage mission-critical workflows."
  }
];

export default function ServiceNowPage() {
  return (
    <ServiceLayout 
      title="Transform Your Enterprise with Hadron GBS & ServiceNow"
      subtitle="At Hadron GBS, we bridge the gap between complex enterprise challenges and streamlined digital workflows. As a dedicated ServiceNow partner, we empower organizations to consolidate fragmented processes into a single, unified platform that drives efficiency, transparency, and growth."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785324517/now_in_this_same_theme_like_amrowr.mp4"
      heroVideoRotated={false}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324505/ChatGPT_Image_Jul_29_2026_04_38_36_PM_lk2skj.png"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="ServiceNow"
    />
  );
}
