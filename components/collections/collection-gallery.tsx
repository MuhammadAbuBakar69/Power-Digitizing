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
    { id: "ch-1", title: "Varsity Athletic Letter 'B' Patch", image: "/images/american-patches/chenille-cutout.png", tag: "Letterman & Jacket" },
    { id: "ch-2", title: "Championship Golden Eagle Mascot", image: "/images/american-patches/chenille-white.png", tag: "School Spirit" },
    { id: "ch-3", title: "Vintage Campus Number Crest", image: "/images/american-patches/chenille.jpg", tag: "Varsity Number" },
    { id: "ch-4", title: "Retro Tigers Chenille Emblem", image: "/images/american-patches/chenille-cutout.png", tag: "Sports Mascot" },
    { id: "ch-5", title: "Varsity State Champions Patch", image: "/images/american-patches/chenille-white.png", tag: "Championship" },
    { id: "ch-6", title: "Collegiate Monogram Felt Chenille", image: "/images/american-patches/chenille.jpg", tag: "Apparel Drop" },
    { id: "ch-7", title: "Retro Cheer & Dance Script", image: "/images/american-patches/chenille-cutout.png", tag: "Dance & Club" },
    { id: "ch-8", title: "High-Density Felt Chenille Shield", image: "/images/american-patches/chenille-white.png", tag: "Varsity Crest" },
    { id: "ch-9", title: "Streetwear Fuzzy Chenille Art", image: "/images/american-patches/chenille.jpg", tag: "Streetwear" },
    { id: "ch-10", title: "Gold Star Chenille Award", image: "/images/american-patches/chenille-white.png", tag: "Achievement" },
    { id: "ch-11", title: "Varsity Baseball Crossed Bats", image: "/images/american-patches/chenille-cutout.png", tag: "Baseball Club" },
    { id: "ch-12", title: "Varsity Football Helmet Emblem", image: "/images/american-patches/chenille-white.png", tag: "Football Varsity" },
  ],

  "pvc-patches": [
    { id: "pvc-1", title: "Tactical Division Morale Patch", image: "/images/american-patches/pvc-white.png", tag: "Tactical Morale" },
    { id: "pvc-2", title: "Search & Rescue High-Vis 3D PVC", image: "/images/american-patches/pvc.jpg", tag: "Emergency Unit" },
    { id: "pvc-3", title: "Outdoor Expedition All-Weather Patch", image: "/images/company/custom-patches-collection.jpg", tag: "Weatherproof" },
    { id: "pvc-4", title: "Special Recon Flight Crest", image: "/images/american-patches/pvc-white.png", tag: "Air Squadron" },
    { id: "pvc-5", title: "K9 Unit Molded Tactical Emblem", image: "/images/american-patches/pvc.jpg", tag: "K9 Division" },
    { id: "pvc-6", title: "Law Enforcement Shield 3D PVC", image: "/images/american-patches/pvc-white.png", tag: "Law Enforcement" },
    { id: "pvc-7", title: "Mountain Rescue Unit PVC", image: "/images/company/custom-patches-collection.jpg", tag: "Rescue & Alpine" },
    { id: "pvc-8", title: "Security Force Hook-and-Loop Patch", image: "/images/american-patches/pvc-white.png", tag: "Security" },
    { id: "pvc-9", title: "Special Task Force Commemorative", image: "/images/american-patches/pvc.jpg", tag: "Task Force" },
    { id: "pvc-10", title: "Firefighter Maltese Cross PVC", image: "/images/american-patches/pvc-white.png", tag: "Fire & Rescue" },
    { id: "pvc-11", title: "Military Veteran Service Shield", image: "/images/company/3d-puff-cap.jpg", tag: "Veteran Service" },
    { id: "pvc-12", title: "Wilderness Ranger Rubber Crest", image: "/images/american-patches/pvc-white.png", tag: "Park Ranger" },
  ],

  "leather-patches": [
    { id: "lea-1", title: "Dirty Baron Motorcycle Club Deboss", image: "/images/american-patches/leather-cutout.png", tag: "Biker Club" },
    { id: "lea-2", title: "Rawhide Trucker Hat Emblem", image: "/images/american-patches/leather-white.png", tag: "Trucker Cap" },
    { id: "lea-3", title: "Craft Brewery Leather Roundel", image: "/images/american-patches/leather.jpg", tag: "Craft Brand" },
    { id: "lea-4", title: "Heritage Outfitters Laser Burnished", image: "/images/american-patches/leather-white.png", tag: "Apparel Brand" },
    { id: "lea-5", title: "Vintage Distressed Crazy Horse Patch", image: "/images/american-patches/leather-cutout.png", tag: "Denim & Workwear" },
    { id: "lea-6", title: "Artisan Leather Goods Tag", image: "/images/american-patches/leather.jpg", tag: "Merchandise" },
    { id: "lea-7", title: "Mountain Lodge Debossed Crest", image: "/images/american-patches/leather-cutout.png", tag: "Resort & Travel" },
    { id: "lea-8", title: "Distressed Suede Leather Patch", image: "/images/american-patches/leather-white.png", tag: "Outerwear" },
    { id: "lea-9", title: "Workwear Heavy Cattle Hide Emblem", image: "/images/american-patches/leather.jpg", tag: "Industrial" },
    { id: "lea-10", title: "Custom Coffee Roasters Leather Badge", image: "/images/american-patches/leather-white.png", tag: "Hospitality" },
    { id: "lea-11", title: "Leather Hat Patch with Stitched Border", image: "/images/american-patches/leather-cutout.png", tag: "Headwear" },
    { id: "lea-12", title: "Geometric Monogram Leather Shield", image: "/images/american-patches/leather-white.png", tag: "Minimalist" },
  ],

  "woven-patches": [
    { id: "wov-1", title: "St Leger Iron Horse Rally High-Definition", image: "/images/american-patches/woven-white.png", tag: "Rally & Club" },
    { id: "wov-2", title: "Micro-Thread Technical Brand Label", image: "/images/american-patches/woven.jpg", tag: "High-Resolution" },
    { id: "wov-3", title: "Outdoor Expedition Merrowed Woven", image: "/images/american-patches/woven-white.png", tag: "Fine Lettering" },
    { id: "wov-4", title: "Maritime Yacht Club Woven Crest", image: "/images/company/custom-patches-collection.jpg", tag: "Yacht Club" },
    { id: "wov-5", title: "Corporate Staff Uniform Micro-Detail", image: "/images/american-patches/woven-white.png", tag: "Staff Uniform" },
    { id: "wov-6", title: "Boutique Fashion Hem Label", image: "/images/american-patches/woven.jpg", tag: "Fashion Brand" },
    { id: "wov-7", title: "High-Density Small Font Insignia", image: "/images/american-patches/woven-white.png", tag: "Small Text" },
    { id: "wov-8", title: "Motorsport Team Sponsors Woven", image: "/images/american-patches/woven.jpg", tag: "Motorsports" },
    { id: "wov-9", title: "Craft Brewery Fine Detail Badge", image: "/images/american-patches/woven-white.png", tag: "Micro Detail" },
    { id: "wov-10", title: "Ultra-Thin Heat-Cut Woven Badge", image: "/images/company/custom-patches-collection.jpg", tag: "Heat-Cut Border" },
    { id: "wov-11", title: "Precision Heritage Shield Woven", image: "/images/american-patches/woven-white.png", tag: "Merrowed Edge" },
    { id: "wov-12", title: "Alpine Hiking Club Fine Woven", image: "/images/american-patches/woven.jpg", tag: "Outdoor Club" },
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
    { id: "sub-2", title: "Full-Gradient Sunset Horizon Patch", image: "/images/american-patches/sublimated.jpg", tag: "Gradient Art" },
    { id: "sub-3", title: "Photographic Wildlife Mountain Scene", image: "/images/american-patches/sublimated-cutout.png", tag: "Photo Realistic" },
    { id: "sub-4", title: "Detailed Digital Painting Patch", image: "/images/american-patches/sublimated.jpg", tag: "Digital Art" },
    { id: "sub-5", title: "Festival Watercolor Art Emblem", image: "/images/american-patches/sublimated-cutout.png", tag: "Watercolor" },
    { id: "sub-6", title: "Edge-to-Edge Printed Merrowed Badge", image: "/images/american-patches/sublimated.jpg", tag: "Merrowed Border" },
    { id: "sub-7", title: "Complex Brand Logo with Micro-Drop Shadows", image: "/images/american-patches/sublimated-cutout.png", tag: "Drop Shadows" },
    { id: "sub-8", title: "Sci-Fi Cosmic Planet Expedition", image: "/images/american-patches/sublimated.jpg", tag: "Sci-Fi Illustration" },
    { id: "sub-9", title: "Retro 80s Synthwave Gradient Patch", image: "/images/american-patches/sublimated-cutout.png", tag: "Vibrant Color" },
    { id: "sub-10", title: "Motorcycle Art Portrait Sublimated", image: "/images/american-patches/sublimated.jpg", tag: "Portrait" },
    { id: "sub-11", title: "National Park Vista Commemorative", image: "/images/american-patches/sublimated-cutout.png", tag: "Landscape" },
    { id: "sub-12", title: "High-DPI Printed Tactical Morale", image: "/images/american-patches/sublimated.jpg", tag: "High-DPI" },
  ],

  "iron-on-patches": [
    { id: "irn-1", title: "Villa Regia Airshow Heat-Seal Embroidered", image: "/images/american-patches/iron-on-white.png", tag: "Heat Seal" },
    { id: "irn-2", title: "Commercial Heat-Bonded Emblem", image: "/images/american-patches/iron-on.jpg", tag: "Heavy Duty" },
    { id: "irn-3", title: "Industrial Quick-Apply Heat Press Patch", image: "/images/company/custom-patches-collection.jpg", tag: "Apparel Ready" },
    { id: "irn-4", title: "Varsity Sports Heat-Press Emblem", image: "/images/american-patches/iron-on-white.png", tag: "Team Jersey" },
    { id: "irn-5", title: "Outdoor Trail Iron-On Crest", image: "/images/american-patches/iron-on.jpg", tag: "Backpack & Hat" },
    { id: "irn-6", title: "Air Squadron Aviation Iron-On", image: "/images/american-patches/iron-on-white.png", tag: "Aviation" },
    { id: "irn-7", title: "Racing Motorsports Heat-Seal Badge", image: "/images/company/custom-patches-collection.jpg", tag: "Motorsports" },
    { id: "irn-8", title: "Fleet Service Technician Iron-On", image: "/images/american-patches/iron-on-white.png", tag: "Workwear" },
    { id: "irn-9", title: "Athletic Gold Shield Heat-Seal", image: "/images/american-patches/iron-on.jpg", tag: "Athletic" },
    { id: "irn-10", title: "Hotrod Garage Custom Iron-On", image: "/images/american-patches/iron-on-white.png", tag: "Custom Auto" },
    { id: "irn-11", title: "Industrial Tech Iron-On Badge", image: "/images/company/custom-patches-collection.jpg", tag: "Uniform" },
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
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E8E6E0] bg-white shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              {/* Image Container with pure white background and centered padding */}
              <div className="relative aspect-square w-full overflow-hidden bg-white p-5 sm:p-7 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-110 drop-shadow-md"
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
            <div className="relative aspect-square sm:aspect-[4/3] w-full bg-white p-8 sm:p-14 flex items-center justify-center">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain p-4 drop-shadow-2xl"
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
                  100% white background studio capture • Production specimen
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
