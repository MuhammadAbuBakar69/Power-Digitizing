import type { MetadataRoute } from "next";
import { getSite, getOrigin } from "@/lib/tenant";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const origin = await getOrigin(await getSite());
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${origin}/sitemap.xml` };
}
