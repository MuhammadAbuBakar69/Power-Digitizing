import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Cpu,
  Download,
  Eye,
  FileCheck,
  Flame,
  Layers,
  Mail,
  Palette,
  PenTool,
  Phone,
  Printer,
  Scissors,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { getSite } from "@/lib/tenant";

export const metadata: Metadata = {
  title: "Vector Conversion Service | Raster to Vector Art",
  description:
    "Hand-drawn raster to vector conversion for screen printing, vinyl cutting, laser engraving, and DTF. Get AI, EPS, SVG, and PDF files in 12–24 hours.",
};

const vectorProcesses = [
  {
    id: "screen-printing",
    tag: "Apparel prepress",
    title: "Vector Art for Screen Printing & Color Separations",
    desc: "Each ink color is separated onto its own layer with choke and spread trapping, registration marks, and solid black fills ready for screen exposure.",
    bullets: [
      "Spot color separation with Pantone Solid Coated matching",
      "White underbase layers for printing on dark garments",
      "Trapping that prevents gaps between colors",
      "Halftone support for simulated process artwork",
    ],
    buttonText: "Order for Screen Printing",
    icon: Printer,
  },
  {
    id: "cutters-plotters",
    tag: "Cut line ready",
    title: "Vector Files for Vinyl Cutters, Plotters & CNC",
    desc: "Closed, continuous paths with no hidden overlapping lines, so Roland, Graphtec, Mimaki, Cricut, and Silhouette cutters make clean cuts without tearing heat-transfer vinyl.",
    bullets: [
      "No duplicate paths or double-cut nodes",
      "Hairline cut strokes set up for plotter blades",
      "Easy-to-weed layouts with clean border offsets",
      "Single-line paths for rotary and CNC engraving bits",
    ],
    buttonText: "Order for Vinyl Cutting",
    icon: Scissors,
  },
  {
    id: "laser-engraving",
    tag: "Fine detail",
    title: "Vector Art for Laser Cutting & Engraving",
    desc: "Engraving fills and cutting lines are kept on separate, color-coded layers. Ready for wood, acrylic, leather patch blanks, metal marking, and CO2 or fiber lasers.",
    bullets: [
      "Color-coded vectors for cut, engrave, and score passes",
      "Smooth arcs that help the laser head move cleanly",
      "Kerf offsets for tight-fitting acrylic parts",
      "Works with LightBurn, Epilog, Trotec, and Glowforge",
    ],
    buttonText: "Order for Laser Cutting",
    icon: Flame,
  },
  {
    id: "dtf-dtg",
    tag: "Digital apparel",
    title: "Vector Art for DTF & DTG Transfers",
    desc: "Crisp edges, true transparent backgrounds, and no white halos around your design. Exported at 300+ DPI with rich blacks and bright color.",
    bullets: [
      "No fuzzy pixels or semi-transparent edge halos",
      "Knockout black options to save ink on black shirts",
      "High-contrast color set up for white ink backing",
      "Gang-sheet ready layouts with tight spacing",
    ],
    buttonText: "Order for DTF",
    icon: Palette,
  },
  {
    id: "large-format",
    tag: "Any size",
    title: "Vector Art for Banners, Signs & Vehicle Wraps",
    desc: "A vector logo can grow from a 2-inch business card to a 50-foot billboard or a full vehicle wrap with no pixelation and a small file size.",
    bullets: [
      "Sharp at every size, with no quality loss",
      "Much smaller files than huge TIFF images",
      "Bleed margins and safe-area cut guides included",
      "Consistent Pantone color across UV and latex inks",
    ],
    buttonText: "Order for Large Format",
    icon: Layers,
  },
  {
    id: "embroidery-prep",
    tag: "Ready for digitizing",
    title: "Vector Art Preparation for Embroidery Digitizing",
    desc: "Before a design can be digitized, complex artwork has to be simplified into clean shapes. We remove tiny specks, merge overlapping fills, and clean up outlines for direct import into Wilcom and Tajima Pulse.",
    bullets: [
      "Simple shapes without unnecessary tiny details",
      "Welded shapes that prevent unwanted stitch jumps",
      "Clear color blocks for easy stitch assignment",
      "Correct proportions for standard left-chest and cap sizes",
    ],
    buttonText: "Order Embroidery Art Prep",
    icon: PenTool,
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Manual tracing",
    desc: "We never use auto-trace or Image Trace filters, which create lumpy curves and thousands of extra points. Our illustrators redraw every line by hand with professional pen tools.",
  },
  {
    step: "02",
    title: "Font matching and lettering",
    desc: "If your artwork has blurry text, we find the matching font from our type library or redraw the lettering by hand so it stays sharp.",
  },
  {
    step: "03",
    title: "Pantone color matching",
    desc: "We assign official Pantone (PMS Solid Coated) colors to each part of your artwork, so your printer, vinyl supplier, or sign maker hits the same brand color every time.",
  },
  {
    step: "04",
    title: "Clean-up and node reduction",
    desc: "Too many anchor points make plotters stutter and files heavy. We smooth curves and remove extra points so the file cuts and prints cleanly.",
  },
];

