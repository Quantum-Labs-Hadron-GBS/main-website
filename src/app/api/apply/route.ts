import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.ciphertext || !body.encapsulated_key || !body.iv || !body.auth_tag || !body.key_version) {
      return NextResponse.json({ error: "Invalid encrypted payload" }, { status: 400 });
    }

    // 1. Persist to PostgreSQL
    await prisma.jobApplication.create({
      data: {
        ciphertext: body.ciphertext,
        encapsulated_key: body.encapsulated_key,
        iv: body.iv,
        auth_tag: body.auth_tag,
        key_version: body.key_version,
        resume_url: body.resumeUrl || null, // Stored in plaintext as a reference to Blob Storage
        status: "PENDING",
      }
    });

    // 2. Track a non-PII analytics event
    await prisma.analyticsEvent.create({
      data: {
        sessionId: req.headers.get("x-forwarded-for") || "unknown",
        page: "/careers",
        eventName: "JOB_APPLICATION_SUBMITTED",
        serviceView: "Encrypted submission",
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Job Application form error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
