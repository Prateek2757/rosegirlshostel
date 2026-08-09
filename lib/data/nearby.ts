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
  places: { name: string; distance: string; walkTime: string }[];
};

export const nearbyPlaces: NearbyGroup[] = [
  {
    icon: GraduationCap,
    category: "Colleges & Universities",
    places: [
      { name: "Tribhuvan University (New Baneshwor campus)", distance: "600 m", walkTime: "8 min" },
      { name: "Kathmandu Model College", distance: "450 m", walkTime: "6 min" },
      { name: "Apex College", distance: "900 m", walkTime: "12 min" },
      { name: "Islington College", distance: "1.8 km", walkTime: "10 min by bus" },
    ],
  },
  {
    icon: Stethoscope,
    category: "Hospitals",
    places: [
      { name: "Civil Service Hospital", distance: "800 m", walkTime: "10 min" },
      { name: "Everest Hospital", distance: "1.1 km", walkTime: "14 min" },
      { name: "Blue Cross Hospital", distance: "1.5 km", walkTime: "8 min by bus" },
    ],
  },
  {
    icon: Bus,
    category: "Public Transport",
    places: [
      { name: "New Baneshwor bus stop", distance: "150 m", walkTime: "2 min" },
      { name: "Sajha Yatayat route stop", distance: "300 m", walkTime: "4 min" },
      { name: "Koteshwor junction", distance: "1.6 km", walkTime: "9 min by bus" },
    ],
  },
  {
    icon: UtensilsCrossed,
    category: "Cafés & Restaurants",
    places: [
      { name: "Himalayan Java Coffee", distance: "350 m", walkTime: "5 min" },
      { name: "Bota Momo", distance: "500 m", walkTime: "7 min" },
      { name: "Local food court", distance: "250 m", walkTime: "3 min" },
    ],
  },
  {
    icon: ShoppingBag,
    category: "Shopping",
    places: [
      { name: "Bhatbhateni Supermarket", distance: "700 m", walkTime: "9 min" },
      { name: "City Center Mall", distance: "2.2 km", walkTime: "12 min by bus" },
      { name: "Local vegetable market", distance: "200 m", walkTime: "3 min" },
    ],
  },
];
