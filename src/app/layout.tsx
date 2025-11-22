import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charlie Zhang | Portfolio",
  description:
    "Hello! I'm Charlie Zhang, a UCD CS student driven by curiosity and a love for technology.",
  icons: {
    icon: [
      { url: "/logos/cz-logo.png", type: "image/png" },
      { url: "/logos/cz-logo.png", rel: "icon", type: "image/png" },
    ],
    shortcut: "/logos/cz-logo.png",
    apple: "/logos/cz-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
