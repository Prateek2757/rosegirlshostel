import {
  Shield,
  Cctv,
  Users,
  UtensilsCrossed,
  Wifi,
  Zap,
  WashingMachine,
  Sparkles,
  Droplets,
  BookOpen,
  TreePine,
  Car,
  Bus,
  Siren,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Highlighted features get the gold treatment on the homepage grid. */
  highlight?: boolean;
};

export const features: Feature[] = [
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Trained female guards on duty round the clock, every day of the year.",
    highlight: true,
  },
  {
    icon: Cctv,
    title: "CCTV Monitoring",
    description: "All entrances and common areas covered with modern surveillance.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Female Staff",
    description: "Wardens, cooks and housekeeping — an all-women support team.",
    highlight: true,
  },
  {
    icon: UtensilsCrossed,
    title: "Home-Cooked Meals",
    description: "Three fresh, healthy meals daily with vegetarian options.",
    highlight: true,
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "100 Mbps fiber internet across all rooms and study areas.",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Full generator and inverter backup — study without interruption.",
  },
  {
    icon: WashingMachine,
    title: "Laundry Service",
    description: "Weekly laundry included, with self-service machines available.",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description: "Rooms and common areas cleaned and sanitized every day.",
  },
  {
    icon: Droplets,
    title: "Hot Water 24/7",
    description: "Solar and geyser-backed hot water in every bathroom.",
  },
  {
    icon: BookOpen,
    title: "Quiet Study Area",
    description: "A dedicated, silent study hall open until midnight.",
  },
  {
    icon: TreePine,
    title: "Peaceful Environment",
    description: "A calm residential lane, away from traffic noise.",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Secure scooter and bicycle parking inside the compound.",
  },
  {
    icon: Bus,
    title: "Near Public Transport",
    description: "2 minutes' walk to the New Baneshwor bus stop.",
  },
  {
    icon: Siren,
    title: "Emergency Support",
    description: "On-call warden, first-aid trained staff and hospital tie-up.",
  },
  {
    icon: ClipboardCheck,
    title: "Visitor Management",
    description: "Registered visitor entry with parent notification system.",
  },
];
