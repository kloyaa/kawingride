import type { Metadata } from "next";
import Link from "next/link";

import { APP_NAME } from "@/constants/branding";

export const metadata: Metadata = {
  title: `Privacy Policy | ${APP_NAME}`,
  description: `Privacy Policy for ${APP_NAME}`,
};

const privacySections = [
  {
    title: "Information we collect",
    body:
      "Kawing Ride may collect account details, ride request information, rider profile details, ratings, and operational activity needed to support community ride coordination.",
  },
  {
    title: "How information is used",
    body:
      "Information is used to operate the platform, support customer and rider onboarding, manage communities, improve trust signals, and maintain safer coordination workflows.",
  },
  {
    title: "Community visibility",
    body:
      "Ride and profile information may be visible within the relevant community flow, according to the access and moderation rules set for that community.",
  },
  {
    title: "Operational and safety use",
    body:
      "Information may be used for status updates, trust and moderation reviews, incident handling, and optional safety-related notifications where enabled.",
  },
  {
    title: "Retention and review",
    body:
      "Activity history, ratings, and moderation records may be retained as needed to support accountability, community operations, and platform improvements.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background py-16 text-foreground sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-slate-950 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            This page outlines the general privacy approach for {APP_NAME}. It is intended to explain how platform
            information may be handled in support of community ride coordination.
          </p>

          <div className="mt-8 space-y-5">
            {privacySections.map((section) => (
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
              href="/terms"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              View Terms
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
