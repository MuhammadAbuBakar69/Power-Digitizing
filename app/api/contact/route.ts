import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WEB3FORMS_DEFAULT_KEY = "23d6f0cd-5bce-46da-a69d-4481f9990ef1";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, services, message } = body;

    const resendKey = process.env.RESEND_API_KEY || "";
    const web3formsKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      process.env.WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_DEFAULT_KEY;

    const fromEmail = process.env.FROM_EMAIL || "Power Digitizing Contact <onboarding@resend.dev>";
    const primaryEmail = process.env.DESTINATION_EMAIL || "design@powerdigitizing.com";
    const fallbackEmail = process.env.NOTIFICATION_EMAIL || "jeffsmith.powerdigitizing@gmail.com";

    const servicesList = Array.isArray(services) ? services.join(", ") : String(services || "");

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <div style="background-color: #14263D; color: #ffffff; padding: 16px 20px; border-radius: 6px; margin-bottom: 24px;">
          <h2 style="margin: 0; font-size: 20px; color: #ffffff;">New Contact Inquiry</h2>
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

    let resendDelivered = false;
    let resendError = "";
    let web3Delivered = false;

    // Resend Delivery Logic
    if (resendKey) {
      const isTestDomain = fromEmail.includes("resend.dev");
      const targetRecipients = isTestDomain ? [fallbackEmail] : [primaryEmail, fallbackEmail];

      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: targetRecipients,
            reply_to: email || undefined,
            subject: `New Contact Inquiry from ${name || "Customer"}`,
            html: htmlContent,
          }),
        });

        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          resendDelivered = true;
        } else {
          resendError = data.message || JSON.stringify(data);
          if (!isTestDomain && (res.status === 403 || String(resendError).includes("testing emails"))) {
            const retry = await fetch("https://api.resend.com/emails", {
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
            if (retry.ok) {
              resendDelivered = true;
              resendError = "";
            }
          }
        }
      } catch (err) {
        resendError = err instanceof Error ? err.message : String(err);
      }
    }

    // Dual dispatch or fallback via Web3Forms
    if (web3formsKey) {
      try {
        const w3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `New Contact Inquiry from ${name || "Customer"}`,
            from_name: "Power Digitizing Contact Form",
            name: name || "Customer",
            email: email || "Not provided",
            services: servicesList || "General inquiry",
            message: message || "No message provided",
          }),
        });

        if (w3Res.ok) {
          web3Delivered = true;
        }
      } catch (w3Err) {
        console.warn("Web3Forms contact delivery warning:", w3Err);
      }
    }

    const delivered = resendDelivered || web3Delivered;

    return NextResponse.json({
      success: true,
      delivered,
      channels: {
        resend: resendDelivered,
        web3forms: web3Delivered,
      },
      warning: delivered ? undefined : (resendError || "Email delivery failed on all channels"),
    });
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Failed to process contact message" },
      { status: 500 }
    );
  }
}
