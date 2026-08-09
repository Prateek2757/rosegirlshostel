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
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 md:right-6 md:bottom-6">
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          "Hi! I'd like to inquire about a room at Rose Girls Hostel.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lifted transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="size-6" />
      </a>
      <a
        href={`tel:${site.mobile}`}
        aria-label={`Call us at ${site.phone}`}
        className="flex size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lifted transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Phone className="size-5.5" aria-hidden="true" />
      </a>
    </div>
  );
}
