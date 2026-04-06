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

export type MissionPillar = {
  description: string;
  title: string;
};

export type AudienceGroup = {
  description: string;
  title: string;
};

export type TrustPillar = {
  description: string;
  title: string;
};

export type CommunityRole = {
  description: string;
  responsibilities: string[];
  title: string;
};

export type FaqItem = {
  answer: string;
  question: string;
};

export type CtaPath = {
  description: string;
  href: string;
  label: string;
  title: string;
};

export const navigationItems: NavigationItem[] = [
  { href: "#mission", label: "Mission" },
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#trust", label: "Trust" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const missionStatement =
  "Private ride requests for trusted local communities, with structured negotiation, optional safety updates, and stronger accountability.";

export const missionDescription =
  "Community Ride exists to help communities keep the flexibility they already value while improving trust, privacy, and clarity for every trip.";

export const missionPillars: MissionPillar[] = [
  {
    title: "Protect private trip details",
    description: "Ride requests should stay within the intended community instead of being exposed in broad social feeds.",
  },
  {
    title: "Make agreement feel professional",
    description: "Negotiation should be clear, time aware, and easier to complete without uncomfortable back-and-forth messages.",
  },
  {
    title: "Strengthen community trust",
    description: "Communities need better accountability, better signals, and better tools to support safe local transport.",
  },
];

export const audienceGroups: AudienceGroup[] = [
  {
    title: "Private local communities",
    description: "Ideal for neighborhoods, schools, workplace groups, and trusted local networks that already coordinate rides informally.",
  },
  {
    title: "Rider-led associations",
    description: "Built for organized rider groups that want a more professional way to manage requests, trust, and reputation.",
  },
  {
    title: "Early customer communities",
    description: "Designed first for customers who already book in community channels and want more privacy and better follow-through.",
  },
];

export const whyNowPoints = [
  "Community booking already happens every day, but the tools used today were not designed for trust, privacy, or structured decision making.",
  "People now expect more transparency around safety, accountability, and moderation, especially when rides are arranged through informal channels.",
  "Local communities do not always need a full ride-hailing marketplace. Many need a better coordination layer for relationships that already exist.",
];

export const platformIdentity =
  "Community Ride is a safety-first coordination platform for community-based transport. It is not an open marketplace that matches strangers by default, and it is not trying to replace the human relationships that local ride communities already rely on.";

export const founderNote = {
  quote:
    "Our mission is not to industrialize community rides. It is to make trusted local mobility feel more respectful, more transparent, and more dependable for everyone involved.",
  attribution: "Founding vision",
};

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
  "Pila pangayo?",
  "HM? SM to Gaisano Downtown?",
  "Kaya P120?",
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

export const trustPillars: TrustPillar[] = [
  {
    title: "Community-led onboarding",
    description: "Communities decide who joins, who moderates, and what standards apply to their local network.",
  },
  {
    title: "Role-based governance",
    description: "Customers, riders, and admins each have clear responsibilities so the platform supports order instead of confusion.",
  },
  {
    title: "Visible history and accountability",
    description: "Ratings, outcomes, and ride activity create a clearer picture of reliability over time.",
  },
  {
    title: "Review paths for incidents",
    description: "Disputes, suspicious activity, and repeated bad behavior can be reviewed instead of ignored inside a chat thread.",
  },
];

export const communityRoles: CommunityRole[] = [
  {
    title: "Customers",
    description: "Customers post requests, compare offers, and decide whether to accept, decline, or counter.",
    responsibilities: [
      "Provide accurate trip details",
      "Respond within the negotiation window",
      "Rate completed rides fairly",
    ],
  },
  {
    title: "Riders",
    description: "Riders review requests, submit offers, complete trips, and build trust through consistent performance.",
    responsibilities: [
      "Keep rider and vehicle details current",
      "Respond honestly to offers and counters",
      "Maintain reliable service and conduct",
    ],
  },
  {
    title: "Admins",
    description: "Admins help set standards, oversee access, and support moderation for the community.",
    responsibilities: [
      "Approve or remove access when needed",
      "Review incidents and suspicious activity",
      "Protect community standards over time",
    ],
  },
];

export const trustBoundaries = [
  "The platform supports safer coordination, but it does not replace personal judgment or local community due diligence.",
  "Safety notifications and trust signals help reduce uncertainty, but they are not guarantees against every incident.",
  "Communities still need clear onboarding rules, moderation standards, and local escalation practices.",
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
    // featured: true,
    // badge: "Most common",
  },
  {
    name: "Admin",
    price: "₱500",
    discount: "Strong community performance may reduce this to ₱300 per month.",
    features: [
      "Manage community operations",
      "Oversee riders and customers",
      "Control community-wide settings and access",
      "Incentives based on community performance and growth",
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
  "A mission centered on trust, privacy, and clarity",
  "A production-ready model designed for real communities first",
  "Defined roles for customers, riders, and admins",
  "Stronger governance and safety expectations",
  "A clearer path to community adoption",
];

export const faqItems: FaqItem[] = [
  {
    question: "Who is this platform for first?",
    answer:
      "The first focus is trusted local communities that already coordinate rides informally, including neighborhoods, schools, workplace groups, and rider-led networks.",
  },
  {
    question: "Is Community Ride an open ride-hailing marketplace?",
    answer:
      "No. The platform is designed as a coordination layer for community-based transport, with community controls and clearer trust signals rather than stranger-first matching.",
  },
  {
    question: "How are riders and communities managed?",
    answer:
      "Admins and community leads are expected to manage membership, review access, and define standards locally. The platform supports that structure instead of replacing it.",
  },
  {
    question: "What happens when disputes or suspicious activity appear?",
    answer:
      "The system is designed to give communities better review paths, clearer history, and more structure for moderation than informal chat threads can offer.",
  },
  {
    question: "What does the platform not guarantee?",
    answer:
      "The platform improves coordination, visibility, and accountability, but it does not eliminate risk or replace local judgment, moderation, and due diligence.",
  },
  {
    question: "What should an interested group do next?",
    answer:
      "The best next step is to review the operating model, confirm the right membership plan, and align your customer, rider, and admin expectations before adoption.",
  },
];

export const ctaPaths: CtaPath[] = [
  {
    title: "Launch a community",
    description: "Start by reviewing the trust and governance model, then prepare the admin structure your local group will need.",
    label: "Review Trust Model",
    href: "#trust",
  },
  {
    title: "Plan rider onboarding",
    description: "Understand the rider path, pricing, and accountability model before inviting active operators into the platform.",
    label: "See Membership Options",
    href: "#pricing",
  },
  {
    title: "Align your community",
    description: "Use the FAQ and mission sections to align members around scope, safety, and community expectations.",
    label: "Read The FAQ",
    href: "#faq",
  },
];
