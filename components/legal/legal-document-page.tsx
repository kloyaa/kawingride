import Link from "next/link";

import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { ScrollToTop } from "@/components/landing/scroll-to-top";
import { type ThemeMode } from "@/constants/branding";
import {
  createAnchorId,
  getAllLegalDocumentDefinitions,
  getLegalDocumentDownloadFileName,
  getLegalDocumentDownloadPath,
  type LegalDocument,
} from "@/lib/legal-documents";

import { LegalRichText } from "./legal-rich-text";
import { LegalTitleMarquee } from "./legal-title-marquee";

type LegalDocumentPageProps = {
  document: LegalDocument;
  initialTheme?: ThemeMode;
};

export function LegalDocumentPage({ document, initialTheme = "light" }: LegalDocumentPageProps) {
  const relatedDocuments = getAllLegalDocumentDefinitions().filter((entry) =>
    document.related.includes(entry.key),
  );
  const downloadHref = getLegalDocumentDownloadPath(document.key, { version: document.version ?? undefined });
  const downloadFileName = getLegalDocumentDownloadFileName(document.key, { version: document.version ?? undefined });
  const downloadMarkdownHref = getLegalDocumentDownloadPath(document.key, {
    version: document.version ?? undefined,
    format: "md",
  });
  const downloadMarkdownFileName = getLegalDocumentDownloadFileName(document.key, {
    version: document.version ?? undefined,
    format: "md",
  });
  const isAdminRelatedDocument = document.key === "admin-guidelines";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LegalTitleMarquee title={document.title} />
      <SiteHeader initialTheme={initialTheme} />
      <ScrollToTop />

      <main>
        <section className="hero-surface noise-overlay relative overflow-hidden pb-16 pt-16 md:pb-20 md:pt-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/70" />
          <div className="pointer-events-none absolute right-0 top-16 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-12 h-56 w-56 rounded-full bg-amber-300/18 blur-3xl" />

          <div className="section-shell relative">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-900 shadow-sm dark:border-brand-500/25 dark:bg-white/8 dark:text-brand-100">
                  Legal and Trust
                </div>

                <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  {document.title}
                </h1>

                <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                  {document.summary}
                </p>

                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                  <span className="rounded-full border border-brand-200 bg-white/90 px-3 py-1.5 text-brand-900 shadow-sm dark:border-brand-500/25 dark:bg-white/8 dark:text-brand-100">
                    {document.versionLabel}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50/90 px-3 py-1.5 text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                    Effective {document.effectiveDate}
                  </span>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {document.changeSummary}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/policies"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/10 transition hover:bg-brand-800"
                  >
                    Browse All Policies
                  </Link>
                  <a
                    href={downloadHref}
                    download={downloadFileName}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50 dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-200 dark:hover:bg-slate-800"
                  >
                    Download TXT
                  </a>
                  <a
                    href={downloadMarkdownHref}
                    download={downloadMarkdownFileName}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50 dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-200 dark:hover:bg-slate-800"
                  >
                    Download MD
                  </a>
                  {isAdminRelatedDocument ? (
                    <Link
                      href="/access"
                      className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50 dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-200 dark:hover:bg-slate-800"
                    >
                      Request Admin Access
                    </Link>
                  ) : null}
                </div>
              </div>

              <aside className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/70 dark:shadow-[0_24px_56px_rgba(7,12,14,0.36)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                  Version details
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  This document is part of the Kawing Ride trust and policy framework. The current view reflects the
                  rules that took effect on {document.effectiveDate}.
                </p>

                <div className="mt-5 rounded-[1.4rem] border border-slate-100 bg-slate-50/90 p-4 dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    Change summary
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200">{document.changeSummary}</p>
                </div>

                <div className="mt-6">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    On this page
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    {document.tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={[
                          "rounded-2xl border px-4 py-3 text-sm transition",
                          item.level === 3
                            ? "border-slate-200 bg-slate-50/80 text-slate-700 hover:border-brand-100 hover:bg-brand-50 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-brand-500/30 dark:hover:bg-slate-800"
                            : "border-brand-100 bg-brand-50/70 font-semibold text-brand-900 hover:bg-brand-100 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-100 dark:hover:bg-brand-500/15",
                        ].join(" ")}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 dark:bg-slate-950 md:py-20">
          <div className="section-shell">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_18rem]">
              <article className="rounded-[2rem] border border-slate-100 bg-slate-50/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/65 sm:p-8">
                <div className="space-y-6">
                  {document.blocks.map((block, index) => {
                    if (block.type === "divider") {
                      return (
                        <div
                          key={`divider-${index}`}
                          className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700"
                        />
                      );
                    }

                    if (block.type === "heading") {
                      const headingId = createAnchorId(block.text);

                      if (block.level === 3) {
                        return (
                          <h3
                            key={headingId}
                            id={headingId}
                            className="scroll-mt-28 font-display text-xl font-bold text-slate-950 dark:text-white"
                          >
                            <LegalRichText text={block.text} />
                          </h3>
                        );
                      }

                      return (
                        <h2
                          key={headingId}
                          id={headingId}
                          className="scroll-mt-28 font-display text-2xl font-extrabold text-slate-950 dark:text-white sm:text-[1.75rem]"
                        >
                          <LegalRichText text={block.text} />
                        </h2>
                      );
                    }

                    if (block.type === "paragraph") {
                      return (
                        <p key={`paragraph-${index}`} className="text-sm leading-8 text-slate-700 dark:text-slate-300 sm:text-[0.98rem]">
                          <LegalRichText text={block.text} />
                        </p>
                      );
                    }

                    return (
                      <ul key={`list-${index}`} className="space-y-3 pl-1">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-[0.98rem]">
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-500" />
                            <span>
                              <LegalRichText text={item} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    );
                  })}
                </div>
              </article>

              <aside className="space-y-5 xl:sticky xl:top-28 xl:h-fit">
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Version history
                  </p>
                  <div className="mt-4 space-y-3">
                    {document.availableVersions.map((versionEntry) => (
                      <Link
                        key={versionEntry.version ?? versionEntry.versionLabel}
                        href={versionEntry.href}
                        className={[
                          "block rounded-[1.25rem] border px-4 py-3 transition",
                          versionEntry.version === document.version
                            ? "border-brand-200 bg-brand-50/75 dark:border-brand-500/30 dark:bg-brand-500/10"
                            : "border-slate-200 bg-slate-50/80 hover:border-brand-200 hover:bg-brand-50/60 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-brand-500/30 dark:hover:bg-slate-950",
                        ].join(" ")}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{versionEntry.versionLabel}</p>
                          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                            {versionEntry.isCurrent ? "Current" : "Archive"}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-6 text-slate-500 dark:text-slate-400">
                          Effective {versionEntry.effectiveDate}
                        </p>
                        <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">
                          {versionEntry.changeSummary}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-brand-100 bg-brand-50/75 p-5 dark:border-brand-500/20 dark:bg-brand-500/10">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
                    Related documents
                  </p>
                  <div className="mt-4 space-y-3">
                    {relatedDocuments.map((relatedDocument) => (
                      <Link
                        key={relatedDocument.key}
                        href={relatedDocument.route}
                        className="block rounded-[1.25rem] border border-white/80 bg-white/90 px-4 py-3 transition hover:border-brand-200 hover:bg-white dark:border-white/10 dark:bg-slate-950/60 dark:hover:border-brand-500/30 dark:hover:bg-slate-950"
                      >
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{relatedDocument.navLabel}</p>
                        <p className="mt-1 text-xs leading-6 text-slate-600 dark:text-slate-400">
                          {relatedDocument.summary}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Need the full framework?
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Review the complete policy set to understand how Kawing Ride aligns privacy, trust, safety, and
                    community governance.
                  </p>
                  <Link
                    href="/policies"
                    className="mt-4 inline-flex items-center rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-brand-700 dark:hover:bg-brand-800"
                  >
                    Open Policy Center
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
