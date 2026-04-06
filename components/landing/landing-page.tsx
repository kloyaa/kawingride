import {
  ctaExpectations,
  heroHighlights,
  howItWorksSteps,
  legacyFlowQuotes,
  pricingPlans,
  problemCards,
  rewardAuditPoints,
  rewardsHighlights,
  safetyDetails,
  safetyTimeline,
  solutionChecklist,
  solutionPillars,
  structuredFlowItems,
  whyLegacyItems,
  whyPlatformItems,
} from "./content";
import { Icon } from "./icons";
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
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-brand-800 shadow-sm backdrop-blur dark:border-brand-500/20 dark:bg-slate-900/70 dark:text-brand-200">
                  <span className="inline-flex h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_0_6px_rgba(20,184,166,0.15)]" />
                  A smarter alternative to community ride booking
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
                  <p>Trusted by local community riders</p>
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                <div className="mb-5 flex items-center gap-2 border-b border-slate-100 pb-4 dark:border-slate-800">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-medium text-slate-400 dark:text-slate-500">community-ride.vercel.app (BETA)</span>
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
              </div>
            </div>
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

        <section className="bg-white py-20 dark:bg-slate-950 md:py-28">
          <div className="section-shell">
            <SectionHeader
              badge="Why It Matters"
              icon="info"
              tone="slate"
              title="This is not just another booking app."
              description="The platform focuses on the exact challenges customers and riders already face, while preserving the community flexibility people value."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-red-100 bg-red-50 p-6 dark:border-red-500/15 dark:bg-red-500/10">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Icon name="close" className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-red-900 dark:text-red-100">What social media often gives you</h3>
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
                  <h3 className="font-display text-base font-bold text-brand-900 dark:text-brand-100">What this platform gives you</h3>
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

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {pricingPlans.map((plan) => {
                const palette = pricingToneClasses[plan.tone];

                return (
                  <article
                    key={plan.name}
                    className={
                      plan.featured
                        ? "card-lift relative overflow-hidden rounded-[2rem] border border-brand-600 bg-gradient-to-br from-brand-700 to-brand-900 p-7 text-white shadow-xl"
                        : "card-lift rounded-[2rem] border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-7 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900"
                    }
                  >
                    {plan.featured ? (
                      <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
                    ) : null}

                    {plan.badge ? (
                      <div className="relative mb-5 inline-flex items-center rounded-full border border-amber-300/30 bg-amber-400/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                        {plan.badge}
                      </div>
                    ) : null}

                    <div
                      className={[
                        "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl",
                        plan.featured ? "bg-white/10 text-white" : palette.badge,
                      ].join(" ")}
                    >
                      <Icon name={plan.icon} className="h-5 w-5" />
                    </div>

                    <div
                      className={[
                        "text-xs font-semibold uppercase tracking-[0.22em]",
                        plan.featured ? "text-brand-200" : palette.text,
                      ].join(" ")}
                    >
                      {plan.name}
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className={plan.featured ? "font-display text-4xl font-extrabold text-white" : "font-display text-4xl font-extrabold text-slate-950 dark:text-white"}>
                        {plan.price}
                      </span>
                      <span className={plan.featured ? "text-sm text-brand-200" : "text-sm text-slate-400 dark:text-slate-500"}>/month</span>
                    </div>

                    {plan.description ? (
                      <p className={plan.featured ? "mt-1 text-sm text-brand-200" : "mt-1 text-sm text-slate-500 dark:text-slate-400"}>
                        {plan.description}
                      </p>
                    ) : null}

                    <p className={plan.featured ? "mt-4 text-sm leading-6 text-brand-100" : "mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300"}>
                      {plan.discount}
                    </p>

                    <div className={plan.featured ? "mt-5 border-t border-white/10 pt-5" : "mt-5 border-t border-slate-100 pt-5 dark:border-slate-800"}>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className={
                              plan.featured
                                ? "flex items-start gap-3 text-sm leading-6 text-brand-100"
                                : "flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                            }
                          >
                            <span
                              className={
                                plan.featured
                                  ? "mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-brand-200"
                                  : "mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-700"
                              }
                            >
                              <Icon name="check" className="h-3.5 w-3.5" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
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

        <section id="cta" className="cta-surface relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-amber-400/10" />

          <div className="section-shell relative">
            <div className="grid items-center gap-10 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90">
                  <Icon name="bolt" className="h-3.5 w-3.5" />
                  Get Started
                </div>
                <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                  From chaos
                  <br />
                  to clarity.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-brand-100">
                  The goal is straightforward: preserve the community driven nature of local rides, while
                  making the experience more private, more structured, safer, and easier to trust.
                </p>
              </div>

              <article className="rounded-[2rem] border border-white/20 bg-white/10 p-7 text-white lg:col-span-2">
                <h3 className="font-display text-xl font-extrabold">What users can expect</h3>
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
                <a
                  href="#"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-brand-800 shadow-lg transition hover:bg-brand-50"
                >
                  Join Your Community
                  <Icon name="arrow-right" className="h-4 w-4" />
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
