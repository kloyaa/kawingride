import Link from "next/link";
import type { ReactNode } from "react";

type LegalRichTextProps = {
  text: string;
};

const inlinePattern =
  /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`)/g;

export function LegalRichText({ text }: LegalRichTextProps) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  const pattern = new RegExp(inlinePattern);
  let match: RegExpExecArray | null = pattern.exec(text);

  while (match) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const [token, , linkLabel, linkHref, strongText, emphasisText, codeText] = match;
    const key = `${token}-${match.index}`;

    if (linkLabel && linkHref) {
      nodes.push(
        linkHref.startsWith("/") ? (
          <Link
            key={key}
            href={linkHref}
            className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-4 transition hover:text-brand-800 dark:text-brand-300 dark:decoration-brand-500/40 dark:hover:text-brand-200"
          >
            {linkLabel}
          </Link>
        ) : (
          <a
            key={key}
            href={linkHref}
            className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-4 transition hover:text-brand-800 dark:text-brand-300 dark:decoration-brand-500/40 dark:hover:text-brand-200"
          >
            {linkLabel}
          </a>
        ),
      );
    } else if (strongText) {
      nodes.push(
        <strong key={key} className="font-semibold text-slate-900 dark:text-white">
          {strongText}
        </strong>,
      );
    } else if (emphasisText) {
      nodes.push(
        <em key={key} className="italic">
          {emphasisText}
        </em>,
      );
    } else if (codeText) {
      nodes.push(
        <code
          key={key}
          className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[0.92em] text-slate-800 dark:bg-slate-800 dark:text-slate-100"
        >
          {codeText}
        </code>,
      );
    }

    lastIndex = match.index + token.length;
    match = pattern.exec(text);
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}
