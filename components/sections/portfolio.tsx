import Image from "next/image";
import type { SiteConfig } from "@/config/types";

type Kind = "embroidery" | "vector" | "patch";

function Artwork({ kind }: { kind: Kind }) {
  if (kind === "vector") {
    return (
      <svg aria-hidden viewBox="0 0 520 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="520" height="300" fill="#e4572e" />
        <path d="M-10 262 167 74l74 84 91-112 198 216" fill="none" stroke="#f8f3ea" strokeWidth="30" />
        <path d="M-10 262 167 74l74 84 91-112 198 216" fill="none" stroke="#1f2f86" strokeDasharray="2 13" strokeLinecap="round" strokeWidth="7" />
        <circle cx="386" cy="78" fill="#f8f3ea" r="28" /><circle cx="386" cy="78" fill="#1f2f86" r="10" />
      </svg>
    );
  }
  if (kind === "patch") {
    return (
      <svg aria-hidden viewBox="0 0 520 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="520" height="300" fill="#14213d" />
        <path d="M121 43h278l59 73-59 141H121l-59-141z" fill="#e4572e" stroke="#f8f3ea" strokeWidth="9" />
        <path d="M137 62h246l40 54-40 121H137l-40-121z" fill="none" stroke="#f8f3ea" strokeDasharray="4 8" strokeWidth="4" />
        <path d="M172 171c32-66 47-69 77-1 31-68 48-65 80 1" fill="none" stroke="#f8f3ea" strokeLinecap="round" strokeWidth="13" />
        <path d="M183 192h145" stroke="#f8f3ea" strokeLinecap="round" strokeWidth="7" />
      </svg>
    );
  }
  return (
    <svg aria-hidden viewBox="0 0 520 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="520" height="300" fill="#e7edf0" />
      <path d="M0 224h520v76H0z" fill="#cbd7d8" />
      <path d="M260 35 329 91l-26 82h-86l-26-82z" fill="#1f2f86" stroke="#f8f3ea" strokeWidth="8" />
      <path d="M260 63 299 95l-16 51h-46l-16-51z" fill="#e4572e" />
      <path d="m260 87 9 21 23 2-18 15 6 23-20-12-20 12 6-23-18-15 23-2z" fill="#f8f3ea" />
      <path d="M130 226c28-56 61-56 87 0M306 226c28-56 61-56 87 0" fill="none" stroke="#1f2f86" strokeDasharray="3 9" strokeLinecap="round" strokeWidth="8" />
    </svg>
  );
}

export function Portfolio({ site }: { site: SiteConfig }) {
  if (!site.portfolio.length) return null;
  return (
    <section id="portfolio" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">A look at the work</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">Production-ready art, thoughtfully composed.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">From the first sketch to the final stitch file, every project gets the attention it needs to work in the real world.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.portfolio.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-slate-50/80 to-slate-100/40 p-4 sm:p-6 flex items-center justify-center border-b border-border/40">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_12px_20px_rgba(20,38,61,0.16)] select-none"
                  />
                ) : (
                  <Artwork kind={item.kind} />
                )}
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.label}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
