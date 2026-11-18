import Link from "next/link";
import { Briefcase, MapPin, Building2, Hash, ArrowLeft, Search } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import JobApplicationForm from "../../components/JobApplicationForm/JobApplicationForm";
import { getJobByCodeSafe } from "@/lib/careers/db";
import { JOB_CODE_PATTERN, WORK_TYPE_LABELS, jobHref } from "@/lib/careers/types";
import sub from "../CareersSub.module.css";
import styles from "./ApplicationForm.module.css";
import { pageMetadata, breadcrumbTrail } from "@/app/lib/seo";
import { getBreadcrumbSchema } from "@/app/lib/schema";

export const metadata = pageMetadata("/careers/application-form");

// Reads ?jobId= to pre-fill the role chosen on Explore Jobs
export const dynamic = "force-dynamic";

export default async function ApplicationFormPage({ searchParams }: PageProps<"/careers/application-form">) {
  const { jobId } = await searchParams;
  const code = typeof jobId === "string" && JOB_CODE_PATTERN.test(jobId) ? jobId : undefined;
  const found = code ? await getJobByCodeSafe(code) : null;
  const job = found?.status === "open" ? found : null;

  return (
    <>
      <Navbar />
      <main className={sub.main}>
        <section className={sub.heroBanner}>
          <div className={sub.container}>
            <nav className={sub.crumbs} aria-label="Breadcrumb">
              <Link href="/careers">Careers</Link>
              <span aria-hidden="true">/</span>
              <span>Application form</span>
            </nav>
            <h1 className={sub.heroTitle}>Job application form</h1>
            <p className={sub.heroSubtitle}>
              Takes about 10 minutes. A member of our Talent team reads every application.
            </p>
          </div>
        </section>

        <div className={styles.body}>
          <div className={sub.container}>
            {job ? (
              <div className={styles.roleCard}>
                <div className={styles.roleIcon}><Briefcase size={22} /></div>
                <div className={styles.roleInfo}>
                  <span className={styles.roleLabel}>You&apos;re applying for</span>
                  <h2 className={styles.roleTitle}>{job.title}</h2>
                  <div className={styles.roleMeta}>
                    <span><Hash size={14} /> {job.jobCode}</span>
                    <span><Building2 size={14} /> {job.department}</span>
                    <span><MapPin size={14} /> {job.location}</span>
                    <span>{WORK_TYPE_LABELS[job.workType]}</span>
                  </div>
                </div>
                <Link href={jobHref(job.jobCode)} className={styles.roleLink}>
                  <ArrowLeft size={16} /> Job details
                </Link>
              </div>
            ) : (
              <div className={styles.infoBar}>
                <span>
                  {found
                    ? "That role is no longer accepting applications, but you can still apply for other positions below."
                    : "Looking for a specific role? Browse current openings first, or apply below for any position."}
                </span>
                <Link href="/careers/explore-jobs" className={styles.infoLink}>
                  <Search size={16} /> Explore jobs
                </Link>
              </div>
            )}

            <div className={styles.formWrap}>
              <JobApplicationForm prefill={job ? { position: job.title, jobCode: job.jobCode } : undefined} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbTrail("/careers/application-form"))) }}
      />
    </>
  );
}
