export type CommunityScore = 1 | 2 | 3 | 4 | 5;

export type CommunityRecord = {
  activeCustomers: number;
  activeRiders: number;
  communityScore: CommunityScore;
  location: string;
  name: string;
};

export const dummyCommunities: CommunityRecord[] = [
  {
    activeCustomers: 184,
    activeRiders: 37,
    communityScore: 5,
    location: "Cagayan de Oro City",
    name: "Macasandig Community Riders",
  },
  {
    activeCustomers: 132,
    activeRiders: 24,
    communityScore: 4,
    location: "Butuan City",
    name: "Bancasi Neighborhood Transport Circle",
  },
  {
    activeCustomers: 96,
    activeRiders: 18,
    communityScore: 3,
    location: "Iligan City",
    name: "Midtown School Shuttle Network",
  },
  {
    activeCustomers: 221,
    activeRiders: 41,
    communityScore: 5,
    location: "Valencia City",
    name: "Valencia Market Day Riders",
  },
  {
    activeCustomers: 74,
    activeRiders: 16,
    communityScore: 2,
    location: "Malaybalay City",
    name: "Upper Bukidnon Community Loop",
  },
];
