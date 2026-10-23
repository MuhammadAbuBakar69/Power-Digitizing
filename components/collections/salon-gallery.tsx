"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, useCallback } from "react";
import { Heart, X, ZoomIn } from "lucide-react";
import { EMBROIDERY_DESIGNS } from "@/config/embroidery-gallery";

const concepts = [
  { title: "Mountain Rescue Emblem",    material: "Embroidered" },
  { title: "Desert Compass Badge",      material: "Woven" },
  { title: "Wildflower Trail Patch",    material: "Chenille" },
  { title: "Retro Rocket Club",         material: "PVC" },
  { title: "Ocean Wave Crest",          material: "Leather" },
  { title: "Midnight Owl Insignia",     material: "Sublimated" },
  { title: "Summit Club Badge",         material: "Embroidered" },
  { title: "Desert Bloom Patch",        material: "Woven" },
  { title: "Vintage Camper Badge",      material: "Chenille" },
  { title: "Golden Eagle Emblem",       material: "PVC" },
  { title: "Canyon Adventure Patch",    material: "Leather" },
  { title: "Lucky Horseshoe Crest",     material: "Sublimated" },
  { title: "Moonlit Forest Badge",      material: "Embroidered" },
  { title: "Cycling Club Insignia",     material: "Woven" },
  { title: "Coastal Lighthouse Patch",  material: "Chenille" },
  { title: "Varsity Tiger Letter",      material: "PVC" },
  { title: "Sailor Anchor Emblem",      material: "Leather" },
  { title: "Sunrise Horizon Patch",     material: "Sublimated" },
  { title: "Pine Tree Outfitters",      material: "Embroidered" },
  { title: "Classic Racing Badge",      material: "Woven" },
  { title: "Blue Heron Crest",          material: "Chenille" },
  { title: "Trail Marker Patch",        material: "PVC" },
  { title: "Cosmic Cat Emblem",         material: "Leather" },
  { title: "Mountain Range Badge",      material: "Sublimated" },
  { title: "Retro Diner Crest",         material: "Embroidered" },
  { title: "Wild Bear Insignia",        material: "Woven" },
  { title: "Botanical Garden Patch",    material: "Chenille" },
  { title: "Desert Highway Badge",      material: "PVC" },
  { title: "Shooting Star Emblem",      material: "Leather" },
  { title: "River Angler Patch",        material: "Sublimated" },
  { title: "Vintage Camera Club",       material: "Embroidered" },
  { title: "Alpine Ski Crest",          material: "Woven" },
  { title: "Crescent Moon Badge",       material: "Chenille" },
  { title: "Forest Ranger Emblem",      material: "PVC" },
  { title: "Thunderbird Patch",         material: "Leather" },
  { title: "Campfire Stories Crest",    material: "Sublimated" },
];

const materials = ["Embroidered", "Woven", "Chenille", "PVC", "Leather", "Sublimated"];
const categories = ["All patches", ...materials];

const storageKey = "pd-salon-likes";

interface GalleryItem {
  id: string;
  title: string;
  material: string;
  image: string;
}

