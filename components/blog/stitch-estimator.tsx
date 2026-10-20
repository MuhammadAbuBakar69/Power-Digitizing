"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowUpRight, Gauge, Clock, Layers, ShieldCheck } from "lucide-react";

export function StitchEstimator() {
  const [width, setWidth] = useState<number>(3.0);
  const [height, setHeight] = useState<number>(2.5);
  const [density, setDensity] = useState<"light" | "medium" | "heavy">("medium");
  const [substrate, setSubstrate] = useState<"cap" | "polo" | "jacket" | "hoodie">("cap");

  // Approximate industry stitch estimation formula
  // Square inches * base multiplier based on density
  const squareInches = width * height;
  const multiplier = density === "light" ? 950 : density === "medium" ? 1450 : 2100;
  const estimatedStitches = Math.round(squareInches * multiplier);

  // Machine time at average 700 stitches per minute (SPM) with trim delays
  const machineMinutes = Math.round((estimatedStitches / 700) * 1.15);

  const needle =
    substrate === "cap"
      ? "75/11 Titanium Ballpoint / Sharp"
      : substrate === "polo"
      ? "70/10 Light Ballpoint"
      : substrate === "jacket"
      ? "80/12 Sharp"
      : "75/11 Ballpoint";

  const stabilizer =
    substrate === "cap"
      ? "2.5 oz Tearaway Cap Stabilizer"
      : substrate === "polo"
      ? "2.5 oz Weblon No-Show Mesh Cutaway"
      : substrate === "jacket"
      ? "3.0 oz Heavyweight Cutaway"
      : "Double Layer Tearaway + Water Soluble Topping";

  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-lg relative overflow-hidden">
      <div aria-hidden className="absolute top-0 right-0 -mr-20 -mt-20 size-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Calculator className="size-3.5" /> Interactive Production Tool
            </div>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Commercial Embroidery Stitch & Run-Time Estimator
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-foreground/65 max-w-xl">
              Calculate realistic stitch counts, multi-head run times, needle recommendations, and stabilizer recipes based on real production formulas.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
              Live Industrial Algorithm
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Dimensions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-foreground mb-2">
                  <span>Patch Width (Inches)</span>
                  <span className="text-primary font-mono">{width}&quot;</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="6.0"
                  step="0.25"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-foreground/50 mt-1">
                  <span>1.0&quot; (Small Chest)</span>
                  <span>3.5&quot; (Cap Crown)</span>
                  <span>6.0&quot; (Jacket Arm)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-foreground mb-2">
                  <span>Patch Height (Inches)</span>
                  <span className="text-primary font-mono">{height}&quot;</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="5.0"
                  step="0.25"
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-foreground/50 mt-1">
                  <span>1.0&quot;</span>
                  <span>2.5&quot;</span>
                  <span>5.0&quot;</span>
                </div>
              </div>
            </div>

            {/* Design Coverage / Stitch Density */}
            <div>
              <p className="text-xs font-semibold text-foreground mb-2.5">Artwork Stitch Density Level</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "light", label: "Light Coverage", sub: "Outlines & 40% Twill" },
                  { id: "medium", label: "Standard Logo", sub: "Text & 75% Fill" },
                  { id: "heavy", label: "Solid High-Density", sub: "100% Full Tatami" },
                ].map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDensity(d.id as "light" | "medium" | "heavy")}
                    className={`rounded-xl border p-3 text-left transition-all ${
                      density === d.id
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border bg-background hover:bg-muted/40"
                    }`}
                  >
                    <p className={`text-xs font-bold ${density === d.id ? "text-primary" : "text-foreground"}`}>
                      {d.label}
                    </p>
                    <p className="text-[10px] text-foreground/55 mt-0.5">{d.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Garment Substrate */}
            <div>
              <p className="text-xs font-semibold text-foreground mb-2.5">Target Garment / Substrate</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "cap", label: "Structured Cap" },
                  { id: "polo", label: "Performance Polo" },
                  { id: "jacket", label: "Heavy Jacket" },
                  { id: "hoodie", label: "Fleece Hoodie" },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSubstrate(s.id as "cap" | "polo" | "jacket" | "hoodie")}
                    className={`rounded-xl border py-2.5 px-3 text-center text-xs font-semibold transition-all ${
                      substrate === s.id
                        ? "border-foreground bg-foreground text-background shadow-sm"
                        : "border-border bg-background text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#0B1626] to-[#14263D] text-white p-6 sm:p-7 shadow-xl flex flex-col justify-between border border-white/10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C94343]">
                ESTIMATED SPECIFICATIONS
              </span>

              {/* Big Stitch Count */}
              <div className="mt-4 border-b border-white/10 pb-5">
                <p className="text-xs text-white/60">Estimated Total Stitch Count</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {estimatedStitches.toLocaleString()}
                  </span>
                  <span className="text-accent text-sm font-semibold">stitches</span>
                </div>
                <p className="mt-2 text-[11px] text-white/65">
                  Surface Area: <strong>{squareInches.toFixed(1)} sq inches</strong>
                </p>
              </div>

              {/* Recipe Breakdown */}
              <div className="mt-5 space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5 text-white/70">
                    <Clock className="size-3.5 text-accent" /> Estimated Run-Time:
                  </span>
                  <span className="font-bold text-white font-mono">~{machineMinutes} mins / head</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5 text-white/70">
                    <Gauge className="size-3.5 text-accent" /> Optimal Needle:
                  </span>
                  <span className="font-semibold text-white/90">{needle}</span>
                </div>

                <div className="flex items-start justify-between border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5 text-white/70 shrink-0">
                    <Layers className="size-3.5 text-accent" /> Stabilizer:
                  </span>
                  <span className="font-semibold text-white/90 text-right max-w-[180px]">{stabilizer}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-white/70">
                    <ShieldCheck className="size-3.5 text-emerald-400" /> Pull Compensation:
                  </span>
                  <span className="font-semibold text-emerald-300 font-mono">+0.35mm to +0.40mm</span>
                </div>
              </div>
            </div>

            {/* CTA inside calculator */}
            <div className="mt-6 pt-5 border-t border-white/15">
              <Link
                href="/quote"
                className="w-full rounded-xl bg-primary py-3 px-4 text-xs font-bold text-white text-center hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Get Exact Human Digitizing Proof</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <p className="mt-2 text-[10px] text-white/50 text-center font-mono">
                FREE 24H PROOF • EXACT STITCH COUNT VERIFIED
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
