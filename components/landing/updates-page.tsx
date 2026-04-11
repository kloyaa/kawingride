import Link from "next/link";

import { MarketingPageShell } from "./page-shell";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { type ThemeMode } from "@/constants/branding";
import { getSiteSettings } from "@/lib/site-settings";

type UpdatesPageProps = {
  initialTheme?: ThemeMode;
};

const updateCategories = [
  "Product changes to booking, negotiation, and personal-request support.",
  "Rollout notes for communities, partnerships, and early launch planning.",
  "Important policy, privacy, or safety updates that affect how the platform operates.",
];

const currentStatus = [
  "Early rollout planning remains focused on Cagayan de Oro City and Butuan City.",
  "Admin onboarding is still the first step before broader community activation.",
  "The platform direction now includes approved personal requests in addition to ride booking.",
];

export function UpdatesPage({ initialTheme = "light" }: UpdatesPageProps) {
  const siteSettings = getSiteSettings();

  return (
    <MarketingPageShell
      initialTheme={initialTheme}
      eyebrow="Updates"
      title="Product, rollout, and policy updates in one place."
      titleLines={["Product, rollout, and", "policy updates", "in one place."]}
      highlightedText="policy updates"
      description="A single place for important Kawing Ride announcements, rollout notes, and product updates."
      actions={[
        { href: "/partnerships", label: "Open Partnerships" },
        { href: siteSettings.updatesEmailHref, label: "Contact Updates", variant: "secondary" },
      ]}
      highlights={[
        {
          title: "Product visibility",
          description: "A single place to explain major changes and direction.",
        },
        {
          title: "Rollout clarity",
          description: "Useful for communities, admins, and partners tracking launch readiness.",
        },
        {
          title: "Policy awareness",
          description: "Important trust and privacy changes can be surfaced more clearly.",
        },
      ]}
    >
      <section className="route-section bg-white dark:bg-slate-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <Reveal>
              <SectionHeader
                badge="What You’ll Find"
                icon="calendar"
                tone="brand"
                title="Important updates and platform notices."
                description="Built for customers, riders, admins, and partners who need quick clarity on what changed and why it matters."
              />
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-[1.8rem] border border-slate-200/80 bg-slate-50/70 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-7">
                <div className="space-y-4">
                  {updateCategories.map((item, index) => (
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

      <section className="route-section bg-slate-50 dark:bg-slate-900/50">
        <div className="section-shell">
          <SectionHeader
            badge="Current Status"
            icon="info"
            tone="amber"
            title="Current focus."
            description="A quick view of the rollout and product priorities shaping Kawing Ride right now."
          />

          <div className="mt-12 grid gap-4">
            {currentStatus.map((item, index) => (
              <Reveal key={item} delay={0.04 + index * 0.04}>
                <article className="rounded-[1.6rem] border border-white bg-white px-6 py-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/80">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                    Note {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="route-section bg-white dark:bg-slate-950">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start">
            <Reveal>
              <SectionHeader
                badge="Contact"
                icon="users"
                tone="violet"
                title="Questions about a published update."
                description="If you want to talk about launch plans or onboarding, the partnerships page is the better place to start."
              />
            </Reveal>

            <Reveal delay={0.05}>
              <aside className="rounded-[1.8rem] border border-brand-100 bg-brand-50/70 p-6 dark:border-brand-500/20 dark:bg-brand-500/10 sm:p-7">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                  Updates contact
                </p>
                <a
                  href={siteSettings.updatesEmailHref}
                  className="mt-4 inline-flex text-base font-semibold text-brand-800 underline decoration-brand-200 underline-offset-4 dark:text-brand-200"
                >
                  {siteSettings.updatesEmail}
                </a>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/partnerships"
                    className="inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
                  >
                    Open Partnerships
                  </Link>
                  <Link
                    href="/our-story"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-brand-500/40 dark:hover:text-brand-200"
                  >
                    Read Our Story
                  </Link>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
