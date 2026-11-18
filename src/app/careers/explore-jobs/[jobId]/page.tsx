import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Building2, House, Hash, CalendarClock, CircleArrowLeft, CircleAlert, ArrowRight } from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import JobDescription, { jdExcerpt } from "../../../components/JobDescription/JobDescription";
import { getJobByCodeSafe, listOpenJobsSafe } from "@/lib/careers/db";
import { JOB_CODE_PATTERN, WORK_TYPE_LABELS, applyHref, jobHref, type Job } from "@/lib/careers/types";
import { SITE_NAME, SITE_SHORT_NAME, SITE_URL } from "@/app/lib/seo";
import { LOGO_URL, getBreadcrumbSchema } from "@/app/lib/schema";
import ShareButton from "./ShareButton";
import sub from "../../CareersSub.module.css";
import styles from "./JobDetail.module.css";

export const dynamic = "force-dynamic";

async function loadJob(raw: string): Promise<Job | null> {
  let code = raw;
  try {
    code = decodeURIComponent(raw);
  } catch {
    return null;
  }
  if (!JOB_CODE_PATTERN.test(code)) return null;
  return getJobByCodeSafe(code);
}

const longDate = (ts: number) =>
  new Date(ts).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export async function generateMetadata({ params }: PageProps<"/careers/explore-jobs/[jobId]">): Promise<Metadata> {
  const job = await loadJob((await params).jobId);
  if (!job) return { title: { absolute: `Job not found | ${SITE_SHORT_NAME}` }, robots: { index: false } };
  const url = `${SITE_URL}${jobHref(job.jobCode)}`;
  const description = jdExcerpt(job.description, 155);
  return {
    title: { absolute: `${job.title} – ${job.location} | ${SITE_SHORT_NAME} Careers` },
    description,
    alternates: { canonical: url },
    robots: job.status === "open" ? undefined : { index: false, follow: true },
    openGraph: { title: `${job.title} at ${SITE_SHORT_NAME}`, description, url, siteName: SITE_NAME, type: "website" },
  };
}

/** Google for Jobs structured data */
function jobPostingSchema(job: Job) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description
      .split("\n")
      .map((l) => l.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]!))
      .join("<br>"),
    identifier: { "@type": "PropertyValue", name: SITE_NAME, value: job.jobCode },
    datePosted: new Date(job.createdAt).toISOString(),
    employmentType: "FULL_TIME",
    hiringOrganization: { "@type": "Organization", name: SITE_NAME, sameAs: SITE_URL, logo: LOGO_URL },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: job.location } },
    ...(job.workType === "WFH" ? { jobLocationType: "TELECOMMUTE" } : {}),
    directApply: true,
    url: `${SITE_URL}${jobHref(job.jobCode)}`,
  };
}

export default async function JobDetailPage({ params }: PageProps<"/careers/explore-jobs/[jobId]">) {
  const job = await loadJob((await params).jobId);
  if (!job) notFound();

  const isOpen = job.status === "open";
  const others = (await listOpenJobsSafe())
    .filter((j) => j.id !== job.id)
    .sort((a, b) => Number(b.department === job.department) - Number(a.department === job.department))
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.topBand}>
          <div className={`${sub.container} ${styles.topGrid}`}>
            <div className={styles.titleCard}>
              <h1 className={styles.title}>{job.title}</h1>
              <dl className={styles.facts}>
                <div><dt><Building2 size={26} strokeWidth={1.6} /><span className={styles.srOnly}>Department</span></dt><dd>{job.department}</dd></div>
                <div><dt><House size={26} strokeWidth={1.6} /><span className={styles.srOnly}>Work type</span></dt><dd>{WORK_TYPE_LABELS[job.workType]}</dd></div>
                <div><dt><Hash size={26} strokeWidth={1.6} /><span className={styles.srOnly}>Job ID</span></dt><dd>{job.jobCode}</dd></div>
                <div><dt><MapPin size={26} strokeWidth={1.6} /><span className={styles.srOnly}>Location</span></dt><dd>{job.location}</dd></div>
                <div><dt><CalendarClock size={26} strokeWidth={1.6} /><span className={styles.srOnly}>Posted on</span></dt><dd>{longDate(job.createdAt)}</dd></div>
              </dl>
            </div>

            <div className={styles.actions}>
              {isOpen ? (
                <Link href={applyHref(job.jobCode)} className={styles.applyBtn}>Apply Now</Link>
              ) : (
                <span className={styles.closedPill}>Applications closed</span>
              )}
              <ShareButton title={`${job.title} at ${SITE_SHORT_NAME}`} className={styles.shareBtn} tipClassName={styles.shareTip} />
            </div>
          </div>
        </section>

        <div className={`${sub.container} ${styles.bodyGrid}`}>
          <article className={styles.content}>
            <Link href="/careers/explore-jobs" className={styles.backLink}>
              <CircleArrowLeft size={36} strokeWidth={1.4} /> See all jobs
            </Link>

            {!isOpen && (
              <div className={styles.closedNotice} role="status">
                <CircleAlert size={20} />
                <span>This position is no longer accepting applications. Have a look at our other open roles.</span>
              </div>
            )}

            <JobDescription text={job.description} size="large" />

            {isOpen && (
              <div className={styles.endCta}>
                <p>Interested? Applying takes about 10 minutes. Keep your CV handy.</p>
                <Link href={applyHref(job.jobCode)} className={styles.applyBtn}>Apply Now</Link>
              </div>
            )}
          </article>

          {others.length > 0 && (
            <aside className={styles.side}>
              <h2 className={styles.sideTitle}>More open roles</h2>
              <ul className={styles.others}>
                {others.map((o) => (
                  <li key={o.id}>
                    <Link href={jobHref(o.jobCode)} className={styles.otherLink}>
                      <span className={styles.otherTitle}>{o.title}</span>
                      <span className={styles.otherLoc}><MapPin size={16} strokeWidth={1.75} /> {o.location}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/careers/explore-jobs" className={styles.allLink}>
                View all jobs <ArrowRight size={16} />
              </Link>
            </aside>
          )}
        </div>
      </main>
      <Footer />

      {isOpen && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema(job)).replace(/</g, "\\u003c") }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", item: "/" },
              { name: "Careers", item: "/careers" },
              { name: "Explore Jobs", item: "/careers/explore-jobs" },
              { name: job.title, item: jobHref(job.jobCode) },
            ])
          ).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
