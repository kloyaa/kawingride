import type { Metadata } from "next";
import { cookies } from "next/headers";

import { CommunitiesPage } from "@/components/communities/communities-page";
import { THEME_COOKIE_NAME, type ThemeMode } from "@/constants/branding";

export const metadata: Metadata = {
  title: "Communities",
  description: "Browse communities with customer totals, rider capacity, and community scores.",
  alternates: {
    canonical: "/communities",
  },
};

export default async function Communities() {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get(THEME_COOKIE_NAME)?.value;
  const initialTheme: ThemeMode = cookieTheme === "dark" ? "dark" : "light";

  return <CommunitiesPage initialTheme={initialTheme} />;
}
