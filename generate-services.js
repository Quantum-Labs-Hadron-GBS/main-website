const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'app', 'services');

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const makePage = (dir, title, subtitle, solutions, framework, whyHadron) => {
  ensureDir(path.join(pagesDir, dir));
  const depth = dir.split('/').length;
  // If dir is 'sap' (length 1), it's in src/app/services/sap/page.tsx
  // ServiceLayout is in src/app/services/ServiceLayout.tsx
  // So the relative path is '../ServiceLayout'
  const relativePath = depth === 1 ? '../ServiceLayout' : '../../ServiceLayout';
  const content = `import ServiceLayout from "${relativePath}";

export default function Page() {
  return (
    <ServiceLayout
      title={\`${title}\`}
      subtitle="${subtitle}"
      solutions={[
        ${solutions.map(s => `{ title: "${s.title}", desc: "${s.desc}" }`).join(',\n        ')}
      ]}
      framework={[
        ${framework.map(f => `{ step: "${f.step}", title: "${f.title}", desc: "${f.desc}", outcome: "${f.outcome}" }`).join(',\n        ')}
      ]}
      whyHadron={[
        ${whyHadron.map(w => `{ title: "${w.title}", desc: "${w.desc}" }`).join(',\n        ')}
      ]}
    />
  );
}
`;
  fs.writeFileSync(path.join(pagesDir, dir, 'page.tsx'), content);
};

// --- DATA ---
// 1. Tennon
makePage('service-now/tennon', 
  'Unify Marketing & Enterprise Operations with <span style="color: var(--accent);">Hadron GBS & Tennon</span>',
  'Unlock the full potential of ServiceNow with Tennon. Hadron GBS helps marketing teams streamline planning, campaign execution, and performance tracking on a single platform eliminating silos, reducing complexity, and driving smarter collaboration across the enterprise.',
  [
    { title: 'Marketing Automation', desc: "Automate full-funnel customer journeys triggered by real behavioral data already living in ServiceNow. Tennon\\'s automation suite eliminates manual handoffs between marketing and service teams, ensuring every customer interaction is timely, relevant, and data-driven." },
    { title: 'Audience Segmentation & List Management', desc: 'Build precise, dynamic audience segments using the unified data already in your ServiceNow environment. Intelligent segmentation, automatic list updates, and advanced account insights ensure every campaign reaches exactly the right audience.' },
    { title: 'Marketing Calendar & Agile Boards', desc: "Visualize all marketing activity through a unified calendar and task view. Tennon\\'s agile marketing capabilities allow teams to manage sprint-based campaign work alongside broader program timelines, giving leaders full visibility into capacity and progress." },
    { title: 'Marketing Insights & Performance Reporting', desc: 'Measure what matters with role-based dashboards designed for CMOs and marketing operations teams. Track campaign ROI, engagement metrics, and budget performance, all in context with the broader enterprise workflows your business depends on.' },
    { title: 'Cross-Functional Collaboration', desc: 'Tennon breaks down the walls between marketing, sales, IT, and service teams by operating within the same ServiceNow instance. Shared data, integrated workflows, and unified visibility ensure alignment across every function that touches the customer journey.' },
    { title: 'Marketing Work Management', desc: "Bring every campaign, project, and task onto a single platform. Tennon\\'s intuitive templates, agile marketing boards, and automated approval workflows keep stakeholders aligned from brief to launch, eliminating reliance on disconnected spreadsheets and email threads." },
    { title: 'Campaign Planning & Execution', desc: "Plan, launch, and manage multi-channel marketing campaigns, including email, SMS, and landing pages, without leaving ServiceNow. Tennon\\'s drag-and-drop campaign builder and scheduling tools give marketing teams the speed and visibility they need to execute at enterprise scale." }
  ],
  [
    { step: '01', title: 'Consulting & Advisory', desc: 'We begin by assessing your current marketing operations maturity, evaluating tool sprawl, campaign processes, and cross-functional alignment gaps. We develop a prioritized roadmap that maps Tennon’s capabilities to your specific marketing objectives.', outcome: 'A clear, executive-aligned strategy that defines high-value use cases, identifies quick wins, and establishes a scalable foundation for unified marketing operations on ServiceNow.' },
    { step: '02', title: 'Implementation & Execution', desc: 'Our team handles end-to-end deployment, configuring Tennon’s work management and automation modules, migrating existing campaign data, and integrating with your CRM, sales, and customer service workflows within ServiceNow.', outcome: 'A fully configured Tennon environment deployed on schedule, with live automations and integrated workflows that eliminate manual effort and accelerate campaign execution from day one.' },
    { step: '03', title: 'Operational Support & Managed Services', desc: 'Maximizing long-term platform value requires ongoing expertise. Hadron GBS provides continuous optimization, analyzing usage patterns, refining automation rules, and surfacing new capabilities as Tennon evolves.', outcome: 'Sustained platform performance and continuous improvement, with proactive management that frees your marketing team to focus on strategy and creative execution.' }
  ],
  [
    { title: 'ServiceNow-First Marketing', desc: 'We understand that the most powerful marketing transformation happens when marketing teams operate on the same platform as IT, HR, and service. Our deep ServiceNow expertise means Tennon is always configured in the context of your broader enterprise architecture.' },
    { title: 'Elimination of Tool Sprawl', desc: 'We specialize in consolidating fragmented marketing toolsets onto a single, governed platform reducing integration complexity, improving data accuracy, and lowering total cost of ownership across your marketing technology stack.' },
    { title: 'Data-Driven Campaign Delivery', desc: 'We configure Tennon’s segmentation and automation capabilities to leverage the rich operational data already in ServiceNow—ensuring campaigns are targeted, timely, and grounded in real business context rather than isolated marketing data.' },
    { title: 'Cross-Functional Alignment', desc: 'We build Tennon deployments designed to bridge marketing, sales, and service teams—creating shared workflows and unified visibility that connect marketing outcomes to broader enterprise goals and customer experience metrics.' }
  ]
);

