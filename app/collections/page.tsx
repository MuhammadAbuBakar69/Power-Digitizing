import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getSite } from "@/lib/tenant";
import { SalonGallery } from "@/components/collections/salon-gallery";

export const metadata: Metadata = {
  title: "Custom Patches Online | Compare Patch Types",
  description:
    "Browse custom patches online: embroidered, PVC, chenille, leather, woven, sublimated, and silicone. Compare styles and backings, then get a free proof.",
  alternates: {
    canonical: "/collections",
  },
  openGraph: {
    title: "Custom Patches Online | Compare Patch Types | Power Digitizing",
    description:
      "Browse custom patches online: embroidered, PVC, chenille, leather, woven, sublimated, and silicone. Compare styles and backings, then get a free proof.",
    url: "/collections",
    type: "website",
  },
};

const comparisonRows = [
  {
    name: "Embroidered",
    best: "Uniforms, apparel, and caps",
    detail: "High, with raised thread texture",
    waterproof: "Weather-resistant",
    moq: "10 pcs",
    time: "7–14 business days",
    href: "/collections/embroidered-patches",
  },
  {
    name: "PVC",
    best: "Tactical gear, outdoor wear, hats, and marine use",
    detail: "Very sharp 2D and 3D molded detail",
    waterproof: "Waterproof",
    moq: "25 pcs",
    time: "7–14 business days",
    href: "/collections/pvc-patches",
  },
  {
    name: "PVC keychains",
    best: "Keys, merch, car and gear accessories",
    detail: "2D and 3D molded rubber",
    waterproof: "Waterproof",
    moq: "25 pcs",
    time: "7–14 business days",
    href: "/collections/pvc-keychains",
  },
  {
    name: "Chenille",
    best: "Letterman jackets and streetwear",
    detail: "Soft looped texture, bold shapes",
    waterproof: "Dry clean recommended",
    moq: "10 pcs",
    time: "7–14 business days",
    href: "/collections/chenille-patches",
  },
  {
    name: "Leather",
    best: "Beanies, caps, workwear, and denim",
    detail: "Debossed or laser-engraved",
    waterproof: "Water-resistant finish",
    moq: "25 pcs",
    time: "5–7 days",
    href: "/collections/leather-patches",
  },
  {
    name: "Iron-on",
    best: "Apparel, jerseys, and quick no-sew jobs",
    detail: "Same as the patch style chosen",
    waterproof: "Lasts 50+ washes",
    moq: "25 pcs",
    time: "7–14 business days",
    href: "/collections/iron-on-patches",
  },
  {
    name: "Woven",
    best: "Small text, labels, and fine logos",
    detail: "Very fine detail, text from 1.5 mm",
    waterproof: "Washable",
    moq: "25 pcs",
    time: "7–14 business days",
    href: "/collections/woven-patches",
  },
  {
    name: "Sublimated",
    best: "Photos, gradients, and full-color art",
    detail: "Full color, photo quality",
    waterproof: "Fade-resistant",
    moq: "10 pcs",
    time: "7–14 business days",
    href: "/collections/sublimated-patches",
  },
  {
    name: "Silicone",
    best: "Athletic wear, hats, and bags",
    detail: "Soft-touch raised 3D",
    waterproof: "Waterproof",
    moq: "25 pcs",
    time: "7–14 business days",
    href: "/collections/silicone-patches",
  },
];

const backingOptions = [
  {
    title: "Iron-On / Heat Seal",
    desc: "Heat-activated adhesive for easy application with a household iron or a heat press. Best on cotton, denim, and canvas.",
    badge: "Most popular",
  },
  {
    title: "Velcro (Hook & Loop)",
    desc: "Hook-and-loop backing for tactical uniforms, operator caps, and plate carriers. Lets you remove and swap patches in seconds.",
    badge: "Tactical & gear",
  },
  {
    title: "Peel & Stick Adhesive",
    desc: "Pressure-sensitive sticker backing for events, trade shows, and short-term use.",
    badge: "No heat needed",
  },
  {
    title: "Sew-On",
    desc: "A plain backing for sewing directly onto heavy denim, leather, or any garment you wash often. The strongest, longest-lasting hold.",
    badge: "Most permanent",
  },
];

