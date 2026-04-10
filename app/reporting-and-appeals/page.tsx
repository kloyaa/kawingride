import { notFound } from "next/navigation";

import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import {
  buildLegalMetadata,
  getLegalDocument,
  hasLegalDocumentVersion,
  normalizeLegalDocumentVersionParam,
} from "@/lib/legal-documents";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = buildLegalMetadata("reporting-and-appeals");

export default async function ReportingAndAppealsPage(
  props: PageProps<"/reporting-and-appeals">,
) {
  const [searchParams, initialTheme] = await Promise.all([props.searchParams, getServerTheme()]);
  const requestedVersion = normalizeLegalDocumentVersionParam(searchParams.version);

  if (requestedVersion && !hasLegalDocumentVersion("reporting-and-appeals", requestedVersion)) {
    notFound();
  }

  const document = await getLegalDocument("reporting-and-appeals", requestedVersion);

  return <LegalDocumentPage initialTheme={initialTheme} document={document} />;
}
