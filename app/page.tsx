import { cookies } from "next/headers";
import { SpeedInsights } from '@vercel/speed-insights/next';

import { LandingPage } from "@/components/landing/landing-page";
import { THEME_COOKIE_NAME, type ThemeMode } from "@/constants/branding";

export default async function Home() {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get(THEME_COOKIE_NAME)?.value;
  const initialTheme: ThemeMode = cookieTheme === "dark" ? "dark" : "light";

  return (
    <>
      <LandingPage initialTheme={initialTheme} />
      <SpeedInsights />
    </>
  );
}
