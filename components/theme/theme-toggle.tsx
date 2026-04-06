"use client";

import { useSyncExternalStore } from "react";

import { Icon } from "@/components/landing/icons";

const STORAGE_KEY = "kawing-ride-theme";
const LEGACY_STORAGE_KEY = "community-ride-theme";
const EVENT_NAME = "kawing-ride-theme-change";

type ThemeMode = "light" | "dark";

function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  const legacyTheme = window.localStorage.getItem(LEGACY_STORAGE_KEY);
  const resolvedTheme = storedTheme ?? legacyTheme;

  if (resolvedTheme === "light" || resolvedTheme === "dark") {
    if (!storedTheme && legacyTheme) {
      window.localStorage.setItem(STORAGE_KEY, legacyTheme);
    }

    return resolvedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new Event(EVENT_NAME));
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === LEGACY_STORAGE_KEY) {
      onStoreChange();
    }
  };

  const handleMedia = () => {
    if (!window.localStorage.getItem(STORAGE_KEY) && !window.localStorage.getItem(LEGACY_STORAGE_KEY)) {
      onStoreChange();
    }
  };

  const handleThemeEvent = () => {
    onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(EVENT_NAME, handleThemeEvent);
  mediaQuery.addEventListener("change", handleMedia);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(EVENT_NAME, handleThemeEvent);
    mediaQuery.removeEventListener("change", handleMedia);
  };
}

function getSnapshot(): ThemeMode {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : getPreferredTheme();
}

function getServerSnapshot(): ThemeMode {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={() => applyTheme(isDark ? "light" : "dark")}
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
