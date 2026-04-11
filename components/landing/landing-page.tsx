import { AnimatedHeroHeadline } from "./animated-hero-headline";
import Link from "next/link";

import { Reveal } from "./reveal";
import { ScrollToTop } from "./scroll-to-top";
import { SectionHeader } from "./section-header";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { type ThemeMode } from "@/constants/branding";

type LandingPageProps = {
  initialTheme?: ThemeMode;
};

const roleBlocks = [
  {
    title: "Customers",
    description: "Post requests privately, compare rider responses, and confirm with clearer visibility into what happens next.",
  },
  {
    title: "Riders",
    description: "Review requests, respond with a fare or counter, and work inside a more structured booking flow.",
  },
  {
    title: "Admins",
    description: "Set onboarding rules, manage standards, and keep local operations more organized from the start.",
  },
];

const useCases = [
  {
    title: "Community ride booking",
    description: "A calmer request flow for neighborhoods, campuses, workplaces, and local rider groups.",
    href: "/how-it-works",
  },
  {
    title: "Approved personal requests",
    description: "Support errands such as buying goods, pickups, and simple local tasks inside the same trusted workflow.",
    href: "/how-it-works",
  },
  {
    title: "Community launch planning",
    description: "Bring in the right admin, define local rules, and align rollout expectations before activation.",
    href: "/partnerships",
  },
];

const routeLinks = [
  {
    href: "/how-it-works",
    label: "How It Works",
    description: "Request flow, negotiation, confirmation, and approved personal requests.",
  },
  {
    href: "/safety",
    label: "Safety And Trust",
    description: "Privacy boundaries, support paths, and how urgent help is handled inside communities.",
  },
  {
    href: "/pricing",
    label: "Pricing",
    description: "Role-based plans and a clearer explanation of how pricing works.",
  },
  {
    href: "/updates",
    label: "Updates",
    description: "Rollout notes, product direction, and important announcements.",
  },
];

const launchLocations = ["Cagayan de Oro City", "Butuan City"];

