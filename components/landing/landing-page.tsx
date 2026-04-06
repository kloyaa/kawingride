import {
  audienceGroups,
  brandMeaning,
  ctaExpectations,
  ctaPaths,
  communityRoles,
  comparisonHighlights,
  faqItems,
  founderNote,
  heroHighlights,
  howItWorksSteps,
  legacyFlowQuotes,
  missionDescription,
  missionPillars,
  missionStatement,
  platformIdentity,
  pricingPlans,
  pricingValueStatement,
  problemCards,
  rewardAuditPoints,
  rewardsHighlights,
  safetyDetails,
  safetyTimeline,
  solutionChecklist,
  solutionPillars,
  structuredFlowItems,
  trustBoundaries,
  trustPillars,
  whyNowPoints,
  whyLegacyItems,
  whyPlatformItems,
} from "./content";
import { FaqAccordion } from "./faq-accordion";
import { Icon } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const featureToneClasses = {
  amber: {
    card: "border-amber-200/60 bg-amber-50/80 dark:border-amber-500/20 dark:bg-amber-500/10",
    icon: "bg-amber-500 text-white",
    text: "text-amber-950 dark:text-amber-100",
  },
  brand: {
    card: "border-brand-200/60 bg-brand-50/80 dark:border-brand-500/20 dark:bg-brand-500/10",
    icon: "bg-brand-700 text-white",
    text: "text-brand-950 dark:text-brand-100",
  },
  emerald: {
    card: "border-emerald-200/60 bg-emerald-50/80 dark:border-emerald-500/20 dark:bg-emerald-500/10",
    icon: "bg-emerald-600 text-white",
    text: "text-emerald-950 dark:text-emerald-100",
  },
  slate: {
    card: "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80",
    icon: "bg-slate-700 text-white",
    text: "text-slate-950 dark:text-slate-100",
  },
  violet: {
    card: "border-violet-200/60 bg-violet-50/80 dark:border-violet-500/20 dark:bg-violet-500/10",
    icon: "bg-violet-600 text-white",
    text: "text-violet-950 dark:text-violet-100",
  },
};

const timelineToneClasses = {
  amber: {
    badge: "bg-amber-500 text-white",
    panel: "border-amber-100 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/10",
    text: "text-amber-900 dark:text-amber-100",
  },
  brand: {
    badge: "bg-brand-700 text-white",
    panel: "border-brand-100 bg-brand-50 dark:border-brand-500/20 dark:bg-brand-500/10",
    text: "text-brand-900 dark:text-brand-100",
  },
  emerald: {
    badge: "bg-emerald-600 text-white",
    panel: "border-emerald-100 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10",
    text: "text-emerald-900 dark:text-emerald-100",
  },
  slate: {
    badge: "bg-slate-400 text-white",
    panel: "border-slate-100 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80",
    text: "text-slate-900 dark:text-slate-100",
  },
  violet: {
    badge: "bg-violet-600 text-white",
    panel: "border-violet-100 bg-violet-50 dark:border-violet-500/20 dark:bg-violet-500/10",
    text: "text-violet-900 dark:text-violet-100",
  },
};

const pricingToneClasses = {
  amber: {
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
    text: "text-amber-700 dark:text-amber-300",
  },
  brand: {
    badge: "bg-brand-100 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300",
    text: "text-brand-700 dark:text-brand-300",
  },
  emerald: {
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
    text: "text-emerald-700 dark:text-emerald-300",
  },
  slate: {
    badge: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
    text: "text-slate-700 dark:text-slate-200",
  },
  violet: {
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
    text: "text-violet-700 dark:text-violet-300",
  },
};

