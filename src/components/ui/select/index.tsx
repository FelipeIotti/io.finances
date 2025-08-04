import { OptionsDTO } from "@/shared/dtos/options-DTO";
import { useRef, useState } from "react";
import { Icon } from "../icon";
import { Label } from "../label";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from "./select-components";

const selectOptions = [
  { label: "Option 1 Option 1 Option 1 Option 1 Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
  { label: "Option 5", value: "option5" },
  { label: "Option 6", value: "option6" },
  { label: "Option 7", value: "option7" },
];

interface SelectProps {
  options?: OptionsDTO[];
  label?: string;
  placeholder?: string;
  notClear?: boolean;
}

export function Select({
  options,
  label,
  placeholder = "select...",
  notClear = true,
}: SelectProps) {
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const [isSelected, setIsSelected] = useState<OptionsDTO | null>(null);

  function handleSelect(option: { label: string; value: string } | null) {
    if (hiddenInputRef.current)
      hiddenInputRef.current.value = option?.value || "";
    if (labelRef.current)
      labelRef.current.textContent = option?.label || placeholder;
    setIsSelected(option);

    const checkbox = document.getElementById(
      "toggle-select"
    ) as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  }
  return (
    <SelectRoot>
      <Label text={label} />

      <input ref={hiddenInputRef} name="selectComponent" type="hidden" />
      <SelectTrigger
        onClear={() => {
          handleSelect(null);
        }}
        notClear={notClear}
      >
        <p
          ref={labelRef}
          className={`text-xs truncate ${
            isSelected ? "text-gray1" : "text-gray3"
          }`}
        >
          {placeholder}
        </p>
      </SelectTrigger>

      <SelectContent>
        {selectOptions.map((option) => (
          <SelectItem
            key={option.value}
            onClick={() => handleSelect(option)}
            className={`justify-between ${
              isSelected && isSelected.value === option.value ? "bg-gray5" : ""
            }`}
          >
            <p className="text-gray1 whitespace-nowrap text-xs truncate max-w-[80%]">
              {option.label}
            </p>
            {isSelected && isSelected.value === option.value && (
              <Icon name="Check" className="fill-gray3" size={12} />
            )}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
