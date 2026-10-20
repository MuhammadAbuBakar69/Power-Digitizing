import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Download,
  Eye,
  FileCheck,
  Flame,
  Layers,
  Palette,
  PenTool,
  Printer,
  Scissors,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { getSite } from "@/lib/tenant";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Professional Vector Artwork & Raster-to-Vector Conversion Services | Power Digitizing",
  description:
    "Expert hand-drawn raster-to-vector artwork recreation. Crisp bezier curves, Pantone spot color separations, clean cut-lines for screen printing, vinyl cutters, DTF, and large-format signage. 2–4 hour rush available.",
};

const vectorProcesses = [
  {
    id: "screen-printing",
    title: "Screen Printing & Spot Color Separations",
    badge: "Apparel Prepress",
    desc: "Every ink channel is separated onto individual layers with accurate choke and spread trapping (0.5pt–1pt). Includes registration marks, centerlines, and solid opaque black fills calibrated for 110–305 TPI mesh screen exposure.",
    bullets: [
      "Spot color separation (Pantone Solid Coated PMS matching)",
      "Underbase white generation for dark garment printing",
      "Spread and choke trapping to prevent registration gaps",
      "Halftone conversion support for simulated process art",
    ],
    icon: Printer,
  },
  {
    id: "cutters-plotters",
    title: "Vinyl Cutters, Plotters & CNC Routers",
    badge: "Cutline Optimization",
    desc: "Engineered with 100% closed, continuous vector paths and zero overlapping phantom lines. Cutters like Roland, Graphtec, and Mimaki execute seamless, blade-friendly cuts without tearing delicate heat-transfer vinyl.",
    bullets: [
      "Zero overlapping path duplicates or double-cut nodes",
      "Hairline strokes (0.001pt / 0.025mm) calibrated for plotter blades",
      "Weeding-friendly layout with optimized border offsets",
      "Single-line engraving toolpaths for rotary and CNC bits",
    ],
    icon: Scissors,
  },
  {
    id: "laser-engraving",
    title: "Laser Cutting & Precision Etching",
    badge: "Sub-Millimeter Precision",
    desc: "Strict separation between raster engraving fills (black) and vector cutting contours (red 0.001pt). Perfectly optimized for wood, acrylic, leather patch blanks, metal marking, and CO2/fiber laser equipment.",
    bullets: [
      "RGB color-coded vectors for cut vs. etch vs. score passes",
      "Tangent-continuous arcs for ultra-smooth laser head acceleration",
      "Kerf-compensation offsets for snug acrylic joinery",
      "Compatible with LightBurn, Epilog, Trotec, and Glowforge",
    ],
    icon: Flame,
  },
  {
    id: "dtf-dtg",
    title: "DTF & Direct-to-Garment (DTG) Transfers",
    badge: "Digital Apparel",
    desc: "Vector elements with crisp, razor-sharp perimeters, true transparent negative space, and zero antialiased white halos. Exported at native 300+ DPI CMYK with deep rich blacks and vibrant color rendition.",
    bullets: [
      "Zero pixel fuzz or semi-transparent edge halos",
      "Knockout black options to save ink on black tees",
      "High-contrast color profiles calibrated for white ink backing",
      "Gang-sheet ready layouts with tight nested spacing",
    ],
    icon: Palette,
  },
  {
    id: "large-format",
    title: "Large Format Banners & Vehicle Wraps",
    badge: "Infinite Scale",
    desc: "Because vectors are mathematically computed bezier curves, your logo can be blown up from a 2-inch business card to a 50-foot highway billboard or full commercial vehicle wrap with zero pixelation or file bloat.",
    bullets: [
      "Infinite resolution scalability without loss of clarity",
      "Lightweight file size compared to massive gigabyte TIFF files",
      "Bleed margins and safety cutline guides included",
      "Pantone color fidelity across UV and latex ink sets",
    ],
    icon: Layers,
  },
  {
    id: "embroidery-prep",
    title: "Embroidery Digitizing Art Preparation",
    badge: "Digitizer-Friendly",
    desc: "Before digitizing stitches, complex raster art must be simplified into clean vector regions. We remove micro-specks, unite overlapping fills, and optimize outlines for direct import into Wilcom and Tajima Pulse.",
    bullets: [
      "Simplified vector geometry without unnecessary micro-shapes",
      "Welded shapes that prevent unwanted stitch jumps",
      "High-contrast color blocking for automatic stitch assignment",
      "True proportion scaling for standard chest and cap sizes",
    ],
    icon: PenTool,
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Manual Bezier Tracing",
    desc: "We never rely on automated 'auto-trace' or 'quick trace' filters which create jagged, lumpy curves and thousands of redundant anchor points. Every single contour is manually plotted using professional pen tools by senior graphic illustrators.",
  },
  {
    step: "02",
    title: "Typography Identification & Reconstruction",
    desc: "If your artwork includes rasterized, blurry text, our prepress team identifies the exact font typeface from our commercial typography library or hand-draws bespoke lettering glyphs to guarantee razor-sharp typography.",
  },
  {
    step: "03",
    title: "Pantone PMS & Spot Color Calibration",
    desc: "We assign official Pantone Matching System (PMS Solid Coated) color chips to each artwork element. This ensures that your screen printer, vinyl distributor, or sign maker hits the exact brand color every single run.",
  },
  {
    step: "04",
    title: "Path Optimization & Node Reduction",
    desc: "Excess anchor points cause plotter stuttering and bloated file sizes. We refine tangents, smooth bezier handles, and eliminate unnecessary nodes to produce clean, sleek curves that cut like butter.",
  },
];

