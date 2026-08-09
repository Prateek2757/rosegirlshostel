import { CheckCircle2, XCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { comparison } from "@/lib/data/comparison";
import { site } from "@/lib/data/site";

export function WhyChooseUs() {
  return (
    <section
      className="section-padding bg-gradient-to-b from-muted/60 to-background dark:from-card/40"
      aria-labelledby="compare-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Why choose us"
          title="See the difference for yourself"
          description="We built this hostel around what actually matters to residents and their parents — here's how we compare."
        />

        <Reveal>
          <div className="overflow-hidden rounded-3xl border shadow-soft">
            {/* Header row */}
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] bg-card text-sm font-semibold md:text-base">
              <div className="p-4 md:p-5" />
              <div className="border-l bg-primary p-4 text-center font-heading text-primary-foreground md:p-5">
                {site.shortName}
              </div>
              <div className="border-l p-4 text-center font-heading text-muted-foreground md:p-5">
                Typical Hostels
              </div>
            </div>

            {comparison.map((row, i) => (
              <div
                key={row.aspect}
                className={`grid grid-cols-[1fr_1.4fr_1.4fr] text-sm ${
                  i % 2 === 0 ? "bg-muted/50 dark:bg-muted/30" : "bg-card"
                }`}
              >
                <div className="flex items-center p-4 font-medium md:p-5">{row.aspect}</div>
                <div className="flex items-start gap-2 border-l bg-secondary/15 p-4 md:p-5 dark:bg-secondary/20">
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-success"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{row.ours}</span>
                </div>
                <div className="flex items-start gap-2 border-l p-4 text-muted-foreground md:p-5">
                  <XCircle
                    className="mt-0.5 size-4 shrink-0 text-destructive/70"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
