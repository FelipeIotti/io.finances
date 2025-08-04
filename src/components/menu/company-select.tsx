import { Icon } from "../ui/icon";

export function CompanySelect() {
  return (
    <div className="flex items-center px-2 py-2 gap-3 hover:bg-gray4 cursor-pointer rounded">
      <Icon name="Server" size={16} className="fill-gray1" />
      <p className="text-sm text-gray1">Zago Advogados</p>
    </div>
  );
}
