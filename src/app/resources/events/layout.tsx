import { pageMetadata, breadcrumbTrail, SITE_URL } from "@/app/lib/seo";
import { getBreadcrumbSchema } from "@/app/lib/schema";
import { EVENTS } from "./data";

export const metadata = pageMetadata("/resources/events");

// schema.org Event markup so the roundtable can appear as an event in Google results
const eventSchema = EVENTS.map((e) => ({
  "@context": "https://schema.org",
  "@type": "BusinessEvent",
  name: `${e.partner}: ${e.title.replace(/\.$/, "")}`,
  description: `${e.series}. ${e.format}.`,
  startDate: e.startDate,
  endDate: e.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: e.venueName,
    address: {
      "@type": "PostalAddress",
      streetAddress: e.venueAddress,
      addressLocality: e.city,
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  },
  organizer: [
    { "@type": "Organization", name: "Hadron Global Business Solutions", url: SITE_URL },
    { "@type": "Organization", name: "Salesforce", url: "https://www.salesforce.com" },
  ],
  isAccessibleForFree: true,
  url: `${SITE_URL}/resources/events`,
}));

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbTrail("/resources/events"))) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
    </>
  );
}
