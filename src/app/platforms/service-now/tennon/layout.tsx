import { pageMetadata, breadcrumbTrail } from "@/app/lib/seo";
import { getBreadcrumbSchema } from "@/app/lib/schema";

export const metadata = pageMetadata("/platforms/service-now/tennon");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbTrail("/platforms/service-now/tennon"))) }}
      />
    </>
  );
}
