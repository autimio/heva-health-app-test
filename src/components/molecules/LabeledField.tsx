import type { ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
};

export default function LabeledField({ label, children }: Props) {
  return (
    <label className="grid gap-1">
      <span className="text-sm text-gray-700">{label}</span>
      {children}
    </label>
  );
}
