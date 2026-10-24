import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Scissors,
} from "lucide-react";
import { getSite } from "@/lib/tenant";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Custom Embroidery Digitizing Services | All Stitch Types & Machine Files | Power Digitizing",
  description:
    "Master commercial embroidery digitizing. Flat embroidery, 3D puff headwear, jacket backs, appliqué, micro-lettering down to 3mm, and chenille. DST, EMB, PES formats with guaranteed test stitch-outs.",
};

const embroideryTypes = [
  {
    id: "flat",
    title: "Flat & Standard Commercial Embroidery",
    subtitle: "The Industry Workhorse for Corporate & Team Apparel",
    badge: "Most Popular",
    desc: "Meticulously punch-sequenced for left-chest logos, corporate polos, scrubs, aprons, and button-down shirts. We calibrate satin column widths and fill densities to prevent puckering on both lightweight 100% polyester athletic dri-fit and heavy cotton twill.",
    features: [
      "Auto-travel logic that eliminates unnecessary jump stitches and trims",
      "Fabric-specific underlay matrices (edge walk, zigzag, and tatami tatami)",
      "Calibrated push-and-pull compensation based on garment weave direction",
      "Tested on 40-weight polyester and rayon thread specifications",
    ],
    image: "/images/embroidery/embroidered-big-rig-patch.webp",
    imageAlt: "Flat commercial embroidery stitch-out sample on twill",
    spec: "Left Chest & Sleeves · 4,000–12,000 stitches avg.",
  },
  {
    id: "3d-puff",
    title: "3D Puff & Raised Foam Headwear Digitizing",
    subtitle: "Extreme Tactile Dimension for Caps & Beanies",
    badge: "Headwear Specialist",
    desc: "Engineered specifically for structured and unstructured 6-panel trucker hats (Richardson 112, Yupoong, Flexfit) and thick acrylic knit beanies. Our senior digitizers program perforated cutting stitches and high-density top satins that wrap completely around high-density EVA foam.",
    features: [
      "Perimeter cut-runs that slice cleanly through 2mm–4mm foam with no stray fuzz",
      "End-capping stitch sequences to enclose foam ends at corners and sharp serifs",
      "Underlay stabilization to prevent center-seam splitting on structured caps",
      "Center-out digitizing sequence to eliminate cap distortion on curved frames",
    ],
    image: "/images/company/3d-puff-cap.jpg",
    imageAlt: "3D puff embroidery on curved trucker cap front panels",
    spec: "Hat Fronts & Beanies · High-Density EVA Foam Calibrated",
  },
  {
    id: "jacket-back",
    title: "Jacket Back & Large-Format Oversized Digitizing",
    subtitle: "High-Impact Panoramic Embroidery for Outerwear",
    badge: "Large Scale",
    desc: "Large-format digitizing requires master-level density modulation. If an oversized 250mm–350mm design is punched with uniform density, the garment becomes stiff like cardboard and warps under hoop tension. We apply progressive density gradients and intelligent thread travel.",
    features: [
      "Progressive stitch feathering and density stepping to preserve garment drape",
      "Zonal underlay anchoring so fabric never shifts during 60,000+ stitch runs",
      "Calculated for heavy denim, leather biker vests, satin bomber jackets & hoodies",
      "Reduced machine runtime by up to 28% through optimized travel plotting",
    ],
    image: "/images/company/jacket-back-embroidery.jpg",
    imageAlt: "Detailed jacket back embroidery on leather and denim",
    spec: "Jackets, Gis & Biker Vests · Up to 380mm × 480mm Hoops",
  },
  {
    id: "micro-lettering",
    title: "Micro-Lettering & Ultra-Fine Detail (Down to 3mm)",
    subtitle: "Flawless Legibility for Names, Certifications & Tiny Text",
    badge: "Precision Benchmark",
    desc: "Punching text under 5mm is where automated software completely fails, creating unreadable birdnests and needle punches that slice the fabric. We manually punch micro-lettering with specialized center-run underlays, adjusted satin pull compensation, and needle drop spacing.",
    features: [
      "Legible down to 3mm (0.12 inches) with zero thread-clumping",
      "Specialized for medical scrubs, name tapes, certifications, and fine disclaimers",
      "Formulated for standard #75/11 needles and ultra-fine #65/9 60-weight setups",
      "Open serif geometry calibrated to prevent loop-holes from closing",
    ],
    image: "/images/embroidery/solar-construction-embroidered-patch.webp",
    imageAlt: "Micro lettering embroidery sample showing crisp small text",
    spec: "Name Tapes & Scrubs · 3mm to 6mm Ultra-Crisp Characters",
  },
  {
    id: "applique",
    title: "Tackle Twill & Appliqué Digitizing",
    subtitle: "Collegiate & Sports Outerwear with Laser-Cut Fabric",
    badge: "Sports & Teams",
    desc: "Combines pre-cut fabric layers with structural embroidery stitches to cover massive surface areas with minimal thread weight. Perfect for hockey sweaters, baseball jerseys, Greek life letters, and varsity streetwear.",
    features: [
      "Precise 3-step sequence: Fabric placement line, material tack-down, and satin edge cover",
      "Automatic machine frame-out stops programmed for seamless operator fabric placement",
      "100% compatible with optical CNC laser cutters and pre-cut twill kits",
      "Prevents fabric fraying with high-stitch-count zigzag underlay binding",
    ],
    image: "/images/chenille/37612dd6-9e4f-40a9-b1d8-f6fe661351c7.webp",
    imageAlt: "Collegiate appliqué and tackle twill embroidery sample",
    spec: "Sports Jerseys & Hoodies · 2-Layer & 3-Layer Twill Compatible",
  },
  {
    id: "chenille",
    title: "Chenille & Chainstitch Varsity Embroidery",
    subtitle: "Vintage Loop Stitching for Letterman Jackets & Lifestyle Merch",
    badge: "Varsity Heritage",
    desc: "Chenille creates a distinctive plush, towel-like loop texture using specialized needle hooks. Our digitizers understand loop height dynamics, chainstitch border locking, and directional loop packing for bold collegiate varsity letters and streetwear emblems.",
    features: [
      "Loop stitch fill sequences with locking chainstitch perimeter borders",
      "Engineered for heavy wool letterman coats, hoodies, and felt banners",
      "Punch spacing calibrated to prevent loop flattening and bald spots",
      "Multilayer felt border offsets for clean industrial scissor or laser trimming",
    ],
    image: "/images/chenille/e6bccd47-4ef4-43dc-8a52-45cce1076f13.webp",
    imageAlt: "Vintage chenille varsity embroidery with felt border",
    spec: "Letterman & Streetwear · Plush Loop & Chainstitch Ready",
  },
];

