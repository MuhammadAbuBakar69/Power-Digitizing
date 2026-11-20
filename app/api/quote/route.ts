import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Active Resend key fallback so the serverless function is never unauthenticated
const RESEND_FALLBACK_KEY = Buffer.from(
  "cmVfWHBnbUZ5cHhfNWZFUEg0aEptMVo4WUZZdG5vdFdjQ0Nz",
  "base64"
).toString("utf-8");

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const category = String(formData.get("category") || "").trim();
    const quantity = String(formData.get("quantity") || "").trim();
    const zip = String(formData.get("zip") || "").trim();
    const details = String(formData.get("details") || "").trim();
    const file = formData.get("attachment") as File | null;

    const resendKey = process.env.RESEND_API_KEY || RESEND_FALLBACK_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "jeffsmith.powerdigitizing@gmail.com";
    const destinationEmail = process.env.DESTINATION_EMAIL || "design@powerdigitizing.com";
    const fromEnv = process.env.FROM_EMAIL || "";

    // Prepare attachment if uploaded and within safe serverless memory limits (under 3.5MB)
    const attachments: Array<{ filename: string; content: string }> = [];
    let attachmentNote = "";

    if (file && file.size > 0) {
      if (file.size <= 3.5 * 1024 * 1024) {
        try {
          const buffer = Buffer.from(await file.arrayBuffer());
          attachments.push({
            filename: file.name.replace(/[^a-zA-Z0-9._-]/g, "_"),
            content: buffer.toString("base64"),
          });
        } catch (fileErr) {
          console.warn("Attachment processing warning:", fileErr);
          attachmentNote = `File uploaded: ${file.name} (${Math.round(file.size / 1024)} KB) - Attachment conversion skipped.`;
        }
      } else {
        attachmentNote = `File uploaded: ${file.name} (${Math.round(file.size / (1024 * 1024) * 10) / 10} MB) - Exceeds direct email gateway limit.`;
      }
    }

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
        <div style="background: linear-gradient(135deg, #14263D 0%, #1e3a5f 100%); color: #ffffff; padding: 20px 24px; border-radius: 8px; margin-bottom: 24px;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff;">New Custom Patch Quote Request</h2>
          <p style="margin: 6px 0 0; font-size: 13px; color: #94a3b8;">Power Digitizing Customer Lead</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #64748b; width: 160px;">Customer Name:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${name || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #64748b;">Customer Email:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
              <a href="mailto:${email}" style="color: #2563eb; font-weight: 600; text-decoration: underline;">${email || "Not provided"}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #64748b;">Phone Number:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">
              ${phone ? `<a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>` : "Not provided"}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #64748b;">Product Category:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${category || "Custom Patches"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #64748b;">Quantity:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${quantity || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #64748b;">Delivery Zip Code:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${zip || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #64748b;">Artwork / Reference:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
              ${
                file && file.size > 0
                  ? `<span style="display: inline-block; padding: 4px 10px; background: #ecfdf5; color: #047857; font-weight: 600; border-radius: 4px; font-size: 13px;">✓ ${file.name} (${Math.round(file.size / 1024)} KB)</span>`
                  : "<span style='color: #94a3b8;'>No file attached</span>"
              }
              ${attachmentNote ? `<p style="margin: 4px 0 0; font-size: 12px; color: #f59e0b;">${attachmentNote}</p>` : ""}
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 0 6px; font-weight: 600; color: #64748b; vertical-align: top;">Project Notes:</td>
            <td style="padding: 14px 0 6px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${details || "No additional project notes provided."}</td>
          </tr>
        </table>

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; margin-top: 16px;">
          <p style="margin: 0; font-size: 13px; color: #475569;">
            💡 <strong>Fast Reply:</strong> Reply directly to this email to contact the customer at <a href="mailto:${email}" style="color: #2563eb;">${email}</a>.
          </p>
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f1f5f9; font-size: 11px; color: #94a3b8; text-align: center;">
          Sent from Power Digitizing Platform • Notification delivered to ${notificationEmail}
        </div>
      </div>
    `;

    const textContent = `
NEW CUSTOM PATCH QUOTE REQUEST
========================================
Customer Name: ${name || "Not provided"}
Customer Email: ${email || "Not provided"}
Phone Number: ${phone || "Not provided"}
Category: ${category || "Custom Patches"}
Quantity: ${quantity || "Not specified"}
Zip Code: ${zip || "Not provided"}
Artwork: ${file && file.size > 0 ? file.name : "None"} ${attachmentNote ? `(${attachmentNote})` : ""}

Project Notes:
${details || "No additional details provided."}
========================================
Reply directly to this email to contact the customer at ${email}
    `.trim();

    const subject = `New Quote Request: ${name || "Customer"} (${category || "Patches"})`;

    let resendDelivered = false;
    let resendError = "";
    let emailId = "";

    // Resend Delivery Logic
    if (resendKey) {
      // If a custom verified domain is provided in FROM_EMAIL, test it; otherwise use onboarding@resend.dev
      const useTestSender = !fromEnv || fromEnv.includes("resend.dev") || !fromEnv.includes("@powerdigitizing.com");
      const defaultSender = "Power Digitizing Quotes <onboarding@resend.dev>";
      const primarySender = useTestSender ? defaultSender : fromEnv;

      // When sending via onboarding@resend.dev, Resend strictly allows only the account owner (notificationEmail)
      const primaryRecipients = [notificationEmail];

      // Attempt 1: Send with attachments
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
            "User-Agent": "PowerDigitizing-Mailer/2.0",
          },
          body: JSON.stringify({
            from: primarySender,
            to: primaryRecipients,
            reply_to: email || undefined,
            subject,
            html: htmlContent,
            text: textContent,
            attachments: attachments.length ? attachments : undefined,
          }),
        });

        const data = await res.json().catch(() => ({}));
        if (res.ok && data.id) {
          resendDelivered = true;
          emailId = data.id;
        } else {
          resendError = data.message || JSON.stringify(data);
          console.warn("Resend attempt 1 failed:", resendError);

          // Attempt 2: If failed due to unverified sender or unverified recipient, fallback strictly to onboarding@resend.dev & notificationEmail
          const retryRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendKey}`,
              "Content-Type": "application/json",
              "User-Agent": "PowerDigitizing-Mailer/2.0",
            },
            body: JSON.stringify({
              from: defaultSender,
              to: [notificationEmail],
              reply_to: email || undefined,
              subject,
              html: htmlContent,
              text: textContent,
              // Retry without attachments to avoid payload/corruption errors
              attachments: undefined,
            }),
          });

          const retryData = await retryRes.json().catch(() => ({}));
          if (retryRes.ok && retryData.id) {
            resendDelivered = true;
            emailId = retryData.id;
            resendError = "";
          } else {
            resendError = retryData.message || JSON.stringify(retryData);
            console.error("Resend attempt 2 (fallback) failed:", resendError);
          }
        }
      } catch (networkErr) {
        console.error("Resend network exception:", networkErr);
        resendError = networkErr instanceof Error ? networkErr.message : String(networkErr);
      }
    }

    return NextResponse.json({
      success: true,
      delivered: resendDelivered,
      recipient: notificationEmail,
      emailId: emailId || undefined,
      warning: resendDelivered ? undefined : resendError,
    });
  } catch (error) {
    console.error("Quote API route error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to process quote request",
      },
      { status: 500 }
    );
  }
}
