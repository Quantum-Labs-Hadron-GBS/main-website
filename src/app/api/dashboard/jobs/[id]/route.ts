import { NextRequest, NextResponse } from "next/server";
import { getHrSession, isSameOrigin } from "@/lib/careers/auth";
import { DuplicateJobCodeError, deleteJob, setJobStatus, updateJob } from "@/lib/careers/db";
import { JOB_STATUSES, type JobStatus, validateJobInput } from "@/lib/careers/types";

export const dynamic = "force-dynamic";

async function guard(req: NextRequest) {
  if (!isSameOrigin(req)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  if (!(await getHrSession())) {
    return NextResponse.json({ error: "Your session has expired. Please sign in again." }, { status: 401 });
  }
  return null;
}

const notFound = () => NextResponse.json({ error: "This role no longer exists. Refresh the list." }, { status: 404 });

/** Full update of a role */
export async function PUT(req: NextRequest, ctx: RouteContext<"/api/dashboard/jobs/[id]">) {
  const denied = await guard(req);
  if (denied) return denied;
  const { id } = await ctx.params;

  const parsed = validateJobInput(await req.json().catch(() => null));
  if (!parsed.ok) {
    return NextResponse.json({ error: "Please fix the highlighted fields.", fields: parsed.errors }, { status: 400 });
  }

  try {
    const job = await updateJob(id, parsed.value);
    return job ? NextResponse.json({ job }) : notFound();
  } catch (err) {
    if (err instanceof DuplicateJobCodeError) {
      return NextResponse.json({ error: err.message, fields: { jobCode: "This Job ID is already in use." } }, { status: 409 });
    }
    console.error("[hr] update job failed:", err);
    return NextResponse.json({ error: "Could not save the role. Try again." }, { status: 500 });
  }
}

/** Open / close a role: { status: "open" | "closed" } */
export async function PATCH(req: NextRequest, ctx: RouteContext<"/api/dashboard/jobs/[id]">) {
  const denied = await guard(req);
  if (denied) return denied;
  const { id } = await ctx.params;

  const body = await req.json().catch(() => null);
  const status = body?.status as JobStatus;
  if (!JOB_STATUSES.includes(status)) return NextResponse.json({ error: "Invalid status." }, { status: 400 });

  try {
    const job = await setJobStatus(id, status);
    return job ? NextResponse.json({ job }) : notFound();
  } catch (err) {
    console.error("[hr] status change failed:", err);
    return NextResponse.json({ error: "Could not update the status. Try again." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, ctx: RouteContext<"/api/dashboard/jobs/[id]">) {
  const denied = await guard(req);
  if (denied) return denied;
  const { id } = await ctx.params;
  try {
    return (await deleteJob(id)) ? NextResponse.json({ success: true }) : notFound();
  } catch (err) {
    console.error("[hr] delete job failed:", err);
    return NextResponse.json({ error: "Could not delete the role. Try again." }, { status: 500 });
  }
}
