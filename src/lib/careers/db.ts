// Job postings storage: Cloudflare D1 (binding "CAREERS_DB", see wrangler.jsonc).
// Server only. Production: Cloudflare Workers D1. `next dev`: local SQLite file (devDb.ts).
import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { Job, JobInput, JobStatus, WorkType } from "./types";

// Minimal D1 typings (avoids pulling in @cloudflare/workers-types)
interface D1Result<T> {
  results: T[];
  meta?: { changes?: number };
}
interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  all<T = Record<string, unknown>>(): Promise<D1Result<T>>;
  run(): Promise<D1Result<unknown>>;
}
interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch(statements: D1PreparedStatement[]): Promise<D1Result<unknown>[]>;
}

declare global {
  interface CloudflareEnv {
    CAREERS_DB?: D1Database;
  }
}

export class StorageUnavailableError extends Error {
  constructor() {
    super("Careers database (CAREERS_DB) is not available");
  }
}

let schemaReady: Promise<void> | null = null;

async function getDb(): Promise<D1Database> {
  let db: D1Database | undefined;
  try {
    const { env } = await getCloudflareContext({ async: true });
    db = env.CAREERS_DB;
  } catch {
    db = undefined;
  }
  // Local dev without a working Cloudflare runtime: fall back to Node's SQLite (stripped from production builds)
  if (!db && process.env.NODE_ENV === "development") {
    db = (await (await import("./devDb")).getDevDb()) as unknown as D1Database;
  }
  if (!db) throw new StorageUnavailableError();

  // Tables are created on first use, so a fresh database needs no manual migration
  if (!schemaReady) {
    schemaReady = db
      .batch([
        db.prepare(`CREATE TABLE IF NOT EXISTS jobs (
          id TEXT PRIMARY KEY,
          job_code TEXT NOT NULL UNIQUE COLLATE NOCASE,
          title TEXT NOT NULL,
          department TEXT NOT NULL,
          work_type TEXT NOT NULL,
          location TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'open',
          description TEXT NOT NULL,
          created_at INTEGER NOT NULL,
          updated_at INTEGER NOT NULL
        )`),
        db.prepare(`CREATE INDEX IF NOT EXISTS jobs_status_idx ON jobs (status, created_at)`),
        db.prepare(`CREATE TABLE IF NOT EXISTS login_attempts (
          key TEXT PRIMARY KEY,
          failures INTEGER NOT NULL,
          window_start INTEGER NOT NULL
        )`),
      ])
      .then(() => undefined)
      .catch((err) => {
        schemaReady = null;
        throw err;
      });
  }
  await schemaReady;
  return db;
}

/** Request time for server components (keeps "posted N days ago" identical on server and client). */
export function requestTime(): number {
  return Date.now();
}

interface JobRow {
  id: string;
  job_code: string;
  title: string;
  department: string;
  work_type: string;
  location: string;
  status: string;
  description: string;
  created_at: number;
  updated_at: number;
}

const toJob = (r: JobRow): Job => ({
  id: r.id,
  jobCode: r.job_code,
  title: r.title,
  department: r.department,
  workType: r.work_type as WorkType,
  location: r.location,
  status: r.status as JobStatus,
  description: r.description,
  createdAt: Number(r.created_at),
  updatedAt: Number(r.updated_at),
});

/** All jobs (dashboard) or only one status (public site), newest first. */
export async function listJobs(status?: JobStatus): Promise<Job[]> {
  const db = await getDb();
  const stmt = status
    ? db.prepare("SELECT * FROM jobs WHERE status = ? ORDER BY created_at DESC").bind(status)
    : db.prepare("SELECT * FROM jobs ORDER BY created_at DESC");
  const { results } = await stmt.all<JobRow>();
  return results.map(toJob);
}

/** Open jobs for the public site; returns [] (and logs) if storage is unavailable so pages still render. */
export async function listOpenJobsSafe(): Promise<Job[]> {
  try {
    return await listJobs("open");
  } catch (err) {
    console.error("[careers] Could not load open jobs:", err);
    return [];
  }
}

export async function getJobByCode(jobCode: string): Promise<Job | null> {
  const db = await getDb();
  const row = await db.prepare("SELECT * FROM jobs WHERE job_code = ?").bind(jobCode).first<JobRow>();
  return row ? toJob(row) : null;
}

