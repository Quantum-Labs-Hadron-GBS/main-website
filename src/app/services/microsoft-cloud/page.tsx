"use client";

import ServiceLayout from "../ServiceLayout";

export default function MicrosoftCloudPage() {
  return (
    <ServiceLayout
      expertName="Microsoft Cloud"
      title="Empower Your Digital Future with Hadron GBS & Microsoft Cloud"
      subtitle="At Hadron GBS, we help organizations harness the full potential of the world’s most integrated technology stack. As a strategic Microsoft Solutions Partner, we empower businesses to modernize their infrastructure, secure their data, and reinvent productivity through AI-driven workflows. From migrating legacy workloads to Azure to deploying Microsoft 365 and Dynamics 365, we ensure your technology drives measurable business impact."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785326085/From_Klickpin.com-_Smart_entryway_makeover_ideas_for_a_polished_look_people_will_notice_using_practical_inspiration_that_still_feels_highly_aesthe_hzkbhs.mp4"
      heroVideoRotated={true}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324497/ChatGPT_Image_Jul_29_2026_04_31_38_PM_nsgc22.png"
      solutions={[
        { title: "Microsoft Azure (Cloud Infrastructure)", desc: "Accelerate your digital transformation with secure cloud migrations, app modernization, and scalable data analytics." },
        { title: "Dynamics 365 (Business Applications)", desc: "Unify your front and back-office operations with intelligent CRM and ERP solutions that streamline sales, finance, and supply chain management." },
        { title: "Microsoft 365 (Modern Work)", desc: "Transform how your teams collaborate with secure, cloud-based productivity tools including Teams, SharePoint, and advanced endpoint management." },
        { title: "Microsoft Copilot & AI", desc: "Integrate next-generation Generative AI into your daily applications to automate content creation, summarize meetings, and analyze complex data in real-time." },
        { title: "Power Platform", desc: "Empower your team to build custom low-code apps, automate repetitive workflows with Power Automate, and visualize data through Power BI." },
        { title: "Microsoft Purview & Sentinel", desc: "Protect your enterprise with advanced data governance and a cloud-native SIEM to detect and respond to threats across your entire digital estate." },
        { title: "Microsoft Intune (Endpoint Management)", desc: "Simplify device management and ensure secure access for your remote and hybrid workforce across all platforms." }
      ]}
      framework={[
        { step: "01", title: "Consulting & Advisory", desc: "We begin by aligning your business objectives with the right Microsoft licensing and architecture. Whether you are planning a ‘Cloud-First’ transition or optimizing your current tenant, we build a roadmap focused on cost-efficiency and security compliance.", outcome: "A strategic transformation blueprint that minimizes waste and maximizes the value of your Microsoft investment." },
        { step: "02", title: "Implementation & Execution", desc: "Our team handles the heavy lifting of deployment—from Azure landing zones and data migrations to the setup of complex Dynamics 365 environments. We prioritize security and identity management (Entra ID) to ensure your transition is seamless and protected.", outcome: "A stable, high-performance Microsoft environment integrated with your existing enterprise applications and identity providers." },
        { step: "03", title: "Operational Support & Managed Services", desc: "The Microsoft Cloud is constantly evolving. We provide proactive platform management, including monthly security updates, cost-optimization audits (FinOps), and 24/7 technical support to ensure your systems remain resilient and up-to-date.", outcome: "Continuous platform optimization and zero-disruption upgrades, allowing your team to focus on core business strategy." }
      ]}
      whyHadron={[
        { title: "Integrated Ecosystem Expertise", desc: "Our refined deployment methodologies reduce time-to-market, helping you see ROI faster." },
        { title: "AI-Ready Foundation", desc: "We help you prepare your data and security posture today so you can successfully deploy Microsoft Copilot tomorrow." },
        { title: "Security-First Mindset", desc: "We implement Microsoft’s Zero Trust framework by default, ensuring your data remains protected in an increasingly complex threat landscape." }
      ]}
    />
  );
}

