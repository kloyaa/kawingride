"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import type { ThemeMode } from "@/constants/branding";

import { navigationItems } from "./content";
import { Icon } from "./icons";
import { Logo } from "./logo";

type SiteHeaderProps = {
  initialTheme?: ThemeMode;
};

export function SiteHeader({ initialTheme = "light" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeHref = pathname ?? "/";

  function getNavItemClasses(href: string, mobile = false) {
    const isActive = activeHref === href;

    if (mobile) {
      return [
        "rounded-2xl border px-4 py-3 text-sm font-medium transition",
        isActive
          ? "border-brand-100 bg-brand-50 text-brand-800 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-200"
          : "border-transparent text-slate-700 hover:border-brand-100 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-brand-300",
      ].join(" ");
    }

    return [
      "rounded-full px-2.5 py-2 text-[0.82rem] font-medium transition",
      isActive
        ? "bg-white text-brand-800 shadow-sm dark:bg-slate-800 dark:text-brand-200"
        : "text-slate-600 hover:bg-white hover:text-brand-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-brand-300",
    ].join(" ");
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="section-shell">
        <div className="rounded-[1.75rem] border border-white/70 bg-white/85 px-4 shadow-[0_20px_45px_rgba(29,42,45,0.08)] backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/82 sm:px-5">
          <div className="flex h-18 items-center justify-between gap-6">
            <Link href="/" className="shrink-0" aria-label="Kawing Ride home">
              <Logo />
            </Link>

            <div className="hidden items-center gap-3 xl:flex">
              <nav
                className="flex items-center gap-0.5 rounded-full border border-slate-200/80 bg-slate-50/80 p-1 dark:border-slate-800 dark:bg-slate-900/80"
                aria-label="Primary"
              >
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={getNavItemClasses(item.href)}
                    aria-current={activeHref === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/access"
                  className="ml-1 inline-flex items-center rounded-full bg-brand-700 px-3.5 py-2 text-[0.82rem] font-semibold text-white shadow-sm transition hover:bg-brand-800"
                >
                  Request Admin Access
                </Link>
              </nav>
              <ThemeToggle initialTheme={initialTheme} />
            </div>

            <div className="flex items-center gap-2 xl:hidden">
              <ThemeToggle initialTheme={initialTheme} />
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setIsMenuOpen((value) => !value)}
              >
                <Icon name={isMenuOpen ? "close" : "menu"} className="h-5 w-5" />
              </button>
            </div>
          </div>

          {isMenuOpen ? (
            <nav
              id="mobile-navigation"
              className="flex flex-col gap-2 border-t border-slate-200 py-4 dark:border-slate-800 xl:hidden"
              aria-label="Mobile"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getNavItemClasses(item.href, true)}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/access"
                className="mt-1 inline-flex items-center justify-center rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Admin Access
              </Link>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
