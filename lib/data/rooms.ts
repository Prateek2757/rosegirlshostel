export type Room = {
  slug: string;
  name: string;
  tagline: string;
  /** Monthly price in NPR. */
  price: number;
  size: string;
  capacity: number;
  image: string;
  popular?: boolean;
  features: string[];
  description: string;
};

export const rooms: Room[] = [
  {
    slug: "single-room",
    name: "Single Room",
    tagline: "Your own private space",
    price: 18000,
    size: "120 sq. ft.",
    capacity: 1,
    image: "/images/room-single.svg",
    features: [
      "Private attached bathroom",
      "Study desk & ergonomic chair",
      "Large wardrobe",
      "Daily housekeeping",
      "Hot water 24/7",
      "High-speed WiFi",
    ],
    description:
      "A quiet, private room ideal for medical students and professionals who value focus and personal space. Fully furnished with a comfortable single bed, study desk, and plenty of natural light.",
  },
  {
    slug: "twin-sharing",
    name: "Twin Sharing",
    tagline: "Comfort with a companion",
    price: 13000,
    size: "160 sq. ft.",
    capacity: 2,
    popular: true,
    image: "/images/room-twin.svg",
    features: [
      "Two single beds with storage",
      "Individual study desks",
      "Shared attached bathroom",
      "Daily housekeeping",
      "Hot water 24/7",
      "High-speed WiFi",
    ],
    description:
      "Our most popular option — a spacious room shared between two residents, with individual beds, desks and wardrobes. Great balance of affordability and comfort.",
  },
  {
    slug: "triple-sharing",
    name: "Triple Sharing",
    tagline: "Budget-friendly & social",
    price: 10000,
    size: "200 sq. ft.",
    capacity: 3,
    image: "/images/room-triple.svg",
    features: [
      "Three beds with under-bed storage",
      "Shared study area",
      "Attached bathroom",
      "Daily housekeeping",
      "Hot water 24/7",
      "High-speed WiFi",
    ],
    description:
      "The most affordable way to live comfortably in Kathmandu. Perfect for undergraduate students who enjoy company and want to keep costs low without compromising on cleanliness or safety.",
  },
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Premium living, hotel-grade comfort",
    price: 25000,
    size: "180 sq. ft.",
    capacity: 1,
    image: "/images/room-deluxe.svg",
    features: [
      "Queen-size bed with premium mattress",
      "Private balcony with city view",
      "En-suite bathroom with geyser",
      "Mini refrigerator & kettle",
      "Air conditioning",
      "Priority housekeeping",
    ],
    description:
      "Our finest room — a hotel-grade private suite with a balcony, premium furnishing and extra amenities. Designed for working professionals and long-stay international students.",
  },
];

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);

export const formatNpr = (amount: number) =>
  `Rs. ${amount.toLocaleString("en-IN")}`;
