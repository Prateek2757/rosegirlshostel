import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Ruler, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { RoomCard } from "@/components/shared/room-card";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getRoom, rooms } from "@/lib/data/rooms";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return {};
  return {
    title: `${room.name} — Rose Girls Hostel`,
    description: `${room.description} Book the ${room.name} at Rose Girls Hostel, Kathmandu.`,
    alternates: { canonical: `/rooms/${room.slug}` },
  };
}

export default async function RoomDetailPage({ params }: Props) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.slug !== room.slug);

  return (
    <>
      <PageHero
        eyebrow="Room details"
        title={room.name}
        description={room.tagline}
        breadcrumbs={[
          { name: "Rooms", href: "/rooms" },
          { name: room.name, href: `/rooms/${room.slug}` },
        ]}
      />

      <section className="section-padding pt-4 md:pt-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <Reveal from="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lifted">
                <Image
                  src={room.image}
                  alt={`${room.name} at Rose Girls Hostel`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {room.popular && (
                  <Badge className="absolute top-4 left-4 bg-gold text-gold-foreground shadow-soft">
                    Most Popular
                  </Badge>
                )}
              </div>
            </Reveal>

            <Reveal from="right">
              <p className="font-heading text-3xl font-bold text-primary dark:text-secondary-foreground">
                Enquire for Current Rates
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Contact us for availability and the best plan for your stay.
              </p>

              <div className="mt-5 flex gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Ruler className="size-4.5 text-primary" aria-hidden="true" />
                  {room.size}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="size-4.5 text-primary" aria-hidden="true" />
                  {room.capacity} {room.capacity === 1 ? "person" : "people"}
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-muted-foreground">{room.description}</p>

              <h2 className="mt-8 font-heading text-lg font-semibold">What&apos;s included</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {room.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href={`/book?room=${room.slug}`}>Book This Room</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                  <Link href="/contact">Schedule a Visit</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="mt-20">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-semibold">Other rooms</h2>
              <Button asChild variant="ghost">
                <Link href="/rooms">
                  <ArrowLeft className="size-4" /> All rooms
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {otherRooms.map((other) => (
                <RoomCard key={other.slug} room={other} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
