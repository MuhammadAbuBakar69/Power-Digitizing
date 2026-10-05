import type { CSSProperties } from "react";
import type { SiteConfig } from "@/config/types";

/** Turns a tenant theme into CSS variables consumed by Tailwind tokens in globals.css. */
export function themeStyle(site: SiteConfig): CSSProperties {
  const c = site.theme.colors;
  return {
    "--background": c.background, "--foreground": c.foreground, "--card": c.card, "--muted": c.muted,
    "--muted-foreground": c.mutedForeground, "--border": c.border, "--primary": c.primary,
    "--primary-foreground": c.primaryForeground, "--secondary": c.secondary, "--accent": c.accent,
    "--accent-foreground": c.accentForeground, "--radius": site.theme.radius,
    "--font-display-active": `var(--font-${site.theme.fonts.display})`,
    "--font-body-active": `var(--font-${site.theme.fonts.body})`,
  } as CSSProperties;
}
