import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/shared/brand-icons";
import { footerLinks, site } from "@/lib/data/site";

const socials = [
  { label: "Facebook", href: site.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "YouTube", href: site.social.youtube, icon: YoutubeIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/60 dark:bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label={`${site.name} — home`}
              className="relative block h-28 w-full max-w-xs overflow-hidden rounded-2xl border bg-card shadow-soft"
            >
              <Image
                src="/images/rosegirlhostellogo.png"
                alt="Rose Girls Hostel — Grace, Safety, Growth"
                fill
                sizes="4080px"
                className="object-cover object-center"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A safe, clean and caring home for female students and working
              women in the heart of Kathmandu since 2015.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {site.address.street}, {site.address.city}, {site.address.country}
              </li>
              <li>
                <a
                  href={`tel:${site.mobile}`}
                  className="flex items-center gap-2.5 transition-colors duration-200 hover:text-foreground"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 transition-colors duration-200 hover:text-foreground"
                >
                  <Mail className="size-4 text-primary" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.shortName} on ${label}`}
                  className="flex size-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <nav key={group.title} aria-label={`Footer — ${group.title}`}>
              <h3 className="font-heading text-sm font-semibold tracking-wide uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            {site.openingHours.split("(")[0].trim()} · Emergency:{" "}
            <a
              href={`tel:${site.emergencyPhone}`}
              className="font-medium text-foreground transition-colors duration-200 hover:text-primary"
            >
              {site.emergencyPhone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
