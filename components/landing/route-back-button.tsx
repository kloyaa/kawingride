"use client";

import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";

import { Icon } from "./icons";

type RouteBackButtonProps = {
  fallbackHref?: string;
  label?: string;
} & ComponentProps<"button">;

export function RouteBackButton({
  fallbackHref = "/",
  label = "Back",
  className,
  type,
  ...props
}: RouteBackButtonProps) {
  const router = useRouter();

  function handleBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  }

  return (
    <button
      type={type ?? "button"}
      onClick={handleBack}
      className={[
        "inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100",
        className,
      ].filter(Boolean).join(" ")}
      {...props}
    >
      <Icon name="arrow-left" className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}
