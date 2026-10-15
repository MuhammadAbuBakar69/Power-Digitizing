import { FileCode, Cpu, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const formats = [
  {
    ext: ".DST",
    machine: "Tajima Industrial",
    compatibility: "Universal commercial industry standard. Reads jump, stop, and stitch coordinates on all multi-head machines.",
    colorData: "Machine stop commands (manual color assignment on machine console)",
    badge: "Most Common",
  },
  {
    ext: ".PES",
    machine: "Brother & Babylock",
    compatibility: "Standard format for Brother PR-series multi-needle (PR655, PR1050X) and home embroidery units.",
    colorData: "Embedded Brother thread palette & preview bitmap",
    badge: "Multi-Needle Pro",
  },
  {
    ext: ".EXP",
    machine: "Melco & Bernina",
    compatibility: "Utilized on Melco EMT16X modular machines and Bernina systems. High speed, minimal trims.",
    colorData: "Stop code based (requires companion .EOF or .PDF run sheet)",
    badge: "High Speed Modular",
  },
  {
    ext: ".DSB",
    machine: "Barudan Multi-Head",
    compatibility: "Native binary format for Barudan industrial multi-head machinery with precise trim commands.",
    colorData: "Embedded Barudan command structure",
    badge: "Heavy Duty",
  },
  {
    ext: ".JEF",
    machine: "Janome & Elna",
    compatibility: "Formatted for Janome MB-4, MB-7, and Memory Craft embroidery lines with hoop boundary limits.",
    colorData: "Janome thread palette encoded",
    badge: "Boutique Studio",
  },
  {
    ext: ".EMB",
    machine: "Wilcom Master Source",
    compatibility: "The uncompressed master object file containing native vector wireframes, satin angles, and density parameters.",
    colorData: "Full Pantone PMS & Madeira thread libraries",
    badge: "Master Source File",
  },
];

export function MachineMatrix() {
  return (
    <div className="mt-20 border-t border-border pt-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <Cpu className="size-3.5" /> Machine Compatibility
        </div>
        <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Supported Commercial Machine File Formats
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-foreground/65">
          Every Power Digitizing order includes universal Tajima .DST plus your choice of native machine format and full color run sheet PDF.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="border-b border-border bg-muted/50 text-[11px] font-mono uppercase tracking-wider text-foreground/70">
            <tr>
              <th className="px-6 py-4">Format</th>
              <th className="px-6 py-4">Target Equipment</th>
              <th className="px-6 py-4">Technical Details</th>
              <th className="px-6 py-4">Color Encoding</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {formats.map((fmt, i) => (
              <tr key={fmt.ext} className={`transition-colors hover:bg-muted/30 ${i % 2 === 0 ? "bg-background" : "bg-card"}`}>
                <td className="px-6 py-4 font-mono font-bold text-primary flex items-center gap-2">
                  <FileCode className="size-4 shrink-0" />
                  <span>{fmt.ext}</span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-sans font-bold text-primary">
                    {fmt.badge}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-foreground">{fmt.machine}</td>
                <td className="px-6 py-4 text-foreground/75 text-xs max-w-xs">{fmt.compatibility}</td>
                <td className="px-6 py-4 text-foreground/60 text-xs font-mono">{fmt.colorData}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-muted/40 border border-border text-xs text-foreground/70">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-emerald-600" />
          <span>Need a specialized format like .HUS, .SEW, or .VIP? We include any requested format at zero extra charge.</span>
        </div>
        <Link href="/quote" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
          Request formats in your quote <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
