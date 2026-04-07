"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Icon } from "./icons";

const VISIBILITY_OFFSET = 480;

export function ScrollToTop() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > VISIBILITY_OFFSET);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-100 bg-white/92 text-brand-700 shadow-[0_18px_38px_rgba(29,42,45,0.16)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-brand-50 dark:border-brand-500/20 dark:bg-slate-900/88 dark:text-brand-300 dark:hover:bg-slate-800 sm:bottom-6 sm:right-6"
        >
          <Icon name="arrow-right" className="-rotate-90 h-4 w-4" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