const materialImageMap: Record<string, string[]> = {
  Woven: [
    "/images/woven/58df48c6-cdd5-4947-8347-7028f6f71e16.webp",
    "/images/woven/0144dc71-5e3b-449e-b4ef-180df37885d7.webp",
    "/images/woven/489d7c55-9362-4851-98b0-c6739be58541.webp",
    "/images/woven/0a58900f-02b7-4919-96f7-143a3a03ca55.webp",
    "/images/woven/3cd13830-5704-45bc-a07f-1dfd4424aa09.webp",
    "/images/woven/a8e01f49-a725-43ac-afc8-a053972fba24_converted.webp",
    "/images/woven/d20cf8c2-a6e1-4942-ba10-07601b8e526d_converted.webp",
    "/images/woven/db9b2a89-b642-4989-9c2c-03db7ee6d7d7_converted.webp",
    "/images/woven/575f3720-2c06-4b75-ad4e-9b87ee34ea88.webp",
    "/images/woven/593a6db1-e2da-42a8-9273-c53114defa32_converted.webp",
    "/images/woven/83171e3f-c35f-4ddc-aa68-683e3d64a8a0_converted.webp",
  ],
  Chenille: [
    "/images/chenille/37612dd6-9e4f-40a9-b1d8-f6fe661351c7.webp",
    "/images/chenille/534aa9a0-5f7f-4a78-b27e-360df8c03136.webp",
    "/images/chenille/53d2f848-5ff7-4e64-9393-d42b165ca529.webp",
    "/images/chenille/96d5e7ab-e879-4698-bc3e-02a1bc5fb6aa.webp",
    "/images/chenille/a499bc84-5edb-4125-9003-03ec6d84a6bd.webp",
    "/images/chenille/b2c4ee1c-1e2d-4b85-9603-7abb1febb747.webp",
    "/images/chenille/cfbd2b62-7a1b-4488-86eb-8957b05f83ba.webp",
    "/images/chenille/e6bccd47-4ef4-43dc-8a52-45cce1076f13.webp",
    "/images/chenille/e905ec0e-bed8-4e46-83ee-f7c98d4f3303.webp",
    "/images/chenille/f9d39477-cbdc-4c6a-a94a-389060580a98.webp",
  ],
  PVC: [
    "/images/pvc/0593e5cd-dc2a-4e46-bb61-e5def04a98ab.webp",
    "/images/pvc/105f6253-e172-4ca6-a390-19a0ff9ec46a.webp",
    "/images/pvc/24778966-adb2-4b70-870f-52984729189b.webp",
    "/images/pvc/2ec98f36-c03d-4f91-9d05-ad95c4ec5d36.webp",
    "/images/pvc/308c1aea-e284-4c78-b934-1501d16f6228.webp",
    "/images/pvc/31958f6f-da74-40cc-8dc2-a72c2c441f8f.webp",
    "/images/pvc/4ba533b0-1b52-4f56-b5ce-847ebf27e979.webp",
    "/images/pvc/559c2b0f-18aa-484d-aff8-b8c0e2204021.webp",
    "/images/pvc/5a44cdf3-6f73-4780-9ed1-321413614d7d.webp",
    "/images/pvc/5e79adad-8564-4d7d-b21a-08e58fd722c9.webp",
    "/images/pvc/7ddafb18-3db6-4f7e-bc3a-b108f3a34841.webp",
    "/images/pvc/8af9f2ae-f8d7-4939-92b6-8f87e0f87ff4.webp",
    "/images/pvc/97c90267-1a0e-4023-b522-b6053f0ce06e.webp",
    "/images/pvc/ab045c2f-110e-49a5-b600-2485eb23fa53.webp",
    "/images/pvc/b2dc2662-9f3a-4a19-a72f-b26537076025.webp",
    "/images/pvc/cb1d6a11-16d1-458e-804d-455df9837c0f.webp",
    "/images/pvc/ddd24bd7-ca54-40e2-b7de-d17c84472cbf.webp",
  ],
  Leather: [
    "/images/leather/11dc7b26-571a-4c9c-98fb-4d7b1f27979a.webp",
    "/images/leather/299d8a05-a46b-4b75-b618-277f67044e1e.webp",
    "/images/leather/64a46fe2-61a2-4b76-9df3-81988759d6c6.webp",
    "/images/leather/68525281-80dd-4b27-8c40-dd32d378d39d.webp",
    "/images/leather/7fcdd1d7-d9d9-4fac-a340-dbd80f857178.webp",
    "/images/leather/a425a704-b068-43a4-8350-c5cd06c52708.webp",
    "/images/leather/c906d802-38ce-4f02-8acc-4be6f3c2ee5f.webp",
    "/images/leather/f3edb031-4207-47d0-af66-785fe860ebce.webp",
  ],
  Sublimated: [
    "/images/sublimation/26246876-c845-4884-99ac-448603884dd8.webp",
    "/images/sublimation/3e719772-4b60-4b78-b436-5a705b206aab.webp",
    "/images/sublimation/6ea9b97a-7c09-44dd-837d-4f7ab705ece5.webp",
    "/images/sublimation/f718d004-9e7c-4b5d-a4b3-405099b5f5ad.webp",
    "/images/sublimation/0799ebf8-4ef7-412d-b733-e3a306f94014.webp",
    "/images/sublimation/98a05369-9ca7-4184-b7ba-bdd18444d19a.webp",
    "/images/sublimation/9efd1a1e-7a47-4663-9bcf-23f9caab05e1.webp",
    "/images/sublimation/a0147e7a-45fa-49e6-853a-fe497c000ad0.webp",
    "/images/sublimation/b1c76bb68df84ee8a2ca7ed8dfe8182e.webp",
    "/images/sublimation/bb96dbdf-3895-475b-8493-5b9c785d27b7.webp",
    "/images/sublimation/d9457424-4686-4dfd-8229-faa60d8f66b0.webp",
    "/images/sublimation/df644e098fdbf9e90163ba4b4b5391a8.webp",
  ],
};

