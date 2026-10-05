import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SiteConfig } from "@/config/types";
import { Icon } from "@/components/icons";

export function Services({ site }: { site: SiteConfig }) {
  if (!site.services.length) return null;
  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl">What we make for you</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.services.map((s) => (
            <article key={s.slug} className="group relative flex cursor-pointer flex-col overflow-hidden rounded-lg border border-border bg-card p-7 transition duration-300 ease-out hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/5 transition duration-300 ease-out group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 motion-reduce:transition-none">
                <Icon name={s.icon} className="size-7 text-primary transition duration-300 group-hover:scale-110 group-hover:text-primary-foreground motion-reduce:transition-none" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{s.name}</h3>
              <p className="mt-2 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{s.description}</p>
              <ul className="mt-5 space-y-1.5 text-sm">{s.benefits.map((b) => <li key={b} className="border-l-2 border-accent pl-3 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">{b}</li>)}</ul>
              <Link href="#contact" className="mt-auto inline-flex items-center gap-1.5 pt-7 font-semibold text-primary transition-colors group-hover:text-accent">
                {s.cta}<ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
