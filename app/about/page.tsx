import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Brush, CheckCircle2, Clock3, FileCheck2, Layers3, MessageCircle, PackageCheck, ShieldCheck, Sparkles } from "lucide-react";
import { getSite } from "@/lib/tenant";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export const metadata: Metadata = {
  title: "About Power Digitizing | Craft, Precision & Custom Patches",
  description: "Meet Power Digitizing: embroidery digitizing, vector artwork conversion and custom patches made with care since 2010.",
};

const services = [
  { title: "Embroidery digitizing", text: "Artwork is translated into carefully planned stitches by skilled digitizers. Manual planning helps retain the look of the original design while preparing a clean file for an embroidery machine.", image: "/images/embroidery/embroidered-big-rig-patch.webp", icon: Brush },
  { title: "Vector artwork", text: "Raster artwork is redrawn as sharp, scalable vector graphics. Clean paths and considered detail make your artwork easier to produce, print and adapt for future use.", image: "/images/company/vector-separation-showcase.jpg", icon: Sparkles },
  { title: "Custom patches", text: "Choose from embroidered, PVC, chenille, leather, woven and sublimated finishes. We help match the material and backing to where your patch will be used.", image: "/images/company/custom-patches-collection.jpg", icon: Layers3 },
];

const values = [
  { title: "Craft with care", text: "Every stitch path, edge and finish gets attention before a design is ready for production.", icon: Brush },
  { title: "Work together", text: "We listen to your needs and help make the right choices for artwork, materials and use.", icon: MessageCircle },
  { title: "Make quality accessible", text: "Clear guidance and dependable creative production for businesses, teams and independent makers.", icon: ShieldCheck },
  { title: "Keep it moving", text: "Responsive proofing and a straightforward process help take your project from idea to approval.", icon: Clock3 },
];

const processSteps = [
  { step: "01", title: "Share your artwork", text: "Send a finished design or a starting point. We review the artwork, intended size and how the final piece will be used.", icon: MessageCircle },
  { step: "02", title: "Prepare for production", text: "Our artists and digitizers adapt the artwork to the chosen process, preserving its important shapes, color and character.", icon: Brush },
  { step: "03", title: "Review your proof", text: "We provide a digital proof for your review before production, so you can request adjustments and approve the details.", icon: FileCheck2 },
  { step: "04", title: "Move into making", text: "Once approved, your artwork is ready for the selected production method and finish.", icon: PackageCheck },
];

const milestones = [
  { year: "2010", title: "Founded in Delaware", description: "Power Digitizing started as a small, passionate studio focused on manual embroidery punching for local contract embroiderers." },
  { year: "2014", title: "Vector Artwork Division", description: "Expanded services to include raster-to-vector artwork conversion, providing print and screen shops with razor-sharp production vectors." },
  { year: "2018", title: "Custom Patch Production Lab", description: "Launched full physical patch manufacturing covering embroidered, PVC rubber, leather, woven, and sublimated finishes." },
  { year: "2022", title: "3D Puff & Specialty Stitches", description: "Engineered proprietary underlay formulas for ultra-clean 3D foam caps and textured chenille varsity lettering." },
  { year: "2026", title: "250,000+ Designs Milestone", description: "Serving over 1,000 active apparel decorators, military units, streetwear brands, and corporate accounts worldwide." },
];

const teamSpecialists = [
  { name: "Marcus Vance", role: "Master Digitizer & Founder", exp: "16+ Years Experience", bio: "Trained on Tajima and Wilcom industrial systems, Marcus specializes in complex 3D puff headwear and delicate micro-lettering down to 3mm.", tag: "Head of Digitizing" },
  { name: "Elena Rostova", role: "Senior Vector Art Director", exp: "12+ Years Experience", bio: "Elena leads our clean redraw team, turning blurred customer sketches and low-res photos into color-separated, press-ready vector paths.", tag: "Vector Lead" },
  { name: "Tariq Mahmood", role: "Patch Production Specialist", exp: "10+ Years Experience", bio: "Expert in merrowed borders, heat-seal adhesives, Velcro backings, and precision PVC mold tooling for military and tactical units.", tag: "Physical Patches" },
  { name: "Claire Chen", role: "Production Quality Inspector", exp: "8+ Years Experience", bio: "Runs test stitch-outs on our in-house Brother and Barudan multi-needle machines before final EMB and DST files are dispatched.", tag: "Quality Control" },
];

