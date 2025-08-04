"use client";
import { useSettings } from "@/hooks/use-settings";
import { themesOptions } from "@/shared/constants/select-options/theme-options";

import { Icon } from "../ui/icon";
import {
  ToggleMenu,
  ToggleMenuBody,
  ToggleMenuContent,
  ToggleMenuFooter,
  ToggleMenuHeader,
  ToggleMenuItem,
  ToggleMenuTrigger,
} from "../ui/menu-toggle";
import { ProfileInformation } from "./profile-information";

export function ProfileItem() {
  const { theme, changeTheme } = useSettings();

  return (
    <ToggleMenu>
      <ToggleMenuTrigger>
        <ProfileInformation />
        <Icon className="fill-gray1" name="ThreeDotsVertical" size={18} />
      </ToggleMenuTrigger>

      <ToggleMenuContent>
        <ToggleMenuHeader>
          <ProfileInformation />
        </ToggleMenuHeader>

        <ToggleMenuBody>
          <ToggleMenuItem
            onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
          >
            <Icon
              name={theme === "light" ? "Moon" : "Sun"}
              size={14}
              className="fill-gray1"
            />

            <p className="text-gray1 text-sm">
              {themesOptions[theme === "light" ? "dark" : "light"].label}
            </p>
          </ToggleMenuItem>
        </ToggleMenuBody>

        <ToggleMenuFooter>
          <ToggleMenuItem>
            <Icon name="BoxArrowRight" size={16} className="fill-gray1" />
            <p className="text-gray1 text-sm">Sair</p>
          </ToggleMenuItem>
        </ToggleMenuFooter>
      </ToggleMenuContent>
    </ToggleMenu>
  );
}