const deliveryFormats = [
  {
    ext: ".AI",
    name: "Adobe Illustrator Native",
    app: "Industry Standard Vector",
    desc: "Live layers, grouped paths, editable text (where requested), and organized swatches. Back-saved to CS6/CC for universal studio compatibility.",
  },
  {
    ext: ".EPS",
    name: "Encapsulated PostScript",
    app: "Universal Prepress Interchange",
    desc: "Compatible with legacy RIP software, Roland VersaWorks, screen printing film processors, and third-party CAD applications.",
  },
  {
    ext: ".SVG",
    name: "Scalable Vector Graphics",
    app: "Web & Digital Craft Cutters",
    desc: "Lightweight XML-based vector code perfect for modern web frontends, Cricut Design Space, Silhouette Studio, and laser cutters.",
  },
  {
    ext: ".PDF",
    name: "Press-Ready High-Res PDF",
    app: "Universal Commercial Print",
    desc: "PDF/X-1a standards-compliant vector document with embedded fonts, CMYK/Pantone color space, and lossless vector contours.",
  },
  {
    ext: ".PNG",
    name: "Transparent Hi-Res 300+ DPI",
    app: "Client Preview & Digital Mockup",
    desc: "Crisp 3000px+ transparent PNG export for immediate client approval, social media, ecommerce stores, and digital mockups.",
  },
  {
    ext: ".CDR",
    name: "CorelDRAW Vector (On Request)",
    app: "Screen Printing & Signage",
    desc: "Available upon request for shops utilizing CorelDRAW workflows, with full object and spot color preservation.",
  },
];

const vectorFaqs = [
  {
    q: "Why can't I just use Adobe Illustrator's 'Image Trace' button?",
    a: "Automated tracing algorithms create thousands of redundant, jagged anchor points, rounded corners where sharp serifs are required, and weird color specks that ruin print jobs and cause vinyl cutters to tear material. Our vector conversions are 100% hand-drawn with surgical bezier curve precision.",
  },
  {
    q: "Can you vector low-resolution photos or scans of sketches?",
    a: "Yes! We specialize in reviving terrible quality artwork: camera photos of old patches, napkin doodles, screenshots of logos with compression artifacts, and micro-resolution 72 DPI JPEGs. Our illustrators accurately recreate the intended artwork geometry.",
  },
  {
    q: "Do you provide color separations for screen printers?",
    a: "Yes. When requested, we deliver fully separated vector files with individual spot color layers, choke/spread trapping, registration targets, and opaque black film output channels ready for direct burning onto silkscreen mesh.",
  },
  {
    q: "What is your turnaround time for vector artwork?",
    a: "Standard vector conversions are completed within 12–24 hours. For critical print shop deadlines, we offer an expedited 2–4 hour rush service that delivers production-ready files directly to your inbox.",
  },
  {
    q: "What if my logo uses a specific Pantone or CMYK color?",
    a: "Simply specify your PMS color codes (e.g. Pantone 186 C, Pantone Reflex Blue) in your quote request. If you don't know the exact codes, our prepress team will visually match the closest official Pantone Solid Coated swatch.",
  },
  {
    q: "Are revisions included if something needs adjustment?",
    a: "Absolutely. We provide free minor revisions until you and your commercial printer are 100% satisfied with the vector reproduction.",
  },
];

