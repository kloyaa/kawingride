import {
  audienceGroups,
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
import { brandMeaning, type ThemeMode } from "@/constants/branding";
import { featureToneClasses, pricingToneClasses, timelineToneClasses } from "@/constants/landing";

type LandingPageProps = {
  initialTheme?: ThemeMode;
};

export function LandingPage({ initialTheme = "light" }: LandingPageProps) {
  const communityRoleIcons = {
    Admins: "shield",
    Customers: "user",
    Riders: "bolt",
  } as const;

  const customerPlan = pricingPlans.find((plan) => plan.name === "Customer");
  const operatorPlans = pricingPlans.filter((plan) => plan.name !== "Customer");

  const customerTierAvailability = customerPlan
    ? (() => {
        let inheritedFeatures = new Set<string>();

        return customerPlan.tiers.map((tier) => {
          const included = new Set(inheritedFeatures);

          tier.sections.forEach((section) => {
            if (section.style !== "muted") {
              section.items.forEach((item) => included.add(item));
            }
          });

          const excluded = new Set(
            tier.sections
              .filter((section) => section.style === "muted")
              .flatMap((section) => section.items),
          );

          inheritedFeatures = included;

          return { excluded, included, tier };
        });
      })()
    : [];

  const customerFeatureRows = Array.from(
    new Set(
      customerTierAvailability.flatMap(({ excluded, included }) => [
        ...Array.from(included),
        ...Array.from(excluded),
      ]),
    ),
  );

  return (
    <div className="landing-page min-h-screen bg-background text-foreground">
      <SiteHeader initialTheme={initialTheme} />

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

        <section id="mission" className="section-band bg-white py-20 dark:bg-slate-950 md:py-28">
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

            <div className="mt-14 space-y-6">
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)]">
                <Reveal className="surface-panel relative overflow-hidden rounded-[2.2rem] p-7 sm:p-9">
                  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 translate-x-1/4 -translate-y-1/4 rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-400/10" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 -translate-x-1/4 translate-y-1/4 rounded-full bg-amber-300/25 blur-3xl dark:bg-amber-400/10" />

                  <div className="relative">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                      Mission in practice
                    </p>
                    <p className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-[2.5rem]">
                      {missionStatement}
                    </p>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
                      {platformIdentity}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {[
                        "Private trip coordination",
                        "Clear decision making",
                        "Shared community accountability",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className="rounded-[1.4rem] border border-white/80 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-slate-950/45"
                        >
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-2 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
                      <div className="rounded-[1.6rem] border border-brand-100 bg-white/88 p-5 dark:border-brand-500/20 dark:bg-slate-950/55">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
                          Why Kawing
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{brandMeaning}</p>
                      </div>
                      <div className="rounded-[1.6rem] border border-slate-200/80 bg-slate-50/85 p-5 dark:border-slate-800 dark:bg-slate-900/70">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                          What the mission changes
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                          The goal is not to replace local relationships. The goal is to give those relationships a more
                          respectful system for booking, agreeing, and following through.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <div className="grid gap-6">
                  <Reveal className="rounded-[2rem] border border-slate-100 bg-slate-50/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/75">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                          Who we serve first
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                          Start with communities that already move together.
                        </h3>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 ring-1 ring-slate-200 dark:bg-slate-950 dark:text-slate-300 dark:ring-slate-700">
                        Focused launch audience
                      </span>
                    </div>

                    <div className="mt-6 space-y-3">
                      {audienceGroups.map((item, index) => (
                        <article
                          key={item.title}
                          className="rounded-[1.4rem] border border-white bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/70"
                        >
                          <div className="grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 font-display text-sm font-bold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <h4 className="font-display text-lg font-bold text-slate-950 dark:text-white">{item.title}</h4>
                              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </Reveal>

                  <Reveal delay={0.08} className="rounded-[2rem] border border-brand-100 bg-white p-6 shadow-sm dark:border-brand-500/20 dark:bg-slate-900">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                      Why this matters now
                    </p>
                    <div className="mt-6 space-y-4">
                      {whyNowPoints.map((item, index) => (
                        <div key={item} className="grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                          <div className="flex items-start gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-700 font-display text-sm font-bold text-white">
                              {index + 1}
                            </span>
                            {index < whyNowPoints.length - 1 ? (
                              <span className="hidden h-14 w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent sm:block" />
                            ) : null}
                          </div>
                          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>

              <Reveal delay={0.12} className="rounded-[2rem] border border-slate-100 bg-slate-50/85 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/75 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                      Mission pillars
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                      Design principles that guide every decision.
                    </h3>
                  </div>
                  <p className="max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Each pillar supports the same goal: a cleaner community transport experience from request to ride completion.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  {missionPillars.map((item, index) => (
                    <article
                      key={item.title}
                      className="card-lift rounded-[1.6rem] border border-white bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/70"
                    >
                      <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-brand-400 to-brand-700" />
                      <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                        Principle {String(index + 1).padStart(2, "0")}
                      </p>
                      <h4 className="mt-2 font-display text-lg font-bold text-slate-950 dark:text-white">{item.title}</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                    </article>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-band bg-slate-50 py-16 dark:bg-slate-900/60 md:py-20">
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
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <p className="text-sm font-medium text-brand-100/90">{founderNote.attribution}</p>
                      {["Community-first", "Trust-led", "Built for local networks"].map((item) => (
                        <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90">
                          {item}
                        </span>
                      ))}
                    </div>
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

        <section id="trust" className="section-band bg-slate-50/70 py-20 dark:bg-slate-900/70 md:py-28">
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

            <div className="mt-14 space-y-6">
              <Reveal className="surface-panel rounded-[2.2rem] p-7 sm:p-9">
                <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-start">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                      Trust by design
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-slate-950 dark:text-white">
                      Governance makes community transport feel consistent, not improvised.
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{platformIdentity}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Access with approval", "Reputation with history", "Escalation with review"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-brand-100 bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm dark:border-brand-500/20 dark:bg-slate-950 dark:text-brand-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.8rem] border border-brand-100 bg-brand-50/70 p-5 dark:border-brand-500/20 dark:bg-brand-500/10">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
                      What trust looks like in product terms
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      Members are not dropped into a loose feed. They enter a community system with clear roles,
                      visible standards, and better ways to review how people actually behave over time.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                  {communityRoles.map((item) => {
                    const roleIcon =
                      item.title === "Customers"
                        ? communityRoleIcons.Customers
                        : item.title === "Riders"
                          ? communityRoleIcons.Riders
                          : communityRoleIcons.Admins;

                    return (
                      <article
                        key={item.title}
                        className="card-lift rounded-[1.7rem] border border-white bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/75"
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                            <Icon name={roleIcon} className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                              Community role
                            </p>
                            <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.responsibilities.map((responsibility) => (
                            <span
                              key={responsibility}
                              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs leading-5 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                            >
                              {responsibility}
                            </span>
                          ))}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </Reveal>

              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
                <Reveal className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                    How trust becomes operational
                  </p>
                  <div className="mt-6 space-y-4">
                    {trustPillars.map((item, index) => (
                      <article
                        key={item.title}
                        className="rounded-[1.5rem] border border-slate-100 bg-slate-50/85 p-5 dark:border-slate-800 dark:bg-slate-950/70"
                      >
                        <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                          <div className="flex items-start gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-700 font-display text-sm font-bold text-white">
                              {index + 1}
                            </span>
                            {index < trustPillars.length - 1 ? (
                              <span className="hidden h-16 w-px bg-gradient-to-b from-brand-300 to-transparent sm:block" />
                            ) : null}
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.08} className="rounded-[2rem] border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-brand-50 p-6 shadow-sm dark:border-amber-500/20 dark:from-amber-500/10 dark:via-slate-900 dark:to-brand-500/10 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                      <Icon name="warning" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300">
                        Safety boundaries
                      </p>
                      <h3 className="font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                        Better guardrails, honest expectations.
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Kawing Ride can reduce uncertainty with structure, visibility, and clearer signals. Communities still
                    need sound judgment, local moderation, and standards that people actually follow.
                  </p>

                  <div className="mt-6 space-y-3">
                    {trustBoundaries.map((item, index) => (
                      <article
                        key={item}
                        className="rounded-[1.45rem] border border-white/80 bg-white/85 p-4 shadow-sm dark:border-white/10 dark:bg-slate-950/45"
                      >
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-100 font-display text-sm font-bold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                            {index + 1}
                          </span>
                          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band bg-white py-20 dark:bg-slate-950 md:py-28">
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

            <div className="mt-14 space-y-6">
              <Reveal className="surface-panel rounded-[2.2rem] p-7 sm:p-9">
                <div className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-end">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                      The real comparison
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-slate-950 dark:text-white">
                      Free only looks cheaper when the hidden costs stay invisible.
                    </h3>
                  </div>
                  <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{pricingValueStatement}</p>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-2">
                  <article className="rounded-[1.7rem] border border-red-100 bg-red-50/90 p-5 shadow-sm dark:border-red-500/20 dark:bg-red-500/10">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-red-700 dark:text-red-300">
                      Hidden costs in free groups
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {whyLegacyItems.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-red-100 bg-white px-3 py-1.5 text-xs leading-5 text-red-700 dark:border-red-500/20 dark:bg-slate-950 dark:text-red-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>

                  <article className="rounded-[1.7rem] border border-brand-100 bg-brand-50/85 p-5 shadow-sm dark:border-brand-500/20 dark:bg-brand-500/10">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                      What Kawing Ride gives back
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {whyPlatformItems.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-brand-100 bg-white px-3 py-1.5 text-xs leading-5 text-brand-700 dark:border-brand-500/20 dark:bg-slate-950 dark:text-brand-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              </Reveal>

              <div className="grid gap-4">
                {comparisonHighlights.map((item, index) => (
                  <Reveal key={item.title} delay={0.04 + index * 0.04}>
                    <article className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
                      <div className="grid gap-4 xl:grid-cols-[auto_minmax(0,0.85fr)_minmax(0,1.15fr)] xl:items-stretch">
                        <div className="flex items-center gap-4 xl:flex-col xl:items-start xl:justify-between">
                          <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950 font-display text-lg font-extrabold text-white dark:bg-white dark:text-slate-950">
                            {item.title.slice(0, 1)}
                          </span>
                          <div>
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                              Comparison {String(index + 1).padStart(2, "0")}
                            </p>
                            <h3 className="mt-1 font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <div className="rounded-[1.6rem] border border-red-100 bg-red-50/80 p-5 dark:border-red-500/20 dark:bg-red-500/10">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-red-700 dark:text-red-300">
                              Social media cost
                            </p>
                            <span className="h-2.5 w-20 rounded-full bg-red-100 dark:bg-red-500/20">
                              <span className="block h-full w-4/5 rounded-full bg-red-500" />
                            </span>
                          </div>
                          <p className="mt-4 text-sm leading-7 text-red-800 dark:text-red-100">{item.social}</p>
                        </div>

                        <div className="rounded-[1.6rem] border border-brand-100 bg-brand-50/80 p-5 dark:border-brand-500/20 dark:bg-brand-500/10">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                              Platform return
                            </p>
                            <span className="h-2.5 w-20 rounded-full bg-brand-100 dark:bg-brand-500/20">
                              <span className="block h-full w-11/12 rounded-full bg-brand-600" />
                            </span>
                          </div>
                          <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200">{item.platform}</p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section-band bg-slate-50/60 py-20 dark:bg-slate-900/60 md:py-28">
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

            <div className="mt-14 space-y-6">
              <Reveal className="surface-panel rounded-[2.2rem] p-7 sm:p-9">
                <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-end">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                      Membership that scales with trust
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-slate-950 dark:text-white">
                      Start with essential access, then unlock more value as participation grows.
                    </h3>
                  </div>
                  <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                    Pricing supports operations and product development, while stronger community behavior can lower
                    monthly costs over time.
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {["Free customer entry", "Operator and admin plans", "Discounts tied to reputation"].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.35rem] border border-white/80 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-950/45 dark:text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>

              {customerPlan ? (
                <Reveal className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                        Customer plans
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                        Pick the right level of access for how often you book.
                      </h3>
                      <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {customerPlan.description}
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      Compare Free and Standard
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {customerTierAvailability.map(({ tier }) => (
                      <article
                        key={`${customerPlan.name}-${tier.name}`}
                        className={
                          tier.featured
                            ? "rounded-[1.8rem] border border-brand-600 bg-gradient-to-br from-brand-700 to-brand-900 p-5 text-white shadow-lg"
                            : "rounded-[1.8rem] border border-slate-100 bg-slate-50/85 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/80"
                        }
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className={tier.featured ? "font-display text-xl font-bold text-white" : "font-display text-xl font-bold text-slate-950 dark:text-white"}>
                                {tier.name}
                              </h4>
                              {tier.badge ? (
                                <span className={tier.featured ? "rounded-full bg-white/15 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white" : "rounded-full bg-brand-50 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"}>
                                  {tier.badge}
                                </span>
                              ) : null}
                            </div>
                            {tier.description ? (
                              <p className={tier.featured ? "mt-2 text-sm leading-6 text-brand-100" : "mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400"}>
                                {tier.description}
                              </p>
                            ) : null}
                          </div>
                          <div className="text-right">
                            <p className={tier.featured ? "font-display text-3xl font-extrabold text-white" : "font-display text-3xl font-extrabold text-slate-950 dark:text-white"}>
                              {tier.price}
                            </p>
                            <p className={tier.featured ? "text-xs text-brand-100" : "text-xs text-slate-400 dark:text-slate-500"}>/month</p>
                          </div>
                        </div>

                        <p className={tier.featured ? "mt-4 text-sm leading-6 text-brand-100" : "mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300"}>
                          {tier.discount}
                        </p>

                        <div className="mt-5 space-y-3">
                          {tier.sections.map((section) => (
                            <div
                              key={section.title}
                              className={
                                tier.featured
                                  ? "rounded-[1.3rem] border border-white/10 bg-white/5 p-4"
                                  : section.style === "muted"
                                    ? "rounded-[1.3rem] border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                                    : "rounded-[1.3rem] border border-brand-100 bg-white p-4 dark:border-brand-500/20 dark:bg-slate-950"
                              }
                            >
                              <p className={tier.featured ? "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-100" : section.style === "muted" ? "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400" : "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300"}>
                                {section.title}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {section.items.map((item) => (
                                  <span
                                    key={item}
                                    className={
                                      tier.featured
                                        ? "rounded-full bg-white/10 px-3 py-1.5 text-xs leading-5 text-white"
                                        : section.style === "muted"
                                          ? "rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs leading-5 text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400"
                                          : "rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs leading-5 text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-300"
                                    }
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {tier.ctaLabel ? (
                          <a
                            href="#cta"
                            className={tier.featured ? "mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-brand-800 transition hover:bg-brand-50" : "mt-5 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"}
                          >
                            {tier.ctaLabel}
                            <Icon name="arrow-right" className="h-4 w-4" />
                          </a>
                        ) : null}
                      </article>
                    ))}
                  </div>

                  <div className="mt-6 overflow-x-auto rounded-[1.7rem] border border-slate-100 dark:border-slate-800">
                    <div className="min-w-[38rem]">
                      <div className="grid grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,0.8fr))] bg-slate-50/90 dark:bg-slate-950/90">
                        <div className="px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          Feature access
                        </div>
                        {customerTierAvailability.map(({ tier }) => (
                          <div
                            key={`${tier.name}-heading`}
                            className="border-l border-slate-200 px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:border-slate-800 dark:text-slate-300"
                          >
                            {tier.name}
                          </div>
                        ))}
                      </div>

                      <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {customerFeatureRows.map((item) => (
                          <div
                            key={item}
                            className="grid grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,0.8fr))] bg-white dark:bg-slate-900"
                          >
                            <div className="px-4 py-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item}</div>
                            {customerTierAvailability.map(({ excluded, included, tier }) => {
                              const isIncluded = included.has(item) && !excluded.has(item);

                              return (
                                <div
                                  key={`${tier.name}-${item}`}
                                  className="flex items-center justify-center border-l border-slate-100 px-4 py-3 dark:border-slate-800"
                                >
                                  <span
                                    className={[
                                      "inline-flex h-8 w-8 items-center justify-center rounded-2xl",
                                      isIncluded
                                        ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                                        : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500",
                                    ].join(" ")}
                                  >
                                    <Icon name={isIncluded ? "check" : "close"} className="h-4 w-4" />
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ) : null}

              <div className="grid gap-4 xl:grid-cols-2">
                {operatorPlans.map((plan, index) => {
                  const palette = pricingToneClasses[plan.tone];
                  const tier = plan.tiers[0];
                  const includedItems = tier?.sections.flatMap((section) => section.items) ?? [];

                  return (
                    <Reveal key={plan.name} delay={0.04 + index * 0.04}>
                      <article className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="max-w-2xl">
                            <div className="flex items-center gap-3">
                              <span className={["inline-flex h-11 w-11 items-center justify-center rounded-2xl", palette.badge].join(" ")}>
                                <Icon name={plan.icon} className="h-5 w-5" />
                              </span>
                              <div>
                                <p className={["text-[0.68rem] font-semibold uppercase tracking-[0.2em]", palette.text].join(" ")}>
                                  {plan.name}
                                </p>
                                <h3 className="font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                                  {tier?.name ?? plan.name}
                                </h3>
                              </div>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{plan.description}</p>
                          </div>

                          <div className="rounded-[1.3rem] border border-slate-200 bg-slate-50 px-4 py-3 text-right dark:border-slate-800 dark:bg-slate-950">
                            <p className="font-display text-3xl font-extrabold text-slate-950 dark:text-white">{tier?.price}</p>
                            <p className="text-xs text-slate-400 dark:text-slate-500">/month</p>
                          </div>
                        </div>

                        {tier?.description ? (
                          <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">{tier.description}</p>
                        ) : null}

                        {tier?.discount ? (
                          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{tier.discount}</p>
                        ) : null}

                        <div className="mt-5 flex flex-wrap gap-2">
                          {includedItems.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs leading-5 text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        {tier?.ctaLabel ? (
                          <a
                            href="#cta"
                            className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                          >
                            {tier.ctaLabel}
                            <Icon name="arrow-right" className="h-4 w-4" />
                          </a>
                        ) : null}
                      </article>
                    </Reveal>
                  );
                })}
              </div>
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
                <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                  Bring your community
                  <br />
                  into a better ride experience.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-brand-100">
                  Kawing Ride works best when communities start with shared standards, clear responsibilities,
                  and a better way to coordinate every request. Begin with the path that helps your group move
                  with more confidence.
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
