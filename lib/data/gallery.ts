export type GalleryCategory =
  | "All"
  | "Rooms"
  | "Food"
  | "Study Area"
  | "Washrooms"
  | "Building"
  | "Events"
  | "Terrace"
  | "Garden"
  | "Common Area";

export type GalleryImage = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  /** Aspect ratio hint used by the masonry layout. */
  aspect: "portrait" | "landscape" | "square";
};

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Rooms",
  "Food",
  "Study Area",
  "Washrooms",
  "Building",
  "Events",
  "Terrace",
  "Garden",
  "Common Area",
];

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery-room-1.svg", alt: "Bright single room with study desk and garden view", category: "Rooms", aspect: "landscape" },
  { src: "/images/gallery-building.svg", alt: "Front view of the hostel building at golden hour", category: "Building", aspect: "portrait" },
  { src: "/images/gallery-food-1.svg", alt: "Freshly prepared Nepali thali served in the dining hall", category: "Food", aspect: "square" },
  { src: "/images/gallery-study.svg", alt: "Quiet study hall with individual desks and warm lighting", category: "Study Area", aspect: "landscape" },
  { src: "/images/gallery-terrace.svg", alt: "Rooftop terrace with mountain views and seating", category: "Terrace", aspect: "landscape" },
  { src: "/images/gallery-room-2.svg", alt: "Twin sharing room with two beds and wardrobes", category: "Rooms", aspect: "portrait" },
  { src: "/images/gallery-garden.svg", alt: "Green garden courtyard with flowering plants", category: "Garden", aspect: "square" },
  { src: "/images/gallery-event.svg", alt: "Residents celebrating Tihar with candles and rangoli", category: "Events", aspect: "landscape" },
  { src: "/images/gallery-common.svg", alt: "Common lounge with sofas, TV and board games", category: "Common Area", aspect: "landscape" },
  { src: "/images/gallery-washroom.svg", alt: "Clean modern washroom with hot water shower", category: "Washrooms", aspect: "portrait" },
  { src: "/images/gallery-food-2.svg", alt: "Healthy breakfast spread with fruits and porridge", category: "Food", aspect: "landscape" },
  { src: "/images/gallery-room-3.svg", alt: "Deluxe room with queen bed and private balcony", category: "Rooms", aspect: "square" },
];
