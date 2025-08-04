"use client";
import { ReactNode } from "react";
import { Header } from "../header";

interface ScreenWrapperProps {
  children: ReactNode;
  className?: string;
}

export function ScreenWrapper({ children, className }: ScreenWrapperProps) {
  return (
    <div
      className={`flex flex-col h-full w-full bg-white rounded shadow-md overflow-y-auto ${className}`}
    >
      <Header />

      <div className="flex p-4">{children}</div>
    </div>
  );
}
