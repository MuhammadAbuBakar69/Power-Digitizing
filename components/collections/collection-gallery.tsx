"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ZoomIn, X, Sparkles, ArrowUpRight } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  tag: string;
}

// 12 curated designs for each patch type on pure white studio background
const GALLERY_BY_SLUG: Record<string, GalleryItem[]> = {
  "embroidered-patches": [
    { id: "emb-1", title: "Big Rig Trucking Custom Patch", image: "/images/embroidery/embroidered-big-rig-patch.webp", tag: "Automotive" },
    { id: "emb-2", title: "Solar Construction Industrial Patch", image: "/images/embroidery/solar-construction-embroidered-patch.webp", tag: "Industrial" },
    { id: "emb-3", title: "Maryland Emergency Response System Crest", image: "/images/embroidery/180ac20d-921e-4432-aee7-0ebb724068d7.webp", tag: "Emergency & Tactical" },
    { id: "emb-4", title: "Eagle Tactical Squadron Patch", image: "/images/embroidery/1b2d76db-5a99-496b-b5af-f035d43d78b0.webp", tag: "Emergency & Tactical" },
    { id: "emb-5", title: "Heritage Shield Embroidered Emblem", image: "/images/embroidery/23f96426-782a-448f-ad52-fe47d76ea937.webp", tag: "Corporate & Crest" },
    { id: "emb-6", title: "Precision Merrowed Border Insignia", image: "/images/embroidery/280450bd-82a6-4501-a69f-31b5614d12c2.webp", tag: "Corporate & Crest" },
    { id: "emb-7", title: "Special Operations Unit Patch", image: "/images/embroidery/280450bd-82a6-4501-a69f-31b5614d12c2-1.webp", tag: "Emergency & Tactical" },
    { id: "emb-8", title: "High-Density Varsity Sports Patch", image: "/images/embroidery/2cc23cde-3bb0-4f4e-96e7-c5205cb48ad3.webp", tag: "Sports & Uniform" },
    { id: "emb-9", title: "Fire & Rescue Department Emblem", image: "/images/embroidery/3185e84c-5626-4f73-b33a-6f649d68381d.webp", tag: "Emergency & Tactical" },
    { id: "emb-10", title: "Outdoor Exploration Trail Crest", image: "/images/embroidery/3a3d6a15-0258-4549-ac88-559efb0be921.webp", tag: "Sports & Uniform" },
    { id: "emb-11", title: "Tactical Division Morale Patch", image: "/images/embroidery/3ad67c63-499a-4dfd-ac24-b3935cdb7587.webp", tag: "Emergency & Tactical" },
    { id: "emb-12", title: "Heavy Equipment Service Badge", image: "/images/embroidery/46f71347-f08d-4623-b3e9-8129d8ff7352.webp", tag: "Industrial" },
  ],

  "chenille-patches": [
    { id: "ch-1", title: "Varsity Athletic Letter 'B' Patch", image: "/images/american-patches/chenille-cutout.png", tag: "Letterman & Jacket" },
    { id: "ch-2", title: "Championship Golden Eagle Mascot", image: "/images/american-patches/chenille-white.png", tag: "School Spirit" },
    { id: "ch-3", title: "Vintage Campus Number Crest", image: "/images/american-patches/chenille-cutout.png", tag: "Varsity Number" },
    { id: "ch-4", title: "Retro Tigers Chenille Emblem", image: "/images/american-patches/chenille-white.png", tag: "Sports Mascot" },
    { id: "ch-5", title: "Varsity State Champions Patch", image: "/images/american-patches/chenille-cutout.png", tag: "Championship" },
    { id: "ch-6", title: "Collegiate Monogram Felt Chenille", image: "/images/american-patches/chenille-white.png", tag: "Apparel Drop" },
    { id: "ch-7", title: "Retro Cheer & Dance Script", image: "/images/american-patches/chenille-cutout.png", tag: "Dance & Club" },
    { id: "ch-8", title: "High-Density Felt Chenille Shield", image: "/images/american-patches/chenille-white.png", tag: "Varsity Crest" },
    { id: "ch-9", title: "Streetwear Fuzzy Chenille Art", image: "/images/american-patches/chenille-cutout.png", tag: "Streetwear" },
    { id: "ch-10", title: "Gold Star Chenille Award", image: "/images/american-patches/chenille-white.png", tag: "Achievement" },
    { id: "ch-11", title: "Varsity Baseball Crossed Bats", image: "/images/american-patches/chenille-cutout.png", tag: "Baseball Club" },
    { id: "ch-12", title: "Varsity Football Helmet Emblem", image: "/images/american-patches/chenille-white.png", tag: "Football Varsity" },
  ],

  "pvc-patches": [
    { id: "pvc-1", title: "Tactical Division Morale Patch", image: "/images/american-patches/pvc-white.png", tag: "Tactical Morale" },
    { id: "pvc-2", title: "Search & Rescue High-Vis Badge", image: "/images/embroidery/180ac20d-921e-4432-aee7-0ebb724068d7.webp", tag: "Emergency Unit" },
    { id: "pvc-3", title: "Outdoor Expedition All-Weather Patch", image: "/images/american-patches/pvc-white.png", tag: "Weatherproof" },
    { id: "pvc-4", title: "Special Recon Flight Crest", image: "/images/embroidery/4e108980-36ae-4367-a2fc-5b7ffcbce5cf.webp", tag: "Air Squadron" },
    { id: "pvc-5", title: "K9 Unit Molded Tactical Emblem", image: "/images/embroidery/96b75709-c2d7-4b88-a1e5-010d0cf07629.webp", tag: "K9 Division" },
    { id: "pvc-6", title: "Law Enforcement Shield 3D PVC", image: "/images/embroidery/5769a4c6-344b-4d04-b6a7-1d7e7db1090d.webp", tag: "Law Enforcement" },
    { id: "pvc-7", title: "Mountain Rescue Unit PVC", image: "/images/american-patches/pvc-white.png", tag: "Rescue & Alpine" },
    { id: "pvc-8", title: "Security Force Hook-and-Loop Patch", image: "/images/embroidery/7571cad3-6834-4ded-a431-3cacb7fab0ff.webp", tag: "Security" },
    { id: "pvc-9", title: "Special Task Force Commemorative", image: "/images/embroidery/e008e4d0-5df0-4cd9-94e5-617fae9b1c62.webp", tag: "Task Force" },
    { id: "pvc-10", title: "Firefighter Maltese Cross PVC", image: "/images/embroidery/3185e84c-5626-4f73-b33a-6f649d68381d.webp", tag: "Fire & Rescue" },
    { id: "pvc-11", title: "Military Veteran Service Shield", image: "/images/embroidery/90746538-274a-42c2-99ff-14a7ff42f2c2.webp", tag: "Veteran Service" },
    { id: "pvc-12", title: "Wilderness Ranger Rubber Crest", image: "/images/embroidery/a85949b1-3786-4718-9d46-a22862bc0357.webp", tag: "Park Ranger" },
  ],

  "leather-patches": [
    { id: "lea-1", title: "Dirty Baron Motorcycle Club Deboss", image: "/images/american-patches/leather-cutout.png", tag: "Biker Club" },
    { id: "lea-2", title: "Rawhide Trucker Hat Emblem", image: "/images/american-patches/leather-white.png", tag: "Trucker Cap" },
    { id: "lea-3", title: "Craft Brewery Leather Roundel", image: "/images/american-patches/leather-cutout.png", tag: "Craft Brand" },
    { id: "lea-4", title: "Heritage Outfitters Laser Burnished", image: "/images/american-patches/leather-white.png", tag: "Apparel Brand" },
    { id: "lea-5", title: "Vintage Distressed Crazy Horse Patch", image: "/images/american-patches/leather-cutout.png", tag: "Denim & Workwear" },
    { id: "lea-6", title: "Artisan Leather Goods Tag", image: "/images/american-patches/leather-white.png", tag: "Merchandise" },
    { id: "lea-7", title: "Mountain Lodge Debossed Crest", image: "/images/american-patches/leather-cutout.png", tag: "Resort & Travel" },
    { id: "lea-8", title: "Distressed Suede Leather Patch", image: "/images/american-patches/leather-white.png", tag: "Outerwear" },
    { id: "lea-9", title: "Workwear Heavy Cattle Hide Emblem", image: "/images/american-patches/leather-cutout.png", tag: "Industrial" },
    { id: "lea-10", title: "Custom Coffee Roasters Leather Badge", image: "/images/american-patches/leather-white.png", tag: "Hospitality" },
    { id: "lea-11", title: "Leather Hat Patch with Stitched Border", image: "/images/american-patches/leather-cutout.png", tag: "Headwear" },
    { id: "lea-12", title: "Geometric Monogram Leather Shield", image: "/images/american-patches/leather-white.png", tag: "Minimalist" },
  ],

  "woven-patches": [
    { id: "wov-1", title: "St Leger Iron Horse Rally High-Definition", image: "/images/american-patches/woven-white.png", tag: "Rally & Club" },
    { id: "wov-2", title: "Micro-Thread Technical Brand Label", image: "/images/embroidery/9ce655b6-dd90-4541-8bcb-88e317fdd98c.webp", tag: "High-Resolution" },
    { id: "wov-3", title: "Outdoor Expedition Merrowed Woven", image: "/images/american-patches/woven-white.png", tag: "Fine Lettering" },
    { id: "wov-4", title: "Maritime Yacht Club Woven Crest", image: "/images/embroidery/4cfdb08c-a055-4190-a267-f0248eccdd43.webp", tag: "Yacht Club" },
    { id: "wov-5", title: "Corporate Staff Uniform Micro-Detail", image: "/images/embroidery/ac096be9-f997-4f9f-b7d9-cf3e72912cd0.webp", tag: "Staff Uniform" },
    { id: "wov-6", title: "Boutique Fashion Hem Label", image: "/images/american-patches/woven-white.png", tag: "Fashion Brand" },
    { id: "wov-7", title: "High-Density Small Font Insignia", image: "/images/embroidery/7a87b989-229d-45f3-8809-f67fe3e29ff7.webp", tag: "Small Text" },
    { id: "wov-8", title: "Motorsport Team Sponsors Woven", image: "/images/american-patches/woven-white.png", tag: "Motorsports" },
    { id: "wov-9", title: "Craft Brewery Fine Detail Badge", image: "/images/embroidery/9574b008-d2d2-4695-9b6d-366fb9cc82bf.webp", tag: "Micro Detail" },
    { id: "wov-10", title: "Ultra-Thin Heat-Cut Woven Badge", image: "/images/american-patches/woven-white.png", tag: "Heat-Cut Border" },
    { id: "wov-11", title: "Precision Heritage Shield Woven", image: "/images/embroidery/280450bd-82a6-4501-a69f-31b5614d12c2.webp", tag: "Merrowed Edge" },
    { id: "wov-12", title: "Alpine Hiking Club Fine Woven", image: "/images/american-patches/woven-white.png", tag: "Outdoor Club" },
  ],

  "silicone-patches": [
    { id: "sil-1", title: "The American Patches Soft-Touch Emblem", image: "/images/american-patches/silicone.png", tag: "Soft Touch" },
    { id: "sil-2", title: "3D Molded Matte Finish Hat Patch", image: "/images/american-patches/silicone.png", tag: "Headwear" },
    { id: "sil-3", title: "Athletic Performance Silicone Brand", image: "/images/american-patches/silicone.png", tag: "Sportswear" },
    { id: "sil-4", title: "Waterproof Lifestyle Gear Badge", image: "/images/american-patches/silicone.png", tag: "All-Weather" },
    { id: "sil-5", title: "High-Elasticity Silicone Chest Logo", image: "/images/american-patches/silicone.png", tag: "Flex Fit" },
    { id: "sil-6", title: "Glow-in-the-Dark Silicone Patch", image: "/images/american-patches/silicone.png", tag: "Special Effect" },
    { id: "sil-7", title: "Contemporary Streetwear Silicone Tag", image: "/images/american-patches/silicone.png", tag: "Streetwear" },
    { id: "sil-8", title: "Tactical Matte Blackout Silicone", image: "/images/american-patches/silicone.png", tag: "Blackout Edition" },
    { id: "sil-9", title: "Velcro-Ready Outerwear Silicone Crest", image: "/images/american-patches/silicone.png", tag: "Hook & Loop" },
    { id: "sil-10", title: "Micro-Textured Silicone Apparel Label", image: "/images/american-patches/silicone.png", tag: "Micro Texture" },
    { id: "sil-11", title: "Vibrant Multi-Color Silicone Badge", image: "/images/american-patches/silicone.png", tag: "Color Matched" },
    { id: "sil-12", title: "Modern Minimalist Hat Crown Silicone", image: "/images/american-patches/silicone.png", tag: "Custom Molded" },
  ],

  "sublimated-patches": [
    { id: "sub-1", title: "World Fidelity Space Shuttle Full-Color", image: "/images/american-patches/sublimated-cutout.png", tag: "Photographic" },
    { id: "sub-2", title: "Full-Gradient Sunset Horizon Patch", image: "/images/american-patches/sublimated-cutout.png", tag: "Gradient Art" },
    { id: "sub-3", title: "Photographic Wildlife Mountain Scene", image: "/images/american-patches/sublimated-cutout.png", tag: "Photo Realistic" },
    { id: "sub-4", title: "Detailed Digital Painting Patch", image: "/images/american-patches/sublimated-cutout.png", tag: "Digital Art" },
    { id: "sub-5", title: "Festival Watercolor Art Emblem", image: "/images/american-patches/sublimated-cutout.png", tag: "Watercolor" },
    { id: "sub-6", title: "Edge-to-Edge Printed Merrowed Badge", image: "/images/american-patches/sublimated-cutout.png", tag: "Merrowed Border" },
    { id: "sub-7", title: "Complex Brand Logo with Micro-Drop Shadows", image: "/images/american-patches/sublimated-cutout.png", tag: "Drop Shadows" },
    { id: "sub-8", title: "Sci-Fi Cosmic Planet Expedition", image: "/images/american-patches/sublimated-cutout.png", tag: "Sci-Fi Illustration" },
    { id: "sub-9", title: "Retro 80s Synthwave Gradient Patch", image: "/images/american-patches/sublimated-cutout.png", tag: "Vibrant Color" },
    { id: "sub-10", title: "Motorcycle Art Portrait Sublimated", image: "/images/american-patches/sublimated-cutout.png", tag: "Portrait" },
    { id: "sub-11", title: "National Park Vista Commemorative", image: "/images/american-patches/sublimated-cutout.png", tag: "Landscape" },
    { id: "sub-12", title: "High-DPI Printed Tactical Morale", image: "/images/american-patches/sublimated-cutout.png", tag: "High-DPI" },
  ],

  "iron-on-patches": [
    { id: "irn-1", title: "Villa Regia Airshow Heat-Seal Embroidered", image: "/images/american-patches/iron-on-white.png", tag: "Heat Seal" },
    { id: "irn-2", title: "Commercial Big Rig Heat-Bonded", image: "/images/embroidery/embroidered-big-rig-patch.webp", tag: "Heavy Duty" },
    { id: "irn-3", title: "Solar Industrial Quick-Apply Patch", image: "/images/embroidery/solar-construction-embroidered-patch.webp", tag: "Apparel Ready" },
    { id: "irn-4", title: "Varsity Sports Heat-Press Emblem", image: "/images/embroidery/2cc23cde-3bb0-4f4e-96e7-c5205cb48ad3.webp", tag: "Team Jersey" },
    { id: "irn-5", title: "Outdoor Trail Iron-On Crest", image: "/images/embroidery/3a3d6a15-0258-4549-ac88-559efb0be921.webp", tag: "Backpack & Hat" },
    { id: "irn-6", title: "Air Squadron Aviation Iron-On", image: "/images/american-patches/iron-on-white.png", tag: "Aviation" },
    { id: "irn-7", title: "Racing Motorsports Heat-Seal Badge", image: "/images/embroidery/6066659c-0239-443c-9bec-0d7f60df92ce.webp", tag: "Motorsports" },
    { id: "irn-8", title: "Fleet Service Technician Iron-On", image: "/images/embroidery/7358a70d-cbdb-4156-ad4a-c182d3dcd5ce.webp", tag: "Workwear" },
    { id: "irn-9", title: "Athletic Gold Shield Heat-Seal", image: "/images/embroidery/73ca64a6-a7d5-4c45-8d66-f4f0acf98d75.webp", tag: "Athletic" },
    { id: "irn-10", title: "Hotrod Garage Custom Iron-On", image: "/images/embroidery/9df7dfeb-61bd-4efb-a34a-cdb3a9789f02.webp", tag: "Custom Auto" },
    { id: "irn-11", title: "Industrial Tech Iron-On Badge", image: "/images/embroidery/e0c27d2f-a9de-4ef7-9035-640601439a5d.webp", tag: "Uniform" },
    { id: "irn-12", title: "Corporate Staff Heat-Press Emblem", image: "/images/american-patches/iron-on-white.png", tag: "Corporate" },
  ],
};

