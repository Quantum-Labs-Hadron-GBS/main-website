"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { MapPin, ChevronLeft, ChevronRight, ChevronDown, ArrowRight } from "lucide-react";
import { DEPARTMENT_SUGGESTIONS, WORK_TYPES, WORK_TYPE_LABELS, applyHref, jobHref, type WorkType } from "@/lib/careers/types";
import sub from "../CareersSub.module.css";
import styles from "./ExploreJobs.module.css";

export interface JobRow {
  jobCode: string;
  title: string;
  department: string;
  workType: WorkType;
  location: string;
}

export interface Filters {
  q: string;
  department: string;
  workType: string;
  location: string;
}

const PAGE_SIZE = 10;
const EMPTY: Filters = { q: "", department: "", workType: "", location: "" };

const unique = (values: string[]) => [...new Set(values)].sort((a, b) => a.localeCompare(b));

/** Page numbers with ellipses: 1 … 4 5 6 … 12 */
function pageList(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current - 1, current, current + 1].filter((p) => p >= 1 && p <= total));
  const sorted = [...pages].sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) out.push("…");
    out.push(p);
  });
  return out;
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className={styles.selectWrap}>
      <span className={styles.srOnly}>{label}</span>
      <select className={`${styles.control} ${value ? "" : styles.placeholder}`} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <ChevronDown size={20} className={styles.chevron} aria-hidden="true" />
    </label>
  );
}

