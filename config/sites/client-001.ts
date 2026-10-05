import { defineSite } from "../types";

// Example second tenant: different brand, colours, fonts and services, same components.
export default defineSite({
  id: "client-001",
  domains: ["client-001.example.com", "*.client-001.example.com"],
  name: "Northline Stitch Co.",
  tagline: "Team apparel decoration",
  theme: {
    colors: {
      background: "#FAF8F5", foreground: "#1B1B1F", card: "#FFFFFF", muted: "#ECE8E1", mutedForeground: "#5A564F", border: "#DDD7CC",
      primary: "#0F5E4D", primaryForeground: "#FFFFFF", secondary: "#1B1B1F", accent: "#C79A2B", accentForeground: "#1B1B1F",
    },
    fonts: { display: "inter", body: "inter" },
    radius: "0.25rem",
  },
  hero: {
    headline: ["Stitched for", "your whole team."],
    subcopy: "Custom embroidery files and patches for clubs, crews and small businesses.",
    primaryCta: { label: "Start an order", href: "/contact" },
  },
  trust: [{ icon: "clock", label: "Quick proofs" }],
  services: [
    { slug: "team-digitizing", name: "Team logo digitizing", icon: "needle", description: "Production-ready files for caps, jackets and polos.", benefits: ["Cap and flat formats"] },
  ],
  navigation: [{ label: "Home", href: "/" }, { label: "Services", href: "/#services" }, { label: "Contact", href: "/contact" }],
  cta: { primary: { label: "Start an order", href: "/contact" }, portalLabel: "Account" },
  contact: { email: "hello@client-001.example.com" },
  footer: { about: "Team apparel decoration.", legalLinks: [] },
  seo: { title: "Northline Stitch Co.", description: "Custom embroidery files and patches for teams." },
});