export async function getJobByCodeSafe(jobCode: string): Promise<Job | null> {
  try {
    return await getJobByCode(jobCode);
  } catch (err) {
    console.error("[careers] Could not load job:", err);
    return null;
  }
}

export class DuplicateJobCodeError extends Error {
  constructor(code: string) {
    super(`Job ID "${code}" is already used by another role`);
  }
}

async function assertCodeFree(db: D1Database, jobCode: string, exceptId?: string) {
  const row = await db
    .prepare("SELECT id FROM jobs WHERE job_code = ? AND id != ?")
    .bind(jobCode, exceptId ?? "")
    .first<{ id: string }>();
  if (row) throw new DuplicateJobCodeError(jobCode);
}

export async function createJob(input: JobInput): Promise<Job> {
  const db = await getDb();
  await assertCodeFree(db, input.jobCode);
  const now = Date.now();
  const job: Job = { id: crypto.randomUUID(), ...input, createdAt: now, updatedAt: now };
  await db
    .prepare(
      `INSERT INTO jobs (id, job_code, title, department, work_type, location, status, description, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(job.id, job.jobCode, job.title, job.department, job.workType, job.location, job.status, job.description, now, now)
    .run();
  return job;
}

export async function updateJob(id: string, input: JobInput): Promise<Job | null> {
  const db = await getDb();
  await assertCodeFree(db, input.jobCode, id);
  const now = Date.now();
  const res = await db
    .prepare(
      `UPDATE jobs SET job_code = ?, title = ?, department = ?, work_type = ?, location = ?, status = ?, description = ?, updated_at = ?
       WHERE id = ?`
    )
    .bind(input.jobCode, input.title, input.department, input.workType, input.location, input.status, input.description, now, id)
    .run();
  if (!res.meta?.changes) return null;
  const row = await db.prepare("SELECT * FROM jobs WHERE id = ?").bind(id).first<JobRow>();
  return row ? toJob(row) : null;
}

export async function setJobStatus(id: string, status: JobStatus): Promise<Job | null> {
  const db = await getDb();
  const res = await db
    .prepare("UPDATE jobs SET status = ?, updated_at = ? WHERE id = ?")
    .bind(status, Date.now(), id)
    .run();
  if (!res.meta?.changes) return null;
  const row = await db.prepare("SELECT * FROM jobs WHERE id = ?").bind(id).first<JobRow>();
  return row ? toJob(row) : null;
}

export async function deleteJob(id: string): Promise<boolean> {
  const db = await getDb();
  const res = await db.prepare("DELETE FROM jobs WHERE id = ?").bind(id).run();
  return Boolean(res.meta?.changes);
}

// ── Login throttling (per client IP) ──
const MAX_FAILURES = 5;
const WINDOW_MS = 15 * 60 * 1000;

/** Milliseconds until the client may try again, or 0 if not locked out. */
export async function loginLockRemaining(key: string): Promise<number> {
  const db = await getDb();
  const row = await db
    .prepare("SELECT failures, window_start FROM login_attempts WHERE key = ?")
    .bind(key)
    .first<{ failures: number; window_start: number }>();
  if (!row) return 0;
  const elapsed = Date.now() - Number(row.window_start);
  if (elapsed >= WINDOW_MS) return 0;
  return row.failures >= MAX_FAILURES ? WINDOW_MS - elapsed : 0;
}

export async function recordLoginFailure(key: string): Promise<void> {
  const db = await getDb();
  const now = Date.now();
  await db
    .prepare(
      `INSERT INTO login_attempts (key, failures, window_start) VALUES (?, 1, ?)
       ON CONFLICT(key) DO UPDATE SET
         failures = CASE WHEN ? - window_start >= ? THEN 1 ELSE failures + 1 END,
         window_start = CASE WHEN ? - window_start >= ? THEN ? ELSE window_start END`
    )
    .bind(key, now, now, WINDOW_MS, now, WINDOW_MS, now)
    .run();
}

export async function clearLoginFailures(key: string): Promise<void> {
  const db = await getDb();
  await db.prepare("DELETE FROM login_attempts WHERE key = ?").bind(key).run();
}
