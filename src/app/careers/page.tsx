import { pageMetadata, breadcrumbTrail } from "@/app/lib/seo";
import { getBreadcrumbSchema } from "@/app/lib/schema";
import CareersContent from "./CareersContent";

export const metadata = pageMetadata("/careers");

export default function CareersPage() {
  return (
    <>
      <CareersContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbTrail("/careers"))) }}
      />
    </>
  );
}
