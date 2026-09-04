"use client";

import ServiceLayout from "../ServiceLayout";

export default function FreshworksPage() {
  return (
    <ServiceLayout
      expertName="Freshworks"
      title="Reimagine Customer & Employee Experience with Hadron GBS & Freshworks"
      subtitle="At Hadron GBS, we accelerate enterprise transformation by aligning proven implementation expertise with best-in-class SaaS platforms. Freshworks delivers a modern, AI-powered platform for customer support, IT service management, CRM, engagement, and marketing automation. As a dedicated Freshworks partner, Hadron GBS helps organizations implement, integrate, and optimize Freshworks to enhance customer experience, employee experience, and operational efficiency."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785326079/From_Klickpin.com-_Smart_entryway_makeover_ideas_for_a_polished_look_people_will_notice_using_practical_inspiration_that_still_feels_highly_aesthe_1_uetggx.mp4"
      heroVideoRotated={true}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324505/ChatGPT_Image_Jul_29_2026_04_38_36_PM_lk2skj.png"
      solutions={[
        { title: "Freshdesk — Customer Support", desc: "Empower your support teams with a multi-channel helpdesk built for scale. Streamline ticket routing, SLA management, and knowledge base operations to reduce resolution times and elevate customer satisfaction scores." },
        { title: "Freshservice — IT Service Management (ITSM)", desc: "Modernize internal IT operations with a purpose-built ITSM platform. Automate incident, change, and asset management workflows to improve service delivery and reduce operational overhead for IT teams." },
        { title: "Freshsales — CRM & Sales Automation", desc: "Accelerate revenue generation with an AI-powered CRM that unifies contact management, deal pipelines, and sales activity tracking. Give your sales teams full visibility from lead to close, with intelligent scoring and forecasting built in." },
        { title: "Freshchat — Conversational Engagement", desc: "Deploy intelligent, real-time messaging across web, mobile, and social channels. Enable proactive customer engagement, in-app support, and bot-assisted resolution to reduce agent load while increasing customer responsiveness." },
        { title: "Freshmarketer — Marketing Automation", desc: "Orchestrate personalized, data-driven marketing campaigns across the customer lifecycle. Leverage behavioral segmentation, A/B testing, and funnel analytics to convert leads faster and nurture long-term relationships." },
        { title: "Freshworks AI — Freddy AI", desc: "Infuse artificial intelligence across every Freshworks product. From auto-triaging tickets and predicting CSAT to generating sales insights and suggesting next-best actions, Freddy AI transforms reactive operations into proactive, intelligent service delivery." },
        { title: "Omnichannel Experience & Automation", desc: "Unify customer and employee interactions across email, phone, chat, social, and self-service portals into a single, coherent experience. Leverage automation to eliminate manual handoffs, enforce consistent workflows, and drive seamless engagement at every touchpoint." }
      ]}
      framework={[
        { step: "01", title: "Consulting & Advisory", desc: "Before a single workflow is configured, we invest in understanding your business. Our consultants conduct a comprehensive digital experience assessment — evaluating your current CX and EX capabilities, identifying process gaps, and benchmarking against industry standards. We develop a prioritized CX/ITSM roadmap that aligns Freshworks capabilities with your strategic objectives, ensuring every implementation decision is grounded in real business impact.", outcome: "A clear, executive-aligned strategy that defines high-value use cases, prioritizes quick wins, and establishes a foundation for long-term platform scalability." },
        { step: "02", title: "Implementation & Execution", desc: "Translating strategy into a production-grade platform requires precision and experience. Our implementation teams handle end-to-end platform deployment — from environment configuration and data migration to API-based integration with your existing CRM, ERP, HRMS, and communication tools. We configure automation rules, SLA policies, escalation workflows, and Freddy AI models tailored to your operational context, ensuring the platform is live, stable, and immediately delivering value.", outcome: "A fully integrated Freshworks environment deployed on schedule, with automated workflows and live integrations that eliminate manual effort from day one." },
        { step: "03", title: "Operational Support & Managed Services", desc: "Maximizing long-term platform value requires ongoing expertise. Hadron GBS provides continuous optimization services — analyzing usage patterns, performance metrics, and support trends to identify new automation opportunities and configuration improvements. We proactively monitor platform health, manage version upgrades, and deliver tiered user support to ensure your Freshworks ecosystem evolves in step with your business needs.", outcome: "Sustained platform performance and continuous improvement, with proactive management that frees your internal teams to focus on core business priorities rather than platform maintenance." }
      ]}
      whyHadron={[
        { title: "Experience-Led Design Approach", desc: "We design every implementation around the real needs of the people who use the platform — customers and employees alike. Our solutions prioritize intuitive interfaces, logical workflows, and measurable satisfaction outcomes." },
        { title: "Rapid Time-to-Value", desc: "Our refined delivery methodologies eliminate deployment risk and accelerate go-live timelines. We focus on getting critical capabilities into production quickly, so your teams realize ROI early and build confidence in the platform from the start." },
        { title: "SaaS Optimization Expertise", desc: "Deep familiarity with the Freshworks platform means we configure beyond defaults. We extract the full capability of each product — fine-tuning automation, integrations, and reporting to match the complexity of enterprise operations." },
        { title: "AI-Driven Automation Focus", desc: "We treat Freddy AI not as a feature but as a core pillar of your service strategy. From intelligent ticket deflection and predictive agent assistance to AI-powered sales forecasting, we embed automation into every layer of your Freshworks deployment." }
      ]}
    />
  );
}

