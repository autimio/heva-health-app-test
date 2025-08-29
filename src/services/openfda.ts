const OPEN_FDA_API_BASE = "https://api.fda.gov";

export type FoodEnforcementQuery = {
  query?: string;
  classification?: string;
  limit?: number;
};

export function buildFoodEnforcementUrl({
  query,
  classification,
  limit = 50,
}: FoodEnforcementQuery): string {
  const base = `${OPEN_FDA_API_BASE}/food/enforcement.json?limit=${encodeURIComponent(
    String(limit)
  )}`;
  const parts: string[] = [];

  const q = (query ?? "").trim();
  if (q) {
    const esc = escapeQuotes(q);
    parts.push(
      `(product_description:"${esc}" OR reason_for_recall:"${esc}" OR recalling_firm:"${esc}")`
    );
  }
  if (classification) {
    const escClass = escapeQuotes(classification);
    parts.push(`classification:"${escClass}"`);
  }

  const searchExpr = parts.length ? parts.join(" AND ") : null;
  return searchExpr ? `${base}&search=${encodeURIComponent(searchExpr)}` : base;
}

function escapeQuotes(s: string): string {
  return s.replace(/"/g, '\\"');
}
