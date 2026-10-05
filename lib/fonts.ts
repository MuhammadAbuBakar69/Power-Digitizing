import { Bricolage_Grotesque, Instrument_Sans, Inter } from "next/font/google";

// next/font needs static declarations, so tenants choose from this registry by key (see FONT_KEYS).
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const fontVariables = [bricolage.variable, instrument.variable, inter.variable].join(" ");
