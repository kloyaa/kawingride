import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { buildLegalMetadata, getLegalDocument } from "@/lib/legal-documents";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = buildLegalMetadata("customer-guidelines");

export default async function CustomerGuidelinesPage() {
  const [initialTheme, document] = await Promise.all([
    getServerTheme(),
    getLegalDocument("customer-guidelines"),
  ]);

  return <LegalDocumentPage initialTheme={initialTheme} document={document} />;
}
