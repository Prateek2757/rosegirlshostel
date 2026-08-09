import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { BookingSection } from "@/components/sections/booking-section";
import { rooms } from "@/lib/data/rooms";

export const metadata: Metadata = {
  title: "Book a Room",
  description:
    "Reserve a room or schedule a visit at Rose Girls Hostel, Kathmandu. Quick online inquiry — we respond within hours, no advance payment needed to visit.",
  alternates: { canonical: "/book" },
};

type Props = { searchParams: Promise<{ room?: string }> };

export default async function BookPage({ searchParams }: Props) {
  const { room } = await searchParams;
  const defaultRoom = rooms.some((r) => r.slug === room) ? room : undefined;

  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Reserve your room in minutes"
        description="Choose a room, pick your move-in date, and we'll handle the rest. Prefer to see it first? Book a free visit — chiya is on us."
        breadcrumbs={[{ name: "Book a Room", href: "/book" }]}
      />
      <BookingSection defaultRoom={defaultRoom} />
    </>
  );
}
