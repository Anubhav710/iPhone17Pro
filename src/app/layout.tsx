import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const sfPro = localFont({
  src: [
    {
      path: "./font/sf-pro-text_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/sf-pro-text_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/sf-pro-text_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./font/sf-pro-text_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro",
});
const sfProDisplay = localFont({
  src: [
    {
      path: "./font/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-display",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iPhone17 Pro",
  description:
    "A concept site for iPhone 17 Pro. Explore the next generation of iPhone design, features, and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.variable} ${sfProDisplay.variable} font-sf-pro antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
