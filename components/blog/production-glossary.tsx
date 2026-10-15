import { BookOpen, Layers, ShieldCheck, Sparkles } from "lucide-react";

const glossaryTerms = [
  {
    term: "Pull Compensation",
    def: "The intentional expansion of stitch columns to counteract the physical inward pulling of fabric when thread tension tightens during high-speed machine rotation. Essential for preventing gaps between fills and outlines.",
    category: "Digitizing Science",
  },
  {
    term: "Tatami Stitch (Fill)",
    def: "A continuous series of offset run stitches arranged in parallel rows used to cover broad surface areas. Offers smooth, flat, durable coverage without thread snagging.",
    category: "Stitch Geometry",
  },
  {
    term: "Satin Stitch (Column)",
    def: "Zig-zag thread paths spanning between two parallel boundary lines. The premier stitch type for clean typography, borders, and sharp geometric outlines.",
    category: "Stitch Geometry",
  },
  {
    term: "Underlay Network",
    def: "The structural foundation stitches placed directly onto the backing stabilizer before top decorative stitches run. Prevents fabric sinkage on fleece and stabilizes stretch.",
    category: "Digitizing Science",
  },
  {
    term: "Merrowed Overlock Border",
    def: "A heavy, wrapped 3-thread overlock border sewn around the perimeter of an emblem. Provides a rounded, durable edge that prevents frayed threads on uniform patches.",
    category: "Finishing & Borders",
  },
  {
    term: "3D Puff (Foam) Embroidery",
    def: "The technique of laying down high-density EVA foam beneath satin stitches. The needle perforates the foam along column edges, puffing the letters 2mm to 4mm off the cap crown.",
    category: "Specialty Techniques",
  },
  {
    term: "Madeira Pantone PMS Conversion",
    def: "The cross-referencing system used to match graphic designer spot colors (Pantone Formula Guide) with physical industrial embroidery spools (Madeira Polyneon & Classic Rayon).",
    category: "Color Calibration",
  },
  {
    term: "Laser Heat-Seal Edge",
    def: "A micro-sealed perimeter cut made using CNC optical laser optics. Ideal for custom intricate die-cut shapes where traditional merrowed borders cannot bend.",
    category: "Finishing & Borders",
  },
];

export function ProductionGlossary() {
  return (
    <div className="mt-20 border-t border-border pt-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <BookOpen className="size-3.5" /> Technical Knowledge Base
        </div>
        <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Commercial Embroidery & Patch Terminology
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-foreground/65">
          Essential vocabulary every apparel decorator, fashion designer, and uniform procurement officer should master.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {glossaryTerms.map((item) => (
          <div
            key={item.term}
            className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary">
                {item.category}
              </span>
              <h4 className="mt-2 font-display text-base font-bold text-foreground">
                {item.term}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-foreground/70">
                {item.def}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 text-[10px] font-mono text-muted-foreground flex items-center justify-between">
              <span>Standard Spec</span>
              <ShieldCheck className="size-3 text-emerald-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
