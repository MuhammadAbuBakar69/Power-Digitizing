"use client";

import { useState } from "react";
import { ArrowUpRight, Clock3, Globe2, Palette, Upload } from "lucide-react";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [fileName, setFileName] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "23d6f0cd-5bce-46da-a69d-4481f9990ef1";

    setStatus("sending");
    setStatusMessage("");
    try {
      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const category = String(formData.get("category") || "").trim();
      const quantity = String(formData.get("quantity") || "").trim();
      const zip = String(formData.get("zip") || "").trim();
      const details = String(formData.get("details") || "").trim();
      const file = formData.get("attachment") as File | null;

      let fileUrl = "";
      let fileData = "";
      const fileName = file?.name || "";
      const fileSize = file?.size || 0;
      const fileType = file?.type || "";

      if (file && file.size > 0) {
        // Read as Base64 data URL so the image is stored directly in Firestore
        if (file.size <= 800 * 1024) {
          try {
            fileData = await new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(String(reader.result || ""));
              reader.onerror = () => reject(reader.error);
              reader.readAsDataURL(file);
            });
          } catch (readerErr) {
            console.warn("FileReader error:", readerErr);
          }
        }

        // Also attempt Firebase Storage upload if bucket is active
        try {
          const fileRef = ref(storage, `quotes/${Date.now()}_${file.name.replace(/\s+/g, "_")}`);
          const uploadResult = await uploadBytes(fileRef, file);
          fileUrl = await getDownloadURL(uploadResult.ref);
        } catch (storageErr) {
          console.warn("Firebase storage upload skipped/errored:", storageErr);
        }
      }

      // 1. Save quote to Firebase Firestore (includes file name, size, type, data, and URL)
      try {
        await addDoc(collection(db, "quotes"), {
          name,
          email,
          phone,
          category,
          quantity: quantity ? Number(quantity) || quantity : "",
          zip,
          details,
          fileName,
          fileSize,
          fileType,
          fileUrl,
          fileData,
          toEmail: "design@powerdigitizing.com",
          createdAt: serverTimestamp(),
        });
      } catch (firestoreErr) {
        console.warn("Firestore save warning:", firestoreErr);
      }

      // 2. Send email notification to design@powerdigitizing.com via Web3Forms
      try {
        formData.append("access_key", accessKey);
        formData.append("subject", `New Quote Request from ${name || "Customer"} - Power Digitizing`);
        formData.append("from_name", "Power Digitizing Quote Portal");
        formData.append("to_email", "design@powerdigitizing.com");
        if (fileUrl) {
          formData.append("file_download_url", fileUrl);
        }
        await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      } catch (emailErr) {
        console.warn("Email dispatch warning:", emailErr);
      }

      form.reset();
      setFileName("");
      setStatus("success");
      setStatusMessage("Thank you! Your quote request has been received and sent to design@powerdigitizing.com.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Could not send. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[0.35rem] bg-primary p-6 text-primary-foreground shadow-2xl shadow-primary/15 md:p-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="font-display text-2xl font-semibold leading-tight md:text-3xl">Put your information,<br />we&apos;ll contact you.</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">Share a few details and we&apos;ll recommend the right production path for your project.</p>
        </div>
        <span className="hidden size-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground sm:grid"><ArrowUpRight aria-hidden className="size-5" /></span>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="quote-name">Name</label>
        <input id="quote-name" name="name" required placeholder="Name" className="quote-input" />
        <label className="sr-only" htmlFor="quote-email">Email</label>
        <input id="quote-email" name="email" type="email" required placeholder="Email" className="quote-input" />
        <label className="sr-only" htmlFor="quote-phone">Phone</label>
        <input id="quote-phone" name="phone" type="tel" placeholder="Phone number" className="quote-input" />
        <label className="sr-only" htmlFor="quote-category">Category</label>
        <select id="quote-category" name="category" defaultValue="" className="quote-input">
          <option value="" disabled>Project category</option>
          <option>Embroidery digitizing</option>
          <option>Vector conversion</option>
          <option>Custom patches</option>
        </select>
        <label className="sr-only" htmlFor="quote-quantity">Quantity</label>
        <input id="quote-quantity" name="quantity" type="number" min="1" placeholder="Quantity" className="quote-input" />
        <label className="sr-only" htmlFor="quote-zip">Zip code</label>
        <input id="quote-zip" name="zip" placeholder="Zip code" className="quote-input" />
      </div>

      <label className="sr-only" htmlFor="quote-details">Project details</label>
      <textarea id="quote-details" name="details" rows={4} placeholder="Project details: sizes, finishes, deadline..." className="quote-input mt-3 min-h-28 resize-y sm:col-span-2" />
      <label className="mt-3 flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-[0.35rem] border border-dashed border-white/45 px-4 text-center text-sm text-white/75 transition-colors hover:border-accent hover:text-white">
        <Upload aria-hidden className="mb-2 size-5" />
        <span>{fileName ? `Uploaded: ${fileName}` : "Attach your artwork or reference"}</span>
        <span className="mt-1 text-xs text-white/50">PDF, AI, PNG, JPG up to 10MB</span>
        <input name="attachment" type="file" accept=".pdf,.ai,.png,.jpg,.jpeg" className="sr-only" onChange={(event) => setFileName(event.target.files?.[0]?.name || "")} />
      </label>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-white/60">By submitting, you agree to be contacted about your project.</p>
        <div className="flex items-center gap-4">
          {statusMessage && <p className={`max-w-xs text-xs font-semibold ${status === "success" ? "text-accent" : "text-white"}`}>{statusMessage}</p>}
          <button type="submit" disabled={status === "sending"} className="inline-flex cursor-pointer items-center gap-2 rounded-[0.35rem] bg-secondary px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-1 disabled:cursor-wait disabled:opacity-60">{status === "sending" ? "Sending..." : "Send a request"} <ArrowUpRight aria-hidden className="size-4" /></button>
        </div>
      </div>
    </form>
  );
}

export function QuoteBenefits() {
  return (
    <div className="mt-8 grid gap-3 text-sm">
      <div className="flex items-center gap-3"><Clock3 aria-hidden className="size-4 text-accent" /><span>Reply within 4 hours</span></div>
      <div className="flex items-center gap-3"><Globe2 aria-hidden className="size-4 text-accent" /><span>Ships worldwide</span></div>
      <div className="flex items-center gap-3"><Palette aria-hidden className="size-4 text-accent" /><span>Free design support included</span></div>
    </div>
  );
}
