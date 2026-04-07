import type { Tone } from "@/components/landing/content";

type FeatureToneStyle = {
  [key in Tone]: {
    card: string;
    icon: string;
    text: string;
  };
};

type TimelineToneStyle = {
  [key in Tone]: {
    badge: string;
    panel: string;
    text: string;
  };
};

type PricingToneStyle = {
  [key in Tone]: {
    badge: string;
    text: string;
  };
};

export const featureToneClasses: FeatureToneStyle = {
  amber: {
    card: "border-amber-200/60 bg-amber-50/80 dark:border-amber-500/20 dark:bg-amber-500/10",
    icon: "bg-amber-500 text-white",
    text: "text-amber-950 dark:text-amber-100",
  },
  brand: {
    card: "border-brand-200/60 bg-brand-50/80 dark:border-brand-500/20 dark:bg-brand-500/10",
    icon: "bg-brand-700 text-white",
    text: "text-brand-950 dark:text-brand-100",
  },
  emerald: {
    card: "border-emerald-200/60 bg-emerald-50/80 dark:border-emerald-500/20 dark:bg-emerald-500/10",
    icon: "bg-emerald-600 text-white",
    text: "text-emerald-950 dark:text-emerald-100",
  },
  slate: {
    card: "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80",
    icon: "bg-slate-700 text-white",
    text: "text-slate-950 dark:text-slate-100",
  },
  violet: {
    card: "border-violet-200/60 bg-violet-50/80 dark:border-violet-500/20 dark:bg-violet-500/10",
    icon: "bg-violet-600 text-white",
    text: "text-violet-950 dark:text-violet-100",
  },
};

export const timelineToneClasses: TimelineToneStyle = {
  amber: {
    badge: "bg-amber-500 text-white",
    panel: "border-amber-100 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/10",
    text: "text-amber-900 dark:text-amber-100",
  },
  brand: {
    badge: "bg-brand-700 text-white",
    panel: "border-brand-100 bg-brand-50 dark:border-brand-500/20 dark:bg-brand-500/10",
    text: "text-brand-900 dark:text-brand-100",
  },
  emerald: {
    badge: "bg-emerald-600 text-white",
    panel: "border-emerald-100 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10",
    text: "text-emerald-900 dark:text-emerald-100",
  },
  slate: {
    badge: "bg-slate-400 text-white",
    panel: "border-slate-100 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80",
    text: "text-slate-900 dark:text-slate-100",
  },
  violet: {
    badge: "bg-violet-600 text-white",
    panel: "border-violet-100 bg-violet-50 dark:border-violet-500/20 dark:bg-violet-500/10",
    text: "text-violet-900 dark:text-violet-100",
  },
};

export const pricingToneClasses: PricingToneStyle = {
  amber: {
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
    text: "text-amber-700 dark:text-amber-300",
  },
  brand: {
    badge: "bg-brand-100 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300",
    text: "text-brand-700 dark:text-brand-300",
  },
  emerald: {
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
    text: "text-emerald-700 dark:text-emerald-300",
  },
  slate: {
    badge: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
    text: "text-slate-700 dark:text-slate-200",
  },
  violet: {
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
    text: "text-violet-700 dark:text-violet-300",
  },
};