// 2. Precision Bridge
makePage('service-now/precision-bridge',
  'Accelerate Your ServiceNow Migrations with <span style="color: var(--accent);">Hadron GBS & Precision Bridge</span>',
  'Hadron GBS, we understand that the biggest risk in any ServiceNow transformation is not the technology, it’s the data. Migrating millions of records from legacy platforms or between ServiceNow instances is complex, time consuming, and error-prone when handled manually.',
  [
    { title: 'Automated Data Migration', desc: 'Eliminate the risk and effort of manual data migration. Precision Bridge automates the transfer and transformation of application data from BMC Remedy, Salesforce, RSA Archer, Atlassian Jira, SharePoint, SQL Server, and Oracle-based systems to their ServiceNow equivalents, without data exports, formatting, scripting, or custom development of any kind.' },
    { title: 'ServiceNow Instance-to-Instance Migration', desc: 'Move data cleanly between ServiceNow instances, Greenfield, domain-separated, or consolidated environments, with complete relationship integrity preserved across records, attachments, and associated data.' },
    { title: 'Pre-Built Migration Templates', desc: 'Accelerate every migration with a library of configurable, pre-defined templates covering ITSM, ITBM, HR, CSM, and GRC applications. Templates eliminate the need to build migration logic from scratch and reduce project risk through proven, tested patterns.' },
    { title: 'Data Archiving', desc: 'Manage ServiceNow instance growth by archiving historical records to external data warehouses, on-premise or cloud-based, without impacting platform performance. Archived data remains accessible for BI reporting, auditing, and compliance requirements.' },
    { title: 'Data Replication & Synchronization', desc: 'Replicate or synchronize ServiceNow data to external systems in real time or on a scheduled basis, supporting business intelligence, integration scenarios, and disaster recovery requirements while maintaining full data integrity and relationship structures.' },
    { title: 'Advanced Field Mapping & Transformation', desc: "Handle complex data transformation requirements using Precision Bridge\\'s formula editor, supporting variables, functions, field references, and conditionals to map source data accurately to target structures without writing a single line of code." },
    { title: 'Real-Time Execution Monitoring & Reporting', desc: "Track every record through the migration process in real time. Precision Bridge\\'s reporting tools provide full traceability, filter, sort, and export migration reports to evidence data integrity and support post-migration validation." }
  ],
  [
    { step: '01', title: 'Consulting & Advisory', desc: 'We begin with a detailed assessment of your source data landscape, evaluating volumes, data quality, relationship complexity, and migration risk across all affected application areas. We produce a structured migration plan that defines scope, sequencing, cutover strategy, and validation checkpoints.', outcome: 'A risk-rated migration blueprint that eliminates assumptions, surfaces data quality issues early, and gives all stakeholders a clear, auditable path to a successful go-live.' },
    { step: '02', title: 'Implementation & Execution', desc: 'Our team configures Precision Bridge’s migration templates and field mappings to match your source and target data structures, handling custom fields, attachments, and complex relational data. We execute migrations in controlled waves.', outcome: 'A verified, complete data migration delivered on schedule, with full traceability records and a validated target environment ready for production use.' },
    { step: '03', title: 'Operational Support & Managed Services', desc: 'Data migration is rarely a one-time event. We provide ongoing support for iterative migration scenarios, data archiving programs, and replication pipelines, ensuring Precision Bridge continues to deliver value as your ServiceNow environment evolves.', outcome: 'Sustained data management capability and continuous migration readiness, ensuring your ServiceNow platform remains clean, performant, and reliably governed.' }
  ],
  [
    { title: 'Migration Without Risk', desc: 'We combine Precision Bridge’s automated tooling with our deep ServiceNow data architecture expertise to eliminate the most common causes of migration failure, data loss, relationship corruption, and cutover delays.' },
    { title: 'Speed Without Shortcuts', desc: 'Our pre-configured migration templates and proven delivery methodology significantly accelerate project timelines without compromising data quality or audit readiness. Projects that typically take months are delivered in weeks.' },
    { title: 'Cross-Platform Expertise', desc: 'We bring hands-on experience migrating from the platforms enterprises depend on most, BMC Helix, Salesforce, Jira, RSA Archer, and legacy SQL environments, ensuring your data arrives in ServiceNow correctly structured and immediately operational.' },
    { title: 'Post-Migration Confidence', desc: 'We don’t consider a migration complete at cutover. Our validation frameworks and post-migration support ensure that your target environment is fully verified, your teams are trained, and your data continues to perform correctly in production.' }
  ]
);

