import Link from "next/link";
import { ArrowUpRight, Phone, Mail, ShieldCheck, Clock, Sparkles } from "lucide-react";
import type { SiteConfig } from "@/config/types";

export function CtaBanner({ site }: { site: SiteConfig }) {
  const phone = site.contact?.phone || "+1 (316) 444-1366";
  const email = site.contact?.email || "support@powerdigitizing.com";

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0B1626] via-[#14263D] to-[#0B1626] p-8 text-center text-white shadow-2xl sm:p-12 md:p-16 lg:p-20">
          {/* Subtle ambient lighting inside the Bluestone container */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-[#C94343]/15 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 right-10 h-72 w-72 rounded-full bg-white/5 blur-[100px]"
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              <Sparkles className="size-3.5 text-[#C94343]" />
              <span>Ready for flawless embroidery?</span>
            </div>

            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Bring your most complex designs <br className="hidden sm:inline" />
              to production reality today.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Experience the precision of manual digitizing, zero-breakage stitch engineering, and lightning-fast 2–4 hour turnaround. Get a free digital preview with complete stitch specs.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/quote"
                className="group inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#C94343]/30 transition-all hover:scale-105 hover:bg-[#b03535] hover:shadow-2xl"
              >
                <span>Get Free Instant Quote</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/15"
              >
                <span>Talk to Senior Digitizer</span>
              </Link>
            </div>

            {/* Quick contact strip */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-xs text-slate-300/80 sm:text-sm">
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="group flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-[#C94343] transition-transform group-hover:scale-110" />
                <span>{phone}</span>
              </a>
              <span className="hidden text-white/20 sm:inline">•</span>
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="size-4 text-[#C94343] transition-transform group-hover:scale-110" />
                <span>{email}</span>
              </a>
              <span className="hidden text-white/20 sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <Clock className="size-4 text-[#C94343]" />
                <span>2-4h Rush Option Available</span>
              </span>
              <span className="hidden text-white/20 sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <ShieldCheck className="size-4 text-[#C94343]" />
                <span>100% Satisfaction Guarantee</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
