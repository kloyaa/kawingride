import type { Metadata } from "next";
import { cookies } from "next/headers";

import { AboutPage } from "@/components/landing/about-page";
import { THEME_COOKIE_NAME, type ThemeMode } from "@/constants/branding";

export const metadata: Metadata = {
  title: "Our Story | Kawing Ride",
  description:
    "Read the story behind Kawing Ride and why it is being built for trusted local communities that want a calmer way to coordinate rides.",
};

export default async function OurStory() {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get(THEME_COOKIE_NAME)?.value;
  const initialTheme: ThemeMode = cookieTheme === "dark" ? "dark" : "light";

  return <AboutPage initialTheme={initialTheme} />;
}
