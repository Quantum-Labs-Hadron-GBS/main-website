import { MetadataRoute } from 'next'
import { SITE_URL } from './lib/schema'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/ai',
    '/solutions',
    '/industries',
    '/platforms',
    '/services',
    '/why-hadron/about',
    '/resources/insights',
    '/platforms/service-now',
    '/platforms/service-now/tennon',
    '/platforms/service-now/precision-bridge',
    '/platforms/bmc',
    '/platforms/ivanti',
    '/platforms/atlassian',
    '/platforms/salesforce',
    '/platforms/microsoft-cloud',
    '/platforms/sap',
    '/platforms/aws-cloud',
    '/platforms/freshworks'
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
