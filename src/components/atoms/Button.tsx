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
        `inline-flex items-center justify-center px-3 py-2 rounded-md border border-gray-300 ` +
        `bg-white text-gray-900 hover:bg-gray-50 active:bg-gray-100 ` +
        `focus:outline-none focus:ring-2 focus:ring-indigo-400 ` +
        `disabled:opacity-60 disabled:cursor-not-allowed transition ${className}`
      }
    >
      {children}
    </button>
  );
}
