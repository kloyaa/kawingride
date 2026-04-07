"use client";

import { useMemo, useState, type ReactNode } from "react";

import * as Tabs from "@radix-ui/react-tabs";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type InteractiveTab = {
  content: ReactNode;
  description?: string;
  label: string;
  value: string;
};

type InteractiveTabsProps = {
  className?: string;
  defaultValue?: string;
  panelClassName?: string;
  tabs: InteractiveTab[];
};

export function InteractiveTabs({
  className,
  defaultValue,
  panelClassName,
  tabs,
}: InteractiveTabsProps) {
  const prefersReducedMotion = useReducedMotion();
  const initialValue = defaultValue ?? tabs[0]?.value ?? "";
  const [value, setValue] = useState(initialValue);

  const activeTab = useMemo(
    () => tabs.find((tab) => tab.value === value) ?? tabs[0],
    [tabs, value],
  );

  return (
    <Tabs.Root value={value} onValueChange={setValue} className={className}>
      <Tabs.List className="inline-flex w-full flex-wrap gap-2 rounded-[1.5rem] border border-slate-200 bg-white/90 p-2 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
        {tabs.map((tab) => {
          const isActive = tab.value === activeTab?.value;

          return (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className={[
                "relative flex min-w-0 flex-1 rounded-[1.1rem] px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300",
                isActive
                  ? "bg-brand-50 text-slate-950 shadow-sm dark:bg-brand-500/10 dark:text-white"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200",
              ].join(" ")}
            >
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">{tab.label}</span>
                {tab.description ? (
                  <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {tab.description}
                  </span>
                ) : null}
              </span>
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      <div className={["mt-4", panelClassName].filter(Boolean).join(" ")}>
        <AnimatePresence mode="wait" initial={false}>
          {activeTab ? (
            <motion.div
              key={activeTab.value}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {activeTab.content}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </Tabs.Root>
  );
}
