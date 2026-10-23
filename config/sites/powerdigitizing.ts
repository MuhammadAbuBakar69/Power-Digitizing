import { siteContent } from "../content";
import { defineSite } from "../types";

export default defineSite({
  id: "powerdigitizing",
  domains: ["powerdigitizing.com", "www.powerdigitizing.com"],
  theme: {
    colors: {
      background: "#FFFFFF",
      foreground: "#14263D",
      card: "#FFFFFF",
      muted: "#F8FAFC",
      mutedForeground: "#5B6B7F",
      border: "#E2E8F0",
      primary: "#14263D",
      primaryForeground: "#FFFFFF",
      secondary: "#0B1626",
      accent: "#C94343",
      accentForeground: "#FFFFFF",
    },
    fonts: { display: "bricolage", body: "instrument" },
    radius: "0.5rem",
  },
  logo: {
    src: "/images/brand/aaaa.PNG",
    alt: "Power Digitizing - Custom Patches & Precision Embroidery Digitizing",
    width: 292,
    height: 131,
  },
  favicon: "/images/brand/wa.png",
  ...siteContent,
});
