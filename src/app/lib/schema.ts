import { SITE_URL, SITE_NAME, SITE_SHORT_NAME } from "./seo";

export { SITE_URL };
export const LOGO_URL = "https://res.cloudinary.com/djxbxhgat/image/upload/v1784309674/Hadron-Logo_sb3pfk.png";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// Office addresses, kept identical to the Contact page and Google Business Profile (NAP consistency)
const PUNE_ADDRESS = {
  "@type": "PostalAddress",
  "streetAddress": "10th Floor, Pyramid Axis, Behind Croma Showroom, Veerbhadra Nagar, Baner",
  "addressLocality": "Pune",
  "addressRegion": "Maharashtra",
  "postalCode": "411045",
  "addressCountry": "IN",
};
const SINGAPORE_ADDRESS = {
  "@type": "PostalAddress",
  "streetAddress": "7 Temasek Boulevard, Suntec Tower One",
  "addressLocality": "Singapore",
  "postalCode": "038987",
  "addressCountry": "SG",
};
const USA_ADDRESS = {
  "@type": "PostalAddress",
  "streetAddress": "8 The Green, Ste R",
  "addressLocality": "Dover",
  "addressRegion": "DE",
  "postalCode": "19901",
  "addressCountry": "US",
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    "name": SITE_NAME,
    "alternateName": [SITE_SHORT_NAME, "HadronGBS", "Hadron Global Business Solution"],
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL,
    },
    "email": "info@hadrongbs.com",
    "address": [PUNE_ADDRESS, SINGAPORE_ADDRESS, USA_ADDRESS],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "info@hadrongbs.com",
      "url": `${SITE_URL}/contact`,
      "availableLanguage": ["English"],
    },
    "knowsAbout": [
      "ServiceNow",
      "IT Service Management",
      "Enterprise Service Management",
      "Agentic AI",
      "Generative AI",
      "Intelligent Automation",
      "BMC Helix",
      "Salesforce",
      "SAP",
      "Microsoft Azure",
      "Amazon Web Services",
      "Cloud Migration",
      "Managed IT Services",
    ],
    "sameAs": [
      "https://x.com/HadronGBS",
      "https://www.linkedin.com/company/hadron-gbs/",
      "https://www.youtube.com/@HadronGBS",
      "https://www.facebook.com/profile.php?id=61560719736422",
    ],
    "description":
      "Hadron Global Business Solutions (Hadron GBS) is a global IT consulting and digital transformation company and ServiceNow partner, delivering AI, cloud, automation and managed services for enterprises.",
  };
}

/** WebSite name drives the site name Google shows above the result ("Hadron Global Business Solutions"). */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    "name": SITE_NAME,
    "alternateName": [SITE_SHORT_NAME, "HadronGBS"],
    "url": `${SITE_URL}/`,
    "publisher": { "@id": ORG_ID },
    "inLanguage": "en",
  };
}

/** India office; mirrors the "Hadron GBS India Office" Google Business Profile. */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#pune-office`,
    "name": "Hadron GBS India Office",
    "parentOrganization": { "@id": ORG_ID },
    "image": LOGO_URL,
    "url": SITE_URL,
    "email": "info@hadrongbs.com",
    "address": PUNE_ADDRESS,
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
      "item": `${SITE_URL}${breadcrumb.item === "/" ? "/" : breadcrumb.item}`
    }))
  };
}
