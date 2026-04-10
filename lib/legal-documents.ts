import { cache } from "react";
import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { APP_DOMAIN, APP_NAME } from "@/constants/branding";

export type LegalDocumentKey =
  | "terms"
  | "privacy-policy"
  | "community-guidelines"
  | "customer-guidelines"
  | "rider-guidelines"
  | "admin-guidelines"
  | "data-retention"
  | "reporting-and-appeals";

export type LegalDocumentBlock =
  | {
      type: "divider";
    }
  | {
      level: 2 | 3;
      text: string;
      type: "heading";
    }
  | {
      text: string;
      type: "paragraph";
    }
  | {
      items: string[];
      type: "list";
    };

type LegalDocumentDefinition = {
  description: string;
  fileName: string;
  key: LegalDocumentKey;
  navLabel: string;
  related: LegalDocumentKey[];
  route: string;
  summary: string;
  title: string;
};

export type LegalDocument = LegalDocumentDefinition & {
  blocks: LegalDocumentBlock[];
  tableOfContents: Array<{
    id: string;
    level: 2 | 3;
    text: string;
  }>;
};

const legalDocumentDefinitions: LegalDocumentDefinition[] = [
  {
    key: "terms",
    fileName: "terms-of-service.md",
    route: "/terms",
    title: "Terms of Service",
    navLabel: "Terms of Service",
    description:
      "The operating terms that explain Kawing Ride's role, user responsibilities, safety boundaries, and enforcement framework.",
    summary:
      "Defines Kawing Ride as a community-based coordination platform, clarifies user roles, and sets the service, safety, and liability boundaries.",
    related: [
      "privacy-policy",
      "community-guidelines",
      "customer-guidelines",
      "rider-guidelines",
      "admin-guidelines",
      "data-retention",
      "reporting-and-appeals",
    ],
  },
  {
    key: "privacy-policy",
    fileName: "privacy.md",
    route: "/privacy-policy",
    title: "Privacy Policy",
    navLabel: "Privacy Policy",
    description:
      "How Kawing Ride collects, uses, protects, shares, and retains personal data in support of trusted community ride coordination.",
    summary:
      "Explains what data we collect, why we use it, when it may be shared, and how privacy-aware controls support the trust model.",
    related: [
      "terms",
      "community-guidelines",
      "customer-guidelines",
      "admin-guidelines",
      "data-retention",
      "reporting-and-appeals",
    ],
  },
  {
    key: "community-guidelines",
    fileName: "community-guidelines.md",
    route: "/community-guidelines",
    title: "Community Guidelines",
    navLabel: "Community Guidelines",
    description:
      "The conduct expectations for customers, riders, admins, moderators, and other users across trusted Kawing Ride communities.",
    summary:
      "Sets day-to-day behavior standards around honesty, respect, privacy, safe use, and good-faith reporting.",
    related: [
      "terms",
      "privacy-policy",
      "customer-guidelines",
      "rider-guidelines",
      "admin-guidelines",
      "reporting-and-appeals",
    ],
  },
  {
    key: "customer-guidelines",
    fileName: "customer-guidelines.md",
    route: "/customer-guidelines",
    title: "Customer Responsibilities and Safety Guidance",
    navLabel: "Customer Guidance",
    description:
      "The responsibilities, booking expectations, privacy duties, and safety guidance that apply to customers using Kawing Ride.",
    summary:
      "Explains how customers should create honest requests, use negotiation fairly, handle privacy responsibly, and follow through on confirmed rides.",
    related: ["terms", "community-guidelines", "privacy-policy", "reporting-and-appeals"],
  },
  {
    key: "rider-guidelines",
    fileName: "rider-guidelines.md",
    route: "/rider-guidelines",
    title: "Rider Standards and Responsibilities",
    navLabel: "Rider Standards",
    description:
      "The onboarding, conduct, safety, and booking responsibilities expected from riders using Kawing Ride.",
    summary:
      "Clarifies the rider role in the trust model, including verification, legal compliance, professional conduct, and anti-circumvention rules.",
    related: ["terms", "community-guidelines", "privacy-policy", "admin-guidelines", "reporting-and-appeals"],
  },
  {
    key: "admin-guidelines",
    fileName: "admin-guidelines.md",
    route: "/admin-guidelines",
    title: "Admin and Moderator Standards",
    navLabel: "Admin Standards",
    description:
      "The conduct, access, review, and data-handling standards expected from community admins and moderators on Kawing Ride.",
    summary:
      "Defines how admins and moderators should handle authority, protected records, governance decisions, and reports with fairness and accountability.",
    related: ["terms", "community-guidelines", "privacy-policy", "data-retention", "reporting-and-appeals"],
  },
  {
    key: "data-retention",
    fileName: "data-retention.md",
    route: "/data-retention",
    title: "Data Retention Policy",
    navLabel: "Data Retention",
    description:
      "The retention timelines and principles that govern how long Kawing Ride keeps operational, safety, moderation, and dispute-related records.",
    summary:
      "Describes what records may be kept, for how long, and why some data may remain after account deletion.",
    related: ["privacy-policy", "terms", "admin-guidelines", "reporting-and-appeals"],
  },
  {
    key: "reporting-and-appeals",
    fileName: "reporting-and-appeals.md",
    route: "/reporting-and-appeals",
    title: "Reporting and Appeals Process",
    navLabel: "Reporting and Appeals",
    description:
      "How Kawing Ride reviews reports, applies interim restrictions, records investigations, and handles reconsideration requests.",
    summary:
      "Explains what can be reported, how reviews may work, what actions may follow, and how appeals are treated.",
    related: [
      "terms",
      "community-guidelines",
      "customer-guidelines",
      "rider-guidelines",
      "admin-guidelines",
      "privacy-policy",
      "data-retention",
    ],
  },
];

