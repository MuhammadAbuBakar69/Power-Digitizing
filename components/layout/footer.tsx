import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import type { SiteConfig } from "@/config/types";

export function Footer({ site }: { site: SiteConfig }) {
  const resourceLinks = [
    { label: "How it works", href: "#process" },
    { label: "Our promise", href: "#promise" },
    { label: "Customer stories", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];
  const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin };

  return (
    <footer className="border-t border-secondary/10 bg-[linear-gradient(135deg,#0B1626_0%,#14263D_60%,#182e4a_85%,#1c3657_100%)] text-white">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:pb-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.85fr_0.85fr_0.85fr_1fr] lg:gap-8">
          <div className="max-w-xs">
            <Link href="/" className="group inline-flex items-center gap-3 font-display text-2xl font-semibold tracking-tight">
              <span className="grid size-9 place-items-center rounded-full bg-accent text-sm font-bold text-accent-foreground transition-transform duration-300 group-hover:rotate-12">P</span>
              {site.name}
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/65">{site.footer.about}</p>
            <Link href={site.cta.primary.href} className="mt-7 inline-flex items-center gap-2 rounded-[0.35rem] bg-primary px-4 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-1">
              {site.cta.primary.label} <ArrowUpRight aria-hidden className="size-4" />
            </Link>
          </div>

          <FooterColumn title="Services" links={site.services.map((service) => ({ label: service.name, href: "#services" }))} />
          <FooterColumn title="Use cases" links={site.useCases.map((item) => ({ label: item.title, href: "#use-cases" }))} />
          <FooterColumn title="Resources" links={resourceLinks} />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contact</p>
            <div className="mt-5 space-y-4 text-sm text-white/70">
              <a href={`mailto:${site.contact.email}`} className="flex items-start gap-3 transition-colors hover:text-white"><Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />{site.contact.email}</a>
              {site.contact.phone && <a href={`tel:${site.contact.phone}`} className="flex items-start gap-3 transition-colors hover:text-white"><Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />{site.contact.phone}</a>}
              {site.contact.address && <p className="leading-6 text-white/55">{site.contact.address}</p>}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/15 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            {site.footer.legalLinks.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-white">{link.label}</Link>)}
            <span className="h-4 w-px bg-white/20" />
            {site.socials.map((social) => {
              const SocialIcon = socialIcons[social.label as keyof typeof socialIcons];
              return <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="transition-colors hover:text-accent">{SocialIcon ? <SocialIcon aria-hidden className="size-4" /> : social.label}</a>;
            })}
          </div>
        </div>
      </div>
      <div className="overflow-hidden border-t border-white/5 px-5 pt-4 text-center font-display text-[clamp(4rem,14vw,12rem)] font-semibold leading-[0.75] tracking-[-0.06em] text-white/[0.05]" aria-hidden>{site.name}</div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title}</p>
      <ul className="mt-5 space-y-3 text-sm text-white/70">
        {links.map((link) => <li key={link.label}><Link href={link.href} className="transition-colors hover:text-white">{link.label}</Link></li>)}
      </ul>
    </div>
  );
}
