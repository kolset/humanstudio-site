import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Human Studio — Technology for Humans",
  description:
    "A tech studio in Austin, TX building five products that make a positive difference for humans.",
  openGraph: {
    title: "Human Studio — Technology for Humans",
    description:
      "A tech studio in Austin, TX building five products that make a positive difference for humans.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
