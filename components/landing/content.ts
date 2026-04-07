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
  "Riders can accept the posted fare or submit an offer, while the customer still decides which response to confirm.",
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
      "Riders review requests, accept posted fares or submit offers, and go through verified onboarding before serving the community.",
    responsibilities: [
      "Keep rider, vehicle, and onboarding details current",
      "Respond honestly to offers and counters",
      "Maintain reliable service and conduct",
    ],
  },
  {
    title: "Admins",
    description:
      "Admins help set standards, oversee access, manage protected onboarding records, and support moderation for the community.",
    responsibilities: [
      "Approve or remove access when needed",
      "Handle verification records with appropriate care",
      "Review incidents and suspicious activity",
      "Protect community standards over time",
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
      "Rider onboarding is more detailed so communities can be managed by properly identified operators.",
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
        price: "₱60",
        discount: "Good reputation may reduce this to ₱40 per month.",
        sections: [
          {
            title: "Everything in Free, plus",
            items: [
              "Emergency contact notifications",
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
    description: "Rider membership is built for active operators who need a complete profile, full bidding access, and trust-building tools inside the community.",
    icon: "bolt",
    tone: "brand",
    tiers: [
      {
        name: "Operator",
        price: "₱270",
        description: "₱250 per month after the first month",
        discount: "Good reputation may reduce this to ₱200 per month.",
        badge: "Most common",
        featured: true,
        sections: [
          {
            title: "Included access",
            items: [
              "Accept posted fares or submit bids on ride requests",
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
        price: "₱500",
        discount: "Strong community performance may reduce this to ₱300 per month.",
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
    title: "Cagayan de Oro",
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
  "A clearer and more respectful way to coordinate rides",
  "Shared expectations for customers, riders, and admins",
  "A trust model built for real community use",
  "Safer coordination with stronger accountability",
  "A practical next step for organized local transport",
];

export const faqItems: FaqItem[] = [
  {
    question: "Who is this platform for first?",
    answer:
      "The first focus is trusted local communities that already coordinate rides informally, including neighborhoods, schools, workplace groups, and rider-led networks.",
  },
  {
    question: "Is Kawing Ride an open ride-hailing marketplace?",
    answer:
      "No. The platform is designed as a coordination layer for community-based transport, with community controls and clearer trust signals rather than stranger-first matching.",
  },
  {
    question: "How are riders and communities managed?",
    answer:
      "Admins and community leads are expected to manage membership, review access, and define standards locally. The platform supports that structure instead of replacing it.",
  },
  {
    question: "What customer information do riders see?",
    answer:
      "Customer onboarding only requires a name and mobile number, but riders do not see the actual customer name during negotiation. They see a system-generated username instead, and contact details are only shared after both sides agree and the customer allows rider contact in settings.",
  },
  {
    question: "How is rider onboarding information handled?",
    answer:
      "Rider onboarding can include plate number, valid IDs, selfie, and supporting background information. Those records are collected for verification and moderation purposes, and access is restricted to admins rather than exposed across the community.",
  },
  {
    question: "Where is Kawing Ride launching first?",
    answer:
      "The initial launch focus is Cagayan de Oro and Butuan City, starting with communities that already coordinate rides and need a clearer operating model.",
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
    question: "How is sensitive information protected?",
    answer:
      "Personally identifiable information is encrypted in the database, sensitive onboarding access is limited by role, and key platform activity is logged for audit and review purposes.",
  },
  {
    question: "What should an interested group do next?",
    answer:
      "The best next step is to review the operating model, confirm the right membership plan, and align your customer, rider, and admin expectations before adoption.",
  },
  {
    question: "How should communities or partners start the conversation?",
    answer:
      "The clearest path is to review the trust model, confirm the right setup for customers and riders, and use the request access path to begin launch and onboarding discussions.",
  },
];

export const ctaPaths: CtaPath[] = [
  {
    title: "Launch a community",
    description: "Set up the standards, admin structure, and operating model your local community needs from day one.",
    label: "Explore Trust Model",
    href: "#trust",
  },
  {
    title: "Plan rider onboarding",
    description: "Review rider access, pricing, and accountability so operators join with the right expectations.",
    label: "View Pricing Options",
    href: "#pricing",
  },
  {
    title: "Align your community",
    description: "Use the mission and FAQ sections to bring members together around scope, safety, and day-to-day use.",
    label: "Read Common Questions",
    href: "#faq",
  },
];
