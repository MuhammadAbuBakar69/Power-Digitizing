import Link from "next/link";
import type { SiteConfig } from "@/config/types";

export function Footer({ site }: { site: SiteConfig }) {
  return (
    <footer className="border-t border-border bg-secondary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-xl font-semibold">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm text-white/70">{site.footer.about}</p>
        </div>
        {site.services.length > 0 && (
          <div>
            <p className="font-display font-semibold">Services</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {site.services.map((s) => <li key={s.slug}><Link className="hover:text-white" href="#services">{s.name}</Link></li>)}
            </ul>
          </div>
        )}
        <div>
          <p className="font-display font-semibold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a className="hover:text-white" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></li>
            {site.contact.phone && <li><a className="hover:text-white" href={`tel:${site.contact.phone}`}>{site.contact.phone}</a></li>}
            {site.contact.address && <li>{site.contact.address}</li>}
            {site.socials.map((s) => <li key={s.href}><a className="hover:text-white" href={s.href} rel="noopener noreferrer">{s.label}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <ul className="flex flex-wrap gap-4">{site.footer.legalLinks.map((l) => <li key={l.href}><Link className="hover:text-white" href={l.href}>{l.label}</Link></li>)}</ul>
        </div>
      </div>
    </footer>
  );
}
