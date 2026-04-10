import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { buildLegalMetadata, getLegalDocument } from "@/lib/legal-documents";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = buildLegalMetadata("data-retention");

export default async function DataRetentionPage() {
  const [initialTheme, document] = await Promise.all([
    getServerTheme(),
    getLegalDocument("data-retention"),
  ]);

  return <LegalDocumentPage initialTheme={initialTheme} document={document} />;
}
