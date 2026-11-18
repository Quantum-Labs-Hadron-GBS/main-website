// Shared job-posting types, options and validation.
// Imported by the public careers pages, the HR dashboard (client) and the API routes (server),
// so this file must stay free of server-only code.

export const WORK_TYPES = ["WFO", "WFH", "Hybrid"] as const;
export type WorkType = (typeof WORK_TYPES)[number];

export const WORK_TYPE_LABELS: Record<WorkType, string> = {
  WFO: "Work from Office",
  WFH: "Work from Home",
  Hybrid: "Hybrid",
};

export const JOB_STATUSES = ["open", "closed"] as const;
export type JobStatus = (typeof JOB_STATUSES)[number];

export interface Job {
  /** Internal id (UUID) */
  id: string;
  /** Public Job ID chosen by HR, e.g. HGBS-SN-101. Used in the job's URL. */
  jobCode: string;
  title: string;
  department: string;
  workType: WorkType;
  location: string;
  status: JobStatus;
  /** Job description (plain text with light formatting, see JobDescription component) */
  description: string;
  /** Epoch milliseconds */
  createdAt: number;
  updatedAt: number;
}

export type JobInput = Pick<Job, "jobCode" | "title" | "department" | "workType" | "location" | "status" | "description">;

/** Suggestions shown in the dashboard; HR can still type any value. */
export const DEPARTMENT_SUGGESTIONS = [
  "Delivery",
  "Sales",
  "Marketing",
  "Pre-Sales",
  "Engineering",
  "Consulting",
  "Human Resources",
  "Finance & Accounts",
  "Operations",
  "Administration",
];

export const LOCATION_SUGGESTIONS = [
  "Pune, India",
  "Bengaluru, India",
  "Hyderabad, India",
  "Mumbai, India",
  "Singapore",
  "Dubai, UAE",
  "Dover, USA",
  "Remote",
];

export const JOB_CODE_PATTERN = /^[A-Za-z0-9][A-Za-z0-9_-]{1,39}$/;

const LIMITS = {
  title: [2, 120],
  department: [2, 60],
  location: [2, 120],
  description: [20, 20000],
} as const;

/** Validates and normalises dashboard input. Returns the clean job or a map of field errors. */
export function validateJobInput(
  raw: unknown
): { ok: true; value: JobInput } | { ok: false; errors: Partial<Record<keyof JobInput, string>> } {
  const src = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const str = (k: string) => (typeof src[k] === "string" ? (src[k] as string).trim() : "");
  const errors: Partial<Record<keyof JobInput, string>> = {};

  const value: JobInput = {
    jobCode: str("jobCode").toUpperCase(),
    title: str("title").replace(/\s+/g, " "),
    department: str("department").replace(/\s+/g, " "),
    workType: str("workType") as WorkType,
    location: str("location").replace(/\s+/g, " "),
    status: (str("status") || "open") as JobStatus,
    description: (typeof src.description === "string" ? src.description : "").replace(/\r\n/g, "\n").trim(),
  };

  const len = (k: keyof typeof LIMITS, label: string) => {
    const [min, max] = LIMITS[k];
    const v = value[k];
    if (v.length < min) errors[k] = `${label} is required${min > 2 ? ` (at least ${min} characters)` : ""}.`;
    else if (v.length > max) errors[k] = `${label} must be ${max} characters or fewer.`;
  };

  len("title", "Open role");
  len("department", "Department");
  len("location", "Location");
  len("description", "Job description");
  if (!JOB_CODE_PATTERN.test(value.jobCode)) {
    errors.jobCode = "Job ID must be 2–40 characters: letters, numbers, hyphens or underscores.";
  }
  if (!WORK_TYPES.includes(value.workType)) errors.workType = "Choose WFO, WFH or Hybrid.";
  if (!JOB_STATUSES.includes(value.status)) errors.status = "Status must be open or closed.";

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, value };
}

/** "Today", "Yesterday", "5 days ago", "3 weeks ago", … */
export function postedAgo(ts: number, now = Date.now()): string {
  const days = Math.floor((now - ts) / 86_400_000);
  if (days <= 0) return "Posted today";
  if (days === 1) return "Posted yesterday";
  if (days < 7) return `Posted ${days} days ago`;
  if (days < 30) {
    const w = Math.floor(days / 7);
    return `Posted ${w} week${w > 1 ? "s" : ""} ago`;
  }
  const m = Math.floor(days / 30);
  if (m < 12) return `Posted ${m} month${m > 1 ? "s" : ""} ago`;
  return "Posted over a year ago";
}

export function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/** Link to the application form, pre-filled for a role. */
export function applyHref(jobCode?: string): string {
  return jobCode ? `/careers/application-form?jobId=${encodeURIComponent(jobCode)}` : "/careers/application-form";
}

export function jobHref(jobCode: string): string {
  return `/careers/explore-jobs/${encodeURIComponent(jobCode)}`;
}
