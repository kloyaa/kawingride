import Link from "next/link";
import Image from "next/image";

import {
  ctaExpectations,
  ctaPaths,
  communityRoles,
  dataHandlingGroups,
  faqItems,
  heroHighlights,
  launchAreaNotes,
  launchAreas,
  missionDescription,
  missionPillars,
  platformIdentity,
  pricingPlans,
  problemCards,
  rewardAuditPoints,
  rewardsHighlights,
  safetyDetails,
  safetyTimeline,
  solutionChecklist,
  solutionPillars,
  privacyAssurances,
  trustBoundaries,
  trustStory,
  trustPillars,
} from "./content";
import { FaqAccordion } from "./faq-accordion";
import { HowItWorksFlow } from "./how-it-works-flow";
import { Icon } from "./icons";
import { Reveal } from "./reveal";
import { ScrollToTop } from "./scroll-to-top";
import { SectionHeader } from "./section-header";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { blobAssetPaths } from "@/constants/blob-assets";
import { brandMeaning, type ThemeMode } from "@/constants/branding";
import { featureToneClasses, pricingToneClasses, timelineToneClasses } from "@/constants/landing";

type LandingPageProps = {
  initialTheme?: ThemeMode;
};

export function LandingPage({ initialTheme = "light" }: LandingPageProps) {
  const communityRoleIcons = {
    Admins: "shield",
    Customers: "user",
    Moderators: "eye",
    Riders: "bolt",
  } as const;

  const allPricingTiers = pricingPlans.flatMap((plan) =>
    plan.tiers.map((tier) => ({
      planName: plan.name,
      planIcon: plan.icon,
      planTone: plan.tone,
      tierName: tier.name,
      price: tier.price,
      badge: tier.badge,
      featured: tier.featured ?? false,
      description: tier.description ?? "",
      discount: tier.discount,
      ctaLabel: tier.ctaLabel,
      features: tier.sections
        .filter((s) => s.style !== "muted")
        .flatMap((s) => s.items),
    }))
  );

  return (
    <div className="landing-page min-h-screen bg-background text-foreground">
      <SiteHeader initialTheme={initialTheme} />
      <ScrollToTop />

      <main>
        <section className="hero-surface noise-overlay relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/70" />
          <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-12 h-64 w-64 rounded-full bg-amber-300/15 blur-3xl" />

          <div className="section-shell relative">
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
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

              <Reveal delay={0.08} className="relative rounded-[2rem] p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-5">
                <div className="mb-5 flex items-center gap-2 border-b border-slate-100 pb-4 dark:border-slate-800">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-medium text-slate-400 dark:text-slate-500">kawingride.com</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {heroHighlights.map((item, i) => {
                    const palette = featureToneClasses[item.tone];

                    return (
                      <Reveal key={item.title} delay={0.12 + i * 0.07}>
                        <article
                          className={[
                            "card-lift rounded-2xl border p-4 shadow-sm",
                            palette.card,
                          ].join(" ")}
                        >
                          <div className={["mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl", palette.icon].join(" ")}>
                            <Icon name={item.icon} className="h-4 w-4" />
                          </div>
                          <h2 className={["font-display text-base font-extrabold", palette.text].join(" ")}>{item.title}</h2>
                          <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">{item.description}</p>
                        </article>
                      </Reveal>
                    );
                  })}
                </div>

                <article className="mt-3 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/90">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      Active Ride Request
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
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
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Opening fare</p>
                      <p className="font-display text-2xl font-extrabold text-brand-700">₱120</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">3 responses</p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      Rider responses
                    </p>
                    <div className="space-y-1.5">
                      {[
                        { label: "Fixed bid", amount: "₱120", cls: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300" },
                        { label: "Meter", amount: "~₱95", cls: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300" },
                        { label: "Counter", amount: "₱105", cls: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300" },
                      ].map((r) => (
                        <div key={r.label} className="flex items-center justify-between rounded-xl bg-slate-50/80 px-3 py-2 dark:bg-slate-800/60">
                          <span className={["rounded-full px-2 py-0.5 text-[0.65rem] font-semibold", r.cls].join(" ")}>
                            {r.label}
                          </span>
                          <span className="font-display text-sm font-bold text-slate-900 dark:text-white">{r.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                <div className="pointer-events-none absolute -right-3 -top-12 z-10 sm:-right-5 sm:-top-14">
                  <div className="kawing-float kawing-float-delay-1">
                    <Image
                      src={blobAssetPaths.glasses}
                      alt=""
                      width={236}
                      height={236}
                      unoptimized
                      className="h-auto w-36 rotate-[11deg] object-contain drop-shadow-[0_20px_30px_rgba(29,42,45,0.14)] sm:w-44"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="mission" className="section-band bg-white py-20 dark:bg-slate-950 md:py-28">
          <div className="section-shell">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-100/90 px-4 py-1.5 text-xs font-semibold text-brand-950 shadow-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-700">
                  <Icon name="users" className="h-3.5 w-3.5" />
                </span>
                <span>Mission</span>
              </div>
              <h2 className="max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-[2.9rem]">
                Trusted local mobility,
                <span className="text-brand-800 dark:text-brand-200"> more private, clear, and accountable.</span>
              </h2>
              <div className="flex items-start gap-4">
                <span className="mt-1 hidden h-12 w-px rounded-full bg-gradient-to-b from-brand-500 to-transparent sm:block" />
                <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">{missionDescription}</p>
              </div>
            </div>

            {/* Mission pillars */}
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {missionPillars.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.1}>
                  <article className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                    <span
                      className="pointer-events-none absolute -right-3 -top-5 z-0 select-none font-display text-[7rem] font-black leading-none text-slate-50 dark:text-slate-800"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="relative z-10">
                      <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-700 font-display text-sm font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-extrabold text-slate-950 dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Platform context + Our Story */}
            <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <Reveal>
                <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-300">
                    What this platform is
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{platformIdentity}</p>
                  <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      Why &quot;Kawing&quot;
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{brandMeaning}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <article className="flex h-full flex-col rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 to-brand-50/60 p-7 shadow-sm dark:border-amber-500/20 dark:from-amber-500/10 dark:to-brand-500/10 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-300">
                    Our Story
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                    The context behind what we&apos;re building.
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    The founder note and brand origin story live on a lighter page so this one stays focused on
                    the product.
                  </p>
                  <Link
                    href="/our-story"
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-brand-800 shadow-sm transition hover:bg-brand-50 dark:bg-slate-950 dark:text-brand-200 dark:hover:bg-slate-900"
                  >
                    Read Our Story
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
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
                <Reveal key={item.title} delay={index * 0.07}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-red-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md dark:border-red-500/15 dark:bg-slate-900">
                    {/* Ghost number */}
                    <span
                      className="pointer-events-none absolute -right-2 -top-5 z-0 select-none font-display text-[7rem] font-black leading-none text-red-50 dark:text-red-950"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="relative z-10">
                      {/* Red top accent bar */}
                      <div className="mb-6 h-1 w-10 rounded-full bg-red-200 transition-colors group-hover:bg-red-400 dark:bg-red-500/30 dark:group-hover:bg-red-500/60" />
                      <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
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
              <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h3 className="font-display text-2xl font-extrabold">What changes for the user?</h3>
                  <ul className="mt-5 space-y-3">
                    {solutionChecklist.map((item, i) => (
                      <Reveal key={item} delay={0.05 + i * 0.06}>
                        <li className="flex items-start gap-3 text-sm leading-6 text-brand-100">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-200">
                            <Icon name="check" className="h-3.5 w-3.5" />
                          </span>
                          <span>{item}</span>
                        </li>
                      </Reveal>
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
                <Reveal key={item.title} delay={0.05 + index * 0.07}>
                  <article className="card-lift h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 font-display text-sm font-bold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display text-base font-bold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.description}</p>
                  </article>
                </Reveal>
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

            <Reveal delay={0.08} className="mt-14">
              <HowItWorksFlow />
            </Reveal>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <div className="grid md:grid-cols-2">
                {/* Left: chat mockup */}
                <div className="flex flex-col bg-slate-900 dark:bg-slate-950">
                  <div className="flex items-center gap-3 border-b border-slate-700/60 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-slate-300">
                      JD
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Rider No.41</p>
                      <p className="text-xs text-slate-500">Active · CDO</p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 p-5">
                    {[
                      { side: "left", name: "John D.", color: "bg-slate-700", text: "Joined the chat" },
                      { side: "right", text: "Hello, sir. Pila?" },
                      { side: "left", name: "John D.", color: "bg-slate-700", text: "Ikaw pila man?" },
                      { side: "right", text: "Ikaw sir" },
                      { side: "left", name: "John D.", color: "bg-slate-800", text: "Ikaw offer?" },
                      { side: "right", text: "Kaya 100?" },
                    ].map((msg, i) =>
                      msg.side === "left" ? (
                        <div key={i} className="flex items-end gap-2">
                          <div className={["flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold text-white", msg.color].join(" ")}>
                            {msg.name?.[0]}
                          </div>
                          <div className="max-w-[72%] rounded-2xl rounded-bl-sm bg-slate-800 px-4 py-2.5">
                            <p className="mb-0.5 text-[0.65rem] text-slate-500">{msg.name}</p>
                            <p className="text-sm text-slate-200">{msg.text}</p>
                          </div>
                        </div>
                      ) : (
                        <div key={i} className="flex items-end justify-end gap-2">
                          <div className="max-w-[72%] rounded-2xl rounded-br-sm bg-brand-700 px-4 py-2.5">
                            <p className="text-sm text-white">{msg.text}</p>
                            <p className="mt-0.5 text-right text-[0.65rem] text-brand-300">You · seen</p>
                          </div>
                        </div>
                      )
                    )}

                    <div className="flex items-center gap-2 rounded-xl bg-red-950/60 px-3 py-2 text-xs text-red-400">
                      <Icon name="warning" className="h-3.5 w-3.5 shrink-0" />
                      No confirmation. No safety trail. No record. Ghosted.
                    </div>
                  </div>

                  <div className="border-t border-slate-800 px-5 py-3">
                    <p className="text-xs font-semibold text-slate-500">Before — public group chat, no structure</p>
                  </div>
                </div>

                {/* Right: new structured way */}
                <div className="flex flex-col justify-between bg-white p-7 dark:bg-slate-900 md:p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-300">
                      With Kawing Ride
                    </p>
                    <h4 className="mt-2 font-display text-xl font-extrabold text-slate-950 dark:text-white">
                      Every step is tracked,<br />private, and confirmed.
                    </h4>
                    <ul className="mt-7 space-y-4">
                      {[
                        { icon: "bolt" as const, text: "Post your fare — riders respond to you privately" },
                        { icon: "eye" as const, text: "Review all offers before deciding anything" },
                        { icon: "chart" as const, text: "Negotiate in one place without the noise" },
                        { icon: "check-circle" as const, text: "Both sides confirm before the booking is real" },
                      ].map((item) => (
                        <li key={item.text} className="flex items-center gap-3.5">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                            <Icon name={item.icon} className="h-4 w-4" />
                          </span>
                          <span className="text-sm leading-5 text-slate-700 dark:text-slate-300">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
                    <p className="text-xs font-semibold text-brand-700 dark:text-brand-300">
                      After — structured, private, and fully confirmed
                    </p>
                  </div>
                </div>
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

        <section id="trust" className="section-band bg-slate-50 py-20 dark:bg-slate-900/70 md:py-28">
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
              <Reveal className="rounded-[2rem] border border-brand-100 bg-white p-6 shadow-sm dark:border-brand-500/20 dark:bg-slate-900 sm:p-7">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                      Why this matters
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-[2rem]">
                      {trustStory.title}
                    </h3>
                  </div>

                  <div className="space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {trustStory.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal className="surface-panel relative overflow-hidden rounded-[2.2rem] p-7 sm:p-9">
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

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {communityRoles.map((item) => {
                    const roleIcon =
                      communityRoleIcons[item.title as keyof typeof communityRoleIcons] ??
                      communityRoleIcons.Admins;

                    return (
                      <article
                        key={item.title}
                        className="card-lift rounded-[1.7rem] border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/75"
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

                <div className="mt-8 grid gap-4 xl:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)]">
                  {dataHandlingGroups.map((group, index) => (
                    <article
                      key={group.title}
                      className="rounded-[1.8rem] border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/75 sm:p-6"
                    >
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                          <Icon name={index === 0 ? "lock" : "shield"} className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                            Data handling
                          </p>
                          <h3 className="mt-1 font-display text-xl font-bold text-slate-950 dark:text-white">
                            {group.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{group.summary}</p>
                      <div className="mt-5 space-y-3">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="rounded-[1.3rem] border border-slate-100 bg-slate-50/85 p-4 dark:border-slate-800 dark:bg-slate-900/70"
                          >
                            <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{item}</p>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {privacyAssurances.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.35rem] border border-brand-100 bg-brand-50/85 px-4 py-3 text-sm font-medium leading-6 text-brand-800 shadow-sm dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>

              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
                <Reveal className="relative rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
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

                <Reveal delay={0.08} className="relative rounded-[2rem] border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-brand-50 p-6 shadow-sm dark:border-amber-500/20 dark:from-amber-500/10 dark:via-slate-900 dark:to-brand-500/10 sm:p-7">
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
              description="Choose the level that fits how your community books today, then let stronger participation lower costs over time."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {allPricingTiers.map((tier, i) => {
                const palette = pricingToneClasses[tier.planTone as keyof typeof pricingToneClasses];
                return (
                  <Reveal
                    key={`${tier.planName}-${tier.tierName}`}
                    delay={i * 0.07}
                    className={[
                      "flex flex-col rounded-3xl p-7 shadow-sm",
                      tier.featured
                        ? "bg-gradient-to-b from-slate-900 to-slate-800 text-white dark:from-slate-800 dark:to-slate-900"
                        : "border border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900",
                    ].join(" ")}
                  >
                    {/* Plan role badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={[
                          "rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest",
                          tier.featured
                            ? "bg-white/10 text-slate-300"
                            : [palette.badge, ""].join(" "),
                        ].join(" ")}
                      >
                        {tier.planName}
                      </span>
                      {tier.badge ? (
                        <span
                          className={[
                            "rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest",
                            tier.featured
                              ? "bg-brand-500/30 text-brand-200"
                              : "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300",
                          ].join(" ")}
                        >
                          {tier.badge}
                        </span>
                      ) : null}
                    </div>

                    {/* Tier name */}
                    <h3
                      className={[
                        "mt-5 font-display text-2xl font-extrabold",
                        tier.featured ? "text-white" : "text-slate-950 dark:text-white",
                      ].join(" ")}
                    >
                      {tier.tierName}
                    </h3>

                    {/* Price */}
                    <div className="mt-3 flex items-end gap-1.5">
                      <span
                        className={[
                          "font-display text-5xl font-black leading-none tracking-tight",
                          tier.featured ? "text-white" : "text-slate-950 dark:text-white",
                        ].join(" ")}
                      >
                        {tier.price}
                      </span>
                      <span
                        className={[
                          "mb-1 text-sm",
                          tier.featured ? "text-slate-400" : "text-slate-400 dark:text-slate-500",
                        ].join(" ")}
                      >
                        /month
                      </span>
                    </div>

                    {/* Description */}
                    {tier.description ? (
                      <p
                        className={[
                          "mt-3 text-sm leading-6",
                          tier.featured ? "text-slate-400" : "text-slate-500 dark:text-slate-400",
                        ].join(" ")}
                      >
                        {tier.description}
                      </p>
                    ) : null}

                    {/* Divider */}
                    <div
                      className={[
                        "my-5 h-px",
                        tier.featured ? "bg-white/10" : "bg-slate-100 dark:bg-slate-800",
                      ].join(" ")}
                    />

                    {/* Features */}
                    <ul className="flex-1 space-y-3">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3">
                          <span
                            className={[
                              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                              tier.featured
                                ? "bg-brand-500/25 text-brand-300"
                                : "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300",
                            ].join(" ")}
                          >
                            <Icon name="check" className="h-3 w-3" />
                          </span>
                          <span
                            className={[
                              "text-sm leading-5",
                              tier.featured ? "text-slate-300" : "text-slate-600 dark:text-slate-300",
                            ].join(" ")}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Discount note */}
                    {tier.discount ? (
                      <p
                        className={[
                          "mt-5 text-xs leading-5",
                          tier.featured ? "text-slate-500" : "text-slate-400 dark:text-slate-500",
                        ].join(" ")}
                      >
                        {tier.discount}
                      </p>
                    ) : null}

                    {/* CTA */}
                    {tier.ctaLabel ? (
                      <Link
                        href="/access"
                        className={[
                          "mt-5 flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold transition",
                          tier.featured
                            ? "bg-brand-500 text-white hover:bg-brand-400"
                            : "bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100",
                        ].join(" ")}
                      >
                        {tier.ctaLabel}
                        <Icon name="arrow-right" className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </Reveal>
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

            {/* Stat cards — 3 reward highlights */}
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {rewardsHighlights.map((item, i) => {
                const palette = featureToneClasses[item.tone];
                return (
                  <Reveal key={item.title} delay={i * 0.1}>
                    <article className={["group relative overflow-hidden rounded-3xl border p-8 shadow-sm", palette.card].join(" ")}>
                      <span
                        className="pointer-events-none absolute -right-3 -bottom-4 z-0 select-none font-display text-[5.5rem] font-black leading-none opacity-20"
                        aria-hidden="true"
                      >
                        {item.badge}
                      </span>
                      <div className="relative z-10">
                        <p className={["font-display text-6xl font-black leading-none tracking-tight", palette.text].join(" ")}>
                          {item.badge}
                        </p>
                        <h4 className={["mt-4 font-display text-base font-extrabold", palette.text].join(" ")}>{item.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            {/* Audit + Anti-abuse */}
            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <Reveal>
                <article className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                      <Icon name="eye" className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-extrabold text-slate-950 dark:text-white">Human reviewed, bias aware</h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {rewardAuditPoints.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                          <Icon name="check" className="h-3 w-3" />
                        </span>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>

              <Reveal delay={0.08}>
                <article className="rounded-3xl border border-amber-200 bg-gradient-to-br from-slate-900 to-slate-800 p-7 dark:border-amber-500/20">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-400">
                      <Icon name="warning" className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-extrabold text-white">Anti-abuse protection</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Reward activity is reviewed to identify suspicious or inflated bookings before any
                    redemption is approved. Honest participation remains the standard.
                  </p>
                </article>
              </Reveal>
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
              description="These are the key things people usually want to know before joining or bringing a community into Kawing Ride."
            />

            <Reveal delay={0.04} className="mt-14">
              <FaqAccordion items={faqItems} />
            </Reveal>
          </div>
        </section>

        <section id="availability" className="bg-slate-50 py-20 dark:bg-slate-900/60 md:py-28">
          <div className="section-shell">
            <SectionHeader
              badge="Launch Areas"
              icon="calendar"
              tone="brand"
              title={
                <>
                  Starting with
                  <span className="gradient-text"> Cagayan de Oro City and Butuan City.</span>
                </>
              }
              description="Kawing Ride is being positioned for communities that need a clearer launch path, stronger onboarding, and better day-to-day transport coordination in these first operating areas."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <Reveal className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                  Initial focus
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {launchAreas.map((item, index) => (
                    <article
                      key={item.title}
                      className="rounded-[1.7rem] border border-slate-100 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/70"
                    >
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-700 font-display text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08} className="rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-amber-50 p-6 shadow-sm dark:border-brand-500/20 dark:from-brand-500/10 dark:via-slate-900 dark:to-amber-500/10 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                  What launch needs first
                </p>
                <div className="mt-6 space-y-4">
                  {launchAreaNotes.map((item, index) => (
                    <div key={item} className="grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white font-display text-sm font-bold text-brand-700 shadow-sm dark:bg-slate-950 dark:text-brand-300">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.6rem] border border-white/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/45">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                    Community and partnership path
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    For community onboarding, local rollout discussions, or partnership conversations in Cagayan de Oro City
                    and Butuan City, the next step is to use the request access path and align the right admin,
                    rider, and customer setup from the start.
                  </p>
                  <Link
                    href="/access"
                    className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                  >
                    Request Access
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
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
