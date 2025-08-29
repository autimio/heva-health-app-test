import { useEffect, useMemo, useState } from "react";
import CounterPanel from "../components/organisms/CounterPanel";

export default function CounterClock() {
  const [epochMs, setEpochMs] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setEpochMs((prev) => prev + 1000);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const timeString = useMemo(
    () => new Date(epochMs).toLocaleTimeString(),
    [epochMs]
  );

  return (
    <div className="grid gap-4 justify-items-center text-center">
      <CounterPanel />
      <div>
        <div className="text-sm text-gray-600">Current time</div>
        <div className="tabular text-2xl">{timeString}</div>
      </div>
    </div>
  );
}
