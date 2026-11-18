import { NextResponse } from "next/server";
import { listOpenJobsSafe } from "@/lib/careers/db";

export const dynamic = "force-dynamic";

/** Public feed of open roles (summary only, no job descriptions). */
export async function GET() {
  const jobs = (await listOpenJobsSafe()).map(({ jobCode, title, department, workType, location, createdAt }) => ({
    jobCode,
    title,
    department,
    workType,
    location,
    createdAt,
  }));
  return NextResponse.json({ jobs }, { headers: { "Cache-Control": "public, max-age=60, s-maxage=60" } });
}
