import type { NextConfig } from "next";

// Old WordPress URL → new page. Paths not listed here (and not on the new site) will 404.
const LEGACY_REDIRECTS: [string, string][] = [
  // Company
  ['/about', '/why-hadron/about'],
  ['/our-partners', '/why-hadron/ecosystem-and-partners'],
  ['/partners', '/why-hadron/ecosystem-and-partners'],
  ['/partners/:path*', '/why-hadron/ecosystem-and-partners'],
  ['/success-stories', '/why-hadron/success-stories'],
  ['/success-stories/:path*', '/why-hadron/success-stories'],
  ['/case-studies', '/why-hadron/success-stories'],
  ['/free-itsm-ai-value-discovery-assessment', '/contact'],
  // Careers
  ['/job-openings', '/careers'],
  ['/jobs', '/careers'],
  ['/job-posting', '/careers'],
  ['/life-at-hadron-gbs', '/careers'],
  ['/recruitment-process', '/careers'],
  // Services
  ['/our-service', '/services'],
  ['/services-new', '/services'],
  ['/service', '/services'],
  ['/service/:path*', '/services'],
  ['/portfolio-category/:path*', '/services'],
  ['/strategic-consulting-advisory', '/services/consulting-and-advisory'],
  ['/implementation-and-execution', '/services/implementation-and-execution'],
  ['/operational-support-services', '/services/operational-support'],
  ['/hadron-gbs-managed-services', '/services/managed-services'],
  // Platforms
  ['/servicenow-services', '/platforms/service-now'],
  ['/servicenow-crm-win-with-ai-powered-service', '/platforms/service-now'],
  ['/enhancing-it-operations-with-servicenow-aiops', '/platforms/service-now'],
  ['/cherwell-migration-services', '/platforms/service-now/precision-bridge'],
  ['/precision-bridge', '/platforms/service-now/precision-bridge'],
  ['/tennon', '/platforms/service-now/tennon'],
  ['/partner-solution-tennon', '/platforms/service-now/tennon'],
  ['/services/ivanti-services', '/platforms/ivanti'],
  ['/services/ivanti-services/:path*', '/platforms/ivanti'],
  ['/ivanti-2', '/platforms/ivanti'],
  ['/services/bmc-services', '/platforms/bmc'],
  ['/bmc-2', '/platforms/bmc'],
  ['/services/salesforce-services', '/platforms/salesforce'],
  ['/salesforce-3', '/platforms/salesforce'],
  ['/services/sap-services', '/platforms/sap'],
  ['/sap-2', '/platforms/sap'],
  ['/microsoft-cloud-solutions', '/platforms/microsoft'],
  ['/aws', '/platforms/aws'],
  ['/atlassian-2', '/platforms/atlassian'],
  ['/freshworks', '/platforms/freshworks'],
  // Solutions & AI
  ['/enterprise-core-transformation', '/solutions/enterprise-core-transformation'],
  ['/rapid-application-engineering', '/solutions/rapid-application-engineering'],
  ['/low-code-no-code', '/solutions/rapid-application-engineering'],
  ['/services/mendix-services', '/solutions/rapid-application-engineering'],
  ['/services/outsystem-services', '/solutions/rapid-application-engineering'],
  ['/unified-service-experience-management', '/solutions/unified-service-experience-management'],
  ['/cloud-adoption-and-cloud-first-engineering', '/solutions/cloud-adoption-and-cloud-first-engineering'],
  ['/engineering-quality-and-reliability', '/solutions/engineering-quality-and-reliability'],
  ['/intelligent-automation-agentic-ai', '/ai/intelligent-automation'],
  // Training & resources
  ['/servicenow-excellence-hub', '/resources/learning-center/excellence-hub'],
  ['/servicenow-excellence-hub-training-program', '/resources/learning-center/excellence-hub'],
  ['/excellence-hub-training-programme', '/resources/learning-center/excellence-hub'],
  ['/servicenow-training-internship-program-in-usa', '/resources/learning-center/excellence-hub'],
  ['/videos', '/resources/videos'],
  ['/videos-2', '/resources/videos'],
  ['/video-and-demo', '/resources/videos'],
  ['/video-and-demo-new', '/resources/videos'],
  ['/podcast', '/resources/videos'],
  ['/webinar', '/resources/webinars'],
  ['/news-and-events', '/resources/webinars'],
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/sectors/:path*',
        destination: '/industries/:path*',
        permanent: true,
      },
      // 301s from the old WordPress site's indexed URLs, so existing rankings and sitelinks carry over
      ...LEGACY_REDIRECTS.map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
};

export default nextConfig;
