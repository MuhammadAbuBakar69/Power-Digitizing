import type { Metadata } from "next";
import { CompanyClient } from "./company-client";
import { getSite, getOrigin } from "@/lib/tenant";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  const origin = await getOrigin(site);

  return {
    title: "Our Company | Embroidery Digitizing & Patch Maker",
    description:
      "Power Digitizing is a US embroidery digitizing company and custom patch maker. Hand-made stitch files, vector art, and patches since 2010.",
    keywords: [
      "embroidery digitizing company",
      "custom patch manufacturer",
      "patch maker",
      "embroidery digitizing and vector art",
      "hand digitizing",
      "manual digitizing",
      "Power Digitizing company",
    ],
    openGraph: {
      title: `Our Company | Embroidery Digitizing & Patch Maker | ${site.name}`,
      description:
        "Power Digitizing is a US embroidery digitizing company and custom patch maker. Hand-made stitch files, vector art, and patches since 2010.",
      url: `${origin}/company`,
      siteName: site.name,
      type: "website",
    },
    alternates: {
      canonical: `${origin}/company`,
    },
  };
}

export default async function CompanyPage() {
  const site = await getSite();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: "https://powerdigitizing.com",
    logo: "https://powerdigitizing.com/images/brand/aaaa.PNG",
    description:
      "Power Digitizing is a US embroidery digitizing company and custom patch maker. Hand-made stitch files, vector art, and patches since 2010.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "16192 Coastal Hwy",
      addressLocality: "Lewes",
      addressRegion: "DE",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-316-444-1366",
      contactType: "customer service",
      email: "design@powerdigitizing.com",
    },
    sameAs: [
      "https://www.facebook.com/powerdigitizings07",
      "https://www.instagram.com/power_digitizing/",
      "https://x.com/Powerdigitizing",
      "https://www.etsy.com/shop/PowerDigitizing",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CompanyClient />
    </>
  );
}
