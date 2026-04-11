import type { Metadata } from "next";

import { PartnershipsPage } from "@/components/landing/partnerships-page";
import { getServerTheme } from "@/lib/theme/server";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Discuss how Kawing Ride could help your business, community, school, workplace, or rider group with rides and personal requests.",
  alternates: {
    canonical: "/partnerships",
  },
};

export default async function Partnerships() {
  const initialTheme = await getServerTheme();

  return <PartnershipsPage initialTheme={initialTheme} />;
}
