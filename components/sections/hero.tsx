"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import type { SiteConfig } from "@/config/types";

const heroSlides = [
  { image: "/images/american-patches/embroidered.jpg", label: "Embroidery", title: "Made to be worn." },
  { image: "/images/american-patches/chenille.jpg", label: "Chenille", title: "Texture that stands out." },
  { image: "/images/american-patches/leather.jpg", label: "Leather", title: "Finished with character." },
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

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{site.name} / Precision in every detail</p>
          <h1 className="max-w-2xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-[4.4rem]">
            {hero.headline.map((line, i) => <span key={i} className="block">{line}</span>)}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">{hero.subcopy}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={hero.primaryCta.href} className="rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-px">{hero.primaryCta.label}</Link>
            {hero.secondaryCta && <Link href={hero.secondaryCta.href} className="rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary">{hero.secondaryCta.label}</Link>}
          </div>

          <button type="button" onClick={() => { setVideoError(false); setVideoOpen(true); }} className="group mt-10 block w-full max-w-md cursor-pointer text-left" aria-label="Play release video">
            <span className="relative block aspect-[2.15/1] overflow-hidden rounded-2xl bg-secondary">
              <Image src="/images/american-patches/sublimated.jpg" alt="Colorful custom patch artwork" fill priority sizes="(max-width: 768px) 100vw, 420px" className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90" />
              <span className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent" />
              <span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-secondary shadow-lg transition-transform group-hover:scale-110" aria-hidden>
                <span className="ml-1 border-y-[7px] border-l-[10px] border-y-transparent border-l-secondary" />
              </span>
              <span className="absolute bottom-4 left-5 text-lg font-medium text-white">Play release video</span>
            </span>
          </button>
        </div>
        <div className="relative mx-auto aspect-[0.88/1] w-full max-w-[570px] overflow-hidden rounded-2xl bg-secondary text-white shadow-2xl shadow-secondary/10">
          {heroSlides.map((item, index) => (
            <Image key={item.image} src={item.image} alt={`${item.label} custom artwork`} fill sizes="(max-width: 1024px) 100vw, 570px" priority={index === 0} className={`object-cover transition-opacity duration-700 ${index === activeSlide ? "opacity-100" : "opacity-0"}`} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />
          <div className="absolute inset-x-7 bottom-7 md:inset-x-10 md:bottom-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{slide.label}</p>
            <p className="mt-3 max-w-sm font-display text-4xl font-semibold leading-none md:text-5xl">{slide.title}</p>
            <div className="mt-8 flex items-center gap-2" aria-label="Hero gallery slides">
              {heroSlides.map((item, index) => <button key={item.image} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show ${item.label} slide`} aria-current={index === activeSlide} className={`h-1 rounded-full transition-all ${index === activeSlide ? "w-12 bg-white" : "w-6 bg-white/45 hover:bg-white/75"}`} />)}
            </div>
          </div>
        </div>
      </div>
      {videoOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-secondary/95 p-4 backdrop-blur-sm md:p-10" role="dialog" aria-modal="true" aria-label="Power Digitizing release video" onMouseDown={(event) => { if (event.target === event.currentTarget) setVideoOpen(false); }}>
          <button type="button" onClick={() => setVideoOpen(false)} className="absolute right-4 top-4 z-10 grid size-11 cursor-pointer place-items-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-accent hover:text-accent-foreground md:right-8 md:top-8" aria-label="Close video">
            <X aria-hidden className="size-5" />
          </button>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[0.35rem] bg-black shadow-2xl">
            {videoError ? (
              <div className="relative aspect-video">
                <Image src="/images/american-patches/sublimated.jpg" alt="Power Digitizing video poster" fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/70 p-6 text-center text-white">
                  <p className="font-display text-2xl font-semibold">Video coming soon</p>
                  <p className="mt-2 text-sm text-white/70">Add the video file at <code className="text-accent">public/videos/power-digitizing-reel.MP4</code>.</p>
                </div>
              </div>
            ) : (
              <video className="max-h-[85vh] w-full" controls autoPlay playsInline poster="/images/american-patches/sublimated.jpg" onError={() => setVideoError(true)}>
                <source src="/videos/power-digitizing-reel.MP4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
