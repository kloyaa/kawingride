"use client";

import * as Accordion from "@radix-ui/react-accordion";

import type { FaqItem } from "./content";
import { Icon } from "./icons";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="rounded-[2rem] border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {items.map((item, index) => (
        <Accordion.Item
          key={item.question}
          value={`faq-${index}`}
          className="border-b border-slate-100 last:border-b-0 dark:border-slate-800"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition hover:bg-slate-50/70 dark:hover:bg-slate-800/40 sm:px-6">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                    FAQ {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                    Community guidance
                  </span>
                </div>
                <div className="mt-3 font-display text-lg font-bold leading-7 text-slate-950 dark:text-white sm:text-xl">
                  {item.question}
                </div>
              </div>
              <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition group-data-[state=open]:rotate-45 group-data-[state=open]:border-brand-200 group-data-[state=open]:text-brand-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:group-data-[state=open]:border-brand-500/40 dark:group-data-[state=open]:text-brand-300">
                <Icon name="close" className="h-4 w-4 rotate-45" />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-accordion-content">
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="max-w-4xl border-l-2 border-brand-100 pl-4 text-sm leading-7 text-slate-600 dark:border-brand-500/20 dark:text-slate-300">
                {item.answer}
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