export default function ExploreJobs({ jobs, initial, initialPage }: { jobs: JobRow[]; initial: Filters; initialPage: number }) {
  const [draft, setDraft] = useState<Filters>(initial);
  const [applied, setApplied] = useState<Filters>(initial);
  const [page, setPage] = useState(initialPage);

  const departments = useMemo(
    () => [...DEPARTMENT_SUGGESTIONS, ...unique(jobs.map((j) => j.department)).filter((d) => !DEPARTMENT_SUGGESTIONS.includes(d))],
    [jobs]
  );
  const locations = useMemo(() => unique(jobs.map((j) => j.location)), [jobs]);
  const workTypes = useMemo(() => WORK_TYPES.filter((w) => jobs.some((j) => j.workType === w)), [jobs]);

  const filtered = useMemo(() => {
    const q = applied.q.trim().toLowerCase();
    return jobs.filter((j) => {
      if (q && ![j.title, j.department, j.jobCode, j.location].some((f) => f.toLowerCase().includes(q))) return false;
      if (applied.department && j.department !== applied.department) return false;
      if (applied.workType && j.workType !== applied.workType) return false;
      if (applied.location && j.location !== applied.location) return false;
      return true;
    });
  }, [jobs, applied]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);
  const hasFilters = Object.entries(applied).some(([, v]) => Boolean(v));

  // Keep filters and page in the URL so "See all jobs" / Back returns to the same view
  useEffect(() => {
    const params = new URLSearchParams();
    if (applied.q) params.set("q", applied.q);
    if (applied.department) params.set("department", applied.department);
    if (applied.workType) params.set("workType", applied.workType);
    if (applied.location) params.set("location", applied.location);
    if (current > 1) params.set("page", String(current));
    const qs = params.toString();
    window.history.replaceState(window.history.state, "", qs ? `?${qs}` : window.location.pathname);
  }, [applied, current]);

  const apply = (e?: React.FormEvent) => {
    e?.preventDefault();
    setApplied(draft);
    setPage(1);
  };

  const clear = () => {
    setDraft(EMPTY);
    setApplied(EMPTY);
    setPage(1);
  };

  const goTo = (p: number) => {
    setPage(p);
    document.getElementById("job-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pagination = totalPages > 1 && (
    <nav className={styles.pager} aria-label="Pagination">
      <button type="button" className={styles.pageArrow} onClick={() => goTo(current - 1)} disabled={current === 1} aria-label="Previous page">
        <ChevronLeft size={22} />
      </button>
      {pageList(current, totalPages).map((p, i) =>
        p === "…" ? (
          <span key={`e${i}`} className={styles.pageGap}>…</span>
        ) : (
          <button
            key={p}
            type="button"
            className={`${styles.pageNum} ${p === current ? styles.pageNumActive : ""}`}
            onClick={() => goTo(p)}
            aria-current={p === current ? "page" : undefined}
          >
            {p}
          </button>
        )
      )}
      <button type="button" className={styles.pageArrow} onClick={() => goTo(current + 1)} disabled={current === totalPages} aria-label="Next page">
        <ChevronRight size={22} />
      </button>
    </nav>
  );

  return (
    <div className={styles.body} id="job-results">
      <div className={sub.container}>
        <div className={styles.topRow}>
          <p className={styles.count}>
            {filtered.length === 0 ? (
              <>No matching jobs</>
            ) : (
              <>
                Displaying <strong>{start + 1}</strong> to <strong>{start + visible.length}</strong> of{" "}
                <strong>{filtered.length}</strong> matching {filtered.length === 1 ? "job" : "jobs"}
              </>
            )}
          </p>
          {pagination}
        </div>

        <div className={styles.layout}>
          <aside className={styles.filterCard}>
            <h2 className={styles.filterTitle}>Filter jobs</h2>
            <form onSubmit={apply} className={styles.filterForm}>
              <label>
                <span className={styles.srOnly}>Search</span>
                <input
                  type="search"
                  className={styles.control}
                  placeholder="Search"
                  value={draft.q}
                  onChange={(e) => setDraft({ ...draft, q: e.target.value })}
                />
              </label>
              <Select
                label="Department"
                value={draft.department}
                onChange={(v) => setDraft({ ...draft, department: v })}
                options={departments.map((d) => ({ value: d, label: d }))}
              />
              <Select
                label="Work type"
                value={draft.workType}
                onChange={(v) => setDraft({ ...draft, workType: v })}
                options={workTypes.map((w) => ({ value: w, label: WORK_TYPE_LABELS[w] }))}
              />
              <Select
                label="Location"
                value={draft.location}
                onChange={(v) => setDraft({ ...draft, location: v })}
                options={locations.map((l) => ({ value: l, label: l }))}
              />
              <button type="submit" className={styles.applyFilters}>Apply Filters</button>
              {hasFilters && (
                <button type="button" className={styles.clearLink} onClick={clear}>Clear all filters</button>
              )}
            </form>
          </aside>

          <section className={styles.listCard} aria-label="Job openings">
            {jobs.length === 0 ? (
              <div className={styles.empty}>
                <h2>No open roles right now</h2>
                <p>We&apos;re always glad to hear from good people. Send us your profile and we&apos;ll get in touch when a matching role opens.</p>
                <Link href={applyHref()} className={sub.primaryBtn}>Submit a general application</Link>
              </div>
            ) : visible.length === 0 ? (
              <div className={styles.empty}>
                <h2>No jobs match your filters</h2>
                <p>Try a broader search or remove a filter.</p>
                <button type="button" className={sub.outlineBtn} onClick={clear}>Clear all filters</button>
              </div>
            ) : (
              <ul className={styles.list}>
                {visible.map((job) => (
                  <li key={job.jobCode}>
                    <Link href={jobHref(job.jobCode)} className={styles.row}>
                      <span className={styles.rowMain}>
                        <span className={styles.rowTitle}>{job.title}</span>
                        <span className={styles.rowLoc}><MapPin size={20} strokeWidth={1.75} /> {job.location}</span>
                        <span className={styles.rowMeta}>
                          {job.department} · {WORK_TYPE_LABELS[job.workType]} · {job.jobCode}
                        </span>
                      </span>
                      <span className={styles.rowGo} aria-hidden="true"><ArrowRight size={20} /></span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        {totalPages > 1 && <div className={styles.bottomPager}>{pagination}</div>}

        <div className={styles.general}>
          <p>
            <strong>Don&apos;t see the right role?</strong> Send a general application and we&apos;ll contact you when something fits.
          </p>
          <Link href={applyHref()} className={sub.outlineBtn}>Apply anyway</Link>
        </div>
      </div>
    </div>
  );
}
