import Link from "next/link";
import type { ReactNode } from "react";

import { type ThemeMode } from "@/constants/branding";

import { AnimatedHeroHeadline } from "./animated-hero-headline";
import { Reveal } from "./reveal";
import { RouteBackButton } from "./route-back-button";
import { ScrollToTop } from "./scroll-to-top";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type Action = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type Highlight = {
  description: string;
  title: string;
};

type MarketingPageShellProps = {
  actions: Action[];
  children: ReactNode;
  description: string;
  eyebrow: string;
  highlightedText?: string;
  highlights: Highlight[];
  initialTheme?: ThemeMode;
  title: string;
  titleLines?: string[];
};

function ActionLink({ action }: { action: Action }) {
  const className =
    action.variant === "secondary"
      ? "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-brand-500/40 dark:hover:text-brand-200"
      : "inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800";

  return action.href.startsWith("/") ? (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  ) : (
    <a href={action.href} className={className}>
      {action.label}
    </a>
  );
}

export function MarketingPageShell({
  actions,
  children,
  description,
  eyebrow,
  highlightedText,
  highlights,
  initialTheme = "light",
  title,
  titleLines,
}: MarketingPageShellProps) {
  const heroLines = titleLines ?? [title];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader initialTheme={initialTheme} />
      <ScrollToTop />

      <main>
        <section className="hero-surface relative overflow-hidden pb-14 pt-16 md:pb-18 md:pt-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/40" />

          <div className="section-shell relative">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_22rem] lg:items-end">
              <Reveal className="max-w-3xl">
                <div className="mb-4">
                  <RouteBackButton />
                </div>

                <div className="inline-flex items-center rounded-full border border-brand-200/70 bg-white/80 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-800 shadow-sm backdrop-blur dark:border-brand-500/20 dark:bg-slate-950/70 dark:text-brand-200">
                  {eyebrow}
                </div>

                <AnimatedHeroHeadline
                  className="mt-6 text-4xl leading-tight sm:text-5xl lg:text-[3.15rem]"
                  highlightedText={highlightedText}
                  lines={heroLines}
                />
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {actions.map((action) => (
                    <ActionLink key={action.href} action={action} />
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <aside className="rounded-[1.75rem] border border-slate-200/80 bg-white/82 p-5 shadow-[0_18px_40px_rgba(29,42,45,0.06)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/76 dark:shadow-[0_18px_40px_rgba(7,12,14,0.28)]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    Highlights
                  </p>
                  <div className="mt-4 space-y-4">
                    {highlights.map((highlight, index) => (
                      <div key={highlight.title} className="border-l border-slate-200 pl-4 dark:border-slate-800">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h2 className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{highlight.title}</h2>
                        <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
