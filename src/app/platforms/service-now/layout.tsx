import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata("/platforms/service-now");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
