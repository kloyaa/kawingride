import type { Metadata } from "next";

import { LegalIndexPage } from "@/components/legal/legal-index-page";
import { getServerTheme } from "@/lib/theme/server";

export const metadata: Metadata = {
  title: "Policy Center",
  description:
    "Browse the full Kawing Ride policy framework, including terms, privacy, community rules, rider standards, rewards context, reporting, and data retention.",
  alternates: {
    canonical: "/policies",
  },
};

export default async function PoliciesPage() {
  const initialTheme = await getServerTheme();

  return <LegalIndexPage initialTheme={initialTheme} />;
}
