import type { Metadata } from "next";

import { SafetyPage } from "@/components/landing/safety-page";
import { getServerTheme } from "@/lib/theme/server";

export const metadata: Metadata = {
  title: "Safety And Trust",
  description:
    "Review Kawing Ride's trust model, privacy boundaries, support contacts, reporting path, and in-community urgent support guidance.",
  alternates: {
    canonical: "/safety",
  },
};

export default async function Safety() {
  const initialTheme = await getServerTheme();

  return <SafetyPage initialTheme={initialTheme} />;
}
