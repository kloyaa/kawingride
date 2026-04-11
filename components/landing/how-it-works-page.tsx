import Link from "next/link";

import { howItWorksSummary, processFlowSteps } from "./content";
import { MarketingPageShell } from "./page-shell";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { type ThemeMode } from "@/constants/branding";

type HowItWorksPageProps = {
  initialTheme?: ThemeMode;
};

const requestModes = [
  "Private ride requests for approved communities.",
  "Approved personal requests such as buying goods, pickups, and simple local errands.",
  "Admin-controlled rollout so each community can define service boundaries before activation.",
];

const personalRequestNotes = [
  "Useful for groceries, medicine, documents, and other small approved purchases.",
  "Handled through the same request-review-confirm flow used for rides.",
  "Availability can vary by community, admin rules, and rider participation.",
];

export function HowItWorksPage({ initialTheme = "light" }: HowItWorksPageProps) {
  return (
    <MarketingPageShell
      initialTheme={initialTheme}
      eyebrow="How It Works"
      title="A clearer request flow for rides and approved personal errands."
      titleLines={["A clearer request flow for", "rides", "and approved personal errands."]}
      highlightedText="rides"
      description="Kawing Ride is designed to replace scattered chats with a more structured process for posting requests, comparing responses, and confirming the final arrangement."
      actions={[
        { href: "/access", label: "Request Admin Access" },
        { href: "/safety", label: "View Safety Details", variant: "secondary" },
      ]}
      highlights={[
        {
          title: "Structured negotiation",
          description: "Requests move from posting to response, review, and confirmation with clearer next steps.",
        },
        {
          title: "Support for personal requests",
          description: "Communities can extend the same flow to approved errands such as buying goods.",
        },
        {
          title: "Confirmation before action",
          description: "A request only becomes active once both sides agree inside the platform.",
        },
      ]}
    >
      <section className="bg-white py-16 dark:bg-slate-950 md:py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <Reveal>
              <SectionHeader
                badge="Request Types"
                icon="users"
                tone="brand"
                title="One product, two practical uses."
                description="Kawing Ride supports community ride booking first, while also allowing approved personal requests where that fits the local operating model."
              />
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-[1.8rem] border border-slate-200/80 bg-slate-50/70 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-7">
                <div className="space-y-4">
                  {requestModes.map((item, index) => (
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
            badge="Core Flow"
            icon="check-circle"
            tone="amber"
            title="Every request follows the same basic structure."
            description="That consistency makes the experience easier to understand for customers, riders, and admins."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {howItWorksSummary.map((item, index) => (
              <Reveal key={item.title} delay={0.04 + index * 0.05}>
                <article className="rounded-[1.7rem] border border-white bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/80">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold text-slate-950 dark:text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 divide-y divide-slate-200 rounded-[1.8rem] border border-slate-200/80 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-950">
            {processFlowSteps.map((step, index) => (
              <Reveal key={step.id} delay={0.03 + index * 0.03}>
                <div className="grid gap-3 px-6 py-5 md:grid-cols-[8rem_minmax(0,1fr)] md:px-7">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                      {step.actor}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200">{step.description}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.detail}</p>
                    {step.note ? (
                      <p className="mt-3 text-sm font-medium text-amber-800 dark:text-amber-200">{step.note}</p>
                    ) : null}
                  </div>
                </div>
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
                badge="Personal Requests"
                icon="info"
                tone="emerald"
                title="Approved errands fit into the same product language."
                description="That keeps the experience familiar even when the request is not a standard ride."
              />
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-[1.8rem] border border-brand-100 bg-brand-50/70 p-6 dark:border-brand-500/20 dark:bg-brand-500/10 sm:p-7">
                <div className="space-y-3">
                  {personalRequestNotes.map((item) => (
                    <p key={item} className="text-sm leading-7 text-slate-700 dark:text-slate-200">
                      {item}
                    </p>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/partnerships"
                    className="inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
                  >
                    Discuss Community Fit
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-brand-500/40 dark:hover:text-brand-200"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
