import Link from "next/link";

import { AnimatedHeroHeadline } from "./animated-hero-headline";
import {
  founderNote,
  missionDescription,
  missionPillars,
  platformIdentity,
  trustStory,
} from "./content";
import { FounderNoteCard } from "./founder-note-card";
import { Reveal } from "./reveal";
import { RouteBackButton } from "./route-back-button";
import { ScrollToTop } from "./scroll-to-top";
import { SectionHeader } from "./section-header";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { type ThemeMode } from "@/constants/branding";

type AboutPageProps = {
  initialTheme?: ThemeMode;
};

const storyFrame = [
  {
    label: "Where it starts",
    text: "People already book rides inside neighborhoods, campuses, workplaces, and trusted local groups.",
  },
  {
    label: "What was missing",
    text: "Those bookings still happen through scattered chats that were never designed for privacy, clarity, or consistent follow-through.",
  },
  {
    label: "What Kawing Ride adds",
    text: "A calmer coordination layer that helps communities request, compare, confirm, and stay informed without changing how trust already works.",
  },
] as const;

export function AboutPage({ initialTheme = "light" }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader initialTheme={initialTheme} />
      <ScrollToTop />

      <main>
        <section className="route-hero-section hero-surface noise-overlay relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/70" />
          <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-brand-300/14 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-12 h-52 w-52 rounded-full bg-amber-300/14 blur-3xl" />

          <div className="section-shell relative space-y-8">
            <Reveal>
              <div className="mb-2">
                <RouteBackButton />
              </div>
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center">
              <Reveal className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-brand-900 shadow-sm dark:border-brand-500/25 dark:bg-white/8 dark:text-brand-100">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-600 shadow-[0_0_0_6px_rgba(103,157,168,0.16)]" />
                  Our Story
                </div>

                <AnimatedHeroHeadline
                  className="mt-0 text-4xl leading-tight sm:text-5xl lg:text-[3.2rem]"
                  highlightedText="communities that already trust"
                  lines={["Built for", "communities that already trust", "each other."]}
                />

                <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  {missionDescription}
                </p>

                <FounderNoteCard attribution={founderNote.attribution} quote={founderNote.quote} />

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/10 transition hover:bg-brand-800"
                  >
                    See How It Works
                  </Link>
                  <Link
                    href="/access"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50 dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-200 dark:hover:bg-slate-800"
                  >
                    Request Admin Access
                  </Link>
                </div>
              </Reveal>

              <Reveal
                delay={0.06}
                className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/72 dark:shadow-[0_24px_56px_rgba(7,12,14,0.36)] sm:p-7"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-brand-100/80 blur-3xl dark:bg-brand-500/10" />

                <div className="relative">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
                    Story frame
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-[2rem]">
                    The product begins with a real community pattern.
                  </h2>

                  <div className="mt-6 space-y-4">
                    {storyFrame.map((item, index) => (
                      <div
                        key={item.label}
                        className="grid gap-3 rounded-[1.35rem] border border-slate-200/80 bg-slate-50/82 px-4 py-4 dark:border-slate-800 dark:bg-slate-900/62 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:px-5"
                      >
                        <div>
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.label}</p>
                          <p className="mt-1.5 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    The product is not trying to replace those community relationships. It is trying to give them a
                    better system to work through.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="route-section bg-white dark:bg-slate-950">
          <div className="section-shell">
            <SectionHeader
              badge="Why We Built It"
              icon="users"
              tone="brand"
              title="A simple idea: trusted local rides deserve a calmer system."
              description="Kawing Ride is meant to support the relationships communities already have, while making booking feel clearer and more respectful."
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <Reveal className="rounded-[2rem] border border-slate-100 bg-slate-50/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/75 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                  In one sentence
                </p>
                <p className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-[2.3rem]">
                  {platformIdentity}
                </p>
              </Reveal>

              <Reveal
                delay={0.06}
                className="rounded-[2rem] border border-brand-100 bg-white p-6 shadow-sm dark:border-brand-500/20 dark:bg-slate-900 sm:p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                  Why trust matters
                </p>
                <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-[2rem]">
                  {trustStory.title}
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-[0.98rem]">
                  {trustStory.paragraphs.slice(0, 2).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Link
                  href="/safety"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-brand-500/40 dark:hover:text-brand-200"
                >
                  View Safety Details
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="route-section bg-slate-50 dark:bg-slate-900/60">
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
