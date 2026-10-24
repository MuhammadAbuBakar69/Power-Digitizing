import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, Scissors, PenTool } from "lucide-react";
import { getSite } from "@/lib/tenant";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Vector Art & Embroidery Digitizing Services | Power Digitizing",
  description:
    "Professional raster-to-vector artwork recreation and manual embroidery digitizing. Guaranteed machine-ready files, 2–4 hour rush turnaround, and free digital proofs.",
};

export default async function ServicesPage() {
  const site = await getSite();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border/80">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-[#14263D]/5 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute top-1/3 -right-20 size-72 rounded-full bg-[#C94343]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14263D]/10 bg-[#14263D]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C94343]">
            <Sparkles className="size-3.5" />
            <span>Core Digital Craftsmanship</span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#14263D]">
            Vector Artwork & <br className="hidden sm:inline" />
            Embroidery Digitizing Services
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            From raster sketches to sharp, scalable vector files and production-grade embroidery machine toolpaths. Engineered manually by senior digitizers with zero automated shortcuts.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C94343]/25 hover:bg-[#b03535] hover:shadow-xl hover:shadow-[#C94343]/35 transition-all hover:scale-105"
            >
              <span>Get Instant Free Quote</span>
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-[#14263D] hover:border-[#14263D]/40 transition-colors"
            >
              <span>Explore Custom Patches</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 1. VECTOR ART CONVERSION SERVICE ─── */}
      <section id="vector" className="scroll-mt-24 py-20 md:py-28 border-b border-border/80">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
                <PenTool className="size-3.5" /> Service 01 — Vector Art Recreation
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#14263D]">
                Turn Blurry Artwork into Press-Ready, Infinite-Scale Vectors
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Low-resolution JPEGs, camera photos, and rough sketches cause severe pixelation on presses, laser cutters, and embroidery machines. Our team manually redraws every line, arc, and curve into flawless bézier paths.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "Universal Formats", desc: "Delivered in AI, EPS, PDF, SVG, and high-res transparent PNG." },
                  { title: "Pantone PMS Matching", desc: "Spot color separations calibrated for screen printing and DTF." },
                  { title: "Clean Cut Contours", desc: "Smooth vector wireframes for vinyl plotting and CNC lasers." },
                  { title: "Same-Day Turnaround", desc: "Standard 12–24h delivery with 2–4h rush options available." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
                    <h3 className="font-semibold text-sm text-[#14263D] flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[#C94343]" />
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#14263D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0B1626] transition-colors"
                >
                  <span>Submit Vector Artwork</span>
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="/services/vector"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-[#14263D] hover:border-[#14263D] transition-colors"
                >
                  <span>Explore Vector Specs &amp; Prepress</span>
                  <ArrowUpRight className="size-4 text-[#C94343]" />
                </Link>
              </div>
            </div>

            {/* Visual Preview */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border/80 shadow-xl bg-card">
                <Image
                  src="/images/company/vector-conversion.jpg"
                  alt="Side-by-side pencil sketch converting into crisp vector graphic with bezier nodes"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-xs font-mono text-muted-foreground uppercase tracking-wider">
                FIG 1.1 — BÉZIER CURVE NODE REDRAW & COLOR SEPARATION
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. EMBROIDERY DIGITIZING SERVICE ─── */}
      <section id="embroidery" className="scroll-mt-24 py-20 md:py-28 bg-slate-50/60 border-b border-border/80">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Preview */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border/80 shadow-xl bg-card">
                <Image
                  src="/images/company/digitizing-cad.jpg"
                  alt="Digitizer CAD workspace with stitch angles, pull compensation, and density settings"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-xs font-mono text-muted-foreground uppercase tracking-wider">
                FIG 1.2 — MANUAL SATIN COLUMN & UNDERLAY ANGLE CALIBRATION
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
                <Scissors className="size-3.5" /> Service 02 — Precision Digitizing
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#14263D]">
                Commercial-Grade Stitch Engineering for Any Fabric or Cap
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Automated punching software destroys thread density, creates birdnesting, and distorts hat seams. Every file we deliver is manually punched by master digitizers with custom pull compensation and fabric-specific underlay.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "3D Puff Headwear", desc: "Perimeter caps and high-density foam toolpaths for Richardson 112s." },
                  { title: "Micro-Lettering (3mm)", desc: "Clear, legible characters down to 3mm with zero needle punctures." },
                  { title: "All Machine Formats", desc: "Native DST, EMB, PES, EXP, JEF, CND files compatible with Tajima & Barudan." },
                  { title: "Zero Birdnest Guarantee", desc: "Optimized travel paths with minimal trims and thread breaks." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
                    <h3 className="font-semibold text-sm text-[#14263D] flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[#C94343]" />
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#C94343] px-6 py-3 text-sm font-semibold text-white hover:bg-[#b03535] transition-colors shadow-md shadow-[#C94343]/20"
                >
                  <span>Submit Stitch File for Digitizing</span>
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="/services/embroidery"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-[#14263D] hover:border-[#14263D] transition-colors"
                >
                  <span>Explore All Embroidery Stitch Types</span>
                  <ArrowUpRight className="size-4 text-[#C94343]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <CtaBanner site={site} />
    </div>
  );
}
