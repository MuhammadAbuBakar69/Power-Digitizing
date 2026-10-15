import type { Metadata } from "next";
import { BlogClient } from "./blog-client";
import { getSite, getOrigin } from "@/lib/tenant";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  const origin = await getOrigin(site);

  return {
    title: `Blog & Embroidery Guides | ${site.name}`,
    description:
      "Explore comprehensive guides on embroidery digitizing, custom patch selection, PVC vs embroidered patches, vector artwork prep, and apparel branding.",
    keywords: [
      "embroidery digitizing blog",
      "custom patch guides",
      "PVC patch comparison",
      "vector art tips",
      "embroidered patch care",
      "patch design tutorials",
    ],
    openGraph: {
      title: `Blog & Embroidery Resources | ${site.name}`,
      description:
        "Learn expert techniques for custom patches, vector conversion, and embroidery digitizing from Power Digitizing craft leads.",
      url: `${origin}/blog`,
      siteName: site.name,
      type: "website",
    },
    alternates: {
      canonical: `${origin}/blog`,
    },
  };
}

export default function BlogPage() {
  return <BlogClient />;
}
