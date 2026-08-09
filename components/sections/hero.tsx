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
    <section className="relative flex min-h-[860px] flex-col justify-center overflow-hidden lg:min-h-[min(920px,100svh)]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center] sm:object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,18,21,0.91)_0%,rgba(28,20,23,0.74)_38%,rgba(25,20,22,0.30)_70%,rgba(20,20,20,0.08)_100%)] max-md:bg-[linear-gradient(90deg,rgba(25,18,21,0.91)_0%,rgba(28,20,23,0.75)_60%,rgba(25,20,22,0.38)_100%)]" />
        <div className="absolute inset-0 bg-linear-to-t from-[#1d1719]/60 via-transparent to-[#1d1719]/12" />
        <div className="hero-grain absolute inset-0 opacity-30" />
      </div>

      <div className="mx-auto w-full max-w-[1360px] px-5 pt-28 pb-12 md:px-8 lg:px-10 lg:pt-32 lg:pb-10">
        <div className="max-w-[720px]">
          <motion.p
            {...fadeUp(0)}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#fff9f5]/15 bg-[#2b2024]/40 px-4 py-2.5 text-[13px] font-medium text-[#eee5e8] shadow-[0_8px_30px_rgb(0_0_0/0.10)] backdrop-blur-md"
          >
            <ShieldCheck className="size-4 text-[#c8a46a]" aria-hidden="true" />
            Trusted by 50+ families since 2024
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="max-w-[700px] font-heading text-[clamp(3rem,6.1vw,5rem)] leading-[1.01] font-bold tracking-[-0.045em] text-balance"
          >
            <span className="block text-[#fff9f5]">Feel at home.</span>
            <span className="block text-[#d84372]">Live with confidence.</span>
          </motion.h1>

          <motion.div {...fadeUp(0.2)} className="mt-6 max-w-[610px]">
            <p className="text-base leading-7 text-[#e2d9dc] sm:text-lg sm:leading-8">
              Safe, comfortable living designed for students and young women —
              with healthy meals, modern amenities and everything you need close
              to home.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#cfc4c8] sm:text-[15px]">
              Conveniently located near colleges, hospitals and public transport.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.32)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-14 w-full rounded-[14px] bg-[#c51f57] px-6 text-base font-semibold text-[#fff9f5] shadow-[0_12px_28px_rgb(138_17_62/0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b7194e] hover:shadow-[0_15px_32px_rgb(138_17_62/0.28)] sm:w-auto"
            >
              <Link href="/rooms">Explore Rooms <ArrowRight className="size-4" /></Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-[14px] border-[#fff9f5]/25 bg-[#fff9f5]/8 px-6 text-base font-semibold text-[#fff9f5] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[#fff9f5]/40 hover:bg-[#fff9f5]/14 hover:text-white sm:w-auto"
            >
              <Link href="/contact">
                <CalendarCheck className="size-4.5" /> Schedule a Visit
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 justify-start rounded-xl px-2 text-sm font-medium text-[#e2d9dc] transition-colors duration-200 hover:bg-transparent hover:text-white sm:px-3"
            >
              <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">
                <span className="flex size-8 items-center justify-center rounded-full border border-[#fff9f5]/20 bg-[#fff9f5]/8">
                  <Play className="ml-0.5 size-3.5 fill-current" aria-hidden="true" />
                </span>
                Watch Hostel Tour
              </a>
            </Button>
          </motion.div>

          <motion.ul
            {...fadeUp(0.4)}
            className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#d8cfd2] sm:text-[13px]"
            aria-label="Why families trust Rose Girls Hostel"
          >
            {["Secure accommodation", "Female-friendly environment", "Family trusted"].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check className="size-3.5 text-[#c8a46a]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.dl
          {...fadeUp(0.52)}
          className="mt-10 grid grid-cols-2 overflow-hidden rounded-3xl border border-[#fff9f5]/14 bg-[#2b2024]/55 shadow-[0_18px_55px_rgb(16_10_13/0.20)] backdrop-blur-xl lg:mt-12 lg:grid-cols-4"
        >
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative min-h- px-4 py-4 sm:px-6 lg:min-h-18 lg:px-7 lg:py-4 [&:nth-child(even)]:border-l [&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0 lg:[&:not(:first-child)]:border-l border-[#fff9f5]/10"
            >
              {/* <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c8a46a]">{String(index + 1).padStart(2, "0")}</span> */}
              <dd className="mt-1 font-heading text-2xl font-semibold tracking-tight text-[#fff9f5] sm:text-3xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-1 text-xs leading-5 text-[#d8cfd2] sm:text-sm">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background/80 to-transparent" />
    </section>
  );
}
