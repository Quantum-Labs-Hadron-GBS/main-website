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
        <div style="background-color: #f1f5f9; padding: 40px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; position: relative; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
            
            <!-- Airmail Border Wrapper (Blue solid with Orange dashed inner) -->
            <div style="background-color: #1a73e8; padding: 6px;">
              <div style="border: 2px dashed #f47c36; padding: 2px;">
                
                <!-- The Letter -->
                <div style="background-color: #ffffff; padding: 40px;">
                  
                  <div style="text-align: center; margin-bottom: 40px;">
                    <img src="https://res.cloudinary.com/ax6dtcht/image/upload/v1785324498/Hadron-Logo_lt4uaa.png" alt="Hadron GBS" style="height: 30px; margin: 0 auto; display: block; margin-bottom: 10px;" />
                    <h1 style="color: #1a73e8; margin: 0; font-size: 20px; letter-spacing: 1px; font-weight: 700; text-transform: uppercase;">New Contact Submission</h1>
                  </div>

                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <!-- Left Column: Details -->
                      <td width="45%" valign="top" style="padding-right: 20px;">
                        
                        <div style="margin-bottom: 20px;">
                          <span style="color: #1a73e8; font-size: 12px; font-weight: bold; text-transform: uppercase;">Name</span>
                          <div style="color: #334155; font-size: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-top: 4px;">${name}</div>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                          <span style="color: #1a73e8; font-size: 12px; font-weight: bold; text-transform: uppercase;">E-mail</span>
                          <div style="color: #334155; font-size: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-top: 4px;">
                            <a href="mailto:${email}" style="color: #64748b; text-decoration: none;">${email}</a>
                          </div>
                        </div>

                        <div style="margin-bottom: 20px;">
                          <span style="color: #1a73e8; font-size: 12px; font-weight: bold; text-transform: uppercase;">Phone</span>
                          <div style="color: #334155; font-size: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-top: 4px;">${phone || "N/A"}</div>
                        </div>

                        <div style="margin-bottom: 20px;">
                          <span style="color: #1a73e8; font-size: 12px; font-weight: bold; text-transform: uppercase;">Service</span>
                          <div style="color: #334155; font-size: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-top: 4px;">${interestedService || "General"}</div>
                        </div>

                      </td>
                      
                      <!-- Right Column: Message -->
                      <td width="55%" valign="top">
                        <div style="margin-bottom: 20px;">
                          <span style="color: #1a73e8; font-size: 12px; font-weight: bold; text-transform: uppercase;">Message</span>
                          <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin-top: 8px; margin-bottom: 0;">${message}</p>
                        </div>
                      </td>
                    </tr>
                  </table>

                </div>
              </div>
            </div>

            <!-- Envelope Bottom Flap -->
            <div style="background-color: #ffffff; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
               <div style="display: inline-block; background-color: #f47c36; color: #ffffff; padding: 10px 30px; font-weight: bold; font-size: 14px; letter-spacing: 1px; border-radius: 4px; border: 4px solid #ffffff; margin-top: -35px; position: relative;">
                 RECEIVED
               </div>
               <p style="color: #94a3b8; font-size: 12px; margin: 10px 0 0 0;">This inquiry was securely submitted via the Hadron GBS Website.</p>
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
