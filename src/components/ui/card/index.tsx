import { Icon } from "../icon";

interface CardTotalizerProps {
  title: string;
  percentage: number;
  value: number;
  type: "income" | "outcome";
}

export function CardTotalizer({
  title,
  percentage,
  type,
  value,
}: CardTotalizerProps) {
  return (
    <div className="flex rounded bg-gradient-to-t from-gray5 to-gray5/45 border border-gray5 shadow-md">
      <div className="flex flex-col w-full gap-2 p-4 ">
        <div className="flex items-center justify-between ">
          <p className="text-gray3">{title}</p>
          <div className="flex items-center gap-2 border border-gray3 rounded-md px-2 py-1">
            <Icon
              name={type === "income" ? "ArrowUpRight" : "ArrowDownRight"}
              size={12}
              className="fill-gray1"
            />
            <p className="text-gray1 text-xs">
              {type === "income" ? "+" : "-"}
              {percentage}%
            </p>
          </div>
        </div>
        <p className="text-gray1 text-2xl font-bold">
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p className="text-sm text-gray3">
          {" "}
          {type === "income" ? "+" : "-"}
          {percentage}% Trending up this month
        </p>
      </div>
    </div>
  );
}
