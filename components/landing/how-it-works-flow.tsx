"use client";

import { motion } from "motion/react";
import { Icon } from "./icons";

type Role = "Customer" | "Rider" | "Platform";

const roleStyle: Record<Role, { badge: string; ghostNum: string; bar: string }> = {
  Customer: {
    badge: "bg-brand-50 text-brand-700 ring-1 ring-brand-200/80 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-500/20",
    ghostNum: "text-brand-100 dark:text-brand-950",
    bar: "bg-brand-500",
  },
  Rider: {
    badge: "bg-amber-50 text-amber-700 ring-1 ring-amber-200/80 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-500/20",
    ghostNum: "text-amber-100 dark:text-amber-950",
    bar: "bg-amber-400",
  },
  Platform: {
    badge: "bg-slate-100 text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700",
    ghostNum: "text-slate-100 dark:text-slate-800",
    bar: "bg-slate-400",
  },
};

const primarySteps = [
  {
    num: "01",
    role: "Customer" as Role,
    title: "Post a ride request",
    detail: "Add your pickup, destination, and an optional opening fare. Your request goes only to your community.",
  },
  {
    num: "02",
    role: "Rider" as Role,
    title: "Riders respond",
    detail: "Riders can bid at the posted fare, send a counteroffer, or suggest a meter-based fare using live gas price data. Multiple riders can respond at once.",
  },
  {
    num: "03",
    role: "Customer" as Role,
    title: "Review your options",
    detail: "Compare rider fares and reputation side by side — then decide what happens next.",
  },
];

const outcomeSteps = [
  {
    num: "04",
    role: "Platform" as Role,
    title: "Booking confirmed",
    detail: "The booking is only official once both sides agree inside the platform. No ambiguity.",
  },
  {
    num: "05",
    role: "Platform" as Role,
    title: "Updates follow the ride",
    detail: "Ride status and optional safety updates continue through cancellation or completion.",
  },
];

function StepCard({
  num,
  role,
  title,
  detail,
  delay = 0,
}: {
  num: string;
  role: Role;
  title: string;
  detail: string;
  delay?: number;
}) {
  const s = roleStyle[role];
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <span
        className={[
          "pointer-events-none absolute -right-3 -top-5 z-0 select-none font-display text-[7rem] font-black leading-none",
          s.ghostNum,
        ].join(" ")}
        aria-hidden="true"
      >
        {num}
      </span>

      <div className="relative z-10 flex flex-1 flex-col">
        <span
          className={[
            "inline-block self-start rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-widest",
            s.badge,
          ].join(" ")}
        >
          {role}
        </span>

        <h4 className="mt-5 font-display text-xl font-extrabold leading-snug text-slate-950 dark:text-white">
          {title}
        </h4>
        <p className="mt-2 flex-1 text-sm leading-7 text-slate-500 dark:text-slate-400">{detail}</p>
      </div>

      <div
        className={[
          "absolute bottom-0 left-0 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full",
          s.bar,
        ].join(" ")}
      />
    </motion.article>
  );
}

export function HowItWorksFlow() {
  return (
    <div className="space-y-5">
      {/* Steps 01–03 */}
      <div className="grid gap-5 lg:grid-cols-3">
        {primarySteps.map((step, i) => (
          <StepCard key={step.num} {...step} delay={i * 0.1} />
        ))}
      </div>

      {/* Important clarification — inline, not a separate box */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-amber-50/80 px-5 py-3.5 dark:border-amber-500/20 dark:bg-amber-500/8"
      >
        <Icon name="info" className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
        <p className="text-sm text-amber-800 dark:text-amber-200">
          <span className="font-semibold">Rider acceptance is not a booking confirmation.</span>{" "}
          The request stays open until the customer selects a response and both sides agree.
        </p>
      </motion.div>

      {/* Decision point */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="rounded-3xl border border-slate-100 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900/70"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          After reviewing — the customer decides
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: "check-circle" as const,
              title: "Accept a response",
              detail: "Select one rider and move the request toward confirmation.",
              cls: "border-brand-100 dark:border-brand-500/20",
              iconCls: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300",
            },
            {
              icon: "chart" as const,
              title: "Send a counteroffer",
              detail: "Propose different terms — the rider can accept or reply within the same flow.",
              cls: "border-amber-100 dark:border-amber-500/20",
              iconCls: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
            },
          ].map((path) => (
            <div
              key={path.title}
              className={["flex items-start gap-4 rounded-2xl border bg-white p-5 dark:bg-slate-900", path.cls].join(" ")}
            >
              <span className={["flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl", path.iconCls].join(" ")}>
                <Icon name={path.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display font-bold text-slate-950 dark:text-white">{path.title}</p>
                <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">{path.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Steps 04–05 */}
      <div className="grid gap-5 sm:grid-cols-2">
        {outcomeSteps.map((step, i) => (
          <StepCard key={step.num} {...step} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}
