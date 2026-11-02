import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhinu.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bhinu Puvvala — Software Engineer",
    description:
      "Good systems. Down to the details. Storage engines, production backends, and on-device AI.",
    url: "https://bhinu.dev",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  title: "Bhinu Puvvala — Software Engineer",
  description:
    "Software engineer building storage engines, production backends, and on-device AI. Explore work by Bhinu Puvvala, CS & Data Science at UW–Madison, graduating May 2027.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
