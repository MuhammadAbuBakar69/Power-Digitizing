import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { QuoteBenefits, QuoteForm } from "@/components/sections/quote-form";
import { getSite } from "@/lib/tenant";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return { title: `Get an instant quote | ${site.name}`, description: `Send your artwork to ${site.name} for a fast, considered project quote.` };
}

export default async function QuotePage() {
  const site = await getSite();

  return (
    <main className="min-h-screen bg-background pb-20 pt-28 md:pt-36">
      <div className="mx-auto max-w-6xl px-5">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"><ArrowLeft aria-hidden className="size-4" /> Back to home</Link>
        <div className="mt-8 grid overflow-hidden rounded-[0.35rem] border border-border bg-card shadow-xl shadow-secondary/5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-7 md:p-12 lg:p-16">
            <p className="inline-flex w-fit rounded-full border border-border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Get a quote</p>
            <h1 className="mt-5 max-w-lg font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">Tell us about <span className="text-primary">your</span> project.</h1>
            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">Share a few details and we&apos;ll come back with a clear recommendation, accurate quote and production plan that fits your deadline.</p>
            <QuoteBenefits />
            <div className="mt-10 border-t border-border pt-5 text-sm text-muted-foreground">
              <p>Prefer email?</p>
              <a href={`mailto:${site.contact.email}`} className="mt-1 inline-flex items-center font-semibold text-foreground hover:text-primary">{site.contact.email}</a>
            </div>
          </div>
          <QuoteForm site={site} />
        </div>
      </div>
    </main>
  );
}
