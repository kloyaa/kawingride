import { Icon } from "./icons";

type FounderNoteCardProps = {
  attribution: string;
  quote: string;
};

export function FounderNoteCard({ attribution, quote }: FounderNoteCardProps) {
  return (
    <article className="rounded-[1.6rem] border border-slate-200/80 bg-white/88 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/68 sm:p-6">
      <div className="flex items-start gap-3.5">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
          <Icon name="info" className="h-4 w-4" />
        </span>

        <div className="min-w-0">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            {attribution}
          </p>
          <blockquote className="mt-2.5 max-w-2xl font-display text-[1.2rem] font-bold leading-8 text-slate-950 dark:text-white sm:text-[1.45rem] sm:leading-9">
            {quote}
          </blockquote>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Kawing Ride is being shaped around trusted local relationships, not a stranger-first marketplace.
          </p>
        </div>
      </div>
    </article>
  );
}
