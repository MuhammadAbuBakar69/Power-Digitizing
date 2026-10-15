import type { MetadataRoute } from "next";
import { getSite, getOrigin } from "@/lib/tenant";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const site = await getSite();
  const origin = await getOrigin(site);
  const paths = ["/", "/about", "/collections", ...site.services.map((s) => `/services/${s.slug}`)];
  return paths.map((p) => ({ url: origin + p, lastModified: new Date() }));
}
