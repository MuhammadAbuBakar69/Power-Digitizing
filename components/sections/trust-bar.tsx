import type { SiteConfig } from "@/config/types";
import { Icon } from "@/components/icons";

export function TrustBar({ site }: { site: SiteConfig }) {
  if (!site.trust.length) return null;

  // Repeat items to ensure ultra-smooth continuous looping across all screen sizes
  const items = [...site.trust, ...site.trust];

  return (
    <section
      aria-label="Why customers trust us"
      className="relative overflow-hidden border-y border-border bg-card py-3.5 sm:py-4 pause-on-hover group"
    >
      {/* Left and right fade gradients for seamless gliding effect */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-card to-transparent z-10" />

      {/* Marquee Track: Moves from Left to Right, pauses instantly when cursor hovers on any content */}
      <div className="flex w-max animate-marquee-ltr select-none">
        {/* Primary sequence */}
        <ul className="flex shrink-0 items-center gap-8 sm:gap-12 pr-8 sm:pr-12 text-xs sm:text-sm font-medium">
          {items.map((t, idx) => (
            <li
              key={`trust-1-${t.label}-${idx}`}
              className="group/item flex items-center gap-2 sm:gap-2.5 whitespace-nowrap px-3 py-1.5 rounded-full transition-all duration-200 hover:text-primary hover:bg-primary/5 cursor-pointer"
            >
              <Icon
                name={t.icon}
                className="size-4 text-primary shrink-0 transition-transform duration-200 group-hover/item:scale-115"
              />
              <span className="tracking-tight">{t.label}</span>
            </li>
          ))}
        </ul>

        {/* Cloned sequence for seamless infinite loop */}
        <ul
          aria-hidden="true"
          className="flex shrink-0 items-center gap-8 sm:gap-12 pr-8 sm:pr-12 text-xs sm:text-sm font-medium"
        >
          {items.map((t, idx) => (
            <li
              key={`trust-2-${t.label}-${idx}`}
              className="group/item flex items-center gap-2 sm:gap-2.5 whitespace-nowrap px-3 py-1.5 rounded-full transition-all duration-200 hover:text-primary hover:bg-primary/5 cursor-pointer"
            >
              <Icon
                name={t.icon}
                className="size-4 text-primary shrink-0 transition-transform duration-200 group-hover/item:scale-115"
              />
              <span className="tracking-tight">{t.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
