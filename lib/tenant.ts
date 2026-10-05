import { cache } from "react";
import { headers } from "next/headers";
import { SITES } from "@/config/sites";
import type { SiteConfig } from "@/config/types";

export const TENANT_HEADER = "x-tenant-host";

export function normalizeHost(raw: string | null | undefined): string {
  return (raw ?? "").toLowerCase().split(":")[0].trim();
}

function matches(pattern: string, host: string): boolean {
  if (pattern.startsWith("*.")) return host.endsWith(pattern.slice(1)); // "*.a.com" -> ".a.com"
  return pattern === host;
}

export function resolveSite(host: string): SiteConfig {
  const exact = SITES.find((s) => s.domains.some((d) => !d.startsWith("*.") && d === host));
  const site = exact ?? SITES.find((s) => s.domains.some((d) => matches(d, host)));
  if (site) return site;
  const fallback = SITES.find((s) => s.id === process.env.DEFAULT_SITE_ID) ?? SITES[0];
  return fallback;
}

/** Cached per request. Call from any server component, layout, sitemap or metadata function. */
export const getSite = cache(async (): Promise<SiteConfig> => {
  const h = await headers();
  return resolveSite(normalizeHost(h.get(TENANT_HEADER) ?? h.get("host")));
});

export async function getOrigin(site: SiteConfig): Promise<string> {
  const h = await headers();
  const host = normalizeHost(h.get(TENANT_HEADER) ?? h.get("host"));
  const known = site.domains.some((d) => matches(d, host));
  const canonicalHost = known ? host : site.domains.find((d) => !d.startsWith("*.")) ?? host;
  const proto = canonicalHost.startsWith("localhost") ? "http" : "https";
  return `${proto}://${canonicalHost}`;
}
