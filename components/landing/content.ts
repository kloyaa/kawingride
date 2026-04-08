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

export type ProcessFlowActor = "customer" | "rider" | "system";

export type ProcessFlowStep = {
  actor: ProcessFlowActor;
  description: string;
  detail: string;
  id: string;
  note?: string;
  title: string;
};

export type PricingPlan = {
  description: string;
  icon: IconName;
  name: string;
  tiers: PricingTier[];
  tone: Tone;
};

export type PricingTier = {
  badge?: string;
  ctaLabel?: string;
  description?: string;
  discount: string;
  featured?: boolean;
  sections: PricingTierSection[];
  name: string;
  note?: string;
  price: string;
};

export type PricingTierSection = {
  items: string[];
  style?: "default" | "muted";
  title: string;
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

export type DataHandlingGroup = {
  items: string[];
  summary: string;
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

export type LaunchArea = {
  description: string;
  title: string;
};

export const navigationItems: NavigationItem[] = [
  { href: "/#mission", label: "Mission" },
  { href: "/#problem", label: "Problem" },
  { href: "/#solution", label: "Solution" },
  { href: "/#how-it-works", label: "Flow" },
  { href: "/#trust", label: "Trust" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/our-story", label: "Our Story" },
  { href: "/#faq", label: "FAQ" },
];

export const missionStatement =
  "Private ride requests for trusted local communities, with structured negotiation, optional safety updates, and stronger accountability.";

export const missionDescription =
  "Built for communities that already rely on local riders, with better privacy, clearer decisions, and stronger accountability for every trip.";

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
  "Kawing Ride is a safety-first coordination platform for community-based transport. It is not an open marketplace that matches strangers by default, and it is not trying to replace the human relationships that local ride communities already rely on.";

export const founderNote = {
  quote:
    "We want booking a community ride to feel calm, private, and respectful from the start.",
  attribution: "A note from the founder",
};

export const trustStory = {
  title: "Customers should not have to do detective work before every ride.",
  paragraphs: [
    "Many scam victims are not careless. They are often moving quickly, unfamiliar with community rules, or simply trying to get a ride without the extra burden of checking whether a rider is legitimate.",
    "Kawing Ride is designed to remove that burden from the customer side. Riders go through proper verification before they can serve the community, and device fingerprints are actively monitored to strengthen protection for both customers and riders.",
    "The goal is to make trusted access feel normal from the start, so safety does not depend on whether a busy customer remembered to run a background check alone.",
  ],
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
    description: "Live gas prices and admin-set per-km rates give both sides a fair starting point.",
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
  "Riders can bid at a fixed fare, send a counteroffer, or suggest a meter-based fare — while the customer still decides which response to confirm.",
  "Customers can accept, decline, or counter without relying on unstructured chat.",
  "Each negotiation follows a visible sequence of actions with less ambiguity.",
  "Live gas price ranges and admin-set per-km rates give both sides a fair baseline for meter negotiations.",
  "Safety notifications can be sent automatically when ride status changes.",
];

export const solutionPillars = [
  {
    title: "Private by design",
    description: "Sensitive trip details stay out of large public timelines.",
  },
  {
    title: "Structured negotiation",
    description: "Riders bid, counter, or suggest meter. Customers compare and confirm — all within a defined sequence.",
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

export const howItWorksSummary: StepCard[] = [
  {
    title: "Request",
    description: "The customer posts the trip details and riders respond with fare acceptance or an offer.",
    tone: "brand",
  },
  {
    title: "Review",
    description: "The customer compares responses and either accepts one or sends a counteroffer for the rider to review.",
    tone: "amber",
  },
  {
    title: "Confirm",
    description: "The booking becomes official only after both sides clearly agree, then updates can follow the ride.",
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
  "Accept the posted fare and wait for customer confirmation",
  "Submit an offer",
  "Counter the offer",
  "Confirm the final agreement inside the platform",
];

export const processFlowSteps: ProcessFlowStep[] = [
  {
    id: "customer-request",
    actor: "customer",
    title: "Customer posts a ride request",
    description: "Pickup, destination, and an optional opening fare are added to start the request.",
    detail:
      "The request stays inside the community instead of becoming another public post in a group feed.",
  },
  {
    id: "rider-response",
    actor: "rider",
    title: "Rider responds with fare acceptance or an offer",
    description: "The rider can accept the posted fare or send a different amount based on the trip.",
    detail:
      "This is a rider response, not an automatic booking. The customer still reviews all responses before choosing what to do next.",
    note: "Important: rider acceptance does not finalize the trip by itself.",
  },
  {
    id: "customer-review",
    actor: "customer",
    title: "Customer reviews the responses",
    description: "The customer compares riders, fares, and reputation before making a decision.",
    detail:
      "The customer can accept one response, decline it, or send a counteroffer instead of being forced into a first-come, first-served decision.",
  },
  {
    id: "rider-counter",
    actor: "rider",
    title: "Rider answers the counteroffer if needed",
    description: "If a counter is sent, the rider can accept it, decline it, or reply with a final decision.",
    detail:
      "This keeps the negotiation structured while still allowing riders and customers to agree on terms that fit the trip.",
  },
  {
    id: "system-confirmed",
    actor: "system",
    title: "Booking becomes confirmed",
    description: "The trip only becomes official when both sides clearly agree inside the platform.",
    detail:
      "Confirmation is the point where the request moves from negotiation into an active ride arrangement.",
  },
  {
    id: "system-updates",
    actor: "system",
    title: "Safety and ride updates follow",
    description: "Optional notifications and ride status updates can continue through cancellation, expiry, and completion.",
    detail:
      "Once the ride is confirmed, the platform can keep the right people informed without relying on scattered chat updates.",
  },
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
  "Easier onboarding and management of customers and riders",
  "Optional safety notifications for trusted contacts",
  "A clearer and more dependable experience for both sides",
];

export const comparisonHighlights = [
  {
    title: "Time",
    social: "Free tools push the work into long chats, repeated follow-ups, and manual coordination.",
    platform:
      "Structured requests, clearer next actions, and easier onboarding reduce wasted time for both customers and riders.",
  },
  {
    title: "Privacy",
    social: "Ride details are easier to expose because requests live in feeds and group threads.",
    platform: "Requests stay in a controlled flow designed around community access and clearer visibility rules.",
  },
  {
    title: "Trust",
    social: "Communities rely on guesswork, memory, and screenshots to judge reliability.",
    platform:
      "Ratings, outcomes, role-based accountability, and easier member management give communities stronger signals over time.",
  },
];

export const pricingValueStatement =
  "Social media groups may be free in cash, but communities still pay in time, uncertainty, privacy exposure, and trust repair. Kawing Ride turns those hidden costs into a clearer operating system for local transport.";

export const trustPillars: TrustPillar[] = [
  {
    title: "Community-led onboarding",
    description:
      "Communities decide who joins, who moderates, and what standards apply, making onboarding and member management easier to run with consistency.",
  },
  {
    title: "Role-based governance",
    description: "Customers, riders, and admins each have clear responsibilities so the platform supports order instead of confusion.",
  },
  {
    title: "Privacy-aware identity handling",
    description:
      "Customer identity is protected during early negotiation, while rider verification data is limited to the admins who need it for onboarding and moderation.",
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
    description:
      "Customers post requests, compare offers, and decide whether to accept, decline, or counter while keeping their personal identity more private during negotiation.",
    responsibilities: [
      "Provide accurate trip details",
      "Manage contact-sharing preferences in settings",
      "Respond within the negotiation window",
      "Rate completed rides fairly",
    ],
  },
  {
    title: "Riders",
    description:
      "Riders review requests and respond with a bid, counteroffer, or meter-based suggestion. Each active rider goes through verified onboarding before serving the community.",
    responsibilities: [
      "Keep rider, vehicle, and onboarding details current",
      "Respond with a bid, counteroffer, or meter suggestion",
      "Use live gas price context when suggesting meter fares",
      "Maintain reliable service and conduct",
    ],
  },
  {
    title: "Admins",
    description:
      "Admins help set standards, oversee access, manage protected onboarding records, and configure community-level settings like per-km rates.",
    responsibilities: [
      "Approve or remove access when needed",
      "Set per-km rates and community pricing standards",
      "Handle verification records with appropriate care",
      "Review incidents and suspicious activity",
    ],
  },
  {
    title: "Moderators",
    description:
      "Moderators are appointed by the super admin and help maintain fair practices and consistent standards across communities.",
    responsibilities: [
      "Review flagged activity and escalated incidents",
      "Enforce platform standards across communities",
      "Support admins in resolving disputes",
      "Ensure pricing conduct and community behavior stays fair",
    ],
  },
];

export const dataHandlingGroups: DataHandlingGroup[] = [
  {
    title: "Customer privacy by default",
    summary:
      "Customer onboarding stays lightweight while early-stage negotiation keeps personal identity more private.",
    items: [
      "We collect only the customer name and mobile number.",
      "Riders see a system-generated username instead of the customer's actual name during negotiation.",
      "The customer's mobile number is only shared after both sides pass negotiation and only when the customer allows rider contact in settings.",
    ],
  },
  {
    title: "Verified rider onboarding",
    summary:
      "Rider onboarding is more detailed so communities can be managed by properly identified riders.",
    items: [
      "We collect plate number, valid IDs, selfie, and background information for onboarding purposes.",
      "Sensitive rider verification records are restricted to admins and are not openly visible across the community.",
      "The goal is to protect privacy while making sure local operations are handled by accountable people.",
    ],
  },
];

export const privacyAssurances = [
  "Personally identifiable information is encrypted in the database.",
  "Sensitive onboarding access is limited to the roles that need it.",
  "Platform activity is logged for audit and review purposes.",
];

export const trustBoundaries = [
  "The platform supports safer coordination, but it does not replace personal judgment or local community due diligence.",
  "Safety notifications and trust signals help reduce uncertainty, but they are not guarantees against every incident.",
  "Communities still need clear onboarding rules, moderation standards, and local escalation practices.",
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Customer",
    description: "Choose between basic access or the full customer experience depending on how often you book and what safety and rewards features you need.",
    icon: "user",
    tone: "brand",
    tiers: [
      {
        name: "Free",
        price: "₱0",
        description: "Basic community customer access",
        discount: "Ideal for occasional riders who need essential request and negotiation tools.",
        sections: [
          {
            title: "Included access",
            items: [
              "Create ride requests within approved communities",
              "Receive rider offers and respond to negotiations",
              "Maintain a customer profile and rating history",
            ],
          },
          {
            title: "Paid features not included",
            style: "muted",
            items: [
              "Emergency contact notifications",
              "Points and monthly rewards",
              "Customer pricing reductions based on reputation",
            ],
          },
        ],
        ctaLabel: "Start Free",
      },
      {
        name: "Standard",
        price: "₱100",
        discount: "Good reputation may reduce this to ₱80 per month.",
        sections: [
          {
            title: "Everything in Free, plus",
            items: [
              "Join multiple communities and access more riders",
              "Emergency contact notifications",
              "Live location sharing",
              "Reward points and redemptions",
              "Priority access to customer incentives tied to strong community standing",
            ],
          },
        ],
        ctaLabel: "Choose Standard",
      },
    ],
  },
  {
    name: "Rider",
    description: "Rider membership gives active riders full access to bidding, meter-based fare suggestions, and trust-building tools inside the community.",
    icon: "bolt",
    tone: "brand",
    tiers: [
      {
        name: "Rider",
        price: "₱330",
        description: "₱300 per month after the first month",
        discount: "Approximately ₱11 per day, which is less than the cost of one ride for many customers.",
        badge: "Most common",
        featured: true,
        sections: [
          {
            title: "Included access",
            items: [
              "Transferable rider membership that can be shared across multiple communities",
              "Bid, counter, or suggest meter on every ride request",
              "View live gas price ranges in your city",
              "Access built-in tools",
              "Earn points and access rewards",
              "Maintain a full rider and vehicle profile",
              "Build trust through ride history and ratings",
            ],
          },
        ],
        ctaLabel: "Apply As Rider",
      },
    ],
  },
  {
    name: "Admin",
    description: "Admin membership supports community leads who manage access, standards, and local coordination inside the platform.",
    icon: "shield",
    tone: "violet",
    tiers: [
      {
        name: "Community Admin",
        price: "₱1,300",
        discount: "Strong community performance may reduce this to ₱1,000 per month.",
        sections: [
          {
            title: "Included access",
            items: [
              "Manage community operations",
              "Oversee riders and customers",
              "Control community-wide settings and access",
              "Receive incentives based on community performance and growth",
            ],
          },
        ],
        ctaLabel: "Manage A Community",
      },
    ],
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

export const launchAreas: LaunchArea[] = [
  {
    title: "Cagayan de Oro City",
    description:
      "An initial focus area for community ride coordination, local onboarding, and early operational standards.",
  },
  {
    title: "Butuan City",
    description:
      "A second launch priority where trusted local communities and rider groups can adopt the same structured flow.",
  },
];

export const launchAreaNotes = [
  "Launch planning starts with communities that already coordinate rides and want stronger structure.",
  "Onboarding priorities include customer access, rider verification, and clear local admin responsibilities.",
  "The same operating model is intended to stay consistent as Kawing Ride expands to more cities.",
];

export const ctaExpectations = [
  "Private requests and clearer booking decisions",
  "Safer coordination with stronger accountability",
  "A practical next step for organized local transport",
];

export const faqItems: FaqItem[] = [
  {
    question: "What is Kawing Ride?",
    answer:
      "Kawing Ride is a private ride coordination platform for trusted local communities. It gives customers and riders a clearer way to post requests, negotiate fares, confirm rides, and follow updates without relying on messy group chats.",
  },
  {
    question: "Who is it for?",
    answer:
      "It is built first for neighborhoods, schools, workplaces, and local rider groups that already arrange rides informally and want a more organized, private, and trustworthy process.",
  },
  {
    question: "How does booking work?",
    answer:
      "A customer posts a request, riders can accept the fare or send an offer, and the customer chooses what to accept, decline, or counter. A ride only becomes confirmed when both sides clearly agree inside the platform.",
  },
  {
    question: "Does the app automatically assign a rider?",
    answer:
      "No. Kawing Ride is not a stranger-first ride-hailing marketplace. It helps communities coordinate rides more clearly, but the final decision still stays with the customer and the rider.",
  },
  {
    question: "What stays private during booking?",
    answer:
      "Ride requests stay inside the intended community instead of a public social feed. During negotiation, riders see a system username rather than the customer's actual name, and contact details are only shared after both sides agree and the customer allows contact sharing.",
  },
  {
    question: "Are there safety features?",
    answer:
      "Yes. Kawing Ride can send optional ride status updates to a trusted contact when a ride is confirmed, cancelled, expires, or is marked complete.",
  },
  {
    question: "Is Kawing Ride available to everyone now?",
    answer:
      "Not yet. The platform is launching through selected communities first, with early focus on Cagayan de Oro City and Butuan City.",
  },
  {
    question: "How do I join or bring my community in?",
    answer:
      "Use the Request Access path to start the conversation. That is the best way to express interest, ask about launch fit, or explore how your community can come on board.",
  },
];

export const ctaPaths: CtaPath[] = [
  {
    title: "Launch a community",
    description: "Review the trust model and decide how your community should be organized from day one.",
    label: "Explore Trust Model",
    href: "#trust",
  },
  {
    title: "Plan rider onboarding",
    description: "Check the pricing and rider expectations before inviting riders into the platform.",
    label: "View Pricing Options",
    href: "#pricing",
  },
  {
    title: "Start the conversation",
    description: "Use the common questions and access path to decide whether Kawing Ride fits your community.",
    label: "Read Common Questions",
    href: "#faq",
  },
];
