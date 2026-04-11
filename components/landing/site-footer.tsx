import Link from "next/link";

import { getSiteSettings } from "@/lib/site-settings";

import { Logo } from "./logo";

export function SiteFooter() {
  const siteSettings = getSiteSettings();

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-[#10191c] py-10 text-slate-400">
      <div className="section-shell">
        <div className="rounded-[2rem] border border-white/8 bg-white/4 px-6 py-8 backdrop-blur sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-md space-y-4">
              <Logo inverted />
              <p className="text-sm leading-7 text-slate-300">
                Private ride coordination and approved local requests for trusted communities, with clearer decisions and better follow-through.
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:items-end">
              <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm" aria-label="Footer">
                <Link href="/" className="text-slate-300 transition hover:text-white">
                  Home
                </Link>
                <Link href="/how-it-works" className="text-slate-300 transition hover:text-white">
                  How It Works
                </Link>
                <Link href="/safety" className="text-slate-300 transition hover:text-white">
                  Safety
                </Link>
                <Link href="/pricing" className="text-slate-300 transition hover:text-white">
                  Pricing
                </Link>
                <Link href="/partnerships" className="text-slate-300 transition hover:text-white">
                  Partnerships
                </Link>
                <Link href="/updates" className="text-slate-300 transition hover:text-white">
                  Updates
                </Link>
                <Link href="/our-story" className="text-slate-300 transition hover:text-white">
                  Our Story
                </Link>
                <Link href="/policies" className="text-slate-300 transition hover:text-white">
                  Policies
                </Link>
                <Link href="/privacy-policy" className="text-slate-300 transition hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-300 transition hover:text-white">
                  Terms of Service
                </Link>
              </nav>
              <div className="grid gap-3 text-sm text-slate-300 lg:text-right">
                <p>
                  General:{" "}
                  <a href={siteSettings.generalInquiryEmailHref} className="transition hover:text-white">
                    {siteSettings.generalInquiryEmail}
                  </a>
                </p>
                <p>
                  Partnerships:{" "}
                  <a href={siteSettings.partnershipsEmailHref} className="transition hover:text-white">
                    {siteSettings.partnershipsEmail}
                  </a>
                </p>
                <p>Urgent community support is shared inside approved communities.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Community-first", "Ride and errand support", "Negotiation with structure"].map((item) => (
                  <span key={item} className="rounded-full bg-white/8 px-3 py-1.5 text-xs font-medium text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-400">© 2026 Kawing Ride by {siteSettings.footerCredit}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