// 3. BMC
makePage('bmc',
  'Empower Your Digital Enterprise with <span style="color: var(--accent);">Hadron GBS & BMC Software</span>',
  'At Hadron GBS, we specialize in turning operational complexity into a competitive advantage. As a strategic BMC Software partner, we help organizations transition from traditional IT management to Autonomous Digital Enterprise models. By leveraging BMC’s robust portfolio, we enable your business to scale with agility, automate at every level, and deliver data-driven insights.',
  [
    { title: 'BMC Helix Operations Management (AIOps)', desc: 'Use advanced machine learning to predict, find, and fix issues before they impact the business.' },
    { title: 'Control-M (Workflow Orchestration)', desc: 'Simplify application and data workflow orchestration, making it easy to build, deploy, manage, and monitor complex business services.' },
    { title: 'Mainframe Modernization (AMI)', desc: 'Integrate your mainframe into your enterprise DevOps and security strategies with automated intelligence.' },
    { title: 'Service & Asset Management', desc: 'Maintain a single source of truth for all hardware and software assets to optimize lifecycle costs and compliance.' },
    { title: 'BMC Helix ITSM', desc: 'Elevate service management with AI-driven service desk capabilities that offer a modern, persona-based experience for users and agents.' }
  ],
  [
    { step: '01', title: 'Consulting & Advisory', desc: 'We begin by evaluating your current IT maturity and identifying high-impact areas for automation. We align BMC’s powerful capabilities with your specific business objectives to create a clear, actionable roadmap.', outcome: 'A tailored strategy that identifies process gaps and defines a clear path toward an autonomous digital state.' },
    { step: '02', title: 'Implementation & Execution', desc: 'We handle the technical heavy lifting, from initial environment setup to complex integrations across hybrid environments. Our focus is on precision ensuring that systems like Control-M or Helix are configured to support your unique operational logic.', outcome: 'A robust, high-availability platform integrated seamlessly with your existing enterprise architecture.' },
    { step: '03', title: 'Operational Support & Managed Services', desc: 'Technology evolves, and so should your platform. We provide ongoing management, including proactive health checks, seamless upgrades, and performance tuning to ensure your BMC environment continues to deliver maximum ROI.', outcome: 'Sustained system reliability and continuous optimization, freeing your internal talent to focus on core business innovation.' }
  ],
  [
    { title: 'Expertise in Complexity', desc: 'We excel at managing the intricate workflows of large-scale enterprises, ensuring stability across diverse environments.' },
    { title: 'Outcome-Centric Approach', desc: 'We don’t just track tasks; we track business impact focused on reducing MTTR (Mean Time to Repair) and increasing automation rates.' },
    { title: 'End-to-End Reliability', desc: 'From the mainframe to the cloud, we provide the technical depth and consistent support required to maintain mission-critical business services.' }
  ]
);

// 4. Ivanti
makePage('ivanti',
  'Secure and Manage the Everywhere Workstyle with <span style="color: var(--accent);">Hadron GBS & Ivanti</span>',
  'At Hadron GBS, we understand that the modern workforce is no longer confined to a single office or network. As a strategic Ivanti partner, we help organizations discover, manage, and secure every device and endpoint across the enterprise.',
  [
    { title: 'Ivanti Neurons for ITSM', desc: 'Modernize service delivery with a flexible, cloud-optimized platform that automates workflows and improves the employee experience.' },
    { title: 'Ivanti Neurons for UEM (Unified Endpoint Management)', desc: 'Gain a 360-degree view of your entire device estate—including mobile, desktop, and IoT—to manage them through a single pane of glass.' },
    { title: 'Ivanti Neurons for Patch Management', desc: 'Proactively identify and patch vulnerabilities across your environment to stay ahead of cyber threats.' },
    { title: 'Ivanti Neurons for Zero Trust Access', desc: 'Secure your digital perimeter by ensuring only authorized users and healthy devices can access sensitive corporate data.' },
    { title: 'Ivanti Neurons for DEX (Digital Employee Experience)', desc: 'Proactively measure and optimize the digital experience of your workforce by identifying and resolving device issues before they are reported.' },
    { title: 'Ivanti Neurons for Asset Management', desc: 'Track the complete lifecycle of your hardware and software assets to maximize utilization and ensure compliance.' }
  ],
  [
    { step: '01', title: 'Consulting & Advisory', desc: 'We start by auditing your current endpoint landscape and security posture. We work with you to define a roadmap that prioritizes visibility and risk reduction, aligning Ivanti’s capabilities with your specific compliance and operational requirements.', outcome: 'A strategic implementation plan designed to eliminate ‘blind spots’ in your infrastructure and enhance service delivery.' },
    { step: '02', title: 'Implementation & Execution', desc: 'Our team manages the full deployment of the Ivanti Neurons platform, ensuring seamless integration with your existing security tools and directory services. We focus on automating repetitive tasks—like patch deployment and software distribution—to drive immediate efficiency.', outcome: 'A fully integrated, automated management environment that scales with your growing device count.' },
    { step: '03', title: 'Operational Support & Managed Services', desc: 'Endpoint management is a continuous process. We provide proactive monitoring, platform updates, and ongoing security tuning to ensure your Ivanti environment stays optimized against the latest vulnerabilities and performance issues.', outcome: 'Sustained platform health and peace of mind, knowing your ‘Everywhere Work’ environment is managed by experts.' }
  ],
  [
    { title: 'Security-Centric IT', desc: 'We don’t just manage devices; we secure them. Our expertise ensures that management and security work hand-in-hand.' },
    { title: 'Focus on Experience', desc: 'We utilize Ivanti’s DEX capabilities to ensure that IT improvements lead to happier, more productive employees.' },
    { title: 'Operational Agility', desc: 'We help you pivot quickly, whether you are onboarding a remote workforce or responding to a zero-day vulnerability.' }
  ]
);

