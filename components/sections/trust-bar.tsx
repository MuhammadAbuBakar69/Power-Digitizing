import type { SiteConfig } from "@/config/types";
import { Icon } from "@/components/icons";

export function TrustBar({ site }: { site: SiteConfig }) {
  if (!site.trust.length) return null;
  return (
    <section aria-label="Why customers trust us" className="border-y border-border bg-card">
      <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-3 px-5 py-5 text-sm font-medium">
        {site.trust.map((t) => (
          <li key={t.label} className="flex items-center gap-2"><Icon name={t.icon} className="size-4 text-primary" />{t.label}</li>
        ))}
      </ul>
    </section>
  );
}
