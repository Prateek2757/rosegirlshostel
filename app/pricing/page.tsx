import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { FaqSection } from "@/components/sections/faq-section";
import { formatNpr, rooms } from "@/lib/data/rooms";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent monthly pricing at Rose Girls Hostel, Kathmandu — from Rs. 10,000/month with meals, WiFi, laundry and housekeeping included. No hidden fees.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="One monthly fee. Everything included."
        description="Meals, WiFi, laundry, housekeeping, hot water and power backup are part of every plan — the price you see is the price you pay."
        breadcrumbs={[{ name: "Pricing", href: "/pricing" }]}
      />
      <section className="section-padding pt-4 md:pt-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Stagger className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {rooms.map((room) => (
              <StaggerItem key={room.slug} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted",
                    room.popular && "border-primary ring-2 ring-primary/30",
                  )}
                >
                  {room.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground shadow-soft">
                      Most Popular
                    </Badge>
                  )}
                  <h2 className="font-heading text-lg font-semibold">{room.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{room.tagline}</p>
                  <p className="mt-5 font-heading text-3xl font-bold text-primary dark:text-secondary-foreground">
                    {formatNpr(room.price)}
                    <span className="text-sm font-medium text-muted-foreground"> /month</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={cn("mt-7", !room.popular && "bg-card text-foreground border hover:bg-accent")}
                    variant={room.popular ? "default" : "outline"}
                  >
                    <Link href={`/book?room=${room.slug}`}>Book {room.name}</Link>
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted-foreground">
            One-time refundable deposit: one month&apos;s rent. Admission fee:
            Rs. 2,000. Discounts available for 6-month and annual advance payment.
          </p>
        </div>
      </section>
      <FaqSection />
    </>
  );
}
