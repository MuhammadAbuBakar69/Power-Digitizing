"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  MapPin,
  Phone,
  Check,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
} from "lucide-react";
import type { SiteConfig } from "@/config/types";

export function ContactClient({ site }: { site: SiteConfig }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<string[]>(["Embroidery digitizing"]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const availableServices = [
    "Embroidery digitizing",
    "3D puff headwear",
    "Vector art conversion",
    "Custom patch manufacturing",
    "Jacket back tapestry",
    "Other inquiries",
  ];

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#1E1E1E] selection:bg-[#C94343] selection:text-white font-sans">
      {/* 1-Inch Gap (pt-24 md:pt-32) from navbar */}
      <div className="px-5 sm:px-6 lg:px-8 xl:px-10 pt-24 pb-20 md:pt-32 md:pb-28 max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto">
        {/* Main Card Container inspired by the Untitled UI design */}
        <div className="rounded-[2.5rem] bg-white border border-[#E8E6E0] shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* ─── LEFT COLUMN: CONTACT DETAILS & SOCIALS ─── */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
              <div className="space-y-8">
                {/* Brand Logo & Name */}
                <Link href="/" className="inline-flex items-center gap-3 group">
                  <span className="grid size-10 place-items-center rounded-xl bg-[#C94343] text-white font-display font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
                    P
                  </span>
                  <div>
                    <span className="font-display text-xl font-bold tracking-tight text-[#1A1A1A] block">
                      {site.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#777] block">
                      STUDIO & PRODUCTION LAB
                    </span>
                  </div>
                </Link>

                {/* Contact Items List */}
                <div className="space-y-6 pt-4">
                  {/* Chat to us */}
                  <div className="flex items-start gap-4">
                    <div className="grid size-11 place-items-center rounded-full border border-[#E6E4DD] bg-[#FAFAF7] text-[#1A1A1A] shrink-0 shadow-sm">
                      <MessageSquare className="size-5 text-[#C94343]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-[#1A1A1A]">Chat to us</h4>
                      <p className="text-xs text-[#666] leading-relaxed">
                        Our friendly digitizing team is here to help with your files.
                      </p>
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="text-xs font-semibold text-[#1A1A1A] underline underline-offset-4 hover:text-[#C94343] transition-colors block pt-0.5"
                      >
                        {site.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Visit us */}
                  <div className="flex items-start gap-4">
                    <div className="grid size-11 place-items-center rounded-full border border-[#E6E4DD] bg-[#FAFAF7] text-[#1A1A1A] shrink-0 shadow-sm">
                      <MapPin className="size-5 text-[#C94343]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-[#1A1A1A]">Visit us</h4>
                      <p className="text-xs text-[#666] leading-relaxed">
                        Come say hello at our production HQ.
                      </p>
                      <p className="text-xs font-medium text-[#1A1A1A] pt-0.5">
                        {site.contact.address || "16192 Coastal Hwy, Lewes, DE, United States"}
                      </p>
                    </div>
                  </div>

                  {/* Call us */}
                  <div className="flex items-start gap-4">
                    <div className="grid size-11 place-items-center rounded-full border border-[#E6E4DD] bg-[#FAFAF7] text-[#1A1A1A] shrink-0 shadow-sm">
                      <Phone className="size-5 text-[#C94343]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-[#1A1A1A]">Call us</h4>
                      <p className="text-xs text-[#666] leading-relaxed">
                        Mon–Sat from 8am to 8pm EST.
                      </p>
                      <a
                        href={`tel:${site.contact.phone || "+13164441366"}`}
                        className="text-xs font-semibold text-[#1A1A1A] hover:text-[#C94343] transition-colors block pt-0.5"
                      >
                        {site.contact.phone || "+1 (316) 444-1366"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons Strip (Matching Untitled UI bottom left) */}
              <div className="pt-8 border-t border-[#F0EEE8]">
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/powerdigitizings07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-9 place-items-center rounded-lg border border-[#E5E3DC] text-[#555] hover:text-[#C94343] hover:border-[#C94343] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="size-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/power_digitizing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-9 place-items-center rounded-lg border border-[#E5E3DC] text-[#555] hover:text-[#C94343] hover:border-[#C94343] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="size-4" />
                  </a>
                  <a
                    href="https://wa.me/14093022660"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-9 place-items-center rounded-lg border border-[#E5E3DC] text-[#555] hover:text-[#25D366] hover:border-[#25D366] transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.217 8.217 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m-3.53 3.61c-.19 0-.42.07-.63.32-.22.25-.83.81-.83 1.98s.85 2.3.97 2.46c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.16 1.49.1.45-.07 1.4-.57 1.6-1.13.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.4-.69-1.62-.77c-.22-.08-.37-.12-.53.12-.16.25-.61.77-.75.93-.14.16-.28.18-.52.06s-1.01-.37-1.93-1.19c-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.27-.72-1.74c-.19-.46-.39-.4-.53-.41h-.45z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-9 place-items-center rounded-lg border border-[#E5E3DC] text-[#555] hover:text-[#C94343] hover:border-[#C94343] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-4" />
                  </a>
                  <a
                    href="https://powerdigitizing.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-9 place-items-center rounded-lg border border-[#E5E3DC] text-[#555] hover:text-[#C94343] hover:border-[#C94343] transition-colors"
                    aria-label="Website"
                  >
                    <Globe className="size-4" />
                  </a>
                </div>
                <p className="mt-4 text-[11px] font-mono uppercase tracking-wider text-[#999]">
                  AVERAGE RESPONSE TIME: &lt; 2 HOURS
                </p>
              </div>
            </div>

            {/* ─── RIGHT COLUMN: THEMED COLOR FORM CARD ─── */}
            <div className="lg:col-span-7">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#C94343] via-[#D1233F] to-[#B31A33] text-white p-7 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
                {/* Subtle decorative glow */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 size-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />

                <div>
                  {/* Headline & Subhead */}
                  <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] font-bold tracking-tight leading-[1.15] text-white">
                    Got ideas? We&apos;ve got <br />
                    the skills. Let&apos;s team up.
                  </h2>
                  <p className="mt-3 text-sm text-white/85 font-light">
                    Tell us more about yourself and what you&apos;ve got in mind.
                  </p>

                  {/* Form */}
                  {submitted ? (
                    <div className="mt-10 p-8 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-center space-y-4 animate-in fade-in duration-300">
                      <div className="mx-auto grid size-12 place-items-center rounded-full bg-white text-[#C94343] shadow-lg">
                        <Check className="size-6 stroke-[3]" />
                      </div>
                      <h3 className="font-display text-xl font-bold">Message Received!</h3>
                      <p className="text-xs sm:text-sm text-white/90 max-w-sm mx-auto leading-relaxed">
                        Thank you, <strong>{name || "friend"}</strong>. Our senior digitizers will review your project details and get back to you within 2 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setName("");
                          setEmail("");
                          setMessage("");
                        }}
                        className="inline-flex items-center gap-2 rounded-full bg-white text-[#C94343] px-6 py-2.5 text-xs font-bold shadow-md hover:bg-white/90 transition-colors"
                      >
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-7">
                      {/* Name input */}
                      <div className="space-y-1">
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full bg-transparent border-b border-white/40 pb-2.5 text-sm sm:text-base text-white placeholder:text-white/60 focus:border-white focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full bg-transparent border-b border-white/40 pb-2.5 text-sm sm:text-base text-white placeholder:text-white/60 focus:border-white focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Project description textarea */}
                      <div className="space-y-1">
                        <textarea
                          rows={2}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us a little about the project..."
                          className="w-full bg-transparent border-b border-white/40 pb-2.5 text-sm sm:text-base text-white placeholder:text-white/60 focus:border-white focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      {/* How can we help? Checkbox Grid */}
                      <div className="space-y-3 pt-2">
                        <p className="text-xs font-medium text-white/80">How can we help?</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {availableServices.map((service) => {
                            const isChecked = services.includes(service);
                            return (
                              <button
                                key={service}
                                type="button"
                                onClick={() => toggleService(service)}
                                className="flex items-center gap-2.5 text-left group"
                              >
                                <span
                                  className={`size-4 rounded border flex items-center justify-center transition-colors ${
                                    isChecked
                                      ? "bg-white border-white text-[#C94343]"
                                      : "border-white/50 bg-white/10 group-hover:border-white"
                                  }`}
                                >
                                  {isChecked && <Check className="size-3 stroke-[3]" />}
                                </span>
                                <span
                                  className={`text-xs ${
                                    isChecked ? "font-semibold text-white" : "text-white/80"
                                  }`}
                                >
                                  {service}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Submit Button (Dark pill button matching Untitled UI design) */}
                      <div className="pt-3">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full rounded-xl bg-[#231F20] text-white py-4 px-6 text-sm font-bold tracking-wide shadow-lg hover:bg-black transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <span>Preparing your message...</span>
                          ) : (
                            <>
                              <span>Let&apos;s get started!</span>
                              <Send className="size-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                {/* Bottom Trust Line */}
                <div className="mt-8 pt-4 border-t border-white/20 flex items-center justify-between text-[11px] text-white/70 font-mono">
                  <span>FREE DIGITAL PROOF INCLUDED</span>
                  <span>CONFIDENTIAL NDA RESPECTED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── STUDIO HOURS, GLOBAL PRODUCTION LABS & SUPPORT TIERS ─── */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#E8E6E0] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#777]">OPERATING HOURS</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Now
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-[#1A1A1A]">Studio & Production Lab</h3>
            <ul className="mt-4 space-y-2.5 text-xs text-[#555]">
              <li className="flex justify-between border-b border-[#F0EEE8] pb-1.5">
                <span>Monday – Friday</span>
                <span className="font-semibold text-[#1A1A1A]">8:00 AM – 8:00 PM EST</span>
              </li>
              <li className="flex justify-between border-b border-[#F0EEE8] pb-1.5">
                <span>Saturday</span>
                <span className="font-semibold text-[#1A1A1A]">9:00 AM – 5:00 PM EST</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-primary">Emergency Rush Only</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#E8E6E0] bg-white p-6 shadow-sm">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#777]">PRODUCTION SPEED</span>
            <h3 className="mt-4 font-display text-lg font-bold text-[#1A1A1A]">Turnaround Options</h3>
            <ul className="mt-4 space-y-2.5 text-xs text-[#555]">
              <li className="flex justify-between border-b border-[#F0EEE8] pb-1.5">
                <span>Standard Proofing</span>
                <span className="font-semibold text-[#1A1A1A]">12–24 Hours (Free)</span>
              </li>
              <li className="flex justify-between border-b border-[#F0EEE8] pb-1.5">
                <span>Same-Day Rush</span>
                <span className="font-semibold text-primary">2–4 Hours</span>
              </li>
              <li className="flex justify-between">
                <span>Physical Patches</span>
                <span className="font-semibold text-[#1A1A1A]">7–10 Business Days</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#E8E6E0] bg-white p-6 shadow-sm">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#777]">WHOLESALE & CONTRACT</span>
            <h3 className="mt-4 font-display text-lg font-bold text-[#1A1A1A]">Contract Decorator Program</h3>
            <p className="mt-3 text-xs leading-relaxed text-[#666]">
              Embroidery shops, screen printers, and uniform providers ordering 20+ designs monthly receive dedicated senior punchers, Net-30 invoicing, and volume discounts.
            </p>
            <a
              href="mailto:wholesale@powerdigitizing.com"
              className="mt-4 inline-block text-xs font-bold text-[#C94343] hover:underline"
            >
              Inquire about contract rates →
            </a>
          </div>
        </div>

        {/* ─── CONTACT FAQ QUICK ACCORDION ─── */}
        <div className="mt-14 rounded-2xl border border-[#E8E6E0] bg-white p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl">
            <p className="text-[11px] font-mono uppercase tracking-widest text-primary">QUICK ANSWERS</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-[#1A1A1A]">Before You Reach Out</h3>
            <p className="mt-1 text-xs text-[#666]">
              Common questions about submitting artwork, file formats, and free edits.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#F0EEE8] bg-[#FAFAF7] p-5">
              <h4 className="text-sm font-bold text-[#1A1A1A]">Can I send a photo of an existing garment or patch?</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#666]">
                Yes! Take a flat, well-lit photo with a coin or ruler next to it for scale. Our team can redraw and digitize directly from photos.
              </p>
            </div>

            <div className="rounded-xl border border-[#F0EEE8] bg-[#FAFAF7] p-5">
              <h4 className="text-sm font-bold text-[#1A1A1A]">What if the file needs tweaks after stitch-out?</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#666]">
                All adjustments are 100% free! Tell us which fabric you ran it on and where puckering or loops occurred, and we calibrate within 2 hours.
              </p>
            </div>

            <div className="rounded-xl border border-[#F0EEE8] bg-[#FAFAF7] p-5">
              <h4 className="text-sm font-bold text-[#1A1A1A]">What machine brands do you support?</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#666]">
                Tajima, Barudan, Brother, Melco, HappyJapan, SWF, Ricoma, Janome, ZSK, and Husqvarna. We include machine-ready files in all orders.
              </p>
            </div>

            <div className="rounded-xl border border-[#F0EEE8] bg-[#FAFAF7] p-5">
              <h4 className="text-sm font-bold text-[#1A1A1A]">Do you sign Non-Disclosure Agreements (NDAs)?</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#666]">
                Yes, absolutely. We respect brand confidentiality for upcoming fashion lines, athletic merch, and proprietary logos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
