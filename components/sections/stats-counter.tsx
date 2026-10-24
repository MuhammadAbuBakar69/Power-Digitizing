"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number, shouldStart: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);
  return count;
}

const stats = [
  { value: 250000, suffix: "+", label: "Designs Digitized", description: "Production-ready embroidery files delivered to contract decorators and brands worldwide." },
  { value: 15, suffix: "+ Years", label: "Industry Experience", description: "Founded in 2010 with a passion for manual punching artistry over automated shortcuts." },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Measured across 1,000+ active accounts through repeat orders and referral rates." },
  { value: 4, suffix: "h Rush", label: "Fastest Turnaround", description: "Emergency same-day digitizing when your production line can't wait." },
];

function StatItem({ stat, visible }: { stat: typeof stats[0]; visible: boolean }) {
  const count = useCountUp(stat.value, 2000, visible);

  return (
    <div
      className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.07]"
    >
      <div className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        {count.toLocaleString()}
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/90">{stat.label}</h3>
      <p className="mt-2 text-xs leading-relaxed text-white/55">{stat.description}</p>
      <span aria-hidden className="absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-accent transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-border bg-secondary py-20 text-white md:py-28">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div aria-hidden className="absolute -right-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="absolute -left-20 -bottom-20 size-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Power Digitizing by the numbers</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl xl:text-6xl">
            Results that speak for themselves.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">
            Every number represents real production runs, satisfied customers, and precision-crafted embroidery files.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
