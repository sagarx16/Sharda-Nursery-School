import { NextResponse } from "next/server";

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] || character
  );
}

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

    // Send the inquiry notification server-side when Resend is configured.
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.NOTIFICATION_EMAIL || "anupk1974@gmail.com";

    if (resendApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
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
              <p><strong>Parent Name:</strong> ${escapeHtml(submissionData.parentName)}</p>
              <p><strong>Contact Phone:</strong> ${escapeHtml(submissionData.contactPhone)}</p>
              <p><strong>Child Name:</strong> ${escapeHtml(submissionData.childName)}</p>
              <p><strong>Child DOB:</strong> ${escapeHtml(String(submissionData.childDob))}</p>
              <p><strong>Grade Applying:</strong> ${escapeHtml(String(submissionData.gradeSelect))}</p>
              <p><strong>Residential Area:</strong> ${escapeHtml(submissionData.residentialSector)}</p>
              <p><strong>Message/Notes:</strong> ${escapeHtml(submissionData.parentMessage)}</p>
              <hr />
              <p>Submitted at ${escapeHtml(submissionData.timestamp)}</p>
            `,
          }),
        });

        if (!emailResponse.ok) {
          console.error("Resend notification failed:", await emailResponse.text());
        }
      } catch (emailError) {
        console.error("Resend notification error (non-fatal):", emailError);
      }
    } else {
      console.warn("RESEND_API_KEY is missing; inquiry was recorded without email notification.");
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
