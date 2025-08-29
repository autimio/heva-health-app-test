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
        `px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900 ` +
        `focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`
      }
    />
  );
}