export default async function VectorServicePage() {
  const site = await getSite();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-[#14263D]/5 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/4 -right-20 size-80 rounded-full bg-[#C94343]/10 blur-[110px]"
        />

        <div className="relative mx-auto max-w-6xl px-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14263D]/10 bg-[#14263D]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C94343]">
            <Sparkles className="size-3.5" />
            <span>Prepress-Grade Manual Vectorization</span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#14263D]">
            Vector Artwork Recreation &amp; <br className="hidden sm:inline" />
            Raster-to-Vector Conversion
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Transform blurry JPEGs, pixelated screenshots, and hand-drawn sketches into razor-sharp mathematical bezier curves. 100% hand-plotted with zero automated shortcuts. Ready for screen printing, vinyl cutters, laser engraving, DTF, and billboards.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#C94343]/25 hover:bg-[#b03535] hover:shadow-xl hover:shadow-[#C94343]/35 transition-all hover:scale-105"
            >
              <span>Get Free Vector Quote</span>
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/services/embroidery"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-semibold text-[#14263D] hover:border-[#14263D]/40 transition-colors"
            >
              <span>View Embroidery Digitizing</span>
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-border/80">
            <div className="p-3 text-center">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-[#14263D]">100%</p>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider font-medium">Hand-Drawn Bezier</p>
            </div>
            <div className="p-3 text-center">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-[#C94343]">0% Loss</p>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider font-medium">Infinite Resolution</p>
            </div>
            <div className="p-3 text-center">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-[#14263D]">2–4 Hr</p>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider font-medium">Rush Turnaround</p>
            </div>
            <div className="p-3 text-center">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-[#14263D]">Pantone®</p>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider font-medium">PMS Spot Matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. BEFORE & AFTER SHOWCASE ─── */}
      <section className="py-20 md:py-28 border-b border-border/80 bg-card/30">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C94343]/10 px-3 py-1 text-xs font-semibold text-[#C94343] uppercase tracking-wider">
              <Eye className="size-3.5" />
              <span>Side-by-Side Comparison</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D]">
              Low-Res Raster vs. Clean Vector Precision
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              See the difference between jagged, antialiased pixels and our surgical vector node architecture with clean spot color separation.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/company/vector-separation-showcase.jpg"
                alt="Vector transformation comparison: blurry raster badge transformed into razor sharp vector with bezier nodes and spot color separations"
                fill
                sizes="(max-width: 1200px) 100vw, 1152px"
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border bg-card p-6">
              <div className="p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C94343]">Problem: Blurry Raster</span>
                <p className="mt-2 text-sm text-muted-foreground">
                  Low-resolution JPEGs and PNGs blur when scaled. Fringed edge pixels ruin silkscreen screens and cause vinyl cutters to shudder and tear.
                </p>
              </div>
              <div className="p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14263D]">Solution: Clean Bezier Nodes</span>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hand-crafted vector paths with smooth tangent handles and minimal anchor points. Renders flawlessly whether printed 1 inch or 50 feet wide.
                </p>
              </div>
              <div className="p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Production Ready</span>
                <p className="mt-2 text-sm text-muted-foreground">
                  Layered spot color channels (Crimson, Navy, Gold) with calibrated traps and solid black film positives for immediate press setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. PREPRESS PRODUCTION PROCESS (INFOGRAPHIC) ─── */}
      <section className="py-20 md:py-28 border-b border-border/80">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#14263D]/5 px-3 py-1 text-xs font-semibold text-[#14263D] uppercase tracking-wider">
                <Cpu className="size-3.5" />
                <span>Commercial Print Standards</span>
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D] leading-tight">
                Vector Art Prepress Production Architecture
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                We don&apos;t just trace shapes—we build print-ready artwork engineered specifically for your shop&apos;s physical machinery. From screen separations to laser hairlines, every path has purpose.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C94343]/10 text-xs font-bold text-[#C94343]">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#14263D]">Color-Separated Film Positives</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Clean opaque black film positives for 110–305 TPI mesh silkscreen exposure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C94343]/10 text-xs font-bold text-[#C94343]">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#14263D]">Hairline Cut Lines (0.001 pt)</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Dedicated cut paths for vinyl plotters, flatbed cutters, and laser heads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C94343]/10 text-xs font-bold text-[#C94343]">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#14263D]">Pantone® Spot Color Chips</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Standardized color matching that eliminates print shop color guesswork.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C94343]/10 text-xs font-bold text-[#C94343]">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#14263D]">Wide-Format Scaling</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Zero pixelation on banners, trade show displays, and architectural signs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/company/vector-prepress-workflow.jpg"
                    alt="Vector Art Prepress Production Process infographic: Film Positives, Hairline Cut Lines, Pantone Swatch Cards, Large Format Vinyl"
                    fill
                    sizes="(max-width: 1200px) 100vw, 700px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. OUTPUT PROCESSES WE SPECIALIZE IN ─── */}
      <section className="py-20 md:py-28 border-b border-border/80 bg-card/20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C94343]/10 px-3 py-1 text-xs font-semibold text-[#C94343] uppercase tracking-wider">
              <Zap className="size-3.5" />
              <span>Tailored For Every Machine</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D]">
              Specialized Prepress Vector Solutions
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Different manufacturing methods require fundamentally different vector geometries. We customize every file to match your exact equipment specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vectorProcesses.map((proc) => {
              const IconComp = proc.icon;
              return (
                <div
                  key={proc.id}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-[#C94343]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-[#14263D]/5 text-[#C94343]">
                        <IconComp className="size-5" />
                      </div>
                      <span className="rounded-full bg-[#14263D]/5 px-2.5 py-0.5 text-xs font-semibold text-[#14263D]">
                        {proc.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-[#14263D]">{proc.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{proc.desc}</p>

                    <div className="mt-5 space-y-2 pt-4 border-t border-border/60">
                      {proc.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-foreground/90">
                          <CheckCircle2 className="size-3.5 shrink-0 text-[#C94343] mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60">
                    <Link
                      href="/quote"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C94343] hover:text-[#b03535] transition-colors"
                    >
                      <span>Order for {proc.title.split("&")[0].trim()}</span>
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. THE 4-STAGE MANUAL PIPELINE ─── */}
      <section className="py-20 md:py-28 border-b border-border/80">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#14263D]/5 px-3 py-1 text-xs font-semibold text-[#14263D] uppercase tracking-wider">
              <ShieldCheck className="size-3.5" />
              <span>Zero Automated Shortcuts</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D]">
              Our 4-Stage Manual Vectorization Workflow
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Why professional print shops and screen printers trust Power Digitizing for mission-critical artwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((ws) => (
              <div
                key={ws.step}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-display text-3xl font-extrabold text-[#C94343]/30">{ws.step}</span>
                <h3 className="mt-3 font-display text-base font-bold text-[#14263D]">{ws.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{ws.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. FILE FORMATS DELIVERED ─── */}
      <section className="py-20 md:py-28 border-b border-border/80 bg-card/30">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C94343]/10 px-3 py-1 text-xs font-semibold text-[#C94343] uppercase tracking-wider">
              <Download className="size-3.5" />
              <span>Universal Compatibility</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D]">
              Delivered in All Standard Production Formats
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Every completed order includes the full production suite of files ready for immediate use by designers, printers, and machine operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryFormats.map((fmt) => (
              <div
                key={fmt.ext}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-[#14263D]/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-black text-[#C94343]">{fmt.ext}</span>
                  <span className="rounded-full bg-[#14263D]/5 px-2.5 py-0.5 text-xs font-medium text-[#14263D]">
                    {fmt.app}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-sm font-bold text-[#14263D]">{fmt.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{fmt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── 8. PREPRESS VECTOR FAQS ─── */}
      <section className="py-20 md:py-28 border-b border-border/80 bg-card/20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C94343]/10 px-3 py-1 text-xs font-semibold text-[#C94343] uppercase tracking-wider">
              <FileCheck className="size-3.5" />
              <span>Expert Knowledge</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D]">
              Frequently Asked Vector Questions
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Everything you need to know about preparing artwork for manufacturing and commercial printing.
            </p>
          </div>

          <div className="space-y-4">
            {vectorFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-[#14263D]/30"
              >
                <h3 className="font-display text-base font-bold text-[#14263D] flex items-start gap-2.5">
                  <span className="text-[#C94343] font-bold">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. BOTTOM CTA BANNER ─── */}
      <CtaBanner site={site} />
    </div>
  );
}
