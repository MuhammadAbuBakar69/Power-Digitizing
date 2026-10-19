import { Check, X, ArrowUpRight, Zap, Users, ShieldCheck, Clock, Palette, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const differentiators = [
  { icon: Users, title: "Human-Punched, Never Auto-Traced", description: "Every design is manually digitized by experienced embroiderers — no one-click auto-digitizing software that wrecks density and snap needles." },
  { icon: Zap, title: "2–4 Hour Rush Available", description: "Emergency production deadlines? We deliver same-day rush files in as little as 2 hours with zero compromise on stitch quality." },
  { icon: ShieldCheck, title: "Free Unlimited Revisions", description: "If a file puckers on your fabric, needs resizing, or requires density tweaks — we revise at zero additional cost until it runs perfectly." },
  { icon: Clock, title: "12–24h Standard Turnaround", description: "Our distributed digitizing lab operates around the clock. Most orders are delivered within 12 to 24 hours of artwork submission." },
  { icon: Palette, title: "Pantone PMS Color Matching", description: "Every thread color is mapped to exact Pantone PMS codes with Madeira, Robison-Anton, and Isacord conversion charts included." },
  { icon: HeadphonesIcon, title: "Dedicated Account Support", description: "Direct access to your assigned senior digitizer — not a ticketing system. Real conversations about your production needs." },
];

const comparisonFeatures = [
  { feature: "Manual digitizing by humans", us: true, them: false },
  { feature: "Free unlimited revisions", us: true, them: false },
  { feature: "Fabric-specific calibration", us: true, them: false },
  { feature: "2–4h rush turnaround", us: true, them: false },
  { feature: "All machine formats included", us: true, them: true },
  { feature: "Production PDF run sheets", us: true, them: false },
  { feature: "Pantone thread matching", us: true, them: false },
  { feature: "No setup or hidden fees", us: true, them: false },
];

export function WhyChooseUs() {
  return (
    <section className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <ScrollReveal>
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Power Digitizing difference</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Why professionals choose us.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              We don&apos;t just digitize — we engineer stitch files calibrated to your specific fabric, machine, and production environment.
            </p>
          </div>

          {/* Differentiator Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => {
              const IconComp = item.icon;
              return (
                <article
                  data-reveal
                  key={item.title}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20">
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
                  {row.us ? (
                    <span className="grid size-7 place-items-center rounded-full bg-emerald-500/10"><Check className="size-4 text-emerald-600" /></span>
                  ) : (
                    <span className="grid size-7 place-items-center rounded-full bg-red-500/10"><X className="size-4 text-red-500" /></span>
                  )}
                </span>
                <span className="flex justify-center">
                  {row.them ? (
                    <span className="grid size-7 place-items-center rounded-full bg-emerald-500/10"><Check className="size-4 text-emerald-600" /></span>
                  ) : (
                    <span className="grid size-7 place-items-center rounded-full bg-red-500/10"><X className="size-4 text-red-500" /></span>
                  )}
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
