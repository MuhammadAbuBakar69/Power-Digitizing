import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getSite } from "@/lib/tenant";
import { SalonGallery } from "@/components/collections/salon-gallery";

export const metadata: Metadata = {
  title: "Custom Patch Collections & Gallery | Power Digitizing",
  description:
    "Explore our full range of custom patch types — embroidered, PVC, chenille, leather, woven, sublimated and more. Browse our salon gallery for inspiration and click through to order.",
};

export default async function CollectionsPage() {
  const site = await getSite();

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-muted pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="mx-auto max-w-5xl px-5 relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-5">
            Patch Collections
          </p>
          <h1 className="font-display text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Every patch type,<br />
            <span className="text-primary">one place.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Browse all eight premium patch types — from classic embroidered to modern silicone — and
            click any card to explore deep product details, use-cases and get a free instant quote.
          </p>
        </div>
      </section>

      {/* ── Collection Cards ──────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Shop by Patch Type</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Click any collection to explore pricing, applications, and full product details.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.collections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-white p-4 sm:p-5 flex items-center justify-center">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {collection.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {collection.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">
                    {collection.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    View details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Material Comparison Table ─────────────────────── */}
      <section className="border-t border-border bg-card py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">
              Decision Guide
            </p>
            <h2 className="font-display text-3xl font-semibold md:text-5xl">
              Compare Patch Materials & Specs
            </h2>
            <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto">
              Find the perfect match for your design complexity, durability requirements, and apparel type.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-4">Patch Style</th>
                  <th className="px-6 py-4">Best For</th>
                  <th className="px-6 py-4">Detail Precision</th>
                  <th className="px-6 py-4">Waterproof</th>
                  <th className="px-6 py-4">Min Order</th>
                  <th className="px-6 py-4">Turnaround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {[
                  { name: "Embroidered", best: "Classic apparel, uniforms & caps", detail: "High (classic thread)", waterproof: "Weather-resistant", moq: "10 pcs", time: "5-7 days" },
                  { name: "PVC Rubber", best: "Tactical, outdoor, hats & marine", detail: "Ultra-sharp 2D/3D molds", waterproof: "100% Waterproof", moq: "25 pcs", time: "7-10 days" },
                  { name: "Chenille Varsity", best: "Letterman jackets & streetwear", detail: "Plush looped texture", waterproof: "Dry clean only", moq: "10 pcs", time: "6-8 days" },
                  { name: "Genuine Leather", best: "Beanies, caps, workwear & denim", detail: "Debossed / laser burned", waterproof: "Conditioned finish", moq: "25 pcs", time: "7-9 days" },
                  { name: "Woven High-Res", best: "Small text, gradients & fine logos", detail: "Ultra-fine weave (<2mm)", waterproof: "Wash durable", moq: "50 pcs", time: "6-8 days" },
                  { name: "Sublimated Print", best: "Photographic artwork & fades", detail: "Continuous full color", waterproof: "Fade-proof wash", moq: "20 pcs", time: "5-7 days" },
                  { name: "3D Molded Silicone", best: "Luxury athleticwear & bags", detail: "Velvet-touch soft 3D", waterproof: "100% Waterproof", moq: "50 pcs", time: "8-12 days" },
                ].map((row, i) => (
                  <tr key={row.name} className={`transition-colors hover:bg-muted/30 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}>
                    <td className="px-6 py-4 font-semibold text-foreground">{row.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.best}</td>
                    <td className="px-6 py-4 text-primary font-medium">{row.detail}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.waterproof}</td>
                    <td className="px-6 py-4 font-mono text-xs">{row.moq}</td>
                    <td className="px-6 py-4 font-mono text-xs">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Backing Options ───────────────────────────────── */}
      <section className="border-t border-border bg-[#F7F5EE] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">
              Application Versatility
            </p>
            <h2 className="font-display text-3xl font-semibold md:text-5xl">
              Choose the Right Backing
            </h2>
            <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto">
              Every patch type can be fitted with the ideal backing for your garments, bags, or gear.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Iron-On / Heat Seal", desc: "Industrial-grade heat-activated adhesive for easy home or commercial heat-press application.", badge: "Most Popular" },
              { title: "Velcro Hook & Loop", desc: "Military-spec hook-and-loop backing for tactical uniforms, operator caps, and plate carriers.", badge: "Tactical & Gear" },
              { title: "Peel & Stick Adhesive", desc: "Pressure-sensitive temporary sticker backing for events, trade shows, and short-term applications.", badge: "No Heat Required" },
              { title: "Traditional Sew-On", desc: "Clean plastic-coated backing with an unsealed edge for direct machine stitching to heavy denim or leather.", badge: "Permanent Durability" },
            ].map((backing) => (
              <div key={backing.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">{backing.badge}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{backing.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{backing.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60 text-xs font-medium text-primary">
                  Available on all orders
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Salon Gallery ─────────────────────────────────── */}
      <section className="border-t border-border bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-4">
              Design Inspiration
            </p>
            <h2 className="font-display text-3xl font-semibold md:text-5xl">
              Our Patch Gallery
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              A curated salon gallery of real patch designs across every type and style. Filter by
              material and save your favourites with the heart button.
            </p>
          </div>
          <SalonGallery fallbackImages={site.collections.map((c) => c.image)} />
        </div>
      </section>
    </>
  );
}
