import {
  Wifi,
  CookingPot,
  UtensilsCrossed,
  WashingMachine,
  BookOpen,
  GlassWater,
  Zap,
  Cctv,
  Fingerprint,
  Sofa,
  Library,
  Flower2,
  Sun,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Amenity = { icon: LucideIcon; label: string };

export const amenities: Amenity[] = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: CookingPot, label: "Modern Kitchen" },
  { icon: UtensilsCrossed, label: "Dining Hall" },
  { icon: WashingMachine, label: "Laundry" },
  { icon: BookOpen, label: "Study Room" },
  { icon: GlassWater, label: "Water Purifier" },
  { icon: Zap, label: "Generator Backup" },
  { icon: Cctv, label: "CCTV Security" },
  { icon: Fingerprint, label: "Biometric Entry" },
  { icon: Sofa, label: "Common Lounge" },
  { icon: Library, label: "Mini Library" },
  { icon: Flower2, label: "Garden" },
  { icon: Sun, label: "Rooftop Terrace" },
  { icon: Sparkles, label: "Cleaning Service" },
];
