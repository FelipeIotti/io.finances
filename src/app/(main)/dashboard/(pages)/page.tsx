"use client";

import { CardTotalizer } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { Columns } from "../_constants/columns";

const mockDataTotalizers = [
  {
    title: "Total Revenue",
    value: 12345,
    percentage: 80,
    type: "income",
  },
  {
    title: "Total Revenue",
    value: 324,
    percentage: 20,
    type: "outcome",
  },
  {
    title: "Total Revenue",
    value: 897,
    percentage: 12,
    type: "income",
  },
];

const mockDataTable = [
  {
    id: "1",
    name: "User 1",
    email: "email@email.com",
  },
  {
    id: "2",
    name: "User 2",
    email: "email@email.com",
  },
  {
    id: "3",
    name: "User 3",
    email: "email@email.com",
  },
  {
    id: "4",
    name: "User 4",
    email: "email@email.com",
  },
  {
    id: "5",
    name: "User 5",
    email: "email@email.com",
  },
  {
    id: "6",
    name: "User 6",
    email: "email@email.com",
  },
  {
    id: "7",
    name: "User 7",
    email: "email@email.com",
  },
  {
    id: "8",
    name: "User 8",
    email: "email@email.com",
  },
  {
    id: "9",
    name: "User 9",
    email: "email@email.com",
  },
  {
    id: "10",
    name: "User 10",
    email: "email@email.com",
  },
  {
    id: "11",
    name: "User 11",
    email: "email@email.com",
  },
  {
    id: "12",
    name: "User 12",
    email: "email@email.com",
  },
  {
    id: "13",
    name: "User 13",
    email: "email@email.com",
  },
  {
    id: "14",
    name: "User 14",
    email: "email@email.com",
  },
  {
    id: "15",
    name: "User 15",
    email: "email@email.com",
  },
  {
    id: "16",
    name: "User 16",
    email: "email@email.com",
  },
  {
    id: "17",
    name: "User 17",
    email: "email@email.com",
  },
  {
    id: "18",
    name: "User 18",
    email: "email@email.com",
  },
  {
    id: "19",
    name: "User 19",
    email: "email@email.com",
  },
];

export default function Page() {
  return (
    <div className="w-full h-full space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
        {mockDataTotalizers.map(({ title, value, percentage, type }, index) => (
          <CardTotalizer
            key={index}
            title={title}
            value={value}
            percentage={percentage}
            type={type as "income" | "outcome"}
          />
        ))}
      </div>

      <Table columns={Columns()} data={mockDataTable} />
    </div>
  );
}
