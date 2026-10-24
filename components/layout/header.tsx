"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown, PenTool, Scissors, ArrowRight } from "lucide-react";
import clsx from "clsx";
import type { SiteConfig } from "@/config/types";

type Props = { site: Pick<SiteConfig, "name" | "logo" | "navigation" | "cta">; loginUrl?: string };

export function Header({ site, loginUrl }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSub = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

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
      <div className="mx-auto flex h-16 sm:h-20 max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] items-center justify-between px-5 sm:px-6 lg:px-8 xl:px-10">
        {/* Brand Logo - Returns to Home from any page */}
        <Link
          href="/"
          aria-label="Power Digitizing Home"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight transition-transform hover:opacity-90 py-1"
        >
          {site.logo ? (
            <Image
              src={site.logo.src}
              alt={site.logo.alt}
              width={site.logo.width}
              height={site.logo.height}
              priority
              className="h-12 sm:h-14 md:h-[58px] w-auto object-contain"
            />
          ) : (
            site.name
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 xl:gap-2 text-sm lg:flex">
          {site.navigation.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isOpen = activeDropdown === item.label;

            if (!hasChildren) {
              return (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="group relative rounded-full px-3.5 py-1.5 xl:px-4 xl:py-2 text-sm font-medium text-[#14263D]/85 transition-all duration-200 hover:bg-[#C94343]/5 hover:text-[#C94343]"
                >
                  <span>{item.label}</span>
                  <span className="absolute inset-x-3.5 bottom-0 h-0.5 origin-center scale-x-0 rounded-full bg-[#C94343] transition-transform duration-200 ease-out group-hover:scale-x-100" />
                </Link>
              );
            }

            const isCollections = item.label.toLowerCase() === "collections";

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "group relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 xl:px-4 xl:py-2 text-sm font-medium transition-all duration-200",
                    isOpen
                      ? "bg-[#C94343]/10 text-[#C94343]"
                      : "text-[#14263D]/85 hover:bg-[#C94343]/5 hover:text-[#C94343]"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={clsx(
                      "size-3.5 transition-transform duration-200",
                      isOpen && "rotate-180 text-[#C94343]"
                    )}
                  />
                  <span
                    className={clsx(
                      "absolute inset-x-3.5 bottom-0 h-0.5 origin-center rounded-full bg-[#C94343] transition-transform duration-200 ease-out",
                      isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>

                {/* Dropdown Floating Menu */}
                {isOpen && (
                  <div
                    className={clsx(
                      "absolute top-full pt-2 transition-all duration-200 animate-in fade-in-0 slide-in-from-top-2",
                      isCollections ? "left-1/2 -translate-x-1/2" : "left-0"
                    )}
                  >
                    <div
                      className={clsx(
                        "overflow-hidden rounded-2xl border border-border/80 bg-background/95 p-3 shadow-2xl backdrop-blur-xl ring-1 ring-black/5",
                        isCollections ? "w-[480px]" : "w-[320px]"
                      )}
                    >
                      {/* Services Menu Format */}
                      {!isCollections && (
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group flex items-start gap-3 rounded-xl p-3 text-left transition-all duration-150 hover:bg-[#C94343]/5"
                            >
                              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-[#14263D]/5 text-[#14263D] transition-colors group-hover:bg-[#C94343] group-hover:text-white">
                                {child.label.toLowerCase().includes("vector") ? (
                                  <PenTool className="size-4" />
                                ) : (
                                  <Scissors className="size-4" />
                                )}
                              </span>
                              <div>
                                <div className="text-sm font-semibold text-[#14263D] transition-colors group-hover:text-[#C94343]">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <p className="mt-0.5 text-xs text-muted-foreground leading-snug">
                                    {child.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Collections Menu Format (2 Columns) */}
                      {isCollections && (
                        <div>
                          <div className="mb-2 px-3 pt-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                            Custom Patch Collections
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {item.children?.map((child) => (
                              <Link
                                key={child.href + child.label}
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-center gap-2.5 rounded-xl px-3 py-2 text-left transition-all duration-150 hover:bg-[#C94343]/5"
                              >
                                <span className="size-1.5 rounded-full bg-[#14263D]/30 transition-all duration-150 group-hover:scale-125 group-hover:bg-[#C94343]" />
                                <span className="text-xs font-medium text-[#14263D] transition-colors group-hover:text-[#C94343]">
                                  {child.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-3 border-t border-border/60 pt-2 px-1">
                            <Link
                              href="/collections"
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-[#C94343] hover:bg-[#C94343]/5 transition-colors"
                            >
                              <span>Browse Complete Gallery</span>
                              <ArrowRight className="size-3.5" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden max-h-[85vh] overflow-y-auto"
        >
          <ul className="flex flex-col">
            {site.navigation.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isExpanded = Boolean(mobileExpanded[item.label]);

              if (!hasChildren) {
                return (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-border/60 py-3 text-base font-medium text-[#14263D] transition-colors hover:text-[#C94343]"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.label} className="border-b border-border/60 py-2">
                  <button
                    type="button"
                    onClick={() => toggleMobileSub(item.label)}
                    className="flex w-full items-center justify-between py-2 text-base font-medium text-[#14263D] transition-colors hover:text-[#C94343]"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={clsx(
                        "size-4 transition-transform duration-200",
                        isExpanded && "rotate-180 text-[#C94343]"
                      )}
                    />
                  </button>

                  {isExpanded && (
                    <ul className="mt-1 space-y-1 pb-2 pl-3">
                      {item.children?.map((child) => (
                        <li key={child.href + child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-[#14263D]/80 hover:bg-[#C94343]/5 hover:text-[#C94343] transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}

            {loginUrl && (
              <li>
                <a
                  href={loginUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block border-b border-border/60 py-3 text-base font-medium text-[#14263D] transition-colors hover:text-[#C94343]"
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

