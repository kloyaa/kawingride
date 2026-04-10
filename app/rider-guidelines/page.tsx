import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { buildLegalMetadata, getLegalDocument } from "@/lib/legal-documents";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = buildLegalMetadata("rider-guidelines");

export default async function RiderGuidelinesPage() {
  const [initialTheme, document] = await Promise.all([
    getServerTheme(),
    getLegalDocument("rider-guidelines"),
  ]);

  return <LegalDocumentPage initialTheme={initialTheme} document={document} />;
}
