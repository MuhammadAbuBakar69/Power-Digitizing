import type { SiteConfig } from "@/config/types";

export function Process({ site }: { site: SiteConfig }) {
  if (!site.process.length) return null;
  return (
    <section id="process" className="scroll-mt-20 bg-primary py-20 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our four-step process</p>
        <h2 className="mt-3 max-w-2xl xl:max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl xl:text-6xl">Simple from upload to doorstep.</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-4 xl:gap-10">
          {site.process.map((item) => (
            <li key={item.step} className="group relative cursor-pointer border-t border-white/30 pt-5 transition duration-300 ease-out hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <span aria-hidden className="absolute inset-x-0 top-[-1px] h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
              <span className="inline-flex size-14 items-center justify-center rounded-full border border-transparent font-display text-4xl font-semibold text-accent transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-secondary group-hover:shadow-lg group-hover:shadow-accent/25 motion-reduce:transition-none">{item.step}</span>
              <h3 className="mt-5 font-display text-xl font-semibold transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70 transition-colors duration-300 group-hover:text-white motion-reduce:transition-none">{item.description}</p>
              <span aria-hidden className="mt-6 block h-1 w-1 rounded-full bg-accent transition-all duration-500 group-hover:w-12 motion-reduce:transition-none" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
