import { menuOptionsItems } from "@/shared/constants/menu-opttions-items";
import { Icon } from "../ui/icon";
import { MenuItem } from "./menu-item";
import { ProfileItem } from "./profile-item";
export function Menu() {
  return (
    <div className="flex flex-col h-full px-2 py-1 justify-between w-70 z-10 transform transition-all duration-500 ease-in-out peer-checked:-translate-x-full peer-checked:w-0 peer-checked:opacity-0 peer-checked:invisible">
      <div className="flex flex-col gap-2">
        <div className="flex items-center py-2 px-2 gap-4">
          <Icon name="Server" size={18} className="fill-gray1" />
          <p className="text-sm text-gray1 whitespace-nowrap">Zago advogados</p>
        </div>

        <div className="flex flex-col gap-4">
          {menuOptionsItems.map(({ path, label, icon }, index) => (
            <MenuItem key={index} path={path} icon={icon} label={label} />
          ))}
        </div>
      </div>

      <div>
        <ProfileItem />
      </div>
    </div>
  );
}
