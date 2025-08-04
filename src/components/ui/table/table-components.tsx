import React from "react";

const TableComponent = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, style, ...props }, ref) => (
  <div className="relative w-full overflow-hidden shadow-md rounded border border-gray5">
    <div className="relative w-full overflow-auto overflow-x-auto scrollbar scrollbar-thumb-gray4 scrollbar-track-gray5">
      <table
        ref={ref}
        className={`w-full caption-bottom text-sm min-h-[250px] min-w-[800px] rounded ${className}`}
        style={style}
        {...props}
      />
    </div>
  </div>
));
TableComponent.displayName = "TableComponent";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, style, ...props }, ref) => (
  <thead
    ref={ref}
    className={`w-full text-gray1 font-bold text-md bg-gray5 ${className}`}
    style={style}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, style, ...props }, ref) => (
  <tbody
    ref={ref}
    className={`border-0 ${className}`}
    style={style}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, style, ...props }, ref) => (
  <tr
    ref={ref}
    className={`flex border-b border-b-gray5 text-gray1 text-md hover:bg-gray5/40 [&:last-child]:border-b-0 ${className}`}
    style={style}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, style, ...props }, ref) => (
  <th
    ref={ref}
    className={`mx-2 min-w-8 flex items-center justify-start w-full h-8 pl-1  ${className}`}
    style={style}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, style, ...props }, ref) => (
  <td
    ref={ref}
    className={`mx-2 min-w-8 flex flex-col items-start justify-center gap-1 text-center text w-full pl-1 py-2 ${className}`}
    style={style}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export {
  TableBody,
  TableCell,
  TableComponent,
  TableHead,
  TableHeader,
  TableRow,
};
