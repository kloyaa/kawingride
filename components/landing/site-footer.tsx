import Link from "next/link";

import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-[#10191c] py-10 text-slate-400">
      <div className="section-shell">
        <div className="rounded-[2rem] border border-white/8 bg-white/4 px-6 py-8 backdrop-blur sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-md space-y-4">
              <Logo inverted />
              <p className="text-sm leading-7 text-slate-300">
                Private ride coordination for trusted local communities, with clearer negotiation, stronger
                accountability, and a calmer booking experience.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm" aria-label="Footer">
                <Link href="/" className="text-slate-300 transition hover:text-white">
                  Home
                </Link>
                <Link href="/our-story" className="text-slate-300 transition hover:text-white">
                  Our Story
                </Link>
                <Link href="/#mission" className="text-slate-300 transition hover:text-white">
                  Mission
                </Link>
                <Link href="/#trust" className="text-slate-300 transition hover:text-white">
                  Trust
                </Link>
                <Link href="/#pricing" className="text-slate-300 transition hover:text-white">
                  Pricing
                </Link>
                <Link href="/#availability" className="text-slate-300 transition hover:text-white">
                  Launch Areas
                </Link>
                <Link href="/#faq" className="text-slate-300 transition hover:text-white">
                  FAQ
                </Link>
                <Link href="/privacy-policy" className="text-slate-300 transition hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-300 transition hover:text-white">
                  Terms
                </Link>
              </nav>
              <div className="flex flex-wrap gap-2">
                {["Community-first", "Private by design", "Negotiation with structure"].map((item) => (
                  <span key={item} className="rounded-full bg-white/8 px-3 py-1.5 text-xs font-medium text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-400">© 2026 Kawing Ride by Niks</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
