import { notFound } from "next/navigation";

import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import {
  buildLegalMetadata,
  getLegalDocument,
  hasLegalDocumentVersion,
  normalizeLegalDocumentVersionParam,
} from "@/lib/legal-documents";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = buildLegalMetadata("data-retention");

export default async function DataRetentionPage(props: PageProps<"/data-retention">) {
  const [searchParams, initialTheme] = await Promise.all([props.searchParams, getServerTheme()]);
  const requestedVersion = normalizeLegalDocumentVersionParam(searchParams.version);

  if (requestedVersion && !hasLegalDocumentVersion("data-retention", requestedVersion)) {
    notFound();
  }

  const document = await getLegalDocument("data-retention", requestedVersion);

  return <LegalDocumentPage initialTheme={initialTheme} document={document} />;
}
