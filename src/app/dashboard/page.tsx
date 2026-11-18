import { redirect } from "next/navigation";
import { getHrSession } from "@/lib/careers/auth";
import { listJobs } from "@/lib/careers/db";
import type { Job } from "@/lib/careers/types";
import Dashboard from "./Dashboard";

export const dynamic = "force-dynamic";

export default async function HrDashboardPage() {
  const session = await getHrSession();
  if (!session) redirect("/dashboard/login");

  let jobs: Job[] = [];
  let loadError = "";
  try {
    jobs = await listJobs();
  } catch (err) {
    console.error("[hr] dashboard load failed:", err);
    loadError = "Could not connect to the careers database. Check the CAREERS_DB binding, then refresh.";
  }

  return <Dashboard email={session.email} initialJobs={jobs} loadError={loadError} />;
}
