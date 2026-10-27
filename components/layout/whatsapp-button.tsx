"use client";

import React from "react";

export function WhatsAppButton() {
  const phoneNumber = "14093022660";
  const defaultMessage = encodeURIComponent(
    "Hi Power Digitizing, I have an inquiry about custom patches."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-5 left-5 z-40 flex items-center sm:bottom-6 sm:left-6"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+1 409-302-2660)"
        className="group relative flex items-center gap-2.5 rounded-full bg-[#25D366] p-3 sm:px-4 sm:py-3 text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:bg-[#20bd5a] hover:scale-105 hover:shadow-[0_14px_30px_rgba(37,211,102,0.55)] active:scale-95"
      >
        {/* Subtle breathing ripple glow */}
        <span
          className="absolute -inset-1 -z-10 rounded-full bg-[#25D366]/40 opacity-75 blur-sm transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* WhatsApp Vector Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 shrink-0 transition-transform duration-300 group-hover:rotate-12"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.217 8.217 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m-3.53 3.61c-.19 0-.42.07-.63.32-.22.25-.83.81-.83 1.98s.85 2.3.97 2.46c.12.16 1.66 2.54 4.03 3.56.56.24 1 .39 1.34.5.57.18 1.08.16 1.49.1.45-.07 1.4-.57 1.6-1.13.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28s-1.4-.69-1.62-.77c-.22-.08-.37-.12-.53.12-.16.25-.61.77-.75.93-.14.16-.28.18-.52.06s-1.01-.37-1.93-1.19c-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.53-1.27-.72-1.74c-.19-.46-.39-.4-.53-.41h-.45z" />
        </svg>

        {/* Text Pill (Visible on sm+ screens, compact icon on small mobile) */}
        <span className="hidden sm:flex flex-col text-left leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-wider text-white/85">
            Online now
          </span>
          <span className="text-xs font-bold tracking-tight">
            Chat on WhatsApp
          </span>
        </span>

        {/* Online pulse dot */}
        <span className="relative flex size-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-white" />
        </span>
      </a>
    </aside>
  );
}