export function LandingPage() {
  return (
    <div className="landing-page min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="hero-surface noise-overlay relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/70" />
          <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-12 h-64 w-64 rounded-full bg-amber-300/15 blur-3xl" />

          <div className="section-shell relative">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
              <Reveal className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-brand-800 shadow-sm backdrop-blur dark:border-brand-500/20 dark:bg-slate-900/70 dark:text-brand-200">
                  <span className="inline-flex h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_0_6px_rgba(20,184,166,0.15)]" />
                  A smarter alternative to group-based ride booking
                </div>

                <div className="space-y-5">
                  <h1 className="font-display text-4xl font-extrabold leading-none tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[3.4rem]">
                    Find riders,
                    <br />
                    <span className="gradient-text">negotiate clearly,</span>
                    <br />
                    and book safely.
                  </h1>
                  <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                    Built for communities that already rely on local riders, with a safer, more private,
                    and more organized way to connect without the stress of public posts, awkward chats,
                    and unreliable follow-through.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#solution"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/10 transition hover:bg-brand-800"
                  >
                    See How It Works
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </a>
                  <a
                    href="#problem"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50 dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-200 dark:hover:bg-slate-800"
                  >
                    Understand the Problem
                  </a>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex -space-x-2">
                    {["J", "M", "A", "+"].map((item, index) => (
                      <span
                        key={item}
                        className={[
                          "flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white",
                          index === 0
                            ? "bg-brand-400"
                            : index === 1
                              ? "bg-amber-400"
                              : index === 2
                                ? "bg-brand-700"
                                : "bg-slate-400",
                        ].join(" ")}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p>Trusted by local rider communities</p>
                </div>
              </Reveal>

              <Reveal delay={0.08} className="rounded-[2rem] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-6">
                <div className="mb-5 flex items-center gap-2 border-b border-slate-100 pb-4 dark:border-slate-800">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-medium text-slate-400 dark:text-slate-500">kawingride.app</span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {heroHighlights.map((item) => {
                    const palette = featureToneClasses[item.tone];

                    return (
                      <article
                        key={item.title}
                        className={[
                          "card-lift rounded-3xl border p-4 shadow-sm",
                          palette.card,
                        ].join(" ")}
                      >
                        <div className={["mb-3 flex h-10 w-10 items-center justify-center rounded-2xl", palette.icon].join(" ")}>
                          <Icon name={item.icon} className="h-4 w-4" />
                        </div>
                        <h2 className={["font-display text-lg font-extrabold", palette.text].join(" ")}>{item.title}</h2>
                        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                      </article>
                    );
                  })}
                </div>

                <article className="mt-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/90">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      Active Ride Request
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      Live
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                    <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-3">
                      <div className="relative row-span-2 w-3 self-stretch">
                        <span className="absolute left-1/2 top-3 bottom-3 w-px -translate-x-1/2 bg-slate-200 dark:bg-slate-700" />
                      </div>
                      <div className="relative">
                        <span className="route-pulse-dot absolute -left-7 top-2.5 h-3 w-3 rounded-full border-2 border-brand-200 bg-brand-500" />
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Pickup</p>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Gaisano Capital Mall</p>
                      </div>
                      <div className="relative">
                        <span className="absolute -left-7 top-2.5 h-3 w-3 rounded-sm bg-slate-900 dark:bg-slate-200" />
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Drop-off</p>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">SM City Cagayan</p>
                      </div>
                    </div>
                    <div className="pl-7 text-left sm:pl-0 sm:text-right">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Offer</p>
                      <p className="font-display text-2xl font-extrabold text-brand-700">₱120</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">2 bids received</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="mission" className="bg-white py-20 dark:bg-slate-950 md:py-28">
          <div className="section-shell">
            <SectionHeader
              badge="Mission"
              icon="users"
              tone="brand"
              title={
                <>
                  Trusted local mobility,
                  <span className="gradient-text"> more private, clear, and accountable.</span>
                </>
              }
              description={missionDescription}
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <Reveal className="rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-amber-50 p-6 shadow-sm dark:border-brand-500/20 dark:from-brand-500/10 dark:via-slate-900 dark:to-amber-500/10 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                  In one sentence
                </p>
                <p className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-slate-950 dark:text-white">
                  {missionStatement}
                </p>
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
                  {platformIdentity}
                </p>

                <div className="mt-6 rounded-[1.5rem] border border-white/70 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-950/40">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                    Why Kawing
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {brandMeaning}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08} className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">Who we serve first</h3>
                    <ul className="mt-4 space-y-3">
                      {audienceGroups.map((item) => (
                        <li key={item.title} className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                          <span className="font-semibold text-slate-900 dark:text-white">{item.title}:</span> {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">Why now</h3>
                    <ul className="mt-4 space-y-3">
                      {whyNowPoints.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {missionPillars.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="font-display text-base font-bold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 dark:bg-slate-900/60 md:py-20">
          <div className="section-shell">
            <Reveal>
              <article className="cta-surface relative overflow-hidden rounded-[2rem] p-8 text-white md:p-10">
                <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/5" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/3 rounded-full bg-amber-400/10" />

                <div className="relative grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-white">
                    <Icon name="users" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-100">
                      Founder Note
                    </p>
                    <blockquote className="mt-4 max-w-4xl font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                      “{founderNote.quote}”
                    </blockquote>
                    <p className="mt-5 text-sm font-medium text-brand-100/90">
                      {founderNote.attribution}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section id="problem" className="bg-white py-20 dark:bg-slate-950 md:py-28">
          <div className="section-shell">
            <SectionHeader
              badge="The Problem"
              icon="alert"
              tone="danger"
              title={
                <>
                  Booking through social media still works,
                  <br className="hidden sm:block" />{" "}
                  <span className="text-red-600">but it creates too much uncertainty.</span>
                </>
              }
              description="Community rider groups help people move quickly, but the process often feels public, inconsistent, and difficult to trust."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {problemCards.map((item, index) => (
                <article
                  key={item.title}
                  className="card-lift rounded-3xl border border-red-100 bg-white p-6 shadow-sm dark:border-red-500/15 dark:bg-slate-900"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-red-50 font-display text-sm font-bold text-red-600 dark:bg-red-500/10 dark:text-red-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="bg-slate-50 py-20 dark:bg-slate-900/60 md:py-28">
          <div className="section-shell">
            <SectionHeader
              badge="The Solution"
              icon="check-circle"
              tone="brand"
              title={
                <>
                  We keep the flexibility of community rides,
                  <span className="gradient-text"> with a clearer and more dependable experience.</span>
                </>
              }
              description="The platform follows the behavior people already understand, then turns it into a cleaner, more private, and more structured workflow."
            />

            <div className="cta-surface relative mt-14 overflow-hidden rounded-[2rem] p-8 text-white md:p-10">
              <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/5" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 -translate-x-1/3 translate-y-1/3 rounded-full bg-amber-400/10" />

              <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h3 className="font-display text-2xl font-extrabold">What changes for the user?</h3>
                  <ul className="mt-5 space-y-3">
                    {solutionChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-100">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-brand-200">
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <article className="rounded-[1.75rem] border border-white/20 bg-white/10 p-6 backdrop-blur">
                  <div className="inline-flex items-center rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-950">
                    Manual agreement
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">
                    Negotiation stays flexible and mutual
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brand-100">
                    The platform does not force a fixed fare or automatically assign a rider. Booking only
                    happens when both sides explicitly agree on the terms.
                  </p>
                </article>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {solutionPillars.map((item, index) => (
                <article key={item.title} className="card-lift rounded-3xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 font-display text-sm font-bold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-white py-20 dark:bg-slate-950 md:py-28">
          <div className="section-shell">
            <SectionHeader
              badge="How It Works"
              icon="bolt"
              tone="violet"
              title={
                <>
                  A familiar process,
                  <span className="gradient-text"> made clearer and more reliable.</span>
                </>
              }
              description="The workflow preserves the natural rhythm people already know, while giving every request a defined sequence of actions and decisions."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {howItWorksSteps.map((item, index) => {
                const palette = featureToneClasses[item.tone];

                return (
                  <article key={item.title} className="card-lift rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className={["mb-4 h-1 w-16 rounded-full", palette.icon.split(" ")[0]].join(" ")} />
                    <div className="flex items-center gap-3">
                      <div
                        className={[
                          "flex h-10 w-10 items-center justify-center rounded-2xl font-display text-base font-extrabold text-white",
                          palette.icon.split(" ")[0],
                        ].join(" ")}
                      >
                        {index + 1}
                      </div>
                      <h3 className="font-display text-base font-bold text-slate-950 dark:text-white">{item.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-12 rounded-[2rem] border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/70 md:p-8">
              <h3 className="font-display text-xl font-extrabold text-slate-950 dark:text-white">What users no longer need to say</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <article className="rounded-3xl border border-red-100 bg-red-50 p-5 dark:border-red-500/15 dark:bg-red-500/10">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                      <Icon name="close" className="h-3.5 w-3.5" />
                    </span>
                    <h4 className="font-display text-sm font-bold text-red-900 dark:text-red-100">Old social media flow</h4>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-red-800 dark:text-red-100">
                    {legacyFlowQuotes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-3xl border border-brand-100 bg-brand-50 p-5 dark:border-brand-500/20 dark:bg-brand-500/10">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <h4 className="font-display text-sm font-bold text-brand-900 dark:text-brand-100">New structured flow</h4>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-brand-900 dark:text-brand-100">
                    {structuredFlowItems.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                          <Icon name="check-circle" className="h-4 w-4" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="safety" className="bg-slate-50 py-20 dark:bg-slate-900/60 md:py-28">
          <div className="section-shell">
            <SectionHeader
              badge="Safety"
              icon="shield"
              tone="emerald"
              title={
                <>
                  A safer experience,
                  <span className="gradient-text"> without adding unnecessary complexity.</span>
                </>
              }
              description="Safety stays connected to the ride lifecycle, with optional notifications that can keep a trusted contact informed when it matters most."
            />

            <div className="mt-14 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-10">
              <h3 className="font-display text-lg font-extrabold text-slate-950 dark:text-white">Notification timeline</h3>
              <div className="relative mt-6">
                <div className="absolute left-5 top-5 hidden w-px rounded-full bg-gradient-to-b from-brand-300 via-brand-200 to-slate-200 dark:to-slate-700 sm:bottom-5 sm:block" />
                <div className="space-y-5">
                  {safetyTimeline.map((item) => {
                    const palette = timelineToneClasses[item.tone];

                    return (
                      <div key={item.label} className="flex items-start gap-5">
                        <div
                          className={[
                            "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl font-display text-sm font-extrabold shadow-sm",
                            palette.badge,
                          ].join(" ")}
                        >
                          {item.label}
                        </div>
                        <article className={["flex-1 rounded-3xl border p-4", palette.panel].join(" ")}>
                          <h4 className={["font-display text-sm font-bold", palette.text].join(" ")}>{item.title}</h4>
                          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="font-display text-base font-bold text-slate-950 dark:text-white">
                  Emergency contact details can include
                </h3>
                <ul className="mt-4 space-y-3">
                  {safetyDetails.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-brand-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-emerald-50 p-6 dark:border-brand-500/20 dark:from-brand-500/10 dark:to-emerald-500/10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                  <Icon name="info" className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  The goal is to provide peace of mind while remaining privacy aware. Notifications are
                  only sent when the feature is enabled or when the customer chooses to notify a trusted
                  contact during confirmation.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="trust" className="bg-white py-20 dark:bg-slate-950 md:py-28">
          <div className="section-shell">
            <SectionHeader
              badge="Trust Model"
              icon="shield"
              tone="brand"
              title={
                <>
                  Communities need governance,
                  <span className="gradient-text"> not just features.</span>
                </>
              }
              description="The platform is designed to support trusted local operations with defined roles, clearer review paths, and realistic safety boundaries."
            />

            <div className="mt-14 rounded-[2rem] border border-slate-100 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/70">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                    What kind of platform this is
                  </p>
                  <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-200">
                    Kawing Ride is a managed coordination platform for community-based transport. It is
                    built for networks that already know each other, already move together, and now need a
                    more professional operating layer.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    How communities work
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                    Communities define who joins, who moderates, and how trust is earned. The platform
                    supports that structure through role-based access, clearer ride history, and more visible
                    accountability.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {trustPillars.map((item) => (
                <article key={item.title} className="card-lift rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {communityRoles.map((item) => (
                <article key={item.title} className="card-lift rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                  <ul className="mt-4 space-y-2">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <article className="mt-8 rounded-[2rem] border border-amber-100 bg-amber-50 p-7 dark:border-amber-500/20 dark:bg-amber-500/10">
              <h3 className="font-display text-lg font-bold text-amber-900 dark:text-amber-100">
                Honest safety boundaries
              </h3>
              <div className="mt-4 space-y-3">
                {trustBoundaries.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6 text-amber-800 dark:text-amber-200">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                      <Icon name="info" className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="bg-white py-20 dark:bg-slate-950 md:py-28">
          <div className="section-shell">
            <SectionHeader
              badge="Why Choose This"
              icon="info"
              tone="slate"
              title={
                <>
                  Why choose this
                  <span className="gradient-text"> if social media groups are free?</span>
                </>
              }
              description="Because free coordination still creates real costs. Communities already pay through wasted time, exposed details, weak trust signals, and preventable confusion."
            />

            <article className="mt-14 rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-amber-50 p-6 shadow-sm dark:border-brand-500/20 dark:from-brand-500/10 dark:via-slate-900 dark:to-amber-500/10 md:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                    The real comparison
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-slate-950 dark:text-white">
                    Free only works when time, privacy, and trust have no value.
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                    {pricingValueStatement}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                  The platform is not charging for messages.
                  <br />
                  It is charging for better operations.
                </div>
              </div>
            </article>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {comparisonHighlights.map((item) => (
                <article key={item.title} className="card-lift rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                    {item.title}
                  </div>
                  <div className="mt-5 space-y-4">
                    <div className="rounded-2xl border border-red-100 bg-red-50 p-4 dark:border-red-500/15 dark:bg-red-500/10">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700 dark:text-red-300">
                        Social media cost
                      </p>
                      <p className="mt-2 text-sm leading-6 text-red-800 dark:text-red-100">{item.social}</p>
                    </div>
                    <div className="rounded-2xl border border-brand-100 bg-brand-50 p-4 dark:border-brand-500/20 dark:bg-brand-500/10">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                        Platform return
                      </p>
                      <p className="mt-2 text-sm leading-6 text-brand-900 dark:text-brand-100">{item.platform}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-red-100 bg-red-50 p-6 dark:border-red-500/15 dark:bg-red-500/10">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Icon name="close" className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-red-900 dark:text-red-100">What free social media coordination often gives you</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {whyLegacyItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-red-800 dark:text-red-100">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-brand-100 bg-brand-50 p-6 dark:border-brand-500/20 dark:bg-brand-500/10">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-brand-900 dark:text-brand-100">What this platform gives communities in return</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {whyPlatformItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-900 dark:text-brand-100">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                        <Icon name="check-circle" className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white py-20 dark:bg-slate-950 md:py-28">
          <div className="section-shell">
            <SectionHeader
              badge="Pricing"
              icon="info"
              tone="brand"
              title={
                <>
                  Simple pricing that
                  <span className="gradient-text"> rewards strong community behavior.</span>
                </>
              }
              description="Platform fees support operations and product development, while reputation can lower monthly costs over time."
            />

            <div className="mt-14 space-y-5">
              {pricingPlans.map((plan) => {
                const palette = pricingToneClasses[plan.tone];

                return (
                  <article
                    key={plan.name}
                    className="overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="border-b border-slate-100 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/60 sm:p-6">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-2xl">
                          <div className="flex items-center gap-3">
                            <span className={["inline-flex h-10 w-10 items-center justify-center rounded-2xl", palette.badge].join(" ")}>
                              <Icon name={plan.icon} className="h-5 w-5" />
                            </span>
                            <div>
                              <p className={["text-[0.7rem] font-semibold uppercase tracking-[0.22em]", palette.text].join(" ")}>{plan.name}</p>
                              <h3 className="font-display text-xl font-extrabold text-slate-950 dark:text-white sm:text-2xl">
                                {plan.name} Plans
                              </h3>
                            </div>
                          </div>
                          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{plan.description}</p>
                        </div>
                        <div className="rounded-full bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-600 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700">
                          {plan.tiers.length} tier{plan.tiers.length > 1 ? "s" : ""}
                        </div>
                      </div>
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                      {plan.tiers.map((tier) => {
                        const totalItems = tier.sections.reduce((sum, section) => sum + section.items.length, 0);

                        return (
                          <article
                            key={`${plan.name}-${tier.name}`}
                            className={tier.featured ? "bg-brand-950/[0.03] dark:bg-brand-500/5" : ""}
                          >
                            <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.2fr)_auto] lg:items-start">
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h4 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                                    {tier.name}
                                  </h4>
                                  {tier.badge ? (
                                    <span
                                      className={
                                        tier.featured
                                          ? "rounded-full bg-brand-700 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white"
                                          : "rounded-full bg-amber-100 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:bg-amber-500/10 dark:text-amber-300"
                                      }
                                    >
                                      {tier.badge}
                                    </span>
                                  ) : null}
                                </div>

                                {tier.description ? (
                                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                    {tier.description}
                                  </p>
                                ) : null}

                                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                  {tier.discount}
                                </p>
                              </div>

                              <div className="space-y-3">
                                {tier.sections.map((section) => (
                                  <div
                                    key={section.title}
                                    className={
                                      section.style === "muted"
                                        ? "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/70"
                                        : "rounded-2xl border border-brand-100 bg-brand-50/50 px-4 py-3 dark:border-brand-500/20 dark:bg-brand-500/10"
                                    }
                                  >
                                    <div className="grid gap-2 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4">
                                      <p
                                        className={
                                          section.style === "muted"
                                            ? "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"
                                            : "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300"
                                        }
                                      >
                                        {section.title}
                                      </p>
                                      <p
                                        className={
                                          section.style === "muted"
                                            ? "text-sm leading-6 text-slate-500 dark:text-slate-400"
                                            : "text-sm leading-6 text-slate-700 dark:text-slate-200"
                                        }
                                      >
                                        {section.items.join(", ")}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="flex flex-col gap-3 lg:items-end">
                                <div className="flex items-end gap-2 lg:flex-col lg:items-end lg:gap-0">
                                  <div className="flex items-baseline gap-2">
                                    <span className="font-display text-3xl font-extrabold text-slate-950 dark:text-white">
                                      {tier.price}
                                    </span>
                                    <span className="text-xs text-slate-400 dark:text-slate-500">/month</span>
                                  </div>
                                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                    {totalItems} feature{totalItems > 1 ? "s" : ""}
                                  </span>
                                </div>

                                {tier.ctaLabel ? (
                                  <a
                                    href="#cta"
                                    className={
                                      tier.featured
                                        ? "inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-800"
                                        : "inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                                    }
                                  >
                                    {tier.ctaLabel}
                                    <Icon name="arrow-right" className="h-4 w-4" />
                                  </a>
                                ) : null}

                                {tier.note ? (
                                  <p className="max-w-xs text-xs leading-6 text-slate-500 dark:text-slate-400 lg:text-right">
                                    {tier.note}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </article>
                );
              })}
            </div>

            <article className="mt-8 flex items-start gap-4 rounded-3xl border border-amber-100 bg-amber-50 p-5 dark:border-amber-500/20 dark:bg-amber-500/10">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                <Icon name="info" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-sm font-bold text-amber-900 dark:text-amber-100">Your reputation supports your discount.</h3>
                <p className="mt-1 text-sm leading-6 text-amber-800 dark:text-amber-200">
                  Reductions are based on verified community behavior and ratings, then reflected in monthly
                  pricing as trust grows over time.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="rewards" className="bg-slate-50 py-20 dark:bg-slate-900/60 md:py-28">
          <div className="section-shell">
            <SectionHeader
              badge="Rewards"
              icon="gift"
              tone="amber"
              title={
                <>
                  Every completed ride
                  <span className="gradient-text-amber"> can return meaningful value.</span>
                </>
              }
              description="Customers and riders both earn reward points, with a review process that keeps redemption fair and accountable."
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="font-display text-lg font-extrabold text-slate-950 dark:text-white">How points work</h3>
                <div className="mt-6 space-y-4">
                  {rewardsHighlights.map((item) => {
                    const palette = featureToneClasses[item.tone];

                    return (
                      <div key={item.title} className={["rounded-3xl border p-4", palette.card].join(" ")}>
                        <div className="flex items-start gap-4">
                          <div
                            className={[
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl font-display text-sm font-extrabold",
                              palette.icon,
                            ].join(" ")}
                          >
                            {item.badge}
                          </div>
                          <div>
                            <h4 className={["font-display text-sm font-bold", palette.text].join(" ")}>{item.title}</h4>
                            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>

              <div className="flex flex-col gap-5">
                <article className="flex-1 rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      <Icon name="eye" className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-extrabold text-slate-950 dark:text-white">Human reviewed and bias aware</h3>
                  </div>
                  <div className="mt-5 space-y-3">
                    {rewardAuditPoints.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-[2rem] border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
                  <div className="flex items-center gap-2">
                    <Icon name="warning" className="h-4 w-4 text-amber-400" />
                    <h3 className="font-display text-sm font-bold text-white">Anti-abuse protection</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Reward activity is reviewed to identify suspicious or inflated bookings before any
                    redemption is approved. Honest participation remains the standard.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20 dark:bg-slate-950 md:py-28">
          <div className="section-shell">
            <SectionHeader
              badge="FAQ"
              icon="info"
              tone="slate"
              title={
                <>
                  Common questions,
                  <span className="gradient-text"> answered clearly.</span>
                </>
              }
              description="These answers explain how the platform works, how communities are managed, and what day-to-day operations should look like in practice."
            />

            <Reveal delay={0.04} className="mt-14">
              <FaqAccordion items={faqItems} />
            </Reveal>
          </div>
        </section>

        <section id="cta" className="cta-surface relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-amber-400/10" />

          <div className="section-shell relative">
            <div className="grid items-center gap-10 lg:grid-cols-5">
              <Reveal className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90">
                  <Icon name="bolt" className="h-3.5 w-3.5" />
                  Production ready
                </div>
                <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                  Choose the right
                  <br />
                  starting point.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-brand-100">
                  The goal is to operate with aligned communities, aligned expectations, and a clear day to
                  day model. Start where your group needs the most clarity.
                </p>
                <ul className="mt-6 space-y-3">
                  {ctaExpectations.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-brand-100">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-400/30 text-brand-200">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div className="space-y-4 lg:col-span-2">
                {ctaPaths.map((item, index) => (
                  <Reveal key={item.title} delay={0.08 + index * 0.05}>
                    <article className="rounded-[2rem] border border-white/20 bg-white/10 p-6 text-white">
                      <h3 className="font-display text-xl font-extrabold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-brand-100">{item.description}</p>
                      <a
                        href={item.href}
                        className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-brand-800 shadow-lg transition hover:bg-brand-50"
                      >
                        {item.label}
                        <Icon name="arrow-right" className="h-4 w-4" />
                      </a>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
