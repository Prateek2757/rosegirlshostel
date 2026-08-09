import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { amenities } from "@/lib/data/amenities";

export function AmenitiesSection() {
  return (
    <section className="section-padding" aria-labelledby="amenities-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Amenities"
          title="Thoughtful facilities, all included"
          description="No add-ons or surprise fees — every amenity below is part of your stay."
        />
        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-7">
          {amenities.map((amenity) => (
            <StaggerItem key={amenity.label}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border bg-card px-3 py-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lifted">
                <span className="flex size-11 items-center justify-center rounded-full bg-secondary/40 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground dark:bg-secondary dark:text-secondary-foreground">
                  <amenity.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium">{amenity.label}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
