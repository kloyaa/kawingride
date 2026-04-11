import type { Metadata } from "next";

import { PricingPage } from "@/components/landing/pricing-page";
import { getServerTheme } from "@/lib/theme/server";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Review Kawing Ride plan structure for customers, riders, and community admins, along with pricing principles and reward notes.",
  alternates: {
    canonical: "/pricing",
  },
};

export default async function Pricing() {
  const initialTheme = await getServerTheme();

  return <PricingPage initialTheme={initialTheme} />;
}
