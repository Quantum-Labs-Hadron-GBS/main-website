"use client";

import ServiceLayout from "../ServiceLayout";

export default function IvantiPage() {
  return (
    <ServiceLayout
      expertName="Ivanti"
      title="Secure and Manage the Everywhere Workstyle with Hadron GBS & Ivanti"
      subtitle="At Hadron GBS, we understand that the modern workforce is no longer confined to a single office or network. As a strategic Ivanti partner, we help organizations discover, manage, and secure every device and endpoint across the enterprise. By unifying IT Service Management (ITSM) with robust cybersecurity and endpoint intelligence, we ensure your employees remain productive and protected, regardless of their location."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785326082/From_Klickpin.com-_Smart_entryway_makeover_ideas_for_a_polished_look_people_will_notice_using_practical_inspiration_that_still_feels_highly_aesthe_3_f90ffh.mp4"
      heroVideoRotated={false}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324503/ChatGPT_Image_Jul_29_2026_04_22_55_PM_zej7ad.png"
      solutions={[
        { title: "Ivanti Neurons for ITSM", desc: "Modernize service delivery with a flexible, cloud-optimized platform that automates workflows and improves the employee experience." },
        { title: "Ivanti Neurons for UEM (Unified Endpoint Management)", desc: "Gain a 360-degree view of your entire device estate—including mobile, desktop, and IoT—to manage them through a single pane of glass." },
        { title: "Ivanti Neurons for Patch Management", desc: "Proactively identify and patch vulnerabilities across your environment to stay ahead of cyber threats." },
        { title: "Ivanti Neurons for Zero Trust Access", desc: "Secure your digital perimeter by ensuring only authorized users and 'healthy' devices can access sensitive corporate data." },
        { title: "Ivanti Neurons for DEX (Digital Employee Experience)", desc: "Proactively measure and optimize the digital experience of your workforce by identifying and resolving device issues before they are reported." },
        { title: "Ivanti Neurons for Asset Management", desc: "Track the complete lifecycle of your hardware and software assets to maximize utilization and ensure compliance." }
      ]}
      framework={[
        { step: "01", title: "Consulting & Advisory", desc: "We start by auditing your current endpoint landscape and security posture. We work with you to define a roadmap that prioritizes visibility and risk reduction, aligning Ivanti’s capabilities with your specific compliance and operational requirements.", outcome: "A strategic implementation plan designed to eliminate ‘blind spots’ in your infrastructure and enhance service delivery." },
        { step: "02", title: "Implementation & Execution", desc: "Our team manages the full deployment of the Ivanti Neurons platform, ensuring seamless integration with your existing security tools and directory services. We focus on automating repetitive tasks—like patch deployment and software distribution—to drive immediate efficiency.", outcome: "A fully integrated, automated management environment that scales with your growing device count." },
        { step: "03", title: "Operational Support & Managed Services", desc: "Endpoint management is a continuous process. We provide proactive monitoring, platform updates, and ongoing security tuning to ensure your Ivanti environment stays optimized against the latest vulnerabilities and performance issues.", outcome: "Sustained platform health and peace of mind, knowing your ‘Everywhere Work’ environment is managed by experts." }
      ]}
      whyHadron={[
        { title: "Security-Centric IT", desc: "We don’t just manage devices; we secure them. Our expertise ensures that management and security work hand-in-hand." },
        { title: "Focus on Experience", desc: "We utilize Ivanti’s DEX capabilities to ensure that IT improvements lead to happier, more productive employees." },
        { title: "Operational Agility", desc: "We help you pivot quickly, whether you are onboarding a remote workforce or responding to a zero-day vulnerability." }
      ]}
    />
  );
}

