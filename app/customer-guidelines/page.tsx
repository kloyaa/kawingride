import { notFound } from "next/navigation";

import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import {
  buildLegalMetadata,
  getLegalDocument,
  hasLegalDocumentVersion,
  normalizeLegalDocumentVersionParam,
} from "@/lib/legal-documents";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = buildLegalMetadata("customer-guidelines");

export default async function CustomerGuidelinesPage(
  props: PageProps<"/customer-guidelines">,
) {
  const [searchParams, initialTheme] = await Promise.all([props.searchParams, getServerTheme()]);
  const requestedVersion = normalizeLegalDocumentVersionParam(searchParams.version);

  if (requestedVersion && !hasLegalDocumentVersion("customer-guidelines", requestedVersion)) {
    notFound();
  }

  const document = await getLegalDocument("customer-guidelines", requestedVersion);

  return <LegalDocumentPage initialTheme={initialTheme} document={document} />;
}
