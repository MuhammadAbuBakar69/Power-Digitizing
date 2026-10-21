import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

// ─── Per-collection rich content ──────────────────────────────────────────────
const collectionDetails: Record<
  string,
  {
    splitSections: { heading: string; body: string[]; image: string; imageAlt: string; reverse?: boolean }[];
    about: { heading: string; paragraphs: string[] };
    specs: { label: string; value: string }[];
  }
> = {
  "leather-patches": {
    about: {
      heading: "Artisanal Heritage: The Master Leather Patch Atelier",
      paragraphs: [
        "Leather patches represent the apex of heritage craft, permanent tactile branding, and timeless apparel positioning. A richly debossed or laser-engraved leather patch applied to a structured trucker cap, raw denim jacket, or waxed canvas travel bag communicates authentic craftsmanship in a way synthetic labels can never replicate. It speaks to permanence, rugged luxury, and discerning taste.",
        "We source genuine top-grain cowhide, rustic crazy-horse vintage pull-up leather, and cruelty-free high-grade synthetic faux leathers. Every hide is inspected for grain uniformity, thickness calibrated to 2.2mm–2.8mm, and precision cut with high-speed optical CNC lasers before undergoing heated hydraulic pressure debossing or fiber-laser etching.",
        "As leather patches age, they absorb oils, sunlight, and wear — developing a signature patina that renders every garment uniquely personal. For apparel decorators, hatmakers, and lifestyle brands seeking to command higher retail price points, our bespoke leather patches are the definitive choice.",
      ],
    },
    specs: [
      { label: "Hide Thickness", value: "2.2mm – 2.8mm Top-Grain" },
      { label: "Deboss Depth", value: "0.8mm Crisp Hydraulic Relief" },
      { label: "Edge Treatment", value: "Burnished, Raw, or Stitch Grooved" },
      { label: "Backing Method", value: "Heat-Seal, Sew-On Channel, Velcro" },
      { label: "Turnaround Time", value: "5–7 Days Production" },
      { label: "Minimum Order", value: "25 Pieces (Free Proof Included)" },
    ],
    splitSections: [
      {
        heading: "The Anatomy of a Premium Leather Hat Patch",
        body: [
          "Custom leather patches have become the gold standard for premium headwear brands worldwide. An authentic leather emblem elevates a standard 5-panel or 6-panel trucker cap from basic promotional merch into an upscale retail product that commands $35–$50 on shelves.",
          "We engineer our leather patches specifically for headwear curvature. Our patches feature calibrated pliability so they contour smoothly to curved cap crowns without creasing, lifting at the edges, or bubbling.",
          "Choose between blind debossing (where heated steel dies press your artwork permanently into the hide) and ultra-high-definition laser burnishing, which darkens the leather fibres to create rich caramel and espresso contrasts.",
        ],
        image: "/images/Leather WebP/299d8a05-a46b-4b75-b618-277f67044e1e.webp",
        imageAlt: "Custom debossed leather patches on trucker caps and beanies",
      },
      {
        heading: "Denim Waistbands, Outerwear & Heavy-Duty Gear",
        body: [
          "On the yoke of a raw denim jacket, the waistband of bespoke jeans, or the flap of a full-grain leather backpack, a leather patch serves as an enduring brand signature. Our heavy-duty finishes survive repeated laundering without cracking or peeling.",
          "We offer pre-punched perimeter stitch channels with optional heavy contrast thread (Madeira Serafil industrial thread in gold, white, or black) for seamless hand-sewing or commercial sewing machine attachment.",
          "Every order includes a high-definition digital rendering that accurately simulates hide grain texture, debossing depth, and burnish shadows before metal dies are cast.",
        ],
        image: "/images/Leather WebP/64a46fe2-61a2-4b76-9df3-81988759d6c6.webp",
        imageAlt: "Artisanal leather patches for denim and heavy workwear",
        reverse: true,
      },
    ],
  },
  "embroidered-patches": {
    about: {
      heading: "The Art & High-Tensile Engineering of Embroidered Patches",
      paragraphs: [
        "Embroidered patches are the timeless, quintessential benchmark of insignia craft. Offering a rich, tactile three-dimensional topography, embroidery adds authoritative weight and heirloom permanence to team crests, corporate uniforms, and tactical insignias.",
        "We utilize 100% colorfast trilobal polyester and rayon threads that resist chlorine, harsh laundering detergents, and UV bleaching. Our manual digitizers carefully plot stitch angles, underlay density, and pull compensation needle by needle to prevent fabric puckering and thread breaks.",
        "Whether you require a traditional 75% embroidery on heavy cotton twill or 100% full-surface embroidery with a heavy merrowed border, our production guarantees museum-grade sharpness from initial digital proof to delivered goods.",
      ],
    },
    specs: [
      { label: "Stitch Precision", value: "Sub-millimeter Needle Planning" },
      { label: "Thread Type", value: "Trilobal Colorfast Polyester" },
      { label: "Border Finish", value: "Merrowed Overlock or Laser-Cut" },
      { label: "Backing", value: "Heat-Seal Iron-On, Velcro Hook/Loop" },
      { label: "Durability", value: "50+ Commercial Wash Cycles" },
      { label: "Rush Option", value: "Available in 2-4 Hours" },
    ],
    splitSections: [
      {
        heading: "Engineered for First Responders, Military & Teams",
        body: [
          "When emergency personnel, corporate teams, and sporting clubs take the field, their identification must withstand punishing real-world demands. Our embroidered patches feature tightly bound merrowed overlock borders that prevent fraying even under abrasive physical contact.",
          "Our color matching utilizes the Madeira Pantone system to guarantee your department's official colors are replicated with 100% accuracy.",
          "Available with military-grade hook-and-loop Velcro backings for rapid uniform changes or industrial heat-seal backing for permanent heat-press application.",
        ],
        image: "/images/embroidery/180ac20d-921e-4432-aee7-0ebb724068d7.webp",
        imageAlt: "Heavy-duty embroidered patches for uniform programs",
      },
      {
        heading: "The Digitizing Difference: No Automated Shortcuts",
        body: [
          "The secret to a razor-sharp embroidered patch lies in the digital punching phase. Automated auto-trace software yields flat, irregular stitches that snap needles and distort text. Our senior digitizers map every letter and fill manually.",
          "Small lettering down to 3.5mm height remains crisp and legible because we adjust stitch density and underlay sequencing specifically for micro-typography.",
          "You receive a high-resolution simulation with complete stitch counts and color sequences before production commences.",
        ],
        image: "/images/embroidery/9c109bbb-b227-4f4e-9d3d-56fae3c5016f.webp",
        imageAlt: "Detailed embroidery digitizing stitch run-out",
        reverse: true,
      },
    ],
  },
  "chenille-patches": {
    about: {
      heading: "The Varsity Icon: Bespoke Chenille & Looped Yarn Emblems",
      paragraphs: [
        "Chenille patches carry over a century of varsity heritage, collegiate achievement, and luxury streetwear culture. The signature thick, looped yarn construction gives each emblem an unmistakable warmth, plush softness, and volumetric depth that stands 4mm–6mm proud of the garment surface.",
        "Woven on specialized moss-stitch looms using high-grade acrylic chenille yarn and reinforced with double-layer wool felt backings, our custom chenille patches capture the authentic golden era of letterman jackets.",
        "From championship varsity letters and mascot head emblems to high-fashion streetwear drops, chenille patches turn basic hoodies and varsity bombers into luxury collectible garments.",
      ],
    },
    specs: [
      { label: "Yarn Loft", value: "4.0mm – 6.0mm Plush Thickness" },
      { label: "Base Fabric", value: "Double-Layer Melton Wool Felt" },
      { label: "Embroidery Detail", value: "Integrated Chain & Chenille Combo" },
      { label: "Border", value: "Felt Die-Cut or Merrowed Ring" },
      { label: "Application", value: "Direct Sew-On or Industrial Heat-Seal" },
      { label: "Minimum Order", value: "10 Pieces" },
    ],
    splitSections: [
      {
        heading: "The Classic American Letterman & Varsity Heritage",
        body: [
          "Nothing commemorates athletic triumph and academic achievement like a traditional chenille varsity letter. Our chenille patches feature authentic felt backings in traditional school colors — crimson, navy, forest green, varsity gold, and heather grey.",
          "We build multi-layered letters with contrasting chenille center fills, felt border steps, and metallic gold or silver embroidery detailing for state championship stars and award years.",
          "Sized up to 10 inches for jacket backs or 4-5 inches for chest insignias, each piece is engineered to drape naturally on heavy wool and leather sleeves.",
        ],
        image: "/images/Chennile WebP/534aa9a0-5f7f-4a78-b27e-360df8c03136.webp",
        imageAlt: "Varsity letterman chenille patches with felt backing",
      },
      {
        heading: "Streetwear Reinvention: High-Density Fashion Drops",
        body: [
          "Modern streetwear labels have embraced chenille for its tactile contrast against heavyweight French terry cotton and satin bomber jackets. A chunky chenille logo transforms a garment into a statement piece.",
          "We offer hybrid chenille-embroidery patches where complex graphic details (eyes, small lettering, fine teeth) are digitized in high-tensile flat embroidery, while large body areas are filled with plush chenille loops.",
          "Every order includes free digital artwork setup and color verification proofs to ensure your brand's drop arrives production-perfect.",
        ],
        image: "/images/Chennile WebP/53d2f848-5ff7-4e64-9393-d42b165ca529.webp",
        imageAlt: "Streetwear chenille patch applications on hoodies",
        reverse: true,
      },
    ],
  },
  "pvc-patches": {
    about: {
      heading: "Tactical Resilience: All-Weather 3D Molded PVC Patches",
      paragraphs: [
        "Soft PVC patches are the most indestructible insignia option in modern apparel. Cast from flexible, marine-grade polyvinyl chloride, PVC patches are 100% waterproof, mud-proof, UV-resistant, and flame-retardant — engineered for extreme outdoor, tactical, and maritime environments.",
        "Unlike thread-based patches that can snag, pill, or absorb moisture, PVC patches wipe clean with water and maintain vibrant, saturated color indefinitely.",
        "Utilizing precision CNC aluminum molds, we create striking multi-level 2D and 3D reliefs with sharp micro-lines that cannot be achieved with textile embroidery.",
      ],
    },
    specs: [
      { label: "Material Grade", value: "Non-Toxic Marine PVC" },
      { label: "Relief Dimension", value: "2D Flat / 3D Sculpted Mold" },
      { label: "Waterproof Rating", value: "100% Submersible & Mud-Proof" },
      { label: "Backing", value: "Hook & Loop (Velcro) or Sew Channel" },
      { label: "Thermal Range", value: "-30°C to +80°C Resilience" },
      { label: "Minimum Order", value: "25 Pieces" },
    ],
    splitSections: [
      {
        heading: "Military, SWAT & Law Enforcement Gear",
        body: [
          "From morale patches on tactical plate carriers to department crests on operator caps, our PVC patches are built for combat durability. The recessed sewing channel ensures your attachment thread is protected from abrasive friction.",
          "We produce subdued tactical colorways (Coyote Brown, Ranger Green, Wolf Grey, O.D. Green) and custom glow-in-the-dark or IR-reflective options for nocturnal operations.",
          "Hook-and-loop Velcro backings are heat-bonded and perimeter-stitched for unconditional retention on vests and gear.",
        ],
        image: "/images/PVC WebP/105f6253-e172-4ca6-a390-19a0ff9ec46a.webp",
        imageAlt: "Tactical military PVC patches with Velcro backing",
      },
      {
        heading: "Extreme Outdoor & Maritime Applications",
        body: [
          "Outdoor apparel brands, ski gear manufacturers, and scuba diving outfits choose PVC for its complete imperviousness to snow, salt spray, and abrasive dirt.",
          "Our multi-layer molding process allows up to 6 custom Pantone colors cast into distinct dimensional planes.",
          "Precision mold tooling captures sharp geometric typography and intricate logo badges without color bleeding.",
        ],
        image: "/images/PVC WebP/24778966-adb2-4b70-870f-52984729189b.webp",
        imageAlt: "All-weather PVC patches for outdoor lifestyle brands",
        reverse: true,
      },
    ],
  },
  "enamel-pins": {
    about: {
      heading: "Jewelry-Grade Custom Hard & Soft Enamel Lapel Pins",
      paragraphs: [
        "Custom enamel pins offer museum-grade jewelry quality, brilliant Pantone enamel fills, and mirror-polished metal plating in 24k gold, silver, rose gold, and dyed black nickel.",
        "Whether crafting commemorative pins for corporate galas, collectible merchandise for festivals, or distinguished collar badges for military and clubs, our pins are cast with sub-millimeter die-striking precision.",
        "Choose between smooth flush hard enamel (cloisonné style) and textured dimensional soft enamel with raised metal borders and recessed color valleys.",
      ],
    },
    specs: [
      { label: "Plating Finishes", value: "24K Gold, Silver, Black Nickel, Antique" },
      { label: "Enamel Type", value: "Jewelry Hard Enamel or Soft Enamel" },
      { label: "Attachment Backs", value: "Butterfly Clutch, Rubber Cap, Deluxe Magnet" },
      { label: "Packaging", value: "Custom Backing Cards & Velvet Pouches" },
      { label: "Tolerance", value: "±0.05mm Micro-Die Striking" },
      { label: "Minimum Order", value: "25 Pieces (Free Proof Included)" },
    ],
    splitSections: [
      {
        heading: "Die-Struck Precision & Vivid Pantone Coloring",
        body: [
          "Every enamel pin begins with a hardened steel die cast under 50 tons of hydraulic pressure. Liquid enamel is hand-applied needle by needle into each recessed cavity and fired at high temperature.",
          "Hard enamel pins undergo multiple rounds of hand-polishing and electroplating until the enamel and metal rims form a continuous, flush, mirror-flat surface.",
          "We offer custom backing cards with spot UV, foil stamping, and individual poly-bagging ready for retail display.",
        ],
        image: "/images/collections/enamel-pin.webp",
        imageAlt: "Custom hard enamel lapel pin with polished gold edges",
      },
    ],
  },
  "embroidery-keychains": {
    about: {
      heading: "Aviation-Grade Double-Sided Embroidered Flight Tags & Keychains",
      paragraphs: [
        "Our custom embroidered keychains — famously modeled after vintage aviation flight tags — combine durable heavy twill fabric, merrowed stitched border perimeter rings, and solid steel grommet eyelets.",
        "Engineered for heavy daily carry on keys, backpacks, gear bags, and motorcycle ignitions, these keychains will never scratch bike paint or car dashboards.",
        "With 100% double-sided embroidery, your slogan, club emblem, or warning insignia is legible from both sides with industrial thread durability.",
      ],
    },
    specs: [
      { label: "Fabric Core", value: "Heavy-Duty Reinforced Twill" },
      { label: "Borders", value: "Tightly Merrowed Overlock Stitch" },
      { label: "Hardware", value: "Solid Steel Grommet & Flat Split Ring" },
      { label: "Sides", value: "100% Double-Sided Embroidery" },
      { label: "Standard Size", value: "130mm x 30mm (Custom Shapes Available)" },
      { label: "Minimum Order", value: "25 Pieces" },
    ],
    splitSections: [
      {
        heading: "Engineered for Motors, Aviation & Everyday Carry",
        body: [
          "Unlike metal keychains that rattle and scratch steering columns or fuel tanks, fabric embroidered key fobs are soft, flexible, and completely silent.",
          "Featuring high-tensile polyester threads that resist fraying, gasoline spills, and weather exposure.",
          "Custom lengths, double eyelets, and swivel clasps are available for all automotive, aerospace, and club orders.",
        ],
        image: "/images/collections/embroidery-keychain.webp",
        imageAlt: "Custom double-sided embroidered flight tag keychain",
      },
    ],
  },
  "sequin-patches": {
    about: {
      heading: "Shimmering Reversible & High-Density Metallic Sequin Patches",
      paragraphs: [
        "Sequin patches bring high-fashion dazzle, dynamic motion, and reflective sparkle to denim, hoodies, dancewear, and festival apparel. Each sequin is precision-sewn onto high-grade backing fabric for permanent retention.",
        "We craft both classic single-color glittering sequins and interactive two-tone flip reversible sequins where swiping your hand across the patch reveals a secondary color or hidden graphic.",
        "Engineered with soft fabric borders or clean heat-sealed edges for easy machine sewing or commercial heat-press application.",
      ],
    },
    specs: [
      { label: "Sequin Types", value: "Metallic, Holographic, Reversible Flip" },
      { label: "Sequin Sizes", value: "3mm Micro to 5mm Standard Discs" },
      { label: "Border Finish", value: "Merrowed Felt or Embroidered Ring" },
      { label: "Backing", value: "Iron-On Heat Seal or Sew-On Twill" },
      { label: "Luster", value: "High-Gloss Mirror & Shimmer Refraction" },
      { label: "Minimum Order", value: "25 Pieces" },
    ],
    splitSections: [
      {
        heading: "Dynamic Motion & Runway Glamour",
        body: [
          "Whether lighting up festival stages or accenting couture streetwear jackets, sequin emblems reflect ambient light with stunning vibrancy.",
          "Our reinforced stitching locks every sequin disc in place to prevent thread breakage during laundering or active wear.",
          "Available in gold, silver, iridescent chameleon, crimson, and two-tone flip combinations.",
        ],
        image: "/images/collections/sequin-patch.webp",
        imageAlt: "Custom glittering reversible sequin patch emblem",
      },
    ],
  },
  "silicone-patches": {
    about: {
      heading: "Modern Soft-Touch 3D Matte Molded Silicone Patches",
      paragraphs: [
        "Silicone patches provide a clean, modern aesthetic with ultra-matte velvet finish, sharp 3D reliefs, and exceptional durability. They represent the modern evolution of tactical and athletic emblems.",
        "Impervious to water, UV radiation, and freezing temperatures, silicone patches maintain their vibrant matte color and elasticity for years of rigorous outdoor and streetwear wear.",
        "Available with sew-on stitch channels, peel-and-stick adhesives, or military-spec Velcro hook-and-loop backings.",
      ],
    },
    specs: [
      { label: "Material", value: "Eco-Grade Matte Silicone" },
      { label: "Finish", value: "Velvet Soft-Touch Non-Glare" },
      { label: "Relief Depth", value: "Up to 3.5mm Multi-Tier 3D" },
      { label: "Backing", value: "Hook & Loop, Heat-Seal, Sew Channel" },
      { label: "Waterproof", value: "100% Submersible & Washable" },
      { label: "Minimum Order", value: "25 Pieces" },
    ],
    splitSections: [
      {
        heading: "Tactile Precision for Modern Headwear & Technical Apparel",
        body: [
          "Matte silicone patches create an upscale, understated look on technical outerwear, structured trucker caps, and athletic compression gear.",
          "Our multi-cavity precision molds capture crisp micro-lettering down to 0.5mm stroke thickness without distortion.",
        ],
        image: "/images/collections/silicone-patch.webp",
        imageAlt: "Custom 3D molded soft silicone patch",
      },
    ],
  },
  "woven-patches": {
    about: {
      heading: "Ultra-Fine Damask Woven Patches for Micro-Detail & Small Typography",
      paragraphs: [
        "When your artwork features intricate line art, micro-typography, or fine gradient details that exceed the physical needle resolution of embroidery, woven patches are the premier choice.",
        "Woven on high-speed Jacquard looms with microscopic 50-denier polyester threads, woven patches deliver photographic sharpness with a smooth, flat, lightweight profile.",
        "Finished with traditional merrowed overlock borders for classic insignia styling or laser heat-cut edges for modern, flush-fit application.",
      ],
    },
    specs: [
      { label: "Weave Type", value: "High-Density Damask Jacquard" },
      { label: "Thread Density", value: "50-Denier Microfilament" },
      { label: "Min Text Height", value: "1.5mm Ultra-Legible Typography" },
      { label: "Border Style", value: "Merrowed Edge or Laser Heat-Cut" },
      { label: "Backing", value: "Iron-On, Velcro Hook/Loop, Adhesive" },
      { label: "Minimum Order", value: "25 Pieces" },
    ],
    splitSections: [
      {
        heading: "Micro-Detail Without Needle Restrictions",
        body: [
          "Unlike embroidery where needles punch through fabric, woven threads are interlaced horizontally and vertically, allowing razor-sharp resolution on complex crests and sponsor logos.",
          "Smooth surface feel that lays completely flat on shirts, beanies, caps, and outdoor equipment.",
        ],
        image: "/images/collections/woven-patch.webp",
        imageAlt: "High-definition custom woven damask patch emblem",
      },
    ],
  },
  "sublimated-patches": {
    about: {
      heading: "Photographic & Full-Color Gradient Sublimation Patches",
      paragraphs: [
        "Dye-sublimation patches infuse high-resolution heat-activated dyes directly into the polyester fabric fibers at 400°F. The result is permanent, photo-realistic color with zero stitch restrictions.",
        "Ideal for photography, complex gradients, continuous shading, and multi-color illustrated artwork that cannot be replicated with threads.",
        "Often finished with an authentic merrowed embroidered border or clean laser edge, blending the authority of an embroidered patch with photographic fidelity.",
      ],
    },
    specs: [
      { label: "Print Method", value: "Direct Fiber Dye Sublimation" },
      { label: "Resolution", value: "1200 DPI True Photographic" },
      { label: "Color Gamut", value: "Full Spectrum CMYK + Neon" },
      { label: "Border Finish", value: "Merrowed Embroidered Overlock" },
      { label: "Durability", value: "Permanent Colorfast In-Fiber Infusion" },
      { label: "Minimum Order", value: "10 Pieces" },
    ],
    splitSections: [
      {
        heading: "True Full-Color Gradients & Photo Realism",
        body: [
          "From space mission emblems to corporate event illustrations with complex shadows, sublimation delivers infinite color possibilities.",
          "The dye is permanently bound into the fibers, meaning it will never peel, crack, or wash away.",
        ],
        image: "/images/collections/sublimation-patch.webp",
        imageAlt: "Photographic full-color sublimated patch with merrowed border",
      },
    ],
  },
  "iron-on-patches": {
    about: {
      heading: "Industrial Heat-Seal Iron-On Patches for Fast, Permanent Application",
      paragraphs: [
        "Iron-on patches feature commercial-grade thermoplastic heat-activated adhesive backing. Applied in seconds using a home iron or commercial heat press, the adhesive bonds deep into garment fibers.",
        "Engineered to withstand over 50 commercial laundry wash cycles without edge peeling, lifting, or bubbling.",
        "Available across all our patch constructions — embroidered, woven, printed, and leather.",
      ],
    },
    specs: [
      { label: "Adhesive Type", value: "Commercial Thermoplastic Polyolefin" },
      { label: "Press Temp", value: "150°C – 170°C (300°F – 340°F)" },
      { label: "Press Time", value: "12 – 15 Seconds Firm Pressure" },
      { label: "Wash Resistance", value: "50+ Machine Wash Cycles" },
      { label: "Border", value: "Merrowed Edge or Precision Heat-Cut" },
      { label: "Minimum Order", value: "25 Pieces" },
    ],
    splitSections: [
      {
        heading: "Fast, No-Sew Apparel Decoration",
        body: [
          "Perfect for school programs, event merch, and team uniform rollouts where fast application is essential without sewing machines.",
          "Our heat-activated adhesive bonds permanently to cotton, denim, canvas, fleece, and polyester blends.",
        ],
        image: "/images/collections/iron-on-patch.webp",
        imageAlt: "Custom embroidered iron-on emblem patch",
      },
    ],
  },
};

