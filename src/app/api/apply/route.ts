import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/db";
import { encryptPayload } from "@/lib/pqc/encrypt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.email || !body.firstName || !body.lastName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Post-Quantum Encryption Pipeline
    // The body contains 38 fields of PII (name, address, education, SSN mock, etc.)
    const encryptedData = await encryptPayload(body);

    // 2. Persist to PostgreSQL
    await prisma.jobApplication.create({
      data: {
        ciphertext: encryptedData.ciphertext,
        encapsulated_key: encryptedData.encapsulated_key,
        iv: encryptedData.iv,
        auth_tag: encryptedData.auth_tag,
        key_version: encryptedData.key_version,
        resume_url: body.resumeUrl || null, // Stored in plaintext as a reference to Blob Storage
        status: "PENDING",
      }
    });

    // 3. Track a non-PII analytics event
    await prisma.analyticsEvent.create({
      data: {
        sessionId: req.headers.get("x-forwarded-for") || "unknown",
        page: "/careers",
        eventName: "JOB_APPLICATION_SUBMITTED",
        serviceView: body.position || null,
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Job Application form error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
