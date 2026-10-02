export const PRIMARY = new Date("2027-04-17T07:00:00-05:00");
export const GENERAL = new Date("2027-05-29T07:00:00-05:00");

export const election = {
  primary: "Saturday, April 17, 2027",
  general: "Saturday, May 29, 2027",
  earlyVoting: "April 3–10, 2027",
  registration: "March 17, 2027",
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/priorities", label: "Priorities" },
  { to: "/news", label: "News" },
  { to: "/support", label: "Support" },
] as const;

export const pillars = [
  {
    kicker: "The past",
    title: "Community",
    copy: "Community is the past we have inherited. It helps define who we are as a city.",
  },
  {
    kicker: "The present",
    title: "Continuity",
    copy: "Continuity puts long-term relationships to work. Those ties were formed in the pew, on the field, in the classroom, and around kitchen tables.",
  },
  {
    kicker: "The future",
    title: "Commitment",
    copy: "A coach’s mindset is process driven. You do not abandon a winning formula. You study it. You embrace it. When something needs to be assessed, you take a diligent, comprehensive approach.",
  },
] as const;

export const record = [
  {
    title: "Mile Branch",
    copy: "Joined the city’s effort to stop an Army Corps of Engineers plan that would have turned Mile Branch into a linear concrete canal, 80 feet wide and 40 feet deep. The project had nearly cleared five of seven steps. With city leaders and ordinary residents, Covington prevailed. Mile Branch remains a home for wildlife and a Scenic Waterway.",
  },
  {
    title: "Tyler & Jefferson",
    copy: "Worked with the administration on a corridor study of Tyler Street and Jefferson Avenue, two thoroughfares that serve schools, churches, and administrative and judicial offices. The study was scoped so the city can seek Regional Planning Commission funding if eligible.",
  },
  {
    title: "Drainage",
    copy: "Encouraged city departments to work together on drainage along Mile Branch, Blue Swamp Creek, Simpson Creek, St. Paul Creek, MLK Creek, and Mackie Creek — with Public Works, the Covington Fire Department, Parish Councilman Larry Rolling, and St. Tammany Parish staff.",
  },
  {
    title: "Public safety",
    copy: "Worked with the Covington Police Department on speed mitigation, increased patrols, and a youth education program on the rules of the road. As a councilman, he has been a neighborhood liaison on noise and school traffic.",
  },
] as const;

export const highlights = [
  { title: "Mile Branch", copy: "With the city and residents, kept a scenic waterway from becoming a concrete canal." },
  { title: "Tyler & Jefferson", copy: "A corridor study shaped so the city can seek Regional Planning Commission funding." },
  { title: "Drainage", copy: "Mile Branch, Blue Swamp, Simpson, St. Paul, MLK, and Mackie — across departments and agencies." },
  { title: "Public safety", copy: "Speed, patrols, and the rules of the road, plus a voice for neighbors on noise and school traffic." },
] as const;

export const priorities = [
  {
    title: "Lead what is already working",
    copy: "Covington, like our stately oaks, has not only survived. It has flourished. The task is to keep leading this community into the future without abandoning a winning formula.",
  },
  {
    title: "Drainage, tended together",
    copy: "Mile Branch, Blue Swamp, Simpson, St. Paul, MLK, and Mackie. The useful pattern has been departments and agencies working the same problem.",
  },
  {
    title: "Keep the corridors moving",
    copy: "Tyler and Jefferson carry schools, churches, and the courthouse. The corridor study is meant to help the city seek funding if it is eligible.",
  },
  {
    title: "Safety close to home",
    copy: "Speed, patrols, and a youth lesson on the rules of the road. Neighborhood concerns, including noise and school traffic, deserve someone who will carry them in.",
  },
] as const;

export const ways = [
  { title: "Walk a block", copy: "A conversation on your block is still how neighbors find their way." },
  { title: "Host a coffee", copy: "A kitchen table is the right size for this campaign." },
  { title: "Yard sign", copy: "A sign with the water tower tells your street you are with Jimmy." },
  { title: "Stay in touch", copy: "Dates, walks, and simple ways to help, as they come up." },
] as const;

export const photos = [
  {
    src: "/photos/podium.jpg",
    alt: "Jimmy Inman speaking at a City of Covington podium",
    caption: "At the city podium",
  },
  {
    src: "/photos/students.jpg",
    alt: "Jimmy Inman with two medal-winning students in a Covington High gym",
    caption: "With Lions athletes",
  },
  {
    src: "/photos/family-stadium.jpg",
    alt: "Jimmy Inman and his wife Gina at a night game",
    caption: "Jimmy and Gina",
  },
] as const;

export const stats = [
  { kind: "count", value: 32, label: "Years teaching" },
  { kind: "count", value: 25, label: "Years coaching" },
  { kind: "count", value: 4, label: "Years, District D" },
  { kind: "navy", label: "USS Comte de Grasse" },
] as const;
