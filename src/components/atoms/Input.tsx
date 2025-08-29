import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...rest
}: Props & { className?: string }) {
  return (
    <input
      {...rest}
      className={
        `px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 ` +
        `shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`
      }
    />
  );
}