const machineFormats = [
  { ext: ".DST", brand: "Tajima / Universal", use: "Standard industrial binary machine code; compatible with 99% of commercial embroidery machines." },
  { ext: ".EMB", brand: "Wilcom Master", use: "Native uncompressed object-level master file containing outline vectors, density settings, and satin angles." },
  { ext: ".PES", brand: "Brother / Babylock", use: "Dedicated consumer and semi-commercial multi-needle machines (PR600, PR1050X, Persona)." },
  { ext: ".EXP", brand: "Melco / Bernina", use: "Optimized for Melco EMT16X multi-head commercial embroidery systems and Bernina machines." },
  { ext: ".DSB", brand: "Barudan", use: "Specialized Barudan industrial embroidery command codes with custom jump and trim triggers." },
  { ext: ".JEF", brand: "Janome", use: "Formatted for Janome and Elna commercial and cottage embroidery setups." },
];

export default async function EmbroideryPage() {
  const site = await getSite();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border/80 bg-gradient-to-b from-background via-slate-50/40 to-background">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-[#14263D]/5 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute top-1/4 -right-24 size-80 rounded-full bg-[#C94343]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14263D]/10 bg-[#14263D]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C94343]">
            <Scissors className="size-3.5" />
            <span>Master Commercial Embroidery Digitizing</span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#14263D] leading-[1.12]">
            Precision Embroidery Digitizing <br className="hidden sm:inline" />
            For Every Garment & Stitch Style
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            From 3D puff headwear and ultra-crisp micro-lettering down to 3mm, to full-coverage jacket backs and varsity chenille. Manually punched by master digitizers with custom fabric pull-compensation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C94343]/25 hover:bg-[#b03535] hover:shadow-xl hover:shadow-[#C94343]/35 transition-all hover:scale-105"
            >
              <span>Get Free Stitch Quote & Proof</span>
              <ArrowUpRight className="size-4" />
            </Link>
            <a
              href="#stitch-types"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-[#14263D] hover:border-[#14263D]/40 transition-colors"
            >
              <span>Explore All Embroidery Types</span>
            </a>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border/80 pt-8 max-w-4xl mx-auto text-left">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#14263D]">2–4 Hours</div>
              <div className="text-xs text-muted-foreground mt-0.5">Emergency Rush Turnaround</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#14263D]">3mm Min</div>
              <div className="text-xs text-muted-foreground mt-0.5">Micro-Lettering Legibility</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#14263D]">100% Free</div>
              <div className="text-xs text-muted-foreground mt-0.5">Unlimited Stitch Adjustments</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#14263D]">Zero Breaks</div>
              <div className="text-xs text-muted-foreground mt-0.5">Production Sew-Out Tested</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 1. ALL EMBROIDERY TYPES DEEP DIVE ─── */}
      <section id="stitch-types" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
              Comprehensive Stitch Library
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#14263D]">
              All Types of Commercial Embroidery, Tailored to Exact Garments
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Every garment moves differently under needle tension. A stitch file punched for a pique polo will buckle and cup on a performance jacket. We program every punch path for its specific real-world substrate.
            </p>
          </div>

          {/* Detailed Stitch Type Cards */}
          <div className="space-y-12">
            {embroideryTypes.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 md:p-12 shadow-sm hover:shadow-xl hover:border-[#14263D]/20 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Visual Preview */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border/80 shadow-md bg-slate-50">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-3 left-3 rounded-full bg-[#14263D]/80 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-medium text-white shadow-sm">
                          {item.badge}
                        </div>
                      </div>
                      <div className="mt-3 text-center text-xs font-mono text-muted-foreground">
                        {item.spec}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
                        Type {String(idx + 1).padStart(2, "0")} — {item.subtitle}
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#14263D] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="pt-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#14263D] font-bold mb-3">
                          Technical Engineering Highlights:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground/80">
                          {item.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <CheckCircle2 className="size-4 shrink-0 text-[#C94343] mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <Link
                          href="/quote"
                          className="inline-flex items-center gap-2 rounded-full bg-[#14263D] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#0B1626] transition-colors"
                        >
                          <span>Get Free Proof for This Stitch Style</span>
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 2. EMBROIDERY FILE FORMAT COMPATIBILITY ─── */}
      <section className="py-20 md:py-28 bg-slate-50/70 border-t border-b border-border/80">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
              Seamless Machine Compatibility
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#14263D]">
              Machine-Ready Formats for Every Commercial Setup
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every deliverable package includes master object-level vectors and native machine code, complete with printable thread run sheets, stop sequences, and color swatch assignments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {machineFormats.map((m) => (
              <div key={m.ext} className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xl font-bold text-[#C94343]">{m.ext}</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground bg-slate-100 px-2 py-0.5 rounded">
                    {m.brand}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. FABRIC PULL-COMPENSATION FORMULAS ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
                The Science of Thread Dynamics
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#14263D]">
                Why Generic Punching Files Cause Puckering and Thread Breaks
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                When thousands of stitches pull fabric together, natural tension creates push-pull distortion. Without compensation, circular logos turn into ovals, gaps appear between borders, and cap seams crack needles.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  { label: "Pique Polos & Knit Tees", formula: "Requires heavier tatami lattice underlay to bridge open fabric pores without sinking." },
                  { label: "Structured Headwear (6-Panel)", formula: "Center-out punching with +0.45mm push compensation to bridge crown center seams." },
                  { label: "Performance Dri-Fit & Lycra", formula: "Low-tension density reduction by 18% with stretch-stabilizing perimeter run lines." },
                  { label: "Heavy Canvas, Denim & Leather", formula: "Point-sharp needle indexing with light underlay to avoid leather needle perforation." },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-[#C94343] pl-4 py-1">
                    <h4 className="text-sm font-semibold text-[#14263D]">{item.label}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.formula}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-white/10 bg-[#0B1626] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
                <div aria-hidden className="absolute -top-20 -right-20 size-60 rounded-full bg-[#C94343]/15 blur-3xl" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
                  Sample Production Sheet
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">
                  Included With Every Digitizing Order
                </h3>
                <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#C94343]" />
                    <span>Exact Total Stitch Count & Production Run Time (Minutes)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#C94343]" />
                    <span>Needle Stop & Color Sequence Sequence with Madeira Pantones</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#C94343]" />
                    <span>Recommended Machine Speeds (RPM) by Fabric Classification</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#C94343]" />
                    <span>Hoop Size Recommendations to Prevent Frame Distortion</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#C94343]" />
                    <span>High-Resolution 3D Digital Stitch-Out Preview (PNG)</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Pricing Guarantee</div>
                    <div className="text-xl font-bold text-white">From $10 / file</div>
                  </div>
                  <Link
                    href="/quote"
                    className="rounded-full bg-[#C94343] px-6 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-[#b03535] transition-all hover:scale-105"
                  >
                    Upload Design
                  </Link>
                </div>
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
