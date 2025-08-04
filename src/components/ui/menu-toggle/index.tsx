"use client";

import React from "react";

interface ToggleMenuRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ToggleMenu = React.forwardRef<HTMLDivElement, ToggleMenuRootProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={`relative flex ${className}`} {...props}>
      {children}
    </div>
  )
);
ToggleMenu.displayName = "ToggleMenu";

const ToggleMenuTrigger = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className = "", children, ...props }, ref) => (
  <>
    <input type="checkbox" id="toggle-menu" className="peer hidden" />
    <label
      htmlFor="toggle-menu"
      className="fixed inset-0 hidden peer-checked:block z-20"
    />
    <label
      ref={ref}
      htmlFor="toggle-menu"
      className={`flex items-center gap-3 px-2 py-3 rounded cursor-pointer hover:bg-gray6 peer-checked:bg-gray6 w-full relative z-30 ${className}`}
      {...props}
    >
      {children}
    </label>
  </>
));
ToggleMenuTrigger.displayName = "ToggleMenuTrigger";

const ToggleMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`absolute left-full ml-1 bottom-0 bg-gray5 shadow-lg rounded py-1 hidden peer-checked:block border border-gray6 border-0.25 z-40 ${className}`}
    {...props}
  >
    {children}
  </div>
));
ToggleMenuContent.displayName = "ToggleMenuContent";

const ToggleMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center gap-2 cursor-pointer hover:bg-gray6 px-2 py-1 rounded-sm ${className}`}
    {...props}
  >
    {children}
  </div>
));
ToggleMenuItem.displayName = "ToggleMenuItem";

const ToggleMenuHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col gap-2 px-2 py-2 ${className}`}
    {...props}
  >
    {children}
    <div className="w-full h-0.25 bg-gray4" />
  </div>
));
ToggleMenuHeader.displayName = "ToggleMenuHeader";

const ToggleMenuFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col gap-2 px-2 py-2 ${className}`}
    {...props}
  >
    <div className="w-full h-0.25 bg-gray4" />
    {children}
  </div>
));
ToggleMenuFooter.displayName = "ToggleMenuFooter";

const ToggleMenuBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col gap-2 p-2 ${className}`} {...props}>
    {children}
  </div>
));
ToggleMenuBody.displayName = "ToggleMenuBody";

export {
  ToggleMenu,
  ToggleMenuBody,
  ToggleMenuContent,
  ToggleMenuFooter,
  ToggleMenuHeader,
  ToggleMenuItem,
  ToggleMenuTrigger,
};