// 5. Atlassian
makePage('atlassian',
  'Unleash Team Potential with <span style="color: var(--accent);">Hadron GBS & Atlassian</span>',
  'At Hadron GBS, we believe that high-performing teams are the engine of every successful enterprise. As a dedicated Atlassian partner, we help organizations break down silos, accelerate software delivery, and foster a culture of open collaboration. By optimizing the Atlassian stack, we transform how your teams plan, track, and support work.',
  [
    { title: 'Jira Software', desc: 'The gold standard for agile project management. We configure custom workflows, boards, and roadmaps to keep your software teams aligned and shipping faster.' },
    { title: 'Jira Service Management (JSM)', desc: 'Modernize your IT and business support with a high-velocity service desk that integrates seamlessly with development workflows.' },
    { title: 'Confluence', desc: 'Create a single source of truth for your organization. We help you structure workspaces and pages to ensure knowledge is shared, not siloed.' },
    { title: 'Jira Product Discovery', desc: 'Bridge the gap between ideas and execution by prioritizing the right features based on data and stakeholder feedback.' },
    { title: 'Atlassian Intelligence (AI)', desc: 'Leverage built-in AI to summarize complex tickets, generate content in Confluence, and automate routine technical tasks.' },
    { title: 'Bitbucket & Bamboo', desc: 'Optimize your CI/CD pipeline with secure code management and automated build processes integrated directly into your Jira tickets.' },
    { title: 'Compass', desc: 'Gain a unified view of your distributed software architecture, helping your engineering teams manage microservices and improve health scores.' }
  ],
  [
    { step: '01', title: 'Consulting & Advisory', desc: 'We assess your current team dynamics and tool sprawl to define a lean, integrated architecture. Whether you are moving to Atlassian Cloud or implementing a SAFe (Scaled Agile Framework) model, we build a roadmap focused on transparency and velocity.', outcome: 'A strategic migration or optimization plan that simplifies your toolchain and aligns with business goals.' },
    { step: '02', title: 'Implementation & Execution', desc: 'Our team handles the heavy lifting of configuration—from complex Jira permission schemes and automation rules to seamless integrations with third-party tools like Slack, GitHub, or Salesforce.', outcome: 'A tailored, high-performance workspace that teams actually enjoy using, built on industry best practices.' },
    { step: '03', title: 'Operational Support & Managed Services', desc: 'Maximize your platform’s health with proactive administration. We manage your cloud environment, handle app integrations, perform routine clean-ups, and provide expert training to ensure your teams stay productive as the platform evolves.', outcome: 'A ‘set-and-thrive’ environment with zero technical debt and continuous optimization for peak performance.' }
  ],
  [
    { title: 'Agile Expertise', desc: 'We don’t just set up Jira; we understand the Agile and DevOps principles that make it work, ensuring your processes drive the tools (not the other way around).' },
    { title: 'Seamless Migration', desc: 'We specialize in moving legacy, on-premise instances to Atlassian Cloud with zero data loss and minimal downtime.' },
    { title: 'Unified Visibility', desc: 'We help leadership gain real-time insights into project health, team capacity, and deployment cycles through advanced Jira reporting and dashboards.' }
  ]
);

