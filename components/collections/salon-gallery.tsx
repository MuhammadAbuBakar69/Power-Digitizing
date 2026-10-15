"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, useCallback } from "react";
import { Heart, X, ZoomIn } from "lucide-react";

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

export function SalonGallery({ fallbackImages }: { fallbackImages: string[] }) {
  const [activeCategory, setActiveCategory] = useState("All patches");
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Build gallery items using fallback collection images
  const galleryItems: GalleryItem[] = useMemo(
    () =>
      concepts.map((c, i) => ({
        id: `salon-${i}`,
        title: c.title,
        material: c.material,
        image: fallbackImages[i % fallbackImages.length],
      })),
    [fallbackImages]
  );

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
              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={`${item.material} patch: ${item.title}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />

                {/* Zoom icon */}
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
                </span>

                {/* Material badge */}
                <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {item.material}
                </span>

                {/* Like button */}
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); toggleLike(item.id); }}
                  aria-pressed={liked}
                  aria-label={`${liked ? "Unlike" : "Like"} ${item.title}`}
                  className={`gallery-like absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/95 shadow-md transition-all hover:scale-110 focus-visible:opacity-100 ${
                    liked ? "text-primary opacity-100" : "opacity-0 group-hover:opacity-100 text-muted-foreground"
                  }`}
                >
                  <Heart aria-hidden className={`size-4 ${liked ? "fill-current" : ""}`} />
                </button>
              </div>

              {/* Card text */}
              <div className="flex min-h-[3.5rem] items-center px-3 py-3 sm:px-4">
                <p className="line-clamp-2 text-[13px] font-semibold leading-snug text-foreground">{item.title}</p>
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

          <div className="relative max-w-3xl w-full max-h-[85vh] overflow-hidden rounded-3xl shadow-2xl bg-card">
            <Image
              src={lightboxItem.image}
              alt={lightboxItem.title}
              width={900}
              height={700}
              className="w-full h-auto object-contain max-h-[70vh]"
            />
            <div className="p-6 flex items-center justify-between bg-card border-t border-border">
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
