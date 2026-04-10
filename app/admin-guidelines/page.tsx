import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { buildLegalMetadata, getLegalDocument } from "@/lib/legal-documents";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = buildLegalMetadata("admin-guidelines");

export default async function AdminGuidelinesPage() {
  const [initialTheme, document] = await Promise.all([
    getServerTheme(),
    getLegalDocument("admin-guidelines"),
  ]);

  return <LegalDocumentPage initialTheme={initialTheme} document={document} />;
}
