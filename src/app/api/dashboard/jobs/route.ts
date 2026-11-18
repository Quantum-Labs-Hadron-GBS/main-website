import { NextRequest, NextResponse } from "next/server";
import { getHrSession, isSameOrigin } from "@/lib/careers/auth";
import { DuplicateJobCodeError, createJob, listJobs } from "@/lib/careers/db";
import { validateJobInput } from "@/lib/careers/types";

export const dynamic = "force-dynamic";

const unauthorized = () =>
  NextResponse.json({ error: "Your session has expired. Please sign in again." }, { status: 401 });

export async function GET() {
  if (!(await getHrSession())) return unauthorized();
  try {
    return NextResponse.json({ jobs: await listJobs() });
  } catch (err) {
    console.error("[hr] list jobs failed:", err);
    return NextResponse.json({ error: "Could not load roles from the database." }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  if (!(await getHrSession())) return unauthorized();

  const parsed = validateJobInput(await req.json().catch(() => null));
  if (!parsed.ok) {
    return NextResponse.json({ error: "Please fix the highlighted fields.", fields: parsed.errors }, { status: 400 });
  }

  try {
    const job = await createJob(parsed.value);
    return NextResponse.json({ job }, { status: 201 });
  } catch (err) {
    if (err instanceof DuplicateJobCodeError) {
      return NextResponse.json({ error: err.message, fields: { jobCode: "This Job ID is already in use." } }, { status: 409 });
    }
    console.error("[hr] create job failed:", err);
    return NextResponse.json({ error: "Could not save the role. Try again." }, { status: 500 });
  }
}
