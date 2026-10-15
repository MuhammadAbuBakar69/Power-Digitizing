import Link from "next/link";
import { ArrowUpRight, Phone, Mail, ShieldCheck, Clock, Sparkles } from "lucide-react";
import type { SiteConfig } from "@/config/types";

export function CtaBanner({ site }: { site: SiteConfig }) {
  const phone = site.contact?.phone || "+1 (316) 444-1366";
  const email = site.contact?.email || "support@powerdigitizing.com";

  return (
    <section className="relative overflow-hidden bg-[#1E1B18] py-20 text-white md:py-28">
      {/* Decorative gradient & glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-10 h-72 w-72 rounded-full bg-accent/15 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md sm:p-12 md:p-16 lg:p-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <Sparkles className="size-3.5" />
            <span>Ready for flawless embroidery?</span>
          </div>

          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Bring your most complex designs <br className="hidden sm:inline" />
            to production reality today.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Experience the precision of manual digitizing, zero-breakage stitch engineering, and lightning-fast 2–4 hour turnaround. Get a free digital preview with complete stitch specs.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-xl shadow-primary/25 transition-all hover:scale-105 hover:bg-primary/90"
            >
              <span>Get Free Instant Quote</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/40"
            >
              <span>Talk to Senior Digitizer</span>
            </Link>
          </div>

          {/* Quick contact strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-xs sm:text-sm text-white/60">
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="size-4 text-accent" />
              <span>{phone}</span>
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="size-4 text-accent" />
              <span>{email}</span>
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock className="size-4 text-emerald-400" />
              <span>2-4h Rush Option Available</span>
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <ShieldCheck className="size-4 text-emerald-400" />
              <span>100% Satisfaction Guarantee</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
