import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileCheck,
  Mail,
  Phone,
  Scissors,
  Sparkles,
} from "lucide-react";
import { getSite } from "@/lib/tenant";

export const metadata: Metadata = {
  title: "Embroidery Digitizing Services | Custom Logo Digitizing",
  description:
    "Hand-made embroidery digitizing for logos, caps, 3D puff, jacket backs, and small text. DST, PES, EMB files from $10, with rush in 2–4 hours.",
};

const embroideryTypes = [
  {
    id: "flat",
    title: "Flat Embroidery & Left Chest Logo Digitizing",
    subtitle: "The everyday choice for company and team apparel",
    badge: "Most popular",
    desc: "Carefully sequenced files for left-chest logos, company polos, scrubs, aprons, and button-down shirts. We set satin widths and fill density to prevent puckering on both light polyester dri-fit and heavy cotton twill.",
    highlightsLabel: "What you get:",
    features: [
      "Smart pathing that cuts extra jump stitches and trims",
      "Underlay matched to the fabric (edge walk, zigzag, or tatami)",
      "Push and pull compensation based on the fabric's weave",
      "Tested with 40-weight polyester and rayon thread",
    ],
    image: "/images/embroidery/embroidered-big-rig-patch.webp",
    imageAlt: "Flat commercial embroidery stitch-out sample on twill",
    spec: "Left chest & sleeves · 4,000–12,000 stitches on average",
  },
  {
    id: "3d-puff",
    title: "3D Puff & Cap Digitizing",
    subtitle: "Raised, 3D detail for caps and beanies",
    badge: "Headwear specialist",
    desc: "Made for structured and unstructured 6-panel trucker hats (Richardson 112, Yupoong, Flexfit) and thick knit beanies. We set cutting stitches and dense satin columns that wrap fully around the foam.",
    highlightsLabel: "What you get:",
    features: [
      "Clean perimeter cuts through 2–4 mm foam with no stray fuzz",
      "End caps that close the foam at corners and sharp letters",
      "Underlay that stops the center seam from splitting on structured caps",
      "Center-out sewing order to prevent distortion on cap frames",
    ],
    image: "/images/company/3d-puff-cap.jpg",
    imageAlt: "3D puff embroidery on curved trucker cap front panels",
    spec: "Hat fronts & beanies · High-density foam",
  },
  {
    id: "jacket-back",
    title: "Jacket Back & Large Design Digitizing",
    subtitle: "Large, high-impact designs for outerwear",
    badge: "Large scale",
    desc: "A large 250–350 mm design sewn at one even density turns the garment stiff as cardboard and pulls it out of shape. We step the density down across the design and plan the thread path so the jacket stays soft and flat.",
    highlightsLabel: "What you get:",
    features: [
      "Graded density that keeps the garment flexible",
      "Underlay in zones so fabric doesn't shift during 60,000+ stitch runs",
      "Set up for denim, leather vests, satin bomber jackets, and hoodies",
      "Shorter machine run times through planned thread travel",
    ],
    image: "/images/company/jacket-back-embroidery.jpg",
    imageAlt: "Detailed jacket back embroidery on leather and denim",
    spec: "Jackets, gis & biker vests · Hoops up to 380 × 480 mm",
  },
  {
    id: "micro-lettering",
    title: "Small Lettering & Fine Detail Digitizing (Down to 3 mm)",
    subtitle: "Readable names, certifications, and tiny text",
    badge: "Small text specialist",
    desc: "Text under 5 mm is where auto-digitizing software fails, leaving thread nests and needle holes. We digitize small lettering by hand with center-run underlay, adjusted satin compensation, and careful needle spacing.",
    highlightsLabel: "What you get:",
    features: [
      "Readable letters down to 3 mm (0.12 inch) without thread clumping",
      "Made for medical scrubs, name tapes, certifications, and fine print",
      "Set up for standard 75/11 needles and fine 65/9 needles with 60-weight thread",
      "Open letter shapes so holes in \"a\", \"e\", and \"o\" don't close up",
    ],
    image: "/images/embroidery/solar-construction-embroidered-patch.webp",
    imageAlt: "Micro lettering embroidery sample showing crisp small text",
    spec: "Name tapes & scrubs · Clear letters from 3 to 6 mm",
  },
  {
    id: "applique",
    title: "Appliqué & Tackle Twill Digitizing",
    subtitle: "Team and college wear with cut fabric layers",
    badge: "Sports & teams",
    desc: "Combines cut fabric pieces with embroidery stitches to cover large areas with less thread. A good fit for hockey sweaters, baseball jerseys, Greek letters, and varsity streetwear.",
    highlightsLabel: "What you get:",
    features: [
      "Clear 3-step sequence: placement line, tack-down, and satin cover stitch",
      "Machine stops built in so the operator can place fabric easily",
      "Works with laser cutters and pre-cut twill kits",
      "Zigzag underlay that stops fabric edges from fraying",
    ],
    image: "/images/chenille/37612dd6-9e4f-40a9-b1d8-f6fe661351c7.webp",
    imageAlt: "Collegiate appliqué and tackle twill embroidery sample",
    spec: "Jerseys & hoodies · 2-layer and 3-layer twill",
  },
  {
    id: "chenille",
    title: "Chenille & Chainstitch Digitizing",
    subtitle: "Classic loop stitching for letterman jackets and merch",
    badge: "Varsity style",
    desc: "Chenille makes a soft, towel-like loop texture with special hooked needles. Our digitizers plan loop height, chainstitch borders, and loop direction for bold varsity letters and streetwear emblems.",
    highlightsLabel: "What you get:",
    features: [
      "Loop fills with locked chainstitch borders",
      "Set up for wool letterman jackets, hoodies, and felt banners",
      "Spacing that keeps loops full, with no flat or bald spots",
      "Felt border offsets for clean scissor or laser trimming",
    ],
    image: "/images/chenille/e6bccd47-4ef4-43dc-8a52-45cce1076f13.webp",
    imageAlt: "Vintage chenille varsity embroidery with felt border",
    spec: "Letterman & streetwear · Loop and chainstitch ready",
  },
];

