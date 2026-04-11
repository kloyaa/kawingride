import type { Metadata } from "next";

import { HowItWorksPage } from "@/components/landing/how-it-works-page";
import { getServerTheme } from "@/lib/theme/server";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Kawing Ride handles private ride booking, structured negotiation, confirmation, updates, and personal requests such as buying goods.",
  alternates: {
    canonical: "/how-it-works",
  },
};

export default async function HowItWorks() {
  const initialTheme = await getServerTheme();

  return <HowItWorksPage initialTheme={initialTheme} />;
}