const deliveryFormats = [
  {
    ext: ".AI",
    name: "Adobe Illustrator",
    app: "Industry standard",
    desc: "Organized layers, grouped paths, editable text when requested, and color swatches. Saved for CS6 and newer.",
  },
  {
    ext: ".EPS",
    name: "Encapsulated PostScript",
    app: "Universal print file",
    desc: "Works with older RIP software, Roland VersaWorks, film output, and most CAD programs.",
  },
  {
    ext: ".SVG",
    name: "Scalable Vector Graphics",
    app: "Web & craft cutters",
    desc: "Light, web-friendly files for websites, Cricut Design Space, Silhouette Studio, and laser cutters.",
  },
  {
    ext: ".PDF",
    name: "Press-ready PDF",
    app: "Commercial print",
    desc: "High-resolution vector PDF with embedded fonts and CMYK or Pantone color.",
  },
  {
    ext: ".PNG",
    name: "Transparent PNG, 300+ DPI",
    app: "Preview & mockups",
    desc: "A large transparent PNG for client approval, social media, online stores, and mockups.",
  },
  {
    ext: ".CDR",
    name: "CorelDRAW (on request)",
    app: "Screen printing & signs",
    desc: "Available for shops that work in CorelDRAW, with objects and spot colors kept intact.",
  },
];

const vectorFaqs = [
  {
    q: "What is raster to vector conversion?",
    a: "Raster to vector conversion means redrawing a pixel image, such as a JPG or PNG, as lines and curves. The result is a vector file (AI, EPS, SVG, or PDF) that stays sharp at any size and works for screen printing, vinyl cutting, engraving, and signs.",
  },
  {
    q: "Why can't I just use Adobe Illustrator's Image Trace?",
    a: "Auto-trace tools create thousands of extra points, round off sharp corners, and leave color specks that ruin print jobs and make vinyl cutters tear material. We redraw every vector by hand for clean, accurate results.",
  },
  {
    q: "Can you convert a low-resolution photo or a sketch to vector?",
    a: "Yes. We regularly redraw phone photos of old patches, napkin sketches, blurry screenshots, and tiny 72 DPI JPGs. Our illustrators rebuild the artwork the way it was meant to look.",
  },
  {
    q: "Do you provide color separations for screen printing?",
    a: "Yes. When requested, we deliver separated vector files with one layer per spot color, choke and spread trapping, registration marks, and solid black film output ready for burning screens.",
  },
  {
    q: "How long does vector conversion take?",
    a: "Standard vector conversions are finished within 12–24 hours. For tight print deadlines, a 2–4 hour rush service is available.",
  },
  {
    q: "What if my logo uses a specific Pantone or CMYK color?",
    a: "Add your PMS codes (for example Pantone 186 C or Pantone Reflex Blue) to your quote request. If you don't know them, our team will match the closest official Pantone Solid Coated color.",
  },
  {
    q: "Which file formats will I receive?",
    a: "Every order includes AI, EPS, SVG, PDF, and a transparent PNG. CorelDRAW (CDR) files are available on request.",
  },
  {
    q: "Are revisions included?",
    a: "Yes. Minor revisions are free until you and your printer are happy with the vector file.",
  },
];

