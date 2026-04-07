import type { Metadata } from "next";
import { cookies } from "next/headers";

import { AccessPage } from "@/components/access/access-page";
import { THEME_COOKIE_NAME, type ThemeMode } from "@/constants/branding";

export const metadata: Metadata = {
  title: `Request Access`,
  description: "Request access to Kawing Ride, verify your code, and receive your access link by email.",
  alternates: {
    canonical: "/access",
  },
};

export default async function Access() {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get(THEME_COOKIE_NAME)?.value;
  const initialTheme: ThemeMode = cookieTheme === "dark" ? "dark" : "light";

  return <AccessPage initialTheme={initialTheme} />;
}