export default async function CollectionsPage() {
  const site = await getSite();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Every custom patch style, in one place.",
    description:
      "Browse custom patches online by style, from classic embroidered and rugged PVC to soft chenille and genuine leather. Open any collection to see uses, specs, and real examples, then request a free quote and digital proof.",
    url: "https://powerdigitizing.com/collections",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: site.collections.length,
      itemListElement: site.collections.map((collection, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: collection.name,
        description: collection.description,
        url: `https://powerdigitizing.com/collections/${collection.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Section 1: Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-muted pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="mx-auto max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-5 relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-5">
            Patch collections
          </p>
          <h1 className="font-display text-5xl font-semibold leading-tight tracking-tight md:text-7xl xl:text-8xl">
            Every custom patch style,<br />
            <span className="text-primary">in one place.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl xl:max-w-3xl text-lg xl:text-xl leading-relaxed text-muted-foreground">
            Browse custom patches online by style, from classic embroidered and rugged PVC to soft chenille and genuine leather. Open any collection to see uses, specs, and real examples, then request a free quote and digital proof.
          </p>
        </div>
      </section>

      {/* ── Section 2: Shop Custom Patches by Type (12 cards) ────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="mb-14 text-center">
            <h2 className="font-display text-3xl font-semibold md:text-4xl xl:text-5xl">
              Shop Custom Patches by Type
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Click any style to see what it&apos;s best for, how it&apos;s made, and examples of our work.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {site.collections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-gradient-to-b from-slate-50/80 to-slate-100/40 p-5 flex items-center justify-center border-b border-border/40">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105 p-3 drop-shadow-[0_12px_20px_rgba(20,38,61,0.14)]"
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

      {/* ── Section 3: Decision Guide (comparison table) ─────────────── */}
      <section className="border-t border-border bg-card py-20 md:py-28">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">
              Decision guide
            </p>
            <h2 className="font-display text-3xl font-semibold md:text-5xl">
              Compare Custom Patch Types
            </h2>
            <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto">
              Match each patch style to your design detail, where it will be used, and how much wear it needs to handle.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-4">Patch style</th>
                  <th className="px-6 py-4">Best for</th>
                  <th className="px-6 py-4">Detail level</th>
                  <th className="px-6 py-4">Water resistance</th>
                  <th className="px-6 py-4">Min order</th>
                  <th className="px-6 py-4">Production</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`transition-colors hover:bg-muted/30 ${
                      i % 2 === 0 ? "bg-card" : "bg-background"
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-foreground">
                      <Link
                        href={row.href}
                        className="hover:text-primary transition-colors underline-offset-4 hover:underline"
                      >
                        {row.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{row.best}</td>
                    <td className="px-6 py-4 text-primary font-medium">{row.detail}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.waterproof}</td>
                    <td className="px-6 py-4 font-mono text-xs font-medium text-foreground">
                      {row.moq}
                    </td>
                    <td className="px-6 py-4 font-mono text-xs">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 4: Choose the Right Backing (4 cards) ───────────── */}
      <section className="border-t border-border bg-[#F7F5EE] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">
              Backing options
            </p>
            <h2 className="font-display text-3xl font-semibold md:text-5xl">
              Choose the Right Patch Backing
            </h2>
            <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto">
              Every patch style can be made with the backing that suits your garment, bag, or gear.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {backingOptions.map((backing) => (
              <div
                key={backing.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                    {backing.badge}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {backing.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {backing.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60 text-xs font-medium text-primary">
                  Available on all orders
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Patch Gallery ─────────────────────────────────── */}
      <section className="border-t border-border bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-4">
              Design inspiration
            </p>
            <h2 className="font-display text-3xl font-semibold md:text-5xl">
              Custom Patch Gallery
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Real custom patches we&apos;ve made, in every style. Filter by material to find ideas for your own design, and save your favorites with the heart button.
            </p>
          </div>
          <SalonGallery fallbackImages={site.collections.map((c) => c.image)} />
        </div>
      </section>
    </>
  );
}
