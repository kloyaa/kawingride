import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { buildLegalMetadata, getLegalDocument } from "@/lib/legal-documents";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = buildLegalMetadata("community-guidelines");

export default async function CommunityGuidelinesPage() {
  const [initialTheme, document] = await Promise.all([
    getServerTheme(),
    getLegalDocument("community-guidelines"),
  ]);

  return <LegalDocumentPage initialTheme={initialTheme} document={document} />;
}
