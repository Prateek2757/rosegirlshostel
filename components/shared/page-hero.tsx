import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Breadcrumb trail, excluding Home (added automatically). */
  breadcrumbs: { name: string; href: string }[];
};

/** Gradient header block shared by all inner pages, with visible breadcrumbs + schema. */
export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background pt-20 pb-14 md:pt-20 md:pb-20 dark:from-secondary/20">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgb(233_30_99/0.10),transparent_45%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors duration-200 hover:text-primary">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5" aria-hidden="true" />
                {i === breadcrumbs.length - 1 ? (
                  <span aria-current="page" className="font-medium text-foreground">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Reveal>
          {eyebrow && (
            <span className="mb-3 inline-block rounded-full bg-secondary/40 px-4 py-1.5 text-sm font-medium tracking-wide text-primary dark:bg-secondary dark:text-secondary-foreground">
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </Reveal>
      </div>
      <BreadcrumbJsonLd items={breadcrumbs} />
    </section>
  );
}
