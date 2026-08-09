import Image from "next/image";
import Link from "next/link";
import { Check, Ruler, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Room } from "@/lib/data/rooms";

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lifted">
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={room.image}
          alt={`${room.name} at Rose Girls Hostel`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {room.popular && (
          <Badge className="absolute top-4 left-4 bg-gold text-gold-foreground shadow-soft">
            Most Popular
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-semibold">{room.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{room.tagline}</p>

        <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Ruler className="size-4 text-primary" aria-hidden="true" />
            {room.size}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="size-4 text-primary" aria-hidden="true" />
            {room.capacity} {room.capacity === 1 ? "person" : "people"}
          </span>
        </div>

        <ul className="mt-4 space-y-2">
          {room.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-2.5 pt-6">
          <Button asChild className="flex-1">
            <Link href={`/book?room=${room.slug}`}>Book Now</Link>
          </Button>
          <Button asChild variant="outline"  className="flex-1">
            <Link href={`/rooms/${room.slug}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
