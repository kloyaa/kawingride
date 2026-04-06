import type { Metadata, Viewport } from "next";
import { DM_Sans, Sora } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const themeScript = `
(() => {
  const storageKey = "community-ride-theme";
  const root = document.documentElement;
  const storedTheme = window.localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : prefersDark
      ? "dark"
      : "light";

  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
})();
`;

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://communityride.app"),
  title: {
    default: "Community Ride | Private Community Ride Coordination",
    template: "%s | Community Ride",
  },
  applicationName: "Community Ride",
  description:
    "A safety-first coordination platform for trusted local ride communities with private requests, structured negotiation, and clearer accountability.",
  keywords: [
    "community rides",
    "local mobility",
    "private ride requests",
    "community transport",
    "rider coordination",
    "ride safety",
    "structured negotiation",
    "local rider platform",
  ],
  alternates: {
    canonical: "/",
  },
  category: "transportation",
  authors: [{ name: "Community Ride" }],
  creator: "Community Ride",
  publisher: "Community Ride",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Community Ride | Private Community Ride Coordination",
    description:
      "Private ride requests for trusted local communities, with structured negotiation, optional safety updates, and clearer accountability.",
    url: "https://communityride.app",
    siteName: "Community Ride",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Community Ride platform preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Ride | Private Community Ride Coordination",
    description:
      "A safety-first coordination platform for trusted local ride communities with private requests, structured negotiation, and clearer accountability.",
    images: ["/twitter-image"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${dmSans.variable}`}>
      <body>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
