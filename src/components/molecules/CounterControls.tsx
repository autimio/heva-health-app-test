import Button from "../atoms/Button";

type Props = {
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function CounterControls({ onIncrease, onDecrease }: Props) {
  return (
    <div className="flex gap-2 justify-center">
      <Button aria-label="decrease" data-cy="btn-decrease" onClick={onDecrease}>
        −
      </Button>
      <Button aria-label="increase" data-cy="btn-increase" onClick={onIncrease}>
        +
      </Button>
    </div>
  );
}
