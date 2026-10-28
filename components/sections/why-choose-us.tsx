import { Check, ArrowUpRight, Zap, Users, ShieldCheck, Clock, Palette, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const differentiators = [
  {
    icon: Users,
    title: "Artwork Prepared by People, Not Software",
    description: "Every design is digitized by hand by the same team behind our embroidery digitizing service, not converted with one-click auto software.",
  },
  {
    icon: ShieldCheck,
    title: "Help Choosing the Right Patch",
    description: "Not sure between embroidered, woven, PVC, or leather? Tell us how you'll use it and we'll recommend the best fit.",
  },
  {
    icon: Zap,
    title: "Free Proof Before You Pay",
    description: "See your design, size, and colors on a free digital proof before anything is produced.",
  },
  {
    icon: Clock,
    title: "Rush Options Available",
    description: "Working to a deadline? Share your date when you request a quote and we'll tell you what's possible.",
  },
  {
    icon: Palette,
    title: "Pantone Color Matching",
    description: "Thread and material colors are matched to Pantone codes, so your logo colors stay consistent from order to order.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Talk directly with our team by phone, email, or WhatsApp, not a ticket system.",
  },
];

const comparisonFeatures = [
  { feature: "Free digital proof on every order", us: true, them: "Varies" },
  { feature: "No setup fees", us: true, them: "Varies" },
  { feature: "Artwork digitized by hand", us: true, them: "Varies" },
  { feature: "Free basic revisions", us: true, them: "Varies" },
  { feature: "Iron-on, sew-on, Velcro & adhesive backing", us: true, them: "Varies" },
  { feature: "Pantone color matching", us: true, them: "Varies" },
  { feature: "Remake if it doesn't match your proof", us: true, them: "Varies" },
  { feature: "No minimum order quantity", us: true, them: "Varies" },
];

export function WhyChooseUs() {
  return (
    <section className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <ScrollReveal>
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Power Digitizing difference</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Why customers choose us for custom patches.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              We don&apos;t just make patches. We prepare your artwork so it looks right on the material, size, and garment you choose.
            </p>
          </div>

          {/* Differentiator Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {differentiators.map((item) => {
              const IconComp = item.icon;
              return (
                <article
                  data-reveal
                  key={item.title}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <div className="grid size-11 place-items-center rounded-xl bg-[#C94343]/10 text-[#C94343] transition-all duration-300 group-hover:bg-[#C94343] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#C94343]/20">
                    <IconComp className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>

          {/* Comparison Table */}
          <div data-reveal className="mt-16 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-3 border-b border-border bg-muted/30 px-6 py-4 text-sm font-semibold">
              <span>Feature</span>
              <span className="text-center text-primary">Power Digitizing</span>
              <span className="text-center text-muted-foreground">Other Providers</span>
            </div>
            {comparisonFeatures.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 items-center px-6 py-3.5 text-sm ${i % 2 === 0 ? "bg-background" : "bg-card"} ${i < comparisonFeatures.length - 1 ? "border-b border-border/50" : ""}`}>
                <span className="font-medium text-foreground">{row.feature}</span>
                <span className="flex justify-center">
                  <span className="grid size-7 place-items-center rounded-full bg-emerald-500/10">
                    <Check className="size-4 text-emerald-600" />
                  </span>
                </span>
                <span className="flex justify-center">
                  <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                    {row.them}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20">
              Start Your Free Proof <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/company" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
              Learn More About Us <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
