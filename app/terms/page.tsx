import type { Metadata } from "next";
import Link from "next/link";

import { APP_NAME } from "@/constants/branding";

export const metadata: Metadata = {
  title: `Terms | ${APP_NAME}`,
  description: `Terms for ${APP_NAME}`,
};

const termsSections = [
  {
    title: "What the platform does",
    body:
      "Kawing Ride is intended to support community-based ride coordination. It provides a structured workflow for requests, responses, moderation support, and trust-related platform signals.",
  },
  {
    title: "What users are responsible for",
    body:
      "Customers, riders, and admins are expected to provide accurate information, use the platform honestly, and follow the standards established by their community.",
  },
  {
    title: "What communities still manage locally",
    body:
      "Communities remain responsible for access decisions, local moderation, and the standards applied to members inside their network.",
  },
  {
    title: "What the platform does not guarantee",
    body:
      "The platform is designed to improve coordination, visibility, and accountability. It does not guarantee ride availability, user conduct, or the absence of disputes or incidents.",
  },
  {
    title: "Review, limits, and enforcement",
    body:
      "Accounts, communities, or access rights may be reviewed, limited, or removed where misuse, suspicious activity, or violations of platform and community standards are identified.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-16 text-foreground sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-slate-950 dark:text-white">
            Terms
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            These terms describe the general operating expectations for {APP_NAME} as a platform for structured,
            community-based ride coordination.
          </p>

          <div className="mt-6 rounded-[1.5rem] border border-brand-100 bg-brand-50/80 p-5 dark:border-brand-500/20 dark:bg-brand-500/10">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
              What this page is for
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              It explains the platform role, user responsibilities, what communities still manage locally, and the
              limits of what Kawing Ride can guarantee.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {termsSections.map((section) => (
              <section key={section.title} className="rounded-[1.5rem] border border-slate-100 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/70">
                <h2 className="font-display text-lg font-bold text-slate-950 dark:text-white">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              Back to Home
            </Link>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
