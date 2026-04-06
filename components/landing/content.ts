import type { IconName } from "./icons";

export type Tone = "amber" | "brand" | "emerald" | "slate" | "violet";

export type NavigationItem = {
  href: string;
  label: string;
};

export type FeatureCard = {
  description: string;
  icon: IconName;
  title: string;
  tone: Tone;
};

export type StepCard = {
  description: string;
  title: string;
  tone: Tone;
};

export type TimelineItem = {
  description: string;
  label: string;
  title: string;
  tone: Tone;
};

export type PricingPlan = {
  badge?: string;
  description?: string;
  discount: string;
  features: string[];
  featured?: boolean;
  icon: IconName;
  name: string;
  price: string;
  tone: Tone;
};

export type RewardHighlight = {
  badge: string;
  description: string;
  title: string;
  tone: Tone;
};

export const navigationItems: NavigationItem[] = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#safety", label: "Safety" },
  { href: "#pricing", label: "Pricing" },
  { href: "#rewards", label: "Rewards" },
];

export const heroHighlights: FeatureCard[] = [
  {
    title: "Private",
    description: "Ride details stay within a controlled request flow.",
    icon: "lock",
    tone: "brand",
  },
  {
    title: "Structured",
    description: "Offers and counters follow a clear decision path.",
    icon: "chart",
    tone: "amber",
  },
  {
    title: "Safer",
    description: "Optional contact notifications keep trusted people informed.",
    icon: "shield",
    tone: "emerald",
  },
  {
    title: "Fairer",
    description: "Ratings and history help people choose with confidence.",
    icon: "star",
    tone: "violet",
  },
];

export const problemCards = [
  {
    title: "Public posts expose private details",
    description:
      "Ride requests can become visible to a wide audience, including people outside the intended circle.",
  },
  {
    title: "Trust is hard to verify",
    description:
      "Legitimate riders, real customers, and suspicious accounts can appear in the same space, making confidence difficult.",
  },
  {
    title: "Selection often feels arbitrary",
    description:
      "People may choose based on who replied first or looks familiar, instead of using clear indicators of reliability.",
  },
  {
    title: "Negotiation takes too much effort",
    description:
      "Both sides spend time in long chats before reaching a price, which creates friction for everyone involved.",
  },
  {
    title: "Ghosting slows everything down",
    description:
      "Either side can disappear without context, leaving requests unresolved and time wasted.",
  },
  {
    title: "Safety steps are inconsistent",
    description:
      "There is rarely a reliable way to keep a trusted contact informed when a ride is confirmed, cancelled, or completed.",
  },
];

export const solutionChecklist = [
  "Requests stay inside a controlled environment instead of a public feed.",
  "Riders can accept the posted fare or submit an offer that fits the route.",
  "Customers can accept, decline, or counter without relying on unstructured chat.",
  "Each negotiation follows a visible sequence of actions with less ambiguity.",
  "Safety notifications can be sent automatically when ride status changes.",
];

export const solutionPillars = [
  {
    title: "Private by design",
    description: "Sensitive trip details stay out of large public timelines.",
  },
  {
    title: "Structured negotiation",
    description: "Users see the posted fare, the current offer, and the next available action.",
  },
  {
    title: "Faster decision making",
    description: "Time-aware negotiation helps both sides move forward with less delay.",
  },
  {
    title: "Trust through reputation",
    description: "Ratings and successful activity help communities build dependable patterns over time.",
  },
];

export const howItWorksSteps: StepCard[] = [
  {
    title: "Customer submits a request",
    description: "Add the pickup point, destination, and an optional opening fare to start the request.",
    tone: "brand",
  },
  {
    title: "Riders accept or bid",
    description: "Riders can accept the posted amount or send a different offer based on the trip.",
    tone: "brand",
  },
  {
    title: "Customer reviews offers",
    description: "The request owner can compare responses, then accept, decline, or counter.",
    tone: "brand",
  },
  {
    title: "Rider responds to the counter",
    description: "If a counteroffer is sent, the rider can accept, decline, or respond with a final decision.",
    tone: "amber",
  },
  {
    title: "Booking is confirmed",
    description: "The trip becomes official only after both sides clearly agree inside the platform.",
    tone: "emerald",
  },
  {
    title: "Safety and completion updates follow",
    description: "Confirmed, cancelled, expired, and completed rides can trigger status updates when enabled.",
    tone: "emerald",
  },
];

