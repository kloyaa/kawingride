import Link from "next/link";

import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { ScrollToTop } from "@/components/landing/scroll-to-top";
import { type ThemeMode } from "@/constants/branding";
import {
  getAllLegalDocumentDefinitions,
  getLegalDocumentDownloadFileName,
  getLegalDocumentDownloadPath,
} from "@/lib/legal-documents";

type LegalIndexPageProps = {
  initialTheme?: ThemeMode;
};

export function LegalIndexPage({ initialTheme = "light" }: LegalIndexPageProps) {
  const documents = getAllLegalDocumentDefinitions();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader initialTheme={initialTheme} />
      <ScrollToTop />

      <main>
        <section className="hero-surface noise-overlay relative overflow-hidden pb-16 pt-16 md:pb-20 md:pt-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/70" />
          <div className="pointer-events-none absolute right-0 top-16 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-12 h-56 w-56 rounded-full bg-amber-300/18 blur-3xl" />

          <div className="section-shell relative">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-900 shadow-sm dark:border-brand-500/25 dark:bg-white/8 dark:text-brand-100">
                  Policy Center
                </div>

                <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  The full trust, safety, and policy framework behind Kawing Ride.
                </h1>

                <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                  These documents work together to explain how Kawing Ride supports private community ride
                  coordination, what users are responsible for, how data is handled, and where the platform&apos;s safety
                  and liability boundaries begin and end.
                </p>

                <p className="max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
                  Each document page also includes version history so users can review archived policy text when the
                  rules change.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/70 dark:shadow-[0_24px_56px_rgba(7,12,14,0.36)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                  Why this matters
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "Clarifies that Kawing Ride is a coordination platform, not a transport operator.",
                    "Aligns privacy, trust, moderation, and safety language across the product.",
                    "Gives website users and future mobile users a single, consistent source of policy truth.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.3rem] border border-slate-100 bg-slate-50/90 px-4 py-3.5 dark:border-slate-800 dark:bg-slate-900/70"
                    >
                      <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 dark:bg-slate-950 md:py-20">
          <div className="section-shell">
            <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {documents.map((document) => (
                <article
                  key={document.key}
                  className="rounded-[1.9rem] border border-slate-100 bg-slate-50/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/70 dark:hover:shadow-[0_22px_40px_rgba(7,12,14,0.32)]"
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
                    {document.navLabel}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                    {document.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{document.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={document.route}
                      className="inline-flex items-center rounded-full bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800"
                    >
                      Open document
                    </Link>
                    <a
                      href={getLegalDocumentDownloadPath(document.key)}
                      download={getLegalDocumentDownloadFileName(document.key)}
                      className="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-50 dark:border-brand-500/30 dark:bg-slate-950 dark:text-brand-200 dark:hover:bg-slate-800"
                    >
                      Download TXT
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