const machineFormats = [
  { ext: ".DST", brand: "Tajima / universal", use: "The standard commercial file format, read by most commercial embroidery machines." },
  { ext: ".EMB", brand: "Wilcom master file", use: "The editable master file, with outlines, density, and stitch angles, for future changes." },
  { ext: ".PES", brand: "Brother / Baby Lock", use: "For Brother and Baby Lock home and multi-needle machines (PR600, PR1050X, Persona)." },
  { ext: ".EXP", brand: "Melco / Bernina", use: "For Melco commercial machines and Bernina machines." },
  { ext: ".DSB", brand: "Barudan", use: "Barudan machine format with set jump and trim commands." },
  { ext: ".JEF", brand: "Janome", use: "For Janome and Elna embroidery machines." },
];

const fabricGuide = [
  { label: "Piqué polos & knit tees", formula: "A heavier tatami underlay bridges the open knit so stitches don't sink into the fabric." },
  { label: "Structured 6-panel hats", formula: "Center-out sewing with extra push compensation to bridge the center seam of the crown." },
  { label: "Performance dri-fit & Lycra", formula: "Lighter density and stretch-stabilizing outline runs so the fabric doesn't pucker." },
  { label: "Canvas, denim & leather", formula: "Light underlay and careful needle spacing so leather isn't perforated." },
];

const embroideryFaqs = [
  {
    q: "What is embroidery digitizing?",
    a: "Embroidery digitizing is turning a logo or artwork into a stitch file that an embroidery machine can read. A digitizer decides the stitch type, direction, density, and sewing order, then saves the file in a format such as DST or PES.",
  },
  {
    q: "How much does embroidery digitizing cost?",
    a: "At Power Digitizing, embroidery digitizing starts at $10 per file. The final price depends on the design's size, detail, and stitch count. You get a free quote before you pay.",
  },
  {
    q: "How long does embroidery digitizing take?",
    a: "Most files are delivered within 12–24 hours. Rush digitizing in 2–4 hours is available for urgent orders.",
  },
  {
    q: "Which embroidery file format do I need?",
    a: "Use DST for Tajima and most commercial machines, PES for Brother and Baby Lock, EXP for Melco and Bernina, DSB for Barudan, and JEF for Janome. We also include the editable EMB master file.",
  },
  {
    q: "Can you digitize a logo for a hat?",
    a: "Yes. We digitize logos for structured and unstructured caps, including 3D puff embroidery, with a center-out sewing order that keeps the design straight on curved cap frames.",
  },
];

