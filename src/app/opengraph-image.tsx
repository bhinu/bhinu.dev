import { ImageResponse } from "next/og";

export const alt = "Bhinu Puvvala — Good systems. Down to the details.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f3f1e9",
          color: "#242820",
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
          <span>Good systems.</span>
          <span>
            Down to the <span style={{ color: "#a43e25" }}>details.</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #cfcec4",
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
