"use client";

import { useState } from "react";

import { navigationItems } from "./content";
import { Icon } from "./icons";
import { Logo } from "./logo";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-18 items-center justify-between gap-6">
          <a href="#" className="shrink-0" aria-label="Community Ride home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="ml-2 inline-flex items-center rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
            >
              Get Started
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            className="flex flex-col gap-2 border-t border-slate-200 py-4 md:hidden"
            aria-label="Mobile"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="mt-1 inline-flex items-center justify-center rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
