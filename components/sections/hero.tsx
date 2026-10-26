"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import type { SiteConfig } from "@/config/types";

const heroSlides = [
  { image: "/images/hero/hero-leather-patch.png", label: "Custom Leather Patch" },
  { image: "/images/hero/hero-embroidery-patch.png", label: "Custom Embroidered Patch" },
  { image: "/images/hero/hero-chenille-patch.png", label: "Custom Chenille Patch" },
  { image: "/images/hero/hero-pvc-patch.png", label: "Custom 3D PVC Patch" },
  { image: "/images/hero/hero-sublimated-patch.png", label: "Custom Sublimated Patch" },
];

export function Hero({ site }: { site: SiteConfig }) {
  const { hero } = site;
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!videoOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideoOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [videoOpen]);

  return (
    <section className="relative overflow-hidden pt-24 pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
      <div className="mx-auto grid max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] gap-10 px-5 sm:px-6 lg:px-8 xl:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 xl:gap-16 2xl:gap-20">
        {/* Left Column: Copy & Actions */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {site.name} / Precision in every detail
          </p>
          <h1 className="max-w-2xl xl:max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] 2xl:text-[5.25rem]">
            {hero.headline.map((line, i) => {
              if (i === 0 && line.startsWith("Custom patches")) {
                return (
                  <span key={i} className="block">
                    <span className="font-bold text-[#C94343]">Custom </span>
                    <span className="font-bold text-[#C94343]">patches,</span>
                  </span>
                );
              }
              return <span key={i} className="block">{line}</span>;
            })}
          </h1>
          <p className="mt-5 max-w-xl xl:max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg xl:text-xl">
            {hero.subcopy}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={hero.primaryCta.href}
              className="rounded-full bg-[#C94343] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#C94343]/20 transition-all hover:bg-[#14263D] hover:-translate-y-0.5 hover:shadow-xl"
            >
              {hero.primaryCta.label}
            </Link>
            {hero.secondaryCta && (
              <Link
                href={hero.secondaryCta.href}
                className="rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-[#14263D] transition-all hover:border-[#C94343] hover:text-[#C94343]"
              >
                {hero.secondaryCta.label}
              </Link>
            )}
            <button
              type="button"
              onClick={() => {
                setVideoError(false);
                setVideoOpen(true);
              }}
              className="group inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/60 px-4 py-2.5 text-xs font-semibold text-[#14263D] transition-all hover:border-[#C94343]/50 hover:bg-[#C94343]/5 hover:text-[#C94343] cursor-pointer"
              aria-label="Play release video"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-[#C94343] text-white shadow-sm transition-transform group-hover:scale-110">
                <span className="ml-0.5 border-y-[4px] border-l-[7px] border-y-transparent border-l-white" />
              </span>
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Patch Showcase (Centered, Full View, Pure Cutouts) */}
        <div className="relative flex items-center justify-center w-full min-w-0">
          <div className="relative aspect-square w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] xl:max-w-[560px] 2xl:max-w-[620px] flex items-center justify-center">
            {/* Subtle radial ambient highlight */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#14263D]/5 via-[#C94343]/6 to-transparent blur-3xl pointer-events-none" />

            {heroSlides.map((item, index) => (
              <div
                key={item.image}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                  index === activeSlide
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="relative h-full w-full p-2 sm:p-4 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    priority={index === 0}
                    loading="eager"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 620px"
                    className="object-contain object-center drop-shadow-[0_20px_35px_rgba(20,38,61,0.18)] select-none transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}

            {/* Slide Navigation Dots */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {heroSlides.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show ${item.label}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === activeSlide
                      ? "w-8 bg-[#C94343]"
                      : "w-2 bg-[#14263D]/25 hover:bg-[#14263D]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {videoOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-secondary/95 p-4 backdrop-blur-sm md:p-10" role="dialog" aria-modal="true" aria-label="Power Digitizing release video" onMouseDown={(event) => { if (event.target === event.currentTarget) setVideoOpen(false); }}>
          <button type="button" onClick={() => setVideoOpen(false)} className="absolute right-4 top-4 z-10 grid size-11 cursor-pointer place-items-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-accent hover:text-accent-foreground md:right-8 md:top-8" aria-label="Close video">
            <X aria-hidden className="size-5" />
          </button>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[0.35rem] bg-[#f7f4ef] shadow-2xl">
            {videoError ? (
              <div className="relative aspect-video">
                <Image src="/images/american-patches/sublimated-cutout.png" alt="Power Digitizing video poster" fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-contain bg-white p-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/70 p-6 text-center text-white">
                  <p className="font-display text-2xl font-semibold">Video coming soon</p>
                  <p className="mt-2 text-sm text-white/70">Add the video file at <code className="text-accent">public/videos/power-digitizing-reel.MP4</code>.</p>
                </div>
              </div>
            ) : (
              <video
                className="max-h-[85vh] w-full bg-[#f7f4ef]"
                controls
                autoPlay
                playsInline
                preload="auto"
                poster="/images/american-patches/sublimated-cutout.png"
                onError={() => setVideoError(true)}
              >
                <source src="/videos/power-digitizing-reel.MP4" type="video/mp4" />
                <source src="/videos/power-digitizing-reel.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
