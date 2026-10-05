import type { SiteConfig } from "@/config/types";

export function Testimonials({ site }: { site: SiteConfig }) {
  if (!site.testimonials.length) return null;
  return <section id="testimonials" className="border-t border-border bg-card py-20 md:py-28"><div className="mx-auto max-w-6xl px-5"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">What our customers say</p><h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">Good work travels.</h2><div className="mt-12 grid gap-5 md:grid-cols-3">{site.testimonials.map((item) => <blockquote key={item.name} className="border border-border bg-background p-6"><div className="text-accent" aria-label={`${item.rating ?? 5} out of 5 stars`}>★★★★★</div><p className="mt-5 leading-7 text-foreground">“{item.quote}”</p><footer className="mt-7 border-t border-border pt-4"><p className="font-semibold">{item.name}</p>{item.role && <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>}</footer></blockquote>)}</div></div></section>;
}
