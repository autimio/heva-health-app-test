import type { SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement> & { className?: string };

export default function Select({ className = "", children, ...rest }: Props) {
  return (
    <div className="relative inline-block">
      <select
        {...rest}
        className={
          `appearance-none pl-3 pr-8 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 ` +
          `shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`
        }
      >
        {children}
      </select>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
