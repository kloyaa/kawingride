import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Manrope, Sora, Space_Grotesk } from "next/font/google";

import { AppProviders } from "@/components/providers/app-providers";
import { blobAssetPaths } from "@/constants/blob-assets";
import { APP_DOMAIN, APP_NAME, THEME_COOKIE_NAME, type ThemeMode } from "@/constants/branding";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_DOMAIN),
  title: {
    default: `${APP_NAME} | Private Community Ride Coordination`,
    template: `%s | ${APP_NAME}`,
  },
  applicationName: APP_NAME,
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
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  publisher: APP_NAME,
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: blobAssetPaths.navLogo, type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: blobAssetPaths.logo, type: "image/png", sizes: "1024x1024" },
    ],
    shortcut: [{ url: blobAssetPaths.navLogo, type: "image/svg+xml", sizes: "any" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${APP_NAME} | Private Community Ride Coordination`,
    description:
      "Private ride requests for trusted local communities, with structured negotiation, optional safety updates, and clearer accountability.",
    url: APP_DOMAIN,
    siteName: APP_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kawing Ride platform preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} | Private Community Ride Coordination`,
    description:
      "A safety-first coordination platform for trusted local ride communities with private requests, structured negotiation, and clearer accountability.",
    images: ["/twitter-image"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ecf4e8" },
    { media: "(prefers-color-scheme: dark)", color: "#182326" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get(THEME_COOKIE_NAME)?.value;
  const theme: ThemeMode = cookieTheme === "dark" ? "dark" : "light";

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={[
        sora.variable,
        manrope.variable,
        spaceGrotesk.variable,
        theme === "dark" ? "dark" : "",
      ].filter(Boolean).join(" ")}
      style={{ colorScheme: theme }}
    >
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
