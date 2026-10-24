"use client";

import { useEffect, useState } from "react";
import type { SiteConfig } from "@/config/types";

type Testimonial = SiteConfig["testimonials"][number];

function TestimonialCard({ item, position }: { item: Testimonial; position: "previous" | "active" | "next" }) {
  const isActive = position === "active";
  const initials = item.name.split(" ").map((part) => part[0]).join("").slice(0, 2);

  return (
    <blockquote className={`absolute inset-y-0 w-full overflow-hidden rounded-[0.35rem] border bg-card p-6 shadow-sm transition-all duration-700 ease-out sm:p-7 md:p-8 ${
      isActive
        ? "left-1/2 z-20 -translate-x-1/2 border-primary/25 opacity-100 shadow-xl shadow-primary/10 md:w-[58%]"
        : position === "previous"
          ? "left-0 z-10 hidden -translate-x-[62%] border-border opacity-35 md:block md:w-[58%]"
          : "right-0 z-10 hidden translate-x-[62%] border-border opacity-35 md:block md:w-[58%]"
    }`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-1 text-accent" aria-label={`${item.rating ?? 5} out of 5 stars`}>
          {Array.from({ length: item.rating ?? 5 }, (_, index) => <span key={index} aria-hidden>★</span>)}
        </div>
        <span className="font-display text-3xl leading-none text-primary/15">“</span>
      </div>
      <p className={`mt-6 leading-7 text-foreground transition-all duration-700 ${isActive ? "text-base md:text-lg" : "text-sm"}`}>“{item.quote}”</p>
      <footer className="mt-8 flex items-center gap-3 border-t border-border pt-5">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-sm font-semibold text-white">{initials}</span>
        <div>
          <p className="font-semibold">{item.name}</p>
          {item.role && <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>}
        </div>
      </footer>
    </blockquote>
  );
}

export function Testimonials({ site }: { site: SiteConfig }) {
  const testimonials = site.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || testimonials.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused, testimonials.length]);

  if (!testimonials.length) return null;

  const previousIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;

  return (
    <section id="testimonials" className="border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center">
          <p className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white">Testimonials</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">Kind words for Power Digitizing.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">Trusted by teams, brands and creators who care about the details that make good work last.</p>
        </div>

        <div className="relative mx-auto mt-12 h-[430px] max-w-5xl xl:max-w-6xl overflow-hidden sm:h-[390px] md:h-[360px]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} aria-live="polite">
          <TestimonialCard item={testimonials[previousIndex]} position="previous" />
          <TestimonialCard item={testimonials[activeIndex]} position="active" />
          <TestimonialCard item={testimonials[nextIndex]} position="next" />
        </div>

        <div className="mt-7 flex justify-center gap-2" aria-label="Testimonial slides">
          {testimonials.map((item, index) => (
            <button key={item.name} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show testimonial from ${item.name}`} aria-current={index === activeIndex} className={`h-2 cursor-pointer rounded-full transition-all duration-500 ${index === activeIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-accent"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
