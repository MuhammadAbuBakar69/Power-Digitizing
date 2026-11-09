import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WEB3FORMS_DEFAULT_KEY = "23d6f0cd-5bce-46da-a69d-4481f9990ef1";

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
    const web3formsKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      process.env.WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_DEFAULT_KEY;

    const fromEmail = process.env.FROM_EMAIL || "Power Digitizing Quotes <onboarding@resend.dev>";
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
          <h2 style="margin: 0; font-size: 20px; color: #ffffff;">New Custom Patch Quote Request</h2>
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

    let resendDelivered = false;
    let resendError = "";
    let web3Delivered = false;

    // Resend Delivery Logic
    if (resendKey) {
      // If from domain is resend.dev (testing domain), Resend strictly requires recipient to be the account owner email
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
            subject: `New Custom Patch Quote: ${name || "Customer"} (${category || "Patches"})`,
            html: htmlContent,
            attachments: attachments.length ? attachments : undefined,
          }),
        });

        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          resendDelivered = true;
        } else {
          resendError = data.message || JSON.stringify(data);
          // If 403 because unverified domain, fallback to sending strictly to fallbackEmail
          if (!isTestDomain && (res.status === 403 || String(resendError).includes("testing emails"))) {
            const retry = await fetch("https://api.resend.com/emails", {
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

    // Dual dispatch or fallback via Web3Forms to guarantee delivery into inbox
    if (web3formsKey) {
      try {
        const w3Data = new FormData();
        w3Data.append("access_key", web3formsKey);
        w3Data.append("subject", `New Custom Patch Quote: ${name || "Customer"} (${category || "Patches"})`);
        w3Data.append("from_name", "Power Digitizing Quotes");
        w3Data.append("Customer Name", name || "Not provided");
        w3Data.append("Customer Email", email || "Not provided");
        w3Data.append("Customer Phone", phone || "Not provided");
        w3Data.append("Category", category || "Custom Patches");
        w3Data.append("Quantity", quantity || "Not specified");
        w3Data.append("Zip Code", zip || "Not provided");
        w3Data.append("Project Details", details || "No details provided");

        if (file && file.size > 0 && file.size <= 5 * 1024 * 1024) {
          w3Data.append("attachment", file);
        }

        const w3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: w3Data,
        });

        if (w3Res.ok) {
          web3Delivered = true;
        }
      } catch (w3Err) {
        console.warn("Web3Forms delivery attempt warning:", w3Err);
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
    console.error("Quote API route error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Failed to process quote" },
      { status: 500 }
    );
  }
}
