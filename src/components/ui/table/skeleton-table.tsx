import { Skeleton } from "../skeleton";

interface SkeletonTableProps {
  row: number;
}

export function SkeletonTable({ row }: SkeletonTableProps) {
  return (
    <div className="flex flex-col gap-2 mt-3">
      {Array.from({ length: row }).map((_, index) => (
        <Skeleton key={index} className="w-full h-[40px]" />
      ))}
    </div>
  );
}
