import { Icon } from "./icons";

const primarySteps = [
  {
    description: "Pickup, destination, and an optional opening fare are added to start the request.",
    label: "Customer",
    title: "Post a ride request",
  },
  {
    description: "Riders can accept the posted fare or send a different offer based on the trip.",
    label: "Rider",
    title: "Respond to the request",
  },
  {
    description: "The customer compares responses before choosing whether to accept one or send a counteroffer.",
    label: "Customer",
    title: "Review the responses",
  },
];

const decisionPaths = [
  {
    description: "The customer selects one rider response and the request moves straight toward confirmation.",
    icon: "check-circle" as const,
    title: "Accept a response",
  },
  {
    description: "If the terms need adjustment, the customer sends a counteroffer and the rider can reply inside the same flow.",
    icon: "chart" as const,
    title: "Send a counteroffer",
  },
];

const outcomeSteps = [
  {
    description: "The booking only becomes official after both sides clearly agree inside the platform.",
    label: "Platform",
    title: "Booking is confirmed",
  },
  {
    description: "Ride status and optional safety updates can continue through cancellation, expiry, and completion.",
    label: "Platform",
    title: "Updates follow the ride",
  },
];

function FlowConnector({ horizontal = false }: { horizontal?: boolean }) {
  return (
    <div className="flex justify-center py-3 lg:py-0">
      <span
        className={[
          "flow-dotted-link",
          horizontal ? "h-px w-14 lg:w-20" : "h-10 w-px",
        ].join(" ")}
      />
    </div>
  );
}

export function HowItWorksFlow() {
  return (
    <div className="mt-10">
      <div className="rounded-[2rem] border border-slate-100 bg-slate-50/85 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/75 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
          Process flow
        </p>
        <h3 className="mt-2 font-display text-2xl font-extrabold text-slate-950 dark:text-white">
          A simple journey from request to confirmation.
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          The important thing to remember is that a rider response is not yet a booking. The customer still
          decides what to confirm next.
        </p>
      </div>

      <FlowConnector />

      <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
            <Icon name="bolt" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
              Shared flow
            </p>
            <h4 className="font-display text-lg font-bold text-slate-950 dark:text-white">
              Everyone follows the same first three steps.
            </h4>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-4">
          {primarySteps.map((step, index) => (
            <div key={step.title} className="flex flex-1 flex-col lg:flex-row lg:items-center lg:gap-4">
              <article className="rounded-[1.7rem] border border-slate-100 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-950/70">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-700 font-display text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {step.label}
                    </p>
                    <h4 className="mt-1 font-display text-lg font-bold text-slate-950 dark:text-white">{step.title}</h4>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
              </article>
              {index < primarySteps.length - 1 ? <FlowConnector horizontal /> : null}
            </div>
          ))}
        </div>
      </div>

      <FlowConnector />

      <div className="rounded-[2rem] border border-amber-100 bg-amber-50/70 p-5 shadow-sm dark:border-amber-500/20 dark:bg-amber-500/10 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
            <Icon name="info" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
              Important clarification
            </p>
            <h4 className="font-display text-lg font-bold text-slate-950 dark:text-white">
              Rider acceptance does not finalize the booking.
            </h4>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
          Even if a rider accepts the posted fare, the request still stays open until the customer chooses that
          response and both sides clearly agree inside the platform.
        </p>
      </div>

      <FlowConnector />

      <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <Icon name="chart" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Decision point
            </p>
            <h4 className="font-display text-lg font-bold text-slate-950 dark:text-white">
              The customer now chooses how the request moves forward.
            </h4>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {decisionPaths.map((path, index) => (
            <article
              key={path.title}
              className="rounded-[1.7rem] border border-slate-100 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-950/70"
            >
              <div className="flex items-start gap-3">
                <span
                  className={[
                    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl",
                    index === 0
                      ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                      : "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
                  ].join(" ")}
                >
                  <Icon name={path.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    Decision path
                  </p>
                  <h4 className="mt-1 font-display text-lg font-bold text-slate-950 dark:text-white">{path.title}</h4>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{path.description}</p>
            </article>
          ))}
        </div>
      </div>

      <FlowConnector />

      <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-950">
            <Icon name="check" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Outcome
            </p>
            <h4 className="font-display text-lg font-bold text-slate-950 dark:text-white">
              Once both sides agree, the platform takes over the next updates.
            </h4>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-4">
          {outcomeSteps.map((step, index) => (
            <div key={step.title} className="flex flex-1 flex-col lg:flex-row lg:items-center lg:gap-4">
              <article className="rounded-[1.7rem] border border-slate-100 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-950/70">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 font-display text-sm font-bold text-white dark:bg-slate-200 dark:text-slate-950">
                    {index + 4}
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {step.label}
                    </p>
                    <h4 className="mt-1 font-display text-lg font-bold text-slate-950 dark:text-white">{step.title}</h4>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
              </article>
              {index < outcomeSteps.length - 1 ? <FlowConnector horizontal /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
