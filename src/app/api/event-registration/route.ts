import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EVENTS } from "@/app/resources/events/data";

// Event seat requests from /resources/events are emailed to info@hadrongbs.com.

const esc = (v: unknown) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d\s-]{7,20}$/;

export async function POST(req: NextRequest) {
  try {
    const raw = (await req.json().catch(() => ({}))) as Record<string, unknown>;

    // Honeypot: real visitors never see this field; pretend success so bots don't retry
    if (raw.companyWebsite) {
      return NextResponse.json({ success: true });
    }

    const event = EVENTS.find((e) => e.id === raw.eventId);
    if (!event) {
      return NextResponse.json({ error: "Unknown event" }, { status: 400 });
    }

    const fields = ["fullName", "jobTitle", "company", "email", "phone", "companySize"] as const;
    for (const f of fields) {
      if (!raw[f] || String(raw[f]).trim().length === 0 || String(raw[f]).length > 200) {
        return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
      }
    }
    if (!EMAIL_RE.test(String(raw.email))) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!PHONE_RE.test(String(raw.phone))) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }
    if (!event.companySizes.includes(String(raw.companySize))) {
      return NextResponse.json({ error: "Please select a company size." }, { status: 400 });
    }
    if (raw.consent !== true) {
      return NextResponse.json({ error: "Please agree to receive event communications." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json({ error: "Email service is not configured" }, { status: 503 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const v = Object.fromEntries(fields.map((f) => [f, esc(String(raw[f]).trim())])) as Record<(typeof fields)[number], string>;
    const row = (label: string, value: string) => `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;width:180px;">${label}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#16325F;font-size:15px;font-weight:600;">${value}</td>
      </tr>`;

    const { error } = await resend.emails.send({
      from: "Hadron Events <noreply@hadrongbs.com>",
      to: ["info@hadrongbs.com"],
      replyTo: String(raw.email).trim(),
      subject: `Event seat request: ${v.fullName} (${v.company}) – ${event.series}, ${event.dateLabel}`,
      html: `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;background:#f8fafc;padding:32px 16px;">
          <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
            <div style="background:#16325F;padding:24px 28px;color:#ffffff;">
              <div style="font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#9fb3d9;">${esc(event.partner)} · ${esc(event.series)}</div>
              <div style="font-size:20px;font-weight:700;margin-top:6px;">New executive seat request</div>
              <div style="font-size:13px;color:#cbd5e1;margin-top:6px;">${esc(event.dateLabel)} · ${esc(event.timeLabel)} · ${esc(event.venueName)}, ${esc(event.city)}</div>
            </div>
            <table style="width:100%;border-collapse:collapse;">
              ${row("Full name", v.fullName)}
              ${row("Job title", v.jobTitle)}
              ${row("Company", v.company)}
              ${row("Corporate email", `<a href="mailto:${v.email}" style="color:#1A73E8;text-decoration:none;">${v.email}</a>`)}
              ${row("Mobile / direct phone", v.phone)}
              ${row("Company size", `${v.companySize} employees`)}
              ${row("Consent", "Agreed to receive event communications from Salesforce and Hadron")}
            </table>
            <div style="padding:16px 28px;color:#94a3b8;font-size:12px;">Submitted from www.hadrongbs.com/resources/events. Reply to this email to respond to the attendee.</div>
          </div>
        </div>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send your request. Please try again." }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Event registration error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
