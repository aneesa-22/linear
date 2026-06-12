import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export const alt = "Linear Studio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f6f5f2",
          color: "#1f1f1f",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.04em",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div
            style={{
              fontSize: 168,
              fontWeight: 700,
              lineHeight: 0.88,
            }}
          >
            {siteConfig.name.toLowerCase()}
          </div>
          <div
            style={{
              fontSize: 42,
              fontWeight: 300,
              lineHeight: 1.1,
              maxWidth: 720,
            }}
          >
            {siteConfig.description}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
