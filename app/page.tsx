import { Hero } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { RoomsSection } from "@/components/sections/rooms-section";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { FoodSection } from "@/components/sections/food-section";
import { LocationSection } from "@/components/sections/location-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { BookingSection } from "@/components/sections/booking-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesSection limit={10} />
      <RoomsSection />
      {/* <AmenitiesSection /> */}
      <WhyChooseUs />
      <GalleryPreview />
      <FoodSection />
      <LocationSection />
      <TestimonialsSection />
      <FaqSection />
      <BookingSection />
    </>
  );
}
