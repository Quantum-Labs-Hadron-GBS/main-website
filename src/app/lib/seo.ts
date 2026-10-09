import { Metadata } from "next";

/**
 * Production origin. Google already indexes the www host (hadrongbs.com 301s to www),
 * so canonicals stay on www to keep existing rankings and sitelinks.
 */
export const SITE_URL = "https://www.hadrongbs.com";
export const SITE_NAME = "Hadron Global Business Solutions";
export const SITE_SHORT_NAME = "Hadron GBS";
export const OG_IMAGE = "/og-image.png";

interface PageSeo {
  /** <title> without the " | Hadron GBS" suffix (aim for ≤ 50 chars) */
  title: string;
  /** Meta description (aim for 120–160 chars) */
  description: string;
  /** Short label used in breadcrumbs */
  label: string;
  /** Canonical path if this page duplicates another one */
  canonical?: string;
  /** Exclude from sitemap (e.g. duplicates) */
  noSitemap?: boolean;
  priority?: number;
}

/**
 * Single source of truth for every route's search metadata.
 * Used by per-route layouts (metadata + breadcrumbs) and sitemap.ts.
 */
export const PAGES: Record<string, PageSeo> = {
  "/": {
    title: "Hadron GBS | ServiceNow Partner & IT Consulting Company",
    description:
      "Hadron Global Business Solutions (Hadron GBS) is an IT consulting company and ServiceNow partner delivering AI, cloud and managed services for enterprises.",
    label: "Home",
    priority: 1,
  },

  // ── Why Hadron ──
  "/why-hadron/about": {
    title: "About Us",
    description:
      "Learn about Hadron GBS, a global enterprise IT services firm delivering consulting, implementation and managed services across ServiceNow, AI and cloud.",
    label: "About Us",
    priority: 0.9,
  },
  "/why-hadron/ecosystem-and-partners": {
    title: "Technology Partners & Ecosystem",
    description:
      "Hadron GBS partners with ServiceNow, BMC Helix, Salesforce, SAP, Microsoft, AWS, Ivanti, Atlassian and Freshworks to deliver connected enterprise platforms.",
    label: "Partners",
    priority: 0.8,
  },
  "/why-hadron/success-stories": {
    title: "Client Success Stories & Case Studies",
    description:
      "See how Hadron GBS helps enterprises modernize ITSM, migrate platforms and embed AI automation, with measurable outcomes across industries.",
    label: "Success Stories",
    priority: 0.8,
  },

  // ── Services ──
  "/services": {
    title: "Enterprise IT Services & Managed Services",
    description:
      "End-to-end enterprise IT services from Hadron GBS: consulting and advisory, implementation and execution, operational support and managed services.",
    label: "Services",
    priority: 0.9,
  },
  "/services/consulting-and-advisory": {
    title: "IT Consulting & Advisory Services",
    description:
      "Strategic IT consulting and advisory from Hadron GBS: platform roadmaps, architecture, process assessment and transformation planning for enterprises.",
    label: "Consulting & Advisory",
  },
  "/services/implementation-and-execution": {
    title: "Platform Implementation & Execution Services",
    description:
      "Architecture-led implementation of ServiceNow, Salesforce, SAP, BMC Helix and cloud platforms with PMO governance and on-time delivery from Hadron GBS.",
    label: "Implementation & Execution",
  },
  "/services/operational-support": {
    title: "Operational Support Services (L1–L3)",
    description:
      "End-to-end L1–L3 operational support across ServiceNow, Salesforce and enterprise platforms to keep your systems stable, secure and performing.",
    label: "Operational Support",
  },
  "/services/managed-services": {
    title: "Managed IT Services",
    description:
      "Application and platform managed services from Hadron GBS: continuous optimization, hypercare and SLA-driven support for enterprise platforms.",
    label: "Managed Services",
  },

  // ── Platforms ──
  "/platforms/service-now": {
    title: "ServiceNow Partner & Consulting Services",
    description:
      "Hadron GBS is a ServiceNow partner delivering ITSM, ITOM, CSM, HRSD and Now Assist AI implementations, migrations and managed services for enterprises.",
    label: "ServiceNow",
    priority: 0.9,
  },
  "/platforms/service-now/precision-bridge": {
    title: "Precision Bridge: ServiceNow Migration Tool",
    description:
      "Accelerate ServiceNow migrations from Cherwell, BMC and other ITSM tools with Precision Bridge by Hadron GBS: faster, lower-risk data and process migration.",
    label: "Precision Bridge",
  },
  "/platforms/service-now/tennon": {
    title: "Tennon for ServiceNow",
    description:
      "Unify marketing and enterprise operations on ServiceNow with Tennon, implemented and supported by Hadron GBS.",
    label: "Tennon",
  },
  "/platforms/bmc": {
    title: "BMC Helix Consulting & Implementation",
    description:
      "BMC Helix ITSM, AIOps and HelixGPT services from Hadron GBS: implementation, migration, integration and managed support.",
    label: "BMC Helix",
  },
  "/platforms/salesforce": {
    title: "Salesforce Consulting & Agentforce Services",
    description:
      "Salesforce consulting, implementation and Agentforce AI services from Hadron GBS to transform sales, service and customer experience.",
    label: "Salesforce",
  },
  "/platforms/sap": {
    title: "SAP S/4HANA & BTP Services",
    description:
      "SAP transformation services from Hadron GBS across S/4HANA, BTP and connected business workflows, combining automation, data and AI.",
    label: "SAP",
  },
  "/platforms/microsoft": {
    title: "Microsoft Azure, Copilot & Cloud Services",
    description:
      "Microsoft cloud services from Hadron GBS: Azure migration, Azure AI, Copilot adoption and Microsoft 365 for modern enterprises.",
    label: "Microsoft",
  },
  "/platforms/aws": {
    title: "AWS Cloud Consulting & Migration Services",
    description:
      "AWS cloud consulting, migration, modernization and AI-ready cloud foundations from Hadron GBS, with security and cost control built in.",
    label: "AWS",
  },
  "/platforms/ivanti": {
    title: "Ivanti Partner: ITSM, UEM & Asset Management",
    description:
      "Ivanti services from Hadron GBS: service and asset management, unified endpoint management, discovery and network endpoint security.",
    label: "Ivanti",
  },
  "/platforms/atlassian": {
    title: "Atlassian Jira Service Management Consulting",
    description:
      "Atlassian consulting from Hadron GBS: Jira Service Management, Confluence and Atlassian Intelligence implementations and migrations.",
    label: "Atlassian",
  },
  "/platforms/freshworks": {
    title: "Freshworks Freshservice & Freshdesk Services",
    description:
      "Freshworks implementation and support from Hadron GBS: Freshservice ITSM, Freshdesk and Freddy AI for customer and employee experience.",
    label: "Freshworks",
  },

  // ── AI & Automation ──
  "/ai": {
    title: "AI & Automation Services",
    description:
      "Enterprise AI and automation services from Hadron GBS: generative AI, agentic AI, intelligent automation, AI for platforms and AI strategy.",
    label: "AI & Automation",
    priority: 0.9,
  },
  "/ai/generative-ai": {
    title: "Generative AI Services for Enterprises",
    description:
      "Apply generative AI to enterprise knowledge, service operations and business workflows with Hadron GBS: secure, governed and embedded in how you work.",
    label: "Generative AI",
  },
  "/ai/agentic-ai": {
    title: "Agentic AI Solutions",
    description:
      "Move from automation to autonomy with agentic AI from Hadron GBS: governed AI agents that reason, decide and act across enterprise systems.",
    label: "Agentic AI",
  },
  "/ai/intelligent-automation": {
    title: "Intelligent Automation & Agentic AI",
    description:
      "Intelligent automation services combining RPA, AI, ML and orchestration to cut manual effort by 30–60% across enterprise operations.",
    label: "Intelligent Automation",
  },
  "/ai/ai-enterprise-operations": {
    title: "AI-Powered IT Operations & AIOps",
    description:
      "Make enterprise operations intelligent with AIOps, intelligent service operations and decision intelligence from Hadron GBS.",
    label: "AI-Powered Operations",
  },
  "/ai/ai-enterprise-platforms": {
    title: "AI for Enterprise Platforms",
    description:
      "Bring AI into ServiceNow, BMC Helix, Salesforce, SAP, Microsoft and AWS with Now Assist, HelixGPT, Agentforce and Copilot, delivered by Hadron GBS.",
    label: "AI for Platforms",
  },
  "/ai/ai-strategy": {
    title: "AI Strategy & Readiness Assessment",
    description:
      "Build the foundation before you deploy AI: business, data, operating-model and governance readiness assessments from Hadron GBS.",
    label: "AI Strategy",
  },
  "/ai/responsible-ai": {
    title: "Responsible AI & AI Governance",
    description:
      "Responsible AI practices from Hadron GBS: governance, security, transparency and human oversight for enterprise AI adoption.",
    label: "Responsible AI",
  },

  // ── Solutions ──
  "/solutions": {
    title: "Enterprise Solutions",
    description:
      "Hadron GBS solutions for AI-powered transformation, enterprise core modernization, cloud adoption, rapid application engineering and unified service experience.",
    label: "Solutions",
    priority: 0.9,
  },
  "/solutions/ai-powered-enterprise-transformation": {
    title: "AI-Powered Enterprise Transformation",
    description:
      "Move beyond AI pilots: embed generative AI, agentic AI and automation into the platforms and workflows that run your business.",
    label: "AI-Powered Transformation",
  },
  "/solutions/enterprise-core-transformation": {
    title: "Enterprise Core Transformation (ERP & CRM)",
    description:
      "Modernize SAP, Oracle, Salesforce and Workday environments to unify data, accelerate decisions and eliminate manual processes.",
    label: "Enterprise Core Transformation",
  },
  "/solutions/cloud-adoption-and-cloud-first-engineering": {
    title: "Cloud Adoption & Cloud-First Engineering",
    description:
      "Design, migrate and operate cloud environments on AWS, Azure and GCP with DevSecOps, FinOps and security controls embedded.",
    label: "Cloud Adoption",
  },
  "/solutions/rapid-application-engineering": {
    title: "Rapid Application Engineering (Low-Code)",
    description:
      "Deliver enterprise applications in weeks with low-code and no-code platforms such as ServiceNow, Mendix and OutSystems, with governance built in.",
    label: "Rapid Application Engineering",
  },
  "/solutions/unified-service-experience-management": {
    title: "Unified Service Experience Management",
    description:
      "Bring ITSM, CSM and enterprise workflows into a single operating model with intelligent routing and unified knowledge.",
    label: "Unified Service Experience",
  },
  "/solutions/engineering-quality-and-reliability": {
    title: "Engineering Quality & Reliability",
    description:
      "Embed quality across delivery, from automated testing gates in CI/CD to real-time production observability and SRE practices.",
    label: "Engineering Quality",
  },

  // ── Industries ──
  "/industries/financial-services": {
    title: "IT Services for Banking & Financial Services",
    description:
      "Enterprise platform, AI and cloud services for banks, NBFCs and insurers: core modernization, compliance and secure digital operations.",
    label: "Financial Services",
  },
  "/industries/manufacturing": {
    title: "IT Services for Manufacturing",
    description:
      "Connected enterprise platforms for manufacturers: service management, ERP integration, automation and AI-driven operations.",
    label: "Manufacturing",
  },
  "/industries/retail": {
    title: "IT Services for Retail",
    description:
      "Digital commerce, customer experience and store operations platforms for retailers, delivered by Hadron GBS.",
    label: "Retail",
  },
  "/industries/education": {
    title: "IT Services for Education",
    description:
      "Digital and application modernization for universities and education providers: service management, student experience and cloud.",
    label: "Education",
  },
  "/industries/government-and-public-sector": {
    title: "IT Services for Government & Public Sector",
    description:
      "Secure, compliant enterprise service management and digital services for government and public sector organizations.",
    label: "Government & Public Sector",
  },

  // ── Resources ──
  "/resources/learning-center/excellence-hub": {
    title: "ServiceNow Training & Internship Program",
    description:
      "The Hadron ServiceNow Excellence Hub: hands-on ServiceNow training and internship program to build job-ready platform skills.",
    label: "ServiceNow Excellence Hub",
  },
  "/resources/videos": {
    title: "Videos & Demos",
    description: "Watch Hadron GBS videos and demos on ServiceNow, AI automation and enterprise platform transformation.",
    label: "Videos",
  },
  "/resources/webinars": {
    title: "Webinars",
    description: "Hadron GBS webinars on enterprise platforms, AI, automation and service management, with insights from practitioners.",
    label: "Webinars",
  },
  "/resources/success-stories": {
    title: "Client Success Stories & Case Studies",
    description:
      "See how Hadron GBS helps enterprises modernize ITSM, migrate platforms and embed AI automation, with measurable outcomes across industries.",
    label: "Success Stories",
    canonical: "/why-hadron/success-stories", // identical page; consolidate ranking signals
    noSitemap: true,
  },

  // ── Company ──
  "/careers": {
    title: "Careers: ServiceNow, AI & Cloud Jobs",
    description:
      "Join Hadron GBS. Explore careers in ServiceNow, AI, cloud and enterprise platforms, and apply online to build the future of enterprise IT.",
    label: "Careers",
    priority: 0.8,
  },
  "/contact": {
    title: "Contact Us",
    description:
      "Contact Hadron GBS in Pune, Singapore and the USA. Book a free assessment for ServiceNow, AI, cloud and enterprise platform services.",
    label: "Contact Us",
    priority: 0.8,
  },
};

const absolute = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

/** Full Metadata for a registered route. */
export function pageMetadata(path: string): Metadata {
  const page = PAGES[path];
  if (!page) throw new Error(`No SEO entry for "${path}" in PAGES (src/app/lib/seo.ts)`);
  const url = absolute(page.canonical ?? path);
  const fullTitle = path === "/" ? page.title : `${page.title} | ${SITE_SHORT_NAME}`;

  return {
    // Absolute so nested routes keep the suffix (a parent layout's title blocks the root template)
    title: { absolute: fullTitle },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: page.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [OG_IMAGE],
    },
  };
}

/** Breadcrumb trail (Home → … → page) built from the registry, skipping unregistered segments. */
export function breadcrumbTrail(path: string): { name: string; item: string }[] {
  const trail = [{ name: PAGES["/"].label, item: "/" }];
  if (path === "/") return trail;
  const segments = path.split("/").filter(Boolean);
  for (let i = 1; i <= segments.length; i++) {
    const sub = "/" + segments.slice(0, i).join("/");
    if (PAGES[sub]) trail.push({ name: PAGES[sub].label, item: sub });
  }
  return trail;
}
