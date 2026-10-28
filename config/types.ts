import { z } from "zod";

export const FONT_KEYS = ["bricolage", "instrument", "inter"] as const;
export const ICON_KEYS = ["needle", "vector", "patch", "shield", "clock", "globe", "headset", "tag", "award", "layers", "truck"] as const;

const navChild = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  description: z.string().optional(),
});
const link = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  children: z.array(navChild).optional(),
});
const color = z.string().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "Use a hex colour");

export const themeSchema = z.object({
  colors: z.object({
    background: color, foreground: color, card: color, muted: color, mutedForeground: color, border: color,
    primary: color, primaryForeground: color, secondary: color, accent: color, accentForeground: color,
  }),
  fonts: z.object({ display: z.enum(FONT_KEYS), body: z.enum(FONT_KEYS) }),
  radius: z.string().default("0.75rem"),
});

export const serviceSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string(),
  description: z.string(),
  benefits: z.array(z.string()).default([]),
  icon: z.enum(ICON_KEYS),
  cta: z.string().default("Explore service"),
  href: z.string().optional(),
  image: z.string().optional(),
});

const aboutSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  paragraphs: z.array(z.string()).min(1),
  highlights: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
});

const portfolioSchema = z.object({
  label: z.string(),
  title: z.string(),
  description: z.string(),
  kind: z.enum(["embroidery", "vector", "patch"]),
  image: z.string().optional(),
});

const useCaseSchema = z.object({ title: z.string(), description: z.string(), icon: z.enum(ICON_KEYS) });
const collectionSchema = z.object({ slug: z.string().regex(/^[a-z0-9-]+$/), name: z.string(), category: z.string(), price: z.string(), description: z.string(), image: z.string() });
const promiseSchema = z.object({ title: z.string(), description: z.string(), icon: z.enum(ICON_KEYS) });
const processSchema = z.object({ step: z.string(), title: z.string(), description: z.string() });

export const siteSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  /** Every hostname that should resolve to this site. Subdomains: list them explicitly or use "*.example.com". */
  domains: z.array(z.string().min(1)).min(1),
  name: z.string(),
  tagline: z.string().optional(),
  logo: z.object({ src: z.string(), alt: z.string(), width: z.number(), height: z.number() }).optional(),
  favicon: z.string().default("/favicon.ico"),
  theme: themeSchema,
  hero: z.object({
    headline: z.array(z.string()).min(1),
    subcopy: z.string(),
    primaryCta: link,
    secondaryCta: link.optional(),
    image: z.string().optional(),
  }),
  /** Only claims the tenant has actually configured are rendered. */
  trust: z.array(z.object({ icon: z.enum(ICON_KEYS), label: z.string() })).default([]),
  about: aboutSchema.optional(),
  useCases: z.array(useCaseSchema).default([]),
  services: z.array(serviceSchema).default([]),
  collections: z.array(collectionSchema).default([]),
  promises: z.array(promiseSchema).default([]),
  process: z.array(processSchema).default([]),
  portfolio: z.array(portfolioSchema).default([]),
  testimonials: z.array(z.object({ name: z.string(), role: z.string().optional(), quote: z.string(), rating: z.number().min(1).max(5).optional() })).default([]),
  stats: z.array(z.object({ label: z.string(), value: z.number(), suffix: z.string().optional() })).default([]),
  faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  navigation: z.array(link).default([]),
  cta: z.object({ primary: link, portalLabel: z.string().default("Customer portal") }),
  contact: z.object({ email: z.string().email(), phone: z.string().optional(), address: z.string().optional() }),
  socials: z.array(link).default([]),
  footer: z.object({ about: z.string(), legalLinks: z.array(link).default([]) }),
  seo: z.object({ title: z.string(), titleTemplate: z.string().default("%s"), description: z.string(), keywords: z.array(z.string()).default([]), ogImage: z.string().optional(), twitterHandle: z.string().optional() }),
  analytics: z.object({ gaId: z.string().optional(), gtmId: z.string().optional(), metaPixelId: z.string().optional() }).default({}),
  portal: z.object({ loginUrl: z.string().optional(), registerUrl: z.string().optional() }).default({}),
  businessType: z.enum(["Organization", "LocalBusiness"]).default("Organization"),
});

export type SiteConfig = z.infer<typeof siteSchema>;
export type SiteInput = z.input<typeof siteSchema>;
export type Service = z.infer<typeof serviceSchema>;

/** Validates at import time so a bad tenant config fails the build, not a visitor's page. */
export function defineSite(input: SiteInput): SiteConfig {
  return siteSchema.parse(input);
}
