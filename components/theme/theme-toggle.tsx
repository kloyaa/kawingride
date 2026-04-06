"use client";

import { useEffect, useState } from "react";

import { Icon } from "@/components/landing/icons";

const STORAGE_KEY = "community-ride-theme";

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return getPreferredTheme();
  });
  const isDark = theme === "dark";

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [isDark, theme]);

  return (
    <button
      type="button"
      suppressHydrationWarning
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-brand-200 hover:bg-brand-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-700 dark:hover:bg-slate-800"
    >
      <span className="inline-flex items-center gap-2 px-2">
        <Icon name={isDark ? "moon" : "sun"} className="h-4 w-4" />
        <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
      </span>
      <span
        className={[
          "relative inline-flex h-7 w-12 items-center rounded-full transition",
          isDark ? "bg-brand-600" : "bg-slate-200",
        ].join(" ")}
      >
        <span
          className={[
            "inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-sm transition",
            isDark ? "translate-x-6 text-brand-700" : "translate-x-1 text-amber-500",
          ].join(" ")}
        >
          <Icon name={isDark ? "moon" : "sun"} className="h-3.5 w-3.5" />
        </span>
      </span>
    </button>
  );
}
