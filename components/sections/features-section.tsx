import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { features } from "@/lib/data/features";
import { cn } from "@/lib/utils";

export function FeaturesSection({ limit }: { limit?: number }) {
  const shown = limit ? features.slice(0, limit) : features;

  return (
    <section className="section-padding" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Why you'll feel at home"
          title="Everything a modern hostel should have"
          description="From round-the-clock security to home-cooked meals — every detail is designed for your comfort, safety and peace of mind."
        />
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {shown.map((feature) => (
            <StaggerItem key={feature.title}>
              <article
                className={cn(
                  "group h-full rounded-2xl border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted",
                  feature.highlight && "border-secondary bg-linear-to-br from-secondary/25 to-card dark:from-secondary/40",
                )}
              >
                <span
                  className={cn(
                    "mb-4 flex size-12 items-center justify-center rounded-xl transition-colors duration-300",
                    feature.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/40 text-primary group-hover:bg-primary group-hover:text-primary-foreground dark:bg-secondary dark:text-secondary-foreground",
                  )}
                >
                  <feature.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