const standards = [
  { label: "Wilcom & Tajima Certified", value: "Master level stitch geometry and density calculation." },
  { label: "Pantone PMS Color Calibrated", value: "Exact Madeira and Robison-Anton thread matching." },
  { label: "OEKO-TEX Compatible", value: "Thread specs meeting international textile safety standards." },
  { label: "99.8% Machine Run Reliability", value: "Zero birdnesting, minimal trims, and no fabric puckering." },
];

export default async function AboutPage() {
  const site = await getSite();
  const testimonials = site.testimonials.slice(0, 3);

  return (
    <>
      <section className="about-hero relative isolate overflow-hidden px-5 pb-16 pt-28 text-foreground md:pb-24 md:pt-36">
        <div aria-hidden className="about-hero-pattern pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-sm">
              <span className="size-1.5 rounded-full bg-accent" /> About Power Digitizing
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
              Good ideas deserve <span className="text-primary">exceptional detail.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Since 2010, we have helped turn artwork into production-ready embroidery files, clean vector graphics and custom patches—with care at every step.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/quote" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">Start a project <ArrowUpRight aria-hidden className="size-4" /></Link>
              <Link href="#our-story" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/70 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary">How we work <ArrowRight aria-hidden className="size-4" /></Link>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-3 sm:gap-4">
            <div className="relative min-h-64 overflow-hidden rounded-lg border border-border bg-card shadow-lg shadow-secondary/10 sm:col-span-1 sm:row-span-2 sm:min-h-[430px]">
              <Image src="/images/american-patches/embroidered.jpg" alt="Detailed embroidered custom patch" fill priority sizes="(max-width: 640px) 100vw, 34vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Our craft</p><p className="mt-1 font-display text-2xl font-semibold">Made to stand out.</p></div>
            </div>
            <div className="relative min-h-52 overflow-hidden rounded-lg border border-border bg-card shadow-lg shadow-secondary/10 sm:col-span-1 sm:min-h-[207px]">
              <Image src="/images/american-patches/chenille.jpg" alt="Colorful chenille patch detail" fill sizes="(max-width: 640px) 100vw, 34vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/55 to-transparent" />
              <p className="absolute bottom-4 left-5 text-sm font-semibold text-white">Texture, color and character</p>
            </div>
            <div className="flex min-h-52 flex-col justify-between rounded-lg bg-primary p-6 text-white shadow-lg shadow-primary/15 sm:min-h-[207px]">
              <div className="flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Proof first</p><BadgeCheck aria-hidden className="size-5 text-accent" /></div>
              <div><p className="font-display text-4xl font-semibold">24–48 hrs</p><p className="mt-2 text-sm text-white/80">Typical digital proof turnaround</p></div>
            </div>
            <div className="relative min-h-52 overflow-hidden rounded-lg border border-border bg-card shadow-lg shadow-secondary/10 sm:col-span-1 sm:min-h-[207px]">
              <Image src="/images/american-patches/leather.jpg" alt="Custom leather patch close-up" fill sizes="(max-width: 640px) 100vw, 34vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/55 to-transparent" />
              <p className="absolute bottom-4 left-5 text-sm font-semibold text-white">Finishes made for your design</p>
            </div>
            <div className="flex min-h-52 items-end justify-between rounded-lg bg-secondary p-6 text-white sm:min-h-[207px]">
              <div><p className="font-display text-4xl font-semibold text-accent">Since 2010</p><p className="mt-2 max-w-[14rem] text-sm leading-6 text-white/70">Creative production grounded in experience.</p></div>
              <Sparkles aria-hidden className="mb-1 size-7 shrink-0 text-accent" />
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal>
      <section id="our-story" className="scroll-mt-20 bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our approach</p>
            <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">A creative idea, brought to life through technology.</h2>
          </div>
          <div data-reveal>
            <p className="text-base leading-7 text-muted-foreground">Power Digitizing began with a love of art that had mostly been kept to spare time. The founders saw a way to bring that creativity together with their knowledge of technology and turn it into practical, production-ready work.</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">The company started small and grew by staying close to the craft: understanding each design, preparing it carefully and helping clients make informed choices. That same approach connects our embroidery digitizing, vector artwork conversion and custom patch services today.</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">A patch, stitch file or vector graphic is more than a file or material. It represents a brand, a team, a memory or an idea. Our job is to respect that meaning while making the artwork work in the real world.</p>
            <div data-reveal className="mt-8 grid grid-cols-2 divide-x divide-border border-y border-border py-5 sm:grid-cols-4">
              {[
                { value: "2010", label: "Established" },
                { value: "4.9 / 5", label: "Customer rating" },
                { value: "24–48 hrs", label: "Typical proof" },
                { value: "1,000+", label: "Customers served" },
              ].map((stat) => <div key={stat.label} className="px-3 py-2 first:pl-0 sm:px-4"><p className="font-display text-xl font-semibold sm:text-2xl">{stat.value}</p><p className="mt-1 text-xs text-muted-foreground">{stat.label}</p></div>)}
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ─── COMPANY TIMELINE ─── */}
      <ScrollReveal>
      <section className="border-t border-border bg-[#FBF9F5] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Journey</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">15+ Years of Evolution & Dedication.</h2>
            <p className="mt-3 text-base text-muted-foreground">How an independent Delaware punching studio evolved into a global production partner.</p>
          </div>

          <div className="mt-12 space-y-6">
            {milestones.map((milestone, idx) => (
              <div
                data-reveal
                key={milestone.year}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-2xl border border-border bg-card p-6 md:p-8 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center gap-4 shrink-0 sm:w-44">
                  <span className="font-display text-3xl md:text-4xl font-bold text-primary">{milestone.year}</span>
                  <span className="hidden sm:block h-8 w-px bg-border" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{milestone.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{milestone.description}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest sm:self-center">Phase 0{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ─── CRAFT SPECIALISTS TEAM ─── */}
      <ScrollReveal>
      <section className="border-y border-border bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The People Behind the Stitches</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Meet our senior digitizers and artists.</h2>
            <p className="mt-3 text-base text-muted-foreground">Real embroidery veterans who inspect each vector curve, stitch density, and push-pull compensator manually.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamSpecialists.map((member) => (
              <article
                data-reveal
                key={member.name}
                className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">{member.tag}</span>
                    <span className="text-[11px] font-mono text-muted-foreground">{member.exp}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-xs font-medium text-accent">{member.role}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground font-medium">
                  <span>Manual Punching</span>
                  <span>100% Tested</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="overflow-hidden border-b border-border bg-card py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div data-reveal className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[1.08/1] overflow-hidden rounded-2xl bg-[#f2eee8]">
              <Image src="/images/american-patches/embroidered-cutout.png" alt="Embroidered patch prepared as a clean product cutout" fill sizes="(max-width: 1024px) 100vw, 560px" className="object-contain p-7 sm:p-10" />
              <div className="absolute bottom-4 left-4 rounded-full border border-border/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground shadow-sm">Artwork with intention</div>
            </div>
            <div className="absolute -bottom-5 -right-2 w-[39%] overflow-hidden rounded-xl border-4 border-card bg-[#f2eee8] shadow-xl sm:-right-5">
              <div className="relative aspect-square"><Image src="/images/american-patches/chenille-cutout.png" alt="Textured chenille patch detail" fill sizes="(max-width: 640px) 40vw, 220px" className="object-contain p-2" /></div>
            </div>
          </div>
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Where art meets production</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">Keep the spirit of the original design.</h2>
            <p className="mt-5 leading-7 text-muted-foreground">The move from screen to stitch, print or patch takes more than simply converting a file. Detail, scale and material all affect how the finished design looks. Our artists consider those practical details while keeping the original idea at the center of the work.</p>
            <p className="mt-4 leading-7 text-muted-foreground">For embroidery, that means planning stitch direction and density with the garment and design in mind. For vector artwork, it means producing clear paths and preserving the shapes that make a mark recognizable. For patches, it means choosing a construction and finish that suit the design’s purpose.</p>
            <ul className="mt-6 space-y-3">
              {["Manual attention to artwork details", "Production-aware material and finish guidance", "A proof to review before work moves forward"].map((item) => <li key={item} className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ─── STANDARDS STRIP ─── */}
      <ScrollReveal>
      <section className="bg-secondary text-white py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((std) => (
              <div key={std.label} className="border-l border-white/20 pl-5">
                <h4 className="font-display text-base font-semibold text-accent">{std.label}</h4>
                <p className="mt-1.5 text-xs text-white/70 leading-relaxed">{std.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">A clear path forward</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">From first artwork to ready for production.</h2>
            <p className="mt-4 leading-7 text-muted-foreground">We keep the process collaborative, so the design can be reviewed and understood before the making begins.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ step, title, text, icon: Icon }) => <article data-reveal key={step} className="relative rounded-xl border border-border bg-card p-5 sm:p-6"><div className="flex items-center justify-between"><span className="font-display text-sm font-semibold tracking-[0.15em] text-primary">{step}</span><Icon aria-hidden className="size-5 text-accent" /></div><h3 className="mt-7 font-display text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
          </div>
          <div data-reveal className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-lg bg-primary/5 px-5 py-4 text-sm font-medium text-foreground"><span className="inline-flex items-center gap-2"><Clock3 aria-hidden className="size-4 text-primary" />Proofs typically in 24–48 hours</span><span className="hidden h-4 w-px bg-border sm:block" /><span className="inline-flex items-center gap-2"><BadgeCheck aria-hidden className="size-4 text-primary" />You review before production</span></div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="border-y border-border bg-secondary py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2">
          <article data-reveal className="rounded-xl border border-white/10 bg-white/[0.04] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our mission</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">Make quality creative production accessible.</h2>
            <p className="mt-5 leading-7 text-white/70">We aim to make embroidery digitizing, vector artwork conversion and custom patches easier to access for businesses, organizations and individual creators. That means delivering careful work, communicating clearly and treating each project as its own.</p>
          </article>
          <article data-reveal className="rounded-xl bg-primary p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Our vision</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">A world where every good idea can be made well.</h2>
            <p className="mt-5 leading-7 text-white/80">We want creative production to feel possible, wherever a client is starting from. By bringing skilled people, practical technology and thoughtful service together, we work toward results that serve our clients and raise the standard of the craft.</p>
          </article>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="border-y border-border bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Creative services, connected by craft.</h2>
            <p className="mt-3 leading-7 text-muted-foreground">A capable partner from the first artwork file to the final production details.</p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {services.map(({ title, text, icon: Icon, image }, index) => (
              <article data-reveal key={title} className="overflow-hidden rounded-lg border border-border bg-background transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                <div className="relative aspect-[1.7/1] overflow-hidden bg-[#f2eee8]"><Image src={image} alt={`${title} example`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-5 transition-transform duration-500 hover:scale-105" /></div>
                <div className="p-6 md:p-7"><div className="flex items-center justify-between"><span className="font-display text-sm font-semibold tracking-[0.15em] text-muted-foreground">0{index + 1}</span><span className="grid size-10 place-items-center rounded-full bg-primary/5 text-primary"><Icon aria-hidden className="size-5" /></span></div>
                <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div data-reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What guides us</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">The values behind every project.</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, text, icon: Icon }) => <article data-reveal key={title} className="border-t border-border pt-5"><Icon aria-hidden className="size-5 text-primary" /><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {testimonials.length > 0 && <ScrollReveal><section className="bg-[#faf8f5] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div data-reveal className="mx-auto max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Client feedback</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Trusted for the details that matter.</h2>
            <p className="mt-3 leading-7 text-muted-foreground">We value the relationships built through thoughtful work and dependable service.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => <blockquote key={item.name} className="flex flex-col rounded-lg border border-border/70 bg-white p-5 shadow-sm sm:p-6"><div className="flex gap-1 text-accent" aria-label={`${item.rating ?? 5} out of 5 stars`}>{Array.from({ length: item.rating ?? 5 }, (_, i) => <span key={i} aria-hidden>★</span>)}</div><p className="mt-4 flex-1 text-sm leading-6 text-foreground/85">“{item.quote}”</p><footer className="mt-5 border-t border-border pt-4"><p className="text-sm font-semibold">{item.name}</p>{item.role && <p className="mt-1 text-xs text-muted-foreground">{item.role}</p>}</footer></blockquote>)}
          </div>
        </div>
      </section></ScrollReveal>}

      <ScrollReveal>
      <section className="px-5 py-16 md:py-20">
        <div data-reveal className="relative isolate mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 overflow-hidden rounded-lg bg-secondary p-7 text-white sm:flex-row sm:items-center sm:p-10">
          <Image src="/images/american-patches/embroidered.jpg" alt="" aria-hidden fill sizes="(max-width: 1024px) 100vw, 1152px" className="-z-20 object-cover opacity-40" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary/85 via-secondary/75 to-secondary/60" />
          <div aria-hidden className="absolute -right-20 -top-32 -z-10 size-96 rounded-full border border-white/10" />
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Your next project</p><h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">Let’s bring your design to life.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/75">Tell us what you have in mind, and we’ll help you find the right way to make it.</p></div>
          <Link href="/quote" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-5 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">Get a quote <ArrowUpRight aria-hidden className="size-4" /></Link>
        </div>
      </section>
      </ScrollReveal>
    </>
  );
}
