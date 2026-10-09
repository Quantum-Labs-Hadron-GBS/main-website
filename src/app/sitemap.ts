import { MetadataRoute } from 'next'
import { PAGES, SITE_URL } from './lib/seo'

// Generated from the SEO registry so every real page is listed (and only real pages).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return Object.entries(PAGES)
    .filter(([, page]) => !page.noSitemap)
    .map(([path, page]) => ({
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: page.priority ?? 0.7,
    }));
}
