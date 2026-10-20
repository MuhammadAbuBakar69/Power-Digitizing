"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import type { SiteConfig } from "@/config/types";

type Props = { site: Pick<SiteConfig, "name" | "logo" | "navigation" | "cta">; loginUrl?: string };

export function Header({ site, loginUrl }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;
  return (
    <header className={clsx("fixed inset-x-0 top-0 z-50 transition-colors duration-200", solid ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent")}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          {site.logo ? <Image src={site.logo.src} alt={site.logo.alt} width={site.logo.width} height={site.logo.height} priority className="h-9 sm:h-10 w-auto object-contain" /> : site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 text-sm lg:flex">
          {site.navigation.map((l) => (
            <Link key={l.href + l.label} href={l.href} className="text-foreground/80 transition-colors hover:text-foreground">{l.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {loginUrl && <a href={loginUrl} target="_blank" rel="noreferrer" className="text-sm text-foreground/80 hover:text-foreground">{site.cta.portalLabel}</a>}
          <Link href={site.cta.primary.href} className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-px">{site.cta.primary.label}</Link>
        </div>

        <button type="button" className="grid size-11 place-items-center rounded-md lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {site.navigation.map((l) => (
              <li key={l.href + l.label}><Link href={l.href} onClick={() => setOpen(false)} className="block border-b border-border py-3 text-base">{l.label}</Link></li>
            ))}
            {loginUrl && <li><a href={loginUrl} target="_blank" rel="noreferrer" className="block border-b border-border py-3 text-base">{site.cta.portalLabel}</a></li>}
          </ul>
          <Link href={site.cta.primary.href} onClick={() => setOpen(false)} className="mt-5 block rounded-md bg-accent py-3 text-center font-semibold text-accent-foreground">{site.cta.primary.label}</Link>
        </nav>
      )}
    </header>
  );
}
