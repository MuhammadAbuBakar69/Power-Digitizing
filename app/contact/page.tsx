import type { Metadata } from "next";
import { ContactClient } from "./contact-client";
import { getSite, getOrigin } from "@/lib/tenant";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  const origin = await getOrigin(site);

  return {
    title: `Contact Us | ${site.name}`,
    description: `Connect with ${site.name}. Send your artwork for a complimentary 3D digital proof, exact stitch count, or custom patch quote. Call ${site.contact.phone || "+1 (316) 444-1366"} or email ${site.contact.email}.`,
    keywords: [
      "contact Power Digitizing",
      "embroidery digitizing quote",
      "vector conversion inquiry",
      "custom patches contact",
      "digitizing customer support",
    ],
    openGraph: {
      title: `Contact Us | ${site.name}`,
      description: `Connect with our digitizing and vector team. Free proofs, fast 12-24h turnarounds.`,
      url: `${origin}/contact`,
      siteName: site.name,
      type: "website",
    },
    alternates: {
      canonical: `${origin}/contact`,
    },
  };
}

export default async function ContactPage() {
  const site = await getSite();
  return <ContactClient site={site} />;
}
