"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Phone,
  Mail,
  CheckCircle2,
  FileCheck2,
  Sliders,
  Clock,
  Layers,
  Cpu,
  Palette,
  FileCode2,
} from "lucide-react";

export function CompanyClient() {
  const [openAccordion1, setOpenAccordion1] = useState<number | null>(0);
  const [openAccordion2, setOpenAccordion2] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Accordion 1: Digitizing Disciplines & Placements
  const placementDisciplines = [
    {
      title: "Left Chest & Corporate Logo Digitizing",
      tag: "STANDARD APPAREL",
      content:
        "The staple of corporate apparel and uniform programs. Left chest digitizing demands strict stitch discipline to avoid puckering on lightweight piqué polos, cotton tees, and performance knits. We calculate custom pull compensation matrices, balance tatami and satin stitch density, and keep underlay lightweight so the garment drapes naturally without feeling stiff like cardboard.",
    },
    {
      title: "Structured Cap & Hat Digitizing (270° Curved Frames)",
      tag: "HEADWEAR SPECIALTY",
      content:
        "Caps are rigid and curved, presenting the highest risk of needle deflection, registration drift, and seam bunching. We program our toolpaths to run strictly from the center outward and from the bottom upward. When crossing thick center seams, we add reinforcing underlay bridges and adjust needle velocity to prevent broken needles and distorted lettering.",
    },
    {
      title: "High-Density 3D Puff & Raised Foam Digitizing",
      tag: "DIMENSIONAL STITCH",
      content:
        "3D puff creates bold, tactile depth for premium streetwear and team hats. We program double-density satin stitches wrapping over 3mm to 5mm EVA craft foam. Our digitizers apply closed cap capping at every column end, perforated needle cuts to cleanly sever the foam, and bevel corner trims to eliminate unsightly foam peek-through.",
    },
    {
      title: "Jacket Back & Large-Format Tapestry Digitizing",
      tag: "LARGE FIELD",
      content:
        "Managing massive stitch fields up to 450x450mm with 50,000 to 120,000+ stitches requires rigorous sequencing. We divide artwork into synchronized quadrants that sew from the inside out, stabilizing the heavy denim, leather, or fleece fabric gradually to prevent push-pull distortion over multi-hour production runs.",
    },
    {
      title: "Appliqué & Specialty Chenille Digitizing",
      tag: "MIXED MEDIA",
      content:
        "For varsity letterman jackets, cheer uniforms, and oversized emblems. We program accurate running placement lines for fabric positioning, tack-down walk stitches to anchor the twill or felt, and clean zigzag or dense satin cover borders that conceal raw fabric edges seamlessly.",
    },
    {
      title: "Micro-Lettering & Ultra-Fine Typography (Sub-4mm)",
      tag: "HIGH PRECISION",
      content:
        "Small lettering on scrubs, security badges, and company nametags is the true test of a master digitizer. We calibrate single-run center underlays, expand letter kerning, and optimize for 60-weight thread and 65/9 needles, ensuring letters as small as 3.5mm sew out razor-sharp and legible.",
    },
  ];

  // Accordion 2: Engineering Workflow & File Standards
  const engineeringWorkflow = [
    {
      title: "Universal Commercial Machine File Formats (.DST, .PES, .EMB, .EXP)",
      content:
        "Every completed file is formatted for instant loading into your commercial or industrial machine console. We output Tajima (.DST), Wilcom (.EMB), Melco (.EXP), Brother/Baby Lock (.PES), Barudan (.DAT), Husqvarna (.HUS), Janome (.JEF), and Singer (.XXX). Native editable source files (.EMB) are provided upon request.",
    },
    {
      title: "Comprehensive Production PDF Run Sheets",
      content:
        "Eliminate operator guesswork on the shop floor. Every digitizing order includes a detailed production proof sheet showing exact stitch count, dimensions in inches and millimeters, color stop sequence, needle assignments, recommended thread weights, and thread brand color matching (Madeira, Robison-Anton, Isacord).",
    },
    {
      title: "100% Free Minor Revisions & Sew-Out Guarantee",
      content:
        "If a file puckers on your specific fabric, needs a minor size adjustment, or requires a thread density tweak for a specialized garment, we revise it at zero additional cost. We partner with you until your machine runs smoothly without thread breaks.",
    },
    {
      title: "Fast Standard (12–24h) & Rush (2–4h) Turnaround",
      content:
        "We know apparel production runs on tight customer deadlines. Our distributed digitizing lab operates around the clock. Standard orders are delivered in 12 to 24 hours, and emergency rush digitizing is available in as little as 2 to 4 hours.",
    },
  ];

  // FAQ Items
  const faqItems = [
    {
      q: "What file formats can I submit for digitizing and vector conversion?",
      a: "We accept virtually all digital graphic formats including JPG, PNG, PDF, AI, EPS, SVG, PSD, TIFF, and even clear smartphone photos or hand-drawn sketches. Our vector artists clean up low-resolution art before punching.",
    },
    {
      q: "What embroidery machine formats do you provide?",
      a: "We provide all major industrial and home formats: Tajima (.DST), Melco (.EXP), Brother (.PES), Wilcom (.EMB), Barudan (.DAT), Janome (.JEF), Husqvarna (.HUS), and ZSK. If your machine requires a specific extension, we will supply it.",
    },
    {
      q: "Do you charge extra for complex stitch counts or small edits?",
      a: "No hidden fees. Standard left chest and cap designs have straightforward flat pricing with no stitch count limits. Minor revisions, thread color swaps, and small size adjustments within 15% are completely free of charge.",
    },
    {
      q: "How do you ensure files won't pucker or break threads?",
      a: "Unlike automated software that blindly places stitches, our manual digitizers tailor the underlay lattice, pull compensation, stitch direction, and density specifically to the fabric type you specify (piqué, fleece, twill, performance knit, caps, etc.).",
    },
    {
      q: "Can you convert raster logos into clean vector art for printing?",
      a: "Yes! In addition to embroidery digitizing, we offer complete raster-to-vector artwork recreation. We provide clean, scalable AI, EPS, SVG, and PDF files with spot color separations suitable for screen printing, direct-to-film (DTF), and vinyl cutting.",
    },
    {
      q: "Do you manufacture physical custom patches as well?",
      a: "Yes. Power Digitizing manufactures complete physical patches including custom embroidered patches, PVC/rubber tactical patches, varsity chenille, genuine/faux leather patches, woven labels, and sublimated patches with worldwide tracked shipping.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCF9] text-[#1E1E1E] selection:bg-[#1E1E1E] selection:text-white font-sans">
      {/* ─── 1. HERO SECTION (Tonellidesign Minimalist Editorial Theme) ─── */}
      <section className="relative px-6 pt-24 pb-20 md:px-12 md:pt-28 lg:pt-32 md:pb-28 lg:px-20 max-w-[1440px] mx-auto border-b border-[#EAE8E2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Vision Headline & Inset Showcase */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-normal leading-[1.04] tracking-[-0.03em] text-[#1A1A1A]">
                Vision in Purpose and <br />
                Beauty of <span className="font-bold tracking-tight">Power Digitizing</span>
              </h1>

              <p className="mt-8 max-w-xl text-base sm:text-lg text-[#5F5D58] leading-relaxed font-light">
                Where computational stitch geometry, manual punching artistry, and master vector engineering converge. We develop machine-ready embroidery files, G-code toolpaths, and production-grade vector assets for contract decorators, uniform manufacturers, and global fashion brands.
              </p>
            </div>

            {/* Inset Offset Showcase Card (Real 3D Puff Embroidery Photo) */}
            <div className="mt-12 pt-8 border-t border-[#EAE8E2]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="relative w-48 h-36 rounded-lg overflow-hidden border border-[#E0DDD5] shadow-sm shrink-0 bg-[#F4F3EE]">
                  <Image
                    src="/images/company/3d-puff-cap.jpg"
                    alt="Extreme macro close-up of 3D puff embroidery on structured cap"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#8A8780] block">
                    SPECIMEN • 3D PUFF HIGH-RELIEF FOAM EMBROIDERY
                  </span>
                  <p className="text-xs sm:text-sm text-[#4A4844] leading-relaxed max-w-md">
                    Engineered cap capping, perforated trims, and double satin density to lock 3mm–5mm EVA foam securely with zero foam show-through.
                  </p>
                  <div className="flex items-center gap-4 pt-1">
                    <Link
                      href="/quote"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1A1A] underline underline-offset-4 hover:text-[#DA2C46] transition-colors"
                    >
                      <span>Request Free Digital Proof</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Embroidery Machine in Action */}
          <div className="lg:col-span-5 flex flex-col items-end">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#E0DDD5] shadow-md bg-[#F4F3EE]">
              <Image
                src="/images/company/machine-macro.jpg"
                alt="Commercial high-speed Tajima multi-head embroidery machine sewing custom embroidery"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono tracking-wider flex items-center justify-between">
                <span>TAJIMA • BARUDAN • BROTHER</span>
                <span>ISO 9001 COMPLIANT</span>
              </div>
            </div>
            <div className="mt-4 text-right">
              <p className="text-[11px] font-mono tracking-wider text-[#8A8780] uppercase">
                FIG 1.0 — MULTI-HEAD COMMERCIAL PRODUCTION STITCH-OUT
              </p>
            </div>
          </div>
        </div>

        {/* ─── 2. KEY STATS / METRICS (Tonellidesign 4-column format) ─── */}
        <div className="mt-20 pt-10 border-t border-[#EAE8E2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="space-y-2">
            <div className="font-display text-4xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight">
              15<span className="text-[#DA2C46] font-normal">+</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold">
              Years of Master Digitizing
            </div>
            <p className="text-xs text-[#6B6963] leading-relaxed">
              Founded in 2010. Dedicated manual punching and vector conversion without automated software shortcuts.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="space-y-2 border-t sm:border-t-0 sm:border-l border-[#EAE8E2] pt-6 sm:pt-0 sm:pl-6">
            <div className="font-display text-4xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight">
              250K<span className="text-[#DA2C46] font-normal">+</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold">
              Production Runs Perfected
            </div>
            <p className="text-xs text-[#6B6963] leading-relaxed">
              Flawlessly sewn across commercial Tajima, Barudan, Brother, and Ricoma setups worldwide.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="space-y-2 border-t lg:border-t-0 lg:border-l border-[#EAE8E2] pt-6 lg:pt-0 lg:pl-6">
            <div className="font-display text-4xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight">
              2–4<span className="text-[#DA2C46] font-normal">h</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold">
              Rush Turnaround Option
            </div>
            <p className="text-xs text-[#6B6963] leading-relaxed">
              Standard 12–24h turnaround, with expedited same-day emergency files delivered in 2–4 hours.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="space-y-2 border-t lg:border-t-0 lg:border-l border-[#EAE8E2] pt-6 lg:pt-0 lg:pl-6">
            <div className="font-display text-4xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight">
              100<span className="text-[#DA2C46] font-normal">%</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold">
              Zero-Pucker Sew-Out Guarantee
            </div>
            <p className="text-xs text-[#6B6963] leading-relaxed">
              Free unlimited minor revisions until your stitch-out runs without thread breaks or distortions.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3. SECTION [ 01 ]: FOUNDING VISION & HUMAN PUNCHING (from powerdigitizing.com) ─── */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 max-w-[1440px] mx-auto border-b border-[#EAE8E2]">
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-[#8A8780] pb-6 mb-12 border-b border-[#EAE8E2]">
          <span>[ 01 ] OUR STORY & PHILOSOPHY</span>
          <span>HUMAN ARTISTRY OVER AUTOMATION</span>
        </div>

        {/* Centered Large Philosophy Statement */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal leading-snug tracking-tight text-[#1A1A1A]">
            At Power Digitizing, we believe great embroidery is born from human craftsmanship — where every stitch node is punched with deliberate intention.
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#686660] leading-relaxed font-light">
            Power Digitizing was founded by digital embroiderers and vector artists who transitioned away from traditional corporate paths to pursue their passion for embroidery technology. We reject one-click auto-digitizing software that wrecks stitch density, snaps needle bars, and distorts cap seams. Every single file we deliver is manually digitized, proofed, and calibrated for production.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:text-[#DA2C46] hover:border-[#DA2C46] transition-colors"
            >
              <span>Submit Artwork for Free Evaluation</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
            <a
              href="tel:+13164441366"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#686660] hover:text-[#1A1A1A] transition-colors"
            >
              <Phone className="size-3 text-[#DA2C46]" />
              <span>Direct Inquiries: +1 (316) 444-1366</span>
            </a>
          </div>
        </div>

        {/* Asymmetrical Gallery Composition: Digitizer Workspace & Patches Collection */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* Left: Digitizer CAD Workspace */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#E0DDD5] shadow-sm bg-[#F4F3EE]">
              <Image
                src="/images/company/digitizing-cad.jpg"
                alt="Digitizer workspace with vector nodes, stitch angles, and thread color books"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-[11px] font-mono text-[#8A8780] uppercase tracking-wider">
              FIG 1.1 — MANUAL VECTOR PUNCHING & ANGLE CALIBRATION
            </p>
          </div>

          {/* Right: Curated Patches Collection Flatlay */}
          <div className="md:col-span-7">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#E0DDD5] shadow-md bg-[#F4F3EE]">
              <Image
                src="/images/company/custom-patches-collection.jpg"
                alt="Curated flatlay of embroidered, PVC, and chenille patches on workshop table"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#8A8780] uppercase tracking-wider">
              <span>FIG 1.2 — PHYSICAL PATCH MANUFACTURING ARCHIVE</span>
              <span>EMBROIDERED • PVC • CHENILLE • LEATHER</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. SECTION [ 02 ]: DIGITIZING DISCIPLINES & PLACEMENTS (Interactive Accordion 1) ─── */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 max-w-[1440px] mx-auto border-b border-[#EAE8E2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Interactive Accordion */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8A8780] block">
                [ 02 ] DIGITIZING PLACEMENTS & SPECIALTIES
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1A1A] leading-tight">
                Tailored toolpaths engineered for every garment placement and machine hooping.
              </h3>
              <p className="text-sm text-[#686660] leading-relaxed">
                A left chest logo on a performance polo requires an entirely different stitch architecture than a 3D puff cap or a full-back denim jacket. Explore our specialized placement disciplines:
              </p>
            </div>

            {/* Interactive Accordion List */}
            <div className="divide-y divide-[#EAE8E2] border-t border-b border-[#EAE8E2]">
              {placementDisciplines.map((item, idx) => {
                const isOpen = openAccordion1 === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenAccordion1(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <div className="space-y-1 pr-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#DA2C46] block font-semibold">
                          {item.tag}
                        </span>
                        <span className="text-sm sm:text-base font-medium text-[#1A1A1A] group-hover:text-[#DA2C46] transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <span className="shrink-0 size-6 rounded-full border border-[#D5D2CA] flex items-center justify-center text-[#555] group-hover:border-[#1A1A1A] transition-colors">
                        {isOpen ? <Minus className="size-3" /> : <Plus className="size-3" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mt-4 pr-6 text-xs sm:text-sm text-[#66645E] leading-relaxed animate-in fade-in duration-200">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Arched Window Showcase Container with Jacket Back Artwork */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-t-[10rem] rounded-b-xl overflow-hidden border border-[#E0DDD5] shadow-lg bg-[#F4F3EE]">
              <Image
                src="/images/company/jacket-back-embroidery.jpg"
                alt="Large-format custom embroidered jacket back featuring rich eagle crest"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center space-y-1">
              <p className="text-[11px] font-mono uppercase tracking-widest text-[#8A8780]">
                FIG 2.0 — HIGH-DENSITY JACKET BACK (75,000+ STITCHES)
              </p>
              <p className="text-xs text-[#6B6963]">
                Calibrated for Barudan, Tajima, Brother, SWF, Melco, and Ricoma multi-head setups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. SECTION [ 03 ]: THE CRAFT STUDY — FABRIC PHYSICS & UNDERLAY LATTICE ─── */}
      <section className="px-6 py-12 md:px-12 md:py-16 lg:px-20 max-w-[1440px] mx-auto">
        <div className="rounded-2xl bg-[#F4F2EC] border border-[#E4E1D8] p-8 sm:p-12 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Italic Editorial Statement & Fabric Physics Specs */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#7C7A73] block">
                  CRAFT STUDY • FABRIC DYNAMICS & PULL-COMPENSATION
                </span>
                <blockquote className="font-display text-2xl sm:text-3xl text-[#1A1A1A] leading-snug font-normal italic">
                  “The true luxury in embroidery lies in the unseen details — the density calibration that prevents thread breaks, and the contour underlay that supports razor-sharp edges.”
                </blockquote>
              </div>

              {/* Specific Fabric Breakdown */}
              <div className="space-y-3.5 pt-2">
                {[
                  { fabric: "Piqué Polo Knits", desc: "Perpendicular tatami underlay to bridge waffle valleys without sinking." },
                  { fabric: "Performance & Dri-Fit", desc: "Lightened density and flexible edge walks to avoid needle cuts and holes." },
                  { fabric: "6-Panel Structured Caps", desc: "Center-out pathing with +0.40mm pull comp to neutralize seam tension." },
                  { fabric: "Fleece & Heavy Outerwear", desc: "Dense lattice mesh to prevent high-pile fibers from poking through satin bars." },
                  { fabric: "Heavy Twill & Denim", desc: "Firm contour anchors with high-tension compensation for bold letterforms." },
                ].map((spec, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#44423E]">
                    <span className="size-1.5 rounded-full bg-[#DA2C46] mt-2 shrink-0" />
                    <div>
                      <strong className="text-[#1A1A1A] font-semibold">{spec.fabric}: </strong>
                      <span className="text-[#66645E]">{spec.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] text-white px-7 py-3 text-xs font-semibold tracking-wider uppercase transition-transform hover:-translate-y-0.5 hover:bg-[#333]"
                >
                  <span>Request Atelier Proof</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <a
                  href="tel:+13164441366"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A1A1A] underline underline-offset-4 hover:text-[#DA2C46] transition-colors"
                >
                  <Phone className="size-3.5" />
                  <span>Call +1 (316) 444-1366</span>
                </a>
              </div>
            </div>

            {/* Right Column: Split Screen Vector Conversion Visual */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#DDD9CE] shadow-md bg-white">
                <Image
                  src="/images/company/vector-conversion.jpg"
                  alt="Side by side pencil sketch converting into crisp vector graphic with bezier nodes and Pantone swatches"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#7C7A73] uppercase tracking-wider">
                <span>SKETCH TO CLEAN BÉZIER VECTOR ART</span>
                <span>PANTONE PMS COLOR MATCHING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. SECTION [ 04 ]: RASTER-TO-VECTOR ARTWORK CONVERSION (from powerdigitizing.com) ─── */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 max-w-[1440px] mx-auto border-t border-b border-[#EAE8E2]">
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-[#8A8780] pb-6 mb-12 border-b border-[#EAE8E2]">
          <span>[ 04 ] VECTOR ART RECREATION</span>
          <span>RASTER-TO-VECTOR PERFECTION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
              Flawless vector conversions ready for screen print, vinyl, and laser cutting.
            </h2>
            <p className="text-sm sm:text-base text-[#686660] leading-relaxed font-light">
              Blurry JPEGs, pixelated phone photos, and scans will ruin both print and embroidery. Our professional graphic illustrators manually trace your artwork node-by-node in Adobe Illustrator, cleaning up rough edges, smoothing curves, and separating colors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-[#EAE8E2] bg-white space-y-1">
                <Palette className="size-4 text-[#DA2C46]" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A]">Pantone Matching</h4>
                <p className="text-xs text-[#6B6963]">Exact PMS color codes assigned for consistent ink and thread reproduction.</p>
              </div>
              <div className="p-4 rounded-xl border border-[#EAE8E2] bg-white space-y-1">
                <FileCode2 className="size-4 text-[#DA2C46]" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A]">Multi-Format Delivery</h4>
                <p className="text-xs text-[#6B6963]">Scalable AI, EPS, SVG, CDR, and high-res PDF ready for any printer.</p>
              </div>
              <div className="p-4 rounded-xl border border-[#EAE8E2] bg-white space-y-1">
                <Layers className="size-4 text-[#DA2C46]" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A]">Color Separations</h4>
                <p className="text-xs text-[#6B6963]">Clean layers and underbase traps configured for screen printing & DTF.</p>
              </div>
              <div className="p-4 rounded-xl border border-[#EAE8E2] bg-white space-y-1">
                <Clock className="size-4 text-[#DA2C46]" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A]">Rapid 12–24h Delivery</h4>
                <p className="text-xs text-[#6B6963]">Same-day vector delivery so your print presses never sit idle.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#E0DDD5] shadow-md bg-white">
              <Image
                src="/images/company/vector-conversion.jpg"
                alt="Detailed vector illustration artwork node conversion"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-[#8A8780] uppercase">
              <span>MANUAL NODE PLACEMENT • NO AUTO-TRACE ARTIFACTS</span>
              <span>100% SCALE INDEPENDENT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. SECTION [ 05 ]: FULL CUSTOM PATCH MANUFACTURING RANGE (from powerdigitizing.com) ─── */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 max-w-[1440px] mx-auto border-b border-[#EAE8E2]">
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-[#8A8780] pb-6 mb-12 border-b border-[#EAE8E2]">
          <span>[ 05 ] PHYSICAL PATCH PRODUCTION</span>
          <span>END-TO-END APPAREL EMBLEMS</span>
        </div>

        <div className="max-w-3xl space-y-4 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1A1A]">
            Complete custom patch manufacturing from digital proof to delivered merchandise.
          </h2>
          <p className="text-sm sm:text-base text-[#686660] leading-relaxed">
            In addition to standalone digitizing files, Power Digitizing engineers and manufactures physical custom patches with iron-on, velcro, and sew-on backings for uniforms, hats, and merchandise:
          </p>
        </div>

        {/* 6-Grid Patch Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Custom Embroidered Patches",
              tag: "TIMELESS CLASSIC",
              desc: "100%, 75%, or 50% twill coverage with merrowed or laser-cut borders. Ideal for uniforms, scouts, law enforcement, and clubs.",
              image: "/images/american-patches/embroidered.jpg",
            },
            {
              title: "Custom PVC & Rubber Patches",
              tag: "TACTICAL & WATERPROOF",
              desc: "Durable, waterproof soft PVC rubber with 2D or 3D sculpted relief. Built for military, outdoor gear, and tactical velcro applications.",
              image: "/images/american-patches/pvc.jpg",
            },
            {
              title: "Chenille Varsity Patches",
              tag: "LETTERMAN & RETRO",
              desc: "Plush, fuzzy yarn loops anchored to heavy felt. Iconic for high school letterman jackets, hoodies, and streetwear fashion.",
              image: "/images/american-patches/chenille.jpg",
            },
            {
              title: "Leather & Faux Leather Patches",
              tag: "RUGGED LUXURY",
              desc: "Laser-engraved, debossed, or foiled genuine and PU leather. The gold standard for premium trucker hats and beanies.",
              image: "/images/american-patches/leather.jpg",
            },
            {
              title: "Woven Emblem Patches",
              tag: "ULTRA-FINE DETAIL",
              desc: "Tightly woven micro-threads that capture fine serif text and photographic details that standard embroidery cannot replicate.",
              image: "/images/american-patches/woven.jpg",
            },
            {
              title: "Sublimated Printed Patches",
              tag: "FULL COLOR GRADIENTS",
              desc: "Vibrant dye-sublimation on twill, capturing photographic realism and gradients, framed by a classic merrowed stitch border.",
              image: "/images/american-patches/sublimated.jpg",
            },
          ].map((patch, i) => (
            <div key={i} className="group rounded-2xl border border-[#EAE8E2] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] w-full bg-[#F4F3EE] overflow-hidden">
                <Image
                  src={patch.image}
                  alt={patch.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#DA2C46] font-semibold block">
                  {patch.tag}
                </span>
                <h4 className="font-display text-lg font-semibold text-[#1A1A1A]">{patch.title}</h4>
                <p className="text-xs text-[#6B6963] leading-relaxed">{patch.desc}</p>
                <div className="pt-3 border-t border-[#F0EEE8] flex items-center justify-between text-xs font-semibold text-[#1A1A1A]">
                  <Link href="/quote" className="inline-flex items-center gap-1 hover:text-[#DA2C46] transition-colors">
                    <span>Order Patches</span>
                    <ArrowRight className="size-3" />
                  </Link>
                  <span className="text-[11px] text-[#999] font-mono">NO MINIMUMS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 8. SECTION [ 06 ]: UNIVERSAL MACHINE FORMATS & WORKFLOW (Accordion 2) ─── */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 max-w-[1440px] mx-auto border-b border-[#EAE8E2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8A8780] block">
              [ 06 ] QUALITY CONTROL & FILE PIPELINE
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1A1A] leading-tight">
              Commercial-grade file delivery with zero operator ambiguity.
            </h3>
            <p className="text-sm text-[#686660] leading-relaxed">
              Every design is punched, verified in stitch-simulation software, and reviewed by a senior quality controller before dispatch.
            </p>

            <div className="p-6 rounded-2xl bg-[#F7F6F1] border border-[#E8E6DF] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A]">
                <Cpu className="size-4 text-[#DA2C46]" />
                <span>Compatible Machine Ecosystem</span>
              </div>
              <p className="text-xs text-[#6B6963] leading-relaxed">
                Tajima, Barudan, Brother, SWF, Melco, Ricoma, HappyJapan, Toyota, ZSK, Janome, Husqvarna, Bernina, Pfaff, Singer.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="divide-y divide-[#EAE8E2] border-t border-b border-[#EAE8E2]">
              {engineeringWorkflow.map((item, idx) => {
                const isOpen = openAccordion2 === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenAccordion2(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <span className="text-sm sm:text-base font-medium text-[#1A1A1A] group-hover:text-[#DA2C46] transition-colors pr-4">
                        {item.title}
                      </span>
                      <span className="shrink-0 size-6 rounded-full border border-[#D5D2CA] flex items-center justify-center text-[#555] group-hover:border-[#1A1A1A] transition-colors">
                        {isOpen ? <Minus className="size-3" /> : <Plus className="size-3" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mt-4 pr-6 text-xs sm:text-sm text-[#66645E] leading-relaxed animate-in fade-in duration-200">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. SECTION [ 07 ]: DIGITIZING & PATCH FAQS ─── */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 max-w-[1440px] mx-auto border-b border-[#EAE8E2]">
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-[#8A8780] pb-6 mb-12 border-b border-[#EAE8E2]">
          <span>[ 07 ] COMMON INQUIRIES</span>
          <span>CLEAR ANSWERS</span>
        </div>

        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1A1A]">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-[#686660]">
            Everything you need to know about working with Power Digitizing:
          </p>
        </div>

        <div className="max-w-4xl divide-y divide-[#EAE8E2] border-t border-b border-[#EAE8E2]">
          {faqItems.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-sm sm:text-base font-medium text-[#1A1A1A] group-hover:text-[#DA2C46] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <span className="shrink-0 size-6 rounded-full border border-[#D5D2CA] flex items-center justify-center text-[#555] group-hover:border-[#1A1A1A] transition-colors">
                    {isOpen ? <Minus className="size-3" /> : <Plus className="size-3" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-4 pr-6 text-xs sm:text-sm text-[#66645E] leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── 10. PRE-FOOTER CALL TO ACTION BANNER (Featuring Website Phone Number) ─── */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20 max-w-[1440px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#231F20] text-white p-8 sm:p-14 lg:p-20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#231F20] via-[#2A2627] to-[#1E1B1C] -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#FF9C00] block">
                PARTNER WITH POWER DIGITIZING
              </span>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                Ready to Elevate <br />
                Your <span className="font-bold text-white">Embroidery Craft?</span>
              </h2>

              <p className="max-w-xl text-sm sm:text-base text-white/70 leading-relaxed font-light">
                Send your vector artwork or raster sketch today. We will deliver a complimentary 3D digital proof with precise stitch count, color sequences, and machine toolpaths within 24 hours.
              </p>

              {/* Action Buttons & Phone Number (Website number preserved) */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full bg-[#DA2C46] px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#c2243c]"
                >
                  <span>Request Digital Proof</span>
                  <ArrowRight className="size-4" />
                </Link>

                <a
                  href="tel:+13164441366"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider text-white backdrop-blur transition-colors hover:border-white hover:bg-white/10"
                >
                  <Phone className="size-4 text-[#FF9C00]" />
                  <span>Call: +1 (316) 444-1366</span>
                </a>

                <a
                  href="mailto:design@powerdigitizing.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-4 text-xs font-semibold text-white/80 transition-colors hover:text-white hover:border-white"
                >
                  <Mail className="size-4" />
                  <span>design@powerdigitizing.com</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  <span>Free Basic Revisions</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck2 className="size-4 text-emerald-400" />
                  <span>12–24h Delivery (Rush in 2–4h)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sliders className="size-4 text-emerald-400" />
                  <span>No Setup Fees</span>
                </div>
              </div>
            </div>

            {/* Right Showcase Photo (High-density jacket back embroidery display) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/5">
                <Image
                  src="/images/company/custom-patches-collection.jpg"
                  alt="Custom patches and embroidery craft presentation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
