import { MetadataRoute } from 'next'
import { SITE_URL } from './lib/schema'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/partners',
    '/services/service-now',
    '/services/bmc',
    '/services/salesforce',
    '/services/freshworks',
    '/services/ivanti',
    '/services/sap',
    '/services/low-code',
    '/resources/videos',
    '/resources/webinar',
    '/resources/dark-web-safety',
    '/resources/success-stories'
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
