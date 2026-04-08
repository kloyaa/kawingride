import Link from "next/link";
import Image from "next/image";

import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { blobAssetPaths } from "@/constants/blob-assets";
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
        <section className="hero-surface noise-overlay relative overflow-hidden pb-18 pt-14 md:pb-24 md:pt-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent dark:from-slate-950/60" />
          <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-10 h-56 w-56 rounded-full bg-amber-300/15 blur-3xl" />

          <div className="section-shell relative">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start">
              <div className="space-y-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/85 px-3.5 py-1.5 text-xs font-semibold text-brand-800 shadow-sm backdrop-blur dark:border-brand-500/20 dark:bg-slate-900/70 dark:text-brand-200"
                >
                  Back to home
                </Link>

                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                    Admin access
                  </p>
                  <h1 className="font-display text-4xl font-extrabold leading-none tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                    Request admin access
                    <span className="gradient-text"> for your community.</span>
                  </h1>
                  <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
                    Share your administrator details, verify the one-time code we send, and receive your admin
                    onboarding link by email.
                  </p>
                </div>

                <div className="grid gap-3 sm:max-w-xl">
                  {[
                    {
                      description:
                        "Admins manage onboarding, member access, local standards, and key operating settings for an approved group.",
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

              <div className="relative pt-6 sm:pt-8 xl:pt-10">
                <div className="pointer-events-none absolute right-1 -top-6 z-10 w-20 sm:right-0 sm:-top-8 sm:w-24 lg:w-28 xl:w-34">
                  <div className="kawing-float kawing-float-soft kawing-float-delay-1">
                    <Image
                      src={blobAssetPaths.basicIcon}
                      alt=""
                      width={640}
                      height={640}
                      unoptimized
                      className="h-auto w-full -rotate-[18deg] object-contain drop-shadow-[0_20px_34px_rgba(29,42,45,0.14)]"
                    />
                  </div>
                </div>

                <article className="surface-panel relative overflow-hidden rounded-[2.2rem] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                        Admin request form
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                        Complete your admin request
                      </h2>
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
