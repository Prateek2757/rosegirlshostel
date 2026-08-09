import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { MasonryGallery } from "@/components/sections/masonry-gallery";

export function GalleryPreview() {
  return (
    <section className="section-padding bg-muted/50 dark:bg-card/30" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Take a look inside"
          description="Real photos of our rooms, food, study spaces and community life — nothing staged."
        />
        <MasonryGallery limit={8} />
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/gallery">
              View full gallery <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
