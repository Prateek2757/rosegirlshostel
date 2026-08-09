import { BadgeCheck, Clock3, ShieldCheck, Wallet } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { BookingForm } from "@/components/sections/booking-form";

const assurances = [
  {
    icon: Clock3,
    title: "Reply within hours",
    text: "We confirm availability and call you back the same day.",
  },
  {
    icon: Wallet,
    title: "No hidden charges",
    text: "One transparent monthly fee — meals, WiFi and laundry included.",
  },
  {
    icon: ShieldCheck,
    title: "Visit before you decide",
    text: "Tour the hostel with your parents before paying anything.",
  },
  {
    icon: BadgeCheck,
    title: "Refundable deposit",
    text: "One month's deposit, returned in full when you leave.",
  },
];

export function BookingSection({ defaultRoom }: { defaultRoom?: string }) {
  return (
    <section className="section-padding" aria-labelledby="booking-heading" id="book">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Book your room"
              title="Your new home is one inquiry away"
              description="Fill in the form and we'll get back to you within a few hours — or drop by for chiya and a tour, no appointment needed."
              className="mb-8"
            />
            <Reveal delay={0.1}>
              <ul className="space-y-5">
                {assurances.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary/40 text-primary dark:bg-secondary dark:text-secondary-foreground">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-heading font-semibold">{item.title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal from="right">
            <BookingForm defaultRoom={defaultRoom} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
