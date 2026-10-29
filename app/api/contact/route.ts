import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, services, message } = body;

    const resendKey = process.env.RESEND_API_KEY || "";
    const primaryEmail = process.env.DESTINATION_EMAIL || "design@powerdigitizing.com";
    const fallbackEmail = process.env.NOTIFICATION_EMAIL || "jeffsmith.powerdigitizing@gmail.com";

    const servicesList = Array.isArray(services) ? services.join(", ") : String(services || "");

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <div style="background-color: #14263D; color: #ffffff; padding: 16px 20px; border-radius: 6px; margin-bottom: 24px;">
          <h2 style="margin: 0; font-size: 20px;">New Contact Inquiry</h2>
          <p style="margin: 4px 0 0; font-size: 13px; color: #cbd5e1;">Received from Power Digitizing Contact Form</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #1e293b;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 140px;">Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${name || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2563eb;">${email || "Not provided"}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Interested In:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${servicesList || "General inquiry"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0 6px; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 12px 0 6px; white-space: pre-wrap; line-height: 1.5;">${message || "No message provided."}</td>
          </tr>
        </table>

        <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
          Power Digitizing Contact Lead • Reply directly to this email to contact ${email}.
        </div>
      </div>
    `;

    // Send via Resend
    let sentSuccess = false;
    let resendError = "";

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Power Digitizing Contact <onboarding@resend.dev>",
          to: [primaryEmail, fallbackEmail],
          reply_to: email || undefined,
          subject: `New Contact Inquiry from ${name || "Customer"}`,
          html: htmlContent,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        sentSuccess = true;
      } else {
        resendError = data.message || JSON.stringify(data);
      }
    } catch (err) {
      resendError = err instanceof Error ? err.message : String(err);
    }

    if (!sentSuccess) {
      try {
        const fallbackRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Power Digitizing Contact <onboarding@resend.dev>",
            to: [fallbackEmail],
            reply_to: email || undefined,
            subject: `[Contact Form] Inquiry from ${name || "Customer"}`,
            html: htmlContent,
          }),
        });

        if (fallbackRes.ok) {
          sentSuccess = true;
        } else {
          const fallbackData = await fallbackRes.json();
          resendError = fallbackData.message || JSON.stringify(fallbackData);
        }
      } catch (err) {
        resendError = err instanceof Error ? err.message : String(err);
      }
    }

    return NextResponse.json({
      success: true,
      delivered: sentSuccess,
      warning: sentSuccess ? undefined : resendError,
    });
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Failed to process contact message" },
      { status: 500 }
    );
  }
}
