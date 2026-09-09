import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      parentName,
      contactPhone,
      childName,
      childDob,
      gradeSelect,
      residentialSector,
      parentMessage,
    } = body;

    // Server-side validation
    if (!parentName || !contactPhone || !childName || !childDob || !gradeSelect || !residentialSector) {
      return NextResponse.json(
        { success: false, error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const cleanPhone = String(contactPhone).replace(/[^0-9+]/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const submissionData = {
      timestamp: new Date().toISOString(),
      parentName: String(parentName).trim(),
      contactPhone: cleanPhone,
      childName: String(childName).trim(),
      childDob,
      gradeSelect,
      residentialSector: String(residentialSector).trim(),
      parentMessage: parentMessage ? String(parentMessage).trim() : "N/A",
    };

    console.log("=== NEW ADMISSION INQUIRY RECEIVED ===", submissionData);

    // Optional email dispatch via Resend or Nodemailer if API key is present
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.NOTIFICATION_EMAIL || "anupk1974@gmail.com";

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "S.N. Public School Admissions <onboarding@resend.dev>",
            to: recipientEmail,
            subject: `New Admission Inquiry: ${childName} (${gradeSelect})`,
            html: `
              <h2>New Admission Inquiry Submitted</h2>
              <p><strong>Parent Name:</strong> ${submissionData.parentName}</p>
              <p><strong>Contact Phone:</strong> ${submissionData.contactPhone}</p>
              <p><strong>Child Name:</strong> ${submissionData.childName}</p>
              <p><strong>Child DOB:</strong> ${submissionData.childDob}</p>
              <p><strong>Grade Applying:</strong> ${submissionData.gradeSelect}</p>
              <p><strong>Residential Area:</strong> ${submissionData.residentialSector}</p>
              <p><strong>Message/Notes:</strong> ${submissionData.parentMessage}</p>
              <hr />
              <p>Submitted at ${submissionData.timestamp}</p>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Resend notification error (non-fatal):", emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your admission inquiry has been recorded. Our admissions desk will call you within 4 business hours.",
      inquiryId: `SNPS-${Date.now().toString().slice(-6)}`,
    });
  } catch (err: unknown) {
    console.error("Error processing admission inquiry:", err);
    return NextResponse.json(
      { success: false, error: "An error occurred while submitting your form. Please call +91 9835112975 directly." },
      { status: 500 }
    );
  }
}
