import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  const [hovered, setHovered] = useState<null | "counter" | "fda">(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white text-gray-900 border-b">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <h1 className="m-0 text-[20px] font-semibold">Heva Health App Test</h1>
        <nav className="flex gap-2">
          <NavLink
            to="/counter"
            onMouseEnter={() => setHovered("counter")}
            onMouseLeave={() => setHovered((h) => (h === "counter" ? null : h))}
            onFocus={() => setHovered("counter")}
            onBlur={() => setHovered((h) => (h === "counter" ? null : h))}
            className={({ isActive }) =>
              [
                "px-2 py-1 rounded-md transition focus:outline-none focus:ring-2 focus:ring-indigo-400",
                isActive ? "bg-gray-100" : "",
                hovered === "counter" ? "bg-gray-100" : "",
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
                "px-2 py-1 rounded-md transition focus:outline-none focus:ring-2 focus:ring-indigo-400",
                isActive ? "bg-gray-100" : "",
                hovered === "fda" ? "bg-gray-100" : "",
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