// 6. Salesforce
makePage('salesforce',
  'Accelerate Enterprise Growth with <span style="color: var(--accent);">Hadron GBS & Salesforce</span>',
  'At Hadron GBS, we believe every interaction—whether with a customer or an employee—is an opportunity for growth. As a strategic Salesforce partner, we help organizations transition from siloed data to a unified, 360-degree view of their entire business.',
  [
    { title: 'Sales Cloud', desc: 'Drive revenue growth with automated lead management, advanced forecasting, and AI-powered pipeline insights.' },
    { title: 'Service Cloud', desc: 'Modernize your internal service desk by bringing IT Service Management onto the Salesforce platform. Unify employee support, asset tracking, and incident resolution within the same interface your business already trusts.' },
    { title: 'Marketing Cloud', desc: 'Create personalized, data-driven customer journeys across email, mobile, and social to drive higher engagement and ROI.' },
    { title: 'Experience Cloud', desc: 'Build branded communities and portals for customers and partners to collaborate and access self-service resources.' },
    { title: 'Data Cloud', desc: 'Harmonize all your enterprise data into a single, real-time profile to power smarter, AI-driven decision-making.' },
    { title: 'Einstein AI', desc: 'Integrate predictive and generative AI across your workflows to automate routine tasks and provide hyper-personalized experiences.' },
    { title: 'Agentforce', desc: 'Deploy autonomous AI agents directly within Salesforce to handle complex, multi-step business tasks across sales, service, and operations—without human intervention. Agentforce agents act on real-time data from the Salesforce platform, enabling your teams to scale capacity, accelerate resolution, and focus on high-value work.' }
  ],
  [
    { step: '01', title: 'Consulting & Advisory', desc: 'We start by understanding your sales cycles and internal service requirements. We help you navigate Salesforce’s extensive feature set to build a roadmap that prioritizes user adoption and high-impact business outcomes.', outcome: 'A strategic CRM and ITSM blueprint that eliminates process friction and aligns technology with your revenue and operational goals.' },
    { step: '02', title: 'Implementation & Execution', desc: 'Our team handles everything from initial data migration to complex Apex coding and workflow automation. We ensure your Salesforce instance is configured for maximum efficiency, ensuring your IT and Sales teams operate on a single, secure source of truth.', outcome: 'A clean, scalable Salesforce environment integrated seamlessly with your existing enterprise tech stack.' },
    { step: '03', title: 'Operational Support & Managed Services', desc: 'Salesforce is a dynamic platform with constant innovation. We provide proactive administration, performance tuning, and user training to ensure you are always leveraging the latest features while maintaining peak data hygiene.', outcome: 'Sustained platform ROI, minimized technical debt, and a system that evolves as your business grows.' }
  ],
  [
    { title: 'Unified Operations', desc: 'We specialize in breaking down silos by bringing Sales, Customer Service, and IT Support (ITSM) together on a single platform.' },
    { title: 'AI-First Implementation', desc: 'We help you deploy Salesforce Einstein to move from manual data entry to proactive, AI-driven business intelligence.' },
    { title: 'Rapid Time-to-Value', desc: 'Our agile deployment methodology ensures you get your core functions live quickly, delivering measurable impact from day one.' }
  ]
);

// 7. Microsoft Cloud
makePage('microsoft-cloud',
  'Empower Your Digital Future with <span style="color: var(--accent);">Hadron GBS & Microsoft Cloud</span>',
  'At Hadron GBS, we help organizations harness the full potential of the world’s most integrated technology stack. As a strategic Microsoft Solutions Partner, we empower businesses to modernize their infrastructure, secure their data, and reinvent productivity through AI-driven workflows.',
  [
    { title: 'Microsoft Azure (Cloud Infrastructure)', desc: 'Accelerate your digital transformation with secure cloud migrations, app modernization, and scalable data analytics.' },
    { title: 'Dynamics 365 (Business Applications)', desc: 'Unify your front and back-office operations with intelligent CRM and ERP solutions that streamline sales, finance, and supply chain management.' },
    { title: 'Microsoft 365 (Modern Work)', desc: 'Transform how your teams collaborate with secure, cloud-based productivity tools including Teams, SharePoint, and advanced endpoint management.' },
    { title: 'Microsoft Copilot & AI', desc: 'Integrate next-generation Generative AI into your daily applications to automate content creation, summarize meetings, and analyze complex data in real-time.' },
    { title: 'Power Platform', desc: 'Empower your team to build custom low-code apps, automate repetitive workflows with Power Automate, and visualize data through Power BI.' },
    { title: 'Microsoft Purview & Sentinel', desc: 'Protect your enterprise with advanced data governance and a cloud-native SIEM to detect and respond to threats across your entire digital estate.' },
    { title: 'Microsoft Intune (Endpoint Management)', desc: 'Simplify device management and ensure secure access for your remote and hybrid workforce across all platforms.' }
  ],
  [
    { step: '01', title: 'Consulting & Advisory', desc: 'We begin by aligning your business objectives with the right Microsoft licensing and architecture. Whether you are planning a ‘Cloud-First’ transition or optimizing your current tenant, we build a roadmap focused on cost-efficiency and security compliance.', outcome: 'A strategic transformation blueprint that minimizes waste and maximizes the value of your Microsoft investment.' },
    { step: '02', title: 'Implementation & Execution', desc: 'Our team handles the heavy lifting of deployment—from Azure landing zones and data migrations to the setup of complex Dynamics 365 environments. We prioritize security and identity management (Entra ID) to ensure your transition is seamless and protected.', outcome: 'A stable, high-performance Microsoft environment integrated with your existing enterprise applications and identity providers.' },
    { step: '03', title: 'Operational Support & Managed Services', desc: 'The Microsoft Cloud is constantly evolving. We provide proactive platform management, including monthly security updates, cost-optimization audits (FinOps), and 24/7 technical support to ensure your systems remain resilient and up-to-date.', outcome: 'Continuous platform optimization and zero-disruption upgrades, allowing your team to focus on core business strategy.' }
  ],
  [
    { title: 'Integrated Ecosystem Expertise', desc: 'Our refined deployment methodologies reduce time-to-market, helping you see ROI faster.' },
    { title: 'AI-Ready Foundation', desc: 'We help you prepare your data and security posture today so you can successfully deploy Microsoft Copilot tomorrow.' },
    { title: 'Security-First Mindset', desc: 'We implement Microsoft’s Zero Trust framework by default, ensuring your data remains protected in an increasingly complex threat landscape.' }
  ]
);

