import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/data/site";

export function CtaBanner() {
  return (
    <section className="section-padding" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#7a1640] via-[#c2185b] to-primary px-6 py-10 text-center shadow-lifted md:px-16 md:py-15 dark:from-[#211b1f] dark:via-[#3a2931] dark:to-[#9d315b]">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgb(252_228_236/0.30),transparent_50%)]"
              aria-hidden="true"
            />
            <div className="relative">
              <h2
                id="cta-heading"
                className="mx-auto max-w-2xl font-heading text-3xl font-bold text-balance text-white md:text-4xl"
              >
                Limited rooms available for the new semester
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Visit us this week, meet the community, taste the food — and see
                why 200+ girls call {site.shortName} home.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-13 rounded-full bg-gold px-8 text-base font-semibold text-gold-foreground shadow-lifted transition-transform duration-200 hover:scale-[1.03] hover:bg-gold/90"
                >
                  <Link href="/book">Reserve Your Room</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-13 rounded-full border-white/40 bg-white/10 px-8 text-base text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/20 hover:text-white"
                >
                  <a href={`tel:${site.mobile}`}>
                    <Phone className="size-5" /> {site.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
