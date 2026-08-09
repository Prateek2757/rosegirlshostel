import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { BookingForm } from "@/components/sections/booking-form";
import { LocationSection } from "@/components/sections/location-section";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Rose Girls Hostel in New Baneshwor, Kathmandu — call, WhatsApp, email or visit us. Emergency contact available 24/7 for residents and parents.",
  alternates: { canonical: "/contact" },
};

const contactItems = [
  {
    icon: Phone,
    title: "Phone",
    lines: [site.phone],
    href: `tel:${site.mobile}`,
  },
  {
    icon: Mail,
    title: "Email",
    lines: [site.email],
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    title: "Address",
    lines: [site.address.street, `${site.address.city}, ${site.address.country}`],
  },
  {
    icon: Clock3,
    title: "Office Hours",
    lines: [site.openingHours],
  },
  {
    icon: Siren,
    title: "Emergency (24/7)",
    lines: [site.emergencyPhone],
    href: `tel:${site.emergencyPhone}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us — we actually pick up"
        description="Questions about rooms, food or safety? Call, WhatsApp, or drop by for a tour. Parents are always welcome."
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <section className="section-padding pt-4 md:pt-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.3fr]">
            <Reveal from="left">
              <ul className="space-y-4">
                {contactItems.map((item) => (
                  <li
                    key={item.title}
                    className="flex gap-4 rounded-2xl border bg-card p-5 shadow-soft"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary/40 text-primary dark:bg-secondary dark:text-secondary-foreground">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-heading text-sm font-semibold">{item.title}</p>
                      {item.lines.map((line) =>
                        item.href ? (
                          <a
                            key={line}
                            href={item.href}
                            className="mt-0.5 block text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="mt-0.5 text-sm text-muted-foreground">
                            {line}
                          </p>
                        ),
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-6 w-full bg-[#25D366] text-white hover:bg-[#1fb857]"
              >
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! I have a question about the hostel.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-5" /> Chat on WhatsApp
                </a>
              </Button>
            </Reveal>

            <Reveal from="right">
              <BookingForm />
            </Reveal>
          </div>
        </div>
      </section>

      <LocationSection />
    </>
  );
}
