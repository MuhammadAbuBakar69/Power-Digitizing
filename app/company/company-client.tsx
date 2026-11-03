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

  // Accordion 1: Digitizing Placements & Specialties
  const placementDisciplines = [
    {
      title: "Left Chest & Company Logo Digitizing",
      tag: "Standard apparel",
      content:
        "The core of every company apparel and uniform program. Left-chest files need careful stitch control so they don't pucker on light piqué polos, cotton tees, and performance knits. We set pull compensation for the fabric, balance fill and satin density, and keep underlay light so the shirt still drapes naturally.",
    },
    {
      title: "Cap & Hat Digitizing for Curved Frames",
      tag: "Headwear specialty",
      content:
        "Caps are stiff and curved, so they have the highest risk of needle deflection, shifting, and bunching at the seam. Our files sew from the center out and from the bottom up. Over the thick center seam, we add support underlay and slow the needle so letters stay straight and needles don't break.",
    },
    {
      title: "3D Puff & Raised Foam Digitizing",
      tag: "Raised stitching",
      content:
        "3D puff adds bold, raised depth to streetwear and team hats. We use dense satin stitches over 3–5 mm foam, close every column end, and add cutting stitches so the foam tears away cleanly with none showing at the corners.",
    },
    {
      title: "Jacket Back & Large Design Digitizing",
      tag: "Large designs",
      content:
        "Designs up to 450 × 450 mm with 50,000 to 120,000+ stitches need careful planning. We split the artwork into sections that sew from the inside out, so heavy denim, leather, or fleece stays flat through long production runs.",
    },
    {
      title: "Appliqué & Chenille Digitizing",
      tag: "Mixed media",
      content:
        "For varsity letterman jackets, cheer uniforms, and large emblems. Our files include placement lines for positioning fabric, tack-down stitches to hold twill or felt in place, and zigzag or satin borders that cover the raw fabric edges.",
    },
    {
      title: "Small Lettering Digitizing (Under 4 mm)",
      tag: "High precision",
      content:
        "Small text on scrubs, security badges, and name tags is the real test of a digitizer. We use center-run underlay, open up the letter spacing, and set files up for 60-weight thread and 65/9 needles, so letters as small as 3 mm sew out sharp and readable.",
    },
  ];

  // Accordion 2: Quality Control & File Delivery
  const engineeringWorkflow = [
    {
      title: "Embroidery File Formats (.DST, .PES, .EMB, .EXP)",
      content:
        "Every file is ready to load straight into your machine. We provide Tajima (.DST), Wilcom (.EMB), Melco (.EXP), Brother and Baby Lock (.PES), Barudan (.DSB), Husqvarna (.HUS), Janome (.JEF), and Singer (.XXX). Editable .EMB source files are available on request.",
    },
    {
      title: "Production Run Sheets in PDF",
      content:
        "No guesswork on the shop floor. Every order includes a run sheet with the stitch count, size in inches and millimeters, color stop sequence, needle assignments, recommended thread weight, and thread colors from Madeira, Robison-Anton, and Isacord.",
    },
    {
      title: "Free Minor Revisions",
      content:
        "If a file puckers on your fabric, needs a small size change, or needs a density adjustment for a special garment, we fix it at no extra cost. We keep working with you until it runs smoothly on your machine.",
    },
    {
      title: "Standard (12–24h) & Rush (2–4h) Turnaround",
      content:
        "Apparel orders run on tight deadlines. Our digitizing team works around the clock, so standard files arrive in 12–24 hours and rush files in as little as 2–4 hours.",
    },
  ];

  // FAQ Items
  const faqItems = [
    {
      q: "What file formats can I send for embroidery digitizing and vector conversion?",
      a: "We accept almost any format, including JPG, PNG, PDF, AI, EPS, SVG, PSD, and TIFF, plus clear phone photos and hand-drawn sketches. Our vector artists clean up low-resolution artwork before digitizing.",
    },
    {
      q: "What embroidery machine formats do you provide?",
      a: "We provide all major commercial and home formats: Tajima (.DST), Melco (.EXP), Brother (.PES), Wilcom (.EMB), Barudan (.DSB), Janome (.JEF), Husqvarna (.HUS), and ZSK. If your machine needs a different file type, just ask.",
    },
    {
      q: "Do you charge extra for high stitch counts or small edits?",
      a: "No hidden fees. Standard left-chest and cap designs have simple flat pricing with no stitch count limit. Minor revisions, thread color changes, and size changes within 15% are free.",
    },
    {
      q: "How do you make sure files won't pucker or break thread?",
      a: "Auto software places stitches without knowing your fabric. Our digitizers set the underlay, pull compensation, stitch direction, and density for the fabric you tell us, such as piqué, fleece, twill, performance knit, or caps.",
    },
    {
      q: "Can you convert a raster logo into vector art for printing?",
      a: "Yes. Along with embroidery digitizing, we offer hand-drawn raster to vector conversion. You get clean, scalable AI, EPS, SVG, and PDF files with spot color separations for screen printing, DTF, and vinyl cutting.",
    },
    {
      q: "Do you also make physical custom patches?",
      a: "Yes. Power Digitizing makes finished custom patches, including embroidered, PVC and rubber, chenille, leather and faux leather, woven, and sublimated patches, with tracked shipping to the USA, Canada, the UK, and Australia.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCF9] text-[#1E1E1E] selection:bg-[#1E1E1E] selection:text-white font-sans">
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative px-6 pt-24 pb-20 md:px-12 md:pt-28 lg:pt-32 md:pb-28 lg:px-20 max-w-[1440px] mx-auto border-b border-[#EAE8E2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-normal leading-[1.04] tracking-[-0.03em] text-[#1A1A1A]">
                Embroidery Digitizing, Vector Art <br />
                <span className="font-bold tracking-tight">&amp; Custom Patches, Made by Hand</span>
              </h1>

              <p className="mt-8 max-w-xl text-base sm:text-lg text-[#5F5D58] leading-relaxed font-light">
                Power Digitizing is a US embroidery digitizing company and custom patch maker. Since 2010 we have made machine-ready embroidery files, clean vector artwork, and finished custom patches for contract decorators, uniform suppliers, print shops, and apparel brands.
              </p>
            </div>

            {/* Inset Offset Showcase Card */}
            <div className="mt-12 pt-8 border-t border-[#EAE8E2]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="relative w-48 h-36 rounded-lg overflow-hidden border border-[#E0DDD5] shadow-sm shrink-0 bg-[#F4F3EE]">
                  <Image
                    src="/images/company/3d-puff-cap.jpg"
                    alt="Specimen • 3D puff embroidery on structured cap"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#8A8780] block font-semibold">
                    Specimen • 3D puff embroidery
                  </span>
                  <p className="text-xs sm:text-sm text-[#4A4844] leading-relaxed max-w-md">
                    Closed end caps, clean foam cuts, and dense satin stitches that hold 3–5 mm foam in place with no foam showing through.
                  </p>
                  <div className="flex items-center gap-4 pt-1">
                    <Link
                      href="/quote"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1A1A] underline underline-offset-4 hover:text-[#C94343] transition-colors"
                    >
                      <span>Request a Free Digital Proof</span>
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
                alt="Fig 1.0: Multi-head commercial embroidery machine sewing a test file"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono tracking-wider flex items-center justify-between">
                <span>Tajima • Barudan • Brother</span>
                <span>Sew-out tested files</span>
              </div>
            </div>
            <div className="mt-4 text-right">
              <p className="text-[11px] font-mono tracking-wider text-[#8A8780] uppercase">
                Fig 1.0: Multi-head commercial embroidery machine sewing a test file
              </p>
            </div>
          </div>
        </div>

        {/* ─── 2. KEY STATS / METRICS (4 cards) ─── */}
        <div className="mt-20 pt-10 border-t border-[#EAE8E2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="space-y-2">
            <div className="font-display text-4xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight">
              16<span className="text-[#C94343] font-normal">+</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold">
              Years of hand digitizing
            </div>
            <p className="text-xs text-[#6B6963] leading-relaxed">
              Founded in 2010. Every design is digitized and vectorized by hand, without auto software shortcuts.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="space-y-2 border-t sm:border-t-0 sm:border-l border-[#EAE8E2] pt-6 sm:pt-0 sm:pl-6">
            <div className="font-display text-4xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight">
              250K<span className="text-[#C94343] font-normal">+</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold">
              Designs digitized
            </div>
            <p className="text-xs text-[#6B6963] leading-relaxed">
              Sewn on Tajima, Barudan, Brother, and Ricoma machines around the world.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="space-y-2 border-t lg:border-t-0 lg:border-l border-[#EAE8E2] pt-6 lg:pt-0 lg:pl-6">
            <div className="font-display text-4xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight">
              2–4<span className="text-[#C94343] font-normal">h</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold">
              Rush turnaround
            </div>
            <p className="text-xs text-[#6B6963] leading-relaxed">
              Standard files in 12–24 hours, with same-day rush files in 2–4 hours.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="space-y-2 border-t lg:border-t-0 lg:border-l border-[#EAE8E2] pt-6 lg:pt-0 lg:pl-6">
            <div className="font-display text-4xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight">
              Free
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold">
              Revisions until it sews right
            </div>
            <p className="text-xs text-[#6B6963] leading-relaxed">
              Free minor revisions until your file runs without puckering or thread breaks.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3. SECTION [ 01 ]: OUR STORY & PHILOSOPHY ─── */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 max-w-[1440px] mx-auto border-b border-[#EAE8E2]">
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-[#8A8780] pb-6 mb-12 border-b border-[#EAE8E2]">
          <span>[01] Our story &amp; philosophy</span>
          <span>Human Skill Over Automation</span>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal leading-snug tracking-tight text-[#1A1A1A]">
            At Power Digitizing, we believe great embroidery starts with people. Every stitch is placed on purpose.
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#686660] leading-relaxed font-light">
            Power Digitizing was founded by embroidery digitizers and vector artists who left corporate jobs to follow their passion for embroidery technology. We don&apos;t use one-click auto-digitizing software, which ruins stitch density, breaks needles, and distorts cap seams. Every file we deliver is digitized by hand, proofed, and set up for production.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:text-[#C94343] hover:border-[#C94343] transition-colors"
            >
              <span>Submit Your Artwork for a Free Review</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
            <a
              href="tel:+13164441366"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#686660] hover:text-[#1A1A1A] transition-colors"
            >
              <Phone className="size-3 text-[#C94343]" />
              <span>Direct inquiries: +1 (316) 444-1366</span>
            </a>
          </div>
        </div>

        {/* Gallery Composition */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#E0DDD5] shadow-sm bg-[#F4F3EE]">
              <Image
                src="/images/company/digitizing-cad.jpg"
                alt="Fig 1.1: Hand digitizing with stitch angles set by our team"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-[11px] font-mono text-[#8A8780] uppercase tracking-wider">
              Fig 1.1: Hand digitizing with stitch angles set by our team
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#E0DDD5] shadow-md bg-[#F4F3EE]">
              <Image
                src="/images/company/custom-patches-collection.jpg"
                alt="Fig 1.2: Custom patches from our production archive"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#8A8780] uppercase tracking-wider">
              <span>Fig 1.2: Custom patches from our production archive</span>
              <span>Embroidered • PVC • Chenille • Leather</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. SECTION [ 02 ]: DIGITIZING PLACEMENTS (6 Accordion Items) ─── */}
      <section id="embroidery" className="scroll-mt-24 px-6 py-20 md:px-12 md:py-28 lg:px-20 max-w-[1440px] mx-auto border-b border-[#EAE8E2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8A8780] block">
                [02] Digitizing placements &amp; specialties
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1A1A] leading-tight">
                Embroidery Digitizing for Every Placement and Hoop
              </h2>
              <p className="text-sm text-[#686660] leading-relaxed">
                A left-chest logo on a performance polo needs a very different file than a 3D puff cap or a full denim jacket back. Here is how we digitize for each placement:
              </p>
            </div>

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
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#C94343] block font-semibold">
                          {item.tag}
                        </span>
                        <span className="text-sm sm:text-base font-medium text-[#1A1A1A] group-hover:text-[#C94343] transition-colors">
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

          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-t-[10rem] rounded-b-xl overflow-hidden border border-[#E0DDD5] shadow-lg bg-[#F4F3EE]">
              <Image
                src="/images/company/jacket-back-embroidery.jpg"
                alt="Fig 2.0: Large embroidered jacket back (75,000+ stitches)"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center space-y-1">
              <p className="text-[11px] font-mono uppercase tracking-widest text-[#8A8780]">
                Fig 2.0: Large embroidered jacket back (75,000+ stitches)
              </p>
              <p className="text-xs text-[#6B6963]">
                Set up for Barudan, Tajima, Brother, SWF, Melco, and Ricoma multi-head machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. SECTION [ 03 ]: CRAFT STUDY (FABRIC GUIDE) ─── */}
      <section className="px-6 py-12 md:px-12 md:py-16 lg:px-20 max-w-[1440px] mx-auto">
        <div className="rounded-2xl bg-[#F4F2EC] border border-[#E4E1D8] p-8 sm:p-12 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#7C7A73] block">
                  [03] Craft study • Fabric and pull compensation
                </span>
                <blockquote className="font-display text-2xl sm:text-3xl text-[#1A1A1A] leading-snug font-normal italic">
                  “The real quality in embroidery is in the details you don&apos;t see: the density that prevents thread breaks, and the underlay that keeps edges sharp.”
                </blockquote>
              </div>

              <div className="space-y-3.5 pt-2">
                {[
                  { fabric: "Piqué polo knits", desc: "Underlay laid across the knit so stitches don't sink into the fabric." },
                  { fabric: "Performance and dri-fit", desc: "Lighter density and flexible edge runs to avoid needle cuts and holes." },
                  { fabric: "6-panel structured caps", desc: "Center-out sewing with extra pull compensation to handle seam tension." },
                  { fabric: "Fleece and heavy outerwear", desc: "A dense underlay mesh so high-pile fibers don't poke through satin stitches." },
                  { fabric: "Heavy twill and denim", desc: "Firm edge underlay and strong compensation for bold letters." },
                ].map((spec, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#44423E]">
                    <span className="size-1.5 rounded-full bg-[#C94343] mt-2 shrink-0" />
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
                  <span>Request a Free Proof</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <a
                  href="tel:+13164441366"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A1A1A] underline underline-offset-4 hover:text-[#C94343] transition-colors"
                >
                  <Phone className="size-3.5" />
                  <span>Call +1 (316) 444-1366</span>
                </a>
              </div>
            </div>

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
                <span>Sketch to clean vector art</span>
                <span>Pantone PMS color matching</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. SECTION [ 04 ]: VECTOR ART RECREATION ─── */}
      <section id="vector" className="scroll-mt-24 px-6 py-20 md:px-12 md:py-28 lg:px-20 max-w-[1440px] mx-auto border-t border-b border-[#EAE8E2]">
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-[#8A8780] pb-6 mb-12 border-b border-[#EAE8E2]">
          <span>[04] Vector art recreation</span>
          <span>Raster to Vector Conversion, Done by Hand</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] leading-[1.15]">
              Clean vector files ready for screen printing, vinyl, and laser cutting.
            </h2>
            <p className="text-sm sm:text-base text-[#686660] leading-relaxed font-light">
              Blurry JPGs, pixelated phone photos, and scans ruin both print and embroidery. Our illustrators redraw your artwork point by point in Adobe Illustrator, cleaning rough edges, smoothing curves, and separating colors.{" "}
              <Link href="/services/vector" className="text-[#C94343] underline font-medium hover:text-[#b03535]">
                See our vector conversion service.
              </Link>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-[#EAE8E2] bg-white space-y-1">
                <Palette className="size-4 text-[#C94343]" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A]">Pantone matching</h4>
                <p className="text-xs text-[#6B6963]">Exact PMS color codes for consistent ink and thread colors.</p>
              </div>
              <div className="p-4 rounded-xl border border-[#EAE8E2] bg-white space-y-1">
                <FileCode2 className="size-4 text-[#C94343]" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A]">Every file format</h4>
                <p className="text-xs text-[#6B6963]">AI, EPS, SVG, CDR, and high-resolution PDF, ready for any printer.</p>
              </div>
              <div className="p-4 rounded-xl border border-[#EAE8E2] bg-white space-y-1">
                <Layers className="size-4 text-[#C94343]" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A]">Color separations</h4>
                <p className="text-xs text-[#6B6963]">Clean layers and underbase traps for screen printing and DTF.</p>
              </div>
              <div className="p-4 rounded-xl border border-[#EAE8E2] bg-white space-y-1">
                <Clock className="size-4 text-[#C94343]" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A]">12–24 hour delivery</h4>
                <p className="text-xs text-[#6B6963]">Fast vector files so your presses don&apos;t sit idle.</p>
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
              <span>Hand-placed points • No auto-trace</span>
              <span>Sharp at any size</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. SECTION [ 05 ]: CUSTOM PATCH PRODUCTION (6 cards) ─── */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 max-w-[1440px] mx-auto border-b border-[#EAE8E2]">
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-[#8A8780] pb-6 mb-12 border-b border-[#EAE8E2]">
          <span>[05] Custom patch production</span>
          <span>From Proof to Delivery</span>
        </div>

        <div className="max-w-3xl space-y-4 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1A1A]">
            Custom Patch Manufacturing, From Proof to Delivery
          </h2>
          <p className="text-sm font-medium text-[#1A1A1A]">
            Finished custom patches, made from the same artwork we prepare in house.
          </p>
          <p className="text-sm sm:text-base text-[#686660] leading-relaxed">
            Along with digitizing files, Power Digitizing makes finished custom patches with iron-on, Velcro, and sew-on backing for uniforms, hats, and merchandise:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Custom Embroidered Patches",
              tag: "Timeless classic",
              desc: "100%, 75%, or 50% thread coverage with merrowed or laser-cut borders. A top choice for uniforms, scouts, law enforcement, and clubs.",
              image: "/images/american-patches/embroidered.jpg",
              link: "/collections/embroidered-patches",
            },
            {
              title: "Custom PVC & Rubber Patches",
              tag: "Tactical & waterproof",
              desc: "Durable, waterproof soft PVC with 2D or 3D raised detail. Made for military, outdoor gear, and Velcro-backed tactical patches.",
              image: "/images/american-patches/pvc.jpg",
              link: "/collections/pvc-patches",
            },
            {
              title: "Chenille Varsity Patches",
              tag: "Letterman & retro",
              desc: "Soft, fuzzy yarn loops on heavy felt. The classic choice for letterman jackets, hoodies, and streetwear.",
              image: "/images/american-patches/chenille.jpg",
              link: "/collections/chenille-patches",
            },
            {
              title: "Leather & Faux Leather Patches",
              tag: "Rugged and premium",
              desc: "Laser-engraved, debossed, or foil-stamped genuine and faux leather. A favorite for trucker hats and beanies.",
              image: "/images/american-patches/leather.jpg",
              link: "/collections/leather-patches",
            },
            {
              title: "Woven Patches",
              tag: "Fine detail",
              desc: "Fine, tightly woven threads that show small text and detail that regular embroidery can't.",
              image: "/images/american-patches/woven.jpg",
              link: "/collections/woven-patches",
            },
            {
              title: "Sublimated Printed Patches",
              tag: "Full color",
              desc: "Full-color printing on twill for photos and gradients, finished with a classic merrowed border.",
              image: "/images/american-patches/sublimated.jpg",
              link: "/collections/sublimated-patches",
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
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C94343] font-semibold block">
                  {patch.tag}
                </span>
                <h3 className="font-display text-lg font-semibold text-[#1A1A1A]">{patch.title}</h3>
                <p className="text-xs text-[#6B6963] leading-relaxed">{patch.desc}</p>
                <div className="pt-3 border-t border-[#F0EEE8] flex items-center justify-between text-xs font-semibold text-[#1A1A1A]">
                  <Link href={patch.link} className="inline-flex items-center gap-1 hover:text-[#C94343] transition-colors">
                    <span>Order Patches</span>
                    <ArrowRight className="size-3" />
                  </Link>
                  <span className="text-[11px] text-[#999] font-mono">No minimums</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 8. SECTION [ 06 ]: QUALITY CONTROL & FILE DELIVERY (4 Accordion Items) ─── */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 max-w-[1440px] mx-auto border-b border-[#EAE8E2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8A8780] block">
              [06] Quality control &amp; file delivery
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1A1A] leading-tight">
              Files Your Machine Operator Can Run Without Guessing
            </h2>
            <p className="text-sm text-[#686660] leading-relaxed">
              Every design is digitized, checked in stitch simulation software, and reviewed by a senior quality checker before it is sent.
            </p>

            <div className="p-6 rounded-2xl bg-[#F7F6F1] border border-[#E8E6DF] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1A1A]">
                <Cpu className="size-4 text-[#C94343]" />
                <span>Works with these machines</span>
              </div>
              <p className="text-xs text-[#6B6963] leading-relaxed">
                Tajima, Barudan, Brother, SWF, Melco, Ricoma, Happy Japan, Toyota, ZSK, Janome, Husqvarna, Bernina, Pfaff, and Singer.
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
                      <span className="text-sm sm:text-base font-medium text-[#1A1A1A] group-hover:text-[#C94343] transition-colors pr-4">
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

      {/* ─── 9. SECTION [ 07 ]: FAQ (6 questions) ─── */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 max-w-[1440px] mx-auto border-b border-[#EAE8E2]">
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-[#8A8780] pb-6 mb-12 border-b border-[#EAE8E2]">
          <span>[07] Common questions</span>
          <span>Clear answers</span>
        </div>

        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1A1A]">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-[#686660]">
            Everything you need to know about working with Power Digitizing.
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
                  <span className="text-sm sm:text-base font-medium text-[#1A1A1A] group-hover:text-[#C94343] transition-colors pr-4">
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

      {/* ─── 10. CLOSING CALL TO ACTION BANNER ─── */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20 max-w-[1440px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#231F20] text-white p-8 sm:p-14 lg:p-20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#231F20] via-[#2A2627] to-[#1E1B1C] -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#C94343] block">
                Partner with Power Digitizing
              </span>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                Ready to Upgrade <br />
                <span className="font-bold text-white">Your Embroidery Files?</span>
              </h2>

              <p className="max-w-xl text-sm sm:text-base text-white/70 leading-relaxed font-light">
                Send your vector artwork or raster sketch today. We&apos;ll send a free digital proof with the stitch count, color sequence, and machine file details within 24 hours.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#14263D]"
                >
                  <span>Request a Digital Proof</span>
                  <ArrowRight className="size-4" />
                </Link>

                <a
                  href="tel:+13164441366"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider text-white backdrop-blur transition-colors hover:border-white hover:bg-white/10"
                >
                  <Phone className="size-4 text-[#C94343]" />
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

              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  <span>Free basic revisions</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck2 className="size-4 text-emerald-400" />
                  <span>12–24h delivery (rush in 2–4h)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sliders className="size-4 text-emerald-400" />
                  <span>No setup fees</span>
                </div>
              </div>
            </div>

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
