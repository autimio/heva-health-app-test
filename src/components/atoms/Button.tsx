import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button({
  children,
  className = "",
  disabled,
  ...rest
}: Props & { className?: string }) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={
        `inline-flex items-center justify-center px-3 py-2 rounded-lg border border-slate-200 ` +
        `bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100 ` +
        `shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 ` +
        `disabled:opacity-60 disabled:cursor-not-allowed transition ${className}`
      }
    >
      {children}
    </button>
  );
}
