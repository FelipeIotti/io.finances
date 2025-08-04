import { ButtonHTMLAttributes } from "react";
import { Icon, IconNameType } from "../icon";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: IconNameType;
  iconClassName?: string;
  iconSize?: number;
  htmlFor?: string;
}

export function IconButton({
  iconName,
  iconClassName,
  iconSize = 12,
  htmlFor,
  ...rest
}: IconButtonProps) {
  return (
    <button
      className="flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-gray6 rounded-sm p-1"
      {...rest}
    >
      <label htmlFor={htmlFor}>
        <Icon
          name={iconName}
          className={`fill-gray1 cursor-pointer ${iconClassName}`}
          size={iconSize}
        />
      </label>
    </button>
  );
}
