"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ToastTone = "error" | "info" | "success";

type ToastInput = {
  description?: string;
  duration?: number;
  title: string;
  tone?: ToastTone;
};

type ToastRecord = ToastInput & {
  id: string;
  tone: ToastTone;
};

type ToastContextValue = {
  dismissToast: (id: string) => void;
  error: (title: string, description?: string) => void;
  info: (title: string, description?: string) => void;
  success: (title: string, description?: string) => void;
  toast: (input: ToastInput) => void;
};

const TOAST_DURATION = 5000;

const toastToneClasses: Record<ToastTone, string> = {
  error:
    "border-red-200 bg-white text-slate-900 shadow-[0_16px_40px_rgba(127,29,29,0.12)] dark:border-red-500/25 dark:bg-slate-950 dark:text-white",
  info:
    "border-brand-200 bg-white text-slate-900 shadow-[0_16px_40px_rgba(25,40,45,0.12)] dark:border-brand-500/25 dark:bg-slate-950 dark:text-white",
  success:
    "border-emerald-200 bg-white text-slate-900 shadow-[0_16px_40px_rgba(16,185,129,0.12)] dark:border-emerald-500/25 dark:bg-slate-950 dark:text-white",
};

const toastAccentClasses: Record<ToastTone, string> = {
  error: "bg-red-500",
  info: "bg-brand-600",
  success: "bg-emerald-500",
};

const ToastContext = createContext<ToastContextValue | null>(null);

function createToastId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastRecord[]>([]);

  const dismissToast = useCallback((id: string) => {
    startTransition(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    });
  }, []);

  const toast = useCallback(
    ({ duration = TOAST_DURATION, tone = "info", ...input }: ToastInput) => {
      const id = createToastId();
      const nextToast: ToastRecord = {
        ...input,
        duration,
        id,
        tone,
      };

      startTransition(() => {
        setToasts((current) => [...current, nextToast]);
      });

      window.setTimeout(() => {
        dismissToast(id);
      }, duration);
    },
    [dismissToast]
  );

  const contextValue = useMemo<ToastContextValue>(
    () => ({
      dismissToast,
      error: (title, description) => toast({ description, title, tone: "error" }),
      info: (title, description) => toast({ description, title, tone: "info" }),
      success: (title, description) => toast({ description, title, tone: "success" }),
      toast,
    }),
    [dismissToast, toast]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div
        aria-atomic="true"
        aria-live="polite"
        className="pointer-events-none fixed right-4 bottom-4 z-50 flex w-[min(100%,24rem)] flex-col gap-3 sm:right-6 sm:bottom-6"
      >
        {toasts.map((item) => (
          <div
            key={item.id}
            className={[
              "pointer-events-auto relative overflow-hidden rounded-[1.4rem] border px-4 py-4 backdrop-blur",
              toastToneClasses[item.tone],
            ].join(" ")}
            role="status"
          >
            <span
              aria-hidden="true"
              className={["absolute inset-y-0 left-0 w-1.5 rounded-l-[1.4rem]", toastAccentClasses[item.tone]].join(" ")}
            />
            <div className="pl-2 pr-8">
              <p className="text-sm font-semibold">{item.title}</p>
              {item.description ? (
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => dismissToast(item.id)}
              className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:text-slate-500 dark:hover:bg-slate-900 dark:hover:text-slate-200"
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider.");
  }

  return context;
}
