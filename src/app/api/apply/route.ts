import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as xlsx from "xlsx";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // 1. Extract CV File
    const cvFile = formData.get("cvFile") as File | null;
    let cvBuffer: Buffer | null = null;
    let cvFilename = "Applicant_CV.pdf";

    if (cvFile && typeof cvFile !== "string") {
      const arrayBuffer = await cvFile.arrayBuffer();
      cvBuffer = Buffer.from(arrayBuffer);
      cvFilename = cvFile.name;
    }

    // 2. Extract all other string fields into a plain object
    const applicantData: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (key !== "cvFile" && typeof value === "string") {
        applicantData[key] = value;
      }
    }

    // Prepare human-readable mapping for the Excel Sheet
    const excelRow = [{
      "Full Name": applicantData.fullName || "",
      "Email": applicantData.email || "",
      "Mobile Number": applicantData.mobileNumber || "",
      "Date of Birth": applicantData.dob || "",
      "PAN Card": applicantData.panCard || "",
      "Marital Status": applicantData.maritalStatus || "",
      "Passport Number": applicantData.passportNumber || "",
      "Permanent Location": applicantData.permanentLocation || "",
      "Preferred Location": applicantData.preferredLocation || "",
      "Source": applicantData.source || "",
      "Referred By": applicantData.referredBy || "",
      "Technology": applicantData.technology || "",
      "Position": applicantData.position || "",
      "Job Code": applicantData.jobCode || "",
      "Latest Education": applicantData.latestEducation || "",
      "Passing Year": applicantData.passingYear || "",
      "Experience Range": applicantData.expRange || "",
      "Total Experience (Years)": applicantData.totalExp || "",
      "Relevant Experience (Years)": applicantData.relevantExp || "",
      "Worked Technologies": applicantData.workedTech || "",
      "Certifications": applicantData.certifications || "",
      "Top Skills": applicantData.topSkills || "",
      "Current Employer": applicantData.currentEmployer || "",
      "Date of Joining": applicantData.doj || "",
      "Current Designation": applicantData.currentDesignation || "",
      "Current Employer Location": applicantData.currentEmployerLocation || "",
      "Notice Period": applicantData.noticePeriod || "",
      "Last Working Date": applicantData.lastWorkingDate || "",
      "CTC Range": applicantData.ctcRange || "",
      "Current CTC": applicantData.currentCTC || "",
      "Additional CTC": applicantData.additionalCTC || "",
      "Expected CTC": applicantData.expectedCTC || "",
      "Perks & Benefits": applicantData.perks || "",
      "Ready for In-Person Interview": applicantData.inPersonReady || "",
      "Interview Availability": applicantData.interviewAvailability || "",
      "Travel Readiness": applicantData.travelReady || "",
      "Shift Readiness": applicantData.shiftReady || ""
    }];

    // 3. Generate Excel File in memory
    const worksheet = xlsx.utils.json_to_sheet(excelRow);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Application");
    
    // Convert workbook to Buffer
    const excelBuffer = xlsx.write(workbook, { type: "buffer", bookType: "xlsx" });

    // 4. Send Email via Resend
    const attachments: any[] = [
      {
        filename: `${applicantData.fullName?.replace(/\s+/g, '_') || 'Applicant'}_Data.xlsx`,
        content: excelBuffer,
      }
    ];

    if (cvBuffer) {
      attachments.push({
        filename: cvFilename,
        content: cvBuffer,
      });
    }

    const { error: resendError } = await resend.emails.send({
      from: "Hadron Careers <noreply@hadrongbs.com>",
      to: ["hr@hadrongbs.com"],
      subject: `New Job Application: ${applicantData.fullName || "Applicant"} - ${applicantData.position || ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>New Job Application Received</h2>
          <p><strong>Applicant Name:</strong> ${applicantData.fullName}</p>
          <p><strong>Position:</strong> ${applicantData.position}</p>
          <p><strong>Technology:</strong> ${applicantData.technology}</p>
          <p><strong>Experience:</strong> ${applicantData.totalExp} years</p>
          <hr />
          <p>Please find the attached Excel sheet containing the full application details, along with the applicant's CV.</p>
        </div>
      `,
      attachments,
    });

    if (resendError) {
      console.error("Resend API Error:", resendError);
      return NextResponse.json({ error: "Failed to send email to HR." }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
