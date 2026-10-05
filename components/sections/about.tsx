import Image from "next/image";
import { ArrowUpRight, Instagram, Linkedin, Play, Youtube } from "lucide-react";
import type { SiteConfig } from "@/config/types";

export function About({ site }: { site: SiteConfig }) {
  const about = site.about;
  if (!about) return null;

  return (
    <section id="about" className="scroll-mt-20 overflow-hidden border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{about.eyebrow}</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.03] tracking-tight md:text-6xl">{about.title}</h2>
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">{about.paragraphs[0]}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-1">
                Learn about our process <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-sm text-muted-foreground">Trusted since 2010</span>
            </div>
          </div>

          <div className="relative min-h-[440px] md:min-h-[520px]">
            <div className="group absolute inset-x-0 top-0 h-[72%] overflow-hidden rounded-[1.4rem] bg-muted shadow-xl shadow-primary/10">
              <Image src="/images/american-patches/embroidered.jpg" alt="Detailed embroidered patch artwork" fill sizes="(max-width: 1024px) 100vw, 700px" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <span className="absolute bottom-6 left-6 text-sm font-semibold uppercase tracking-[0.16em] text-white">Detail in every thread</span>
            </div>
            <div className="group absolute bottom-0 right-0 h-[43%] w-[52%] overflow-hidden rounded-[1.4rem] border-8 border-card bg-muted shadow-2xl shadow-primary/15">
              <Image src="/images/american-patches/leather.jpg" alt="Premium leather patch detail" fill sizes="(max-width: 1024px) 52vw, 360px" className="object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-secondary/25 transition-colors group-hover:bg-secondary/5" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-secondary">Crafted to last</span>
            </div>
            <div className="absolute bottom-[14%] left-0 flex size-20 -translate-x-1/4 items-center justify-center rounded-full border-8 border-card bg-accent text-accent-foreground shadow-xl transition-transform duration-500 hover:rotate-12 md:size-24">
              <Play aria-hidden className="ml-1 size-6 fill-current" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 rounded-2xl bg-primary px-7 py-8 text-primary-foreground shadow-xl shadow-primary/15 md:grid-cols-[0.72fr_1.28fr] md:items-center md:px-10 md:py-9">
          <div className="border-b border-white/30 pb-7 md:border-b-0 md:border-r md:pb-0 md:pr-10">
            <p className="font-display text-3xl leading-tight md:text-4xl">Crafting digital artwork that elevates your brand.</p>
            <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <span className="grid size-6 place-items-center rounded-full border border-accent"><ArrowUpRight aria-hidden className="size-3" /></span> About us
            </div>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-white/80">{about.paragraphs[1]}</p>
            <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-white/20 pt-5">
              {about.highlights.map((highlight) => (
                <div key={highlight.label}>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-white/60">{highlight.label}</dt>
                  <dd className="mt-2 font-display text-xl font-semibold">{highlight.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4 text-muted-foreground">
          <span className="text-xs font-semibold uppercase tracking-[0.18em]">Follow the work</span>
          <span className="h-px w-10 bg-border" />
          {[{ label: "Instagram", Icon: Instagram }, { label: "YouTube", Icon: Youtube }, { label: "LinkedIn", Icon: Linkedin }].map(({ label, Icon: SocialIcon }) => <a key={label} href="#contact" aria-label={`Follow Power Digitizing on ${label}`} className="transition-colors hover:text-accent"><SocialIcon aria-hidden className="size-4" /></a>)}
        </div>
      </div>
    </section>
  );
}
