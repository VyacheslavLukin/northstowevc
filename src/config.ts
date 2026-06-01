// ═══════════════════════════════════════════════════════════════════════════
//  CLUB CONFIG — edit this file to update the site's content.
//
//  Everything a non-developer is likely to change lives here. Search for "TODO"
//  to find values that still need real club information before going live.
//
//  All copy below is taken verbatim (or lightly trimmed) from the club's
//  existing Google Site, so it is accurate to the club's real voice and status.
// ═══════════════════════════════════════════════════════════════════════════

export const club = {
  name: "Northstowe Social Volleyball Club",
  shortName: "Northstowe Social Volleyball",
  tagline: "A welcoming, all-abilities volleyball community in Northstowe",

  // One-line pitch used in the hero and meta description.
  pitch:
    "Whether you've never touched a volleyball or you've played for years, there's always a spot for you. Come together, stay active, and enjoy the game.",

  location: "Northstowe, Cambridgeshire",

  // Real club email (also the inbox for the contact form).
  email: "northstowesocialvolleyball@gmail.com",

  // Web3Forms access key for the contact form (free, unlimited submissions).
  // Submissions are emailed to the address registered with this key.
  web3formsKey: "a96eac6a-698f-4fb0-8197-7b9fdf679d2e",

  // "Register your interest" Google Form (shown on the Events/get-involved area).
  registerFormUrl: "https://forms.gle/sHp5cUadqdh65ooS6",

  // Social links. Leave a value empty ("") to hide that icon.
  socials: {
    instagram: "https://www.instagram.com/northstowevolleyballofficial/",
    youtube: "https://www.youtube.com/@NorthstoweVolleyballClub",
  },
};

// ─── Status banner ───────────────────────────────────────────────────────────
// The club has run its first session. This honest "early days" note drives the
// get-involved call to action and folds in the (not-yet-fixed) play times.
export const status = {
  organising: true,
  headline: "We've started — come and join us!",
  body: "Our first session is done and we're just getting going. We aim to play on Saturday afternoons (from 4pm) and Sunday mornings. Times aren't set in stone yet, so register your interest or drop us a message and we'll tell you exactly when and where.",
};

// ─── When we play (folded into the get-involved banner) ──────────────────────
// TODO: once times are fixed, update these.
export const playTimes = [
  { day: "Saturdays", time: "from 4pm" },
  { day: "Sundays", time: "mornings" },
];

// ─── Session photo gallery ───────────────────────────────────────────────────
// Photos live in /public/sessions as session-N.jpg (large) + session-N-thumb.jpg.
// To add more: drop in the next-numbered pair and add an entry here with good
// alt text. To remove one, delete its entry (and optionally the files).
export const gallery = [
  { src: "session-1", alt: "Two players setting the ball up into a bright sky" },
  { src: "session-2", alt: "Players warming up around the net on the grass court" },
  { src: "session-3", alt: "A rally in progress with the ball above the net" },
  { src: "session-4", alt: "Players ready on both sides of the outdoor net" },
  { src: "session-5", alt: "A player bumping the ball back over the net" },
  { src: "session-6", alt: "A player leaping for a spike at the net" },
  { src: "session-7", alt: "A game underway with Northstowe houses in the background" },
  { src: "session-8", alt: "A player jumping to serve the ball" },
];

// ─── Home: "What you will gain" ──────────────────────────────────────────────
export const gains = [
  "Stay active",
  "Learn a new sport",
  "Improve coordination and body awareness",
  "Build confidence and fitness",
  "Have fun while learning new skills",
];

// ─── About: "What We Offer" ──────────────────────────────────────────────────
export const offerings = [
  {
    title: "Coached Sessions",
    body: "Beginner-friendly training focused on learning the fundamentals of volleyball in a relaxed environment.",
  },
  {
    title: "Social Volleyball",
    body: "Casual games open to players of all levels with a focus on fun, community, and enjoying the sport.",
  },
  {
    title: "Future Club Development",
    body: "As the community grows, we hope to expand into regular training, friendly matches, and competitive volleyball opportunities.",
  },
];

// ─── About: "Meet The Coach" ─────────────────────────────────────────────────
export const coach = {
  name: "Vasco",
  photo: "coach-vasco.jpg", // file lives in /public
  bio: [
    "Vasco holds an Assistant Coach qualification and has over 8 years of volleyball and coaching experience.",
    "He currently coaches CVC Juniors and the Cambridge University Women's 2nd Team while working towards a Level 2 coaching qualification.",
    "Passionate about growing the sport locally, Vasco aims to create a welcoming environment where players of all abilities can learn, improve, and enjoy volleyball together.",
  ],
};

// ─── Long-form copy (Purpose / Goal / Story) — verbatim from the club ────────
export const copy = {
  purpose:
    "Northstowe Social Volleyball Club was created to bring people together through the beautiful sport of volleyball. Whether you never touched a volleyball before, or you've been playing for years, there will always be a spot for you during these social sessions.",
  goal: "We aim to build a welcoming and inclusive volleyball community through social play and coached sessions — with the long-term vision of developing competitive teams capable of competing at county and National Volleyball League level.",
  story: [
    "Northstowe Social Volleyball started with a simple idea: create a fun, welcoming place where people can come together, stay active, and enjoy volleyball regardless of experience level.",
    "Whether you are completely new to the sport or already have years of experience, our goal is to build a positive community where everyone feels comfortable playing, learning, and improving together.",
    "What begins as social volleyball sessions today aims to grow into a fully established volleyball club representing Northstowe in the future.",
  ],
};
