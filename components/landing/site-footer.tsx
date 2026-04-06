import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 py-8 text-slate-400">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Logo inverted />
        <p className="text-center text-xs sm:text-left">
          Safety first coordination for trusted local ride communities.
        </p>
        <p className="text-xs">© 2026 Community Ride Platform by Niks</p>
      </div>
    </footer>
  );
}
