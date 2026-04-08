import Link from "next/link";

import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { dummyCommunities } from "@/constants/communities";
import type { ThemeMode } from "@/constants/branding";

type CommunitiesPageProps = {
  initialTheme?: ThemeMode;
};

function renderScoreStars(value: number) {
  return `${"★".repeat(value)}${"☆".repeat(5 - value)}`;
}

export function CommunitiesPage({ initialTheme = "light" }: CommunitiesPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader initialTheme={initialTheme} />

      <main>
        <section className="hero-surface noise-overlay relative overflow-hidden pb-18 pt-14 md:pb-24 md:pt-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent dark:from-slate-950/60" />
          <div className="pointer-events-none absolute right-0 top-16 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-12 h-56 w-56 rounded-full bg-amber-300/15 blur-3xl" />

          <div className="section-shell relative space-y-10">
            <div className="space-y-5">
              <Link
                href="/access"
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/85 px-3.5 py-1.5 text-xs font-semibold text-brand-800 shadow-sm backdrop-blur dark:border-brand-500/20 dark:bg-slate-900/70 dark:text-brand-200"
              >
                Back to admin access
              </Link>

              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                  Communities
                </p>
                <h1 className="font-display text-4xl font-extrabold leading-none tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  Communities
                  <span className="gradient-text"> and community score.</span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                  Review active customer counts, rider capacity, and current community scores across the directory.
                </p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {dummyCommunities.map((community) => (
                <article
                  key={community.name}
                  className="surface-panel rounded-[2rem] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                        {community.location}
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                        {community.name}
                      </h2>
                    </div>
                    <div className="rounded-full bg-brand-100 px-3 py-1.5 text-xs font-semibold text-brand-900 dark:bg-brand-500/15 dark:text-brand-100">
                      Live status
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-[1.4rem] border border-slate-200 bg-white/80 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/65">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        Active customers
                      </p>
                      <p className="mt-2 font-display text-3xl font-extrabold text-slate-950 dark:text-white">
                        {community.activeCustomers}
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] border border-slate-200 bg-white/80 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/65">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        Active riders
                      </p>
                      <p className="mt-2 font-display text-3xl font-extrabold text-slate-950 dark:text-white">
                        {community.activeRiders}
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] border border-slate-200 bg-white/80 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/65">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        Community score
                      </p>
                      <p className="mt-2 text-xl font-extrabold tracking-[0.18em] text-amber-600 dark:text-amber-300">
                        {renderScoreStars(community.communityScore)}
                      </p>
                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                        {community.communityScore} out of 5 stars
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
