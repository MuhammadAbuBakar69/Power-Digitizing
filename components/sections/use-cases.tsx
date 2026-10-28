import type { SiteConfig } from "@/config/types";
import { Icon } from "@/components/icons";

export function UseCases({ site }: { site: SiteConfig }) {
  if (!site.useCases.length) return null;
  return (
    <section id="use-cases" className="scroll-mt-20 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-2xl xl:max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Designed for every purpose</p><h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl xl:text-6xl">Custom patches for every kind of project.</h2></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {site.useCases.map((item) => (
            <article key={item.title} className="group relative cursor-pointer border-t-2 border-primary bg-card p-6 transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <span className="absolute inset-x-0 top-[-2px] h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
              <Icon name={item.icon} className="size-7 text-accent transition duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 motion-reduce:transition-none" />
              <h3 className="mt-5 font-display text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
              <p className="mt-2 leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{item.description}</p>
              <span aria-hidden className="mt-6 block h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-10 motion-reduce:transition-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
