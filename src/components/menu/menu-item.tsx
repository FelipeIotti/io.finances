"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, IconNameType } from "../ui/icon";

interface MenuItemProps {
  label: string;
  icon: IconNameType;
  path?: string;
}

const Item = ({
  label,
  icon,
  isSelected = false,
}: {
  label: string;
  icon: IconNameType;
  isSelected?: boolean;
}) => {
  return (
    <>
      <Icon
        className={isSelected ? "fill-gray1" : "fill-gray3"}
        name={icon as IconNameType}
        size={22}
      />
      <p
        className={`text-sm whitespace-nowrap  ${
          isSelected ? "text-gray1 font-bold" : "text-gray3"
        }`}
      >
        {label}
      </p>
    </>
  );
};

export function MenuItem({ path, label, icon }: MenuItemProps) {
  const pathname = usePathname();

  const baseClass =
    "flex flex-nowrap items-center gap-3 px-2 py-3 transition-all duration-150 hover:bg-gray6 rounded cursor-pointer";

  return (
    <>
      {path ? (
        <Link href={path} className={baseClass}>
          <Item label={label} icon={icon} isSelected={pathname === path} />
        </Link>
      ) : (
        <div className={baseClass}>
          <Item label={label} icon={icon} />
        </div>
      )}
    </>
  );
}
