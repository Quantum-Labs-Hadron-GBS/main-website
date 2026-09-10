"use client";

import React from "react";
import ServiceLayout from "@/app/services/ServiceLayout";

export default function EducationIndustry() {
  const solutions = [
    {
      title: "Digital & Application Modernization",
      desc: "Modernize legacy applications and build scalable digital services using modern architectures."
    },
    {
      title: "Cloud Adoption",
      desc: "Move infrastructure and applications toward secure, scalable cloud environments."
    },
    {
      title: "IT & Enterprise Service Management",
      desc: "Improve the delivery of IT and employee services through structured workflows, self-service, automation, and service visibility."
    },
    {
      title: "Employee Experience",
      desc: "Simplify interactions between employees and institutional services."
    },
    {
      title: "Intelligent Automation",
      desc: "Automate repetitive administrative and operational processes while improving visibility and consistency."
    },
    {
      title: "AI-Ready Operations",
      desc: "Prepare enterprise environments for responsible adoption of generative AI, intelligent automation, and AI-enabled workflows."
    }
  ];

  const framework = [
    {
      step: "01",
      title: "Assess",
      desc: "Evaluate existing student and administrative platforms, technical debt, and cloud readiness.",
      outcome: "Identified modernization opportunities"
    },
    {
      step: "02",
      title: "Design",
      desc: "Architect a scalable, secure digital foundation tailored for institutional demands.",
      outcome: "A future-proof technical blueprint"
    },
    {
      step: "03",
      title: "Transform",
      desc: "Migrate infrastructure, modernize legacy applications, and implement enterprise service management.",
      outcome: "Unified, accessible educational services"
    },
    {
      step: "04",
      title: "Operate",
      desc: "Deliver continuous monitoring, performance optimization, and IT operational support.",
      outcome: "Stable, high-performance institutional systems"
    },
    {
      step: "05",
      title: "Optimize",
      desc: "Deploy AI and automation to enhance student experiences and streamline administration.",
      outcome: "Intelligent, connected educational operations"
    }
  ];

  const whyHadron = [
    {
      title: "Build the Foundation",
      desc: "Technology transformation in education is not only about introducing new tools. It is about creating an environment where services are easier to access and operations are easier to manage."
    },
    {
      title: "Future-Proof Architecture",
      desc: "We ensure applications are easier to evolve and technology can adapt as institutional needs change."
    },
    {
      title: "Connected Platforms",
      desc: "Implementation and integration expertise across ServiceNow, Microsoft, AWS, Salesforce, Atlassian, and Freshworks."
    }
  ];

  return (
    <ServiceLayout 
      title="Modern Technology for Connected Education Operations"
      subtitle="Education organizations increasingly depend on digital platforms across administration, employee services, applications, infrastructure, and student-facing experiences. Hadron GBS helps education organizations modernize their technology environments."
      solutionsImgUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
      solutions={solutions}
      framework={framework}
      whyHadron={whyHadron}
      expertName="Education Technology"
    />
  );
}
