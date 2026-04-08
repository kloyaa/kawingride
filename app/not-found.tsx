import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";

import { ScrollToTop } from "@/components/landing/scroll-to-top";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { Icon } from "@/components/landing/icons";
import { blobAssetPaths } from "@/constants/blob-assets";
import { THEME_COOKIE_NAME, type ThemeMode } from "@/constants/branding";

export default async function NotFound() {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get(THEME_COOKIE_NAME)?.value;
  const initialTheme: ThemeMode = cookieTheme === "dark" ? "dark" : "light";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader initialTheme={initialTheme} />
      <ScrollToTop />

      <main>
        <section className="hero-surface noise-overlay relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-22">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/70" />
          <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-brand-300/18 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-10 h-56 w-56 rounded-full bg-amber-300/18 blur-3xl" />

          <div className="section-shell relative">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-14">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-amber-800 shadow-sm dark:border-amber-500/20 dark:bg-slate-900/70 dark:text-amber-200">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200">
                    <Icon name="warning" className="h-3.5 w-3.5" />
                  </span>
                  Page not found
                </div>

                <div className="space-y-4">
                  <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[3.3rem]">
                    This route took a wrong turn.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                    The page you are looking for does not exist, may have moved, or is not available yet. Let&apos;s
                    get you back to a clearer path.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/10 transition hover:bg-brand-800"
                  >
                    Back to Home
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/our-story"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50 dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-200 dark:hover:bg-slate-800"
                  >
                    Read Our Story
                  </Link>
                </div>

                <div className="grid gap-3 sm:max-w-2xl sm:grid-cols-3">
                  {[
                    "Go back to the main product overview",
                    "Open the access request page",
                    "Read the common questions first",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[1.45rem] border border-white/80 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-slate-950/45"
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                        Option {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="surface-panel relative overflow-hidden rounded-[2.2rem] p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-9">
                  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 translate-x-1/4 -translate-y-1/4 rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-400/10" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 -translate-x-1/4 translate-y-1/4 rounded-full bg-amber-300/25 blur-3xl dark:bg-amber-400/10" />

                  <div className="relative">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                      404 recovery
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">
                      Kawing can help you reconnect.
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                      Try heading back home, continue to the access flow, or return to the story page to reorient
                      before exploring again.
                    </p>

                    <div className="mt-6 rounded-[1.6rem] border border-brand-100 bg-brand-50/85 p-5 dark:border-brand-500/20 dark:bg-brand-500/10">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
                        Helpful routes
                      </p>
                      <div className="mt-4 space-y-3">
                        {[
                          { href: "/", label: "Home", text: "See the full product overview" },
                          { href: "/access", label: "Access", text: "Start or continue your request" },
                          { href: "/#faq", label: "FAQ", text: "Jump to the most common questions" },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center justify-between gap-4 rounded-[1.2rem] border border-white/80 bg-white/85 px-4 py-3 text-left shadow-sm transition hover:bg-brand-50 dark:border-white/10 dark:bg-slate-950/55 dark:hover:bg-slate-900"
                          >
                            <div>
                              <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.label}</p>
                              <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">{item.text}</p>
                            </div>
                            <Icon name="arrow-right" className="h-4 w-4 text-brand-700 dark:text-brand-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -right-4 -top-10 z-10 w-28 sm:w-36 lg:-right-10 lg:-top-12 lg:w-44">
                  <div className="kawing-float kawing-float-slow kawing-float-delay-1">
                    <Image
                      src={blobAssetPaths.curious}
                      alt=""
                      width={228}
                      height={228}
                      unoptimized
                      className="h-auto w-full rotate-[8deg] object-contain drop-shadow-[0_20px_30px_rgba(29,42,45,0.14)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
