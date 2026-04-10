import { notFound } from "next/navigation";

import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import {
  buildLegalMetadata,
  getLegalDocument,
  hasLegalDocumentVersion,
  normalizeLegalDocumentVersionParam,
} from "@/lib/legal-documents";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = buildLegalMetadata("rider-guidelines");

export default async function RiderGuidelinesPage(props: PageProps<"/rider-guidelines">) {
  const [searchParams, initialTheme] = await Promise.all([props.searchParams, getServerTheme()]);
  const requestedVersion = normalizeLegalDocumentVersionParam(searchParams.version);

  if (requestedVersion && !hasLegalDocumentVersion("rider-guidelines", requestedVersion)) {
    notFound();
  }

  const document = await getLegalDocument("rider-guidelines", requestedVersion);

  return <LegalDocumentPage initialTheme={initialTheme} document={document} />;
}
