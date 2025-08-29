import type { ReactNode } from "react";

type Props = {
  header: ReactNode;
  children: ReactNode;
  title: string;
};

export default function AppLayout({ header, title, children }: Props) {
  return (
    <>
      {header}
      <div className="pt-20 max-w-7xl mx-auto px-6 grid gap-4">
        <h2 className="m-0 text-xl font-semibold text-gray-900">{title}</h2>
        <main>{children}</main>
      </div>
    </>
  );
}
