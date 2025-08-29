import { useEffect, useMemo, useRef, useState } from "react";
import type { FoodEnforcementRecord, OpenFdaResponse } from "../types/openfda";
import FilterBar from "../components/molecules/FilterBar";
import FDAResults from "../components/organisms/FDAResults";
import { buildFoodEnforcementUrl } from "../services/openfda";

export default function FDAData() {
  const [data, setData] = useState<FoodEnforcementRecord[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [classification, setClassification] = useState<string>("");
  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    if (abortRef.current) abortRef.current.abort();
    if (debounceRef.current) window.clearTimeout(debounceRef.current);

    const controller = new AbortController();
    abortRef.current = controller;
    const debounceMs = import.meta.env.MODE === "test" ? 0 : 450;
    setLoading(true);
    setError(null);

    debounceRef.current = window.setTimeout(async () => {
      try {
        const url = buildFoodEnforcementUrl({
          query,
          classification,
          limit: 50,
        });
        const res = await fetch(url, { signal: controller.signal });
        const json =
          (await res.json()) as OpenFdaResponse<FoodEnforcementRecord>;
        if (!res.ok) throw new Error("Network error");
        if ("error" in json) throw new Error(json.error.message);
        setData(json.results ?? []);
      } catch (e: unknown) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        setError(e instanceof Error ? e.message : "Failed to load data");
        setData([]);
      } finally {
        setLoading(false);
      }
    }, debounceMs);

    return () => {
      controller.abort();
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [query, classification]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (data || []).filter((r) => {
      const matchesText = !q
        ? true
        : [r.product_description, r.reason_for_recall, r.recalling_firm]
            .filter(Boolean)
            .some((v) => String(v).toLowerCase().includes(q));
      const matchesClass =
        !classification || r.classification === classification;
      return matchesText && matchesClass;
    });
  }, [data, query, classification]);

  return (
    <div className="grid gap-3">
      <p className="m-0 text-slate-600">
        Source:{" "}
        <a
          href="https://open.fda.gov/apis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          open.fda.gov
        </a>
      </p>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <FilterBar
          query={query}
          onQueryChange={setQuery}
          classification={classification}
          onClassificationChange={setClassification}
        />
      </div>

      {error && <div className="text-red-600">Error: {error}</div>}
      <FDAResults loading={loading} items={filtered} skeletonRows={8} />
    </div>
  );
}
