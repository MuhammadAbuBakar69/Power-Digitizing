import { Award, Building2, GraduationCap, HeartPulse, Shield, Shirt, Trophy, UtensilsCrossed } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const industries = [
  { name: "Sports Teams & Leagues", description: "Team logos, player numbers, championship patches, and fan merchandise.", icon: Trophy, color: "bg-[#C94343]/10 text-[#C94343]" },
  { name: "Military & Tactical", description: "Unit insignia, morale patches, name tapes, and tactical PVC patches with hook-and-loop backing.", icon: Shield, color: "bg-[#14263D]/10 text-[#14263D]" },
  { name: "Corporate & Uniforms", description: "Left-chest logos, name patches, and branded workwear for your whole team.", icon: Building2, color: "bg-[#C94343]/10 text-[#C94343]" },
  { name: "Fashion & Streetwear", description: "Jacket back patches, 3D puff patches for caps, chenille letters, and limited-edition drops.", icon: Shirt, color: "bg-[#14263D]/10 text-[#14263D]" },
  { name: "Schools & Universities", description: "Letterman jacket patches, club emblems, graduation patches, and spirit wear.", icon: GraduationCap, color: "bg-[#C94343]/10 text-[#C94343]" },
  { name: "Hospitality & Restaurants", description: "Logo patches for chef coats, aprons, and staff uniforms.", icon: UtensilsCrossed, color: "bg-[#14263D]/10 text-[#14263D]" },
  { name: "Healthcare & Medical", description: "Department patches for scrubs and lab coats, plus clinic and hospital branding.", icon: HeartPulse, color: "bg-[#C94343]/10 text-[#C94343]" },
  { name: "Awards & Recognition", description: "Achievement patches, scout badges, and commemorative designs.", icon: Award, color: "bg-[#14263D]/10 text-[#14263D]" },
];

export function IndustryShowcase() {
  return (
    <section className="scroll-mt-20 border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <ScrollReveal>
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Industries we serve</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl xl:text-6xl">
              Custom patches for every industry.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              From military units to fashion labels, we make patches for people who care how their name or logo looks.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
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
