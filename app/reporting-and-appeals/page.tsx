import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { buildLegalMetadata, getLegalDocument } from "@/lib/legal-documents";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = buildLegalMetadata("reporting-and-appeals");

export default async function ReportingAndAppealsPage() {
  const [initialTheme, document] = await Promise.all([
    getServerTheme(),
    getLegalDocument("reporting-and-appeals"),
  ]);

  return <LegalDocumentPage initialTheme={initialTheme} document={document} />;
}
