/**
 * Generates soft-gradient SVG placeholder images for every photo slot on the
 * site. Replace files in /public/images with real photography (same names)
 * whenever it becomes available — no code changes needed.
 *
 * Run: node scripts/generate-placeholders.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = join(process.cwd(), "public", "images");
mkdirSync(OUT, { recursive: true });

const palettes = {
  purple: ["#5B4B8A", "#8D78C0", "#D6C7F7"],
  lavender: ["#D6C7F7", "#B9A6E8", "#F1ECFB"],
  gold: ["#F8B400", "#FBC434", "#FDE68A"],
  warm: ["#7C6BA8", "#C9A45C", "#F8B400"],
  green: ["#4C7A5C", "#7FB08F", "#D6E8DC"],
  dusk: ["#3A2F5C", "#5B4B8A", "#F8B400"],
};

function svg({ w, h, palette, label, seed }) {
  const [c1, c2, c3] = palettes[palette];
  // Deterministic pseudo-random from seed for varied but stable compositions.
  let s = [...seed].reduce((a, c) => a + c.charCodeAt(0), 0);
  const rand = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  const blobs = Array.from({ length: 4 }, () => ({
    cx: Math.round(rand() * w),
    cy: Math.round(rand() * h),
    r: Math.round((0.18 + rand() * 0.22) * Math.max(w, h)),
    fill: [c1, c2, c3][Math.floor(rand() * 3)],
    o: (0.25 + rand() * 0.3).toFixed(2),
  }));
  const fontSize = Math.round(Math.min(w, h) / 16);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="55%" stop-color="${c2}"/>
      <stop offset="100%" stop-color="${c3}"/>
    </linearGradient>
    <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="${Math.round(Math.max(w, h) / 18)}"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <g filter="url(#soft)">
    ${blobs.map((b) => `<circle cx="${b.cx}" cy="${b.cy}" r="${b.r}" fill="${b.fill}" opacity="${b.o}"/>`).join("\n    ")}
  </g>
  <rect width="${w}" height="${h}" fill="#1A1A1A" opacity="0.12"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
    font-family="Poppins, Inter, sans-serif" font-size="${fontSize}" font-weight="600"
    fill="#FFFFFF" opacity="0.85" letter-spacing="2">${label}</text>
</svg>
`;
}

const images = [
  { name: "hero", w: 1920, h: 1200, palette: "dusk", label: "HOSTEL EXTERIOR · EVENING" },
  { name: "about-story", w: 1200, h: 900, palette: "warm", label: "OUR STORY" },
  { name: "owner", w: 800, h: 800, palette: "purple", label: "OWNER PORTRAIT" },
  { name: "food-hero", w: 1600, h: 900, palette: "gold", label: "DINING HALL" },
  { name: "tour-poster", w: 1600, h: 900, palette: "purple", label: "VIRTUAL TOUR" },
  { name: "room-single", w: 900, h: 675, palette: "lavender", label: "SINGLE ROOM" },
  { name: "room-twin", w: 900, h: 675, palette: "purple", label: "TWIN SHARING" },
  { name: "room-triple", w: 900, h: 675, palette: "warm", label: "TRIPLE SHARING" },
  { name: "room-deluxe", w: 900, h: 675, palette: "dusk", label: "DELUXE ROOM" },
  { name: "gallery-room-1", w: 900, h: 675, palette: "lavender", label: "ROOMS" },
  { name: "gallery-room-2", w: 675, h: 900, palette: "purple", label: "ROOMS" },
  { name: "gallery-room-3", w: 800, h: 800, palette: "dusk", label: "ROOMS" },
  { name: "gallery-building", w: 675, h: 900, palette: "dusk", label: "BUILDING" },
  { name: "gallery-food-1", w: 800, h: 800, palette: "gold", label: "FOOD" },
  { name: "gallery-food-2", w: 900, h: 675, palette: "warm", label: "FOOD" },
  { name: "gallery-study", w: 900, h: 675, palette: "purple", label: "STUDY AREA" },
  { name: "gallery-terrace", w: 900, h: 675, palette: "gold", label: "TERRACE" },
  { name: "gallery-garden", w: 800, h: 800, palette: "green", label: "GARDEN" },
  { name: "gallery-event", w: 900, h: 675, palette: "warm", label: "EVENTS" },
  { name: "gallery-common", w: 900, h: 675, palette: "lavender", label: "COMMON AREA" },
  { name: "gallery-washroom", w: 675, h: 900, palette: "lavender", label: "WASHROOMS" },
];

for (const img of images) {
  writeFileSync(join(OUT, `${img.name}.svg`), svg({ ...img, seed: img.name }));
}
console.log(`Generated ${images.length} placeholder images in public/images`);
