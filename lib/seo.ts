import type { Metadata } from "next";
import type { SiteConfig } from "@/config/types";

export function buildMetadata(site: SiteConfig, origin: string): Metadata {
  const og = site.seo.ogImage ? [{ url: site.seo.ogImage }] : undefined;
  return {
    metadataBase: new URL(origin),
    title: { default: site.seo.title, template: site.seo.titleTemplate },
    description: site.seo.description,
    keywords: site.seo.keywords,
    robots: {
      index: true,
      follow: false,
      googleBot: {
        index: true,
        follow: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "hQ9qNGyTKvu7sI_LZTKi7kZqAdvQYU38hw5g71o6rgE",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", sizes: "512x512", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
      shortcut: [{ url: "/favicon.ico" }],
    },
    twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description, site: site.seo.twitterHandle, images: og?.map((i) => i.url) },
  };
}

export function organizationJsonLd(site: SiteConfig, origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": site.businessType,
    name: site.name,
    url: origin,
    description: site.seo.description,
    email: site.contact.email,
    ...(site.contact.phone && { telephone: site.contact.phone }),
    ...(site.contact.address && { address: site.contact.address }),
    ...(site.logo && { logo: new URL(site.logo.src, origin).toString() }),
    ...(site.socials.length && { sameAs: site.socials.map((s) => s.href) }),
  };
}

export function faqJsonLd(site: SiteConfig) {
  if (!site.faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

/** Escapes "<" so tenant content can never close the script tag. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
