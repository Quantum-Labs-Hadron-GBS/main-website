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

    // 1. Send Direct Email to info & quantum.lab
    const { error: resendError } = await resend.emails.send({
      from: "Hadron Website <noreply@hadrongbs.com>",
      to: ["info@hadrongbs.com", "quantum.lab@hadrongbs.com"],
      subject: `New Enterprise Inquiry: ${name} - ${interestedService || 'General'}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; margin: 0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <div style="background-color: #0f172a; padding: 30px 40px; text-align: center;">
              <img src="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324428/hadron_logo_white_wwzyij.png" alt="Hadron GBS" style="height: 36px; margin: 0 auto; display: block;" />
            </div>
            
            <!-- Content -->
            <div style="padding: 40px;">
              <div style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 24px; font-weight: 700;">New Enterprise Inquiry</div>
              
              <div style="margin-bottom: 24px;">
                <span style="color: #94a3b8; font-size: 14px; display: block; margin-bottom: 4px;">Client Name</span>
                <p style="color: #0f172a; font-size: 18px; font-weight: 600; margin: 0;">${name}</p>
              </div>
              
              <div style="margin-bottom: 24px;">
                <span style="color: #94a3b8; font-size: 14px; display: block; margin-bottom: 4px;">Email Address</span>
                <p style="margin: 0;"><a href="mailto:${email}" style="color: #1A73E8; font-size: 16px; font-weight: 500; text-decoration: none;">${email}</a></p>
              </div>
              
              <div style="margin-bottom: 24px;">
                <span style="color: #94a3b8; font-size: 14px; display: block; margin-bottom: 4px;">Phone Number</span>
                <p style="color: #0f172a; font-size: 16px; font-weight: 500; margin: 0;">${phone || "<span style='color: #cbd5e1; font-style: italic;'>Not provided</span>"}</p>
              </div>

              <div style="margin-bottom: 24px;">
                <span style="color: #94a3b8; font-size: 14px; display: block; margin-bottom: 4px;">Location</span>
                <p style="color: #0f172a; font-size: 16px; font-weight: 500; margin: 0;">${location || "<span style='color: #cbd5e1; font-style: italic;'>Not provided</span>"}</p>
              </div>

              <div style="margin-bottom: 32px;">
                <span style="color: #94a3b8; font-size: 14px; display: block; margin-bottom: 8px;">Interested Service</span>
                <span style="background-color: #fff7ed; color: #c2410c; padding: 6px 14px; border-radius: 20px; font-size: 14px; font-weight: 600; border: 1px solid #ffedd5;">
                  ${interestedService || "General Inquiry"}
                </span>
              </div>

              <div style="background-color: #f1f5f9; padding: 24px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <span style="color: #64748b; font-size: 13px; font-weight: 600; display: block; margin-bottom: 12px;">MESSAGE</span>
                <p style="color: #334155; line-height: 1.7; font-size: 15px; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px; text-align: center;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">This inquiry was securely submitted via the Hadron GBS Website.</p>
            </div>
            
          </div>
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
