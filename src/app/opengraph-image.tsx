import { ImageResponse } from "next/og";

export const alt = "Bhinu Puvvala — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#08090a",
          color: "#f7f8f8",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 25,
          }}
        >
          <span style={{ fontWeight: 700 }}>bhinu.</span>
          <span>Software engineer</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 82,
            fontWeight: 600,
            letterSpacing: -3,
            lineHeight: 1.05,
          }}
        >
          <span>Bhinu Puvvala</span>
          <span
            style={{
              fontSize: 36,
              color: "#b0b2b8",
              letterSpacing: -1,
              marginTop: 24,
            }}
          >
            Backend systems · Data infrastructure · Applied ML
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #24262b",
            paddingTop: 24,
            fontSize: 20,
          }}
        >
          <span>Bhinu Puvvala · UW–Madison</span>
          <span>bhinu.dev</span>
        </div>
      </div>
    ),
    size,
  );
}
