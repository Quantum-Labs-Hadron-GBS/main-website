import { pageMetadata } from "@/app/lib/seo";

export const metadata = pageMetadata("/ai");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
