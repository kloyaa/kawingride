import { Icon } from "./icons";

type FounderNoteCardProps = {
  attribution: string;
  quote: string;
};

export function FounderNoteCard({ attribution, quote }: FounderNoteCardProps) {
  return (
    <article className="relative overflow-hidden rounded-[2.2rem] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-brand-50 p-7 shadow-[0_22px_50px_rgba(72,111,121,0.12)] dark:border-amber-500/20 dark:bg-gradient-to-br dark:from-[#263237] dark:via-[#1e2a2e] dark:to-[#1b262a] dark:shadow-[0_24px_56px_rgba(7,12,14,0.42)] sm:p-9">
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-400/12" />
      <div className="pointer-events-none absolute -bottom-8 left-0 h-32 w-32 rounded-full bg-brand-200/45 blur-3xl dark:bg-brand-400/12" />

      <div className="relative max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-amber-800 shadow-sm dark:border-amber-500/20 dark:bg-white/8 dark:text-amber-200">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/12 dark:text-amber-200">
            <Icon name="info" className="h-3.5 w-3.5" />
          </span>
          {attribution}
        </div>

        <blockquote className="mt-5 font-display text-3xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-[2.5rem]">
          {quote}
        </blockquote>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
          Kawing Ride is being shaped around trusted local relationships, not a stranger-first marketplace.
        </p>
      </div>
    </article>
  );
}
