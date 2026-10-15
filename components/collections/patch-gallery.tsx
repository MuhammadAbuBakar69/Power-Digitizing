"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Heart } from "lucide-react";

const concepts = [
  "Mountain Rescue Emblem", "Desert Compass Badge", "Wildflower Trail Patch", "Retro Rocket Club", "Ocean Wave Crest", "Midnight Owl Insignia", "Summit Club Badge", "Desert Bloom Patch",
  "Vintage Camper Badge", "Golden Eagle Emblem", "Canyon Adventure Patch", "Lucky Horseshoe Crest", "Moonlit Forest Badge", "Cycling Club Insignia", "Coastal Lighthouse Patch", "Varsity Tiger Letter",
  "Sailor Anchor Emblem", "Sunrise Horizon Patch", "Pine Tree Outfitters", "Classic Racing Badge", "Blue Heron Crest", "Trail Marker Patch", "Cosmic Cat Emblem", "Mountain Range Badge",
  "Retro Diner Crest", "Wild Bear Insignia", "Botanical Garden Patch", "Desert Highway Badge", "Shooting Star Emblem", "River Angler Patch", "Vintage Camera Club", "Alpine Ski Crest",
  "Crescent Moon Badge", "Forest Ranger Emblem", "Thunderbird Patch", "Campfire Stories Crest", "Heritage Denim Badge", "Golden Poppy Patch", "North Star Insignia", "Sea Turtle Emblem",
  "Skateboard Society", "Sunset Valley Patch", "Falcon Flight Crest", "Evergreen Trail Badge", "Vintage Music Club", "Desert Coyote Emblem", "Wild Rose Insignia", "Harbor Sailing Crest",
  "Mountain Bike Patch", "Citrus Grove Badge", "Lunar Explorer Emblem", "Pioneer Supply Crest", "Autumn Leaf Patch", "Red Fox Society", "Summit Peak Insignia", "Coastal Surf Club",
];

const materials = ["Embroidered", "Woven", "Chenille", "PVC", "Leather", "Sublimated"];
const categories = ["All patches", ...materials];
const galleryItems = concepts.map((title, index) => ({
  id: `patch-${String(index + 1).padStart(3, "0")}`,
  title,
  material: materials[index % materials.length],
  image: `/images/patch-gallery/patch-${String(index + 1).padStart(3, "0")}.webp`,
  shape: ["aspect-square", "aspect-[4/5]", "aspect-[5/4]", "aspect-[3/4]", "aspect-[6/5]"][index % 5],
}));

const storageKey = "power-digitizing-patch-likes";

export function PatchGallery({ fallbackImages }: { fallbackImages: string[] }) {
  const [activeCategory, setActiveCategory] = useState("All patches");
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) setLikedIds(JSON.parse(stored) as string[]);
    } catch {
      // Likes remain usable for this visit if browser storage is unavailable.
    }
  }, []);

  const visibleItems = useMemo(
    () => activeCategory === "All patches" ? galleryItems : galleryItems.filter((item) => item.material === activeCategory),
    [activeCategory],
  );

  function toggleLike(id: string) {
    setLikedIds((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // Keep the current interaction responsive when storage is unavailable.
      }
      return next;
    });
  }

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter patches by material">
        {categories.map((category) => (
          <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary"}`}>
            {category}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 xl:columns-4" aria-live="polite">
        {visibleItems.map((item) => {
          const liked = likedIds.includes(item.id);
          return (
            <article key={item.id} className="group relative mb-3 inline-block w-full break-inside-avoid overflow-hidden rounded-lg bg-muted shadow-sm sm:mb-4">
              <div className={`relative ${item.shape}`}>
                <Image src={failedImages.includes(item.id) ? fallbackImages[Number(item.id.slice(-3)) % fallbackImages.length] : item.image} onError={() => setFailedImages((current) => current.includes(item.id) ? current : [...current, item.id])} alt={`${item.material} patch: ${item.title}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10 opacity-70 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">{item.material}</span>
                <button type="button" onClick={() => toggleLike(item.id)} aria-pressed={liked} aria-label={`${liked ? "Unlike" : "Like"} ${item.title}`}
                  className={`gallery-like absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/95 text-secondary shadow-md backdrop-blur transition-all hover:scale-110 focus-visible:opacity-100 ${liked ? "is-liked text-primary" : "opacity-0 group-hover:opacity-100"}`}>
                  <Heart aria-hidden className={`size-5 ${liked ? "fill-current" : ""}`} />
                </button>
              </div>
              <p className="sr-only">{item.title}</p>
            </article>
          );
        })}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">Showing {visibleItems.length} patch designs</p>
    </>
  );
}
