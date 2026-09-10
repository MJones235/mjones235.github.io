/**
 * Date formatting for CV date ranges.
 *
 * Inputs are 'YYYY' or 'YYYY-MM' (and 'present' for an open-ended range end).
 * `formatRange` returns the endpoints as parts so the caller can wrap each one
 * in a `<time>` element where the value is precise enough to be a valid
 * datetime, and fall back to plain text otherwise (e.g. 'present').
 */

const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const MONTHS_LONG = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export interface DatePart {
  /** Visible text, e.g. 'Jun', 'Nov 2022', '2024', 'present'. */
  text: string;
  /** Valid HTML datetime value, omitted when the value is not a precise date. */
  datetime?: string;
}

interface Parsed {
  year: number;
  month?: number;
  /** Valid datetime value: 'YYYY' or 'YYYY-MM'. */
  iso: string;
}

function parse(value: string): Parsed {
  const [y, m] = value.split('-');
  const month = m ? Number(m) : undefined;
  return { year: Number(y), month, iso: m ? `${y}-${m}` : y };
}

function label(p: Parsed): string {
  return p.month ? `${MONTHS_SHORT[p.month - 1]} ${p.year}` : `${p.year}`;
}

/**
 * Renders a date range as one or two parts.
 *   { start: '2024', end: 'present' }      -> ['2024', 'present']  ("2024–present")
 *   { start: '2022-06', end: '2022-11' }   -> ['Jun', 'Nov 2022']  ("Jun–Nov 2022")
 *   { start: '2015', end: '2017' }         -> ['2015', '2017']     ("2015–2017")
 *   { start: '2022', end: '2022' }         -> ['2022']             ("2022")
 * The caller joins the parts with an en dash.
 */
export function formatRange(entry: { start: string; end: string }): DatePart[] {
  const s = parse(entry.start);

  if (entry.end === 'present') {
    return [{ text: label(s), datetime: s.iso }, { text: 'present' }];
  }

  const e = parse(entry.end);
  const sameYear = e.year === s.year;
  const bothMonths = s.month != null && e.month != null;

  // Same year, no month precision on either end: a single year.
  if (sameYear && !bothMonths) {
    return [{ text: `${s.year}`, datetime: `${s.year}` }];
  }

  // Same year with months on both ends: drop the year from the start, it sits
  // on the end instead ("Jun–Nov 2022").
  if (sameYear && bothMonths) {
    return [
      { text: MONTHS_SHORT[s.month! - 1], datetime: s.iso },
      { text: label(e), datetime: e.iso },
    ];
  }

  return [
    { text: label(s), datetime: s.iso },
    { text: label(e), datetime: e.iso },
  ];
}

/** 'YYYY-MM' -> 'September 2026'; 'YYYY' -> 'YYYY'. */
export function formatMonth(value: string): string {
  const [y, m] = value.split('-');
  return m ? `${MONTHS_LONG[Number(m) - 1]} ${y}` : y;
}

/** 'YYYY-MM' -> 'Jun 2026'; 'YYYY' -> 'YYYY'. */
export function formatMonthShort(value: string): string {
  const [y, m] = value.split('-');
  return m ? `${MONTHS_SHORT[Number(m) - 1]} ${y}` : y;
}
