import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { RoomCard } from "@/components/shared/room-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqSection } from "@/components/sections/faq-section";
import { rooms } from "@/lib/data/rooms";

export const metadata: Metadata = {
  title: "Rooms & Pricing",
  description:
    "Compare single, twin sharing, triple sharing and deluxe rooms at Rose Girls Hostel, Kathmandu. All rooms include meals, WiFi, laundry and housekeeping.",
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms & pricing"
        title="Choose the room that feels like yours"
        description="Four room types, one promise: clean, safe, fully-furnished living with meals, WiFi, laundry and housekeeping included in every price."
        breadcrumbs={[{ name: "Rooms", href: "/rooms" }]}
      />
      <section className="section-padding pt-4 md:pt-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {rooms.map((room) => (
              <StaggerItem key={room.slug} className="h-full">
                <RoomCard room={room} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <FaqSection />
      <CtaBanner />
    </>
  );
}
