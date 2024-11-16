import utils, { cn } from "../../../utils";
import { Checkbox } from "../../ui/checkbox";

type LabeledCheckboxProps = {
  id: string;
  label: string;
  description?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
};

function LabeledCheckbox({
  id,
  checked,
  onCheckedChange,
  label,
  description,
  disabled,
}: LabeledCheckboxProps) {
  const handleCheckChange = (value: boolean) => {
    if (disabled) return;
    utils.blurActiveElement();
    onCheckedChange(value);
  };
  return (
    <div
      onClick={() => handleCheckChange(!checked)}
      className={cn(
        "border-2 hocus:bg-secondary-50 p-2 px-4 rounded-lg cursor-pointer",
        checked
          ? "border-primary-500 dark:border-primary-700 bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300"
          : "border-transparent-full bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400",
        disabled && "cursor-not-allowed opacity-50",
      )}
    >
      <div className="flex flex-row items-center gap-2 justify-between">
        <label htmlFor={id}>{label}</label>
        <Checkbox
          disabled={disabled}
          id={id}
          checked={checked}
          onCheckedChange={handleCheckChange}
        />
      </div>
      {description && (
        <p className="text-sm w-80 max-w-full text-left">{description}</p>
      )}
    </div>
  );
}

export default LabeledCheckbox;
