"use client";

import Image from "next/image";

export function WhatsAppButton() {
  const phoneNumber = "14093022660";
  const formattedPhone = "+1 409-302-2660";
  const defaultMessage = encodeURIComponent(
    "Hi Power Digitizing, I have an inquiry about custom patches."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="WhatsApp customer support"
      className="fixed bottom-5 left-5 z-50 flex items-center sm:bottom-6 sm:left-6"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with Power Digitizing at ${formattedPhone}`}
        className="group relative flex items-center gap-2.5 sm:gap-3 rounded-full bg-white/95 p-1.5 pr-4 sm:p-2 sm:pr-5 shadow-[0_10px_28px_rgba(0,0,0,0.14)] backdrop-blur-md border border-[#25D366]/35 transition-all duration-300 hover:scale-105 hover:border-[#25D366] hover:shadow-[0_14px_35px_rgba(37,211,102,0.28)] active:scale-95"
      >
        {/* Glowing ripple background on hover */}
        <span
          className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* WhatsApp Logo Image */}
        <div className="relative flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] p-1.5 shadow-sm transition-transform duration-300 group-hover:rotate-6">
          <Image
            src="/images/brand/wa.png"
            alt="WhatsApp logo"
            width={44}
            height={44}
            className="size-full object-contain"
            priority
          />
          {/* Online green indicator dot */}
          <span className="absolute -bottom-0.5 -right-0.5 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex size-3 rounded-full border-2 border-white bg-[#25D366]" />
          </span>
        </div>

        {/* Text Details: WhatsApp & Phone Number */}
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#25D366]">
              WhatsApp Chat
            </span>
            <span className="size-1.5 rounded-full bg-[#25D366] animate-pulse" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#14263D] tracking-tight group-hover:text-[#25D366] transition-colors">
            {formattedPhone}
          </span>
        </div>
      </a>
    </aside>
  );
}
