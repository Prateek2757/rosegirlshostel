"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarCheck, Check, Play, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/motion/counter";
import { heroStats, site } from "@/lib/data/site";
import heroImage from "@/public/images/hostel-exterior.webp";

export function Hero() {
  const reduced = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.65, 0.36, 1] as const },
  });

  return (
    <section className="relative flex min-h-[760px] flex-col justify-center overflow-hidden lg:min-h-[min(860px,100svh)]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#171216]/95 via-[#21181d]/80 to-[#171216]/15" />
        <div className="absolute inset-0 bg-linear-to-t from-[#171216]/75 via-transparent to-[#171216]/20" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-12 md:px-8 lg:pt-36 lg:pb-14">
        <motion.p
          {...fadeUp(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
        >
          <ShieldCheck className="size-4 text-[#f9a8c4]" aria-hidden="true" />
          Trusted by 200+ families across Nepal since 2015
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="max-w-2xl font-heading text-5xl leading-[1.03] font-bold tracking-[-0.035em] text-balance text-white sm:text-6xl lg:text-7xl"
        >
          Feel at home. <span className="text-[#f472a1]">Live with confidence.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg"
        >
          Affordable rooms with modern amenities, healthy food, 24/7 security,
          and a welcoming environment — minutes from colleges, hospitals and
          public transport.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap items-center gap-3">
          <Button
            asChild
            size="lg"
            className="h-13 rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-lifted transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            <Link href="/book">Explore Rooms <ArrowRight className="size-4" /></Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-13 rounded-xl border-white/20 bg-white/10 px-6 text-base text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/20 hover:text-white"
          >
            <Link href="/contact">
              <CalendarCheck className="size-5" /> Schedule a Visit
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="h-13 rounded-xl px-4 text-base text-white/85 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">
              <span className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <Play className="size-4 fill-current" aria-hidden="true" />
              </span>
              Watch Hostel Tour
            </a>
          </Button>
        </motion.div>

        {/* Floating stats */}
        <motion.dl
          {...fadeUp(0.45)}
          className="mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 backdrop-blur-md lg:mt-14 lg:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#171216]/70 p-4 transition-colors duration-200 hover:bg-[#21181d]/85 sm:p-5"
            >
              <dt className="mt-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white/60"><Check className="size-3 text-[#f472a1]" />{stat.label}</dt>
              <dd className="font-heading text-2xl font-bold text-white sm:text-3xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Bottom fade into page background */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
