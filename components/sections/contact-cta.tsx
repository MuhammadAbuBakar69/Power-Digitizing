import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { SiteConfig } from "@/config/types";

export function ContactCta({ site }: { site: SiteConfig }) {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-secondary py-20 text-primary-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] gap-12 px-5 sm:px-6 lg:px-8 xl:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Ready when you are</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Bring us the artwork. We&apos;ll bring the precision.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">Send your design for a clear recommendation, an accurate quote and a production plan that fits your deadline.</p>
          <Link href={`mailto:${site.contact.email}`} className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-px">Start a project <ArrowUpRight aria-hidden className="size-4" /></Link>
        </div>
        <div className="border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8">
          <div className="flex items-start gap-3"><Mail aria-hidden className="mt-1 size-5 text-accent" /><a className="text-lg hover:text-white/70" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></div>
          {site.contact.phone && <div className="mt-5 flex items-start gap-3"><Phone aria-hidden className="mt-1 size-5 text-accent" /><a className="text-lg hover:text-white/70" href={`tel:${site.contact.phone}`}>{site.contact.phone}</a></div>}
          {site.contact.address && <p className="mt-6 max-w-xs text-sm leading-6 text-white/55">{site.contact.address}</p>}
        </div>
      </div>
    </section>
  );
}
