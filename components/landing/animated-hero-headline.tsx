"use client";

import { motion, useReducedMotion } from "motion/react";

type AnimatedHeroHeadlineProps = {
  className?: string;
  highlightedText?: string;
  lines: readonly string[];
};

type HighlightParts = {
  after: string;
  before: string;
  match: string;
} | null;

const baseClassName =
  "mt-5 font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[3.45rem]";

function getHighlightParts(line: string, highlightedText?: string): HighlightParts {
  if (!highlightedText) {
    return null;
  }

  const startIndex = line.indexOf(highlightedText);

  if (startIndex === -1) {
    return null;
  }

  return {
    before: line.slice(0, startIndex),
    match: highlightedText,
    after: line.slice(startIndex + highlightedText.length),
  };
}

function HighlightedPhrase({ text }: { text: string }) {
  return (
    <span className="relative inline-block w-fit">
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[0.08em] top-[0.38em] -z-10 rounded-[1.4rem] bg-brand-100/90 dark:bg-brand-500/15"
        initial={{ scaleX: 0.15, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
        style={{ transformOrigin: "left center" }}
      />
      <motion.span
        className="gradient-text inline-block pr-3"
        initial={{ letterSpacing: "-0.04em" }}
        animate={{ letterSpacing: "-0.02em" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.22 }}
      >
        {text}
      </motion.span>
    </span>
  );
}

function StaticHighlightedPhrase({ text }: { text: string }) {
  return <span className="gradient-text">{text}</span>;
}

export function AnimatedHeroHeadline({
  className,
  highlightedText,
  lines,
}: AnimatedHeroHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();
  const headlineClassName = className ? `${baseClassName} ${className}` : baseClassName;

  if (prefersReducedMotion) {
    return (
      <h1 className={headlineClassName}>
        {lines.map((line) => {
          const parts = getHighlightParts(line, highlightedText);

          return (
            <span key={line} className="block">
              {parts ? (
                <>
                  {parts.before}
                  <StaticHighlightedPhrase text={parts.match} />
                  {parts.after}
                </>
              ) : (
                line
              )}
            </span>
          );
        })}
      </h1>
    );
  }

  return (
    <motion.h1
      className={headlineClassName}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.08,
          },
        },
      }}
    >
      {lines.map((line, index) => {
        const parts = getHighlightParts(line, highlightedText);

        return (
          <motion.span
            key={line}
            className={index === 0 ? "block" : "mt-1 block"}
            variants={{
              hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.55, ease: "easeOut" },
              },
            }}
          >
            {parts ? (
              <>
                {parts.before}
                <HighlightedPhrase text={parts.match} />
                {parts.after}
              </>
            ) : (
              line
            )}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
