import { Metadata } from "next";

interface GenerateMetadataProps {
  title: string;
  description: string;
  path: string;
}

const DEFAULT_KEYWORDS = [
  "Enterprise Service Management",
  "Digital Transformation",
  "Cloud Management",
  "Robotic Process Automation",
  "ServiceNow Partner",
  "Hadron GBS",
  "Indian IT Service",
  "Best IT Indian Service",
  "Top IT Company in India",
  "Global IT Solutions",
  "Managed IT Services",
];

const SITE_URL = "https://www.hadrongbs.com";

export function generatePageMetadata({ title, description, path }: GenerateMetadataProps): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: DEFAULT_KEYWORDS,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: "/og-image.png", // Assume we will add a fallback og-image.png in public folder
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}
