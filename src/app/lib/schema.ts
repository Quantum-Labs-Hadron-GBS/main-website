export const SITE_URL = "https://www.hadrongbs.com";
export const LOGO_URL = "https://res.cloudinary.com/djxbxhgat/image/upload/v1784309674/Hadron-Logo_sb3pfk.png";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hadron GBS",
    "url": SITE_URL,
    "logo": LOGO_URL,
    "sameAs": [
      "https://x.com/HadronGBS",
      "https://www.linkedin.com/company/hadron-gbs/",
      "https://www.youtube.com/@HadronGBS",
      "https://www.facebook.com/profile.php?id=61560719736422"
    ],
    "description": "Hadron GBS is a global IT consulting and digital transformation company specializing in ServiceNow, AI, Cloud, Enterprise Service Management, Automation, and Custom Software Development for enterprises worldwide."
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hadron GBS",
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Hadron GBS",
    "image": LOGO_URL,
    "url": SITE_URL,
    "telephone": "+91-0000000000", // Placeholder
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    }
  };
}

export function getBreadcrumbSchema(items: { name: string, item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": `${SITE_URL}${breadcrumb.item}`
    }))
  };
}