export default async function VectorServicePage() {
  const site = await getSite();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Vector Artwork Recreation & Raster-to-Vector Conversion",
      serviceType: "Vector Conversion Service",
      provider: {
        "@type": "Organization",
        name: site.name,
        url: "https://powerdigitizing.com",
      },
      description:
        "Hand-drawn raster to vector conversion for screen printing, vinyl cutting, laser engraving, and DTF. Get AI, EPS, SVG, and PDF files in 12–24 hours.",
      areaServed: ["US", "CA", "GB", "AU"],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: vectorFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

        <div className="relative mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14263D]/10 bg-[#14263D]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C94343]">
            <Sparkles className="size-3.5" />
            <span>Hand-drawn vector conversion service</span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#14263D]">
            Vector Artwork Recreation &amp; <br className="hidden sm:inline" />
            Raster-to-Vector Conversion
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Turn blurry JPGs, pixelated PNGs, screenshots, and hand-drawn sketches into clean, scalable vector art. Every logo is redrawn by hand, not auto-traced, and delivered ready for screen printing, vinyl cutting, laser engraving, DTF transfers, embroidery, and large signs. Standard files in 12–24 hours.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#C94343]/25 hover:bg-[#b03535] hover:shadow-xl hover:shadow-[#C94343]/35 transition-all hover:scale-105"
            >
              <span>Get a Free Vector Quote</span>
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
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider font-medium">Hand-drawn paths</p>
            </div>
            <div className="p-3 text-center">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-[#C94343]">Any size</p>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider font-medium">No quality loss</p>
            </div>
            <div className="p-3 text-center">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-[#14263D]">2–4 hr</p>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider font-medium">Rush option</p>
            </div>
            <div className="p-3 text-center">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-[#14263D]">Pantone®</p>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider font-medium">Spot color matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. SIDE-BY-SIDE COMPARISON ─── */}
      <section className="py-20 md:py-28 border-b border-border/80 bg-card/30">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C94343]/10 px-3 py-1 text-xs font-semibold text-[#C94343] uppercase tracking-wider">
              <Eye className="size-3.5" />
              <span>Side-by-side comparison</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D]">
              Low-Resolution Raster vs. Clean Vector Art
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              A raster image is made of pixels, so it turns blurry and jagged when you enlarge it. A vector file is made of lines and curves, so it stays sharp at any size.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/company/vector-separation-showcase.jpg"
                alt="Blurry raster badge next to the same badge redrawn as a sharp vector with spot color layers"
                fill
                sizes="(max-width: 1200px) 100vw, 1152px"
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border bg-card p-6">
              <div className="p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C94343]">Problem: blurry raster</span>
                <p className="mt-2 text-sm text-muted-foreground">
                  Low-resolution JPGs and PNGs blur when they are scaled up. Soft, fuzzy edges ruin screen printing screens and cause vinyl cutters to tear the material.
                </p>
              </div>
              <div className="p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14263D]">Solution: clean vector paths</span>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hand-drawn curves with smooth edges and as few anchor points as possible. Your logo prints sharp whether it is 1 inch wide or 50 feet wide.
                </p>
              </div>
              <div className="p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Production ready</span>
                <p className="mt-2 text-sm text-muted-foreground">
                  Each spot color sits on its own layer, with trapping and solid black film positives ready for press setup when you need them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. COMMERCIAL PRINT STANDARDS ─── */}
      <section className="py-20 md:py-28 border-b border-border/80">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#14263D]/5 px-3 py-1 text-xs font-semibold text-[#14263D] uppercase tracking-wider">
                <Cpu className="size-3.5" />
                <span>Commercial print standards</span>
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D] leading-tight">
                Vector Art Built for Real Print Production
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                We don&apos;t just trace shapes. We prepare print-ready artwork for the machine your shop actually uses, from screen separations to laser cut lines.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C94343]/10 text-xs font-bold text-[#C94343]">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#14263D]">Color-separated film positives</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Clean, solid black film positives for exposing screen printing mesh.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C94343]/10 text-xs font-bold text-[#C94343]">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#14263D]">Hairline cut lines</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Separate cut paths for vinyl plotters, flatbed cutters, and laser machines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C94343]/10 text-xs font-bold text-[#C94343]">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#14263D]">Pantone® spot color chips</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Standard color matching that removes guesswork for your printer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C94343]/10 text-xs font-bold text-[#C94343]">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#14263D]">Wide-format scaling</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      No pixelation on banners, trade show displays, vehicle wraps, and building signs.
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
                    alt="Vector art prepress examples showing film positives, cut lines, Pantone swatches, and large-format vinyl"
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

      {/* ─── 4. SPECIALIZED VECTOR SOLUTIONS (6 CARDS) ─── */}
      <section className="py-20 md:py-28 border-b border-border/80 bg-card/20">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C94343]/10 px-3 py-1 text-xs font-semibold text-[#C94343] uppercase tracking-wider">
              <Zap className="size-3.5" />
              <span>Made for every machine</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D]">
              Vector Art Services for Every Print and Cut Method
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Each production method needs a different kind of vector file. We set up every file for the equipment you will use.
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
                        {proc.tag}
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
                      <span>{proc.buttonText}</span>
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. OUR 4-STEP MANUAL PROCESS ─── */}
      <section className="py-20 md:py-28 border-b border-border/80">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#14263D]/5 px-3 py-1 text-xs font-semibold text-[#14263D] uppercase tracking-wider">
              <ShieldCheck className="size-3.5" />
              <span>No auto-trace shortcuts</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D]">
              How We Convert Your Logo to Vector, Step by Step
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Why print shops and screen printers trust Power Digitizing with artwork that has to print right the first time.
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

      {/* ─── 6. FILE FORMATS (6 CARDS) ─── */}
      <section className="py-20 md:py-28 border-b border-border/80 bg-card/30">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C94343]/10 px-3 py-1 text-xs font-semibold text-[#C94343] uppercase tracking-wider">
              <Download className="size-3.5" />
              <span>Works with your software</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D]">
              Delivered in Every Standard Vector Format
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Every order includes the production files designers, printers, and machine operators need.
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

      {/* ─── 7. FAQ SECTION (8 QUESTIONS) ─── */}
      <section className="py-20 md:py-28 border-b border-border/80 bg-card/20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C94343]/10 px-3 py-1 text-xs font-semibold text-[#C94343] uppercase tracking-wider">
              <FileCheck className="size-3.5" />
              <span>Vector questions</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D]">
              Vector Conversion FAQs
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              What you need to know before sending artwork for print or production.
            </p>
          </div>

          <div className="space-y-4">
            {vectorFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-[#14263D]/30"
              >
                <h3 className="font-display text-base font-bold text-[#14263D] flex items-start gap-2.5">
                  <span className="text-[#C94343] font-bold">Q{idx + 1}:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. CLOSING CALL TO ACTION ─── */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24">
        <div className="relative mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0B1626] via-[#14263D] to-[#0B1626] p-8 text-center text-white shadow-2xl sm:p-12 md:p-16 lg:p-20">
            {/* Ambient lighting */}
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
                <span>Ready to get started?</span>
              </div>

              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Turn your logo into a clean vector file today.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Send your JPG, PNG, PDF, screenshot, or sketch. We&apos;ll redraw it by hand and deliver print-ready AI, EPS, SVG, and PDF files, usually within 12–24 hours.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#C94343]/30 transition-all hover:scale-105 hover:bg-[#b03535] hover:shadow-2xl"
                >
                  <span>Get a Free Vector Quote</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/15"
                >
                  <span>Talk to Our Team</span>
                </Link>
              </div>

              {/* Contact strip */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-xs text-slate-300/80 sm:text-sm">
                <a
                  href="tel:13164441366"
                  className="group flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="size-4 text-[#C94343] transition-transform group-hover:scale-110" />
                  <span>+1 (316) 444-1366</span>
                </a>
                <span className="hidden sm:inline text-white/20">•</span>
                <a
                  href="mailto:design@powerdigitizing.com"
                  className="group flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="size-4 text-[#C94343] transition-transform group-hover:scale-110" />
                  <span>design@powerdigitizing.com</span>
                </a>
                <span className="hidden sm:inline text-white/20">•</span>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-[#C94343]" />
                  <span>2–4 hour rush available</span>
                </div>
                <span className="hidden sm:inline text-white/20">•</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#C94343]" />
                  <span>Free minor revisions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
