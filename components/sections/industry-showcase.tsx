import { Award, Building2, GraduationCap, HeartPulse, Shield, Shirt, Trophy, UtensilsCrossed } from "lucide-react";
import type { SiteConfig } from "@/config/types";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const industries = [
  { name: "Sports Teams & Leagues", description: "Team logos, player numbers, championship patches, and fan merchandise embroidery.", icon: Trophy, color: "bg-red-500/10 text-red-500" },
  { name: "Military & Tactical", description: "Unit insignias, morale patches, name tapes, and tactical PVC patches for armed forces.", icon: Shield, color: "bg-emerald-500/10 text-emerald-500" },
  { name: "Corporate & Uniforms", description: "Left chest logos, employee nametags, and branded workwear for professional teams.", icon: Building2, color: "bg-blue-500/10 text-blue-500" },
  { name: "Fashion & Streetwear", description: "High-density jacket backs, 3D puff caps, chenille varsity letters, and limited edition drops.", icon: Shirt, color: "bg-purple-500/10 text-purple-500" },
  { name: "Schools & Universities", description: "Varsity letterman jackets, graduation stoles, club emblems, and spirit wear patches.", icon: GraduationCap, color: "bg-amber-500/10 text-amber-500" },
  { name: "Hospitality & Restaurants", description: "Chef coats, apron logos, hotel linens, and branded hospitality uniforms.", icon: UtensilsCrossed, color: "bg-pink-500/10 text-pink-500" },
  { name: "Healthcare & Medical", description: "Scrub embroidery, lab coat monograms, hospital department patches, and clinic branding.", icon: HeartPulse, color: "bg-cyan-500/10 text-cyan-500" },
  { name: "Awards & Recognition", description: "Custom award patches, achievement emblems, scout badges, and commemorative pieces.", icon: Award, color: "bg-orange-500/10 text-orange-500" },
];

export function IndustryShowcase() {
  return (
    <section className="scroll-mt-20 border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <ScrollReveal>
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Industries we serve</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Trusted across every industry.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              From military units to fashion labels, our digitizing and patch production serves professionals who demand flawless quality.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => {
              const IconComp = industry.icon;
              return (
                <article
                  data-reveal
                  key={industry.name}
                  className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                  <div className={`grid size-12 place-items-center rounded-xl ${industry.color} transition-transform duration-300 group-hover:scale-110`}>
                    <IconComp className="size-6" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold tracking-tight transition-colors group-hover:text-primary">{industry.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{industry.description}</p>
                </article>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
