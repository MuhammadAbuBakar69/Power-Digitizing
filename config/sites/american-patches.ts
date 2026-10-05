import { siteContent } from "../content";
import { defineSite } from "../types";

export default defineSite({
  id: "american-patches",
  domains: ["theamericanpatches.com", "www.theamericanpatches.com"],
  theme: {
    colors: {
      background: "#FFFFFF", foreground: "#231F20", card: "#FFFFFF", muted: "#FFFFFF", mutedForeground: "#231F20", border: "#231F20",
      primary: "#DA2C46", primaryForeground: "#FFFFFF", secondary: "#231F20", accent: "#FF9C00", accentForeground: "#231F20",
    },
    fonts: { display: "bricolage", body: "instrument" },
    radius: "0.35rem",
  },
  ...siteContent,
});
