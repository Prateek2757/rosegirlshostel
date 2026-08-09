import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Facilities & Safety Standards",
  description:
    "Explore the facilities at Rose Girls Hostel — 24/7 security, CCTV, biometric entry, study hall, high-speed WiFi, laundry, power backup and more.",
  alternates: { canonical: "/facilities" },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Built around safety, comfort and study"
        description="Every facility — from biometric entry to the midnight study hall — exists to make your stay safe, healthy and productive."
        breadcrumbs={[{ name: "Facilities", href: "/facilities" }]}
      />
      <FeaturesSection />
      <AmenitiesSection />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
