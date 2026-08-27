import { MetadataRoute } from 'next'
import { SITE_URL } from './lib/schema'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services/service-now',
    '/services/service-now/tennon',
    '/services/service-now/precision-bridge',
    '/services/bmc',
    '/services/ivanti',
    '/services/atlassian',
    '/services/salesforce',
    '/services/microsoft-cloud',
    '/services/sap',
    '/services/low-code',
    '/services/aws-cloud',
    '/services/freshworks'
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
