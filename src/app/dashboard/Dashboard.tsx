"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Plus, Search, LogOut, ExternalLink, Pencil, Trash2, Copy, Briefcase, CircleCheck, CircleSlash,
  Building2, X, Loader2, CircleAlert, RefreshCw, Eye, PenLine, Globe,
} from "lucide-react";
import JobDescription from "../components/JobDescription/JobDescription";
import {
  DEPARTMENT_SUGGESTIONS, LOCATION_SUGGESTIONS, WORK_TYPES, WORK_TYPE_LABELS, formatDate, jobHref,
  validateJobInput, type Job, type JobInput, type JobStatus,
} from "@/lib/careers/types";
import styles from "./Dashboard.module.css";

const LOGO = "https://res.cloudinary.com/ax6dtcht/image/upload/v1785324498/Hadron-Logo_lt4uaa.png";

type FieldErrors = Partial<Record<keyof JobInput, string>>;
type Toast = { id: number; kind: "ok" | "err"; text: string };

const JD_TEMPLATE = `About the role:
Describe the role, the team and the kind of projects the person will work on.

Key responsibilities:
- Responsibility one
- Responsibility two
- Responsibility three

Requirements:
- X+ years of experience in ...
- Hands-on experience with ...
- Strong communication skills

Good to have:
- Relevant certifications (e.g. CSA, CAD)

What we offer:
- Competitive compensation and performance incentives
- Sponsored certifications and continuous learning
- Comprehensive health coverage`;

const emptyForm = (jobCode = ""): JobInput => ({
  jobCode,
  title: "",
  department: "",
  workType: "Hybrid",
  location: "",
  status: "open",
  description: "",
});

function suggestJobCode(jobs: Job[]): string {
  const yy = String(new Date().getFullYear()).slice(-2);
  const prefix = `HGBS-${yy}-`;
  const used = new Set(jobs.map((j) => j.jobCode.toUpperCase()));
  let n = 101;
  for (const j of jobs) {
    const m = j.jobCode.toUpperCase().match(new RegExp(`^${prefix}(\\d+)$`));
    if (m) n = Math.max(n, Number(m[1]) + 1);
  }
  while (used.has(`${prefix}${n}`)) n++;
  return `${prefix}${n}`;
}

async function api<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
  });
  const data = await res.json().catch(() => ({}));
  if (res.status === 401) {
    window.location.href = "/dashboard/login";
    throw new Error(data.error || "Session expired");
  }
  if (!res.ok) {
    const err = new Error(data.error || "Something went wrong. Try again.") as Error & { fields?: FieldErrors };
    err.fields = data.fields;
    throw err;
  }
  return data as T;
}