// 8. SAP
makePage('sap',
  'Drive Intelligent Enterprise Excellence with <span style="color: var(--accent);">Hadron GBS & SAP</span>',
  'At Hadron GBS, we believe that a truly resilient business is built on a foundation of integrated, real-time data. As a strategic SAP partner, we help organizations move beyond legacy ERP systems to become ‘Intelligent Enterprises.’',
  [
    { title: 'SAP S/4HANA Cloud', desc: 'The next-generation ERP. Modernize your core business processes—from finance and risk management to sales and R&D—on a single, in-memory platform.' },
    { title: 'SAP SuccessFactors (HXM)', desc: 'Transform the employee experience with human experience management (HXM) solutions that simplify payroll, talent management, and core HR.' },
    { title: 'SAP Customer Experience (CX)', desc: 'Build deeper customer relationships with integrated solutions for commerce, marketing, sales, and service.' },
    { title: 'SAP Business Technology Platform (SAP BTP)', desc: 'The foundation of innovation. We help you integrate applications, create personalized experiences, and turn data into value with advanced analytics and AI.' },
    { title: 'SAP Ariba & Supply Chain', desc: 'Digitalize your procurement and supply chain operations to increase transparency, reduce costs, and improve vendor collaboration.' },
    { title: 'SAP Joule (Generative AI)', desc: "Integrate SAP\\'s natural-language generative AI assistant into your workflows to accelerate task completion and gain instant business context." }
  ],
  [
    { step: '01', title: 'Consulting & Advisory', desc: 'We begin by assessing your current landscape—whether you are looking at a ‘Greenfield’ implementation or a ‘Brownfield’ conversion. We align SAP’s Standard Best Practices with your unique business requirements to create a roadmap that minimizes customization and maximizes scalability.', outcome: 'A strategic transformation blueprint (RISE or GROW with SAP) that simplifies your architecture and accelerates ROI.' },
    { step: '02', title: 'Implementation & Execution', desc: 'Our team handles the technical complexity of deployment, including data migration, system integration, and custom development on SAP BTP. We prioritize a ‘Clean Core’ strategy to ensure your system remains easy to upgrade and maintain.', outcome: 'A stable, high-performance SAP environment that serves as the ‘Digital Core’ of your enterprise.' },
    { step: '03', title: 'Operational Support & Managed Services', desc: 'ERP systems are mission-critical. We provide proactive application management (AMS), performance tuning, and regular update support to ensure your SAP environment evolves alongside global market changes and regulatory requirements.', outcome: 'Continuous platform optimization, regulatory compliance, and 24/7 technical reliability for your global operations.' }
  ],
  [
    { title: 'Clean Core Philosophy', desc: 'We focus on standard SAP functionality to reduce technical debt and ensure your business is always ‘upgrade-ready.’' },
    { title: 'End-to-End Integration', desc: 'We specialize in connecting SAP with your broader ecosystem, ensuring data flows seamlessly between your ERP, CRM, and third-party applications.' },
    { title: 'Industry-Specific Insight', desc: 'We bring deep expertise in translating complex business requirements into functional SAP workflows that drive measurable efficiency.' }
  ]
);

