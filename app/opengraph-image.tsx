import { ImageResponse } from "next/og";
import { site } from "@/lib/data/site";

export const alt = `${site.name} — Safe & Comfortable Girls Hostel in Kathmandu`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share card generated at build time — no design tools needed. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #7A1640 0%, #C2185B 55%, #E91E63 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            color: "#FCE4EC",
          }}
        >
          ● {site.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          A Safe & Comfortable Home for Girls in Kathmandu
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "rgba(255,255,255,0.85)" }}>
          Healthy meals · 24/7 security · High-speed WiFi · Comfortable room plans
        </div>
        <div
          style={{
            marginTop: 44,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
          }}
        >
          <div
            style={{
              background: "#E91E63",
              color: "#FFFFFF",
              padding: "14px 32px",
              borderRadius: 999,
              fontWeight: 700,
            }}
          >
            Book a Room
          </div>
          <div style={{ color: "#FCE4EC" }}>{site.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
