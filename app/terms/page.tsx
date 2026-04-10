import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { buildLegalMetadata, getLegalDocument } from "@/lib/legal-documents";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = buildLegalMetadata("terms");

export default async function TermsPage() {
  const [initialTheme, document] = await Promise.all([getServerTheme(), getLegalDocument("terms")]);

  return <LegalDocumentPage initialTheme={initialTheme} document={document} />;
}
