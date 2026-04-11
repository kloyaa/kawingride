import Link from "next/link";

import { launchAreaNotes, launchAreas } from "./content";
import { MarketingPageShell } from "./page-shell";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { type ThemeMode } from "@/constants/branding";
import { getSiteSettings } from "@/lib/site-settings";

type PartnershipsPageProps = {
  initialTheme?: ThemeMode;
};

const partnershipGroups = [
  "Communities and subdivisions that already coordinate rides informally.",
  "Schools and workplaces that need a more structured local mobility workflow.",
  "Rider groups and transport associations that want clearer onboarding and accountability.",
  "Service-oriented organizations that may benefit from both rides and approved personal requests.",
];

const conversationTopics = [
  "Your current coordination setup and where it breaks down today.",
  "Whether you need rides only, or rides plus approved personal requests.",
  "Who will manage the community as the initial admin.",
  "What service-area rules, onboarding requirements, and standards should exist before launch.",
];

export function PartnershipsPage({ initialTheme = "light" }: PartnershipsPageProps) {
  const siteSettings = getSiteSettings();

  return (
    <MarketingPageShell
      initialTheme={initialTheme}
      eyebrow="Partnerships"
      title="A starting point for businesses, communities, and local operators."
      titleLines={["A starting point for", "businesses, communities,", "and local operators."]}
      highlightedText="businesses, communities,"
      description="If you want to explore how Kawing Ride could support your organization, this is the right route for discussing fit, scope, onboarding, and rollout expectations."
      actions={[
        { href: siteSettings.partnershipsEmailHref, label: "Email Partnerships" },
        { href: "/access", label: "Request Admin Access", variant: "secondary" },
      ]}
      highlights={[
        {
          title: "Launch-fit conversations",
          description: "Discuss service area, admin ownership, and operating model before rollout.",
        },
        {
          title: "Ride and errand support",
          description: "Explore whether your use case should include personal requests alongside rides.",
        },
        {
          title: "Community-led setup",
          description: "Operational clarity starts with the right standards and the right admin structure.",
        },
      ]}
    >
      <section className="bg-white py-16 dark:bg-slate-950 md:py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <Reveal>
              <SectionHeader
                badge="Who It Fits"
                icon="users"
                tone="brand"
                title="Kawing Ride works best where trust already exists and structure is the missing layer."
                description="The product is especially suited to organizations that already have local relationships but need a better coordination system."
              />
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-[1.8rem] border border-slate-200/80 bg-slate-50/70 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-7">
                <div className="space-y-4">
                  {partnershipGroups.map((item, index) => (
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
            badge="What We’ll Discuss"
            icon="check-circle"
            tone="amber"
            title="The best first conversation is practical."
            description="A good partnership discussion clarifies the operating model, not just general interest."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
            <Reveal>
              <div className="rounded-[1.8rem] border border-white bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/80 sm:p-7">
                <div className="space-y-4">
                  {conversationTopics.map((item, index) => (
                    <div key={item} className="border-l border-slate-200 pl-4 dark:border-slate-800">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                        Topic {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-slate-700 dark:text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <aside className="rounded-[1.8rem] border border-brand-100 bg-brand-50/70 p-6 dark:border-brand-500/20 dark:bg-brand-500/10 sm:p-7">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                  Partnerships email
                </p>
                <a
                  href={siteSettings.partnershipsEmailHref}
                  className="mt-4 inline-flex text-base font-semibold text-brand-800 underline decoration-brand-200 underline-offset-4 dark:text-brand-200"
                >
                  {siteSettings.partnershipsEmail}
                </a>
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200">
                  Share your organization, location, and whether you are evaluating rides only or a broader request model.
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-slate-950 md:py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start">
            <Reveal>
              <SectionHeader
                badge="Launch Context"
                icon="calendar"
                tone="violet"
                title="Rollout planning is still focused and location-aware."
                description="Readiness depends on having the right admin lead, a realistic first scope, and clear operational standards."
              />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {launchAreas.map((item, index) => (
                  <Reveal key={item.title} delay={0.04 + index * 0.04}>
                    <article className="rounded-[1.6rem] border border-slate-200/80 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/40">
                      <h3 className="text-base font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <aside className="rounded-[1.8rem] border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-7">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
                  Rollout notes
                </p>
                <div className="mt-4 space-y-3">
                  {launchAreaNotes.map((item) => (
                    <p key={item} className="text-sm leading-7 text-slate-700 dark:text-slate-200">
                      {item}
                    </p>
                  ))}
                </div>
                <Link
                  href="/updates"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-brand-500/40 dark:hover:text-brand-200"
                >
                  View Updates
                </Link>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
