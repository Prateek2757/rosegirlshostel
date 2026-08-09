import { site } from "@/lib/data/site";
import { rooms } from "@/lib/data/rooms";
import { faqs } from "@/lib/data/faqs";

/**
 * Structured data for local SEO. Rendered once in the root layout so every
 * page carries the LocalBusiness/Hostel entity.
 */
export function HostelJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Hostel",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "NPR 10,000 – 25,000 / month",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.googleRating,
      reviewCount: site.reviewCount,
    },
    amenityFeature: [
      "24/7 Security",
      "CCTV",
      "High-Speed WiFi",
      "Home-Cooked Meals",
      "Laundry",
      "Power Backup",
      "Study Room",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    makesOffer: rooms.map((room) => ({
      "@type": "Offer",
      name: room.name,
      price: room.price,
      priceCurrency: "NPR",
      url: `${site.url}/rooms/${room.slug}`,
    })),
    sameAs: Object.values(site.social),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** FAQPage schema — rendered on pages that show the FAQ accordion. */
export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** BreadcrumbList schema for inner pages. */
export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", href: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
