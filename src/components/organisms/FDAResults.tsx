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
    <div className="overflow-x-auto rounded-md border border-gray-200">
      <table className="min-w-[900px] w-full table-auto">
        <thead className="bg-gray-100">
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
        <tbody>
          {items.map((r) => (
            <tr key={r.recall_number} className="even:bg-gray-50/40 align-top">
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
      {items.length === 0 && <div className="pt-2 px-3 pb-3">No results.</div>}
    </div>
  )
}

function SkeletonTable({ rows }: { rows: number }) {
  return (
    <div className="overflow-x-auto rounded-md border border-gray-200">
      <table className="min-w-[900px] w-full table-auto">
        <thead className="bg-gray-100">
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
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} className="even:bg-gray-50/40 align-top">
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
      className={`text-left px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-700 border-b-2 border-gray-200 sticky top-0 z-10 whitespace-nowrap ${className}`}
    >
      {children}
    </th>
  )
}

function Td({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <td className={`px-3 py-2 border-b border-gray-100 ${className}`}>{children}</td>
}

