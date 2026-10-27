"use client";

import Image from "next/image";

export function WhatsAppButton() {
  const phoneNumber = "13164441366";
  const defaultMessage = encodeURIComponent(
    "Hi Power Digitizing, I have an inquiry about custom patches."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-5 left-5 z-50 flex items-center sm:bottom-6 sm:left-6"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+1 316-444-1366)"
        title="Chat on WhatsApp (+1 316-444-1366)"
        className="group relative flex size-14 sm:size-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] hover:shadow-[0_16px_36px_rgba(37,211,102,0.6)] active:scale-95"
      >
        {/* Subtle breathing ripple glow */}
        <span
          className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-80"
          aria-hidden="true"
        />

        {/* Official WhatsApp Logo Image */}
        <div className="relative size-9 sm:size-10 transition-transform duration-300 group-hover:rotate-6">
          <Image
            src="/images/brand/wa.png"
            alt="WhatsApp"
            fill
            sizes="(max-width: 640px) 36px, 40px"
            className="object-contain drop-shadow"
            priority
          />
        </div>

        {/* Online status indicator dot */}
        <span className="absolute bottom-0.5 right-0.5 flex size-3.5 sm:size-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex size-full rounded-full border-2 border-[#25D366] bg-white" />
        </span>
      </a>
    </aside>
  );
}
