"use client";

import React from "react";
import { Icon } from "../icon";

interface SelectRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SelectRoot = React.forwardRef<HTMLDivElement, SelectRootProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={`relative flex group ${className}`} {...props}>
      {children}
    </div>
  )
);
SelectRoot.displayName = "SelectRoot";

interface SelectTriggerProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
  onClear?: () => void;
  notClear?: boolean;
}

const SelectTrigger = React.forwardRef<HTMLLabelElement, SelectTriggerProps>(
  (
    { className = "", children, disabled, onClear, notClear = false, ...props },
    ref
  ) => (
    <>
      <input
        type="checkbox"
        id="toggle-select"
        className="peer hidden"
        disabled={disabled}
      />
      <label
        htmlFor="toggle-select"
        className="fixed inset-0 hidden peer-checked:block z-20"
      />
      <label
        ref={ref}
        htmlFor="toggle-select"
        className={`flex items-center gap-1.5 border border-gray4 rounded-xl px-2 py-1.5 cursor-pointer transition-all duration-150 hover:border-gray1 peer-checked:border-gray1 z-30 w-30 justify-between ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
        {...props}
      >
        {children}

        <div className="flex items-center h-full gap-1">
          {notClear && (
            <Icon
              name="Close"
              className="fill-gray3 peer-checked:fill-gray1 hover:fill-gray1 transition-all duration-150 z-55"
              size={16}
              onClick={onClear}
            />
          )}
          <div className="w-0.25 h-[80%] bg-gray4" />
          <Icon
            name="ChevronDown"
            className="fill-gray3 peer-checked:fill-gray1 group-hover:fill-gray1 transition-all duration-150"
            size={12}
          />
        </div>
      </label>
    </>
  )
);
SelectTrigger.displayName = "SelectTrigger";

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  contentOrientation?: "left" | "right";
}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  (
    { className = "", children, contentOrientation = "right", ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={`absolute top-full ${
        contentOrientation === "right" ? "right-0" : "left-0"
      }  mt-1 p-2 bg-white rounded border border-gray6 shadow peer-checked:z-40 min-w-full max-w-50 opacity-0 origin-top transition-all duration-150 peer-checked:h-auto peer-checked:opacity-100 ease-out max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray4 scrollbar-track-white  ${className}
    `}
      {...props}
    >
      {children}
    </div>
  )
);
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center gap-2 cursor-pointer hover:bg-gray5 pl-1 py-1 rounded-sm ${className}`}
    {...props}
  >
    {children}
  </div>
));
SelectItem.displayName = "SelectItem";

export { SelectContent, SelectItem, SelectRoot, SelectTrigger };
