import Image from "next/image";
import Link from "next/link";

import {
  founderNote,
  missionDescription,
  missionPillars,
  platformIdentity,
} from "./content";
import { FounderNoteCard } from "./founder-note-card";
import { Reveal } from "./reveal";
import { ScrollToTop } from "./scroll-to-top";
import { SectionHeader } from "./section-header";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { blobAssetPaths } from "@/constants/blob-assets";
import { type ThemeMode } from "@/constants/branding";

type AboutPageProps = {
  initialTheme?: ThemeMode;
};

export function AboutPage({ initialTheme = "light" }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader initialTheme={initialTheme} />
      <ScrollToTop />

      <main>
        <section className="hero-surface noise-overlay relative overflow-hidden pb-18 pt-16 md:pb-22 md:pt-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/70" />
          <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-brand-300/18 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-12 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />

          <div className="section-shell relative space-y-8">
            <Reveal>
              <FounderNoteCard attribution={founderNote.attribution} quote={founderNote.quote} />
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center">
              <Reveal className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-brand-900 shadow-sm dark:border-brand-500/25 dark:bg-white/8 dark:text-brand-100">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-600 shadow-[0_0_0_6px_rgba(103,157,168,0.16)]" />
                  Our Story
                </div>

                <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[3.2rem]">
                  Built for communities that already trust each other.
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  {missionDescription}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/#solution"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/10 transition hover:bg-brand-800"
                  >
                    See the Product Flow
                  </Link>
                  <Link
                    href="/access"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50 dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-200 dark:hover:bg-slate-800"
                  >
                    Request Access
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.06} className="relative rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/70 dark:shadow-[0_24px_56px_rgba(7,12,14,0.36)]">
                <div className="pointer-events-none absolute -right-2 -top-8 w-24 rotate-[10deg] sm:w-30">
                  <div className="kawing-float kawing-float-slow kawing-float-delay-2">
                    <Image
                      src={blobAssetPaths.idea}
                      alt=""
                      width={228}
                      height={228}
                      unoptimized
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                  What matters most
                </p>
                <div className="mt-5 space-y-3">
                  {[
                    "Keep ride requests private inside trusted circles",
                    "Make booking clearer without taking away flexibility",
                    "Support trust with accountability, not noise",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.4rem] border border-slate-100 bg-slate-50/90 px-4 py-3.5 dark:border-slate-800 dark:bg-slate-900/70"
                    >
                      <p className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white py-18 dark:bg-slate-950 md:py-24">
          <div className="section-shell">
            <SectionHeader
              badge="Why We Built It"
              icon="users"
              tone="brand"
              title="A simple idea: trusted local rides deserve a calmer system."
              description="Kawing Ride is meant to support the relationships communities already have, while making booking feel clearer and more respectful."
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <Reveal className="rounded-[2rem] border border-slate-100 bg-slate-50/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/75 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                  In one sentence
                </p>
                <p className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-[2.3rem]">
                  {platformIdentity}
                </p>
              </Reveal>

              <Reveal delay={0.06} className="rounded-[2rem] border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-brand-50 p-6 shadow-sm dark:border-amber-500/20 dark:from-[#273136] dark:via-[#1d272b] dark:to-[#1b2529] sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300">
                  The direction
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-200">
                  The goal is not to replace local relationships. The goal is to give those relationships a more
                  respectful way to book, agree, and follow through.
                </p>
                <Link
                  href="/"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-brand-800 shadow-sm transition hover:bg-brand-50 dark:bg-slate-950 dark:text-brand-200 dark:hover:bg-slate-900"
                >
                  Back to Home
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-18 dark:bg-slate-900/60 md:py-24">
          <div className="section-shell">
            <SectionHeader
              badge="What We Care About"
              icon="check-circle"
              tone="amber"
              title="Three things we want every ride request to feel like."
              description="Simple, human, and useful enough to support communities that already know how they move."
            />

            <div className="mt-14 grid gap-4 lg:grid-cols-3">
              {missionPillars.map((item, index) => (
                <Reveal key={item.title} delay={0.04 + index * 0.04}>
                  <article className="card-lift rounded-[1.8rem] border border-white bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/75">
                    <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-brand-400 to-brand-700" />
                    <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                      Principle {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
