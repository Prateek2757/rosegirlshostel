import type { MetadataRoute } from "next";
import { rooms } from "@/lib/data/rooms";
import { site } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1 },
    { path: "/rooms", priority: 0.9 },
    { path: "/book", priority: 0.9 },
    { path: "/pricing", priority: 0.8 },
    { path: "/facilities", priority: 0.7 },
    { path: "/gallery", priority: 0.7 },
    { path: "/food", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    { path: "/faq", priority: 0.6 },
    { path: "/rules", priority: 0.5 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ].map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const roomPages = rooms.map((room) => ({
    url: `${site.url}/rooms/${room.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...roomPages];
}
