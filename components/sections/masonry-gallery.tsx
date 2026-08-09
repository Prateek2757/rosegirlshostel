"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  galleryCategories,
  galleryImages,
  type GalleryCategory,
} from "@/lib/data/gallery";
import { cn } from "@/lib/utils";

const aspectClass = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
} as const;

export function MasonryGallery({ limit }: { limit?: number }) {
  const [category, setCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const list =
      category === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === category);
    return limit ? list.slice(0, limit) : list;
  }, [category, limit]);

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const step = (dir: 1 | -1) =>
    setLightboxIndex((i) =>
      i === null ? null : (i + dir + filtered.length) % filtered.length,
    );

  return (
    <div>
      {/* Category filter pills */}
      <div
        className="mb-8 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter gallery by category"
      >
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setCategory(cat);
              setLightboxIndex(null);
            }}
            aria-pressed={category === cat}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
              category === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry via CSS columns */}
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.button
              key={img.src}
              layout
              type="button"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={() => setLightboxIndex(i)}
              className={cn(
                "group relative block w-full overflow-hidden rounded-2xl break-inside-avoid shadow-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                aspectClass[img.aspect],
              )}
              aria-label={`View photo: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-black/70 dark:text-white">
                {img.category}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <Dialog
        open={current !== null}
        onOpenChange={(open) => !open && setLightboxIndex(null)}
      >
        <DialogContent
          showCloseButton={false}
          className="max-w-4xl border-none bg-transparent p-0 shadow-none"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
          }}
        >
          {current && (
            <figure className="relative">
              <DialogTitle className="sr-only">{current.alt}</DialogTitle>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-white/90">
                {current.alt}
              </figcaption>
              <Button
                variant="secondary"
                size="icon"
                aria-label="Close"
                onClick={() => setLightboxIndex(null)}
                className="absolute top-3 right-3 rounded-full shadow-soft"
              >
                <X className="size-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                aria-label="Previous photo"
                onClick={() => step(-1)}
                className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full shadow-soft"
              >
                <ChevronLeft className="size-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                aria-label="Next photo"
                onClick={() => step(1)}
                className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full shadow-soft"
              >
                <ChevronRight className="size-5" />
              </Button>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
