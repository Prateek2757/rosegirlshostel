import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FoodSection } from "@/components/sections/food-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Food & Weekly Menu",
  description:
    "Healthy, home-cooked meals three times a day at Rose Girls Hostel — see the full weekly menu with vegetarian options and festival specials.",
  alternates: { canonical: "/food" },
};

export default function FoodPage() {
  return (
    <>
      <PageHero
        eyebrow="Food"
        title="Fresh, healthy and cooked with care"
        description="Our in-house kitchen serves three balanced meals daily — dal bhat done right, momo Fridays, and vegetarian options at every meal."
        breadcrumbs={[{ name: "Food", href: "/food" }]}
      />
      <FoodSection full />
      <CtaBanner />
    </>
  );
}
