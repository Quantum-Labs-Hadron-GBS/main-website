import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/db";
import { encryptPayload } from "@/lib/pqc/encrypt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // In a real production app, you would add Zod validation here
    if (!body.email || !body.name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Post-Quantum Encryption Pipeline
    // The body contains plaintext PII. We encrypt the entire JSON payload using ML-KEM + AES-256-GCM.
    const encryptedData = await encryptPayload(body);

    // 2. Persist to PostgreSQL (Only ciphertext and encapsulated key)
    await prisma.contactSubmission.create({
      data: {
        ciphertext: encryptedData.ciphertext,
        encapsulated_key: encryptedData.encapsulated_key,
        iv: encryptedData.iv,
        auth_tag: encryptedData.auth_tag,
        key_version: encryptedData.key_version,
      }
    });

    // 3. Track a non-PII analytics event
    await prisma.analyticsEvent.create({
      data: {
        sessionId: req.headers.get("x-forwarded-for") || "unknown",
        page: "/contact",
        eventName: "CONTACT_FORM_SUBMITTED",
        serviceView: body.interestedService || null,
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
