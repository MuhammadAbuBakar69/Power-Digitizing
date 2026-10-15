"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Download,
  Layers,
  Mail,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/config/blogs";
import { StitchEstimator } from "@/components/blog/stitch-estimator";
import { ProductionGlossary } from "@/components/blog/production-glossary";
import { MachineMatrix } from "@/components/blog/machine-matrix";

export function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const secondaryFeatured = BLOG_POSTS.slice(1, 3);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const authors = [
    {
      name: "Marcus Vance",
      role: "Master Digitizer & Craft Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      bio: "15+ years experience in commercial multi-head embroidery digitizing, Tajima DST file setup, and 3D Puff foam engineering.",
      articlesCount: 6,
    },
    {
      name: "Elena Rostova",
      role: "Product Specialist & Materials Director",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      bio: "Expert in soft 3D PVC rubber molding, tactical gear specifications, and military unit patch compliance.",
      articlesCount: 4,
    },
    {
      name: "David Kross",
      role: "Lead Vector Artist & Prepress Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      bio: "Specializes in Pantone PMS color matching, vector node optimization, and leather cap patch laser engraving.",
      articlesCount: 3,
    },
    {
      name: "Maya Lin",
      role: "Apparel & Backing Specialist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      bio: "Apparel heat press parameters expert, hook & loop strength analyst, and patch laundering specialist.",
      articlesCount: 2,
    },
  ];

  const faqs = [
    {
      question: "What is the standard turnaround time for custom patch production and digitizing?",
      answer:
        "Digital proofing takes 24 to 48 hours after artwork submission. Standard patch manufacturing and delivery requires 7 to 14 business days after proof approval. Rush production options are available for urgent deadlines.",
    },
    {
      question: "What file formats do I receive with my embroidery digitizing order?",
      answer:
        "Every digitizing order includes the master Tajima (.DST) commercial file along with any specific format requested for your machine (Brother .PES, Melco .EXP, Janome .JEF, Husqvarna .HUS) and a high-resolution PDF stitch sheet.",
    },
    {
      question: "How is custom patch pricing calculated?",
      answer:
        "Custom patch pricing is calculated using the average size formula: (Length + Width) / 2. Unit costs drop significantly as order quantities increase (e.g., 50 vs 100 vs 500 units).",
    },
    {
      question: "Do you offer free digital proofs and design revisions?",
      answer:
        "Yes! Every order includes a complimentary 100% free digital proof. You review and approve the exact dimensions, stitch textures, and Pantone colors before production starts. Free basic revisions are included.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      {/* 1. TOP HERO SECTION */}
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-4 text-center max-w-4xl mx-auto py-10">
          <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" />
            <span>Design Journal & Embroidery Knowledge Hub</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            Blog & Custom Patch Guides
          </h1>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Discover 15+ in-depth masterclasses, material comparisons, vector art tutorials, and digitizing best practices written by master digitizers and craft specialists.
          </p>
        </div>

        {/* 2. MAIN FEATURED ARTICLE HERO CARD */}
        {featuredPost && (
          <div className="mt-6">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative flex flex-col justify-between min-h-[480px] md:min-h-[520px] w-full overflow-hidden rounded-2xl md:rounded-3xl bg-secondary p-6 sm:p-10 md:p-12 text-white shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

              {/* Top Badges Row */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-primary px-3.5 py-1 text-xs font-semibold tracking-wider text-white uppercase shadow-md">
                    Featured Masterclass
                  </span>
                  <span className="rounded-md bg-white/20 backdrop-blur-md px-2.5 py-1 text-xs font-semibold text-white">
                    {featuredPost.category}
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-white/80">
                    <Calendar className="size-3.5" />
                    {featuredPost.date}
                  </span>
                </div>

                <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shrink-0">
                  <Clock className="size-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>

              {/* Main Title & Excerpt & Author Footer */}
              <div className="relative z-10 space-y-4 max-w-3xl pt-8">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-white group-hover:text-white/90 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="hidden sm:line-clamp-2 text-sm sm:text-base text-white/85 leading-relaxed font-light">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="relative size-10 overflow-hidden rounded-full border-2 border-white/40 shrink-0">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">{featuredPost.author.name}</p>
                      <p className="text-xs text-white/70">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
                    <span>Read full masterclass</span>
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 3. EDITOR'S PICKS GRID (2 High-Impact Articles) */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Sparkles className="size-5 text-accent" /> Editor&apos;s Highlights
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {secondaryFeatured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-border/80 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] sm:w-48 shrink-0 overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-semibold text-foreground">
                    {post.category}
                  </span>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-foreground/50">
                      <Calendar className="size-3" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="size-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-1">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-xs text-foreground/65 line-clamp-2 font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Read guide</span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 3.5 INTERACTIVE STITCH COUNT & PRODUCTION ESTIMATOR */}
        <div className="mt-20">
          <StitchEstimator />
        </div>

        {/* 4. POPULAR LEARNING TRACKS / CATEGORY CARDS */}
        <div className="mt-20 border-t border-border pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Structured Knowledge</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
              Explore Articles by Learning Track
            </h2>
            <p className="text-sm text-foreground/65 mt-2">
              Select a specialized track to master embroidery digitizing, patch materials, or vector art preparation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <button
              onClick={() => setSelectedCategory("Embroidery Digitizing")}
              className={`flex flex-col items-start p-6 rounded-2xl border text-left transition-all ${
                selectedCategory === "Embroidery Digitizing"
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card hover:border-primary/40 hover:bg-muted/50"
              }`}
            >
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                <Wrench className="size-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Embroidery Digitizing</h3>
              <p className="text-xs text-foreground/65 mt-2 leading-relaxed">
                Stitch density, pull compensation, underlays, 3D Puff foam, and DST file setup.
              </p>
              <span className="mt-4 text-xs font-semibold text-primary inline-flex items-center gap-1">
                4 Articles →
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory("Patch Guide")}
              className={`flex flex-col items-start p-6 rounded-2xl border text-left transition-all ${
                selectedCategory === "Patch Guide"
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card hover:border-primary/40 hover:bg-muted/50"
              }`}
            >
              <div className="grid size-12 place-items-center rounded-xl bg-accent/20 text-accent-foreground mb-4">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Patch Guides</h3>
              <p className="text-xs text-foreground/65 mt-2 leading-relaxed">
                PVC vs. embroidered vs. woven vs. sublimated comparison breakdowns.
              </p>
              <span className="mt-4 text-xs font-semibold text-primary inline-flex items-center gap-1">
                4 Articles →
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory("Vector Art & Design")}
              className={`flex flex-col items-start p-6 rounded-2xl border text-left transition-all ${
                selectedCategory === "Vector Art & Design"
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card hover:border-primary/40 hover:bg-muted/50"
              }`}
            >
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                <Palette className="size-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Vector Art & Design</h3>
              <p className="text-xs text-foreground/65 mt-2 leading-relaxed">
                Font outlining, node cleanup, line weights, and Pantone PMS color matching.
              </p>
              <span className="mt-4 text-xs font-semibold text-primary inline-flex items-center gap-1">
                3 Articles →
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory("Custom Patches")}
              className={`flex flex-col items-start p-6 rounded-2xl border text-left transition-all ${
                selectedCategory === "Custom Patches"
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card hover:border-primary/40 hover:bg-muted/50"
              }`}
            >
              <div className="grid size-12 place-items-center rounded-xl bg-accent/20 text-accent-foreground mb-4">
                <Layers className="size-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Patch Backings & Care</h3>
              <p className="text-xs text-foreground/65 mt-2 leading-relaxed">
                Iron-on heat press temps, hook & loop strength, and washing care guidelines.
              </p>
              <span className="mt-4 text-xs font-semibold text-primary inline-flex items-center gap-1">
                4 Articles →
              </span>
            </button>
          </div>
        </div>

        {/* 5. MAIN BLOG ARTICLES GRID WITH SEARCH & CATEGORY PILLS */}
        <div className="mt-20 border-t border-border pt-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                All Published Articles ({filteredPosts.length})
              </h2>
              <p className="text-sm text-foreground/60 mt-1">
                Browse our complete collection of tutorials, technical breakdowns, and guides.
              </p>
            </div>

            {/* Live Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-foreground/40" />
              <input
                type="text"
                placeholder="Search articles, keywords, formats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap gap-2 overflow-x-auto pb-2">
            {BLOG_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(9);
                  }}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                    active
                      ? "bg-foreground text-background shadow-md"
                      : "bg-muted/80 text-foreground/70 hover:bg-muted hover:text-foreground border border-border/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="mt-12 text-center py-16 border border-dashed border-border rounded-2xl">
              <p className="text-foreground/60 text-base">No blog articles match your current search or filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {displayedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  <div>
                    {/* Card Image */}
                    <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-background/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-foreground border border-border/40 shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </Link>

                    {/* Metadata */}
                    <div className="mt-4 flex items-center justify-between text-xs text-foreground/50">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title with Arrow */}
                    <Link href={`/blog/${post.slug}`} className="mt-3 block">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <ArrowUpRight className="size-5 shrink-0 text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-0.5" />
                      </div>
                    </Link>

                    {/* Excerpt */}
                    <p className="mt-2 text-xs sm:text-sm text-foreground/65 leading-relaxed line-clamp-3 font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="mt-6 border-t border-border/40 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="relative size-8 overflow-hidden rounded-full bg-muted border border-border">
                        <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">{post.author.name}</p>
                        <p className="text-[10px] text-foreground/50">{post.author.role}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-0.5"
                    >
                      Read →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-8 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-muted hover:border-primary/40"
              >
                <span>Load More Articles ({filteredPosts.length - visibleCount} remaining)</span>
                <ChevronDown className="size-4" />
              </button>
            </div>
          )}
        </div>

        {/* 6. EXPERT AUTHORS SPOTLIGHT SECTION */}
        <div className="mt-24 border-t border-border pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Master Craftspeople</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground mt-1">
              Meet Our Authors & Master Digitizers
            </h2>
            <p className="text-sm text-foreground/65 mt-2">
              Our articles are written directly by production craft leads with decades of hands-on embroidery experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {authors.map((author) => (
              <div
                key={author.name}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative size-20 overflow-hidden rounded-full border-2 border-primary/20 mb-4">
                  <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground">{author.name}</h3>
                <p className="text-xs font-medium text-primary mt-0.5">{author.role}</p>
                <p className="text-xs text-foreground/65 mt-3 leading-relaxed font-normal">{author.bio}</p>
                <span className="mt-4 rounded-full bg-muted px-3 py-1 text-[11px] font-semibold text-foreground/70">
                  {author.articlesCount} Articles Published
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 6.5 THE DIGITIZER'S JOURNAL NEWSLETTER */}
        <div className="mt-24 rounded-3xl bg-gradient-to-br from-[#1E1B18] via-[#2A2421] to-[#1E1B18] p-8 sm:p-12 md:p-16 text-white border border-white/10 shadow-2xl relative overflow-hidden">
          <div aria-hidden className="absolute -right-20 -top-20 size-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="relative max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Mail className="size-3.5" /> Weekly Production Dispatch
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The Digitizer&apos;s Field Guide
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Join 4,500+ commercial embroiderers and apparel decorators. Get weekly underlay recipes, needle-tension cheatsheets, and free monthly DST/EMB test files directly in your inbox.
            </p>

            {newsletterDone ? (
              <div className="mt-8 rounded-xl bg-white/10 border border-white/20 p-5 text-center flex items-center justify-center gap-3">
                <Check className="size-5 text-emerald-400 stroke-[3]" />
                <span className="text-sm font-semibold text-white">
                  You&apos;re subscribed! Check your inbox for our 3D Puff Underlay Guide.
                </span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail) setNewsletterDone(true);
                }}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="name@apparelcompany.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3.5 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-primary/90 transition-all hover:scale-105 shrink-0"
                >
                  Join 4,500+ Pros
                </button>
              </form>
            )}

            <p className="mt-4 text-[11px] text-white/40">
              No spam. One actionable production tip per Thursday. Unsubscribe anytime with 1 click.
            </p>
          </div>
        </div>

        {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) DRAWER */}
        <div className="mt-24 border-t border-border pt-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Got Questions?</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground mt-1">
                Embroidery & Custom Patch FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className="rounded-xl border border-border bg-card overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-display text-base font-bold text-foreground"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`size-5 text-foreground/50 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-foreground/75 leading-relaxed border-t border-border/40 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 7.5 MACHINE COMPATIBILITY MATRIX */}
        <MachineMatrix />

        {/* 7.8 COMMERCIAL EMBROIDERY & PATCH GLOSSARY */}
        <ProductionGlossary />

        {/* 8. FREE RESOURCE SPEC BOOK DOWNLOAD BOX */}
        <div className="mt-20 rounded-2xl border border-primary/30 bg-primary/5 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
              <BookOpen className="size-4" /> Free PDF Spec Guide
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Download the 2026 Custom Patch & Digitizing Spec Book
            </h3>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
              Get our 24-page technical handbook detailing PMS thread charts, backing temperature guides, and vector node prep rules.
            </p>
          </div>
          <Link
            href="/quote"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
          >
            <Download className="size-4" />
            <span>Download Free Spec PDF</span>
          </Link>
        </div>

        {/* 9. BOTTOM CALL TO ACTION BANNER */}
        <div className="mt-20 rounded-3xl bg-[linear-gradient(135deg,#231F20_0%,#231F20_60%,#DA2C46_100%)] p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 size-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="mx-auto grid size-12 place-items-center rounded-full bg-accent/20 text-accent border border-accent/40">
              <Sparkles className="size-6" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Ready to create custom patches for your brand?
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
              Submit your logo or sketch for a free digital proof in 24 hours. No minimum orders and zero setup fees.
            </p>
            <div className="pt-2">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 shadow-xl"
              >
                <span>Get Instant Free Quote & Proof</span>
                <ArrowUpRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
