import type { Metadata } from "next";

import { UpdatesPage } from "@/components/landing/updates-page";
import { getServerTheme } from "@/lib/theme/server";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Read Kawing Ride rollout notes, product direction, and other important updates in one dedicated route.",
  alternates: {
    canonical: "/updates",
  },
};

export default async function Updates() {
  const initialTheme = await getServerTheme();

  return <UpdatesPage initialTheme={initialTheme} />;
}
