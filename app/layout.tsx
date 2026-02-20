import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alive Studio Austin",
  description:
    "Building for humans. A studio by TJ Kolset — founder, CTO, board member, angel investor.",
  keywords: [
    "TJ Kolset",
    "Torstein Kolset",
    "Alive Studio",
    "Austin",
    "founder",
    "CTO",
    "angel investor",
  ],
  authors: [{ name: "TJ Kolset" }],
  openGraph: {
    type: "website",
    title: "Alive Studio Austin",
    description:
      "Building for humans. A studio by TJ Kolset.",
    siteName: "Alive Studio Austin",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tkolset",
    creator: "@tkolset",
    title: "Alive Studio Austin",
    description: "Building for humans. A studio by TJ Kolset.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
