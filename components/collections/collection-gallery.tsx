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
// Strict Rule: Every embroidery design is used exactly once across the whole site
const GALLERY_BY_SLUG: Record<string, GalleryItem[]> = {
  "embroidered-patches": [
    { id: "emb-1", title: "Eagle Tactical Squadron Patch", image: "/images/embroidery/1b2d76db-5a99-496b-b5af-f035d43d78b0.webp", tag: "Emergency & Tactical" },
    { id: "emb-2", title: "Heritage Shield Embroidered Emblem", image: "/images/embroidery/23f96426-782a-448f-ad52-fe47d76ea937.webp", tag: "Corporate & Crest" },
    { id: "emb-3", title: "Precision Merrowed Border Insignia", image: "/images/embroidery/280450bd-82a6-4501-a69f-31b5614d12c2.webp", tag: "Corporate & Crest" },
    { id: "emb-4", title: "Special Operations Unit Patch", image: "/images/embroidery/280450bd-82a6-4501-a69f-31b5614d12c2 (1).webp", tag: "Emergency & Tactical" },
    { id: "emb-5", title: "High-Density Varsity Sports Patch", image: "/images/embroidery/2cc23cde-3bb0-4f4e-96e7-c5205cb48ad3.webp", tag: "Sports & Uniform" },
    { id: "emb-6", title: "Fire & Rescue Department Emblem", image: "/images/embroidery/3185e84c-5626-4f73-b33a-6f649d68381d.webp", tag: "Emergency & Tactical" },
    { id: "emb-7", title: "Outdoor Exploration Trail Crest", image: "/images/embroidery/3a3d6a15-0258-4549-ac88-559efb0be921.webp", tag: "Sports & Uniform" },
    { id: "emb-8", title: "Tactical Division Morale Patch", image: "/images/embroidery/3ad67c63-499a-4dfd-ac24-b3935cdb7587.webp", tag: "Emergency & Tactical" },
    { id: "emb-9", title: "Heavy Equipment Service Badge", image: "/images/embroidery/46f71347-f08d-4623-b3e9-8129d8ff7352.webp", tag: "Industrial" },
    { id: "emb-10", title: "Maritime Navigation Stitched Crest", image: "/images/embroidery/4cfdb08c-a055-4190-a267-f0248eccdd43.webp", tag: "Corporate & Crest" },
    { id: "emb-11", title: "Aviation Squadron Flight Badge", image: "/images/embroidery/4e108980-36ae-4367-a2fc-5b7ffcbce5cf.webp", tag: "Emergency & Tactical" },
    { id: "emb-12", title: "Custom Law Enforcement Shield", image: "/images/embroidery/5769a4c6-344b-4d04-b6a7-1d7e7db1090d.webp", tag: "Emergency & Tactical" },
  ],

  "chenille-patches": [
    { id: "ch-1", title: "Varsity Athletic Letter 'B' Patch", image: "/images/Chennile WebP/37612dd6-9e4f-40a9-b1d8-f6fe661351c7.webp", tag: "Letterman & Jacket" },
    { id: "ch-2", title: "Championship Golden Eagle Mascot", image: "/images/Chennile WebP/534aa9a0-5f7f-4a78-b27e-360df8c03136.webp", tag: "School Spirit" },
    { id: "ch-3", title: "Vintage Campus Number Crest", image: "/images/Chennile WebP/53d2f848-5ff7-4e64-9393-d42b165ca529.webp", tag: "Varsity Number" },
    { id: "ch-4", title: "Retro Tigers Chenille Emblem", image: "/images/Chennile WebP/96d5e7ab-e879-4698-bc3e-02a1bc5fb6aa.webp", tag: "Sports Mascot" },
    { id: "ch-5", title: "Varsity State Champions Patch", image: "/images/Chennile WebP/a499bc84-5edb-4125-9003-03ec6d84a6bd.webp", tag: "Championship" },
    { id: "ch-6", title: "Collegiate Monogram Felt Chenille", image: "/images/Chennile WebP/b2c4ee1c-1e2d-4b85-9603-7abb1febb747.webp", tag: "Apparel Drop" },
    { id: "ch-7", title: "Retro Cheer & Dance Script", image: "/images/Chennile WebP/cfbd2b62-7a1b-4488-86eb-8957b05f83ba.webp", tag: "Dance & Club" },
    { id: "ch-8", title: "High-Density Felt Chenille Shield", image: "/images/Chennile WebP/e6bccd47-4ef4-43dc-8a52-45cce1076f13.webp", tag: "Varsity Crest" },
    { id: "ch-9", title: "Streetwear Fuzzy Chenille Art", image: "/images/Chennile WebP/e905ec0e-bed8-4e46-83ee-f7c98d4f3303.webp", tag: "Streetwear" },
    { id: "ch-10", title: "Gold Star Chenille Award", image: "/images/Chennile WebP/f9d39477-cbdc-4c6a-a94a-389060580a98.webp", tag: "Achievement" },
  ],

  "pvc-patches": [
    { id: "pvc-1", title: "Tactical Division Morale Patch", image: "/images/PVC WebP/0593e5cd-dc2a-4e46-bb61-e5def04a98ab.webp", tag: "Tactical Morale" },
    { id: "pvc-2", title: "Search & Rescue High-Vis 3D PVC", image: "/images/PVC WebP/105f6253-e172-4ca6-a390-19a0ff9ec46a.webp", tag: "Emergency Unit" },
    { id: "pvc-3", title: "Outdoor Expedition All-Weather Patch", image: "/images/PVC WebP/24778966-adb2-4b70-870f-52984729189b.webp", tag: "Weatherproof" },
    { id: "pvc-4", title: "Special Recon Flight Crest", image: "/images/PVC WebP/2ec98f36-c03d-4f91-9d05-ad95c4ec5d36.webp", tag: "Air Squadron" },
    { id: "pvc-5", title: "K9 Unit Molded Tactical Emblem", image: "/images/PVC WebP/308c1aea-e284-4c78-b934-1501d16f6228.webp", tag: "K9 Division" },
    { id: "pvc-6", title: "Law Enforcement Shield 3D PVC", image: "/images/PVC WebP/31958f6f-da74-40cc-8dc2-a72c2c441f8f.webp", tag: "Law Enforcement" },
    { id: "pvc-7", title: "Mountain Rescue Unit PVC", image: "/images/PVC WebP/4ba533b0-1b52-4f56-b5ce-847ebf27e979.webp", tag: "Rescue & Alpine" },
    { id: "pvc-8", title: "Security Force Hook-and-Loop Patch", image: "/images/PVC WebP/559c2b0f-18aa-484d-aff8-b8c0e2204021.webp", tag: "Security" },
    { id: "pvc-9", title: "Special Task Force Commemorative", image: "/images/PVC WebP/5a44cdf3-6f73-4780-9ed1-321413614d7d.webp", tag: "Task Force" },
    { id: "pvc-10", title: "Firefighter Maltese Cross PVC", image: "/images/PVC WebP/5e79adad-8564-4d7d-b21a-08e58fd722c9.webp", tag: "Fire & Rescue" },
    { id: "pvc-11", title: "Military Veteran Service Shield", image: "/images/PVC WebP/7ddafb18-3db6-4f7e-bc3a-b108f3a34841.webp", tag: "Veteran Service" },
    { id: "pvc-12", title: "Wilderness Ranger Rubber Crest", image: "/images/PVC WebP/8af9f2ae-f8d7-4939-92b6-8f87e0f87ff4.webp", tag: "Park Ranger" },
  ],

  "leather-patches": [
    { id: "lea-1", title: "Dirty Baron Motorcycle Club Deboss", image: "/images/Leather WebP/11dc7b26-571a-4c9c-98fb-4d7b1f27979a.webp", tag: "Biker Club" },
    { id: "lea-2", title: "Rawhide Trucker Hat Emblem", image: "/images/Leather WebP/299d8a05-a46b-4b75-b618-277f67044e1e.webp", tag: "Trucker Cap" },
    { id: "lea-3", title: "Craft Brewery Leather Roundel", image: "/images/Leather WebP/64a46fe2-61a2-4b76-9df3-81988759d6c6.webp", tag: "Craft Brand" },
    { id: "lea-4", title: "Heritage Outfitters Laser Burnished", image: "/images/Leather WebP/68525281-80dd-4b27-8c40-dd32d378d39d.webp", tag: "Apparel Brand" },
    { id: "lea-5", title: "Vintage Distressed Crazy Horse Patch", image: "/images/Leather WebP/7fcdd1d7-d9d9-4fac-a340-dbd80f857178.webp", tag: "Denim & Workwear" },
    { id: "lea-6", title: "Artisan Leather Goods Tag", image: "/images/Leather WebP/a425a704-b068-43a4-8350-c5cd06c52708.webp", tag: "Merchandise" },
    { id: "lea-7", title: "Mountain Lodge Debossed Crest", image: "/images/Leather WebP/c906d802-38ce-4f02-8acc-4be6f3c2ee5f.webp", tag: "Resort & Travel" },
    { id: "lea-8", title: "Distressed Suede Leather Patch", image: "/images/Leather WebP/f3edb031-4207-47d0-af66-785fe860ebce.webp", tag: "Outerwear" },
  ],

  "woven-patches": [
    { id: "wov-1", title: "Apex Explorations High-Density Damask Crest", image: "/images/collections/woven-patch.webp", tag: "Fine Woven" },
    { id: "wov-2", title: "Micro-Thread Technical Brand Label", image: "/images/collections/woven-patch.webp", tag: "High-Resolution" },
    { id: "wov-3", title: "Outdoor Expedition Merrowed Woven", image: "/images/collections/woven-patch.webp", tag: "Fine Lettering" },
    { id: "wov-4", title: "Heritage Leadership Gold Crest", image: "/images/collections/woven-patch.webp", tag: "Crest Badge" },
  ],

  "silicone-patches": [
    { id: "sil-1", title: "Explore Wilderness Adventure Co 3D Silicone", image: "/images/collections/silicone-patch.webp", tag: "Soft Touch 3D" },
    { id: "sil-2", title: "3D Molded Matte Finish Mountain Badge", image: "/images/collections/silicone-patch.webp", tag: "Headwear" },
    { id: "sil-3", title: "Athletic Performance Silicone Brand", image: "/images/collections/silicone-patch.webp", tag: "Sportswear" },
    { id: "sil-4", title: "Waterproof Lifestyle Gear Badge", image: "/images/collections/silicone-patch.webp", tag: "All-Weather" },
  ],

  "sublimated-patches": [
    { id: "sub-1", title: "World Fidelity Space Shuttle Full-Color", image: "/images/collections/sublimation-patch.webp", tag: "Photographic" },
    { id: "sub-2", title: "Full-Gradient Space Odyssey Patch", image: "/images/collections/sublimation-patch.webp", tag: "Gradient Art" },
    { id: "sub-3", title: "Edge-to-Edge Printed Sublimated Badge", image: "/images/collections/sublimation-patch.webp", tag: "Full Color" },
    { id: "sub-4", title: "Photographic Corporate Retreat Emblem", image: "/images/collections/sublimation-patch.webp", tag: "Photo Realistic" },
  ],

  "iron-on-patches": [
    { id: "irn-1", title: "Wilderness Trail Wolf Merrowed Iron-On", image: "/images/collections/iron-on-patch.webp", tag: "Heat Seal" },
    { id: "irn-2", title: "Outdoor Exploration Mountain Crest", image: "/images/collections/iron-on-patch.webp", tag: "Heavy Duty" },
    { id: "irn-3", title: "Industrial Quick-Apply Heat Press Patch", image: "/images/collections/iron-on-patch.webp", tag: "Apparel Ready" },
    { id: "irn-4", title: "Pine Forest Night Sky Embroidered Emblem", image: "/images/collections/iron-on-patch.webp", tag: "Team Jersey" },
  ],

  "enamel-pins": [
    { id: "pin-1", title: "Royal Lion Crest Gold Lapel Pin", image: "/images/collections/enamel-pin.webp", tag: "Hard Enamel" },
    { id: "pin-2", title: "Virtute et Honore Polished Badge", image: "/images/collections/enamel-pin.webp", tag: "Gold Plated" },
    { id: "pin-3", title: "Corporate Milestone Recognition Pin", image: "/images/collections/enamel-pin.webp", tag: "Die Struck" },
    { id: "pin-4", title: "Heritage Crown Emblem Pin", image: "/images/collections/enamel-pin.webp", tag: "Soft Enamel" },
  ],

  "embroidery-keychains": [
    { id: "key-1", title: "Remove Before Flight Red Merrowed Tag", image: "/images/collections/embroidery-keychain.webp", tag: "Double-Sided" },
    { id: "key-2", title: "Aviation Squadron Steel Ring Key Fob", image: "/images/collections/embroidery-keychain.webp", tag: "Flight Tag" },
    { id: "key-3", title: "Motorsport Club Merrowed Flight Tag", image: "/images/collections/embroidery-keychain.webp", tag: "Heavy Eyelet" },
    { id: "key-4", title: "Custom Heavy-Duty Merrowed Tag", image: "/images/collections/embroidery-keychain.webp", tag: "Key Fob" },
  ],

  "sequin-patches": [
    { id: "seq-1", title: "Glittering Reversible Sequin Star Emblem", image: "/images/collections/sequin-patch.webp", tag: "Reversible Sequin" },
    { id: "seq-2", title: "Metallic Gold & Crimson Heart Star", image: "/images/collections/sequin-patch.webp", tag: "Fashion Shimmer" },
    { id: "seq-3", title: "Sparkling Dancewear Costume Emblem", image: "/images/collections/sequin-patch.webp", tag: "Dancewear" },
    { id: "seq-4", title: "Reflective Flip Sequin Apparel Patch", image: "/images/collections/sequin-patch.webp", tag: "High Shimmer" },
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
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E8E6E0] bg-white shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              {/* Image Container with seamless neutral background and centered padding */}
              <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-slate-50/80 to-slate-100/40 p-5 sm:p-7 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-110 drop-shadow-[0_12px_20px_rgba(20,38,61,0.16)] select-none"
                />
                {/* Zoom overlay badge */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                  <div className="size-10 rounded-full bg-white/90 text-foreground shadow-lg flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn className="size-5 text-primary" />
                  </div>
                </div>
                {/* Tag Badge */}
                <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold text-white tracking-wide shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Title and Details */}
              <div className="p-3.5 sm:p-4 border-t border-[#F0EFEA] bg-[#FAFAF7] flex-1 flex flex-col justify-between">
                <h3 className="font-semibold text-xs sm:text-sm text-[#1A1A1A] line-clamp-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-medium text-primary">View specimen</span>
                  <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105"
          >
            Request Custom Proof with Your Artwork
            <ArrowUpRight className="size-4" />
          </Link>
          <p className="mt-2.5 text-xs text-muted-foreground">
            Free digital proof included. Zero die costs or setup fees.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            {/* High-res Image Showcase */}
            <div className="relative aspect-square sm:aspect-[4/3] w-full bg-gradient-to-b from-slate-50 to-slate-100 p-8 sm:p-14 flex items-center justify-center">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain p-4 drop-shadow-[0_20px_35px_rgba(20,38,61,0.2)]"
                priority
              />
            </div>

            {/* Specimen Caption Details */}
            <div className="p-6 bg-[#FAF8F5] border-t border-[#E8E6E0] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {lightboxItem.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mt-0.5">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Transparent contour cutout • Production specimen
                </p>
              </div>
              <Link
                href="/quote"
                className="rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-all"
              >
                Quote This Style
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