// 9. Low-Code
makePage('low-code',
  'Accelerate Innovation with Hadron GBS: <span style="color: var(--accent);">Your Low-Code & No-Code Partner</span>',
  'At Hadron GBS, we believe that technology should be an accelerator, not a bottleneck. As a specialist partner in Low-Code and No-Code (LCNC) platforms, we empower organizations to bridge the gap between business ideas and functional software.',
  [
    { title: 'Rapid Application Development (RAD)', desc: 'Build and deploy custom business applications quickly to solve unique challenges without the overhead of traditional coding.' },
    { title: 'Workflow & Process Automation', desc: 'Modernize manual, paper-based, or Excel-driven processes with automated digital workflows that reduce errors and save time.' },
    { title: 'Legacy Modernization', desc: 'Wrap or replace aging legacy systems with modern, mobile-responsive interfaces that extend the life and utility of your data.' },
    { title: 'Customer & Partner Portals', desc: 'Launch secure, branded external portals that allow customers and vendors to interact with your business systems in real-time.' },
    { title: 'Data Visualization & Dashboards', desc: 'Consolidate data from multiple sources into interactive, low-code dashboards for instant business intelligence.' },
    { title: 'Citizen Developer Enablement', desc: "We help you establish 'Guardrails' and centers of excellence, allowing your business users to build their own tools safely and securely." },
    { title: 'AI-Enhanced Low-Code', desc: 'Integrate Generative AI and machine learning models directly into your apps to automate decision-making and content generation.' }
  ],
  [
    { step: '01', title: 'Consulting & Advisory', desc: 'Not every low-code platform is right for every problem. We assess your technical landscape and business goals to recommend the right stack—whether it’s focused on UI, database complexity, or deep integration.', outcome: 'A strategic LCNC roadmap and a governed framework that prevents ‘Shadow IT’ while fostering innovation.' },
    { step: '02', title: 'Implementation & Execution', desc: 'Our agile delivery model focuses on ‘Minimum Viable Products’ (MVPs) that deliver value fast. We work in short sprints, involving your stakeholders at every step to ensure the final product perfectly matches user needs.', outcome: 'A fully functional, integrated application deployed in a fraction of the time required for traditional development.' },
    { step: '03', title: 'Operational Support & Managed Services', desc: 'As your portfolio of low-code apps grows, management becomes critical. We provide ongoing support, platform updates, and security audits to ensure your apps remain performant and compliant with enterprise standards.', outcome: 'A sustainable and secure application ecosystem that evolves as your business processes change.' }
  ],
  [
    { title: '10x Faster Delivery', desc: 'We significantly reduce development cycles, allowing you to move from concept to production with unprecedented speed.' },
    { title: 'Reduced Total Cost of Ownership', desc: 'By minimizing the need for specialized coding talent and long development hours, we make innovation more affordable.' },
    { title: 'Business-IT Alignment', desc: 'We bring deep expertise in translating complex business requirements into functional workflows that drive measurable efficiency.' }
  ]
);

// 10. AWS Cloud
makePage('aws-cloud',
  'Scale Without Limits with <span style="color: var(--accent);">Hadron GBS & Amazon Web Services (AWS)</span>',
  'At Hadron GBS, we help organizations harness the world’s most comprehensive and broadly adopted cloud platform. As a strategic AWS partner, we specialize in transforming rigid, on-premise infrastructures into agile, cloud-native environments.',
  [
    { title: 'Cloud Migration & Modernization', desc: 'Seamlessly transition your applications to AWS using proven frameworks (Rehost, Replatform, Refactor) to reduce data center footprints and increase agility.' },
    { title: 'AWS Data & Analytics', desc: 'Break down data silos by building robust data lakes and warehouses using Amazon Redshift and AWS Glue for real-time business intelligence.' },
    { title: 'Serverless Computing', desc: 'Build and run applications without managing servers using AWS Lambda, allowing your developers to focus entirely on code and innovation.' },
    { title: 'Generative AI with Amazon Bedrock', desc: 'Accelerate your AI journey by building and scaling generative AI applications with high-performing foundation models.' },
    { title: 'AWS Security & Compliance', desc: "Implement a 'Security-by-Design' posture using AWS Identity and Access Management (IAM), GuardDuty, and KMS to ensure your data stays protected." },
    { title: 'DevOps & CI/CD', desc: 'Automate your software delivery lifecycle with AWS CodePipeline and CodeDeploy for faster, more reliable deployments.' },
    { title: 'Storage & Content Delivery', desc: 'Optimize data availability and web performance using Amazon S3 and Amazon CloudFront for global reach and durability.' }
  ],
  [
    { step: '01', title: 'Consulting & Advisory', desc: 'Not every platform is right for every problem. We assess your technical landscape and business goals to recommend the right AWS stack—whether it’s focused on compute, database complexity, or deep integration.', outcome: 'A strategic AWS roadmap and a governed framework that prevents shadow IT while fostering innovation.' },
    { step: '02', title: 'Implementation & Execution', desc: 'Our agile delivery model focuses on MVPs that deliver value fast. We work in short sprints, involving your stakeholders at every step to ensure the final architecture matches user needs.', outcome: 'A fully functional, integrated application deployed in a fraction of the time required for traditional development.' },
    { step: '03', title: 'Operational Support & Managed Services', desc: 'As your portfolio of cloud apps grows, management becomes critical. We provide ongoing support, platform updates, and security audits to ensure your apps remain performant and compliant with enterprise standards.', outcome: 'A sustainable and secure application ecosystem that evolves as your business processes change.' }
  ],
  [
    { title: 'Security-First Cloud', desc: 'We treat security as a baseline, not an add-on, ensuring every AWS deployment meets rigorous global compliance standards.' },
    { title: 'Data-Driven Innovation', desc: 'We don’t just move your data to the cloud; we help you activate it using AWS’s advanced machine learning and analytics tools.' },
    { title: 'Customer-Obsessed Delivery', desc: 'We act as an extension of your team, providing the transparency and technical consistency required to manage complex, distributed systems.' }
  ]
);

