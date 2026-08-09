import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { MasonryGallery } from "@/components/sections/masonry-gallery";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse real photos of Rose Girls Hostel — rooms, food, study areas, washrooms, terrace, garden, events and common spaces.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="See every corner before you visit"
        description="Rooms, food, study spaces, washrooms and community life — browse by category or view everything."
        breadcrumbs={[{ name: "Gallery", href: "/gallery" }]}
      />
      <section className="section-padding pt-4 md:pt-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <MasonryGallery />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
