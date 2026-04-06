import type { SVGProps } from "react";

export type IconName =
  | "alert"
  | "arrow-right"
  | "bolt"
  | "calendar"
  | "chart"
  | "check"
  | "check-circle"
  | "close"
  | "eye"
  | "gift"
  | "info"
  | "lock"
  | "menu"
  | "moon"
  | "shield"
  | "star"
  | "sun"
  | "user"
  | "users"
  | "warning";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  switch (name) {
    case "alert":
      return (
        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" {...props}>
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-4a1 1 0 00-1 1v3a1 1 0 102 0V7a1 1 0 00-1-1zm0 8a1.25 1.25 0 100-2.5A1.25 1.25 0 0010 14z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "arrow-right":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      );
    case "bolt":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "calendar":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    case "chart":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      );
    case "check":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
        </svg>
      );
    case "check-circle":
      return (
        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" {...props}>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "close":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    case "eye":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      );
    case "gift":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8V21m-8-9h16M5 21h14a1 1 0 001-1v-8H4v8a1 1 0 001 1zm0-13h14a1 1 0 011 1v3H4V9a1 1 0 011-1zm4-4a2 2 0 000 4h3V6a2 2 0 00-3-2zm8 2a2 2 0 00-3-2 2 2 0 00-2 2v2h3a2 2 0 002-2z"
          />
        </svg>
      );
    case "info":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "lock":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
    case "menu":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    case "moon":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 1012 21a8.96 8.96 0 008.354-5.646z"
          />
        </svg>
      );
    case "shield":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case "star":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.98 10.1c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      );
    case "sun":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v2.25M12 18.75V21M4.72 4.72l1.59 1.59M17.69 17.69l1.59 1.59M3 12h2.25M18.75 12H21M4.72 19.28l1.59-1.59M17.69 6.31l1.59-1.59M15.75 12A3.75 3.75 0 1112 8.25 3.75 3.75 0 0115.75 12z"
          />
        </svg>
      );
    case "user":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "users":
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-1a4 4 0 00-4-4h-1m-4 5H2v-1a4 4 0 014-4h3m4-7a4 4 0 11-8 0 4 4 0 018 0zm6 1a3 3 0 10-6 0 3 3 0 006 0z"
          />
        </svg>
      );
    case "warning":
      return (
        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" {...props}>
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
}
