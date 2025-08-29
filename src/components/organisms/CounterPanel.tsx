import { useMemo, useState } from "react";
import CounterControls from "../molecules/CounterControls";
import LabeledField from "../molecules/LabeledField";
import Input from "../atoms/Input";

export default function CounterPanel() {
  const [count, setCount] = useState<number>(0);
  const [stepInput, setStepInput] = useState<string>("1");

  const step = useMemo(() => {
    const n = Number(stepInput);
    return Number.isFinite(n) ? n : 1;
  }, [stepInput]);

  return (
    <div className="grid gap-2 max-w-[320px]">
      <div
        className="text-3xl font-semibold text-center"
        data-cy="counter-value"
      >
        {count}
      </div>
      <CounterControls
        onIncrease={() => setCount((c) => c + step)}
        onDecrease={() => setCount((c) => c - step)}
      />

      <LabeledField label="Step amount">
        <Input
          type="number"
          inputMode="numeric"
          value={stepInput}
          onChange={(e) => setStepInput(e.target.value)}
          aria-label="Step amount"
          data-testid="step-input"
          data-cy="step-input"
        />
      </LabeledField>
    </div>
  );
}
