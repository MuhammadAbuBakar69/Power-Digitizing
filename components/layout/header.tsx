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
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border bg-background/95 backdrop-blur shadow-sm"
          : "bg-transparent hover:bg-background/95 hover:backdrop-blur-md hover:border-b hover:border-[#14263D]/10 hover:shadow-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight transition-transform hover:opacity-90">
          {site.logo ? (
            <Image
              src={site.logo.src}
              alt={site.logo.alt}
              width={site.logo.width}
              height={site.logo.height}
              priority
              className="h-9 sm:h-10 w-auto object-contain"
            />
          ) : (
            site.name
          )}
        </Link>

        {/* Desktop Navigation with #C94343 and #14263D interactive hover styling */}
        <nav aria-label="Main" className="hidden items-center gap-1 text-sm lg:flex">
          {site.navigation.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              className="group relative rounded-full px-3.5 py-1.5 text-sm font-medium text-[#14263D]/85 transition-all duration-200 hover:bg-[#C94343]/5 hover:text-[#C94343]"
            >
              <span>{l.label}</span>
              <span className="absolute inset-x-3.5 bottom-0 h-0.5 origin-center scale-x-0 rounded-full bg-[#C94343] transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {loginUrl && (
            <a
              href={loginUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-[#14263D]/80 transition-colors hover:text-[#C94343]"
            >
              {site.cta.portalLabel}
            </a>
          )}
          <Link
            href={site.cta.primary.href}
            className="rounded-full bg-[#C94343] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-[#C94343]/20 transition-all duration-200 hover:bg-[#14263D] hover:shadow-lg hover:shadow-[#14263D]/25 hover:-translate-y-0.5"
          >
            {site.cta.primary.label}
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="grid size-11 place-items-center rounded-md text-[#14263D] transition-colors hover:text-[#C94343] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {site.navigation.map((l) => (
              <li key={l.href + l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 text-base font-medium text-[#14263D] transition-colors hover:text-[#C94343]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            {loginUrl && (
              <li>
                <a
                  href={loginUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block border-b border-border py-3 text-base font-medium text-[#14263D] transition-colors hover:text-[#C94343]"
                >
                  {site.cta.portalLabel}
                </a>
              </li>
            )}
          </ul>
          <Link
            href={site.cta.primary.href}
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-[#C94343] py-3 text-center font-semibold text-white shadow-md transition-all hover:bg-[#14263D]"
          >
            {site.cta.primary.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
