import type { SiteConfig } from "../types";
import powerdigitizing from "./powerdigitizing";
import client001 from "./client-001";
import americanPatches from "./american-patches";

/** Register every tenant here. Later this registry can be swapped for a database/CMS lookup without touching components. */
export const SITES: SiteConfig[] = [americanPatches, powerdigitizing, client001];
