import { cookies } from "next/headers";

import { THEME_COOKIE_NAME, type ThemeMode } from "@/constants/branding";

export async function getServerTheme(): Promise<ThemeMode> {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get(THEME_COOKIE_NAME)?.value;

  return cookieTheme === "dark" ? "dark" : "light";
}