export default async function EmbroideryPage() {
  const site = await getSite();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Custom Embroidery Digitizing Services",
      serviceType: "Embroidery Digitizing",
      provider: {
        "@type": "Organization",
        name: site.name,
        url: "https://powerdigitizing.com",
      },
      description:
        "Hand-made embroidery digitizing for logos, caps, 3D puff, jacket backs, and small text. DST, PES, EMB files from $10, with rush in 2–4 hours.",
      areaServed: ["US", "CA", "GB", "AU"],
      offers: {
        "@type": "Offer",
        price: "10.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: embroideryFaqs.map((faq) => ({
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
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border/80 bg-gradient-to-b from-background via-slate-50/40 to-background">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-[#14263D]/5 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute top-1/4 -right-24 size-80 rounded-full bg-[#C94343]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14263D]/10 bg-[#14263D]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C94343]">
            <Scissors className="size-3.5" />
            <span>Commercial embroidery digitizing services</span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#14263D] leading-[1.12]">
            Custom Embroidery Digitizing <br className="hidden sm:inline" />
            For Every Garment &amp; Stitch Style
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            We turn your logo into a machine-ready embroidery file that sews out clean the first time. Every design is digitized by hand by experienced digitizers, from 3D puff hats and small lettering down to 3 mm, to full jacket backs and chenille varsity letters. Files start at $10 and ship in DST, PES, EMB, EXP, DSB, and JEF.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C94343]/25 hover:bg-[#b03535] hover:shadow-xl hover:shadow-[#C94343]/35 transition-all hover:scale-105"
            >
              <span>Get a Free Stitch Quote &amp; Proof</span>
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
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#14263D]">2–4 hours</div>
              <div className="text-xs text-muted-foreground mt-0.5">Rush turnaround</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#14263D]">3 mm min</div>
              <div className="text-xs text-muted-foreground mt-0.5">Readable small lettering</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#14263D]">100% free</div>
              <div className="text-xs text-muted-foreground mt-0.5">Stitch edits until it runs right</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#14263D]">Sew-out tested</div>
              <div className="text-xs text-muted-foreground mt-0.5">Before files are delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. STITCH TYPES (6 CARDS) ─── */}
      <section id="stitch-types" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
              Every embroidery style
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#14263D]">
              All Types of Embroidery Digitizing, Set Up for Your Garment
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Every fabric moves differently under the needle. A file made for a piqué polo will pucker on a performance jacket, so we digitize each design for the garment it will be sewn on.
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
                        Type {String(idx + 1).padStart(2, "0")}: {item.subtitle}
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#14263D] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="pt-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#14263D] font-bold mb-3">
                          {item.highlightsLabel}
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
                          <span>Get a Free Proof for This Style</span>
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

      {/* ─── 3. MACHINE FILE FORMATS (6 CARDS) ─── */}
      <section className="py-20 md:py-28 bg-slate-50/70 border-t border-b border-border/80">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
              Works with your machine
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#14263D]">
              Embroidery File Formats for Every Machine
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every order includes your machine file plus the editable master file, with a printable color run sheet and stop sequence.
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

      {/* ─── 4. FABRIC GUIDE & PRODUCTION SHEET / PRICING ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Section 4: Fabric Guide */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
                Why fabric matters
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#14263D]">
                Why Cheap Embroidery Files Pucker and Break Thread
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Thousands of stitches pull the fabric together. Without compensation, round logos turn oval, gaps open between borders, and cap seams break needles. Here is how we set files up for each fabric.
              </p>
              <div className="space-y-3 pt-2">
                {fabricGuide.map((item) => (
                  <div key={item.label} className="border-l-2 border-[#C94343] pl-4 py-1">
                    <h4 className="text-sm font-semibold text-[#14263D]">{item.label}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.formula}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sections 5 & 6: Production Sheet & Pricing */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-white/10 bg-[#0B1626] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
                <div aria-hidden className="absolute -top-20 -right-20 size-60 rounded-full bg-[#C94343]/15 blur-3xl" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
                  Sample production sheet
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">
                  Included With Every Digitizing Order
                </h3>
                <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#C94343]" />
                    <span>Total stitch count and estimated run time in minutes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#C94343]" />
                    <span>Needle stops and color sequence with Madeira thread colors</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#C94343]" />
                    <span>Recommended machine speed (RPM) for your fabric</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#C94343]" />
                    <span>Hoop size advice to prevent frame distortion</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-[#C94343]" />
                    <span>High-resolution stitch preview image (PNG)</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Simple pricing</div>
                    <div className="text-xl font-bold text-white">From $10 / file</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Free quote and stitch preview before you pay.</div>
                  </div>
                  <Link
                    href="/quote"
                    className="rounded-full bg-[#C94343] px-6 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-[#b03535] transition-all hover:scale-105"
                  >
                    Upload Your Design
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. FREQUENTLY ASKED QUESTIONS ─── */}
      <section className="py-20 md:py-28 border-t border-border/80 bg-card/20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C94343]/10 px-3 py-1 text-xs font-semibold text-[#C94343] uppercase tracking-wider">
              <FileCheck className="size-3.5" />
              <span>Expert Knowledge</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-[#14263D]">
              Frequently Asked Embroidery Questions
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Everything you need to know about commercial embroidery digitizing files and machine setup.
            </p>
          </div>

          <div className="space-y-4">
            {embroideryFaqs.map((faq, idx) => (
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

      {/* ─── 6. CLOSING CALL TO ACTION ─── */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 border-t border-border/80">
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
                Get your logo digitized for embroidery today.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Send your logo, sketch, or old file. Our digitizers will turn it into a clean, sew-out tested embroidery file in the format your machine uses, with a free stitch preview and quote first.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#C94343]/30 transition-all hover:scale-105 hover:bg-[#b03535] hover:shadow-2xl"
                >
                  <span>Get a Free Digitizing Quote</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/15"
                >
                  <span>Talk to a Digitizer</span>
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
                  <span>Free stitch edits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
