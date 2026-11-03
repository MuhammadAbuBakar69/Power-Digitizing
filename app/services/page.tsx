import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Mail,
  PenTool,
  Phone,
  Scissors,
  Sparkles,
} from "lucide-react";
import { getSite } from "@/lib/tenant";

export const metadata: Metadata = {
  title: "Vector Art & Embroidery Digitizing Services",
  description:
    "Hand-drawn raster to vector conversion and custom embroidery digitizing in one place. AI, EPS, SVG, DST, and PES files in 12–24 hours, with rush in 2–4 hours.",
};

const vectorFeatures = [
  {
    title: "Every vector format",
    desc: "Delivered in AI, EPS, PDF, SVG, and a high-resolution transparent PNG.",
  },
  {
    title: "Pantone color matching",
    desc: "Spot color separations set up for screen printing and DTF.",
  },
  {
    title: "Clean cut lines",
    desc: "Smooth outlines ready for vinyl cutters, plotters, and lasers.",
  },
  {
    title: "Fast turnaround",
    desc: "Standard 12–24 hour delivery, with a 2–4 hour rush option.",
  },
];

const embroideryFeatures = [
  {
    title: "3D puff caps",
    desc: "Foam-ready files with clean end caps for Richardson 112 and other structured hats.",
  },
  {
    title: "Small lettering (3 mm)",
    desc: "Clear, readable letters down to 3 mm without needle holes.",
  },
  {
    title: "All machine formats",
    desc: "DST, EMB, PES, EXP, JEF, and more for Tajima, Barudan, Brother, Melco, and Janome.",
  },
  {
    title: "Clean machine runs",
    desc: "Planned stitch paths with fewer trims, jumps, and thread breaks.",
  },
];

export default async function ServicesPage() {
  const site = await getSite();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Vector Art Conversion Services",
      serviceType: "Vector Conversion Service",
      provider: {
        "@type": "Organization",
        name: site.name,
        url: "https://powerdigitizing.com",
      },
      description:
        "Hand-drawn raster to vector conversion for screen printing, vinyl cutting, laser engraving, and DTF. Delivered in AI, EPS, PDF, SVG, and high-res PNG.",
      areaServed: ["US", "CA", "GB", "AU"],
    },
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
        "Hand-made embroidery digitizing for logos, caps, 3D puff, jacket backs, and small text. DST, PES, EMB, EXP, and JEF files from $10, with rush in 2–4 hours.",
      areaServed: ["US", "CA", "GB", "AU"],
      offers: {
        "@type": "Offer",
        price: "10.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Section 1: Hero ─── */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border/80">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-[#14263D]/5 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute top-1/3 -right-20 size-72 rounded-full bg-[#C94343]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14263D]/10 bg-[#14263D]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C94343]">
            <Sparkles className="size-3.5" />
            <span>Vector art &amp; digitizing services</span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#14263D]">
            Vector Art &amp; <br className="hidden sm:inline" />
            Embroidery Digitizing Services
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            One team for both files your production needs. We redraw blurry logos and sketches as sharp, scalable vector art, and we digitize your designs into clean, machine-ready embroidery files. Everything is done by hand by experienced artists and digitizers, with standard delivery in 12–24 hours and a 2–4 hour rush option.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C94343]/25 hover:bg-[#b03535] hover:shadow-xl hover:shadow-[#C94343]/35 transition-all hover:scale-105"
            >
              <span>Get a Free Quote</span>
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

      {/* ─── Section 2: Service 01, Vector Art ─── */}
      <section id="vector" className="scroll-mt-24 py-20 md:py-28 border-b border-border/80">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
                <PenTool className="size-3.5" /> Service 01: Vector art conversion
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#14263D]">
                Turn Blurry Artwork into Print-Ready Vector Files
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Low-resolution JPGs, phone photos, and rough sketches turn pixelated on printing presses, laser cutters, and embroidery machines. Our illustrators redraw every line and curve by hand, so your logo stays sharp at any size, from a business card to a billboard.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {vectorFeatures.map((item) => (
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
                  <span>Submit Your Artwork for Vector</span>
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="/services/vector"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-[#14263D] hover:border-[#14263D] transition-colors"
                >
                  <span>See Vector Conversion Details</span>
                  <ArrowUpRight className="size-4 text-[#C94343]" />
                </Link>
              </div>
            </div>

            {/* Visual Preview */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border/80 shadow-xl bg-card">
                <Image
                  src="/images/company/vector-conversion.jpg"
                  alt="Fig 1.1: Hand-drawn vector redraw with spot color separation"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Fig 1.1: Hand-drawn vector redraw with spot color separation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Service 02, Embroidery Digitizing ─── */}
      <section id="embroidery" className="scroll-mt-24 py-20 md:py-28 bg-slate-50/60 border-b border-border/80">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Preview */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border/80 shadow-xl bg-card">
                <Image
                  src="/images/company/digitizing-cad.jpg"
                  alt="Fig 1.2: Satin stitches and underlay angles set by hand"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Fig 1.2: Satin stitches and underlay angles set by hand
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C94343] font-semibold">
                <Scissors className="size-3.5" /> Service 02: Embroidery digitizing
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#14263D]">
                Custom Embroidery Digitizing for Any Fabric or Cap
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Auto-digitizing software ruins stitch density, causes thread nests, and distorts hat seams. Every embroidery file we deliver is digitized by hand, with pull compensation and underlay set for your fabric, and test-sewn before delivery. Digitizing starts at $10 per file.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {embroideryFeatures.map((item) => (
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
                  <span>Submit Your Design for Digitizing</span>
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="/services/embroidery"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-[#14263D] hover:border-[#14263D] transition-colors"
                >
                  <span>See All Embroidery Stitch Types</span>
                  <ArrowUpRight className="size-4 text-[#C94343]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Closing Call to Action ─── */}
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
                Send your artwork and get clean, production-ready files.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Need a vector file, an embroidery file, or both? Send your logo, sketch, or old file. We&apos;ll tell you what it needs, send a free quote, and deliver within 12–24 hours.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#C94343]/30 transition-all hover:scale-105 hover:bg-[#b03535] hover:shadow-2xl"
                >
                  <span>Get a Free Quote</span>
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
