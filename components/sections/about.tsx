import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Layers,
  Cpu,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import type { SiteConfig } from "@/config/types";

export function About({ site }: { site: SiteConfig }) {
  const about = site.about;
  if (!about) return null;

  return (
    <section
      id="about"
      className="scroll-mt-20 overflow-hidden border-y border-border bg-card py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Top Story & Visual Showcase Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
          {/* Left Column: Heritage, Authority & Capabilities */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Factory className="size-3.5 text-accent" />
              <span>{about.eyebrow}</span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.12]">
              {about.title}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
              {about.paragraphs[0]}
            </p>

            {about.paragraphs[1] && (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90 sm:text-base">
                {about.paragraphs[1]}
              </p>
            )}

            {/* Key Manufacturing Pillars */}
            <div className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <div className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-background/70 p-3 text-xs font-medium text-foreground sm:text-sm">
                <CheckCircle2 className="size-4 shrink-0 text-accent" />
                <span>Tajima & Barudan multi-head embroidery machines</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-background/70 p-3 text-xs font-medium text-foreground sm:text-sm">
                <CheckCircle2 className="size-4 shrink-0 text-accent" />
                <span>4 backings: Velcro, iron-on, adhesive, sew-on</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-background/70 p-3 text-xs font-medium text-foreground sm:text-sm">
                <CheckCircle2 className="size-4 shrink-0 text-accent" />
                <span>Pantone color matching for thread and materials</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-background/70 p-3 text-xs font-medium text-foreground sm:text-sm">
                <CheckCircle2 className="size-4 shrink-0 text-accent" />
                <span>Free digital proofs and zero setup fees</span>
              </div>
            </div>

            {/* Dual High-Converting CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-lg"
              >
                About Our Company
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-muted/50"
              >
                Request a Free Digital Proof
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </Link>
            </div>
          </div>

          {/* Right Column: Responsive Studio Visual Showcase */}
          <div className="lg:col-span-5">
            {/* Primary Hero Image Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
              <div className="relative aspect-[16/10] w-full sm:aspect-[4/3]">
                <Image
                  src="/images/company/custom-patches-collection.jpg"
                  alt="Power Digitizing custom patches showcase - embroidered, leather, PVC, and woven styles"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Live Status Badge */}
                <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/75 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Custom Patches Since 2010</span>
                </div>

                {/* Bottom Scrim Caption */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                    Custom Patch Manufacturing
                  </p>
                  <p className="mt-1 text-xs text-white/80">
                    Embroidered • PVC • Leather • Woven • Chenille
                  </p>
                </div>
              </div>
            </div>

            {/* Companion Technical Production Previews */}
            <div className="mt-4 grid grid-cols-2 gap-3.5 sm:gap-4">
              <div className="group relative overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/company/machine-macro.jpg"
                    alt="Commercial Tajima embroidery machine needle and thread tensioning"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 260px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-white">
                      Tajima & Barudan
                    </p>
                    <p className="text-[10px] text-white/75">Clean, consistent stitching</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/company/digitizing-cad.jpg"
                    alt="Precision embroidery digitizing toolpath CAD simulation"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 260px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-white">
                      Hand-digitized artwork
                    </p>
                    <p className="text-[10px] text-white/75">Checked before production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Production Standards & Guarantees Bar */}
        <div className="mt-14 sm:mt-16 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Cpu className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                Artwork Prepared by Hand
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Our team digitizes every design manually, not with one-click auto-trace software, so lettering and small details stay as clean as your patch size allows.
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Layers className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                Every Patch Style in One Place
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Embroidered, PVC, leather, chenille, woven, sublimated, and silicone patches, plus 3D puff embroidery, made for caps, uniforms, jackets, bags, and gear.
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                Zero Setup Fees & Free Proofs
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                See your patch before you pay. Every order includes a free digital proof with free basic revisions and no setup charges.
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                Clear Turnaround Times
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Free digital proof in 24–48 hours. Standard production takes 7–14 business days after you approve, with rush options for tight deadlines.
              </p>
            </div>
          </div>

          {/* Quick Facility Tour Banner */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Sparkles className="size-4 text-accent" />
              <span>Want to see how we work and what we make?</span>
            </div>
            <Link
              href="/company"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-accent"
            >
              Tour Our Company
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
