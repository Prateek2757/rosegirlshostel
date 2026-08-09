import { Footprints } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { nearbyPlaces } from "@/lib/data/nearby";
import { site } from "@/lib/data/site";

export function LocationSection() {
  return (
    <section className="section-padding bg-muted/50 dark:bg-card/30" aria-labelledby="location-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Location"
          title="In the heart of New Baneshwor"
          description="Walking distance to major colleges, hospitals and the city's best-connected bus stop."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal from="left" className="overflow-hidden rounded-3xl border shadow-soft">
            <iframe
              src={site.mapEmbedFallback}
              title={`Map showing the location of ${site.name} in New Baneshwor, Kathmandu`}
              className="h-full min-h-[380px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {nearbyPlaces.map((group) => (
              <StaggerItem key={group.category} className="h-full">
                <div className="h-full rounded-2xl border bg-card p-5 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-secondary/40 text-primary dark:bg-secondary dark:text-secondary-foreground">
                      <group.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-sm font-semibold">{group.category}</h3>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {group.places.map((place) => (
                      <li key={place.name} className="text-sm">
                        <span className="block leading-snug">{place.name}</span>
                        <span className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Footprints className="size-3.5 text-primary" aria-hidden="true" />
                          {place.distance} · {place.walkTime}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