export function SalonGallery({ fallbackImages }: { fallbackImages: string[] }) {
  const [activeCategory, setActiveCategory] = useState("All patches");
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Build gallery items using unique embroidery designs and authentic material assets
  const galleryItems: GalleryItem[] = useMemo(() => {
    let embIndex = 0;
    const materialCounters: Record<string, number> = {
      Woven: 0,
      Chenille: 0,
      PVC: 0,
      Leather: 0,
      Sublimated: 0,
    };

    const baseItems: GalleryItem[] = concepts.map((c, i) => {
      let imageSrc = fallbackImages[i % fallbackImages.length];
      let title = c.title;

      if (c.material === "Embroidered" && EMBROIDERY_DESIGNS.length > 0) {
        const emb = EMBROIDERY_DESIGNS[embIndex % EMBROIDERY_DESIGNS.length];
        imageSrc = emb.image;
        title = emb.title;
        embIndex++;
      } else if (materialImageMap[c.material]) {
        const list = materialImageMap[c.material];
        const count = materialCounters[c.material] || 0;
        imageSrc = list[count % list.length];
        materialCounters[c.material] = count + 1;
      }

      return {
        id: `salon-${i}`,
        title,
        material: c.material,
        image: imageSrc,
      };
    });

    // Also append remaining distinct embroidery designs so all 15 are showcased
    const extraEmbroideryItems: GalleryItem[] = EMBROIDERY_DESIGNS.slice(embIndex).map((emb, idx) => ({
      id: `emb-extra-${idx}`,
      title: emb.title,
      material: "Embroidered" as const,
      image: emb.image,
    }));

    return [...baseItems, ...extraEmbroideryItems];
  }, [fallbackImages]);

  // Load likes
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) setLikedIds(JSON.parse(stored) as string[]);
    } catch { /* noop */ }
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightboxItem) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxItem(null); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [lightboxItem]);

  const visibleItems = useMemo(
    () => activeCategory === "All patches" ? galleryItems : galleryItems.filter((i) => i.material === activeCategory),
    [activeCategory, galleryItems]
  );

  const toggleLike = useCallback((id: string) => {
    setLikedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try { window.localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* noop */ }
      return next;
    });
  }, []);

  return (
    <>
      {/* Filter Pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-3" aria-label="Filter by material">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              activeCategory === cat
                ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                : "border-border bg-card text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive grid keeps every card aligned at each breakpoint. */}
      <div className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5" aria-live="polite">
        {visibleItems.map((item) => {
          const liked = likedIds.includes(item.id);
          return (
            <article
              key={item.id}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => setLightboxItem(item)}
            >
              {/* Image Container with Padding & Centered Fit */}
              <div className="relative aspect-square w-full overflow-hidden rounded-t-2xl bg-gradient-to-b from-muted/30 to-muted/80 p-3 sm:p-4 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={`${item.material} patch: ${item.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
                />

                {/* Subtle hover sheen */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />

                {/* Zoom icon badge */}
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-10 grid place-items-center rounded-full bg-black/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-xl pointer-events-none">
                  <ZoomIn className="size-5" />
                </span>

                {/* Material badge */}
                <span className="absolute bottom-2.5 left-2.5 rounded-full bg-background/90 backdrop-blur-md border border-border/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground shadow-sm">
                  {item.material}
                </span>

                {/* Like button */}
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); toggleLike(item.id); }}
                  aria-pressed={liked}
                  aria-label={`${liked ? "Unlike" : "Like"} ${item.title}`}
                  className={`gallery-like absolute right-2.5 top-2.5 grid size-8 sm:size-9 place-items-center rounded-full bg-background/90 backdrop-blur-md border border-border/80 shadow-md transition-all hover:scale-110 focus-visible:opacity-100 ${
                    liked ? "text-primary opacity-100" : "opacity-0 group-hover:opacity-100 text-muted-foreground"
                  }`}
                >
                  <Heart aria-hidden className={`size-4 ${liked ? "fill-current" : ""}`} />
                </button>
              </div>

              {/* Card text */}
              <div className="flex min-h-[3.5rem] items-center px-3 py-2.5 sm:px-4">
                <p className="line-clamp-2 text-xs sm:text-[13px] font-semibold leading-snug text-foreground">{item.title}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Count */}
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Showing <span className="font-semibold text-foreground">{visibleItems.length}</span> designs
        {likedIds.length > 0 && (
          <> · <span className="text-primary font-semibold">{likedIds.length} saved</span></>
        )}
      </p>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onMouseDown={(e) => { if (e.target === e.currentTarget) setLightboxItem(null); }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setLightboxItem(null)}
            className="absolute right-5 top-5 z-10 grid size-12 place-items-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>

          <div className="relative max-w-3xl w-full max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl bg-card border border-border">
            <div className="relative w-full h-[50vh] sm:h-[65vh] p-4 sm:p-8 flex items-center justify-center bg-gradient-to-b from-muted/20 to-muted/60">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain object-center drop-shadow-2xl p-2 sm:p-4"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card border-t border-border">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{lightboxItem.material}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{lightboxItem.title}</h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => toggleLike(lightboxItem.id)}
                  className={`grid size-11 place-items-center rounded-full border transition-all hover:scale-110 ${
                    likedIds.includes(lightboxItem.id)
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-muted text-muted-foreground"
                  }`}
                  aria-label="Like this design"
                >
                  <Heart className={`size-5 ${likedIds.includes(lightboxItem.id) ? "fill-current" : ""}`} />
                </button>
                <a
                  href="/quote"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:-translate-y-0.5 transition-transform shadow-lg"
                >
                  Order this style
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
