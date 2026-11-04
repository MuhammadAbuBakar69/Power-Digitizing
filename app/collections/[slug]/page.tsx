import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getSite } from "@/lib/tenant";
import {
  CheckCircle2,
  ChevronRight,
  Shield,
  Award,
  Star,
  Zap,
  Layers,
  Sparkles,
  ArrowUpRight,
  Clock,
  Phone,
  Mail,
  Flame,
} from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { CollectionGallery } from "@/components/collections/collection-gallery";

export interface CollectionDetail {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  heroEyebrow: string;
  h1: string;
  heroParagraph: string;
  shortName: string;
  specs: { label: string; value: string }[];
  howTheyreMade: {
    heading: string;
    paragraphs: string[];
  };
  splitSections: {
    heading: string;
    body: string[];
    image: string;
    imageAlt: string;
    reverse?: boolean;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
}

const collectionDetails: Record<string, CollectionDetail> = {
  "embroidered-patches": {
    meta: {
      title: "Custom Embroidered Patches | Uniform & Logo Patches",
      description:
        "Custom embroidered patches for uniforms, teams, and brands. Hand-digitized artwork, merrowed borders, free digital proof, and no setup fees.",
      keywords:
        "custom embroidered patches, embroidered uniform patches, custom logo patches",
    },
    heroEyebrow: "Uniforms · Brands · Teams",
    h1: "Custom Embroidered Patches",
    shortName: "Embroidered Patches",
    heroParagraph:
      "Classic stitched patches with crisp lettering and raised texture. A top pick for embroidered uniform patches, clubs, and company apparel, with 3D puff embroidery for raised logos on caps. Made from artwork our own digitizers prepare by hand.",
    specs: [
      { label: "Stitch Detail", value: "Hand-digitized for clean lettering" },
      { label: "Thread", value: "Colorfast polyester" },
      { label: "Border", value: "Merrowed or laser-cut" },
      { label: "Backing", value: "Iron-on, Velcro, or sew-on" },
      { label: "Durability", value: "50+ wash cycles" },
      { label: "Rush", value: "Available" },
    ],
    howTheyreMade: {
      heading: "How Custom Embroidered Patches Are Made",
      paragraphs: [
        "Embroidered patches are the classic patch: thread stitched onto a twill base with raised, textured detail. They add weight and character to team crests, company uniforms, and tactical insignia.",
        "We use colorfast polyester and rayon threads that hold up to washing, sunlight, and daily wear. Our digitizers set stitch angles, underlay, and pull compensation by hand so patches don't pucker.",
        "Choose 50%, 75%, or 100% embroidery coverage on twill, with a merrowed or laser-cut border. You see a proof first, so you know exactly how your patch will look.",
      ],
    },
    splitSections: [
      {
        heading: "Embroidered Uniform Patches for First Responders, Military, and Teams",
        body: [
          "Uniform patches for fire departments, police, EMS, security teams, and sports clubs have to hold up to hard daily use. Tight merrowed borders keep the edges from fraying.",
          "We match thread colors to Pantone and Madeira charts, so your department's official colors stay consistent from order to order.",
          "Choose Velcro (hook and loop) backing for quick uniform changes, or heat-seal backing for permanent heat-press application.",
        ],
        image: "/images/embroidery/180ac20d-921e-4432-aee7-0ebb724068d7.webp",
        imageAlt: "Embroidered uniform patches for first responders and teams",
      },
      {
        heading: "Hand Digitizing Makes the Difference",
        body: [
          "A sharp embroidered patch starts with a good stitch file. Auto-digitizing software creates uneven stitches that break needles and blur text, so our digitizers plan every letter and fill by hand.",
          "Small lettering down to 3.5 mm stays clear and readable, because we adjust density and underlay for small text.",
          "Before production, you get a stitch preview with the stitch count and thread colors.",
        ],
        image: "/images/embroidery/9c109bbb-b227-4f4e-9d3d-56fae3c5016f.webp",
        imageAlt: "Hand-digitized embroidery stitch precision and clean small lettering",
        reverse: true,
      },
    ],
    faq: [
      {
        q: "What is the minimum order for custom embroidered patches?",
        a: "Embroidered patches start at 10 pieces, and the price per patch drops at 100, 250, 500, and 1,000+ pieces.",
      },
      {
        q: "Will I see a proof before production?",
        a: "Yes. You get a free digital proof within 24–48 hours showing the size, thread colors, and border. Production starts only after you approve it.",
      },
      {
        q: "What file should I send for my patch?",
        a: "Vector files (AI, EPS, PDF, SVG) work best, but high-resolution PNG and JPG files are fine. If you only have a sketch or a photo of an old patch, our artists will redraw it for free.",
      },
      {
        q: "Which backing should I choose for embroidered patches?",
        a: "Use sew-on for uniforms that are washed often, Velcro for tactical gear and swappable patches, and iron-on for cotton shirts, denim, and bags.",
      },
    ],
  },

  "chenille-patches": {
    meta: {
      title: "Custom Chenille Patches | Letterman & Varsity Patches",
      description:
        "Custom chenille patches for letterman jackets, varsity letters, and streetwear. Wool felt base, free digital proof, and orders from 10 pieces.",
      keywords:
        "custom chenille patches, chenille letterman patches, custom varsity patches, custom patches for jackets",
    },
    heroEyebrow: "Jackets · Letterman · Varsity",
    h1: "Custom Chenille Patches",
    shortName: "Chenille Patches",
    heroParagraph:
      "Soft, fuzzy yarn patches for chenille letterman patches, custom varsity patches, hoodies, and school spirit wear. One of the most popular custom patches for jackets, made on a wool felt base.",
    specs: [
      { label: "Yarn Height", value: "4–6 mm plush loops" },
      { label: "Base", value: "Double-layer wool felt" },
      { label: "Embroidery Detail", value: "Chenille and chainstitch combined" },
      { label: "Border", value: "Die-cut felt or merrowed" },
      { label: "Application", value: "Sew-on or heat-seal" },
      { label: "Minimum Order", value: "10 pieces" },
    ],
    howTheyreMade: {
      heading: "The Varsity Classic: Custom Chenille and Felt Patches",
      paragraphs: [
        "Chenille patches have been part of varsity and school culture for over a century. The thick, looped yarn gives each patch a soft, raised texture that stands 4–6 mm above the garment.",
        "We make them with acrylic chenille yarn on a double layer of wool felt, the same look as a classic letterman jacket.",
        "From varsity letters and mascots to streetwear logos, chenille turns a plain hoodie or bomber into something people want to keep.",
      ],
    },
    splitSections: [
      {
        heading: "Chenille Letterman Patches for Schools and Teams",
        body: [
          "Nothing marks a big win or a varsity letter like chenille. We make felt backings in classic school colors such as crimson, navy, forest green, gold, and gray.",
          "We build layered letters with contrasting chenille fills, stepped felt borders, and gold or silver embroidery for championship stars and years.",
          "Sizes go up to 10 inches for jacket backs or 4–5 inches for the chest, and each patch is made to sit flat on wool and leather sleeves.",
        ],
        image: "/images/chenille/534aa9a0-5f7f-4a78-b27e-360df8c03136.webp",
        imageAlt: "Custom chenille varsity letterman patches for schools and teams",
      },
      {
        heading: "Chenille Patches for Streetwear Brands",
        body: [
          "Streetwear labels love chenille because its soft texture stands out on heavyweight cotton and satin jackets. A chunky chenille logo makes a statement piece.",
          "We also make hybrid patches: fine details such as eyes, small text, or teeth are flat embroidery, while large areas are filled with chenille loops.",
          "Every order includes free artwork setup and a color proof, so your drop arrives exactly as planned.",
        ],
        image: "/images/chenille/53d2f848-5ff7-4e64-9393-d42b165ca529.webp",
        imageAlt: "Streetwear chenille patches with hybrid embroidery details",
        reverse: true,
      },
    ],
    faq: [
      {
        q: "What is the minimum order for custom chenille patches?",
        a: "Chenille patches start at 10 pieces, with lower prices per patch as quantity goes up.",
      },
      {
        q: "Will I see a proof before production?",
        a: "Yes. You get a free digital proof within 24–48 hours showing the size, felt colors, and chenille areas. Production starts only after you approve.",
      },
      {
        q: "How big can a chenille patch be?",
        a: "Chenille letterman patches are usually 4–5 inches for the chest and up to 10 inches for a jacket back. Chenille works best with bold shapes, so very small text is added in flat embroidery.",
      },
      {
        q: "How do I attach a chenille patch to a letterman jacket?",
        a: "Sewing gives the most secure hold on wool and leather. Heat-seal backing is also available for cotton hoodies and jackets that can be heat pressed.",
      },
    ],
  },

  "pvc-patches": {
    meta: {
      title: "Custom PVC Patches | Tactical Rubber Patches",
      description:
        "Custom PVC patches and rubber patches for tactical, outdoor, and marine gear. Waterproof 2D and 3D designs, Velcro backing, and no mold fees.",
      keywords:
        "custom PVC patches, custom rubber patches, tactical PVC patches, PVC morale patches",
    },
    heroEyebrow: "Outdoor · Tactical · Gear",
    h1: "Custom PVC Patches",
    shortName: "PVC Patches",
    heroParagraph:
      "Soft, flexible custom rubber patches that resist water, mud, and heavy use. Tactical PVC patches with Velcro backing are a favorite for uniforms, packs, plate carriers, and outdoor gear.",
    specs: [
      { label: "Material", value: "Soft, flexible PVC" },
      { label: "Relief", value: "2D flat or 3D sculpted" },
      { label: "Water Resistance", value: "Waterproof and mud-proof" },
      { label: "Backing", value: "Velcro (hook and loop) or sew channel" },
      { label: "Temperature Range", value: "-30°C to +80°C (-22°F to 176°F)" },
      { label: "Minimum Order", value: "25 pieces" },
    ],
    howTheyreMade: {
      heading: "Custom Rubber Patches Built for All Weather",
      paragraphs: [
        "Soft PVC patches are one of the toughest patch options. Made from flexible PVC rubber, they are waterproof, mud-proof, and UV-resistant, for outdoor, tactical, and marine use.",
        "Unlike thread patches, which can snag or soak up water, PVC patches wipe clean and keep their color.",
        "Using precision metal molds, we create 2D and 3D raised detail with sharp, fine lines that embroidery can't match.",
      ],
    },
    splitSections: [
      {
        heading: "Tactical PVC Patches for Military and Law Enforcement",
        body: [
          "From morale patches on plate carriers to department crests on caps, our PVC patches are made for hard use. A recessed sewing channel protects the stitching from wear.",
          "We make subdued tactical colors such as coyote brown, ranger green, wolf gray, and OD green, plus glow-in-the-dark options.",
          "Velcro backing is bonded and stitched around the edge so the patch stays on your vest and gear.",
        ],
        image: "/images/pvc/105f6253-e172-4ca6-a390-19a0ff9ec46a.webp",
        imageAlt: "Tactical PVC morale patches for plate carriers and uniforms",
      },
      {
        heading: "PVC Patches for Outdoor and Marine Gear",
        body: [
          "Outdoor brands, ski gear makers, and dive shops choose PVC because snow, salt water, and dirt don't damage it.",
          "Our molding process allows up to 6 Pantone colors, each on its own raised level.",
          "The mold captures sharp text and detailed logos without colors bleeding into each other.",
        ],
        image: "/images/pvc/24778966-adb2-4b70-870f-52984729189b.webp",
        imageAlt: "Waterproof PVC rubber patches for outdoor and marine apparel",
        reverse: true,
      },
      {
        heading: "How We Make Your 3D PVC Patch Mold",
        body: [
          "Our team turns your vector logo into a multi-level metal mold. Liquid PVC is then filled into each level of the mold.",
          "This creates raised borders, rounded edges, and textured fills that embroidery can't copy.",
          "Every order includes a 3D digital preview showing each layer and color before the mold is made.",
        ],
        image: "/images/pvc/308c1aea-e284-4c78-b934-1501d16f6228.webp",
        imageAlt: "Multi-level metal mold for 3D sculpted PVC rubber patches",
      },
    ],
    faq: [
      {
        q: "What is the minimum order for custom PVC patches?",
        a: "PVC patches start at 25 pieces. Prices per patch drop at higher quantities because the mold is made once.",
      },
      {
        q: "Is there a mold fee for PVC patches?",
        a: "No. There are no setup or mold fees. The quote you receive is the price you pay.",
      },
      {
        q: "Are PVC patches waterproof?",
        a: "Yes. PVC patches are waterproof and mud-proof, and they wipe clean, which makes them ideal for tactical, outdoor, and marine gear.",
      },
      {
        q: "What is the difference between PVC and embroidered patches?",
        a: "PVC patches are molded rubber with raised 3D detail and are waterproof. Embroidered patches are stitched thread with a classic textured look. Choose PVC for rugged gear and embroidery for uniforms and apparel.",
      },
    ],
  },

  "pvc-keychains": {
    meta: {
      title: "Custom PVC Keychains | 3D Rubber Keychains",
      description:
        "Custom PVC keychains in 2D or 3D soft rubber with bright Pantone colors and steel split rings. Free digital proof and orders from 25 pieces.",
      keywords:
        "custom PVC keychains, custom rubber keychains, 3D keychains, promotional keychains",
    },
    heroEyebrow: "Keys · Merch · Weatherproof",
    h1: "Custom PVC Keychains",
    shortName: "PVC Keychains",
    heroParagraph:
      "Molded 2D and 3D soft PVC keychains with steel split rings and bright Pantone colors, made from the same artwork as your patches. Great for brand merch, events, car clubs, and giveaways.",
    specs: [
      { label: "Material", value: "Soft, flexible PVC" },
      { label: "Design", value: "2D multi-level or 3D sculpted" },
      { label: "Hardware", value: "4-link chain and split ring" },
      { label: "Water Resistance", value: "Waterproof" },
      { label: "Sides", value: "Single-sided or double-sided 3D" },
      { label: "Minimum Order", value: "25 pieces (free proof included)" },
    ],
    howTheyreMade: {
      heading: "Custom Rubber Keychains for Brands and Everyday Carry",
      paragraphs: [
        "Soft PVC keychains are durable promotional merch people actually use. They don't fade or crack, and they won't scratch car ignitions, motorcycle tanks, or bags.",
        "With 2D layers or full 3D relief, our PVC keychains show bright Pantone colors with clean separation and rounded edges.",
        "Each keychain comes with a steel grommet, chain, and split ring. Choose a single-sided design with a textured back or a fully molded double-sided keychain.",
      ],
    },
    splitSections: [
      {
        heading: "Built for Cars, Motorcycles, and Everyday Carry",
        body: [
          "Unlike metal keychains, soft PVC doesn't rattle against the steering column or scratch your car.",
          "They handle heavy keys, rain, mud, and hot or freezing weather without losing color or flexibility.",
          "Steel split rings (25–30 mm) and 4-link chains are made to hold a full set of keys.",
        ],
        image: "/images/pvc-keychains/11ea7517-d14e-46df-9402-99631c94c09b-6ad90f0dd4de7.webp",
        imageAlt: "Soft rubber PVC keychains for automotive, motorcycle and daily carry",
      },
      {
        heading: "Raised 3D Detail in Bright Pantone Colors",
        body: [
          "Our molds hold up to 8 Pantone colors, each on its own level, without bleeding or mixing.",
          "Ideal for company merch, mascots, streetwear drops, and car clubs that want retail-quality accessories.",
          "Every order includes a 3D digital proof showing layer heights, colors, and chain placement before the mold is made.",
        ],
        image: "/images/pvc-keychains/4fd78dbf-5d25-4342-aaaf-c5db604137ac-6ad90f0cea3f9.webp",
        imageAlt: "Raised 3D multi-level molded soft PVC keychain detail",
        reverse: true,
      },
      {
        heading: "Double-Sided Keychain Options",
        body: [
          "Choose a textured back, a printed back with your website or contact details, or a fully molded double-sided 3D design for a heavier, premium feel.",
          "Custom shapes follow your logo's outline for the most visual impact in a pocket-friendly size.",
        ],
        image: "/images/pvc-keychains/8adf7f0a-0467-4fd0-8a6c-6c4c02beb2d0-6ad90f0d02746.webp",
        imageAlt: "Double-sided custom shaped soft rubber keychains",
      },
    ],
    faq: [
      {
        q: "What is the minimum order for custom PVC keychains?",
        a: "PVC keychains start at 25 pieces, with a free digital proof included.",
      },
      {
        q: "Can PVC keychains be double-sided?",
        a: "Yes. You can choose a textured back, a printed back, or a fully molded double-sided 3D keychain.",
      },
      {
        q: "What file should I send?",
        a: "Vector files (AI, EPS, PDF, SVG) work best, but PNG and JPG files are fine. Our artists can redraw a sketch or photo for free.",
      },
      {
        q: "Are PVC keychains waterproof?",
        a: "Yes. Soft PVC is waterproof and easy to wipe clean, so the keychain keeps its color through rain, mud, and daily use.",
      },
    ],
  },

  "silicone-patches": {
    meta: {
      title: "Custom Silicone Patches | Soft-Touch 3D Patches",
      description:
        "Custom silicone patches with a soft-touch matte finish for hats, athletic wear, and tactical gear. Waterproof 3D designs and a free digital proof.",
      keywords:
        "silicone patches, custom silicone patches, silicone patches for hats",
    },
    heroEyebrow: "Soft touch · Modern brands",
    h1: "Custom Silicone Patches",
    shortName: "Silicone Patches",
    heroParagraph:
      "Silicone patches with a soft-touch, slightly raised matte finish for hats, athletic apparel, bags, and modern branding. A clean, modern alternative to thread.",
    specs: [
      { label: "Material", value: "Matte silicone" },
      { label: "Finish", value: "Soft-touch, non-glare" },
      { label: "Raised Depth", value: "Up to 3.5 mm, multi-level 3D" },
      { label: "Backing", value: "Velcro, heat-seal, or sew channel" },
      { label: "Water Resistance", value: "Waterproof and washable" },
      { label: "Minimum Order", value: "25 pieces" },
    ],
    howTheyreMade: {
      heading: "Soft-Touch 3D Silicone Patches With a Matte Finish",
      paragraphs: [
        "Silicone patches give a clean, modern look with a soft matte finish, sharp 3D detail, and strong durability. They are a modern take on tactical and athletic emblems.",
        "Water, sunlight, and cold don't damage silicone, so the patches keep their color and flexibility for years.",
        "Available with sew-on channels, peel-and-stick adhesive, or Velcro (hook and loop) backing.",
      ],
    },
    splitSections: [
      {
        heading: "Custom Silicone Patches for Hats and Performance Apparel",
        body: [
          "Matte silicone patches look upscale on technical jackets, structured trucker caps, and athletic wear.",
          "Our molds capture very fine lettering without distortion.",
          "A recessed channel around the edge protects the sewing thread from wear.",
        ],
        image: "/images/silicone/2ac5cc5d-94fa-4889-b6e5-066611aa1d47.webp",
        imageAlt: "3D molded silicone patches for performance headwear and athletic apparel",
      },
      {
        heading: "Silicone Patches for Fire, Rescue, and Tactical Teams",
        body: [
          "Silicone stands up to heat, fluids, mud, and hard scrubbing that would wear out embroidered patches.",
          "Fire departments, rescue squads, and tactical teams choose it for crisp crests and non-reflective matte colors.",
          "Velcro backing lets you move patches between uniforms, vests, and bags in seconds.",
        ],
        image: "/images/silicone/4dcf7a59-f478-4f4f-9a76-496d1d3d0286.webp",
        imageAlt: "Heat-resistant matte silicone patches for emergency rescue and tactical teams",
        reverse: true,
      },
      {
        heading: "3D Silicone Patches for Streetwear Drops",
        body: [
          "Give streetwear collections raised 3D lettering and bright Pantone colors that thread can't match.",
          "Up to 6 colors, each molded on its own level with clean, sharp edges.",
          "Every order includes a 3D digital preview of all layers and colors before the mold is made.",
        ],
        image: "/images/silicone/90dc77d0-d222-43bd-a6ba-84c2b88cc895.webp",
        imageAlt: "Dimensional 3D silicone patches for modern streetwear apparel drops",
      },
    ],
    faq: [
      {
        q: "What is the minimum order for custom silicone patches?",
        a: "Silicone patches start at 25 pieces.",
      },
      {
        q: "What is the difference between silicone and PVC patches?",
        a: "Both are molded and waterproof. Silicone has a softer, matte, velvet-like finish and a more modern look, while PVC is a bit firmer with more color shine. Silicone suits athletic wear and fashion; PVC suits rugged tactical gear.",
      },
      {
        q: "Can silicone patches be heat pressed?",
        a: "Yes. Silicone patches are available with heat-seal backing, as well as sew-on channels, Velcro, and adhesive.",
      },
      {
        q: "Will I see a proof first?",
        a: "Yes. You get a free 3D digital preview showing each layer and color, and production starts only after you approve it.",
      },
    ],
  },

  "leather-patches": {
    meta: {
      title: "Custom Leather Patches | Leather Hat Patches",
      description:
        "Custom leather patches for hats, beanies, denim, and bags. Genuine or faux leather, debossed or laser-engraved, with a free digital proof.",
      keywords:
        "custom leather patches, custom leather hat patches, custom patches for hats",
    },
    heroEyebrow: "Hats · Premium · Heritage",
    h1: "Custom Leather Patches",
    shortName: "Leather Patches",
    heroParagraph:
      "Genuine or faux leather with a debossed or laser-engraved logo. Custom leather hat patches are a top choice for trucker caps and beanies, and one of the best custom patches for hats.",
    specs: [
      { label: "Thickness", value: "2.2–2.8 mm top-grain" },
      { label: "Deboss Depth", value: "About 0.8 mm" },
      { label: "Edges", value: "Burnished, raw, or stitch-grooved" },
      { label: "Backing", value: "Heat-seal, sew-on channel, or Velcro" },
      { label: "Production Time", value: "5–7 days" },
      { label: "Minimum Order", value: "25 pieces (free proof included)" },
    ],
    howTheyreMade: {
      heading: "Premium Custom Leather Patches",
      paragraphs: [
        "A debossed or laser-engraved leather patch on a trucker cap, denim jacket, or canvas bag says quality in a way synthetic labels can't.",
        "We use genuine top-grain cowhide, vintage pull-up leather, and high-quality faux leather. Each piece is cut by laser, then debossed with heat and pressure or laser-engraved.",
        "Real leather develops a natural patina over time, so every hat or jacket ages in its own way. It is a strong choice for brands that want a premium retail look.",
      ],
    },
    splitSections: [
      {
        heading: "Custom Leather Hat Patches for Caps and Beanies",
        body: [
          "Leather patches are a favorite of headwear brands. A leather patch can turn a basic 5-panel or 6-panel trucker cap into a premium retail product.",
          "Our hat patches are made flexible enough to follow the curve of the cap without creasing, lifting at the edges, or bubbling.",
          "Choose blind debossing, where a heated die presses your logo into the leather, or laser engraving, which darkens the leather for rich caramel and brown contrast.",
        ],
        image: "/images/leather/299d8a05-a46b-4b75-b618-277f67044e1e.webp",
        imageAlt: "Custom debossed leather patches on trucker caps and beanies",
      },
      {
        heading: "Leather Patches for Denim, Jackets, and Bags",
        body: [
          "On a denim jacket, the waistband of jeans, or a backpack flap, a leather patch becomes a lasting brand mark. Our finishes hold up to repeated washing without cracking or peeling.",
          "We offer pre-punched stitch holes with optional contrast thread in gold, white, or black, for easy hand or machine sewing.",
          "Every order includes a detailed digital preview of the leather texture and debossing before production.",
        ],
        image: "/images/leather/64a46fe2-61a2-4b76-9df3-81988759d6c6.webp",
        imageAlt: "Artisanal leather patches for denim, jackets, and bags",
        reverse: true,
      },
    ],
    faq: [
      {
        q: "What is the minimum order for custom leather patches?",
        a: "Leather patches start at 25 pieces, with a free digital proof included.",
      },
      {
        q: "How are leather hat patches attached?",
        a: "Most leather hat patches are heat-pressed with heat-seal backing or sewn on through pre-punched stitch holes. Velcro backing is also available.",
      },
      {
        q: "Genuine or faux leather: which should I choose?",
        a: "Genuine leather has natural grain and ages with a patina. Faux leather costs less, looks consistent, and is animal-free. Both can be debossed or laser-engraved.",
      },
      {
        q: "How long does production take?",
        a: "Leather patches are typically produced in 5–7 days after you approve your proof, plus shipping time.",
      },
    ],
  },

  "woven-patches": {
    meta: {
      title: "Custom Woven Patches & Woven Labels",
      description:
        "Custom woven patches and woven labels with fine detail and text as small as 1.5 mm. Merrowed or heat-cut borders and a free digital proof.",
      keywords:
        "custom woven patches, custom woven labels, woven vs embroidered patches",
    },
    heroEyebrow: "Logos · Labels · Fine detail",
    h1: "Custom Woven Patches",
    shortName: "Woven Patches",
    heroParagraph:
      "Thin, smooth patches that hold small text and fine detail. The same weave is used for custom woven labels on apparel and products.",
    specs: [
      { label: "Weave", value: "High-density damask" },
      { label: "Thread", value: "Fine 50-denier thread" },
      { label: "Smallest Text", value: "1.5 mm" },
      { label: "Border", value: "Merrowed or heat-cut" },
      { label: "Backing", value: "Iron-on, Velcro, or adhesive" },
      { label: "Minimum Order", value: "25 pieces" },
    ],
    howTheyreMade: {
      heading: "Woven Patches for Fine Detail and Small Text",
      paragraphs: [
        "When your artwork has fine lines, small text, or detail that is too small for embroidery, woven patches are the answer.",
        "Fine threads are woven tightly together, so the patch is thinner and flatter than embroidery and shows much more detail.",
        "The result is a smooth, lightweight patch that sits comfortably on hats, shirts, and bags.",
      ],
    },
    splitSections: [
      {
        heading: "Fine Detail That Embroidery Can't Reach",
        body: [
          "Embroidery is limited by needle size. Weaving isn't, so text as small as 1.5 mm stays readable.",
          "Woven patches are ideal for detailed logos, maps, fine line art, and brand marks with thin strokes.",
          "The same process makes custom woven labels for clothing necks, hems, and product tags.",
        ],
        image: "/images/woven/58df48c6-cdd5-4947-8347-7028f6f71e16.webp",
        imageAlt: "High-density damask woven patches with micro-text readability",
      },
      {
        heading: "Merrowed Borders and Flexible Backing Options",
        body: [
          "Finish your woven patch with a classic merrowed border, or a heat-cut edge that follows your logo's shape.",
          "Choose iron-on, Velcro, adhesive, or sew-on backing to suit your garment.",
          "You see a free digital proof before production, so every detail is checked.",
        ],
        image: "/images/woven/0144dc71-5e3b-449e-b4ef-180df37885d7.webp",
        imageAlt: "Woven patch edge finishes and flexible backing choices",
        reverse: true,
      },
    ],
    faq: [
      {
        q: "What is the minimum order for custom woven patches?",
        a: "Woven patches start at 25 pieces.",
      },
      {
        q: "What is the difference between woven and embroidered patches?",
        a: "Woven patches use fine threads woven tightly together, so they are thinner, flatter, and show more detail. Embroidered patches have thicker, raised thread texture. Choose woven for small text and fine detail.",
      },
      {
        q: "Do you make custom woven labels?",
        a: "Yes. We use the same weaving process to make custom woven labels for clothing and products.",
      },
      {
        q: "Will I see a proof before production?",
        a: "Yes. You get a free digital proof within 24–48 hours, and production starts only after you approve it.",
      },
    ],
  },

  "sublimated-patches": {
    meta: {
      title: "Custom Sublimated Patches | Full-Color Printed Patches",
      description:
        "Custom sublimated patches with full-color printing for photos, gradients, and detailed art. Merrowed borders, free digital proof, orders from 10 pieces.",
      keywords:
        "custom sublimated patches, custom printed patches, photo patches",
    },
    heroEyebrow: "Full color · Photo quality",
    h1: "Custom Sublimated Patches",
    shortName: "Sublimated Patches",
    heroParagraph:
      "Custom printed patches with edge-to-edge color for gradients, photos, and detailed artwork that thread can't show. Finished with a classic stitched border.",
    specs: [
      { label: "Print Method", value: "Dye sublimation" },
      { label: "Resolution", value: "Photo quality" },
      { label: "Colors", value: "Full color, including neon" },
      { label: "Border", value: "Merrowed stitched edge" },
      { label: "Durability", value: "Ink is infused into the fabric, so it won't peel" },
      { label: "Minimum Order", value: "10 pieces" },
    ],
    howTheyreMade: {
      heading: "Full-Color Custom Printed Patches",
      paragraphs: [
        "Sublimation prints your design directly into the fabric, so colors, gradients, and even photos show edge to edge.",
        "Because the ink becomes part of the fabric, it doesn't crack or peel the way a surface print can.",
        "When your artwork has more color or detail than thread can capture, sublimated patches are usually the better fit.",
      ],
    },
    splitSections: [
      {
        heading: "True Gradients and Photo-Quality Detail",
        body: [
          "Embroidery uses solid thread colors. Sublimation can show smooth color fades, shadows, and photographs.",
          "It is ideal for event patches, memorial patches with photos, sports teams with detailed logos, and full-color art.",
          "There is no limit on the number of colors in your design.",
        ],
        image: "/images/sublimation/26246876-c845-4884-99ac-448603884dd8.webp",
        imageAlt: "Continuous full-color dye sublimated patches with photo-quality details",
      },
      {
        heading: "Bright Character Art With Merrowed Borders",
        body: [
          "Mascots, cartoon characters, and illustrations look bright and sharp in full color.",
          "A merrowed stitched border gives a printed patch the same finished look as an embroidered one.",
          "Choose iron-on, Velcro, adhesive, or sew-on backing.",
        ],
        image: "/images/sublimation/3e719772-4b60-4b78-b436-5a705b206aab.webp",
        imageAlt: "Sublimated patches with merrowed overlock stitched borders",
        reverse: true,
      },
    ],
    faq: [
      {
        q: "What is the minimum order for custom sublimated patches?",
        a: "Sublimated patches start at 10 pieces.",
      },
      {
        q: "What is a sublimated patch?",
        a: "A sublimated patch is a printed patch. The design is printed into polyester fabric with heat, so it can show photos, gradients, and unlimited colors, then finished with a stitched border.",
      },
      {
        q: "Sublimated or embroidered: which should I choose?",
        a: "Choose sublimated for photos, color fades, and very detailed art. Choose embroidered for a classic raised, textured look with solid colors.",
      },
      {
        q: "Will I see a proof first?",
        a: "Yes. You get a free digital proof within 24–48 hours, and production starts only after you approve it.",
      },
    ],
  },

  "sequin-patches": {
    meta: {
      title: "Custom Sequin Patches | Reversible & Metallic",
      description:
        "Custom sequin patches in metallic, holographic, and reversible sequins for dance, cheer, fashion, and game day. Free digital proof included.",
      keywords:
        "custom sequin patches, reversible sequin patches, sequin letters for jackets",
    },
    heroEyebrow: "Fashion · Shimmer · Events",
    h1: "Custom Sequin Patches",
    shortName: "Sequin Patches",
    heroParagraph:
      "Shiny sequin patches that catch the light, made for dancewear, cheer teams, fashion apparel, game-day gear, and special events.",
    specs: [
      { label: "Sequin Types", value: "Metallic, holographic, or reversible flip" },
      { label: "Sequin Sizes", value: "3 mm to 5 mm" },
      { label: "Border", value: "Merrowed felt or embroidered edge" },
      { label: "Backing", value: "Iron-on or sew-on" },
      { label: "Finish", value: "High-shine shimmer" },
      { label: "Minimum Order", value: "25 pieces" },
    ],
    howTheyreMade: {
      heading: "Reversible and Metallic Custom Sequin Patches",
      paragraphs: [
        "Sequin patches shimmer as you move, which makes them stand out on stage, at games, and in fashion.",
        "Choose metallic, holographic, or reversible flip sequins that change color when you brush them.",
        "Sequins are stitched onto a felt or twill base, often combined with embroidery for lettering and outlines.",
      ],
    },
    splitSections: [
      {
        heading: "Sequin Patches for Dance, Cheer, and Game Day",
        body: [
          "Sequins catch stadium and stage lights, so dance teams, cheer squads, and fans love them.",
          "They work well on jackets, hoodies, bags, and team uniforms.",
          "Combine sequins with embroidered details for team names and numbers.",
        ],
        image: "/images/sequin/5af416a1-4bf4-4ec3-9361-5b61a805a3b8.webp",
        imageAlt: "Sparkling sequin patches for dance teams, cheer squads, and game day gear",
      },
      {
        heading: "Sequin Script Letters for Spirit Wear",
        body: [
          "Script letters and team names in sequins give spirit wear a bold, eye-catching finish.",
          "We outline the letters with embroidery, so they stay readable from a distance.",
          "Choose school or team colors to match your uniforms.",
        ],
        image: "/images/sequin/1ee8d767-91d2-4778-9d7b-02d4e2d6b99c.webp",
        imageAlt: "Sequin script lettering with embroidery outlines for varsity spirit wear",
        reverse: true,
      },
      {
        heading: "Large Sequin Crests and Jacket Back Patches",
        body: [
          "Large sequin patches make a statement on the back of a jacket or as fashion wings and crests.",
          "Bigger designs leave room for more sequin colors and detail.",
          "You see a free digital proof before production, so you know how the sequins and colors will look.",
        ],
        image: "/images/sequin/af5d32d0-8a31-46fc-bb56-b6b6d119641a.webp",
        imageAlt: "Large sequin angel wings and statement crests for jacket backs",
      },
    ],
    faq: [
      {
        q: "What is the minimum order for custom sequin patches?",
        a: "Sequin patches start at 25 pieces.",
      },
      {
        q: "What are reversible sequin patches?",
        a: "Reversible (flip) sequins have a different color on each side. When you brush them, they flip to show the other color.",
      },
      {
        q: "Can sequin patches be ironed on?",
        a: "Yes, iron-on backing is available. For garments that are washed often, sewing gives the most secure hold.",
      },
      {
        q: "How should I wash clothing with sequin patches?",
        a: "Wash inside out on a gentle cycle in cold water, and air dry. Don't iron directly on the sequins.",
      },
    ],
  },

  "enamel-pins": {
    meta: {
      title: "Custom Enamel Pins | Hard & Soft Enamel Lapel Pins",
      description:
        "Custom enamel pins in hard or soft enamel with gold, silver, or black nickel plating. Pantone colors, custom backing cards, and a free proof.",
      keywords:
        "custom enamel pins, custom lapel pins, hard enamel pins, soft enamel pins",
    },
    heroEyebrow: "Hard & soft enamel · Collectibles",
    h1: "Custom Enamel Pins",
    shortName: "Enamel Pins",
    heroParagraph:
      "Custom soft and hard enamel lapel pins with bright Pantone colors, polished metal edges, and butterfly clutch backs. Great for brands, teams, events, and collectors.",
    specs: [
      { label: "Plating", value: "Gold, silver, black nickel, or antique" },
      { label: "Enamel Type", value: "Hard enamel or soft enamel" },
      { label: "Backs", value: "Butterfly clutch, rubber clutch, or magnet" },
      { label: "Packaging", value: "Custom backing cards or pouches" },
      { label: "Detail", value: "Fine die-struck detail" },
      { label: "Minimum Order", value: "25 pieces (free proof included)" },
    ],
    howTheyreMade: {
      heading: "Custom Hard and Soft Enamel Lapel Pins",
      paragraphs: [
        "Enamel pins are small metal pins filled with colored enamel. They are popular for brand merch, team pins, events, and collecting.",
        "Hard enamel pins are polished flat and smooth, with a jewelry-like finish. Soft enamel pins have raised metal lines you can feel, and cost less.",
        "Choose your metal plating, back type, and packaging to finish the look.",
      ],
    },
    splitSections: [
      {
        heading: "Die-Struck Detail and Pantone Colors",
        body: [
          "Each pin is struck from a custom metal die, which creates clean raised lines around every color.",
          "Enamel colors are matched to Pantone, so your logo colors look right.",
          "Add glitter, glow-in-the-dark, or printed details for extra effect.",
        ],
        image: "/images/enamel-pins/3051384c-c62d-47ec-b705-1a6a633a8fcb.webp",
        imageAlt: "Die-struck custom enamel lapel pins with Pantone color matching",
      },
      {
        heading: "Plating Finishes and Secure Pin Backs",
        body: [
          "Choose gold, silver, black nickel, or antique plating to match your design.",
          "Butterfly clutches, rubber clutches, and magnet backs keep pins in place on jackets, hats, and bags.",
          "Custom backing cards turn your pins into ready-to-sell retail products.",
        ],
        image: "/images/enamel-pins/54c5fa67-1ebb-4c46-b911-78817a436452.webp",
        imageAlt: "Polished metal plating finishes and clutch attachment options for enamel pins",
        reverse: true,
      },
    ],
    faq: [
      {
        q: "What is the minimum order for custom enamel pins?",
        a: "Enamel pins start at 25 pieces, with a free digital proof included.",
      },
      {
        q: "Hard enamel or soft enamel: what's the difference?",
        a: "Hard enamel pins are polished smooth and flat, with a premium, durable finish. Soft enamel pins have raised metal outlines and recessed color, and they usually cost less.",
      },
      {
        q: "Which pin backs do you offer?",
        a: "We offer butterfly (metal) clutches, rubber clutches, and magnet backs.",
      },
      {
        q: "Will I see a proof first?",
        a: "Yes. You get a free digital proof showing the size, colors, and plating, and production starts only after you approve it.",
      },
    ],
  },

  "embroidery-keychains": {
    meta: {
      title: "Custom Embroidered Keychains | Flight Tag Keychains",
      description:
        "Custom embroidered keychains and double-sided flight tags with merrowed edges and steel eyelets. Free digital proof and orders from 25 pieces.",
      keywords:
        "custom embroidered keychains, embroidered flight tags, custom flight tag keychains",
    },
    heroEyebrow: "Flight tags · Merch · Double-sided",
    h1: "Custom Embroidered Keychains",
    shortName: "Embroidered Keychains",
    heroParagraph:
      "Double-sided embroidered flight tags and keychains with merrowed edges and steel eyelets. Great for brands, pilots, car clubs, and personalized gifts.",
    specs: [
      { label: "Base", value: "Heavy-duty twill" },
      { label: "Border", value: "Tight merrowed edge" },
      { label: "Hardware", value: "Steel grommet and split ring" },
      { label: "Sides", value: "Double-sided embroidery" },
      { label: "Standard Size", value: "130 × 30 mm (custom shapes available)" },
      { label: "Minimum Order", value: "25 pieces" },
    ],
    howTheyreMade: {
      heading: "Double-Sided Embroidered Flight Tags and Keychains",
      paragraphs: [
        "Embroidered keychains are stitched on both sides of a strong twill base, so your design shows whichever way the keychain turns.",
        "The classic flight tag shape (130 × 30 mm) is inspired by aviation 'Remove Before Flight' tags.",
        "A merrowed edge and a steel eyelet make them strong enough for daily use on keys and bags.",
      ],
    },
    splitSections: [
      {
        heading: "Classic Flight Tags With Steel Eyelets",
        body: [
          "Flight tags are a favorite with pilots, aviation clubs, and car enthusiasts.",
          "Tight merrowed borders keep the edges from fraying.",
          "Steel eyelets and split rings hold up to everyday use.",
        ],
        image: "/images/embroidery-keychains/125b3a14-acde-4c8d-adca-cda2365756cc.webp",
        imageAlt: "Classic double-sided embroidered flight tags with steel eyelets",
      },
      {
        heading: "Personalized Names, Club Merch, and Swivel Clasps",
        body: [
          "Add names, numbers, or slogans for teams, clubs, and gifts.",
          "Embroidered keychains make lasting merch for car clubs, sports teams, and brands.",
          "Choose a split ring or a swivel clasp to attach them to bags and lanyards.",
        ],
        image: "/images/embroidery-keychains/a0d44bce-3d32-486a-af7a-476b0facfd49.webp",
        imageAlt: "Custom name embroidered keychains with swivel clasp hardware",
        reverse: true,
      },
      {
        heading: "Double-Sided Twill Embroidery",
        body: [
          "Each side can carry a different design, such as your logo on the front and a name on the back.",
          "Dense stitching keeps the colors bright through daily handling.",
          "You see a free digital proof of both sides before production.",
        ],
        image: "/images/embroidery-keychains/6762830b-e120-4ea5-9c0a-eb48fdc84b74.webp",
        imageAlt: "High-density double-sided embroidered twill keychains",
      },
    ],
    faq: [
      {
        q: "What is the minimum order for custom embroidered keychains?",
        a: "Embroidered keychains start at 25 pieces.",
      },
      {
        q: "Can each side have a different design?",
        a: "Yes. Embroidered keychains are double-sided, and each side can have its own design or text.",
      },
      {
        q: "What size are embroidered flight tags?",
        a: "The standard size is 130 × 30 mm. Custom shapes and sizes are available.",
      },
      {
        q: "Will I see a proof first?",
        a: "Yes. You get a free digital proof of both sides, and production starts only after you approve it.",
      },
    ],
  },

  "iron-on-patches": {
    meta: {
      title: "Custom Iron-On Patches | No-Sew Heat-Seal Patches",
      description:
        "Custom iron on patches with commercial heat-seal backing. Easy no-sew application, 50+ wash durability, and any patch style. Free digital proof.",
      keywords:
        "iron on patches, custom iron on patches, how to apply iron on patches",
    },
    heroEyebrow: "Apparel · Easy apply",
    h1: "Custom Iron-On Patches",
    shortName: "Iron-On Patches",
    heroParagraph:
      "Iron on patches with heat-seal backing for quick, no-sew application on jackets, bags, hats, and team apparel. Any of our patch styles can be ordered with iron-on backing.",
    specs: [
      { label: "Adhesive", value: "Commercial heat-seal adhesive" },
      { label: "Press Temperature", value: "300–340°F (150–170°C)" },
      { label: "Press Time", value: "12–15 seconds, firm pressure" },
      { label: "Wash Resistance", value: "50+ machine washes" },
      { label: "Border", value: "Merrowed or heat-cut" },
      { label: "Minimum Order", value: "25 pieces" },
    ],
    howTheyreMade: {
      heading: "Custom Iron-On Patches With Commercial Heat-Seal Backing",
      paragraphs: [
        "Iron-on patches have a heat-activated adhesive on the back, so you can apply them with a household iron or a heat press. No sewing needed.",
        "We use a commercial heat-seal adhesive that bonds firmly to cotton, denim, and canvas.",
        "Any style can be made iron-on, including embroidered, woven, sublimated, and chenille patches.",
      ],
    },
    splitSections: [
      {
        heading: "Fast, No-Sew Decoration for Apparel",
        body: [
          "Iron-on patches are the fastest way to add your logo to shirts, hats, jackets, and bags.",
          "Heat press at 300–340°F for 12–15 seconds with firm pressure, then let the patch cool.",
          "Great for team apparel, school clubs, events, and small brands decorating their own products.",
        ],
        image: "/images/collections/iron-on-patch.webp",
        imageAlt: "Commercial heat-seal iron-on patch application on cotton and denim",
      },
      {
        heading: "Iron-On Patches That Last Through Washing",
        body: [
          "Properly applied, our iron-on patches stay on through 50+ machine washes.",
          "Wash inside out in cold water and skip high-heat drying to help them last longer.",
          "For nylon, leather, or waterproof jackets, which can't take high heat, choose sew-on or Velcro backing instead.",
        ],
        image: "/images/embroidery/7571cad3-6834-4ded-a431-3cacb7fab0ff.webp",
        imageAlt: "Wash-durable iron-on patches bonded to apparel and outerwear",
        reverse: true,
      },
    ],
    faq: [
      {
        q: "What is the minimum order for custom iron-on patches?",
        a: "Iron-on patches start at 25 pieces.",
      },
      {
        q: "How do I apply an iron-on patch?",
        a: "Set a heat press to 300–340°F, place the patch, and press for 12–15 seconds with firm pressure. With a household iron, use the cotton setting with no steam, press through a thin cloth, and let it cool before moving it.",
      },
      {
        q: "Do iron-on patches stay on after washing?",
        a: "Yes. Applied correctly, they last through 50+ washes. Wash inside out in cold water for best results.",
      },
      {
        q: "Which fabrics work with iron-on patches?",
        a: "Iron-on patches work best on heat-safe fabrics such as cotton, denim, canvas, and twill. For nylon, polyester performance wear, or leather, sew-on or Velcro backing is safer.",
      },
    ],
  },
};

// Aliases
collectionDetails["pvc-keychain"] = collectionDetails["pvc-keychains"];

const SLUG_ALIASES: Record<string, string> = {
  "pvc-keychain": "pvc-keychains",
  "pvc-patch-design": "pvc-patches",
  "pvc-patch": "pvc-patches",
  "embroidered-patch": "embroidered-patches",
  "chenille-patch": "chenille-patches",
  "leather-patch": "leather-patches",
  "woven-patch": "woven-patches",
  "sublimated-patch": "sublimated-patches",
  "sublimation-patches": "sublimated-patches",
  "sequin-patch": "sequin-patches",
  "enamel-pin": "enamel-pins",
  "embroidery-keychain": "embroidery-keychains",
  "iron-on-patch": "iron-on-patches",
};

export function generateStaticParams() {
  return [
    { slug: "embroidered-patches" },
    { slug: "chenille-patches" },
    { slug: "pvc-patches" },
    { slug: "pvc-keychains" },
    { slug: "silicone-patches" },
    { slug: "leather-patches" },
    { slug: "woven-patches" },
    { slug: "sublimated-patches" },
    { slug: "sequin-patches" },
    { slug: "enamel-pins" },
    { slug: "embroidery-keychains" },
    { slug: "iron-on-patches" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  let { slug } = await params;
  if (SLUG_ALIASES[slug]) slug = SLUG_ALIASES[slug];
  const site = await getSite();
  const collection = site.collections.find((c) => c.slug === slug);
  if (!collection) return {};

  const details = collectionDetails[slug];
  const title = details?.meta?.title ?? `${collection.name} | Free Proof, No Setup Fees`;
  const description = details?.meta?.description ?? collection.description;
  const keywords = details?.meta?.keywords ?? `custom ${collection.name.toLowerCase()}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/collections/${slug}`,
    },
    openGraph: {
      title: `${title} | Power Digitizing`,
      description,
      url: `/collections/${slug}`,
      type: "website",
    },
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (SLUG_ALIASES[slug]) {
    redirect(`/collections/${SLUG_ALIASES[slug]}`);
  }
  const site = await getSite();
  const collection = site.collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  const details = collectionDetails[slug];
  if (!details) notFound();

  const isLeather = slug === "leather-patches";
  const phone = site.contact?.phone || "+1 (316) 444-1366";
  const email = site.contact?.email || "design@powerdigitizing.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: details.h1,
    description: details.heroParagraph,
    image: `https://powerdigitizing.com${collection.image}`,
    brand: {
      "@type": "Brand",
      name: "Power Digitizing",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: collection.price?.replace(/[^0-9.]/g, "") || "1.50",
      offerCount: details.specs.length,
      availability: "https://schema.org/InStock",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: details.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1E1E1E]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── A1 & A2. HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#E8E6E0] bg-white pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Subtle geometric pattern */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
        />

        <div className="relative mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          {/* A1: Breadcrumbs: Home / Collections / {Name} */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-muted-foreground"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-muted-foreground/60" />
            <Link href="/collections" className="hover:text-primary transition-colors">
              Collections
            </Link>
            <ChevronRight className="size-3 text-muted-foreground/60" />
            <span className="text-foreground font-semibold">{details.h1}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 xl:space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="size-3.5" />
                <span>{details.heroEyebrow}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-[1.08]">
                {details.h1}
              </h1>

              <p className="text-base sm:text-lg xl:text-xl text-[#555] leading-relaxed max-w-xl xl:max-w-2xl font-normal">
                {details.heroParagraph}
              </p>

              {/* A2: Hero Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-8 py-4 text-sm font-bold text-white shadow-xl hover:bg-black transition-all hover:scale-105"
                >
                  <span>Request a Free Digital Proof</span>
                  <ArrowUpRight className="size-4" />
                </Link>

                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D5D3CC] bg-white px-6 py-4 text-sm font-semibold text-[#333] hover:border-primary hover:text-primary transition-colors"
                >
                  <Phone className="size-4 text-primary" />
                  <span>Call {phone}</span>
                </a>
              </div>

              {/* A2: Trust checklist */}
              <div className="pt-6 border-t border-[#EFECE6] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#555] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Free digital proof in 24–48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>No setup or mold fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Checked against your approved proof</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Tracked shipping: USA • Canada • UK • Australia</span>
                </div>
              </div>
            </div>

            {/* Right Product Card (A3: Spec card header) */}
            <div className="lg:col-span-5">
              <div className="group relative aspect-square overflow-hidden rounded-3xl border border-[#E8E6E0] bg-gradient-to-b from-slate-50/90 to-slate-100/50 p-6 sm:p-10 shadow-2xl flex items-center justify-center">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-tr from-[#F8F7F2]/40 to-transparent pointer-events-none"
                />
                <div className="relative size-full flex items-center justify-center">
                  <Image
                    src={collection.image}
                    alt={details.h1}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-contain p-4 drop-shadow-[0_20px_35px_rgba(20,38,61,0.2)] transition-transform duration-700 ease-out group-hover:scale-110 select-none"
                  />
                </div>

                {/* A3: Floating badge */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E6E0] p-4 shadow-lg flex items-center justify-between text-xs">
                  <div>
                    <p className="font-display font-bold text-[#1A1A1A]">{details.h1}</p>
                    <p className="text-[11px] text-muted-foreground">Production specs</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700 text-[11px]">
                    In production
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS PILL STRIP ───────────────────────────── */}
      <section className="border-b border-[#E8E6E0] bg-[#F7F5EE] py-8">
        <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {details.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-xl border border-[#E5E3DC] bg-white p-3.5 shadow-sm"
              >
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  {spec.label}
                </p>
                <p className="mt-1 font-display text-xs sm:text-sm font-bold text-[#1A1A1A]">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIAL LEATHER ATELIER SHOWCASE (If Leather Page) ─────────────── */}
      {isLeather && (
        <ScrollReveal>
          <section className="py-20 md:py-28 border-b border-white/10 bg-[#0B1626] text-white relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 size-96 rounded-full bg-[#C94343]/10 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -left-24 -bottom-24 size-96 rounded-full bg-[#14263D]/30 blur-3xl pointer-events-none"
            />

            <div className="relative mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <div data-reveal className="max-w-2xl text-center mx-auto mb-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-mono uppercase tracking-widest text-white backdrop-blur-sm">
                  <Flame className="size-3.5 text-[#C94343]" /> Artisanal Hide Curation
                </div>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Four Master Leather Grades
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Every hide is hand-selected for oil balance, density, and burnishing reaction under heat and laser.
                </p>
              </div>

              {/* 4 Hide Swatch Cards */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    name: "Top-Grain Saddle Tan",
                    desc: "Classic natural vegetable-tanned hide. Burns to a deep walnut under CNC laser and darkens with age.",
                    thickness: "2.4mm",
                    finish: "Burnished Wax Edge",
                    badge: "Most Popular",
                    color: "bg-[#8D5B34]",
                  },
                  {
                    name: "Crazy-Horse Vintage",
                    desc: "Wax-impregnated distressed cowhide. Scratches rub out with body heat for an authentic rustic heritage feel.",
                    thickness: "2.6mm",
                    finish: "Pull-Up Oil Rich",
                    badge: "Heritage Workwear",
                    color: "bg-[#5C3B24]",
                  },
                  {
                    name: "Matte Black Onyx",
                    desc: "Deep dyed throughout. Provides stealth monochrome contrast when debossed or paired with silver foil.",
                    thickness: "2.2mm",
                    finish: "Smooth Satin",
                    badge: "Modern Streetwear",
                    color: "bg-[#1C1C1C]",
                  },
                  {
                    name: "Vegan Saffiano Faux",
                    desc: "High-grade cruelty-free synthetic leather with cross-hatch grain. 100% waterproof and uniform in color.",
                    thickness: "2.0mm",
                    finish: "Eco-Certified",
                    badge: "Cruelty Free",
                    color: "bg-[#A07048]",
                  },
                ].map((swatch) => (
                  <div
                    data-reveal
                    key={swatch.name}
                    className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md flex flex-col justify-between hover:border-[#C94343]/50 transition-all hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-mono text-[#C94343]">
                          {swatch.badge}
                        </span>
                        <span
                          className="size-4 rounded-full border border-white/40 shadow-inner"
                          style={{
                            backgroundColor: swatch.color.replace("bg-[", "").replace("]", ""),
                          }}
                        />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">{swatch.name}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300/80">{swatch.desc}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 space-y-1.5 text-[11px] font-mono text-white/50">
                      <div className="flex justify-between">
                        <span>THICKNESS</span>
                        <span className="text-white/80 font-bold">{swatch.thickness}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>FINISH</span>
                        <span className="text-white/80 font-bold">{swatch.finish}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Headwear Placement Guide */}
              <div
                data-reveal
                className="mt-14 rounded-3xl border border-white/15 bg-white/[0.04] p-8 md:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#C94343]">
                      HEADWEAR CALIBRATION
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      Curved Crown & Beanie Fold Engineering
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Most generic leather patches crack or bubble when applied to curved 6-panel trucker caps. At Power Digitizing, our dies are cast with perimeter bevels and custom flexibility conditioning, ensuring the patch contours flush against Richardson 112, Yupoong Classics, and Carhartt beanies.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="size-4 text-[#C94343]" /> Pre-curved Cap Option
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="size-4 text-[#C94343]" /> Perimeter Stitch Grooves
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="size-4 text-[#C94343]" /> High-Melt Industrial Adhesive
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-black/40 p-6 space-y-3 font-mono text-xs text-white/75">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/50">Standard Cap Size:</span>
                      <span className="text-white font-bold">3.0&quot; x 2.0&quot; (Rectangle)</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/50">Round Badge Size:</span>
                      <span className="text-white font-bold">2.5&quot; Diameter</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/50">Diamond Patch:</span>
                      <span className="text-white font-bold">2.75&quot; x 2.75&quot;</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Beanie Fold Over:</span>
                      <span className="text-white font-bold">Double-Sided 1.25&quot; Drop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* ── A4. HOW THEY'RE MADE SECTION ───────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-white border-b border-[#E8E6E0]">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              How they&apos;re made
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
              {details.howTheyreMade.heading}
            </h2>
            <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-[#555] text-left">
              {details.howTheyreMade.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── A4. PRODUCTION SECTIONS (SPLIT SECTIONS) ─────────────────────────── */}
      {details.splitSections.map((section, idx) => {
        const isReversed = section.reverse ?? false;
        return (
          <ScrollReveal key={idx}>
            <section
              className={`py-20 md:py-28 ${
                idx % 2 === 0 ? "bg-[#FBF9F5]" : "bg-white"
              } border-b border-[#E8E6E0]`}
            >
              <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20 items-center">
                  {/* Text Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {details.shortName} production standard
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                      {section.heading}
                    </h3>
                    <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#666]">
                      {section.body.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                    <div className="pt-2">
                      <Link
                        href="/quote"
                        className="inline-flex items-center gap-2 rounded-full border border-[#D5D3CC] bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-[#1A1A1A] hover:border-primary hover:text-primary transition-colors"
                      >
                        <span>Start This Style</span>
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#E8E6E0] bg-gradient-to-b from-slate-50/80 to-slate-100/40 p-6 sm:p-10 shadow-xl flex items-center justify-center">
                      <Image
                        src={section.image}
                        alt={section.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 500px"
                        className="object-contain object-center p-2 drop-shadow-[0_16px_28px_rgba(20,38,61,0.18)] transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        );
      })}

      {/* ── A5. CURATED PRODUCTION GALLERY ─────────────────────────────────── */}
      <CollectionGallery slug={slug} collectionName={details.h1} />

      {/* ── A6. WHY CHOOSE US (2 CARDS) ─────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-[#F7F5EE] border-b border-[#E8E6E0]">
          <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
            <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                Why Power Digitizing
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Why Order {details.h1} From Power Digitizing?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Hand-prepared artwork, careful production, and a proof you approve before anything is made.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
              <div
                data-reveal
                className="rounded-3xl border border-[#E8E6E0] bg-white p-8 sm:p-10 shadow-sm transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="grid size-12 place-items-center rounded-2xl bg-primary/5 text-primary mb-6">
                  <Shield className="size-6 text-primary" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                  Made to Last
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#666] leading-relaxed">
                  Built for real use on uniforms, hats, and gear, and checked against your approved proof before it ships. If it doesn&apos;t match, we remake it at no extra cost.
                </p>
              </div>

              <div
                data-reveal
                className="rounded-3xl border border-[#E8E6E0] bg-white p-8 sm:p-10 shadow-sm transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="grid size-12 place-items-center rounded-2xl bg-primary/5 text-primary mb-6">
                  <Sparkles className="size-6 text-primary" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                  Fine Detail, Checked by Hand
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#666] leading-relaxed">
                  From sharp laser engraving to small lettering, every detail is checked by our team before production.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── A7. FAQ SECTION (4 UNIQUE QUESTIONS PER COLLECTION) ─────────────── */}
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-white border-b border-[#E8E6E0]">
          <div className="mx-auto max-w-4xl xl:max-w-5xl px-5 sm:px-6 lg:px-8">
            <div data-reveal className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                Common questions
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                {details.h1} FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {details.faq.map(({ q, a }) => (
                <div
                  data-reveal
                  key={q}
                  className="rounded-2xl border border-[#E8E6E0] bg-[#FAFAF7] p-6 sm:p-8 hover:border-primary/30 transition-colors"
                >
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#1A1A1A]">
                    {q}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#666]">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── A8. CLOSING CALL TO ACTION ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24">
        <div className="relative mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10 text-center">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0B1626] via-[#14263D] to-[#0B1626] p-8 text-white shadow-2xl sm:p-12 md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-[#C94343]/15 blur-[120px]"
            />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                <Sparkles className="size-3.5 text-[#C94343]" /> Start your order
              </span>

              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
                Ready to make your <br className="hidden sm:inline" />
                {details.h1}?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Send your logo, sketch, or idea. Our team will recommend the right size and backing and send a free digital proof within 24–48 hours. Production starts only after you approve.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#C94343]/30 transition-all hover:scale-105 hover:bg-[#b03535] hover:shadow-2xl"
                >
                  <span>Request a Free Proof & Quote</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/15"
                >
                  <span>Talk to a Patch Specialist</span>
                </Link>
              </div>

              {/* A8 Contact strip: +1 (316) 444-1366 • design@powerdigitizing.com • Rush options available */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-xs text-slate-300/80">
                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="group flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="size-3.5 text-[#C94343] transition-transform group-hover:scale-110" />
                  <span>{phone}</span>
                </a>
                <span className="hidden text-white/20 sm:inline">•</span>
                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="size-3.5 text-[#C94343] transition-transform group-hover:scale-110" />
                  <span>{email}</span>
                </a>
                <span className="hidden text-white/20 sm:inline">•</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <Clock className="size-3.5 text-[#C94343]" />
                  <span>Rush options available</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
