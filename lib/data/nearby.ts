import {
  GraduationCap,
  Stethoscope,
  Bus,
  UtensilsCrossed,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export type NearbyGroup = {
  icon: LucideIcon;
  category: string;
  places: { name: string; distance: string; travelTime: string }[];
};

export const nearbyPlaces: NearbyGroup[] = [
  {
    icon: GraduationCap,
    category: "Colleges & Universities",
    places: [
      { name: "Apex College", distance: "433 m", travelTime: "5–7 min walk" },
      { name: "St. Xavier’s College", distance: "1.4 km", travelTime: "6–10 min ride" },
      { name: "The British College", distance: "1.6 km", travelTime: "7–10 min ride" },
      { name: "Islington College", distance: "1.7 km", travelTime: "8–12 min ride" },
      { name: "ISMT College", distance: "1.6 km", travelTime: "7–10 min ride" },
    ],
  },
  {
    icon: Stethoscope,
    category: "Hospitals & Healthcare",
    places: [
      { name: "Venus Hospital", distance: "299 m", travelTime: "4–5 min walk" },
      { name: "Everest Hospital", distance: "878 m", travelTime: "10–13 min walk" },
      { name: "Swacon International Hospital", distance: "894 m", travelTime: "11–13 min walk · Open 24 hours" },
      { name: "Civil Service Hospital", distance: "1.2 km", travelTime: "5–8 min ride · Open 24 hours" },
      { name: "Blue Cross Hospital", distance: "2 km", travelTime: "8–12 min ride · Open 24 hours" },
    ],
  },
  {
    icon: Bus,
    category: "Public Transport",
    places: [
      { name: "Maitidevi Chowk / Bus Stop", distance: "887 m", travelTime: "11–13 min walk" },
      { name: "Tinkune Bus Stand", distance: "1.5 km", travelTime: "6–10 min ride" },
      { name: "Gaushala Bus Stop", distance: "1.5 km", travelTime: "7–10 min ride" },
    ],
  },
  {
    icon: UtensilsCrossed,
    category: "Cafés & Restaurants",
    places: [
      { name: "Himalayan Java Coffee – New Baneshwor", distance: "933 m", travelTime: "11–14 min walk" },
      { name: "Mero Cafe", distance: "911 m", travelTime: "11–13 min walk" },
      { name: "Go Foodie Cafe", distance: "952 m", travelTime: "12–14 min walk" },
      { name: "The Friends Cafe", distance: "1.1 km", travelTime: "5–8 min ride" },
    ],
  },
  {
    icon: ShoppingBag,
    category: "Shopping & Daily Essentials",
    places: [
      { name: "Bhatbhateni Supermarket – Anamnagar", distance: "726 m", travelTime: "9–11 min walk" },
      { name: "Nature Super Market", distance: "844 m", travelTime: "10–12 min walk" },
      { name: "New Baneshwor, Maitidevi & Anamnagar shopping areas", distance: "Nearby", travelTime: "Short ride" },
    ],
  },
];