export const legacyFlowQuotes = [
  "Can you share your rate for this trip?",
  "Please send your offer.",
  "What budget are you working with?",
  "Long message threads just to settle one fare",
];

export const structuredFlowItems = [
  "Accept the posted fare",
  "Submit an offer",
  "Counter the offer",
  "Confirm the final agreement inside the platform",
];

export const safetyTimeline: TimelineItem[] = [
  {
    label: "A",
    title: "Confirmed ride notification",
    description:
      "When both sides confirm the booking, a trusted contact can receive the rider details, vehicle details, and general route.",
    tone: "brand",
  },
  {
    label: "B",
    title: "Cancelled updates",
    description: "If the ride is cancelled, the contact receives a clear update so there is less uncertainty.",
    tone: "amber",
  },
  {
    label: "C",
    title: "No-show or expired updates",
    description: "If the request does not move forward, the contact can still receive a status update.",
    tone: "slate",
  },
  {
    label: "D",
    title: "Completed safely",
    description: "A final message can be sent when the customer completes the ride safely.",
    tone: "emerald",
  },
];

export const safetyDetails = [
  "Rider name or preferred display name",
  "Plate number",
  "Vehicle color and brand",
  "General pickup and destination areas",
];

export const whyLegacyItems = [
  "Public ride requests",
  "Mixed real and suspicious accounts",
  "Selection based on guesswork",
  "Long private negotiation threads",
  "Ghosting without a defined process",
  "No built-in trip safety notification",
];

export const whyPlatformItems = [
  "Controlled and more private ride requests",
  "Structured interaction between customer and rider",
  "Fairer decisions supported by bids, counters, and ratings",
  "Time-aware negotiation that reduces ghosting",
  "Optional safety notifications for trusted contacts",
  "A clearer and more dependable experience for both sides",
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Customer",
    price: "₱60",
    discount: "Good reputation may reduce this to ₱40 per month.",
    features: [
      "Book rides within your community",
      "Earn points and access rewards",
      "Enable emergency contact notifications",
    ],
    icon: "user",
    tone: "brand",
  },
  {
    name: "Rider",
    price: "₱270",
    description: "₱250 per month after the first month",
    discount: "Good reputation may reduce this to ₱200 per month.",
    features: [
      "Accept and bid on ride requests",
      "Earn points and access rewards",
      "Maintain a full rider and vehicle profile",
    ],
    icon: "bolt",
    tone: "brand",
    featured: true,
    badge: "Most common",
  },
  {
    name: "Admin",
    price: "₱500",
    discount: "Strong community performance may reduce this to ₱300 per month.",
    features: [
      "Manage community operations",
      "Oversee riders and customers",
      "Control community-wide settings and access",
    ],
    icon: "shield",
    tone: "violet",
  },
];

export const rewardsHighlights: RewardHighlight[] = [
  {
    title: "Points per completed ride",
    description:
      "Customers and riders each earn 3 points whenever a ride is completed successfully on the platform.",
    badge: "3",
    tone: "brand",
  },
  {
    title: "Redeemed monthly",
    description:
      "Points convert once a month, which keeps reviews manageable and gives auditors time to evaluate fairly.",
    badge: "30",
    tone: "amber",
  },
  {
    title: "Converted to e-wallet gift cards",
    description: "Rewards translate into practical value that users can spend on everyday needs.",
    badge: "GC",
    tone: "emerald",
  },
];

export const rewardAuditPoints = [
  "Auditors review reward requests using assigned IDs instead of names, which helps reduce personal bias.",
  "Activity history and ratings can be reviewed to spot suspicious patterns before points are released.",
  "Consistently strong behavior may increase rewards over time, subject to the review process.",
];

export const ctaExpectations = [
  "Less awkward negotiation",
  "More privacy and stronger safety options",
  "Clearer pricing and decision making",
  "Better trust through ratings and accountability",
  "Reward points with practical value",
];
