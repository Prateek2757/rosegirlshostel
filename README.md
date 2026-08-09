# Rose Girls Hostel — Website

A premium, conversion-focused website for a girls hostel in Kathmandu, Nepal.
Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**,
**shadcn/ui**, **Framer Motion** and **Lucide icons**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerendered)
npm run lint
```

## Project structure

```
app/                  Routes (App Router, Server Components by default)
  page.tsx            Homepage — hero, features, rooms, gallery, food, FAQ, booking
  rooms/[slug]/       Room detail pages (SSG via generateStaticParams)
  actions/inquiry.ts  Server action handling the booking form
  sitemap.ts          XML sitemap · robots.ts · opengraph-image.tsx (OG card)
components/
  ui/                 shadcn/ui primitives
  layout/             Sticky glass navbar, footer, floating WhatsApp/call CTA, theme toggle
  sections/           Page sections (hero, gallery lightbox, testimonials carousel, …)
  shared/             Room card, section headings, JSON-LD schema, brand icons
  motion/             Reveal / Stagger / Counter — reduced-motion aware
lib/data/             All site content as typed data (rooms, menu, FAQs, contact, …)
public/images/        Placeholder artwork (SVG gradients)
scripts/              generate-placeholders.mjs
```

## Editing content

All copy lives in `lib/data/*.ts` — change prices, menu items, FAQs, contact
details or testimonials there without touching components. Global identity
(name, phone, WhatsApp, address, socials, map) is in `lib/data/site.ts`.

## Going live checklist

1. **Photos** — replace the SVGs in `public/images/` with real photography
   (keep the same filenames, or update paths in `lib/data/`).
2. **Domain** — set the real URL in `lib/data/site.ts` (`site.url`), used for
   canonical URLs, sitemap and Open Graph.
3. **Booking form** — wire up email/DB delivery in `app/actions/inquiry.ts`
   (marked with a TODO); the form UI needs no changes.
4. **Google Maps** — add an API key in `site.mapEmbedUrl`, or keep the
   key-free fallback embed already in use.
5. **Contact details** — replace the placeholder phone numbers and emails.

## Design system

- **Colors** — primary `#5B4B8A`, lavender `#D6C7F7`, gold accent `#F8B400`,
  defined as CSS variables in `app/globals.css` with full dark-mode variants.
- **Typography** — Poppins (headings) + Inter (body) via `next/font`.
- **Dark mode** — class-based via `next-themes`, toggle in the navbar.
- **Accessibility** — semantic landmarks, skip link, focus states, ARIA labels,
  4.5:1 contrast, `prefers-reduced-motion` respected in all animations.
- **SEO** — per-page metadata, canonical URLs, Open Graph + Twitter cards,
  Schema.org (Hostel, FAQPage, BreadcrumbList), sitemap.xml, robots.txt.
