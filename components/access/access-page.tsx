import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { RouteBackButton } from "@/components/landing/route-back-button";
import type { ThemeMode } from "@/constants/branding";

import { AccessRequestForm } from "./access-request-form";

type AccessPageProps = {
  initialTheme?: ThemeMode;
};

export function AccessPage({ initialTheme = "light" }: AccessPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader initialTheme={initialTheme} />

      <main>
        <section className="route-hero-section hero-surface noise-overlay relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent dark:from-slate-950/60" />
          <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-10 h-56 w-56 rounded-full bg-amber-300/15 blur-3xl" />

          <div className="section-shell relative">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start">
              <div className="space-y-6">
                <div>
                  <RouteBackButton />
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                    Admin access
                  </p>
                  <h1 className="font-display text-4xl font-extrabold leading-none tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                    Request admin access
                    <span className="gradient-text"> for your community.</span>
                  </h1>
                  <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
                    Share your admin details, confirm the one-time code, and we’ll send the onboarding link by email.
                  </p>
                </div>

                <div className="grid gap-3 sm:max-w-xl">
                  {[
                    {
                      description:
                        "Admins handle onboarding, member access, community standards, and key settings for an approved group.",
                      title: "What is an admin?",
                    },
                    {
                      description:
                        "Access is reviewed so only authorized community leads can handle protected records, approvals, and policy-sensitive actions.",
                      title: "Why access is required",
                    },
                    {
                      description:
                        "Prepare your community name, your contact details, the service area you will manage, and confirmation that you are authorized to apply.",
                      title: "Before you apply",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.4rem] border border-white/80 bg-white/80 px-4 py-4 shadow-sm dark:border-white/10 dark:bg-slate-950/45"
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative pt-2 sm:pt-4 xl:pt-6">
                <article className="surface-panel relative overflow-hidden rounded-[2.2rem] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                        Admin request form
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-extrabold text-slate-950 dark:text-white">Complete your request</h2>
                    </div>
                    <span className="rounded-full bg-brand-100 px-3 py-1.5 text-xs font-semibold text-brand-800 dark:bg-brand-500/10 dark:text-brand-200">
                      Admin onboarding
                    </span>
                  </div>

                  <AccessRequestForm />
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
