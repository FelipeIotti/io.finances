"use client";
import { menuOptionsItems } from "@/shared/constants/menu-opttions-items";
import { usePathname } from "next/navigation";
import { IconButton } from "../ui/icon-button";

export function Header() {
  const pathname = usePathname();

  const label =
    menuOptionsItems.find((item) => item.path === pathname)?.label ||
    "Dashboard";

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 py-2 px-3 items-center">
        <IconButton
          iconSize={16}
          iconName="LayoutSidebar"
          htmlFor="toggle-menu-sidebar"
        />

        <div className="py-1 h-full">
          <div className="w-0.25 h-full bg-gray4" />
        </div>

        <p className="text-gray1">{label}</p>
      </div>
      <div className="w-full h-0.25 bg-gray5" />
    </div>
  );
}
