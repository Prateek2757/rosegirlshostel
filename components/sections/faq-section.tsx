import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { FaqJsonLd } from "@/components/shared/json-ld";
import { faqs } from "@/lib/data/faqs";

export function FaqSection() {
  return (
    <section className="section-padding bg-muted/50 dark:bg-card/30" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions parents and students ask"
          description="Can't find your answer? Call us any time during office hours — we're happy to help."
        />
        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${i}`}
                className="rounded-2xl border bg-card px-6 shadow-soft last:border-b"
              >
                <AccordionTrigger className="py-4 text-left font-heading text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
      <FaqJsonLd />
    </section>
  );
}