const fallbackDetails = (name: string, patchTypeName: string, fallbackImage = "/images/brand/logo.png") => ({
  about: {
    heading: `The Definitive Guide to Custom ${name}`,
    paragraphs: [
      `When it comes to brand representation, team unity, and professional apparel, details matter immensely. Our custom ${name.toLowerCase()} are engineered to stand out and last a lifetime. Whether outfitting a team, producing merchandise for an apparel line, or creating commemorative patches, our expert manufacturing process guarantees perfection.`,
      `We specialize in high-quality bespoke ${name.toLowerCase()} tailored exactly to your specifications. From intricate artwork to bold, simplistic designs, we bring your vision to life using industry-leading machinery and top-tier materials. Discover why thousands of businesses and organizations globally trust us for their personalized ${patchTypeName.toLowerCase()} needs.`,
      `From the choice of material to the border finish — merrowed, laser-cut, or heat-cut — every variable is fine-tuned to your garment and application. Our team works collaboratively with you through the proofing stage to ensure zero surprises when your order arrives.`,
    ],
  },
  specs: [
    { label: "Custom Shapes", value: "100% Bespoke Die-Cut Available" },
    { label: "Quality Standard", value: "ISO Commercial Apparel Grade" },
    { label: "Backing Options", value: "Iron-On, Velcro, Sew-On, Adhesive" },
    { label: "Proof Turnaround", value: "24–48 Hours Free Digital Proof" },
    { label: "Revisions", value: "Unlimited Free Design Revisions" },
    { label: "Production", value: "7–14 Business Days Tracked" },
  ],
  splitSections: [
    {
      heading: `Built for Brands, Teams & Professionals`,
      body: [
        `Our custom ${name.toLowerCase()} are trusted by businesses, teams, and organizations across the USA, Canada, UK, and Australia. Every patch is produced to a professional standard with rigorous quality control.`,
        `Whether you need a small batch for a local club or thousands for a national rollout, our production scales to your requirements with no minimum order restrictions and transparent, competitive pricing.`,
        `We provide a free digital proof within 24-48 hours of your request, allowing you to review and approve the exact design before a single patch is manufactured.`,
      ],
      image: fallbackImage,
      imageAlt: `Custom ${name.toLowerCase()} for brands and teams`,
    },
  ],
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const site = await getSite();
  const collection = site.collections.find((c) => c.slug === slug);
  if (!collection) return {};
  return {
    title: `Custom ${collection.name} | Bespoke Production & Free Proof | ${site.name}`,
    description: `Order custom ${collection.name.toLowerCase()} for uniforms, headwear, and apparel. ${collection.description} Free digital proof, fast production, and zero setup fees.`,
    keywords: `custom ${collection.name.toLowerCase()}, personalized ${collection.name.toLowerCase()}, bespoke patches, order ${collection.name.toLowerCase()} online`,
  };
}

export default async function CollectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = await getSite();
  const collection = site.collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  const patchTypeName = collection.name.replace(/ patches$/i, "");
  const details = collectionDetails[slug] ?? fallbackDetails(collection.name, patchTypeName, collection.image);
  const isLeather = slug === "leather-patches";

  const phone = site.contact?.phone || "+1 (316) 444-1366";
  const email = site.contact?.email || "support@powerdigitizing.com";

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1E1E1E]">
      {/* ── 1. LUXURY EDITORIAL HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#E8E6E0] bg-white pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Subtle geometric pattern */}
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-5">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="size-3 text-muted-foreground/60" />
            <Link href="/collections" className="hover:text-primary transition-colors">Collections</Link>
            <ChevronRight className="size-3 text-muted-foreground/60" />
            <span className="text-foreground font-semibold">{collection.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="size-3.5" />
                <span>Atelier Grade • {collection.category}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.08]">
                Bespoke <span className="text-primary">{collection.name}</span>
              </h1>

              <p className="text-base sm:text-lg text-[#555] leading-relaxed max-w-xl font-normal">
                {collection.description} Engineered with master-level calibration, authentic materials, and strict production tolerances for apparel brands, hatmakers, and uniform programs worldwide.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-8 py-4 text-sm font-bold text-white shadow-xl hover:bg-black transition-all hover:scale-105"
                >
                  <span>Request Free Digital Proof</span>
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

              {/* Trust checklist */}
              <div className="pt-6 border-t border-[#EFECE6] grid grid-cols-2 gap-3 text-xs text-[#555] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>100% Free Digital Proof in 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>No Setup or Mold Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Industrial Machine Tested</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Worldwide Tracked Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Product Card with Zoom Effect */}
            <div className="lg:col-span-5">
              <div className="group relative aspect-square overflow-hidden rounded-3xl border border-[#E8E6E0] bg-gradient-to-b from-slate-50/90 to-slate-100/50 p-6 sm:p-10 shadow-2xl flex items-center justify-center">
                <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-[#F8F7F2]/40 to-transparent pointer-events-none" />
                <div className="relative size-full flex items-center justify-center">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-contain p-4 drop-shadow-[0_20px_35px_rgba(20,38,61,0.2)] transition-transform duration-700 ease-out group-hover:scale-110 select-none"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E6E0] p-4 shadow-lg flex items-center justify-between text-xs">
                  <div>
                    <p className="font-display font-bold text-[#1A1A1A]">{collection.name}</p>
                    <p className="text-[11px] text-muted-foreground">Certified Production Spec</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700 text-[11px]">
                    In Production
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TECHNICAL SPECIFICATIONS PILL STRIP ───────────────────────────── */}
      <section className="border-b border-[#E8E6E0] bg-[#F7F5EE] py-8">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {details.specs.map((spec) => (
              <div key={spec.label} className="rounded-xl border border-[#E5E3DC] bg-white p-3.5 shadow-sm">
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{spec.label}</p>
                <p className="mt-1 font-display text-xs sm:text-sm font-bold text-[#1A1A1A]">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SPECIAL LEATHER ATELIER SHOWCASE (If Leather Page) ─────────────── */}
      {isLeather && (
        <ScrollReveal>
          <section className="py-20 md:py-28 border-b border-white/10 bg-[#0B1626] text-white relative overflow-hidden">
            <div aria-hidden className="absolute -right-24 -top-24 size-96 rounded-full bg-[#C94343]/10 blur-3xl pointer-events-none" />
            <div aria-hidden className="absolute -left-24 -bottom-24 size-96 rounded-full bg-[#14263D]/30 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-6xl px-5">
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
                        <span className="size-4 rounded-full border border-white/40 shadow-inner" style={{ backgroundColor: swatch.color.replace("bg-[", "").replace("]", "") }} />
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
              <div data-reveal className="mt-14 rounded-3xl border border-white/15 bg-white/[0.04] p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#C94343]">HEADWEAR CALIBRATION</p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      Curved Crown & Beanie Fold Engineering
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Most generic leather patches crack or bubble when applied to curved 6-panel trucker caps. At Power Digitizing, our dies are cast with perimeter bevels and custom flexibility conditioning, ensuring the patch contours flush against Richardson 112, Yupoong Classics, and Carhartt beanies.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
                      <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-[#C94343]" /> Pre-curved Cap Option</span>
                      <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-[#C94343]" /> Perimeter Stitch Grooves</span>
                      <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-[#C94343]" /> High-Melt Industrial Adhesive</span>
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

      {/* ── 4. LONG-FORM CRAFT ESSAY ────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-white border-b border-[#E8E6E0]">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">MANUFACTURING PHILOSOPHY</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
              {details.about.heading}
            </h2>
            <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-[#555] text-left">
              {details.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── 5. SPLIT PRODUCTION DEEP-DIVES ───────────────────────────────────── */}
      {details.splitSections.map((section, idx) => {
        const isReversed = section.reverse ?? false;
        return (
          <ScrollReveal key={idx}>
            <section className={`py-20 md:py-28 ${idx % 2 === 0 ? "bg-[#FBF9F5]" : "bg-white"} border-b border-[#E8E6E0]`}>
              <div className="mx-auto max-w-6xl px-5">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
                  {/* Text Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {patchTypeName} Production Standard
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
                        <span>Configure This Style</span>
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

      {/* ── 5.5 CURATED PRODUCTION GALLERY (10-12 DESIGNS) ─────────── */}
      <CollectionGallery slug={slug} collectionName={collection.name} />

      {/* ── 6. PRODUCTION PILLARS ───────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-[#F7F5EE] border-b border-[#E8E6E0]">
          <div className="mx-auto max-w-6xl px-5">
            <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-primary">ZERO COMPROMISE</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Why Power Digitizing {collection.name}?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                We combine fine art craftsmanship with industrial production rigor to guarantee flawless execution.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { Icon: Shield, title: "100% Guaranteed Durability", text: "Tested against 50+ wash cycles, UV exposure, and abrasive real-world uniform wear without unravelling." },
                { Icon: Sparkles, title: "Micro-Precision Detailing", text: "Whether sharp laser engraving or satin stitch columns down to 3mm, our tolerances are verified manually." },
                { Icon: Layers, title: "4 Application Backings", text: "Choose from industrial heat-seal iron-on, genuine Velcro hook-and-loop, peel-and-stick, or sew-on." },
                { Icon: Award, title: "Multi-Point Human QC", text: "Every single patch is physically checked by our quality control leads before packing into protective cases." },
                { Icon: Zap, title: "Rush Turnaround Ready", text: "Need emergency event stock or rapid samples? Same-day proofs and expedited 5-day manufacturing available." },
                { Icon: Star, title: "Complimentary Setup & Proof", text: "No hidden die costs, setup fees, or digitization charges. What you see on your tailored quote is final." },
              ].map(({ Icon, title, text }) => (
                <div
                  data-reveal
                  key={title}
                  className="rounded-2xl border border-[#E8E6E0] bg-white p-7 shadow-sm transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/5 text-primary mb-5">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1A1A1A]">{title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#666] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── 7. FAQ ACCORDION FOR THIS PATCH TYPE ─────────────────────────────── */}
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-white border-b border-[#E8E6E0]">
          <div className="mx-auto max-w-4xl px-5">
            <div data-reveal className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-primary">COMMON INQUIRIES</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Frequently Asked About {collection.name}
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: `What is the minimum order quantity for custom ${collection.name.toLowerCase()}?`,
                  a: `We support both boutique pilot batches and large commercial runs. Minimums start at just 10–25 pieces depending on custom mold complexity, with significant volume discounts at 100, 250, 500, and 1,000+ units.`,
                },
                {
                  q: `Will I see a proof before full production commences?`,
                  a: `Always. We provide a full digital simulation showing real-scale dimensions, Pantone thread or leather hide colors, and border textures within 24 hours. Production only begins upon your 100% written sign-off.`,
                },
                {
                  q: `What file format should I upload for my artwork?`,
                  a: `We accept vector AI, EPS, PDF, SVG, and high-resolution PNG or JPG. If you only have a rough sketch or photo of an old physical patch, our vector redraw artists will recreate it into press-ready artwork for free.`,
                },
                {
                  q: `Which backing is recommended for my garment?`,
                  a: `For commercial hats and heavy denim, sew-on channels or high-temp heat-seal adhesive work best. For tactical vests and military uniforms, hook-and-loop Velcro is the standard. For casual cotton tees or bags, iron-on provides instant bond.`,
                },
              ].map(({ q, a }) => (
                <div data-reveal key={q} className="rounded-2xl border border-[#E8E6E0] bg-[#FAFAF7] p-6 sm:p-8">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#1A1A1A]">{q}</h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#666]">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── 8. TONELLI-INSPIRED LUXURY EDITORIAL CALLOUT (Replacing red block) ── */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24">
        <div className="relative mx-auto max-w-6xl px-5 text-center">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0B1626] via-[#14263D] to-[#0B1626] p-8 text-white shadow-2xl sm:p-12 md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-[#C94343]/15 blur-[120px]"
            />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                <Sparkles className="size-3.5 text-[#C94343]" /> Start Your Custom Order
              </span>

              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
                Ready to craft your custom <br className="hidden sm:inline" />
                {patchTypeName.toLowerCase()} patches with master precision?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Upload your artwork or idea today. Our senior digitizers and craft directors will prepare your tailored specification sheet and complimentary digital proof within 24 hours.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#C94343]/30 transition-all hover:scale-105 hover:bg-[#b03535] hover:shadow-2xl"
                >
                  <span>Request Free Proof & Quote</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/15"
                >
                  <span>Talk to Patch Specialist</span>
                </Link>
              </div>

              {/* Direct hotline */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-xs text-slate-300/80">
                <a href={`tel:${phone.replace(/\D/g, "")}`} className="group flex items-center gap-2 transition-colors hover:text-white">
                  <Phone className="size-3.5 text-[#C94343] transition-transform group-hover:scale-110" />
                  <span>{phone}</span>
                </a>
                <span className="hidden text-white/20 sm:inline">•</span>
                <a href={`mailto:${email}`} className="group flex items-center gap-2 transition-colors hover:text-white">
                  <Mail className="size-3.5 text-[#C94343] transition-transform group-hover:scale-110" />
                  <span>{email}</span>
                </a>
                <span className="hidden text-white/20 sm:inline">•</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <Clock className="size-3.5 text-[#C94343]" />
                  <span>24/6 Active Production Studio</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
