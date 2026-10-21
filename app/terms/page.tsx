import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { getSite } from "@/lib/tenant";

export const metadata: Metadata = {
  title: "Terms of Service | Power Digitizing",
  description:
    "Official Terms and Conditions of Service for Power Digitizing. Embroidery digitizing, vector artwork conversion, custom patches, payment and ordering conditions.",
};

export default async function TermsPage() {
  const site = await getSite();

  const sections = [
    {
      title: "1. Acceptance of Terms",
      text: "By accessing or using the services, website (powerdigitizing.com), customer portal, or placing an order with Power Digitizing, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.",
    },
    {
      title: "2. Orders & Production Files",
      text: "All orders placed for embroidery digitizing, vector art conversion, or custom physical patches are produced based on the specifications, files, and requirements submitted by the customer. Digital proofs are provided for review and must be approved prior to final production runs.",
    },
    {
      title: "3. Turnaround Times & Delivery",
      text: "Standard digitizing and vector conversion turnaround is typically 12 to 24 hours. Rush orders are processed as expedited based on request. Physical custom patches require standard manufacturing and transit times (typically 7 to 14 business days). Delays arising from carrier transit or customs are beyond our direct operational control.",
    },
    {
      title: "4. Revisions & Satisfaction",
      text: "We provide revisions on digitizing and vector orders within 10 days of delivery to ensure complete satisfaction. Changes to original artwork, dimensions, or completely new designs outside the original scope are treated as new orders.",
    },
    {
      title: "5. Intellectual Property & Copyright",
      text: "The customer represents and warrants that they own or hold the necessary licenses and permissions for all artwork, logos, and trademarks submitted to Power Digitizing. The customer agrees to indemnify and hold harmless Power Digitizing from any copyright infringement claims arising from client-provided materials.",
    },
    {
      title: "6. Payment Terms",
      text: "Payment is required upon invoice generation or prior to production dispatch. We accept major credit cards, debit cards, and secure online transaction methods. Invoices not settled within the designated term may incur administrative charges.",
    },
    {
      title: "7. Return & Refund Policy",
      text: "All refund requests are strictly governed by our Return & Refund Policy. Requests must be lodged within 10 days of delivery at design@powerdigitizing.com and are subject to dispute resolution procedures and transfer deductions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-[#14263D]/5 via-background to-background py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 relative">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6"
          >
            <Link href="/" className="hover:text-[#C94343] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-[#C94343]">Legal</span>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Terms of Service</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#C94343]/20 bg-[#C94343]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#C94343] mb-4">
            <ShieldCheck className="size-3.5" />
            <span>Commercial Agreement</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#14263D] leading-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground font-medium">
            Effective date: April, 2023 &bull; Power Digitizing (powerdigitizing.com)
          </p>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.title} className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-[#14263D] mb-3">{section.title}</h2>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">{section.text}</p>
                </div>
              ))}

              <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-[#14263D] to-[#0B1626] p-6 md:p-8 text-white shadow-xl space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">Questions or Notices?</h2>
                <p className="text-sm text-slate-200">
                  Please direct all legal or billing inquiries to our support desk:
                </p>
                <div className="space-y-2 pt-2 text-sm">
                  <a
                    href="mailto:design@powerdigitizing.com"
                    className="flex items-center gap-3 font-semibold text-slate-100 hover:text-[#C94343] transition-colors"
                  >
                    <Mail className="size-4 text-[#C94343]" />
                    <span>design@powerdigitizing.com</span>
                  </a>
                  {site.contact.phone && (
                    <a
                      href={`tel:${site.contact.phone}`}
                      className="flex items-center gap-3 font-semibold text-slate-100 hover:text-[#C94343] transition-colors"
                    >
                      <Phone className="size-4 text-[#C94343]" />
                      <span>{site.contact.phone}</span>
                    </a>
                  )}
                  {site.contact.address && (
                    <div className="flex items-start gap-3 text-slate-300">
                      <MapPin className="size-4 text-[#C94343] shrink-0 mt-0.5" />
                      <span>{site.contact.address}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                    Legal Navigation
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/privacy-policy"
                      className="flex items-center justify-between rounded-lg border border-border/50 bg-background p-3 text-sm font-semibold text-[#14263D] hover:border-[#C94343]/50 hover:bg-[#C94343]/5 hover:text-[#C94343] transition-colors group"
                    >
                      <span>Privacy Policy</span>
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-[#C94343] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link
                      href="/refund-policy"
                      className="flex items-center justify-between rounded-lg border border-border/50 bg-background p-3 text-sm font-semibold text-[#14263D] hover:border-[#C94343]/50 hover:bg-[#C94343]/5 hover:text-[#C94343] transition-colors group"
                    >
                      <span>Return &amp; Refund Policy</span>
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-[#C94343] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
