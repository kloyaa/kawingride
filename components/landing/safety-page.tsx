import Link from "next/link";

import { dataHandlingGroups, trustBoundaries, trustPillars } from "./content";
import { MarketingPageShell } from "./page-shell";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { type ThemeMode } from "@/constants/branding";
import { getSiteSettings } from "@/lib/site-settings";

type SafetyPageProps = {
  initialTheme?: ThemeMode;
};

const urgentHelpSteps = [
  "Contact public emergency services first for immediate threats, serious injury, or urgent criminal risk.",
  "Use the in-community urgent support contact for platform-related help such as harassment or accidents.",
  "Follow up through reporting and appeals so the incident can be reviewed and documented properly.",
];

export function SafetyPage({ initialTheme = "light" }: SafetyPageProps) {
  const siteSettings = getSiteSettings();

  return (
    <MarketingPageShell
      initialTheme={initialTheme}
      eyebrow="Safety And Trust"
      title="A practical trust model with clear boundaries."
      titleLines={["A practical trust model", "with clear boundaries."]}
      highlightedText="clear boundaries"
      description="Kawing Ride is built to support safer coordination, clearer privacy handling, and stronger accountability without pretending to replace emergency services or personal judgment."
      actions={[
        { href: "/reporting-and-appeals", label: "Reporting And Appeals" },
        { href: "/privacy-policy", label: "Privacy Policy", variant: "secondary" },
      ]}
      highlights={[
        {
          title: "In-community urgent support",
          description: "Available to customers and riders inside approved community experiences.",
        },
        {
          title: "Progressive data sharing",
          description: "Contact details and onboarding records are exposed carefully, not all at once.",
        },
        {
          title: "Defined review path",
          description: "Reports and appeals can move through a more consistent process.",
        },
      ]}
    >
      <section className="bg-white py-16 dark:bg-slate-950 md:py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <Reveal>
              <SectionHeader
                badge="Urgent Help"
                icon="warning"
                tone="danger"
                title="Urgent community support exists, but it is not displayed on the public website."
                description="Customers and riders can access the relevant contact path inside their approved community experience. It does not replace police, ambulance, or other emergency-response services."
              />
            </Reveal>

            <div className="grid gap-4">
              <Reveal delay={0.04}>
                <article className="rounded-[1.8rem] border border-red-100 bg-red-50/90 p-6 shadow-sm dark:border-red-500/20 dark:bg-red-500/10 sm:p-7">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-red-700 dark:text-red-300">
                    Community-only support contact
                  </p>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-red-950 dark:text-red-100">
                    The specific urgent support number is shown inside each approved community workflow, where it can be
                    presented in the right context for customers and riders.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={0.08}>
                <article className="rounded-[1.8rem] border border-slate-200/80 bg-slate-50/70 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-7">
                  <div className="space-y-4">
                    {urgentHelpSteps.map((item, index) => (
                      <div key={item} className="border-l border-slate-200 pl-4 dark:border-slate-800">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                          Step {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-slate-700 dark:text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900/50 md:py-20">
        <div className="section-shell">
          <SectionHeader
            badge="Trust Model"
            icon="shield"
            tone="emerald"
            title="Trust depends on role clarity, moderation, and careful data handling."
            description="The platform works best when governance, access, and privacy are treated as part of the product, not an afterthought."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {trustPillars.slice(0, 3).map((item, index) => (
              <Reveal key={item.title} delay={0.04 + index * 0.05}>
                <article className="rounded-[1.7rem] border border-white bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/80">
                  <h2 className="text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {dataHandlingGroups.map((group, index) => (
              <Reveal key={group.title} delay={0.08 + index * 0.04}>
                <article className="rounded-[1.8rem] border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{group.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{group.summary}</p>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm leading-7 text-slate-700 dark:text-slate-200">
                        {item}
                      </li>
                    ))}
                  </ul>
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
                badge="Boundaries"
                icon="info"
                tone="slate"
                title="Safety features support decision-making, but they do not remove risk."
                description="The platform can help reduce uncertainty. It cannot replace local due diligence, lawful authority processes, or emergency-response systems."
              />
              <div className="mt-8 space-y-4">
                {trustBoundaries.map((item) => (
                  <p key={item} className="border-l border-slate-200 pl-4 text-sm leading-7 text-slate-700 dark:border-slate-800 dark:text-slate-200">
                    {item}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <aside className="rounded-[1.8rem] border border-brand-100 bg-brand-50/70 p-6 dark:border-brand-500/20 dark:bg-brand-500/10 sm:p-7">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                  Support contacts
                </p>
                <div className="mt-4 space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Customer service</p>
                    <a href={siteSettings.customerServiceEmailHref} className="mt-1 inline-flex text-brand-700 underline decoration-brand-200 underline-offset-4 dark:text-brand-300">
                      {siteSettings.customerServiceEmail}
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Privacy concerns</p>
                    <a href={siteSettings.privacyEmailHref} className="mt-1 inline-flex text-brand-700 underline decoration-brand-200 underline-offset-4 dark:text-brand-300">
                      {siteSettings.privacyEmail}
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/community-guidelines"
                    className="inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
                  >
                    Community Guidelines
                  </Link>
                  <Link
                    href="/reporting-and-appeals"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-brand-500/40 dark:hover:text-brand-200"
                  >
                    Reporting Process
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
