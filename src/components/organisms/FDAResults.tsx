import type { ReactNode } from 'react'
import type { FoodEnforcementRecord } from '../../types/openfda'
import { formatYyyyMmDd } from '../../utils/date'
import Skeleton from '../atoms/Skeleton'

type Props = {
  items: FoodEnforcementRecord[]
  loading?: boolean
  skeletonRows?: number
}

export default function FDAResults({ items, loading = false, skeletonRows = 8 }: Props) {
  if (loading) return <SkeletonTable rows={skeletonRows} />
  return <DataTable items={items} />
}

function DataTable({ items }: { items: FoodEnforcementRecord[] }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
      <table className="min-w-[900px] w-full table-auto text-sm">
        <thead className="bg-slate-50">
          <tr>
            <Th className="w-28">Recall #</Th>
            <Th className="w-24">Class</Th>
            <Th className="w-48">Firm</Th>
            <Th className="w-40">Product</Th>
            <Th className="w-64">Reason</Th>
            <Th className="w-28">City</Th>
            <Th className="w-20">State</Th>
            <Th className="w-28">Report Date</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {items.map((r) => (
            <tr key={r.recall_number} className="align-top hover:bg-slate-50/60">
              <Td>{r.recall_number}</Td>
              <Td>{r.classification || '-'}</Td>
              <Td className="break-words whitespace-normal">{r.recalling_firm || '-'}</Td>
              <Td className="break-words whitespace-normal text-sm">{r.product_description || '-'}</Td>
              <Td className="break-words whitespace-normal text-sm">{r.reason_for_recall || '-'}</Td>
              <Td>{r.city || '-'}</Td>
              <Td>{r.state || '-'}</Td>
              <Td>{formatYyyyMmDd(r.report_date)}</Td>
            </tr>
          ))}
        </tbody>
      </table>
      {items.length === 0 && <div className="pt-3 px-4 pb-4 text-sm text-slate-600">No results.</div>}
    </div>
  )
}

function SkeletonTable({ rows }: { rows: number }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
      <table className="min-w-[900px] w-full table-auto text-sm">
        <thead className="bg-slate-50">
          <tr>
            <Th className="w-28">Recall #</Th>
            <Th className="w-24">Class</Th>
            <Th className="w-48">Firm</Th>
            <Th className="w-40">Product</Th>
            <Th className="w-64">Reason</Th>
            <Th className="w-28">City</Th>
            <Th className="w-20">State</Th>
            <Th className="w-28">Report Date</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} className="align-top">
              <Td><Skeleton className="h-4 w-20" /></Td>
              <Td><Skeleton className="h-4 w-16" /></Td>
              <Td><Skeleton className="h-4 w-40" /></Td>
              <Td><Skeleton className="h-4 w-36" /></Td>
              <Td><Skeleton className="h-4 w-56" /></Td>
              <Td><Skeleton className="h-4 w-20" /></Td>
              <Td><Skeleton className="h-4 w-12" /></Td>
              <Td><Skeleton className="h-4 w-20" /></Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Th({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <th
      scope="col"
      className={`text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-600 border-b border-slate-200 sticky top-0 z-10 whitespace-nowrap ${className}`}
    >
      {children}
    </th>
  )
}

function Td({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <td className={`px-4 py-3 ${className}`}>{children}</td>
}
