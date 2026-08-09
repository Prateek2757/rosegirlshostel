/**
 * Global site identity and contact details.
 * Update this single file when the hostel's real details change.
 */
export const site = {
  name: "Rose Girls Hostel",
  shortName: "Rose",
  tagline: "A Safe & Comfortable Home for Girls in Kathmandu",
  description:
    "Rose Girls Hostel offers safe, clean and affordable accommodation for female students and working women in Kathmandu — with healthy home-cooked meals, 24/7 security, high-speed WiFi and a warm, supportive community.",
  url: "https://www.rosegirlshostel.com",
  phone: "+977-1-4567890",
  mobile: "+9779841000000",
  whatsapp: "9779841000000",
  email: "hello@rosegirlshostel.com",
  emergencyPhone: "+9779841000001",
  address: {
    street: "Shantinagar Marg, New Baneshwor",
    city: "Kathmandu",
    postalCode: "44600",
    country: "Nepal",
    /** Coordinates used for the map embed and LocalBusiness schema. */
    lat: 27.6915,
    lng: 85.3420,
  },
  openingHours: "Sun–Sat: 6:00 AM – 9:00 PM (office), residents 24/7",
  googleRating: 4.8,
  reviewCount: 168,
  social: {
    facebook: "https://facebook.com/rosegirlshostel",
    instagram: "https://instagram.com/rosegirlshostel",
    tiktok: "https://tiktok.com/@rosegirlshostel",
    youtube: "https://youtube.com/@rosegirlshostel",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=New+Baneshwor,+Kathmandu,+Nepal&zoom=16",
  /** Fallback embed that works without an API key. */
  mapEmbedFallback:
    "https://maps.google.com/maps?q=New%20Baneshwor%2C%20Kathmandu&t=&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

export const heroStats = [
  { value: 200, suffix: "+", label: "Happy Residents" },
  { value: 24, suffix: "/7", label: "Security" },
  { value: 100, suffix: " Mbps", label: "Free WiFi" },
  { value: 3, suffix: " Meals", label: "Healthy Food Daily" },
] as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Food", href: "/food" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Rooms & Pricing", href: "/rooms" },
      { label: "Facilities", href: "/facilities" },
      { label: "Gallery", href: "/gallery" },
      { label: "Food Menu", href: "/food" },
      { label: "About Us", href: "/about" },
    ],
  },
  {
    title: "Residents",
    links: [
      { label: "Book a Room", href: "/book" },
      { label: "Hostel Rules", href: "/rules" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];
