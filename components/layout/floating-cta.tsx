"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { site } from "@/lib/data/site";

/**
 * Floating quick-contact buttons, always reachable on every page.
 * WhatsApp is the dominant inquiry channel for hostels in Nepal.
 */
export function FloatingCta() {
  return (
    <div className="fixed right-3 bottom-3 z-40 flex flex-col gap-2.5 md:right-6 md:bottom-6 md:gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          "Hi! I'd like to inquire about a room at Rose Girls Hostel.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex size-12 items-center justify-center rounded-full bg-[#20b858] text-white shadow-[0_8px_24px_rgb(18_94_50/0.24)] transition-transform duration-200 hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:size-14"
      >
        <WhatsAppIcon className="size-6" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#241b1f]/95 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity group-hover:opacity-100 md:block">
          Chat on WhatsApp
        </span>
      </a>
      <a
        href={`tel:${site.mobile}`}
        aria-label="Call Rose Girls Hostel"
        className="group relative flex size-12 items-center justify-center rounded-full bg-[#c51f57] text-white shadow-[0_8px_24px_rgb(138_17_62/0.24)] transition-transform duration-200 hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:size-14"
      >
        <Phone className="size-5.5" aria-hidden="true" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#241b1f]/95 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity group-hover:opacity-100 md:block">
          Call Rose Girls Hostel
        </span>
      </a>
    </div>
  );
}
