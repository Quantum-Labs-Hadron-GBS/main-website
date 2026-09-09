"use client";

import ServiceLayout from "../ServiceLayout";

export default function SalesforcePage() {
  return (
    <ServiceLayout
      expertName="Salesforce"
      title="Accelerate Enterprise Growth with Hadron GBS & Salesforce"
      subtitle="At Hadron GBS, we believe every interaction—whether with a customer or an employee—is an opportunity for growth. As a strategic Salesforce partner, we help organizations transition from siloed data to a unified, 360-degree view of their entire business. By leveraging the world’s #1 AI CRM and its expanding service capabilities, we empower your teams to work smarter, close deals faster, and deliver seamless internal support."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785326087/414330dbc452b6e40004da2889ac168c_nuytqv.mp4"
      heroVideoRotated={true}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324496/ChatGPT_Image_Jul_29_2026_03_20_31_PM_j7g9xc.png"
      solutions={[
        { title: "Sales Cloud", desc: "Drive revenue growth with automated lead management, advanced forecasting, and AI-powered pipeline insights." },
        { title: "Service Cloud", desc: "Modernize your internal service desk by bringing IT Service Management onto the Salesforce platform. Unify employee support, asset tracking, and incident resolution within the same interface your business already trusts." },
        { title: "Marketing Cloud", desc: "Create personalized, data-driven customer journeys across email, mobile, and social to drive higher engagement and ROI." },
        { title: "Experience Cloud", desc: "Build branded communities and portals for customers and partners to collaborate and access self-service resources." },
        { title: "Data Cloud", desc: "Harmonize all your enterprise data into a single, real-time profile to power smarter, AI-driven decision-making." },
        { title: "Einstein AI", desc: "Integrate predictive and generative AI across your workflows to automate routine tasks and provide hyper-personalized experiences." },
        { title: "Agentforce", desc: "Deploy autonomous AI agents directly within Salesforce to handle complex, multi-step business tasks across sales, service, and operations—without human intervention." }
      ]}
      framework={[
        { step: "01", title: "Consulting & Advisory", desc: "We start by understanding your sales cycles and internal service requirements. We help you navigate Salesforce’s extensive feature set to build a roadmap that prioritizes user adoption and high-impact business outcomes.", outcome: "A strategic CRM and ITSM blueprint that eliminates process friction and aligns technology with your revenue and operational goals." },
        { step: "02", title: "Implementation & Execution", desc: "Our team handles everything from initial data migration to complex Apex coding and workflow automation. We ensure your Salesforce instance is configured for maximum efficiency, ensuring your IT and Sales teams operate on a single, secure source of truth.", outcome: "A clean, scalable Salesforce environment integrated seamlessly with your existing enterprise tech stack." },
        { step: "03", title: "Operational Support & Managed Services", desc: "Salesforce is a dynamic platform with constant innovation. We provide proactive administration, performance tuning, and user training to ensure you are always leveraging the latest features while maintaining peak data hygiene.", outcome: "Sustained platform ROI, minimized technical debt, and a system that evolves as your business grows." }
      ]}
      whyHadron={[
        { title: "Unified Operations", desc: "We specialize in breaking down silos by bringing Sales, Customer Service, and IT Support (ITSM) together on a single platform." },
        { title: "AI-First Implementation", desc: "We help you deploy Salesforce Einstein to move from manual data entry to proactive, AI-driven business intelligence." },
        { title: "Rapid Time-to-Value", desc: "Our agile deployment methodology ensures you get your core functions live quickly, delivering measurable impact from day one." }
      ]}
    />
  );
}

