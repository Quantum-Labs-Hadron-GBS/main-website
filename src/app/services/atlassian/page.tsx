"use client";

import ServiceLayout from "../ServiceLayout";

export default function AtlassianPage() {
  return (
    <ServiceLayout
      expertName="Atlassian"
      title="Unleash Team Potential with Hadron GBS & Atlassian"
      subtitle="At Hadron GBS, we believe that high-performing teams are the engine of every successful enterprise. As a dedicated Atlassian partner, we help organizations break down silos, accelerate software delivery, and foster a culture of open collaboration. By optimizing the Atlassian stack, we transform how your teams plan, track, and support work—moving you from fragmented communication to unified project mastery."
      heroVideoUrl="https://res.cloudinary.com/ax6dtcht/video/upload/v1785324524/I_want_light_themed_D_abstrac_ogyy4a.mp4"
      heroVideoRotated={false}
      solutionsImgUrl="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324512/ChatGPT_Image_Jul_29_2026_04_43_09_PM_akexyx.png"
      solutions={[
        { title: "Jira Software", desc: "The gold standard for agile project management. We configure custom workflows, boards, and roadmaps to keep your software teams aligned and shipping faster." },
        { title: "Jira Service Management (JSM)", desc: "Modernize your IT and business support with a high-velocity service desk that integrates seamlessly with development workflows." },
        { title: "Confluence", desc: "Create a single source of truth for your organization. We help you structure workspaces and pages to ensure knowledge is shared, not siloed." },
        { title: "Jira Product Discovery", desc: "Bridge the gap between ideas and execution by prioritizing the right features based on data and stakeholder feedback." },
        { title: "Atlassian Intelligence (AI)", desc: "Leverage built-in AI to summarize complex tickets, generate content in Confluence, and automate routine technical tasks." },
        { title: "Bitbucket & Bamboo", desc: "Optimize your CI/CD pipeline with secure code management and automated build processes integrated directly into your Jira tickets." },
        { title: "Compass", desc: "Gain a unified view of your distributed software architecture, helping your engineering teams manage microservices and improve health scores." }
      ]}
      framework={[
        { step: "01", title: "Consulting & Advisory", desc: "We assess your current team dynamics and tool sprawl to define a lean, integrated architecture. Whether you are moving to Atlassian Cloud or implementing a SAFe (Scaled Agile Framework) model, we build a roadmap focused on transparency and velocity.", outcome: "A strategic migration or optimization plan that simplifies your toolchain and aligns with business goals." },
        { step: "02", title: "Implementation & Execution", desc: "Our team handles the heavy lifting of configuration—from complex Jira permission schemes and automation rules to seamless integrations with third-party tools like Slack, GitHub, or Salesforce.", outcome: "A tailored, high-performance workspace that teams actually enjoy using, built on industry best practices." },
        { step: "03", title: "Operational Support & Managed Services", desc: "Maximize your platform’s health with proactive administration. We manage your cloud environment, handle app integrations, perform routine clean-ups, and provide expert training to ensure your teams stay productive as the platform evolves.", outcome: "A ‘set-and-thrive’ environment with zero technical debt and continuous optimization for peak performance." }
      ]}
      whyHadron={[
        { title: "Agile Expertise", desc: "We don’t just set up Jira; we understand the Agile and DevOps principles that make it work, ensuring your processes drive the tools (not the other way around)." },
        { title: "Seamless Migration", desc: "We specialize in moving legacy, on-premise instances to Atlassian Cloud with zero data loss and minimal downtime." },
        { title: "Unified Visibility", desc: "We help leadership gain real-time insights into project health, team capacity, and deployment cycles through advanced Jira reporting and dashboards." }
      ]}
    />
  );
}

