import type { ReactNode } from "react";

import { Icon, type IconName } from "./icons";

type Tone = "brand" | "danger" | "emerald" | "violet" | "amber" | "slate";

type SectionHeaderProps = {
  badge: string;
  description: string;
  icon: IconName;
  title: ReactNode;
  tone?: Tone;
};

const toneClasses: Record<Tone, { badge: string; icon: string }> = {
  amber: {
    badge: "border-amber-100 bg-amber-50 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-300",
    icon: "text-amber-600",
  },
  brand: {
    badge: "border-brand-200 bg-brand-100 text-brand-900 dark:border-brand-500/35 dark:bg-brand-500/20 dark:text-brand-50",
    icon: "text-brand-700",
  },
  danger: {
    badge: "border-red-100 bg-red-50 text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300",
    icon: "text-red-600",
  },
  emerald: {
    badge: "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300",
    icon: "text-emerald-600",
  },
  slate: {
    badge: "border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200",
    icon: "text-slate-600",
  },
  violet: {
    badge: "border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300",
    icon: "text-violet-600",
  },
};

export function SectionHeader({
  badge,
  description,
  icon,
  title,
  tone = "brand",
}: SectionHeaderProps) {
  const palette = toneClasses[tone];

  return (
    <div className="max-w-3xl space-y-5">
      <div
        className={[
          "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold shadow-sm",
          palette.badge,
        ].join(" ")}
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-brand-950/70">
          <Icon name={icon} className={["h-3.5 w-3.5", palette.icon].join(" ")} />
        </span>
        <span>{badge}</span>
      </div>
      <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      <div className="flex items-start gap-4">
        <span className="mt-1 hidden h-12 w-px rounded-full bg-gradient-to-b from-brand-500 to-transparent sm:block" />
        <p className="max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-200">{description}</p>
      </div>
    </div>
  );
}
