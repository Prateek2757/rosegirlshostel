import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { foodHighlights, weeklyMenu } from "@/lib/data/menu";

export function FoodSection({ full = false }: { full?: boolean }) {
  const days = full ? weeklyMenu : weeklyMenu.slice(0, 3);

  return (
    <section className="section-padding" aria-labelledby="food-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Healthy food, every day"
          title="Meals that taste like home"
          description="Three fresh meals a day from our in-house kitchen — balanced, hygienic and always with vegetarian options."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal from="left">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-lifted">
              <Image
                src="/images/food-hero.svg"
                alt="Dining hall with freshly prepared Nepali meals"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {foodHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Leaf className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal from="right">
            <div className="overflow-hidden rounded-3xl border bg-card shadow-soft">
              <div className="border-b bg-primary/5 px-6 py-4 dark:bg-primary/10">
                <h3 className="font-heading text-lg font-semibold">
                  {full ? "Weekly menu" : "This week's highlights"}
                </h3>
              </div>
              <div className="divide-y">
                {days.map((menu) => (
                  <div key={menu.day} className="px-6 py-4">
                    <p className="font-heading text-sm font-semibold text-primary dark:text-secondary-foreground">
                      {menu.day}
                    </p>
                    <dl className="mt-2 space-y-1.5 text-sm">
                      {(
                        [
                          ["Breakfast", menu.breakfast],
                          ["Lunch", menu.lunch],
                          ["Dinner", menu.dinner],
                        ] as const
                      ).map(([label, value]) => (
                        <div key={label} className="flex gap-2">
                          <dt className="w-20 shrink-0 font-medium text-muted-foreground">
                            {label}
                          </dt>
                          <dd className="leading-relaxed">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
              {!full && (
                <div className="border-t px-6 py-4">
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/food">
                      See the full weekly menu <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
