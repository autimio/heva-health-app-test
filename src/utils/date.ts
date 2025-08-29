/** Date helpers */

/** Format YYYYMMDD into YYYY-MM-DD for display. */
export function formatYyyyMmDd(yyyymmdd?: string): string {
  if (!yyyymmdd) return "-";
  if (yyyymmdd.length !== 8) return yyyymmdd;
  const y = yyyymmdd.slice(0, 4);
  const m = yyyymmdd.slice(4, 6);
  const d = yyyymmdd.slice(6, 8);
  return `${y}-${m}-${d}`;
}
