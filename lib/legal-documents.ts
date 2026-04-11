import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

import { APP_DOMAIN, APP_NAME } from "@/constants/branding";
import { getSiteSettings } from "@/lib/site-settings";

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

type LegalDocumentVersionDefinition = {
  changeSummary: string;
  effectiveDate: string;
  fileName: string;
  isCurrent: boolean;
  version: string | null;
  versionLabel: string;
};

type LegalDocumentDefinition = {
  description: string;
  directoryName: string;
  key: LegalDocumentKey;
  navLabel: string;
  related: LegalDocumentKey[];
  route: string;
  summary: string;
  title: string;
};

export type LegalDocumentVersionSummary = Omit<LegalDocumentVersionDefinition, "fileName"> & {
  downloadPath: string;
  href: string;
};

export type LegalDocument = LegalDocumentDefinition & {
  availableVersions: LegalDocumentVersionSummary[];
  blocks: LegalDocumentBlock[];
  changeSummary: string;
  effectiveDate: string;
  isCurrentVersion: boolean;
  tableOfContents: Array<{
    id: string;
    level: 2 | 3;
    text: string;
  }>;
  version: string | null;
  versionLabel: string;
};

export type LegalDocumentDownloadFormat = "md" | "txt";

const legalDocumentDefinitions: LegalDocumentDefinition[] = [
  {
    key: "terms",
    directoryName: "terms-of-service",
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
    directoryName: "privacy",
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
    directoryName: "community-guidelines",
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
    directoryName: "customer-guidelines",
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
    directoryName: "rider-guidelines",
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
    directoryName: "admin-guidelines",
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
    directoryName: "data-retention",
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
    directoryName: "reporting-and-appeals",
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

const LEGAL_DOCUMENTS_DIRECTORY = path.join(process.cwd(), "kawing-ride-mds");

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

export function normalizeLegalDocumentVersionParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export function hasLegalDocumentVersion(key: LegalDocumentKey, version: string) {
  return getLegalDocumentVersionDefinitions(key).some((entry) => entry.version === version);
}

export function getLegalDocumentVersionHistory(key: LegalDocumentKey): LegalDocumentVersionSummary[] {
  return getLegalDocumentVersionDefinitions(key).map((versionEntry) => ({
    changeSummary: versionEntry.changeSummary,
    effectiveDate: versionEntry.effectiveDate,
    href: getLegalDocumentVersionHref(key, versionEntry.version ?? undefined),
    downloadPath: getLegalDocumentDownloadPath(key, { version: versionEntry.version ?? undefined }),
    isCurrent: versionEntry.isCurrent,
    version: versionEntry.version,
    versionLabel: versionEntry.versionLabel,
  }));
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

export function getLegalDocumentVersionHref(key: LegalDocumentKey, version?: string) {
  if (!version) {
    return getLegalDocumentDefinition(key).route;
  }

  const params = new URLSearchParams({ version });
  return `${getLegalDocumentDefinition(key).route}?${params.toString()}`;
}

export async function getLegalDocumentMarkdown(key: LegalDocumentKey, version?: string) {
  const versionDefinition = getLegalDocumentVersionDefinition(key, version);
  const fullPath = path.join(getLegalDocumentDirectoryPath(key), versionDefinition.fileName);
  const markdown = await readFile(fullPath, "utf8");

  return applySiteSettingsTokens(markdown);
}

export async function getLegalDocument(key: LegalDocumentKey, version?: string): Promise<LegalDocument> {
  const definition = getLegalDocumentDefinition(key);
  const versionDefinition = getLegalDocumentVersionDefinition(key, version);
  const markdown = await getLegalDocumentMarkdown(key, versionDefinition.version ?? undefined);
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
    availableVersions: getLegalDocumentVersionHistory(key),
    blocks,
    changeSummary: versionDefinition.changeSummary,
    effectiveDate: versionDefinition.effectiveDate,
    isCurrentVersion: versionDefinition.isCurrent,
    tableOfContents,
    version: versionDefinition.version,
    versionLabel: versionDefinition.versionLabel,
  };
}

export function getLegalDocumentDownloadPath(
  key: LegalDocumentKey,
  options?: {
    format?: LegalDocumentDownloadFormat;
    version?: string;
  },
) {
  const params = new URLSearchParams();

  if (options?.format && options.format !== "txt") {
    params.set("format", options.format);
  }

  if (options?.version) {
    params.set("version", options.version);
  }

  const query = params.toString();

  return query ? `/policies/download/${key}?${query}` : `/policies/download/${key}`;
}

export function isLegalDocumentDownloadFormat(value: string): value is LegalDocumentDownloadFormat {
  return value === "md" || value === "txt";
}

export function getLegalDocumentDownloadContentType(format: LegalDocumentDownloadFormat) {
  return format === "md" ? "text/markdown; charset=utf-8" : "text/plain; charset=utf-8";
}

export function getLegalDocumentDownloadFileName(
  key: LegalDocumentKey,
  options?: {
    format?: LegalDocumentDownloadFormat;
    version?: string;
    year?: number;
  },
) {
  const definition = getLegalDocumentDefinition(key);
  const versionDefinition = getLegalDocumentVersionDefinition(key, options?.version);
  const format = options?.format ?? "txt";
  const year = options?.year ?? new Date().getUTCFullYear();
  const documentName = definition.title
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  const versionName = (versionDefinition.version ?? "current").toUpperCase().replace(/[^A-Z0-9]+/g, "_");

  return `KAWING_${documentName}_${versionName}_${year}.${format}`;
}

export async function getLegalDocumentPlainText(key: LegalDocumentKey, version?: string) {
  const document = await getLegalDocument(key, version);
  const lines: string[] = [
    document.title,
    `Version: ${document.versionLabel}`,
    `Effective date: ${document.effectiveDate}`,
    "",
  ];

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

function getLegalDocumentVersionDefinitions(key: LegalDocumentKey): LegalDocumentVersionDefinition[] {
  const currentFileName = "current.md";
  const versionPattern = /^(v\d+\.\d+\.\d+)\.md$/;
  const fileNames = readdirSync(getLegalDocumentDirectoryPath(key));
  const versionedEntries = fileNames
    .map((fileName) => {
      const match = fileName.match(versionPattern);

      if (!match) {
        return null;
      }

      return {
        fileName,
        version: match[1],
      };
    })
    .filter((entry): entry is { fileName: string; version: string } => Boolean(entry))
    .sort((left, right) => compareSemverDesc(left.version, right.version));

  const currentEntry = fileNames.includes(currentFileName)
    ? buildLegalDocumentVersionDefinition(key, currentFileName, null, true)
    : null;
  const archivedEntries = versionedEntries.map((entry) =>
    buildLegalDocumentVersionDefinition(key, entry.fileName, entry.version, false),
  );

  if (currentEntry) {
    return [currentEntry, ...archivedEntries];
  }

  if (archivedEntries.length > 0) {
    return archivedEntries.map((entry, index) => ({
      ...entry,
      isCurrent: index === 0,
    }));
  }

  throw new Error(`No legal document files found for ${key}`);
}

function getLegalDocumentVersionDefinition(key: LegalDocumentKey, version?: string) {
  const versions = getLegalDocumentVersionDefinitions(key);

  if (!version) {
    return versions.find((entry) => entry.isCurrent) ?? versions[0];
  }

  const versionDefinition = versions.find((entry) => entry.version === version);

  if (!versionDefinition) {
    throw new Error(`Unknown legal document version for ${key}: ${version}`);
  }

  return versionDefinition;
}

function buildLegalDocumentVersionDefinition(
  key: LegalDocumentKey,
  fileName: string,
  version: string | null,
  isCurrent: boolean,
): LegalDocumentVersionDefinition {
  const markdown = readFileSync(path.join(getLegalDocumentDirectoryPath(key), fileName), "utf8");

  return {
    changeSummary: extractLeadParagraph(applySiteSettingsTokens(markdown), isCurrent, version),
    effectiveDate: extractEffectiveDate(applySiteSettingsTokens(markdown)),
    fileName,
    isCurrent,
    version,
    versionLabel: version ?? "Current",
  };
}

function extractEffectiveDate(markdown: string) {
  const match = markdown.match(/^Last updated:\s*(.+?)(?:\.)?\s*$/m);

  return match?.[1].trim() ?? "Undated";
}

function extractLeadParagraph(markdown: string, isCurrent: boolean, version: string | null) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let index = 0;

  while (index < lines.length) {
    const line = lines[index]?.trim() ?? "";

    if (!line || /^#\s+/.test(line) || /^Last updated:\s*/.test(line)) {
      index += 1;
      continue;
    }

    const paragraphLines: string[] = [];

    while (index < lines.length) {
      const currentLine = lines[index]?.trim() ?? "";

      if (!currentLine || /^(#{1,3})\s+/.test(currentLine) || /^-{3,}$/.test(currentLine) || currentLine.startsWith("* ")) {
        break;
      }

      paragraphLines.push(currentLine);
      index += 1;
    }

    if (paragraphLines.length > 0) {
      return paragraphLines.join(" ");
    }

    index += 1;
  }

  if (isCurrent) {
    return "Current published version.";
  }

  return `Archived ${version ?? "document"} version.`;
}

function compareSemverDesc(left: string, right: string) {
  const leftParts = normalizeSemver(left);
  const rightParts = normalizeSemver(right);

  for (let index = 0; index < Math.max(leftParts.length, rightParts.length); index += 1) {
    const leftValue = leftParts[index] ?? 0;
    const rightValue = rightParts[index] ?? 0;

    if (leftValue === rightValue) {
      continue;
    }

    return rightValue - leftValue;
  }

  return 0;
}

function normalizeSemver(value: string) {
  return value
    .replace(/^v/i, "")
    .split(".")
    .map((part) => Number.parseInt(part, 10) || 0);
}

function getLegalDocumentDirectoryPath(key: LegalDocumentKey) {
  return path.join(LEGAL_DOCUMENTS_DIRECTORY, getLegalDocumentDefinition(key).directoryName);
}

function applySiteSettingsTokens(markdown: string) {
  const siteSettings = getSiteSettings();

  return markdown
    .replaceAll("{{GENERAL_INQUIRY_EMAIL}}", siteSettings.generalInquiryEmail)
    .replaceAll("{{CUSTOMER_SERVICE_EMAIL}}", siteSettings.customerServiceEmail)
    .replaceAll("{{PRIVACY_EMAIL}}", siteSettings.privacyEmail)
    .replaceAll("{{PARTNERSHIPS_EMAIL}}", siteSettings.partnershipsEmail)
    .replaceAll("{{UPDATES_EMAIL}}", siteSettings.updatesEmail)
    .replaceAll("{{EMERGENCY_ADMIN_MOBILE}}", siteSettings.emergencyAdminMobile);
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
