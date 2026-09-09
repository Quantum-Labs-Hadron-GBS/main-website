import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma/db";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, location, interestedService, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Send Direct Email to info@hadrongbs.com
    const { error: resendError } = await resend.emails.send({
      from: "Hadron Website <noreply@hadrongbs.com>",
      to: "info@hadrongbs.com",
      subject: `New Enterprise Inquiry: ${name} - ${interestedService || 'General'}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #0f172a;">New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Location:</strong> ${location || "N/A"}</p>
          <p><strong>Interested Service:</strong> ${interestedService || "N/A"}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
          <h3 style="color: #0f172a;">Message:</h3>
          <p style="white-space: pre-wrap; color: #334155; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return NextResponse.json({ error: "Failed to send email via Resend." }, { status: 500 });
    }

    // 2. Track a non-PII analytics event
    try {
      await prisma.analyticsEvent.create({
        data: {
          sessionId: req.headers.get("x-forwarded-for") || "unknown",
          page: "/contact",
          eventName: "CONTACT_FORM_SUBMITTED",
          serviceView: interestedService || "General Inquiry",
        }
      });
    } catch (dbErr) {
      console.error("Analytics tracking failed:", dbErr);
      // We don't fail the request if just the analytics tracker fails.
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
