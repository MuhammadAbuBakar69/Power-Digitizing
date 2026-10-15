import Image from "next/image";
import Link from "next/link";
import type { SiteConfig } from "@/config/types";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function Collections({ site }: { site: SiteConfig }) {
  if (!site.collections.length) return null;
  return (
    <section id="collections" className="scroll-mt-20 border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <ScrollReveal>
          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div data-reveal className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Premium patch collections</p><h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">Choose the finish that fits your idea.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">Every material brings a different character to your design.</p><p className="text-lg leading-8 text-muted-foreground">We help you choose the one that looks right and lasts longer.</p></div>
            <div data-reveal className="relative hidden h-28 w-48 shrink-0 overflow-hidden md:block" aria-hidden>
              <svg viewBox="0 0 190 110" className="h-full w-full overflow-visible text-primary"><path data-thread d="M8 72c26-58 53-61 82-8s52 50 92-42" fill="none" stroke="currentColor" strokeDasharray="240" strokeDashoffset="240" strokeLinecap="round" strokeWidth="2" /><circle data-orbit cx="95" cy="55" r="35" fill="none" stroke="currentColor" strokeDasharray="2 8" strokeWidth="1" /><circle data-pulse cx="95" cy="55" r="4" fill="var(--accent)" /></svg>
            </div>
            <p data-reveal className="max-w-sm text-muted-foreground">Detailed customization, premium materials and a free proof before production.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {site.collections.map((collection) => (
              <Link
                href={`/collections/${collection.slug}`}
                data-reveal
                key={collection.name}
                className="group overflow-hidden rounded-2xl border border-border bg-background block shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[1.2] overflow-hidden bg-muted">
                  <Image src={collection.image} alt={collection.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{collection.category}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold group-hover:text-primary transition-colors">{collection.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">{collection.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">View details →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-9 flex justify-center"><Link href="/collections" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">Explore all patch designs <span aria-hidden>→</span></Link></div>
        </ScrollReveal>
      </div>
    </section>
  );
}
