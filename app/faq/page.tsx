import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Rose Girls Hostel — safety, meals, visiting hours, deposits, booking and more.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything you (and your parents) want to know"
        description="Honest answers to the questions we hear most — and if yours isn't here, just call us."
        breadcrumbs={[{ name: "FAQ", href: "/faq" }]}
      />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
