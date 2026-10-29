import { NextResponse } from "next/server";

export const runtime = "nodejs";

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

    const resendKey = process.env.RESEND_API_KEY || "";
    const primaryEmail = process.env.DESTINATION_EMAIL || "design@powerdigitizing.com";
    const fallbackEmail = process.env.NOTIFICATION_EMAIL || "jeffsmith.powerdigitizing@gmail.com";

    // Prepare attachment if uploaded
    const attachments: Array<{ filename: string; content: string }> = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name.replace(/[^a-zA-Z0-9._-]/g, "_"),
        content: buffer.toString("base64"),
      });
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <div style="background-color: #14263D; color: #ffffff; padding: 16px 20px; border-radius: 6px; margin-bottom: 24px;">
          <h2 style="margin: 0; font-size: 20px;">New Custom Patch Quote Request</h2>
          <p style="margin: 4px 0 0; font-size: 13px; color: #cbd5e1;">Received from Power Digitizing Website</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #1e293b;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 150px;">Customer Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${name || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2563eb;">${email || "Not provided"}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Phone:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Patch Style / Category:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${category || "Custom Patches"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Quantity:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${quantity || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Delivery Zip Code:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${zip || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Attached Design File:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              ${
                file && file.size > 0
                  ? `<strong style="color: #16a34a;">${file.name}</strong> (${Math.round(file.size / 1024)} KB) - <em>Attached below</em>`
                  : "<span style='color: #64748b;'>No file uploaded</span>"
              }
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0 6px; font-weight: bold; vertical-align: top;">Project Notes / Details:</td>
            <td style="padding: 12px 0 6px; white-space: pre-wrap; line-height: 1.5;">${details || "No additional details provided."}</td>
          </tr>
        </table>

        <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
          Power Digitizing Web Lead • Reply directly to this email to contact the customer (${email}).
        </div>
      </div>
    `;

    // Try sending to primary recipient first; if unverified domain, fallback to verified account email
    let sentSuccess = false;
    let resendError = "";

    // Attempt 1: Send to primary and fallback
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Power Digitizing Quotes <onboarding@resend.dev>",
          to: [primaryEmail, fallbackEmail],
          reply_to: email || undefined,
          subject: `New Custom Patch Quote: ${name || "Customer"} (${category || "Patches"})`,
          html: htmlContent,
          attachments: attachments.length ? attachments : undefined,
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

    // Attempt 2: If attempt 1 failed (e.g. domain not verified for primaryEmail), send to fallbackEmail
    if (!sentSuccess) {
      try {
        const fallbackRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Power Digitizing Quotes <onboarding@resend.dev>",
            to: [fallbackEmail],
            reply_to: email || undefined,
            subject: `[Quote Request] ${name || "Customer"} - Design Attached`,
            html: htmlContent,
            attachments: attachments.length ? attachments : undefined,
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
    console.error("Quote API route error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Failed to process quote" },
      { status: 500 }
    );
  }
}
