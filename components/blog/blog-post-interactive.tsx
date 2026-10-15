"use client";

import { useEffect, useState } from "react";
import {
  ListChecks,
  ChevronDown,
  ChevronRight,
  Share2,
  Check,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
} from "lucide-react";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({
  tocItems,
}: {
  tocItems: TocItem[];
}) {
  const [activeId, setActiveId] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setReadProgress(Math.min(100, Math.max(0, scrolled)));

      const headingElements = tocItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      let currentActive = "";
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el.getBoundingClientRect().top <= 140) {
          currentActive = el.id;
          break;
        }
      }
      if (currentActive) {
        setActiveId(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-[#E6C687] to-primary z-50 transition-all duration-150 ease-out"
        style={{ width: `${readProgress}%` }}
      />

      <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <ListChecks className="size-4" />
            <span>Table of Contents</span>
          </div>
          <span className="text-[10px] font-mono text-muted-foreground">
            {Math.round(readProgress)}% read
          </span>
        </div>

        <nav className="space-y-1 max-h-[340px] overflow-y-auto pr-1 text-xs">
          {tocItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToHeading(item.id)}
                type="button"
                className={`w-full text-left py-1.5 px-2.5 rounded-md transition-all flex items-center gap-1.5 ${
                  item.level === 3 ? "pl-5 text-muted-foreground text-[11px]" : "font-medium"
                } ${
                  isActive
                    ? "bg-primary/10 text-primary font-bold translate-x-1"
                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                }`}
              >
                <ChevronRight
                  className={`size-3 shrink-0 transition-transform ${
                    isActive ? "rotate-90 text-primary" : "text-muted-foreground/50"
                  }`}
                />
                <span className="truncate">{item.text}</span>
              </button>
            );
          })}
        </nav>

        {/* Share & Bookmark Actions */}
        <div className="mt-4 pt-3.5 border-t border-border/60 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1 text-[11px] font-medium text-foreground/80 hover:bg-muted transition-colors"
          >
            {copied ? (
              <>
                <Check className="size-3 text-emerald-500" />
                <span className="text-emerald-500 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="size-3" />
                <span>Share Guide</span>
              </>
            )}
          </button>

          <span className="text-[11px] text-muted-foreground flex items-center gap-1">
            <Bookmark className="size-3 text-primary" /> Reference
          </span>
        </div>
      </div>
    </>
  );
}

export function BlogFaqAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div id="faq-section" className="mt-14 scroll-mt-28 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-primary">
        <Sparkles className="size-4" />
        <span>Master Q&A Series</span>
      </div>
      <h3 className="font-display text-2xl font-bold tracking-tight text-foreground mb-6">
        Frequently Asked Technical Inquiries
      </h3>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div
              key={idx}
              className="rounded-xl border border-border/70 bg-background overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors gap-3"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`size-4 shrink-0 transition-transform duration-200 text-muted-foreground ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-foreground/80 leading-relaxed border-t border-border/40 pt-4 bg-muted/20">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function BlogFeedback() {
  const [feedback, setFeedback] = useState<"helpful" | "unhelpful" | null>(null);

  return (
    <div className="mt-8 rounded-xl border border-border/60 bg-muted/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p className="text-xs font-semibold text-foreground">
          Was this technical guide helpful to your workflow?
        </p>
        <p className="text-[11px] text-muted-foreground">
          Help our master digitizers curate better engineering resources.
        </p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={() => setFeedback("helpful")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
            feedback === "helpful"
              ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-600 font-semibold"
              : "border-border bg-card hover:bg-muted text-foreground/80"
          }`}
        >
          <ThumbsUp className="size-3.5" />
          <span>Yes, very helpful</span>
        </button>
        <button
          type="button"
          onClick={() => setFeedback("unhelpful")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
            feedback === "unhelpful"
              ? "bg-rose-500/10 border-rose-500/40 text-rose-600 font-semibold"
              : "border-border bg-card hover:bg-muted text-foreground/80"
          }`}
        >
          <ThumbsDown className="size-3.5" />
          <span>Could be improved</span>
        </button>
      </div>
    </div>
  );
}
