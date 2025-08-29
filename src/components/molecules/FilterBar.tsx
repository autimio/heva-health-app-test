import Input from "../atoms/Input";
import Select from "../atoms/Select";

type Props = {
  query: string;
  onQueryChange: (v: string) => void;
  classification: string;
  onClassificationChange: (v: string) => void;
};

export default function FilterBar({
  query,
  onQueryChange,
  classification,
  onClassificationChange,
}: Props) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Input
        placeholder="Filter text (product, reason, firm)"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="min-w-[260px] w-full sm:flex-1"
      />
      <Select
        aria-label="Classification"
        className="min-w-[180px]"
        value={classification}
        onChange={(e) => onClassificationChange(e.target.value)}
      >
        <option value="">All classifications</option>
        <option value="Class I">Class I</option>
        <option value="Class II">Class II</option>
        <option value="Class III">Class III</option>
      </Select>
    </div>
  );
}
