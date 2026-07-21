import ServiceLayout from "../../ServiceLayout";

export default function Page() {
  return (
    <ServiceLayout
      breadcrumbName="Tennon"
      title={`Unify Marketing Operations on ServiceNow with <span style="color: var(--accent);">Hadron GBS & Tennon</span>`}
      subtitle="Unlock the full potential of ServiceNow with Tennon. Hadron GBS helps marketing teams streamline planning, campaign execution, and performance tracking on a single platform eliminating silos, reducing complexity, and driving smarter collaboration across the enterprise."
      solutions={[
        { title: "Marketing Automation", desc: "Automate full-funnel customer journeys triggered by real behavioral data already living in ServiceNow. Tennon\'s automation suite eliminates manual handoffs between marketing and service teams, ensuring every customer interaction is timely, relevant, and data-driven." },
        { title: "Audience Segmentation & List Management", desc: "Build precise, dynamic audience segments using the unified data already in your ServiceNow environment. Intelligent segmentation, automatic list updates, and advanced account insights ensure every campaign reaches exactly the right audience." },
        { title: "Marketing Calendar & Agile Boards", desc: "Visualize all marketing activity through a unified calendar and task view. Tennon\'s agile marketing capabilities allow teams to manage sprint-based campaign work alongside broader program timelines, giving leaders full visibility into capacity and progress." },
        { title: "Marketing Insights & Performance Reporting", desc: "Measure what matters with role-based dashboards designed for CMOs and marketing operations teams. Track campaign ROI, engagement metrics, and budget performance, all in context with the broader enterprise workflows your business depends on." },
        { title: "Cross-Functional Collaboration", desc: "Tennon breaks down the walls between marketing, sales, IT, and service teams by operating within the same ServiceNow instance. Shared data, integrated workflows, and unified visibility ensure alignment across every function that touches the customer journey." },
        { title: "Marketing Work Management", desc: "Bring every campaign, project, and task onto a single platform. Tennon\'s intuitive templates, agile marketing boards, and automated approval workflows keep stakeholders aligned from brief to launch, eliminating reliance on disconnected spreadsheets and email threads." },
        { title: "Campaign Planning & Execution", desc: "Plan, launch, and manage multi-channel marketing campaigns, including email, SMS, and landing pages, without leaving ServiceNow. Tennon\'s drag-and-drop campaign builder and scheduling tools give marketing teams the speed and visibility they need to execute at enterprise scale." }
      ]}
      framework={[
        { step: "01", title: "Consulting & Advisory", desc: "We begin by assessing your current marketing operations maturity, evaluating tool sprawl, campaign processes, and cross-functional alignment gaps. We develop a prioritized roadmap that maps Tennon’s capabilities to your specific marketing objectives.", outcome: "A clear, executive-aligned strategy that defines high-value use cases, identifies quick wins, and establishes a scalable foundation for unified marketing operations on ServiceNow." },
        { step: "02", title: "Implementation & Execution", desc: "Our team handles end-to-end deployment, configuring Tennon’s work management and automation modules, migrating existing campaign data, and integrating with your CRM, sales, and customer service workflows within ServiceNow.", outcome: "A fully configured Tennon environment deployed on schedule, with live automations and integrated workflows that eliminate manual effort and accelerate campaign execution from day one." },
        { step: "03", title: "Operational Support & Managed Services", desc: "Maximizing long-term platform value requires ongoing expertise. Hadron GBS provides continuous optimization, analyzing usage patterns, refining automation rules, and surfacing new capabilities as Tennon evolves.", outcome: "Sustained platform performance and continuous improvement, with proactive management that frees your marketing team to focus on strategy and creative execution." }
      ]}
      whyHadron={[
        { title: "ServiceNow-First Marketing", desc: "We understand that the most powerful marketing transformation happens when marketing teams operate on the same platform as IT, HR, and service. Our deep ServiceNow expertise means Tennon is always configured in the context of your broader enterprise architecture." },
        { title: "Elimination of Tool Sprawl", desc: "We specialize in consolidating fragmented marketing toolsets onto a single, governed platform reducing integration complexity, improving data accuracy, and lowering total cost of ownership across your marketing technology stack." },
        { title: "Data-Driven Campaign Delivery", desc: "We configure Tennon’s segmentation and automation capabilities to leverage the rich operational data already in ServiceNow—ensuring campaigns are targeted, timely, and grounded in real business context rather than isolated marketing data." },
        { title: "Cross-Functional Alignment", desc: "We build Tennon deployments designed to bridge marketing, sales, and service teams—creating shared workflows and unified visibility that connect marketing outcomes to broader enterprise goals and customer experience metrics." }
      ]}
    />
  );
}
