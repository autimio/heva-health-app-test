import Button from "../atoms/Button";

type Props = {
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function CounterControls({ onIncrease, onDecrease }: Props) {
  return (
    <div className="flex gap-2 justify-center">
      <Button aria-label="decrease" onClick={onDecrease}>
        −
      </Button>
      <Button aria-label="increase" onClick={onIncrease}>
        +
      </Button>
    </div>
  );
}