export function CollectionGallery({ slug, collectionName }: { slug: string; collectionName: string }) {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const items = GALLERY_BY_SLUG[slug] || GALLERY_BY_SLUG["embroidered-patches"];

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E8E6E0]">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <Sparkles className="size-3.5" /> Curated Production Gallery
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
            Real Custom {collectionName} Work
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Every design is manufactured to industrial tolerances with 100% white background studio capture. Click any patch to inspect close-up stitch detailing.
          </p>
        </div>

        {/* 12-Item Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group cursor-pointer rounded-2xl border border-[#E8E6E0] bg-white p-3 sm:p-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image on Pure White Background */}
              <div className="relative aspect-square w-full rounded-xl bg-white flex items-center justify-center overflow-hidden p-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
                />

                {/* Subtle Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="size-10 rounded-full bg-white/95 text-foreground grid place-items-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="size-5" />
                  </span>
                </div>

                {/* Category Pill */}
                <span className="absolute bottom-1.5 left-1.5 rounded-md bg-[#FAF8F5] border border-[#E8E6E0] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#555]">
                  {item.tag}
                </span>
              </div>

              {/* Title & Action */}
              <div className="mt-3 pt-2 border-t border-[#F0EFEA] flex items-center justify-between gap-2">
                <p className="text-xs font-semibold text-[#1A1A1A] line-clamp-1">{item.title}</p>
                <ArrowUpRight className="size-3.5 text-primary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 text-center">
          <Link
            href={`/quote?patch_type=${encodeURIComponent(slug)}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-105"
          >
            <span>Quote Your Custom {collectionName}</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            role="dialog"
            aria-modal="true"
            aria-label={lightboxItem.title}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setLightboxItem(null);
            }}
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute right-5 top-5 z-10 grid size-12 place-items-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Close preview"
            >
              <X className="size-5" />
            </button>

            <div className="relative max-w-2xl w-full max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl bg-white border border-[#E8E6E0]">
              {/* Image Preview Area */}
              <div className="relative w-full h-[50vh] sm:h-[60vh] p-6 sm:p-10 flex items-center justify-center bg-white">
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-contain object-center drop-shadow-2xl p-4"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF8F5] border-t border-[#E8E6E0]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">{lightboxItem.tag}</span>
                  <h3 className="mt-0.5 font-display text-lg font-bold text-[#1A1A1A]">{lightboxItem.title}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/quote?style=${encodeURIComponent(lightboxItem.title)}`}
                    className="rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-primary/90 transition-transform hover:scale-105 shadow-md"
                  >
                    Order this design
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CollectionGallery;
