"use client";

import ServiceLayout from "../ServiceLayout";

export default function BmcPage() {
  return (
    <ServiceLayout
      expertName="BMC"
      title="Empower Your Digital Enterprise with Hadron GBS & BMC Software"
      subtitle="At Hadron GBS, we specialize in turning operational complexity into a competitive advantage. As a strategic BMC Software partner, we help organizations transition from traditional IT management to Autonomous Digital Enterprise models. By leveraging BMC’s robust portfolio, we enable your business to scale with agility, automate at every level, and deliver data-driven insights."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785326078/From_Klickpin.com-_Smart_entryway_makeover_ideas_for_a_polished_look_people_will_notice_using_practical_inspiration_that_still_feels_highly_aesthe_4_dc5qsc.mp4"
      heroVideoRotated={true}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324510/ChatGPT_Image_Jul_29_2026_03_33_33_PM_p6zjbb.png"
      solutions={[
        { title: "BMC Helix Operations Management (AIOps)", desc: "Use advanced machine learning to predict, find, and fix issues before they impact the business." },
        { title: "Control-M (Workflow Orchestration)", desc: "Simplify application and data workflow orchestration, making it easy to build, deploy, manage, and monitor complex business services." },
        { title: "Mainframe Modernization (AMI)", desc: "Integrate your mainframe into your enterprise DevOps and security strategies with automated intelligence." },
        { title: "Service & Asset Management", desc: "Maintain a single source of truth for all hardware and software assets to optimize lifecycle costs and compliance." },
        { title: "BMC Helix ITSM", desc: "Elevate service management with AI-driven service desk capabilities that offer a modern, persona-based experience for users and agents." }
      ]}
      framework={[
        { step: "01", title: "Consulting & Advisory", desc: "We begin by evaluating your current IT maturity and identifying high-impact areas for automation. We align BMC’s powerful capabilities with your specific business objectives to create a clear, actionable roadmap.", outcome: "A tailored strategy that identifies process gaps and defines a clear path toward an autonomous digital state." },
        { step: "02", title: "Implementation & Execution", desc: "We handle the technical heavy lifting, from initial environment setup to complex integrations across hybrid environments. Our focus is on precision ensuring that systems like Control-M or Helix are configured to support your unique operational logic.", outcome: "A robust, high-availability platform integrated seamlessly with your existing enterprise architecture." },
        { step: "03", title: "Operational Support & Managed Services", desc: "Technology evolves, and so should your platform. We provide ongoing management, including proactive health checks, seamless upgrades, and performance tuning to ensure your BMC environment continues to deliver maximum ROI.", outcome: "Sustained system reliability and continuous optimization, freeing your internal talent to focus on core business innovation." }
      ]}
      whyHadron={[
        { title: "Expertise in Complexity", desc: "We excel at managing the intricate workflows of large-scale enterprises, ensuring stability across diverse environments." },
        { title: "Outcome-Centric Approach", desc: "We don’t just track tasks; we track business impact focused on reducing MTTR (Mean Time to Repair) and increasing automation rates." },
        { title: "End-to-End Reliability", desc: "From the mainframe to the cloud, we provide the technical depth and consistent support required to maintain mission-critical business services." }
      ]}
    />
  );
}

