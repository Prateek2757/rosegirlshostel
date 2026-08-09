import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { RoomCard } from "@/components/shared/room-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { rooms } from "@/lib/data/rooms";

export function RoomsSection({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section className="section-padding bg-muted/50 dark:bg-card/30" aria-labelledby="rooms-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Rooms & pricing"
          title="Find the room that fits you"
          description="Every room comes fully furnished with meals, WiFi, laundry and housekeeping included — no hidden charges, ever."
        />
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {rooms.map((room) => (
            <StaggerItem key={room.slug} className="h-full">
              <RoomCard room={room} />
            </StaggerItem>
          ))}
        </Stagger>
        {showAllLink && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/rooms">
                Compare all rooms <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
