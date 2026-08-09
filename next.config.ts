import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder artwork ships as local SVGs; real photos can be dropped in
    // with the same filenames (or added as jpg/webp) without config changes.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
