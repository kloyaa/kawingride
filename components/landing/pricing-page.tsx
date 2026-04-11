import Link from "next/link";

import { pricingPlans, pricingValueStatement, rewardAuditPoints, rewardsHighlights } from "./content";
import { MarketingPageShell } from "./page-shell";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { type ThemeMode } from "@/constants/branding";

type PricingPageProps = {
  initialTheme?: ThemeMode;
};

const pricingPrinciples = [
  "Membership pricing explains platform access, not the final amount of each trip.",
  "Riders and customers can still agree on the specific trip price inside the booking flow.",
  "Communities can use local pricing guidance to support fairer decisions without forcing one rigid fare.",
];

export function PricingPage({ initialTheme = "light" }: PricingPageProps) {
  return (
    <MarketingPageShell
      initialTheme={initialTheme}
      eyebrow="Pricing"
      title="Clear plan structure for customers, riders, and community admins."
      titleLines={["Clear plan structure for", "customers, riders,", "and community admins."]}
      highlightedText="customers, riders,"
      description="Kawing Ride pricing is designed to be easier to understand before onboarding, while still leaving room for negotiated trip outcomes inside the product."
      actions={[
        { href: "/access", label: "Start Admin Access" },
        { href: "/partnerships", label: "Talk To Us", variant: "secondary" },
      ]}
      highlights={[
        {
          title: "Role-based plans",
          description: "Customers, riders, and admins each have a clearer access model.",
        },
        {
          title: "Flexible trip pricing",
          description: "The platform supports negotiation instead of pretending every trip should cost the same.",
        },
        {
          title: "Rewards remain separate",
          description: "Points and incentives do not replace direct ride payment.",
        },
      ]}
    >
      <section className="bg-white py-16 dark:bg-slate-950 md:py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <Reveal>
              <SectionHeader
                badge="Principles"
                icon="chart"
                tone="brand"
                title="Platform pricing and trip pricing are related, but not the same."
                description={pricingValueStatement}
              />
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-[1.8rem] border border-slate-200/80 bg-slate-50/70 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-7">
                <div className="space-y-4">
                  {pricingPrinciples.map((item, index) => (
                    <div key={item} className="border-l border-slate-200 pl-4 dark:border-slate-800">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-slate-700 dark:text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900/50 md:py-20">
        <div className="section-shell">
          <SectionHeader
            badge="Plans"
            icon="star"
            tone="violet"
            title="Membership is organized by role."
            description="This gives communities a clearer view of who is using the platform, what access they have, and how local operations can be managed."
          />

          <div className="mt-12 grid gap-5 xl:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={0.04 + index * 0.05}>
                <article className="rounded-[1.9rem] border border-white bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/80 sm:p-7">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
                    {plan.name}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{plan.description}</p>

                  <div className="mt-5 space-y-4">
                    {plan.tiers.map((tier) => (
                      <div key={tier.name} className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-900/60">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">{tier.name}</h2>
                            <p className="mt-1 text-2xl font-extrabold text-brand-700 dark:text-brand-300">{tier.price}</p>
                          </div>
                          {tier.badge ? (
                            <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                              {tier.badge}
                            </span>
                          ) : null}
                        </div>
                        {tier.description ? (
                          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{tier.description}</p>
                        ) : null}
                        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">{tier.discount}</p>
                        <ul className="mt-4 space-y-2.5">
                          {tier.sections.flatMap((section) => section.items).map((item) => (
                            <li key={`${tier.name}-${item}`} className="text-sm leading-7 text-slate-700 dark:text-slate-200">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
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
                badge="Rewards"
                icon="gift"
                tone="amber"
                title="Rewards are designed as an incentive layer, not a payment shortcut."
                description="That separation helps keep trip settlement clear while still leaving room for recognition and community incentives."
              />

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {rewardsHighlights.map((item, index) => (
                  <Reveal key={item.title} delay={0.04 + index * 0.04}>
                    <article className="rounded-[1.6rem] border border-slate-200/80 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/40">
                      <p className="text-2xl font-extrabold text-brand-700 dark:text-brand-300">{item.badge}</p>
                      <h3 className="mt-3 text-base font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <aside className="rounded-[1.8rem] border border-brand-100 bg-brand-50/70 p-6 dark:border-brand-500/20 dark:bg-brand-500/10 sm:p-7">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                  Reward review notes
                </p>
                <div className="mt-4 space-y-3">
                  {rewardAuditPoints.map((item) => (
                    <p key={item} className="text-sm leading-7 text-slate-700 dark:text-slate-200">
                      {item}
                    </p>
                  ))}
                </div>
                <Link
                  href="/policies"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-brand-500/40 dark:hover:text-brand-200"
                >
                  Review Policies
                </Link>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
