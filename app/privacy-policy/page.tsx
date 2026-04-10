import { notFound } from "next/navigation";

import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import {
  buildLegalMetadata,
  getLegalDocument,
  hasLegalDocumentVersion,
  normalizeLegalDocumentVersionParam,
} from "@/lib/legal-documents";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = buildLegalMetadata("privacy-policy");

export default async function PrivacyPolicyPage(props: PageProps<"/privacy-policy">) {
  const [searchParams, initialTheme] = await Promise.all([props.searchParams, getServerTheme()]);
  const requestedVersion = normalizeLegalDocumentVersionParam(searchParams.version);

  if (requestedVersion && !hasLegalDocumentVersion("privacy-policy", requestedVersion)) {
    notFound();
  }

  const document = await getLegalDocument("privacy-policy", requestedVersion);

  return <LegalDocumentPage initialTheme={initialTheme} document={document} />;
}
