import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Tag,
  ShieldCheck,
  CheckCircle2,
  Lightbulb,
  Cpu,
  Layers,
  Sparkles,
  Phone,
  Mail,
  FileCheck2,
  FileText,
  Sliders,
} from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug } from "@/config/blogs";
import { getSite, getOrigin } from "@/lib/tenant";
import {
  TableOfContents,
  BlogFaqAccordion,
  BlogFeedback,
  type TocItem,
} from "@/components/blog/blog-post-interactive";
import {
  getEnhancementForPost,
} from "@/config/blog-enhancements";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  const site = await getSite();
  const origin = await getOrigin(site);

  return {
    title: `${post.title} | ${site.name} Technical Guide`,
    description: post.excerpt,
    keywords: post.seoKeywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${origin}/blog/${post.slug}`,
      siteName: site.name,
      type: "article",
      images: [{ url: `${origin}${post.image}` }],
    },
    alternates: {
      canonical: `${origin}/blog/${post.slug}`,
    },
  };
}

// Helper to slugify headings into URL safe IDs
function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const site = await getSite();
  const origin = await getOrigin(site);
  const phone = site.contact?.phone || "+1 (800) 555-0199";
  const email = site.contact?.email || "support@powerdigitizing.com";

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const enhancement = getEnhancementForPost(post.category, post.slug);

  // Parse markdown headings for dynamic Table of Contents
  const tocItems: TocItem[] = [];
  const paragraphs = post.content.split("\n\n");

  paragraphs.forEach((p) => {
    const trimmed = p.trim();
    if (trimmed.startsWith("## ")) {
      const headingText = trimmed.replace("## ", "").trim();
      tocItems.push({
        id: slugifyHeading(headingText),
        text: headingText,
        level: 2,
      });
    } else if (trimmed.startsWith("### ")) {
      const headingText = trimmed.replace("### ", "").trim();
      tocItems.push({
        id: slugifyHeading(headingText),
        text: headingText,
        level: 3,
      });
    }
  });

  // Always append Technical Specs, Preflight Checklist, and FAQ to TOC if they exist
  tocItems.push(
    { id: "technical-specifications-matrix", text: "Technical Specification Matrix", level: 2 },
    { id: "production-preflight-checklist", text: "Production Preflight Checklist", level: 2 },
    { id: "faq-section", text: "Frequently Asked Technical Inquiries", level: 2 }
  );

  // Schema.org Article & FAQPage JSON-LD
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: `${origin}${post.image}`,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: origin,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${origin}/blog/${post.slug}`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: enhancement.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* Structured Schema.org Markup for SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      <article className="min-h-screen bg-background pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-5">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back to Knowledge Hub</span>
            </Link>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1 text-emerald-600 font-medium bg-emerald-500/10 px-2.5 py-0.5 rounded-full text-[11px]">
                <ShieldCheck className="size-3" /> Peer Reviewed & Verified
              </span>
            </div>
          </div>

          {/* Article Header */}
          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
              <span className="rounded-full bg-primary/10 text-primary px-3 py-1 font-semibold">
                {post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="size-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author Byline Bar */}
            <div className="flex items-center justify-between border-y border-border/70 py-4 mt-6">
              <div className="flex items-center gap-3.5">
                <div className="relative size-12 overflow-hidden rounded-full border border-border/80 shadow-sm">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.author.role}</p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-md bg-muted px-2.5 py-1 font-mono text-[11px]">
                  Commercial Guide
                </span>
                <span className="rounded-md bg-muted px-2.5 py-1 font-mono text-[11px]">
                  2026 Production Standards
                </span>
              </div>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl my-10 bg-muted shadow-xl border border-border/60">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* ── Main Two-Column Layout (Content + Sticky Sidebar) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
            {/* Left Content Area (8 Cols) */}
            <div className="lg:col-span-8">
              {/* Executive Summary / Key Takeaways Box */}
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-6 sm:p-8 mb-10 shadow-sm relative overflow-hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl"
                />
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  <Sparkles className="size-4" />
                  <span>Executive Summary & Key Takeaways</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-4">
                  Essential Findings for Production Teams
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {enhancement.executiveSummary.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Body Content with Formatted Headings and Sections */}
              <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:sm:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:mb-5 prose-li:text-foreground/85 prose-strong:text-foreground">
                {paragraphs.map((paragraph, idx) => {
                  const trimmed = paragraph.trim();

                  // Render H2 with matching anchor ID
                  if (trimmed.startsWith("## ")) {
                    const headingText = trimmed.replace("## ", "");
                    const headingId = slugifyHeading(headingText);
                    return (
                      <h2
                        key={idx}
                        id={headingId}
                        className="scroll-mt-28 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-12 mb-4 border-b border-border/60 pb-3"
                      >
                        {headingText}
                      </h2>
                    );
                  }

                  // Render H3 with matching anchor ID
                  if (trimmed.startsWith("### ")) {
                    const headingText = trimmed.replace("### ", "");
                    const headingId = slugifyHeading(headingText);
                    return (
                      <h3
                        key={idx}
                        id={headingId}
                        className="scroll-mt-28 font-display text-lg sm:text-xl font-bold tracking-tight text-foreground mt-8 mb-3"
                      >
                        {headingText}
                      </h3>
                    );
                  }

                  // Render Lists
                  if (trimmed.startsWith("* ") || trimmed.startsWith("1. ")) {
                    const items = trimmed.split("\n");
                    return (
                      <ul key={idx} className="my-5 space-y-2.5 list-disc pl-5 text-foreground/85">
                        {items.map((item, i) => (
                          <li key={i} className="leading-relaxed text-sm sm:text-base">
                            {item.replace(/^\* |^\d+\.\s*/, "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Divider
                  if (trimmed === "---") {
                    return <hr key={idx} className="my-8 border-border/60" />;
                  }

                  // In-line Pro-Tip Box after the 3rd paragraph
                  if (idx === 3) {
                    return (
                      <div key={idx}>
                        <p className="text-sm sm:text-base text-foreground/85 leading-relaxed my-4">
                          {trimmed}
                        </p>

                        {/* Master Pro-Tip Banner */}
                        <div className="my-8 rounded-2xl border border-[#C94343]/30 bg-[#C94343]/5 p-6 sm:p-7 relative overflow-hidden shadow-sm">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C94343] mb-2">
                            <Lightbulb className="size-4" />
                            <span>Master Digitizer&apos;s Pro Tip</span>
                          </div>
                          <h4 className="font-display text-base sm:text-lg font-bold text-foreground mb-2">
                            {enhancement.proTip.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                            {enhancement.proTip.description}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <p key={idx} className="text-sm sm:text-base text-foreground/85 leading-relaxed my-4">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              {/* ── Substrate / Technical Engineering Matrix Table ── */}
              <div id="technical-specifications-matrix" className="mt-14 scroll-mt-28">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <Cpu className="size-4" />
                  <span>Engineering Specs</span>
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground mb-4">
                  Technical Specification Matrix
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">
                  Use this baseline calibration chart to adjust machine tension, pull compensation, and needle geometry when decorating commercial substrates.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-border/80 bg-card shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="border-b border-border bg-muted/50 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="px-5 py-3.5">Substrate</th>
                        <th className="px-5 py-3.5">Recommended Density</th>
                        <th className="px-5 py-3.5">Pull Comp</th>
                        <th className="px-5 py-3.5">Underlay Recipe</th>
                        <th className="px-5 py-3.5">Needle / Tool</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {enhancement.technicalMatrix.map((row, i) => (
                        <tr key={i} className="hover:bg-muted/30 transition-colors">
                          <td className="px-5 py-4 font-bold text-foreground">
                            {row.substrate}
                            <span className="block text-[11px] font-normal text-muted-foreground mt-0.5">
                              {row.notes}
                            </span>
                          </td>
                          <td className="px-5 py-4 font-mono text-xs text-primary font-semibold">
                            {row.recommendedDensity}
                          </td>
                          <td className="px-5 py-4 font-mono text-xs">
                            {row.pullComp}
                          </td>
                          <td className="px-5 py-4 text-xs text-foreground/80">
                            {row.underlayType}
                          </td>
                          <td className="px-5 py-4 text-xs text-foreground/80 font-mono">
                            {row.recommendedNeedle}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Pre-Flight Production Checklist ── */}
              <div id="production-preflight-checklist" className="mt-14 scroll-mt-28 rounded-2xl border border-border/80 bg-card p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  <FileCheck2 className="size-4" />
                  <span>Quality Assurance Standard</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
                  Pre-Flight Production Checklist
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                  Review these 6 critical quality verification gates before starting high-volume commercial production runs:
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {enhancement.preflightChecklist.map((check, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border/60 bg-background p-4 text-xs sm:text-sm text-foreground/80 leading-relaxed"
                    >
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-mono text-[11px] font-bold mt-0.5">
                        {i + 1}
                      </div>
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Interactive Technical FAQ ── */}
              <BlogFaqAccordion faqs={enhancement.faqs} />

              {/* ── Reader Feedback ── */}
              <BlogFeedback />

              {/* Tags */}
              <div className="mt-12 border-t border-border pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground mr-2">
                    <Tag className="size-3.5" /> Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Biography Box */}
              <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/20 shadow-md">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    Author & Production Specialist
                  </p>
                  <h4 className="font-display text-xl font-bold text-foreground mt-0.5">
                    {post.author.name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium">{post.author.role}</p>
                  <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    With over 12 years of hands-on commercial embroidery and patch manufacturing experience, {post.author.name} specializes in high-density digitizing, custom mold toolpaths, and precision vector redraws for brands worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar Area (4 Cols) - Sticky */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Sticky Table of Contents */}
              <TableOfContents tocItems={tocItems} />

              {/* Free Proof & Digitizing Spec Sheet Card */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/[0.08] to-transparent p-6 shadow-sm">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  <Sliders className="size-3.5" /> Need Custom Stitch Files?
                </span>
                <h4 className="font-display text-lg font-bold text-foreground mt-2">
                  Get a Free Digital Proof in 24 Hours
                </h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Send us your artwork today. Our master digitizers will inspect vector nodes, calibrate stitch densities, and provide a stitch-out preview with zero obligation.
                </p>

                <Link
                  href="/quote"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold text-white shadow-md hover:bg-primary/90 transition-all hover:scale-[1.02]"
                >
                  <span>Request Free Digital Proof</span>
                  <ArrowUpRight className="size-4" />
                </Link>

                <div className="mt-4 pt-4 border-t border-border/60 space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Turnaround Time:</span>
                    <span className="font-mono font-semibold text-foreground">2–4 Hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Supported Formats:</span>
                    <span className="font-mono font-semibold text-foreground">DST, PES, EXP, EMB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Revisions:</span>
                    <span className="font-semibold text-emerald-600">100% Free & Unlimited</span>
                  </div>
                </div>
              </div>

              {/* Downloadable Operator Resources */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="font-display text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <FileText className="size-4 text-primary" />
                  <span>Production Downloads</span>
                </h4>
                <div className="space-y-2.5 text-xs">
                  <Link
                    href="/quote"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-border/70 hover:bg-muted transition-colors text-foreground/80 hover:text-foreground"
                  >
                    <span>Patch Sizing & Die-Line Guide</span>
                    <span className="font-mono text-[10px] text-primary font-bold">PDF</span>
                  </Link>
                  <Link
                    href="/quote"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-border/70 hover:bg-muted transition-colors text-foreground/80 hover:text-foreground"
                  >
                    <span>Madeira Polyneon Thread Matrix</span>
                    <span className="font-mono text-[10px] text-primary font-bold">PDF</span>
                  </Link>
                  <Link
                    href="/quote"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-border/70 hover:bg-muted transition-colors text-foreground/80 hover:text-foreground"
                  >
                    <span>Machine Underlay Cheat Sheet</span>
                    <span className="font-mono text-[10px] text-primary font-bold">DOC</span>
                  </Link>
                </div>
              </div>

              {/* Direct Support Hotline */}
              <div className="rounded-2xl border border-border bg-card p-6 text-xs text-muted-foreground">
                <p className="font-bold text-foreground text-sm mb-1">Direct Master Digitizer Line</p>
                <p className="mb-4">Speak directly with an active embroidery punching engineer:</p>
                <div className="space-y-2 font-mono">
                  <a
                    href={`tel:${phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors"
                  >
                    <Phone className="size-3.5 text-primary" />
                    <span>{phone}</span>
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors"
                  >
                    <Mail className="size-3.5 text-primary" />
                    <span className="truncate">{email}</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* ── Related Articles Section ── */}
          {relatedPosts.length > 0 && (
            <div className="mt-24 border-t border-border pt-14">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-primary">
                    DEEPEN YOUR KNOWLEDGE
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
                    Related Technical Guides
                  </h3>
                </div>
                <Link
                  href="/blog"
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Explore all articles</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        {rel.category}
                      </span>
                      <h4 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* ── Editorial Luxury Bottom CTA (Bluestone & Redis) ── */}
          <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#0B1626] via-[#14263D] to-[#0B1626] p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl border border-white/10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-[#C94343]/15 blur-[100px]"
            />

            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                <Layers className="size-3.5 text-[#C94343]" /> Master Craftsmanship Guarantee
              </span>

              <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Turn Complex Designs Into Flawless, Production-Ready Files & Patches
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Zero digitizing setup fees, guaranteed 2–4 hour turnaround, and physical stitch-out proof verification. Experience why over 5,000 apparel brands trust Power Digitizing.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#C94343] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-[#C94343]/30 hover:bg-[#b03535] hover:shadow-2xl transition-all hover:scale-105"
                >
                  <span>Get Free Digital Proof & Quote</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur hover:bg-white/15 hover:border-white/40 transition-colors"
                >
                  <span>Contact Embroidery Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
