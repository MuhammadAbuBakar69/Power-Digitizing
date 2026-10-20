import Link from "next/link";
import Image from "next/image";
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
    <footer className="border-t border-white/10 bg-[#0B1626] text-white">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:pb-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.85fr_0.85fr_0.85fr_1fr] lg:gap-8">
          <div className="max-w-xs">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="rounded-lg bg-white/10 p-1.5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/brand/logo.png"
                  alt={site.name}
                  width={140}
                  height={48}
                  className="h-8 w-auto brightness-0 invert object-contain"
                />
              </div>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-slate-300/80">{site.footer.about}</p>
            <Link
              href={site.cta.primary.href}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#C94343] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#C94343]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b03535] hover:shadow-xl hover:shadow-[#C94343]/35"
            >
              <span>{site.cta.primary.label}</span>
              <ArrowUpRight aria-hidden className="size-4" />
            </Link>
          </div>

          <FooterColumn title="Services" links={site.services.map((service) => ({ label: service.name, href: "#services" }))} />
          <FooterColumn title="Use cases" links={site.useCases.map((item) => ({ label: item.title, href: "#use-cases" }))} />
          <FooterColumn title="Resources" links={resourceLinks} />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">Contact</p>
            <div className="mt-5 space-y-3.5 text-sm text-slate-300">
              <a
                href={`mailto:${site.contact.email}`}
                className="group flex items-start gap-3 transition-colors hover:text-white"
              >
                <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-[#C94343] transition-transform group-hover:scale-110" />
                <span>{site.contact.email}</span>
              </a>
              {site.contact.phone && (
                <a
                  href={`tel:${site.contact.phone}`}
                  className="group flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-[#C94343] transition-transform group-hover:scale-110" />
                  <span>{site.contact.phone}</span>
                </a>
              )}
              {site.contact.address && (
                <p className="leading-relaxed text-slate-400 text-xs">{site.contact.address}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            {site.footer.legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
            <span className="h-4 w-px bg-white/15" />
            {site.socials.map((social) => {
              const SocialIcon = socialIcons[social.label as keyof typeof socialIcons];
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="transition-colors hover:text-white"
                >
                  {SocialIcon ? <SocialIcon aria-hidden className="size-4" /> : social.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="overflow-hidden border-t border-white/5 px-5 pt-4 text-center font-display text-[clamp(4rem,14vw,12rem)] font-semibold leading-[0.75] tracking-[-0.06em] text-white/[0.03] select-none"
        aria-hidden
      >
        {site.name}
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">{title}</p>
      <ul className="mt-5 space-y-3 text-sm text-slate-300/85">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition-colors duration-150 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