const legalDocumentDefinitionsByKey = new Map(
  legalDocumentDefinitions.map((definition) => [definition.key, definition]),
);

export function getAllLegalDocumentDefinitions() {
  return legalDocumentDefinitions;
}

export function isLegalDocumentKey(value: string): value is LegalDocumentKey {
  return legalDocumentDefinitionsByKey.has(value as LegalDocumentKey);
}

export function getLegalDocumentDefinition(key: LegalDocumentKey) {
  const definition = legalDocumentDefinitionsByKey.get(key);

  if (!definition) {
    throw new Error(`Unknown legal document key: ${key}`);
  }

  return definition;
}

export function buildLegalMetadata(key: LegalDocumentKey): Metadata {
  const definition = getLegalDocumentDefinition(key);
  const url = new URL(definition.route, APP_DOMAIN).toString();

  return {
    title: definition.title,
    description: definition.description,
    alternates: {
      canonical: definition.route,
    },
    openGraph: {
      title: `${definition.title} | ${APP_NAME}`,
      description: definition.description,
      url,
      siteName: APP_NAME,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${definition.title} | ${APP_NAME}`,
      description: definition.description,
    },
  };
}

export const getLegalDocument = cache(async (key: LegalDocumentKey): Promise<LegalDocument> => {
  const definition = getLegalDocumentDefinition(key);
  const fullPath = path.join(process.cwd(), "kawing-ride-mds", definition.fileName);
  const markdown = await readFile(fullPath, "utf8");
  const blocks = parseMarkdownDocument(markdown, definition.title);
  const tableOfContents = blocks
    .filter((block): block is Extract<LegalDocumentBlock, { type: "heading" }> => block.type === "heading")
    .map((block) => ({
      id: createAnchorId(block.text),
      level: block.level,
      text: block.text,
    }));

  return {
    ...definition,
    blocks,
    tableOfContents,
  };
});

export function getLegalDocumentDownloadPath(key: LegalDocumentKey) {
  return `/policies/download/${key}`;
}

export function getLegalDocumentDownloadFileName(key: LegalDocumentKey, year = new Date().getUTCFullYear()) {
  const definition = getLegalDocumentDefinition(key);
  const documentName = definition.title
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  return `KAWING_${documentName}_${year}.txt`;
}

export async function getLegalDocumentPlainText(key: LegalDocumentKey) {
  const document = await getLegalDocument(key);
  const lines: string[] = [document.title, ""];

  for (const block of document.blocks) {
    if (block.type === "divider") {
      if (lines.at(-1) !== "") {
        lines.push("");
      }

      continue;
    }

    if (block.type === "heading") {
      if (lines.at(-1) !== "") {
        lines.push("");
      }

      lines.push(block.text);
      lines.push("");
      continue;
    }

    if (block.type === "paragraph") {
      lines.push(toPlainText(block.text));
      lines.push("");
      continue;
    }

    for (const item of block.items) {
      lines.push(`- ${toPlainText(item)}`);
    }

    lines.push("");
  }

  return lines.join("\n").trimEnd().concat("\n");
}

function parseMarkdownDocument(markdown: string, title: string): LegalDocumentBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: LegalDocumentBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const currentLine = lines[index]?.trim() ?? "";

    if (!currentLine) {
      index += 1;
      continue;
    }

    if (/^-{3,}$/.test(currentLine)) {
      blocks.push({ type: "divider" });
      index += 1;
      continue;
    }

    const headingMatch = currentLine.match(/^(#{1,3})\s+(.+)$/);

    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();

      if (!(level === 1 && text === title)) {
        blocks.push({
          type: "heading",
          level: level === 3 ? 3 : 2,
          text,
        });
      }

      index += 1;
      continue;
    }

    if (currentLine.startsWith("* ")) {
      const items: string[] = [];

      while (index < lines.length) {
        const listLine = lines[index]?.trim() ?? "";

        if (!listLine.startsWith("* ")) {
          break;
        }

        items.push(listLine.slice(2).trim());
        index += 1;
      }

      blocks.push({ type: "list", items });
      continue;
    }

    const paragraphLines: string[] = [];

    while (index < lines.length) {
      const paragraphLine = lines[index] ?? "";
      const trimmedParagraphLine = paragraphLine.trim();

      if (
        !trimmedParagraphLine ||
        /^-{3,}$/.test(trimmedParagraphLine) ||
        /^(#{1,3})\s+/.test(trimmedParagraphLine) ||
        trimmedParagraphLine.startsWith("* ")
      ) {
        break;
      }

      paragraphLines.push(trimmedParagraphLine);
      index += 1;
    }

    if (paragraphLines.length > 0) {
      blocks.push({
        type: "paragraph",
        text: paragraphLines.join(" "),
      });
      continue;
    }

    index += 1;
  }

  return blocks;
}

export function createAnchorId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function toPlainText(text: string) {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1");
}
