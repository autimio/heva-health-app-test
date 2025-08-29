/**
 * OpenFDA API common types
 */

/** Error payload returned by OpenFDA in error scenarios. */
export interface OpenFdaApiError {
  code: string;
  message: string;
}

/** Pagination/aggregation metadata. */
export interface OpenFdaResultsMeta {
  skip: number;
  limit: number;
  total: number;
}

/** Top-level response metadata object. */
export interface OpenFdaListMeta {
  disclaimer: string;
  terms: string;
  license: string;
  /** ISO date (YYYY-MM-DD) when dataset was last updated. */
  last_updated: string;
  results: OpenFdaResultsMeta;
}

/**
 * Generic OpenFDA list response. The API can return either a success shape
 * (with `meta` + `results`) or an error shape (with `error`).
 */
export type OpenFdaResponse<T> =
  | { meta: OpenFdaListMeta; results: T[] }
  | { error: OpenFdaApiError };

/**
 * Food Enforcement (recall) record.
 * Most fields are free-form strings and may be absent depending on the record.
 * See: https://open.fda.gov/apis/food/enforcement/
 */
export interface FoodEnforcementRecord {
  recall_number: string;
  status?: string;
  classification?: "Class I" | "Class II" | "Class III" | string;
  product_type?: string;
  product_description?: string;
  reason_for_recall?: string;
  recalling_firm?: string;
  report_date?: string; // YYYYMMDD
  recall_initiation_date?: string; // YYYYMMDD
  center_classification_date?: string; // YYYYMMDD
  termination_date?: string; // YYYYMMDD
  code_info?: string;
  more_code_info?: string;

  /** Geography & contact */
  country?: string;
  state?: string;
  city?: string;
  postal_code?: string;
  address_1?: string;
  address_2?: string;

  /** Administrative */
  event_id?: string;
  distribution_pattern?: string;
  initial_firm_notification?: string;
  voluntary_mandated?: string;

  /** `openfda` sub-object is dataset-specific and often empty for enforcement */
  openfda?: Record<string, unknown>;
}
