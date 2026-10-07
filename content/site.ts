/** Everything on the page that is about you. Edit this file to make it yours. */
/**
 * SITE_NAME and CONTACT_EMAIL are read at request time, so changing them on the service
 * and restarting is enough (a NEXT_PUBLIC_ variable would be frozen into the build).
 */
export const site = {
  get name() {
    return process.env.SITE_NAME || 'Ada Obi';
  },
  role: 'Product engineer in Lagos',
  intro:
    'I design and build web products end to end, from the database to the last pixel. Lately: payments, logistics and tools for small businesses.',
  get email() {
    return process.env.CONTACT_EMAIL || 'hello@example.com';
  },
  about: [
    'I have spent eight years shipping software for teams across Nigeria and Europe, most recently leading the web platform at a logistics company.',
    'I like small teams, plain language and products that work on a slow connection.',
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
};

export interface Project {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  /** Two colours for the cover; swap for an image in public/ if you have one. */
  cover: [string, string];
  body: string[];
}

export const projects: Project[] = [
  {
    slug: 'market-ledger',
    title: 'Market Ledger',
    year: '2026',
    summary: 'Bookkeeping for market traders, offline first, synced when there is signal.',
    tags: ['Next.js', 'Postgres', 'PWA'],
    cover: ['#0B3D2A', '#1F8A5B'],
    body: [
      'Traders record sales on a phone, with or without a connection. The app keeps a local log and syncs it in the background when the network comes back.',
      'I built the sync engine, the reports and the onboarding, and cut the first-week drop-off by half by replacing a sign-up form with a phone number.',
    ],
  },
  {
    slug: 'route-planner',
    title: 'Route planner',
    year: '2025',
    summary: 'Delivery routes for 400 riders a day, planned in seconds instead of an hour.',
    tags: ['TypeScript', 'Maps', 'Go'],
    cover: ['#1B2A4A', '#3D6FB6'],
    body: [
      'Dispatchers used to plan routes by hand every morning. The planner groups orders by area, orders the stops and hands each rider a list on their phone.',
      'The solver runs in Go; the dashboard is a Next.js app with a live map.',
    ],
  },
  {
    slug: 'clinic-queue',
    title: 'Clinic queue',
    year: '2024',
    summary: 'A text-message queue for a busy clinic, so patients wait outside, not in the hall.',
    tags: ['SMS', 'Node.js'],
    cover: ['#4A2A12', '#C07A2C'],
    body: [
      'Patients join the queue by SMS and get a message when they are three places away. Staff see the queue on one screen and call the next patient with one tap.',
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