export default function Dashboard({ email, initialJobs, loadError }: { email: string; initialJobs: Job[]; loadError: string }) {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [error, setError] = useState(loadError);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | JobStatus>("all");
  const [deptFilter, setDeptFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [busyIds, setBusyIds] = useState<Set<string>>(new Set());
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Editor modal
  const [editing, setEditing] = useState<Job | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [form, setForm] = useState<JobInput>(emptyForm());
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [saving, setSaving] = useState(false);
  const [jdTab, setJdTab] = useState<"write" | "preview">("write");

  // Delete confirmation
  const [toDelete, setToDelete] = useState<Job | null>(null);
  const [deleting, setDeleting] = useState(false);

  const toast = useCallback((kind: Toast["kind"], text: string) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, kind, text }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  }, []);

  const modalOpen = editorOpen || Boolean(toDelete);
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (toDelete && !deleting) setToDelete(null);
      else if (editorOpen && !saving) setEditorOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalOpen, editorOpen, toDelete, saving, deleting]);

  const refresh = async () => {
    setRefreshing(true);
    try {
      const data = await api<{ jobs: Job[] }>("/api/dashboard/jobs");
      setJobs(data.jobs);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not refresh.");
    } finally {
      setRefreshing(false);
    }
  };

  const departments = useMemo(() => [...new Set(jobs.map((j) => j.department))].sort(), [jobs]);
  const stats = useMemo(
    () => ({
      total: jobs.length,
      open: jobs.filter((j) => j.status === "open").length,
      closed: jobs.filter((j) => j.status === "closed").length,
      departments: departments.length,
    }),
    [jobs, departments]
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((j) => {
      if (statusFilter !== "all" && j.status !== statusFilter) return false;
      if (deptFilter && j.department !== deptFilter) return false;
      if (typeFilter && j.workType !== typeFilter) return false;
      if (q && ![j.title, j.jobCode, j.department, j.location].some((f) => f.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [jobs, query, statusFilter, deptFilter, typeFilter]);

  const filtersActive = Boolean(query || statusFilter !== "all" || deptFilter || typeFilter);

  // ── Editor ──
  const openNew = () => {
    setEditing(null);
    setForm(emptyForm(suggestJobCode(jobs)));
    setFieldErrors({});
    setFormError("");
    setJdTab("write");
    setEditorOpen(true);
  };

  const openEdit = (job: Job) => {
    setEditing(job);
    const { jobCode, title, department, workType, location, status, description } = job;
    setForm({ jobCode, title, department, workType, location, status, description });
    setFieldErrors({});
    setFormError("");
    setJdTab("write");
    setEditorOpen(true);
  };

  const openDuplicate = (job: Job) => {
    setEditing(null);
    const { title, department, workType, location, description } = job;
    setForm({ jobCode: suggestJobCode(jobs), title, department, workType, location, status: "open", description });
    setFieldErrors({});
    setFormError("");
    setJdTab("write");
    setEditorOpen(true);
  };

  const setField = <K extends keyof JobInput>(k: K, v: JobInput[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (fieldErrors[k]) setFieldErrors((e) => ({ ...e, [k]: undefined }));
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = validateJobInput(form);
    if (!parsed.ok) {
      setFieldErrors(parsed.errors);
      setFormError("Please fix the highlighted fields.");
      if (parsed.errors.description) setJdTab("write");
      return;
    }
    const dup = jobs.find((j) => j.jobCode.toUpperCase() === parsed.value.jobCode && j.id !== editing?.id);
    if (dup) {
      setFieldErrors({ jobCode: `Already used by "${dup.title}".` });
      setFormError("Please fix the highlighted fields.");
      return;
    }

    setSaving(true);
    setFormError("");
    try {
      if (editing) {
        const { job } = await api<{ job: Job }>(`/api/dashboard/jobs/${editing.id}`, { method: "PUT", body: JSON.stringify(parsed.value) });
        setJobs((list) => list.map((j) => (j.id === job.id ? job : j)));
        toast("ok", `"${job.title}" updated${job.status === "open" ? " and live on the website" : ""}.`);
      } else {
        const { job } = await api<{ job: Job }>("/api/dashboard/jobs", { method: "POST", body: JSON.stringify(parsed.value) });
        setJobs((list) => [job, ...list]);
        toast("ok", job.status === "open" ? `"${job.title}" is now live on the careers page.` : `"${job.title}" saved as closed.`);
      }
      setEditorOpen(false);
    } catch (err) {
      const fe = (err as { fields?: FieldErrors }).fields;
      if (fe) setFieldErrors(fe);
      setFormError(err instanceof Error ? err.message : "Could not save.");
    } finally {
      setSaving(false);
    }
  };

  // ── Quick actions ──
  const markBusy = (id: string, on: boolean) =>
    setBusyIds((s) => {
      const n = new Set(s);
      if (on) n.add(id);
      else n.delete(id);
      return n;
    });

  const toggleStatus = async (job: Job) => {
    const status: JobStatus = job.status === "open" ? "closed" : "open";
    markBusy(job.id, true);
    try {
      const { job: updated } = await api<{ job: Job }>(`/api/dashboard/jobs/${job.id}`, { method: "PATCH", body: JSON.stringify({ status }) });
      setJobs((list) => list.map((j) => (j.id === updated.id ? updated : j)));
      toast("ok", status === "open" ? `"${job.title}" is open and visible on the website.` : `"${job.title}" is closed and hidden from the website.`);
    } catch (err) {
      toast("err", err instanceof Error ? err.message : "Could not change status.");
    } finally {
      markBusy(job.id, false);
    }
  };

  const confirmDelete = async () => {
    if (!toDelete) return;
    setDeleting(true);
    try {
      await api(`/api/dashboard/jobs/${toDelete.id}`, { method: "DELETE" });
      setJobs((list) => list.filter((j) => j.id !== toDelete.id));
      toast("ok", `"${toDelete.title}" deleted.`);
      setToDelete(null);
    } catch (err) {
      toast("err", err instanceof Error ? err.message : "Could not delete.");
    } finally {
      setDeleting(false);
    }
  };

  const logout = async () => {
    await fetch("/api/dashboard/logout", { method: "POST" }).catch(() => {});
    router.replace("/dashboard/login");
    router.refresh();
  };

  return (
    <div className={styles.app}>
      {/* TOP BAR */}
      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <div className={styles.brand}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="Hadron GBS" className={styles.brandLogo} />
            <span className={styles.brandDivider} />
            <span className={styles.brandName}>Careers Dashboard</span>
          </div>
          <div className={styles.topActions}>
            <a href="/careers/explore-jobs" target="_blank" rel="noopener noreferrer" className={styles.ghostBtn}>
              <Globe size={16} /> <span>View live page</span>
            </a>
            <div className={styles.user} title={email}>
              <span className={styles.avatar}>{email.charAt(0).toUpperCase()}</span>
              <span className={styles.userEmail}>{email}</span>
            </div>
            <button type="button" className={styles.ghostBtn} onClick={logout}>
              <LogOut size={16} /> <span>Sign out</span>
            </button>
          </div>
        </div>
      </header>

      <main className={styles.content}>
        <div className={styles.pageHead}>
          <div>
            <h1 className={styles.pageTitle}>Job Openings</h1>
            <p className={styles.pageSub}>
              Roles marked <strong>Open</strong> appear on the careers Explore Jobs page right away. Close a role to hide it.
            </p>
          </div>
          <button type="button" className={styles.primaryBtn} onClick={openNew}>
            <Plus size={18} /> New role
          </button>
        </div>

        {error && (
          <div className={styles.alertError} role="alert">
            <CircleAlert size={18} />
            <span>{error}</span>
            <button type="button" className={styles.alertAction} onClick={refresh}>Retry</button>
          </div>
        )}

        {/* STATS */}
        <div className={styles.stats}>
          <button type="button" className={`${styles.stat} ${statusFilter === "all" ? styles.statActive : ""}`} onClick={() => setStatusFilter("all")}>
            <span className={`${styles.statIcon} ${styles.iconNavy}`}><Briefcase size={20} /></span>
            <span className={styles.statNum}>{stats.total}</span>
            <span className={styles.statLabel}>Total roles</span>
          </button>
          <button type="button" className={`${styles.stat} ${statusFilter === "open" ? styles.statActive : ""}`} onClick={() => setStatusFilter("open")}>
            <span className={`${styles.statIcon} ${styles.iconGreen}`}><CircleCheck size={20} /></span>
            <span className={styles.statNum}>{stats.open}</span>
            <span className={styles.statLabel}>Open · live on site</span>
          </button>
          <button type="button" className={`${styles.stat} ${statusFilter === "closed" ? styles.statActive : ""}`} onClick={() => setStatusFilter("closed")}>
            <span className={`${styles.statIcon} ${styles.iconGrey}`}><CircleSlash size={20} /></span>
            <span className={styles.statNum}>{stats.closed}</span>
            <span className={styles.statLabel}>Closed · hidden</span>
          </button>
          <div className={styles.stat}>
            <span className={`${styles.statIcon} ${styles.iconOrange}`}><Building2 size={20} /></span>
            <span className={styles.statNum}>{stats.departments}</span>
            <span className={styles.statLabel}>Departments</span>
          </div>
        </div>

        {/* TOOLBAR */}
        <div className={styles.panel}>
          <div className={styles.toolbar}>
            <label className={styles.search}>
              <Search size={18} />
              <input
                type="search"
                placeholder="Search role, Job ID, department or location"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <div className={styles.segment} role="group" aria-label="Status">
              {(["all", "open", "closed"] as const).map((s) => (
                <button key={s} type="button" className={statusFilter === s ? styles.segActive : ""} onClick={() => setStatusFilter(s)}>
                  {s === "all" ? "All" : s === "open" ? "Open" : "Closed"}
                </button>
              ))}
            </div>
            <select className={styles.select} value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)} aria-label="Department">
              <option value="">All departments</option>
              {departments.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <select className={styles.select} value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} aria-label="Work type">
              <option value="">All work types</option>
              {WORK_TYPES.map((w) => <option key={w} value={w}>{w}</option>)}
            </select>
            <button type="button" className={styles.iconBtn} onClick={refresh} title="Refresh" aria-label="Refresh">
              <RefreshCw size={17} className={refreshing ? styles.spin : ""} />
            </button>
          </div>

          {/* TABLE */}
          {jobs.length === 0 && !error ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}><Briefcase size={28} /></div>
              <h2>No roles yet</h2>
              <p>Create your first opening. As soon as it&apos;s saved as Open, candidates can see it and apply.</p>
              <button type="button" className={styles.primaryBtn} onClick={openNew}><Plus size={18} /> Create a role</button>
            </div>
          ) : visible.length === 0 ? (
            <div className={styles.empty}>
              <h2>No roles match these filters</h2>
              {filtersActive && (
                <button
                  type="button"
                  className={styles.secondaryBtn}
                  onClick={() => { setQuery(""); setStatusFilter("all"); setDeptFilter(""); setTypeFilter(""); }}
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Open role</th>
                    <th>Job ID</th>
                    <th>Department</th>
                    <th>Work type</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Updated</th>
                    <th aria-label="Actions" />
                  </tr>
                </thead>
                <tbody>
                  {visible.map((job) => {
                    const busy = busyIds.has(job.id);
                    const open = job.status === "open";
                    return (
                      <tr key={job.id} className={open ? "" : styles.rowClosed}>
                        <td data-label="Open role">
                          <button type="button" className={styles.roleBtn} onClick={() => openEdit(job)}>{job.title}</button>
                        </td>
                        <td data-label="Job ID"><code className={styles.code}>{job.jobCode}</code></td>
                        <td data-label="Department">{job.department}</td>
                        <td data-label="Work type"><span className={`${styles.typePill} ${styles["type" + job.workType]}`}>{job.workType}</span></td>
                        <td data-label="Location">{job.location}</td>
                        <td data-label="Status">
                          <button
                            type="button"
                            role="switch"
                            aria-checked={open}
                            className={`${styles.switch} ${open ? styles.switchOn : ""}`}
                            onClick={() => toggleStatus(job)}
                            disabled={busy}
                            title={open ? "Click to close this role" : "Click to open this role"}
                          >
                            <span className={styles.switchTrack}><span className={styles.switchThumb} /></span>
                            <span className={styles.switchLabel}>{busy ? "Saving…" : open ? "Open" : "Closed"}</span>
                          </button>
                        </td>
                        <td data-label="Updated" className={styles.muted}>{formatDate(job.updatedAt)}</td>
                        <td className={styles.actions}>
                          {open && (
                            <a href={jobHref(job.jobCode)} target="_blank" rel="noopener noreferrer" className={styles.iconBtn} title="View on website" aria-label="View on website">
                              <ExternalLink size={16} />
                            </a>
                          )}
                          <button type="button" className={styles.iconBtn} onClick={() => openEdit(job)} title="Edit" aria-label="Edit">
                            <Pencil size={16} />
                          </button>
                          <button type="button" className={styles.iconBtn} onClick={() => openDuplicate(job)} title="Duplicate" aria-label="Duplicate">
                            <Copy size={16} />
                          </button>
                          <button type="button" className={`${styles.iconBtn} ${styles.dangerIcon}`} onClick={() => setToDelete(job)} title="Delete" aria-label="Delete">
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* EDITOR MODAL */}
      {editorOpen && (
        <div className={styles.overlay} onMouseDown={(e) => e.target === e.currentTarget && !saving && setEditorOpen(false)}>
          <form className={styles.modal} onSubmit={save} role="dialog" aria-modal="true" aria-labelledby="editor-title" noValidate>
            <div className={styles.modalHead}>
              <div>
                <h2 id="editor-title">{editing ? "Edit role" : "New role"}</h2>
                <p>{editing ? `Last updated ${formatDate(editing.updatedAt)}` : "Fill in the details below. Open roles go live immediately."}</p>
              </div>
              <button type="button" className={styles.iconBtn} onClick={() => setEditorOpen(false)} disabled={saving} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className={styles.modalBody} data-lenis-prevent>
              {formError && (
                <div className={styles.alertError} role="alert"><CircleAlert size={18} /><span>{formError}</span></div>
              )}

              <div className={styles.formGrid}>
                <label className={`${styles.field} ${styles.span2}`}>
                  <span>Open role <em>*</em></span>
                  <input
                    className={fieldErrors.title ? styles.invalid : ""}
                    value={form.title}
                    onChange={(e) => setField("title", e.target.value)}
                    placeholder="e.g. ServiceNow Developer (ITSM)"
                    maxLength={120}
                    autoFocus
                  />
                  {fieldErrors.title && <small>{fieldErrors.title}</small>}
                </label>

                <label className={styles.field}>
                  <span>Department <em>*</em></span>
                  <select
                    className={fieldErrors.department ? styles.invalid : ""}
                    value={form.department}
                    onChange={(e) => setField("department", e.target.value)}
                  >
                    <option value="" disabled>Select a department</option>
                    {/* Keep an older job's department selectable so editing it doesn't silently change it */}
                    {[...new Set([...DEPARTMENT_SUGGESTIONS, ...(form.department ? [form.department] : [])])].map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  {fieldErrors.department && <small>{fieldErrors.department}</small>}
                </label>

                <label className={styles.field}>
                  <span>Job ID <em>*</em></span>
                  <input
                    className={fieldErrors.jobCode ? styles.invalid : ""}
                    value={form.jobCode}
                    onChange={(e) => setField("jobCode", e.target.value.toUpperCase().replace(/\s+/g, "-"))}
                    placeholder="e.g. HGBS-26-101"
                    maxLength={40}
                  />
                  {fieldErrors.jobCode ? <small>{fieldErrors.jobCode}</small> : <i>Shown to candidates and used in the job link.</i>}
                </label>

                <div className={styles.field}>
                  <span>Work type <em>*</em></span>
                  <div className={styles.choice} role="radiogroup" aria-label="Work type">
                    {WORK_TYPES.map((w) => (
                      <button
                        key={w}
                        type="button"
                        role="radio"
                        aria-checked={form.workType === w}
                        className={form.workType === w ? styles.choiceOn : ""}
                        onClick={() => setField("workType", w)}
                        title={WORK_TYPE_LABELS[w]}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                  {fieldErrors.workType && <small>{fieldErrors.workType}</small>}
                </div>

                <label className={styles.field}>
                  <span>Location <em>*</em></span>
                  <input
                    className={fieldErrors.location ? styles.invalid : ""}
                    value={form.location}
                    onChange={(e) => setField("location", e.target.value)}
                    placeholder="e.g. Pune, India"
                    list="loc-options"
                    maxLength={120}
                  />
                  <datalist id="loc-options">
                    {[...new Set([...jobs.map((j) => j.location), ...LOCATION_SUGGESTIONS])].map((l) => <option key={l} value={l} />)}
                  </datalist>
                  {fieldErrors.location && <small>{fieldErrors.location}</small>}
                </label>

                <div className={`${styles.field} ${styles.span2}`}>
                  <span>Role status</span>
                  <div className={styles.statusPick}>
                    <button
                      type="button"
                      className={`${styles.statusOpt} ${form.status === "open" ? styles.statusOptOpen : ""}`}
                      onClick={() => setField("status", "open")}
                      aria-pressed={form.status === "open"}
                    >
                      <CircleCheck size={18} />
                      <span><strong>Opened</strong><i>Visible on the careers page; candidates can apply</i></span>
                    </button>
                    <button
                      type="button"
                      className={`${styles.statusOpt} ${form.status === "closed" ? styles.statusOptClosed : ""}`}
                      onClick={() => setField("status", "closed")}
                      aria-pressed={form.status === "closed"}
                    >
                      <CircleSlash size={18} />
                      <span><strong>Closed</strong><i>Hidden from the website; kept here for later</i></span>
                    </button>
                  </div>
                </div>

                <div className={`${styles.field} ${styles.span2}`}>
                  <div className={styles.jdHead}>
                    <span>Job description (JD) <em>*</em></span>
                    <div className={styles.tabs}>
                      <button type="button" className={jdTab === "write" ? styles.tabOn : ""} onClick={() => setJdTab("write")}>
                        <PenLine size={14} /> Write
                      </button>
                      <button type="button" className={jdTab === "preview" ? styles.tabOn : ""} onClick={() => setJdTab("preview")}>
                        <Eye size={14} /> Preview
                      </button>
                    </div>
                  </div>
                  {jdTab === "write" ? (
                    <>
                      <textarea
                        className={fieldErrors.description ? styles.invalid : ""}
                        value={form.description}
                        onChange={(e) => setField("description", e.target.value)}
                        placeholder="Describe the role, responsibilities and requirements…"
                        rows={14}
                        maxLength={20000}
                      />
                      <div className={styles.jdHelp}>
                        <span>
                          Tips: end a line with <code>:</code> for a heading · start lines with <code>-</code> for bullet points ·
                          wrap text in <code>**double asterisks**</code> for bold.
                        </span>
                        {!form.description.trim() && (
                          <button type="button" className={styles.linkBtn} onClick={() => setField("description", JD_TEMPLATE)}>
                            Insert template
                          </button>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className={styles.preview}>
                      {form.description.trim() ? <JobDescription text={form.description} compact /> : <p className={styles.muted}>Nothing to preview yet.</p>}
                    </div>
                  )}
                  {fieldErrors.description && <small>{fieldErrors.description}</small>}
                </div>
              </div>
            </div>

            <div className={styles.modalFoot}>
              <button type="button" className={styles.secondaryBtn} onClick={() => setEditorOpen(false)} disabled={saving}>Cancel</button>
              <button type="submit" className={styles.primaryBtn} disabled={saving}>
                {saving ? <><Loader2 size={18} className={styles.spin} /> Saving…</> : editing ? "Save changes" : form.status === "open" ? "Publish role" : "Save role"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* DELETE CONFIRM */}
      {toDelete && (
        <div className={styles.overlay} onMouseDown={(e) => e.target === e.currentTarget && !deleting && setToDelete(null)}>
          <div className={`${styles.modal} ${styles.confirm}`} role="alertdialog" aria-modal="true" aria-labelledby="del-title">
            <div className={styles.confirmIcon}><Trash2 size={24} /></div>
            <h2 id="del-title">Delete this role?</h2>
            <p>
              <strong>{toDelete.title}</strong> ({toDelete.jobCode}) will be removed permanently and its job page will stop working.
              To hide it temporarily, close the role instead.
            </p>
            <div className={styles.confirmActions}>
              <button type="button" className={styles.secondaryBtn} onClick={() => setToDelete(null)} disabled={deleting}>Cancel</button>
              {toDelete.status === "open" && (
                <button
                  type="button"
                  className={styles.secondaryBtn}
                  onClick={() => { const j = toDelete; setToDelete(null); toggleStatus(j); }}
                  disabled={deleting}
                >
                  Close instead
                </button>
              )}
              <button type="button" className={styles.dangerBtn} onClick={confirmDelete} disabled={deleting}>
                {deleting ? <><Loader2 size={18} className={styles.spin} /> Deleting…</> : "Delete role"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOASTS */}
      <div className={styles.toasts} aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`${styles.toast} ${t.kind === "err" ? styles.toastErr : ""}`}>
            {t.kind === "ok" ? <CircleCheck size={18} /> : <CircleAlert size={18} />}
            <span>{t.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
