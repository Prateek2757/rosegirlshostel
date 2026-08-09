import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Heart, PartyPopper, Target, Users } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Community",
  description:
    "Rose Girls Hostel has been a safe home for female students and working women in Kathmandu since 2015. Read our story, mission and community life.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To give every girl who comes to Kathmandu for her dreams a home where she is safe, well-fed and free to focus on what matters.",
  },
  {
    icon: Compass,
    title: "Our Vision",
    text: "To set the standard for women's accommodation in Nepal — where 'girls hostel' means premium care, not compromise.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Safety without surveillance-culture, discipline with warmth, and a community where seniors lift juniors up.",
  },
];

const activities = [
  {
    icon: PartyPopper,
    title: "Festival celebrations",
    text: "Dashain tika, Tihar deusi-bhailo, Teej dancing on the terrace — nobody misses home alone here.",
  },
  {
    icon: Users,
    title: "Community life",
    text: "Weekly movie nights, rooftop yoga on Saturdays, and a book club in our mini library.",
  },
  {
    icon: Target,
    title: "Career guidance",
    text: "Monthly sessions with alumnae — doctors, engineers and entrepreneurs who once lived in these rooms.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A decade of being home away from home"
        description="Since 2015, more than a thousand girls have started their Kathmandu journey from our rooms — students, doctors, engineers and dreamers."
        breadcrumbs={[{ name: "About", href: "/about" }]}
      />

      {/* Story */}
      <section className="section-padding pt-4 md:pt-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal from="left">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-lifted">
                <Image
                  src="/images/about-story.svg"
                  alt="The hostel building and garden through the years"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal from="right">
              <span className="mb-3 inline-block rounded-full bg-secondary/40 px-4 py-1.5 text-sm font-medium text-primary dark:bg-secondary dark:text-secondary-foreground">
                Our story
              </span>
              <h2 className="font-heading text-3xl font-semibold text-balance md:text-4xl">
                It started with one sister&apos;s search for a safe room
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  In 2014, our founder spent weeks helping her younger sister find
                  accommodation in Kathmandu — and was shocked by what passed for a
                  &ldquo;girls hostel&rdquo;: dark corridors, cold food, and gates
                  that anyone could walk through.
                </p>
                <p>
                  So she built the hostel she wished existed. {site.name} opened in
                  2015 with twelve beds, a home kitchen, and one rule: every
                  resident is treated like family.
                </p>
                <p>
                  Today we house 200+ residents across four room types, but that
                  rule hasn&apos;t changed. Parents still get a call when their daughter
                  seems unwell. The kitchen still tastes like home.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding bg-muted/50 dark:bg-card/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="What drives us"
            title="Mission, vision and values"
          />
          <Stagger className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <StaggerItem key={value.title} className="h-full">
                <div className="h-full rounded-3xl border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <value.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{value.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Owner message */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Reveal>
            <figure className="relative overflow-hidden rounded-[2.5rem] border bg-card p-8 shadow-soft md:p-12">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgb(248_187_208/0.45),transparent_50%)]"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-start gap-8 md:flex-row">
                <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl shadow-soft md:size-32">
                  <Image
                    src="/images/owner.svg"
                    alt="Portrait of the founder"
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-lg leading-relaxed text-balance md:text-xl">
                    &ldquo;When a parent hands me their daughter&apos;s bags, they are
                    handing me their trust. In ten years, we have never taken that
                    lightly — and we never will.&rdquo;
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="font-heading font-semibold">Sabina Adhikari</p>
                    <p className="text-sm text-muted-foreground">Founder & Director, {site.name}</p>
                  </figcaption>
                </div>
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Resident life */}
      <section className="section-padding bg-muted/50 pt-0 md:pt-0 dark:bg-transparent">
        <div className="mx-auto max-w-7xl px-4 pt-16 md:px-6 md:pt-24">
          <SectionHeading
            eyebrow="Life at Rose"
            title="More than a place to sleep"
            description="Hostel life here means festivals celebrated together, career doors opened, and friendships that outlast graduation."
          />
          <Stagger className="grid gap-6 md:grid-cols-3">
            {activities.map((activity) => (
              <StaggerItem key={activity.title} className="h-full">
                <div className="h-full rounded-3xl border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary/40 text-primary dark:bg-secondary dark:text-secondary-foreground">
                    <activity.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold">{activity.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{activity.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
