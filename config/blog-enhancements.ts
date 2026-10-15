export interface TechnicalMatrixRow {
  substrate: string;
  recommendedDensity: string;
  pullComp: string;
  underlayType: string;
  recommendedNeedle: string;
  notes: string;
}

export interface BlogEnhancement {
  executiveSummary: string[];
  proTip: {
    title: string;
    description: string;
  };
  technicalMatrix: TechnicalMatrixRow[];
  preflightChecklist: string[];
  faqs: { question: string; answer: string }[];
}

export const CATEGORY_ENHANCEMENTS: Record<string, BlogEnhancement> = {
  "Embroidery Digitizing": {
    executiveSummary: [
      "Physical stitch mechanics (pull and push compensation) dictate embroidery quality far more than 2D visual software appearance.",
      "Underlay stitching is non-negotiable: proper center walk and edge walk underlays prevent fabric bunching, preserve letter definition, and anchor delicate knits.",
      "Density calibration between 0.38mm and 0.42mm avoids stiff 'bulletproof' patches while ensuring 100% solid color coverage.",
      "Pre-production digital stitch run-outs and physical test swatches identify needle breaks and thread tension errors before commercial manufacturing.",
    ],
    proTip: {
      title: "Master Digitizer Tension & Bobbin Calibration",
      description:
        "Maintain a 60/40 tension ratio on the underside of your test run: 60% top embroidery thread and 40% white bobbin thread centered in the column. If the white bobbin thread shows through the front, loosen top tension immediately to prevent thread shredding.",
    },
    technicalMatrix: [
      {
        substrate: "Pique Cotton Polo",
        recommendedDensity: "0.40mm – 0.44mm",
        pullComp: "0.30mm (7-8%)",
        underlayType: "Center Walk + Full Tatami Mesh",
        recommendedNeedle: "75/11 Ballpoint (SES)",
        notes: "Requires medium cutaway backing (2.5oz) to eliminate fabric flagging.",
      },
      {
        substrate: "Structured Twill Cap",
        recommendedDensity: "0.36mm – 0.40mm",
        pullComp: "0.40mm (10%)",
        underlayType: "Edge Walk + Zig-Zag",
        recommendedNeedle: "80/12 Sharp (RG)",
        notes: "Center-out digitizing sequence required to prevent center seam bunching.",
      },
      {
        substrate: "Fleece / Sherpa Jacket",
        recommendedDensity: "0.38mm – 0.42mm",
        pullComp: "0.35mm",
        underlayType: "Full Tatami Grid (Crosshatch)",
        recommendedNeedle: "75/11 Ballpoint + Solvy",
        notes: "Water-soluble topping (Solvy) is mandatory to prevent stitches sinking into pile.",
      },
      {
        substrate: "Heavy Denim / Canvas",
        recommendedDensity: "0.38mm – 0.40mm",
        pullComp: "0.20mm (5%)",
        underlayType: "Edge Walk + Light Grid",
        recommendedNeedle: "90/14 Sharp (Jeans)",
        notes: "High needle deflection risk; slow machine down to 650–700 RPM on dense fills.",
      },
      {
        substrate: "Performance Polyester",
        recommendedDensity: "0.42mm – 0.46mm",
        pullComp: "0.35mm (9%)",
        underlayType: "Double Center Walk",
        recommendedNeedle: "65/9 or 70/10 Ballpoint",
        notes: "Use no-show mesh backing (poly-mesh) to prevent stiff rings around logos.",
      },
    ],
    preflightChecklist: [
      "Vector nodes inspected and reduced; all duplicate lines merged via Pathfinder.",
      "Smallest text verified to be at least 4.5mm tall with manual satin angle adjustments.",
      "Pull compensation calibrated between 0.20mm and 0.40mm depending on fabric stretch.",
      "Underlay mapped sequentially before all top-surface decorative satin and Tatami fills.",
      "Start and tie-off trims placed strategically inside satin columns to eliminate loose tails.",
      "Machine format (.DST, .PES, .EXP) verified for operator multi-head color stop sequence.",
    ],
    faqs: [
      {
        question: "Why does digitized text look jagged or pucker on performance polyester polo shirts?",
        answer:
          "Performance polyester contains elastane and 4-way stretch fibers. When heavy satin stitches are punched without adequate pull compensation and stabilizing cutaway backing, needle friction pulls the knit inwards, causing ripples. Lower the density from 0.38mm to 0.44mm, increase pull compensation to 0.35mm, and use a fusible polymesh cutaway backing.",
      },
      {
        question: "What is the primary difference between Wilcom .EMB and Tajima .DST files?",
        answer:
          "A .EMB file is an editable object-based native master file containing vector contours, stitch angle properties, and stitch formulas. A .DST file is a 'dumb' machine-level coordinate file containing only x/y coordinates and jump commands without color or object recognition. Always retain your .EMB master for future edits.",
      },
      {
        question: "How do you achieve crisp, flat 3D puff embroidery on caps?",
        answer:
          "Use 2mm to 3mm high-density EVA foam. Punch satin columns at double density (0.20mm to 0.24mm) with closed capped ends. Cutaway foam cleanly by plotting horizontal perforating walk stitches along the edges, then tear away excess foam before final top stitching.",
      },
      {
        question: "How many stitches per minute (SPM) should commercial embroidery machines run?",
        answer:
          "While modern multi-head machines (Tajima, Barudan, Happy) advertise up to 1,000–1,200 SPM, standard commercial production runs optimally between 700 and 850 SPM on flats, and 600–700 SPM on curved caps to prevent thread breaks and needle deflection.",
      },
    ],
  },
  "Patch Guide": {
    executiveSummary: [
      "Material choice determines patch longevity: PVC excels in extreme weather, while embroidered patches deliver classic collegiate textile warmth.",
      "Woven patches provide 300% greater resolution for intricate micro-typography under 2mm compared to standard embroidered threads.",
      "Backing selection must match the garment substrate: Velcro hook-and-loop for tactical gear, high-temp heat-seal for workwear, and sew-on channels for caps and heavy denim.",
      "Minimum line weight rules vary by process: 1.0mm for embroidery, 0.4mm for woven, and 0.35mm for soft molded PVC.",
    ],
    proTip: {
      title: "Tactical & Workwear Border Selection",
      description:
        "For law enforcement, firefighting, and outdoor tactical applications, always specify a recessed perimeter sewing channel (for PVC) or a high-density Merrowed overlock edge (for embroidery). This protects the inner stitches from abrasion, weapon slings, and backpack straps.",
    },
    technicalMatrix: [
      {
        substrate: "Embroidered Patch",
        recommendedDensity: "100% Thread Coverage",
        pullComp: "Overlock Merrowed Edge",
        underlayType: "Heat-Seal / Hook & Loop",
        recommendedNeedle: "3.5mm Minimum Text",
        notes: "Classic heritage finish; ideal for uniforms, clubs, and sports apparel.",
      },
      {
        substrate: "Soft 3D PVC Rubber",
        recommendedDensity: "CNC Aluminum Mold",
        pullComp: "Recessed Sew Channel",
        underlayType: "Military Hook & Loop",
        recommendedNeedle: "0.35mm Micro-Detail",
        notes: "100% waterproof, mudproof, UV resistant; ideal for tactical gear and jackets.",
      },
      {
        substrate: "Woven High-Definition",
        recommendedDensity: "Ultra-Fine Damask Weave",
        pullComp: "Laser Cut or Merrowed",
        underlayType: "Heat-Seal / Iron-On",
        recommendedNeedle: "1.5mm Micro-Text",
        notes: "Flat surface with zero thread bulk; perfect for detailed corporate crests.",
      },
      {
        substrate: "Genuine Leather",
        recommendedDensity: "Top-Grain Cowhide",
        pullComp: "Burnished / Stitch Grooved",
        underlayType: "High-Temp Heat Seal",
        recommendedNeedle: "Debossed / Laser Engraved",
        notes: "Natural patina develops over time; retail favorite for trucker hats and beanies.",
      },
      {
        substrate: "Chenille Varsity",
        recommendedDensity: "Plush Looped Wool Yarn",
        pullComp: "Felt Border + Chain Stitch",
        underlayType: "Sew-On Direct to Garment",
        recommendedNeedle: "Large Graphic Monograms",
        notes: "Volumetric 4mm–6mm loft; quintessential varsity and streetwear aesthetic.",
      },
    ],
    preflightChecklist: [
      "Intended garment substrate identified (cap, hoodie, tactical vest, denim jacket).",
      "Backing type chosen according to laundering and detachment requirements.",
      "Border type matched to patch shape (Merrowed for geometric; laser-cut for custom shapes).",
      "Colors matched to official Pantone Solid Coated standards.",
      "Dimensions scaled to real garment proportions (typically 2.5” to 3.5” for chest/caps).",
    ],
    faqs: [
      {
        question: "Can PVC patches be washed in standard laundry machines?",
        answer:
          "Yes. High-grade soft PVC patches can withstand regular washing machine cycles, detergent exposure, and water immersion without peeling or fading. However, air drying or low-temperature tumble drying is recommended to preserve hook-and-loop adhesive backings.",
      },
      {
        question: "What is the difference between a Merrowed border and a Laser-Cut border?",
        answer:
          "A Merrowed border is a thick, sealed 1/8-inch yarn overlock wrap that requires regular geometric shapes (circles, shields, rectangles). A laser-cut border is precision-sealed using laser heat, allowing complex custom die-cut contours with irregular edges.",
      },
      {
        question: "How long does an iron-on patch stay attached to clothing?",
        answer:
          "When applied with a commercial heat press at 320°F (160°C) with 40 PSI pressure for 15–20 seconds, industrial heat-seal adhesive lasts 30–50 washes. For permanent garments like workwear jackets, running a perimeter stitch around the border is strongly recommended.",
      },
      {
        question: "Which patch style is most cost-effective for small runs under 50 pieces?",
        answer:
          "Embroidered and leather patches are the most economical for low minimums because their setup costs are lower than creating custom multi-level steel CNC molds required for PVC.",
      },
    ],
  },
  "Vector Art & Design": {
    executiveSummary: [
      "Vector artwork forms the mathematical foundation of all commercial patch tooling and embroidery files.",
      "Converting all typefaces to solid vector paths (Create Outlines) avoids font substitution errors during prepress preflight.",
      "Stroke weights must be converted into solid filled objects to maintain uniform line widths when scaled.",
      "Color accuracy requires Pantone Solid Coated (PMS) assignments rather than uncalibrated RGB monitor swatches.",
    ],
    proTip: {
      title: "Prepress Node Simplification",
      description:
        "High node count vector files (often generated by automatic live-trace tools) cause CNC laser cutters to shudder and embroidery software to calculate microscopic needle penetrations that shred thread. Always use Object > Path > Simplify in Illustrator to eliminate redundant anchor points.",
    },
    technicalMatrix: [
      {
        substrate: "Typography / Lettering",
        recommendedDensity: "Convert to Outlines",
        pullComp: "Min 4.5mm height (embroidered)",
        underlayType: "Manual Satin Column",
        recommendedNeedle: "Clean Bezier Curves",
        notes: "Never leave live fonts in production vector files.",
      },
      {
        substrate: "Outlines & Borders",
        recommendedDensity: "Expand Strokes",
        pullComp: "Min 1.0mm thickness",
        underlayType: "Offset 3mm from Edge",
        recommendedNeedle: "Pathfinder Unite",
        notes: "Avoid overlapping strokes that create duplicate stitch lines.",
      },
      {
        substrate: "Color Palette",
        recommendedDensity: "Pantone PMS Coated",
        pullComp: "Max 6-9 colors per design",
        underlayType: "Solid Spot Colors",
        recommendedNeedle: "No RGB / CMYK gradients",
        notes: "Threads and PVC pigments are matched against physical Pantone formula books.",
      },
      {
        substrate: "Small Details",
        recommendedDensity: "Merge Small Shapes",
        pullComp: "Min 0.3mm spacing",
        underlayType: "Group by Color Layer",
        recommendedNeedle: "Remove Stray Anchor Points",
        notes: "Shapes smaller than 0.5mm will blur together during physical production.",
      },
    ],
    preflightChecklist: [
      "All text converted to outlines (Ctrl+Shift+O / Cmd+Shift+O).",
      "Strokes expanded into filled compound shapes (Object > Expand).",
      "Hidden layers and template guide elements deleted from the artboard.",
      "Artboard cropped tightly to actual patch dimensions at 100% scale.",
      "Color palette verified against Pantone PMS Solid Coated library.",
      "Overlapping shapes merged with Pathfinder Unite.",
    ],
    faqs: [
      {
        question: "Why can't I submit a JPEG or PNG logo for patch production?",
        answer:
          "Raster files (JPEG, PNG) are composed of square pixels that blur and pixelate when scaled. Embroidery and mold machines require vector mathematical paths (lines, curves, control points) to guide needles and CNC cutting bits. If you only have a raster file, our vector artists redraw it manually.",
      },
      {
        question: "Can gradients and drop shadows be reproduced on custom patches?",
        answer:
          "On embroidered and PVC patches, gradients cannot be cleanly replicated with discrete thread colors or molded rubber layers. However, dye-sublimated printed patches or woven patches can reproduce full photographic gradients with 100% fidelity.",
      },
      {
        question: "What is the recommended file format for patch submission?",
        answer:
          "We prefer native Adobe Illustrator (.AI), vector PDF, EPS, or SVG. Ensure all fonts are converted to curves and colors are specified in Pantone PMS.",
      },
    ],
  },
};

// Fallback for any other categories
export const DEFAULT_ENHANCEMENT: BlogEnhancement = CATEGORY_ENHANCEMENTS["Embroidery Digitizing"];

export function getEnhancementForPost(category: string, _slug: string): BlogEnhancement {
  return CATEGORY_ENHANCEMENTS[category] || DEFAULT_ENHANCEMENT;
}
