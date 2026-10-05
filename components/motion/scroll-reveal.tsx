"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;

    const motion = gsap.matchMedia();
    const context = gsap.context(() => {
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo("[data-reveal]", { autoAlpha: 0, y: 36 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: { trigger: element, start: "top 78%", once: true },
        });
        gsap.fromTo("[data-thread]", { strokeDashoffset: 240 }, {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.inOut",
          scrollTrigger: { trigger: element, start: "top 72%", once: true },
        });
        gsap.to("[data-orbit]", {
          rotate: 360,
          transformOrigin: "50% 50%",
          duration: 18,
          ease: "none",
          repeat: -1,
        });
        gsap.to("[data-pulse]", {
          scale: 1.12,
          opacity: 0.55,
          transformOrigin: "50% 50%",
          duration: 1.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, element);

    return () => {
      motion.revert();
      context.revert();
    };
  }, []);

  return <div ref={root} className={className}>{children}</div>;
}
