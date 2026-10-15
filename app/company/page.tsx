import type { Metadata } from "next";
import { CompanyClient } from "./company-client";
import { getSite, getOrigin } from "@/lib/tenant";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  const origin = await getOrigin(site);

  return {
    title: `Our Company & Innovation Lab | ${site.name}`,
    description:
      "Explore the engineering and technology behind Power Digitizing: CNC toolpath generation, G-code / DST translation, high-precision vector artwork, and digital proofing.",
    keywords: [
      "embroidery engineering",
      "G-code plotter digitizing",
      "DST file toolpath",
      "digital proofing technology",
      "Power Digitizing company",
      "developer embroidery pipeline",
    ],
    openGraph: {
      title: `Our Company & Innovation Lab | ${site.name}`,
      description:
        "Where software engineering meets precision embroidery machines and custom patches.",
      url: `${origin}/company`,
      siteName: site.name,
      type: "website",
    },
    alternates: {
      canonical: `${origin}/company`,
    },
  };
}

export default function CompanyPage() {
  return <CompanyClient />;
}
