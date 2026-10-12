import { pageMetadata, breadcrumbTrail } from "@/app/lib/seo";
import { getBreadcrumbSchema } from "@/app/lib/schema";

export const metadata = pageMetadata("/ai/ai-strategy");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbTrail("/ai/ai-strategy"))) }}
      />
    </>
  );
}
