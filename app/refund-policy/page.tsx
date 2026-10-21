import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Mail, Phone, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";
import { getSite } from "@/lib/tenant";

export const metadata: Metadata = {
  title: "Refund Policy | Power Digitizing",
  description:
    "Official Return and Refund Policy of Power Digitizing. Learn about our 100% satisfaction commitment, 10-day revision window, and refund procedures for embroidery digitizing and vector conversion.",
};

export default async function RefundPolicyPage() {
  const site = await getSite();

  const refundTerms = [
    {
      number: "01",
      title: "Critique & Revision Window",
      text: "If you appear to have been unsatisfied with the artwork provided to you, we are open to critiques. You can email us at design@powerdigitizing.com to register your issues, and our senior digitizers and vector artists will work diligently to rectify any concerns.",
    },
    {
      number: "02",
      title: "Lodge a Refund Request",
      text: "Should you not be ensured or satisfied by our response, you can lodge a refund request at design@powerdigitizing.com. Please do not forget to mention your order number, date of delivery, and the name of the representative with whom you were dealing.",
    },
    {
      number: "03",
      title: "10-Day Eligibility Window",
      text: "Refund requests must be submitted within 10 days of final files delivery. Requests submitted after this 10-day period are not eligible for refunds as the digital production files have been released.",
    },
    {
      number: "04",
      title: "Dispute Resolution & Alternatives",
      text: "Please note that powerdigitizing.com has full rights to attempt to solve your disputes, and try to provide you with better solutions other than refunds (such as complete redigitization or file re-engineering). Should it not satisfy you, a refund would surely be made.",
    },
    {
      number: "05",
      title: "Transaction & Transfer Deductions",
      text: "Any charges that have been incurred in the transfer of funds to and from powerdigitizing.com (such as payment processing fees or banking transaction costs) would not be reimbursed and payments would be made after deduction.",
    },
    {
      number: "06",
      title: "Taxation & Service Charges",
      text: "Refunds would be subject to any taxation, currency conversion rates, or applicable services charges if legally mandated.",
    },
    {
      number: "07",
      title: "Non-Transferability",
      text: "Refunds would not be made to any other persons, company, website, or projects ongoing at powerdigitizing.com. Refunds are only processed directly back to the original funding account and customer.",
    },
    {
      number: "08",
      title: "Full & Final Decision Rights",
      text: "Any decisions regarding refunds would be full and final. powerdigitizing.com has full rights to change, amend, modify, add, or erase any terms or conditions of this refund policy.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background pt-28 pb-16 md:pt-36 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-[#14263D]/5 blur-[120px]"
        />

        <div className="relative mx-auto max-w-4xl px-5 text-center">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <Link href="/" className="hover:text-[#C94343] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-muted-foreground/60" />
            <span className="text-[#14263D] font-semibold">Refund Policy</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#14263D]/10 bg-[#14263D]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C94343]">
            <ShieldCheck className="size-3.5" />
            <span>Customer Satisfaction &amp; Assurity</span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#14263D]">
            Return &amp; Refund Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Thank you for using Power Digitizing for your embroidery digitizing, vector artwork conversion, and custom patches. Our refund policy exists to ensure that our clients receive 100% assurity and satisfaction.
          </p>
        </div>
      </section>

      {/* ─── Policy Content ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          {/* Introduction Card */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="font-display text-xl font-bold text-[#14263D] flex items-center gap-2.5">
              <CheckCircle2 className="size-5 text-[#C94343]" />
              <span>100% Satisfaction Commitment</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Please read this policy carefully. This is the Return and Refund Policy of Power Digitizing. We take immense pride in our manual digitizing craftsmanship and razor-sharp vector recreation. Terms and conditions related to Refunds are outlined below:
            </p>
          </div>

          {/* Numbered Terms Grid */}
          <div className="mt-8 space-y-4">
            {refundTerms.map((term) => (
              <div
                key={term.number}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-[#14263D]/30 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#14263D]/5 font-display text-sm font-bold text-[#C94343] group-hover:bg-[#C94343] group-hover:text-white transition-colors">
                    {term.number}
                  </div>
                  <div className="space-y-1.5 pt-0.5">
                    <h3 className="font-display text-base font-bold text-[#14263D]">
                      {term.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {term.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Section */}
          <div className="mt-12 rounded-2xl border-2 border-[#14263D]/10 bg-gradient-to-br from-card via-card to-[#14263D]/5 p-8 shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C94343]">
                  <HelpCircle className="size-4" />
                  <span>Have Questions or Need Help?</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#14263D]">
                  Contact Our Support Atelier
                </h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  If you have any questions about our Returns and Refunds Policy or wish to discuss an order with our quality team, reach out directly.
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C94343] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#b03535] transition-all hover:-translate-y-0.5"
                >
                  <Mail className="size-4" />
                  <span>{site.contact.email}</span>
                </a>
                {site.contact.phone && (
                  <a
                    href={`tel:${site.contact.phone.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-[#14263D] hover:border-[#14263D] transition-colors"
                  >
                    <Phone className="size-4 text-[#C94343]" />
                    <span>{site.contact.phone}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-6 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-[#14263D] transition-colors underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-[#14263D] transition-colors underline underline-offset-4">
                Contact Us
              </Link>
              <Link href="/quote" className="hover:text-[#C94343] transition-colors font-semibold">
                Get Instant Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