export function LandingPage({ initialTheme = "light" }: LandingPageProps) {
  return (
    <div className="landing-page min-h-screen bg-background text-foreground">
      <SiteHeader initialTheme={initialTheme} />
      <ScrollToTop />

      <main>
        <section className="hero-surface relative overflow-hidden pb-16 pt-10 md:pb-20 md:pt-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/40" />
          <div className="section-shell relative">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_24rem] lg:items-start">
              <Reveal className="max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-brand-200/70 bg-white/82 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-800 shadow-sm backdrop-blur dark:border-brand-500/20 dark:bg-slate-950/70 dark:text-brand-200">
                  Trusted local mobility
                </div>

                <AnimatedHeroHeadline
                  highlightedText="community rides"
                  lines={["Private booking for", "community rides", "and approved local requests."]}
                />

                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  Kawing Ride helps communities manage ride requests, rider responses, personal errands, and local
                  standards in a way that feels more structured, more private, and more dependable.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
                  >
                    Explore The Product
                  </Link>
                </div>

                <div className="mt-8 grid gap-4 rounded-[1.6rem] border border-slate-200/80 bg-white/70 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/45 sm:grid-cols-3">
                  {roleBlocks.map((item) => (
                    <div key={item.title} className="min-w-0 border-l border-slate-200 pl-4 first:border-l-0 first:pl-0 dark:border-slate-800">
                      <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.06} className="lg:pt-2">
                <aside className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-5 shadow-[0_22px_50px_rgba(29,42,45,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/82 dark:shadow-[0_22px_50px_rgba(7,12,14,0.3)] sm:p-6">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-slate-800">
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Structured booking preview</p>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      Rider view
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="rounded-[1.4rem] border border-slate-200/80 bg-slate-50/85 p-3.5 dark:border-slate-800 dark:bg-slate-900/70">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                            Ride request
                          </p>
                          <p className="mt-1.5 text-[1.05rem] font-semibold leading-7 text-slate-900 dark:text-white">
                            Gaisano Capital to SM City Cagayan
                          </p>
                        </div>
                        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[0.72rem] font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                          Negotiating
                        </span>
                      </div>

                      <div className="mt-4 grid gap-3">
                        <div className="relative grid grid-cols-[18px_minmax(0,1fr)] gap-x-3">
                          <div className="relative">
                            <span className="route-pulse-dot absolute left-0.5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-brand-200 bg-brand-500" />
                            <span className="absolute left-[7px] top-4 bottom-[-28px] w-px bg-slate-300 dark:bg-slate-700" />
                          </div>
                          <div>
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                              Pickup
                            </p>
                            <p className="mt-0.5 text-sm font-medium text-slate-700 dark:text-slate-200">Gaisano Capital</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-[18px_minmax(0,1fr)] gap-x-3">
                          <div className="relative">
                            <span className="absolute left-[2px] top-1.5 h-2.5 w-2.5 rounded-sm bg-slate-900 dark:bg-slate-200" />
                          </div>
                          <div>
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                              Destination
                            </p>
                            <p className="mt-0.5 text-sm font-medium text-slate-700 dark:text-slate-200">SM City Cagayan</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 border-t border-slate-200 pt-3 dark:border-slate-800">
                        {[
                          { label: "Opening fare", value: "₱120" },
                        ].map((item) => (
                          <div key={item.label} className="min-w-0">
                            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                              {item.label}
                            </p>
                            <p className="mt-1.5 text-lg font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-xl">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-4 dark:border-slate-800 dark:bg-slate-950/70">
                      <div className="flex items-center justify-end">
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                          Compare offers
                        </span>
                      </div>

                      <div className="mt-4 space-y-3">
                        {[
                          { name: "Rider A", type: "Fixed fare", distance: "450 m away", value: "₱120" },
                          { name: "Rider B", type: "Meter suggestion", distance: "1.2 km away", value: "~₱95" },
                          { name: "Rider C", type: "Counter offer", distance: "3 km away", value: "₱105", previousValue: "₱120" },
                        ].map((item) => (
                          <div
                            key={item.name}
                            className="flex items-center justify-between rounded-[1rem] border border-slate-200/80 bg-slate-50/85 px-3.5 py-3 dark:border-slate-800 dark:bg-slate-900/70"
                          >
                            <div>
                              <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
                              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                                {item.type}
                              </p>
                              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.distance}</p>
                            </div>
                            <div className="text-right">
                              {"previousValue" in item ? (
                                <p className="text-xs text-slate-400 line-through dark:text-slate-500">{item.previousValue}</p>
                              ) : null}
                              <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-red-100 bg-red-50/80 px-4 py-4 dark:border-red-500/20 dark:bg-red-500/10">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-red-700 dark:text-red-300">
                        Community safety support
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                        Urgent community support becomes available inside each approved community experience.
                      </p>
                    </div>
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 dark:bg-slate-950 md:py-20">
          <div className="section-shell">
            <SectionHeader
              badge="Use Cases"
              icon="users"
              tone="brand"
              title="Designed around real community operations."
              description="Relevant for transport groups, neighborhood admins, schools, workplaces, and other trusted local networks."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {useCases.map((item, index) => (
                <Reveal key={item.title} delay={0.04 + index * 0.05}>
                  <Link
                    href={item.href}
                    className="block h-full rounded-[1.7rem] border border-slate-200/80 bg-slate-50/70 p-6 transition hover:border-brand-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-brand-500/30 dark:hover:bg-slate-950"
                  >
                    <h2 className="text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 dark:bg-slate-900/50 md:py-20">
          <div className="section-shell">
            <SectionHeader
              badge="Explore"
              icon="check-circle"
              tone="amber"
              title="Each route answers a specific decision."
              description="Explore the product, trust model, pricing, and rollout details without losing the main overview."
            />

            <div className="mt-12 divide-y divide-slate-200 rounded-[1.8rem] border border-slate-200/80 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-950">
              {routeLinks.map((item, index) => (
                <Reveal key={item.href} delay={0.03 + index * 0.03}>
                  <Link
                    href={item.href}
                    className="grid gap-3 px-6 py-5 transition hover:bg-slate-50 dark:hover:bg-slate-900 md:grid-cols-[16rem_minmax(0,1fr)_auto] md:items-center md:px-7"
                  >
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{item.label}</p>
                    </div>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                    <span className="text-sm font-semibold text-brand-700 dark:text-brand-300">Open</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 dark:bg-slate-950 md:py-20">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start">
              <Reveal>
                <SectionHeader
                  badge="Rollout"
                  icon="calendar"
                  tone="violet"
                  title="Current launch planning stays focused and location-aware."
                  description="The right admin lead, clear standards, and a realistic first scope matter more than launching everywhere at once."
                />

                <div className="mt-8 flex flex-wrap gap-2">
                  {launchLocations.map((location) => (
                    <span
                      key={location}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <aside className="rounded-[1.8rem] border border-brand-100 bg-brand-50/70 p-6 dark:border-brand-500/20 dark:bg-brand-500/10 sm:p-7">
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">
                    Organizations exploring launch fit can continue through partnerships or start with admin access.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/partnerships"
                      className="inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
                    >
                      Open Partnerships
                    </Link>
                    <Link
                      href="/updates"
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-brand-500/40 dark:hover:text-brand-200"
                    >
                      View Updates
                    </Link>
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
