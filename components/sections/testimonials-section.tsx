"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/lib/data/testimonials";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn(
            "size-4",
            i < rating ? "fill-gold text-gold" : "text-muted-foreground/30",
          )}
        />
      ))}
    </div>
  );
}

const roleBadge: Record<string, string> = {
  student: "Student",
  parent: "Parent",
  professional: "Professional",
};

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, []);

  // Keep the active dot in sync while the user swipes.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 1;
      setIndex(Math.round(track.scrollLeft / (cardWidth + 24)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const step = (dir: 1 | -1) => {
    const next = Math.min(Math.max(index + dir, 0), testimonials.length - 1);
    setIndex(next);
    scrollTo(next);
  };

  return (
    <section className="section-padding" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by residents and trusted by parents"
          description={`Rated ${site.googleRating} out of 5 from ${site.reviewCount}+ Google reviews.`}
        />

        <Reveal>
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Resident and parent reviews carousel"
          >
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="w-[85%] shrink-0 snap-center rounded-3xl border bg-card p-7 shadow-soft sm:w-[45%] lg:w-[31%]"
              >
                <div className="flex items-center justify-between">
                  <Quote className="size-8 text-secondary dark:text-secondary-foreground/40" aria-hidden="true" />
                  <span className="rounded-full bg-secondary/40 px-3 py-1 text-xs font-medium text-primary dark:bg-secondary dark:text-secondary-foreground">
                    {roleBadge[t.type]}
                  </span>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t pt-4">
                  <div>
                    <p className="font-heading text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <Stars rating={t.rating} />
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Previous review"
              onClick={() => step(-1)}
              disabled={index === 0}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <div className="flex gap-2" role="tablist" aria-label="Review pages">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => {
                    setIndex(i);
                    scrollTo(i);
                  }}
                  className={cn(
                    "size-2.5 rounded-full transition-colors duration-200",
                    i === index ? "bg-primary" : "bg-border hover:bg-muted-foreground/40",
                  )}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Next review"
              onClick={() => step(1)}
              disabled={index === testimonials.length - 1}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
