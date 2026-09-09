export type RecentKind = 'talk' | 'paper' | 'collaboration' | 'post';

export interface RecentEntry {
  /** ISO year-month, e.g. '2026-09'. Formatted on render. */
  date: string;
  title: string;
  href?: string;
  kind: RecentKind;
}

// Manually curated. Later this can be merged with generated blog entries.
// Verify the months against the actual events before publishing.
export const recent: RecentEntry[] = [
  {
    date: '2026-09',
    title: 'Presented at the Social Simulation Conference, Delft',
    kind: 'talk',
  },
  {
    date: '2026-07',
    title: 'Presented at the SUMO User Conference, Berlin',
    kind: 'talk',
  },
  {
    date: '2026-06',
    title: 'Paper published in PLOS ONE',
    href: 'https://doi.org/10.1371/journal.pone.0341704',
    kind: 'paper',
  },
  {
    date: '2026-03',
    title: 'Began industry collaboration with Nexus on Tyne and Wear Metro evacuation modelling',
    kind: 'collaboration',
  },
];
