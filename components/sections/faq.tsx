import type { SiteConfig } from "@/config/types";

export function Faq({ site }: { site: SiteConfig }) {
  if (!site.faqs.length) return null;
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Common questions</h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {site.faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {f.q}<span aria-hidden className="text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
