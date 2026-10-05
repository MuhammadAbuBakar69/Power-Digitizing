"use client";

import { useState } from "react";
import { ArrowUpRight, Clock3, Globe2, Palette, Upload } from "lucide-react";
import type { SiteConfig } from "@/config/types";

export function QuoteForm({ site }: { site: SiteConfig }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Quote request from ${data.get("name") || "website visitor"}`);
    const body = encodeURIComponent([
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Category: ${data.get("category") || ""}`,
      `Quantity: ${data.get("quantity") || ""}`,
      `Zip code: ${data.get("zip") || ""}`,
      "",
      String(data.get("details") || ""),
    ].join("\n"));
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
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
        <span>Attach your artwork or reference</span>
        <span className="mt-1 text-xs text-white/50">PDF, AI, PNG, JPG up to 10MB</span>
        <input name="artwork" type="file" accept=".pdf,.ai,.png,.jpg,.jpeg" className="sr-only" />
      </label>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-white/60">By submitting, you agree to be contacted about your project.</p>
        <button type="submit" className="inline-flex items-center gap-2 rounded-[0.35rem] bg-secondary px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-1">{sent ? "Opening email..." : "Send a request"} <ArrowUpRight aria-hidden className="size-4" /></button>
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
