import type { SiteConfig } from "@/config/types";
import { Icon } from "@/components/icons";

export function PromiseGrid({ site }: { site: SiteConfig }) {
  if (!site.promises.length) return null;
  return (
    <section id="promise" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our promise to you</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">Zero risk. Every order.</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">Six practical promises backed on every patch we make, whether you order five or five thousand.</p>
        </div>
        <div className="mt-12 grid gap-x-10 gap-y-9 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {site.promises.map((item) => (
            <article key={item.title} className="group relative flex cursor-pointer gap-4 border-l-2 border-transparent pl-4 transition duration-300 ease-out hover:-translate-y-1 hover:border-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full transition duration-300 group-hover:bg-accent/10 motion-reduce:transition-none">
                <Icon name={item.icon} className="size-5 text-accent transition duration-300 group-hover:scale-125 group-hover:rotate-6 motion-reduce:transition-none" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                <p className="mt-2 leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{item.description}</p>
                <span aria-hidden className="mt-4 block h-px w-0 bg-accent transition-all duration-500 group-hover:w-10 motion-reduce:transition-none" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
