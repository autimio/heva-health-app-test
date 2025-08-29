import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  const [hovered, setHovered] = useState<null | "counter" | "fda">(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white text-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <h1 className="m-0 text-[16px] md:text-[20px] font-semibold tracking-tight">Heva Health App Test</h1>
        <nav className="flex gap-0.5 md:gap-1">
          <NavLink
            to="/counter"
            onMouseEnter={() => setHovered("counter")}
            onMouseLeave={() => setHovered((h) => (h === "counter" ? null : h))}
            onFocus={() => setHovered("counter")}
            onBlur={() => setHovered((h) => (h === "counter" ? null : h))}
            className={({ isActive }) =>
              [
                "px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs md:text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-400",
                isActive
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                hovered === "counter" ? "bg-slate-100" : "",
              ].join(" ")
            }
          >
            Counter + Clock
          </NavLink>
          <NavLink
            to="/fda"
            onMouseEnter={() => setHovered("fda")}
            onMouseLeave={() => setHovered((h) => (h === "fda" ? null : h))}
            onFocus={() => setHovered("fda")}
            onBlur={() => setHovered((h) => (h === "fda" ? null : h))}
            className={({ isActive }) =>
              [
                "px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs md:text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-400",
                isActive
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                hovered === "fda" ? "bg-slate-100" : "",
              ].join(" ")
            }
          >
            FDA Data
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
