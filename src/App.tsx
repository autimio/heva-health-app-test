import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import CounterClock from "./pages/CounterClock";
import FDAData from "./pages/FDAData";
import HeaderNav from "./components/organisms/HeaderNav";
import AppLayout from "./components/templates/AppLayout";

export default function App() {
  const location = useLocation();
  const ROUTES = [
    { path: "/counter", title: "Counter + Clock", element: <CounterClock /> },
    { path: "/fda", title: "OpenFDA Data", element: <FDAData /> },
  ] as const;
  const current = ROUTES.find((r) => location.pathname.startsWith(r.path));
  const title = current?.title ?? "Counter + Clock";

  return (
    <AppLayout header={<HeaderNav />} title={title}>
      <Routes>
        <Route path="/" element={<Navigate to="/counter" replace />} />
        {ROUTES.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
        <Route path="*" element={<Navigate to="/counter" replace />} />
      </Routes>
    </AppLayout>
  );
}
