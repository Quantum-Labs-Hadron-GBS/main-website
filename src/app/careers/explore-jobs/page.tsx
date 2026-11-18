import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { listOpenJobsSafe } from "@/lib/careers/db";
import ExploreJobs, { type JobRow, type Filters } from "./ExploreJobs";
import sub from "../CareersSub.module.css";
import { pageMetadata, breadcrumbTrail } from "@/app/lib/seo";
import { getBreadcrumbSchema } from "@/app/lib/schema";

export const metadata = pageMetadata("/careers/explore-jobs");

// Openings are managed live from the HR dashboard, so render on every request
export const dynamic = "force-dynamic";

const str = (v: string | string[] | undefined) => (typeof v === "string" ? v.slice(0, 120) : "");

export default async function ExploreJobsPage({ searchParams }: PageProps<"/careers/explore-jobs">) {
  const sp = await searchParams;
  const initial: Filters = {
    q: str(sp.q),
    department: str(sp.department),
    workType: str(sp.workType),
    location: str(sp.location),
  };
  const initialPage = Math.max(1, Number.parseInt(str(sp.page), 10) || 1);

  const jobs: JobRow[] = (await listOpenJobsSafe()).map((j) => ({
    jobCode: j.jobCode,
    title: j.title,
    department: j.department,
    workType: j.workType,
    location: j.location,
  }));

  return (
    <>
      <Navbar />
      <main className={sub.main}>
        <section className={sub.heroBanner}>
          <div className={sub.container}>
            <nav className={sub.crumbs} aria-label="Breadcrumb">
              <Link href="/careers">Careers</Link>
              <span aria-hidden="true">/</span>
              <span>Explore jobs</span>
            </nav>
            <h1 className={sub.heroTitle}>Explore jobs</h1>
          </div>
        </section>

        <ExploreJobs jobs={jobs} initial={initial} initialPage={initialPage} />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbTrail("/careers/explore-jobs"))) }}
      />
    </>
  );
}
