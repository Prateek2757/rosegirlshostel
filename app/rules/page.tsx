import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ruleGroups } from "@/lib/data/rules";

export const metadata: Metadata = {
  title: "Hostel Rules",
  description:
    "House rules at Rose Girls Hostel — entry timings, visitor policy, quiet hours, meal timings and payment terms. Clear, fair and designed for everyone's safety.",
  alternates: { canonical: "/rules" },
};

export default function RulesPage() {
  return (
    <>
      <PageHero
        eyebrow="House rules"
        title="Clear rules, fair to everyone"
        description="Our rules exist for one reason: so 200+ residents can live together safely and comfortably. Nothing here is arbitrary."
        breadcrumbs={[{ name: "Hostel Rules", href: "/rules" }]}
      />
      <section className="section-padding pt-4 md:pt-6">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Stagger className="grid gap-6 md:grid-cols-2">
            {ruleGroups.map((group) => (
              <StaggerItem key={group.title} className="h-full">
                <div className="h-full rounded-3xl border bg-card p-7 shadow-soft">
                  <h2 className="font-heading text-lg font-semibold text-primary dark:text-secondary-foreground">
                    {group.title}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {group.rules.map((rule) => (
                      <li key={rule} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