// 11. Freshworks
makePage('freshworks',
  'Reimagine Customer & Employee Experience with <span style="color: var(--accent);">Hadron GBS & Freshworks</span>',
  'Freshworks delivers a modern, AI-powered platform for customer support, IT service management, CRM, engagement, and marketing automation. As a dedicated Freshworks partner, Hadron GBS helps organizations implement, integrate, and optimize Freshworks to enhance customer experience, employee experience, and operational efficiency.',
  [
    { title: 'Freshdesk — Customer Support', desc: 'Empower your support teams with a multi-channel helpdesk built for scale. Streamline ticket routing, SLA management, and knowledge base operations to reduce resolution times and elevate customer satisfaction scores.' },
    { title: 'Freshservice — IT Service Management (ITSM)', desc: 'Modernize internal IT operations with a purpose-built ITSM platform. Automate incident, change, and asset management workflows to improve service delivery and reduce operational overhead for IT teams.' },
    { title: 'Freshsales — CRM & Sales Automation', desc: 'Accelerate revenue generation with an AI-powered CRM that unifies contact management, deal pipelines, and sales activity tracking. Give your sales teams full visibility from lead to close, with intelligent scoring and forecasting built in.' },
    { title: 'Freshchat — Conversational Engagement', desc: 'Deploy intelligent, real-time messaging across web, mobile, and social channels. Enable proactive customer engagement, in-app support, and bot-assisted resolution to reduce agent load while increasing customer responsiveness.' },
    { title: 'Freshmarketer — Marketing Automation', desc: 'Orchestrate personalized, data-driven marketing campaigns across the customer lifecycle. Leverage behavioral segmentation, A/B testing, and funnel analytics to convert leads faster and nurture long-term relationships.' },
    { title: 'Freshworks AI — Freddy AI', desc: 'Infuse artificial intelligence across every Freshworks product. From auto-triaging tickets and predicting CSAT to generating sales insights and suggesting next-best actions, Freddy AI transforms reactive operations into proactive, intelligent service delivery.' },
    { title: 'Omnichannel Experience & Automation', desc: 'Unify customer and employee interactions across email, phone, chat, social, and self-service portals into a single, coherent experience. Leverage automation to eliminate manual handoffs, enforce consistent workflows, and drive seamless engagement at every touchpoint.' }
  ],
  [
    { step: '01', title: 'Consulting & Advisory', desc: 'Before a single workflow is configured, we invest in understanding your business. Our consultants conduct a comprehensive digital experience assessment — evaluating your current CX and EX capabilities, identifying process gaps, and benchmarking against industry standards.', outcome: 'A clear, executive-aligned strategy that defines high-value use cases, prioritizes quick wins, and establishes a foundation for long-term platform scalability.' },
    { step: '02', title: 'Implementation & Execution', desc: 'Translating strategy into a production-grade platform requires precision and experience. Our implementation teams handle end-to-end platform deployment — from environment configuration and data migration to API-based integration with your existing CRM, ERP, HRMS, and communication tools.', outcome: 'A fully integrated Freshworks environment deployed on schedule, with automated workflows and live integrations that eliminate manual effort from day one.' },
    { step: '03', title: 'Operational Support & Managed Services', desc: 'Maximizing long-term platform value requires ongoing expertise. Hadron GBS provides continuous optimization services — analyzing usage patterns, performance metrics, and support trends to identify new automation opportunities and configuration improvements.', outcome: 'Sustained platform performance and continuous improvement, with proactive management that frees your internal teams to focus on core business priorities rather than platform maintenance.' }
  ],
  [
    { title: 'Experience-Led Design Approach', desc: 'We design every implementation around the real needs of the people who use the platform — customers and employees alike. Our solutions prioritize intuitive interfaces, logical workflows, and measurable satisfaction outcomes.' },
    { title: 'Rapid Time-to-Value', desc: 'Our refined delivery methodologies eliminate deployment risk and accelerate go-live timelines. We focus on getting critical capabilities into production quickly, so your teams realize ROI early and build confidence in the platform from the start.' },
    { title: 'SaaS Optimization Expertise', desc: 'Deep familiarity with the Freshworks platform means we configure beyond defaults. We extract the full capability of each product — fine-tuning automation, integrations, and reporting to match the complexity of enterprise operations.' },
    { title: 'AI-Driven Automation Focus', desc: 'We treat Freddy AI not as a feature but as a core pillar of your service strategy. From intelligent ticket deflection and predictive agent assistance to AI-powered sales forecasting, we embed automation into every layer of your Freshworks deployment.' }
  ]
);

console.log("All service pages generated successfully with proper relative paths!");
