"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navLinks, site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overlaysHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "px-2 pt-2 md:px-4 md:pt-3" : "px-0 pt-0",
      )}
    >
      <div
        className={cn(
          "relative mx-auto flex h-15 max-w-none items-center justify-between overflow-hidden px-4 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 md:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]",
          scrolled
            ? "rounded-2xl border border-white/60 bg-white/65 shadow-[0_8px_32px_rgb(74_21_48/0.12)] dark:border-white/10 dark:bg-[#171318]/70"
            : overlaysHero
              ? "border-b border-white/20 bg-[#351522]/45 shadow-[0_8px_32px_rgb(18_16_20/0.16)]"
              : "border-b border-white/60 bg-white/65 shadow-soft dark:border-white/10 dark:bg-[#171318]/70",
        )}
      >
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/80 to-transparent dark:via-white/25"
        /> */}
        <Link
          href="/"
          className={cn(
            "flex h-14 shrink-0 items-center gap-2 overflow-hidden rounded-lg",
            overlaysHero ? "ring-/15" : "r",
          )}
          aria-label={`${site.name} — home`}
        >
          <Image
            src="/images/rosegirlhostellogo.png"
            alt="Rose Girls Hostel"
            width={3600}
            height={1024}
            priority
            unoptimized
            sizes="1944px"
            className="h-14 w-38 object-cover object-center"
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-bold transition-colors duration-200",
                  active
                    ? overlaysHero
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-primary dark:bg-secondary dark:text-secondary-foreground"
                    : overlaysHero
                      ? "text-white/80 hover:bg-white/10 hover:text-white"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div
          className={cn(
            "flex items-center gap-1.5 lg:justify-self-end",
            overlaysHero && "text-white",
          )}
        >
          <ThemeToggle />
          <Button
            asChild size="lg"
            className="hidden h-10 bg-linear-to-r from-primary to-[#f06292] px-3.5 text-sm text-primary-foreground shadow-soft transition-shadow duration-200 hover:shadow-lifted sm:flex"
          >
            <Link href="/book">Book a Room</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="font-heading text-primary">{site.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors duration-200 hover:bg-accent"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-2 border-t pt-4">
                  <Button asChild className="text-2xl">
                    <Link href="/book" onClick={() => setOpen(false)}>
                      Book a Room
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={`tel:${site.mobile}`}>
                      <Phone className="size-4" /> Call Now
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
