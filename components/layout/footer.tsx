import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import type { SiteConfig } from "@/config/types";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.217 8.217 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m-3.53 3.61c-.19 0-.42.07-.63.32-.22.25-.83.81-.83 1.98s.85 2.3.97 2.46c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.16 1.49.1.45-.07 1.4-.57 1.6-1.13.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.4-.69-1.62-.77c-.22-.08-.37-.12-.53.12-.16.25-.61.77-.75.93-.14.16-.28.18-.52.06s-1.01-.37-1.93-1.19c-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.27-.72-1.74c-.19-.46-.39-.4-.53-.41h-.45z" />
    </svg>
  );
}

export function Footer({ site }: { site: SiteConfig }) {
  const serviceLinks = [
    { label: "Vector Artwork", href: "/services/vector" },
    { label: "Embroidery Digitizing", href: "/services/embroidery" },
    { label: "Patch Collections", href: "/collections" },
    { label: "Get a Free Quote", href: "/quote" },
  ];
  const resourceLinks = [
    { label: "How it works", href: "/#process" },
    { label: "Our promise", href: "/#promise" },
    { label: "Refund policy", href: "/refund-policy" },
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "FAQ", href: "/#faq" },
  ];
  const useCaseLinks = [
    { label: "Uniform Patches", href: "/collections/embroidered-patches" },
    { label: "Brand Patches", href: "/collections/woven-patches" },
    { label: "Tactical Patches", href: "/collections/pvc-patches" },
    { label: "Varsity & Chenille", href: "/collections/chenille-patches" },
  ];
  const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin, WhatsApp: WhatsAppIcon };

  return (
    <footer className="border-t border-white/10 bg-[#0B1626] text-white">
      <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10 pb-12 pt-16 md:pb-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.85fr_0.85fr_0.85fr_1fr] lg:gap-8 xl:grid-cols-[1.35fr_0.9fr_0.9fr_0.9fr_1.1fr] xl:gap-10">
          <div className="max-w-xs xl:max-w-sm">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="rounded-xl bg-white px-3.5 py-2.5 shadow-md transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={site.logo?.src ?? "/images/brand/aaaa.PNG"}
                  alt={site.name}
                  width={292}
                  height={131}
                  className="h-11 sm:h-12 w-auto object-contain"
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

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Use cases" links={useCaseLinks} />
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
