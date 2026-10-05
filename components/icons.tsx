import { Award, Clock, Globe, Headset, Layers, Scissors, ShieldCheck, Tag, PenTool, Shirt, type LucideIcon } from "lucide-react";
import type { ICON_KEYS } from "@/config/types";

const MAP: Record<(typeof ICON_KEYS)[number], LucideIcon> = {
  needle: Scissors, vector: PenTool, patch: Shirt, shield: ShieldCheck, clock: Clock,
  globe: Globe, headset: Headset, tag: Tag, award: Award, layers: Layers,
};

export function Icon({ name, className }: { name: keyof typeof MAP; className?: string }) {
  const C = MAP[name];
  return <C aria-hidden className={className} />;
}
