"use client";

import React, { CSSProperties, ReactElement, useRef, useState } from "react";

import { SearchBar } from "../search-bar";
import { Select } from "../select";
import { Pagination } from "./pagination";
import { SkeletonTable } from "./skeleton-table";
import {
  TableBody,
  TableCell,
  TableComponent,
  TableHead,
  TableHeader,
  TableRow,
} from "./table-components";

export interface ColumnConfig<T> {
  key?: keyof T | string;
  name: React.ReactNode;
  render: (entity: T, index: number) => React.ReactNode;
  rowStyle?: CSSProperties;
  columnStyle?: CSSProperties;
  searchValue?: (item: T) => string;
}

interface TableProps<T> {
  data?: T[];
  columns: ColumnConfig<T>[];
  //filtersTable?: FilterTypesDTO;
  // exportData?: ({ data,  }: ExportDataDTO) => {
  //   data: { [key: string]: string }[];
  //   columns: Column[];
  //   title: string;
  // };
  itemsPerPage?: number;
  isLoading?: boolean;
  CustomFilter?: ReactElement;
}

export function Table<T>({
  data,
  columns,
  //filtersTable,
  itemsPerPage = 10,
  //exportData,
  isLoading = false,
  CustomFilter,
}: TableProps<T>) {
  const exportRef = useRef<HTMLDivElement>(null);

  // const { filtersSelected } = useFilter();

  const [currentPage, setCurrentPage] = useState(1);
  const [showExport, setShowExport] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData =
    data && data.length > 0
      ? data?.filter((item) =>
          columns.some((column) => {
            if (column.searchValue) {
              return column
                .searchValue(item)
                ?.toLowerCase()
                .includes(searchTerm?.toLowerCase());
            }

            const raw = item[column.key as keyof T];
            return raw
              ?.toString()
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          })
        )
      : // .filter((item) => {
        //   if (!filtersTable) return true;

        //   return (
        //     Object.keys(filtersTable) as Array<keyof FilterTypesDTO>
        //   ).every((key) => {
        //     const selectedValue = filtersSelected[key];

        //     if (selectedValue === undefined || selectedValue === null)
        //       return true;

        //     const itemValue = item[key as keyof T];

        //     if (typeof selectedValue === "boolean") {
        //       return itemValue === selectedValue;
        //     }

        //     return itemValue == selectedValue;
        //   });
        // })
        undefined;

  const paginatedData =
    filteredData &&
    filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  async function handleChangePage(page: number) {
    setCurrentPage(page);
  }

  function handleSearch(term: string) {
    setSearchTerm(term);
    setCurrentPage(1);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row flex-wrap gap-4 justify-between">
        <div className="flex flex-row gap-2 items-end">
          {CustomFilter && CustomFilter}

          {/* {filtersTable && <Filter />} */}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Select />
          <SearchBar handleSearch={handleSearch} />
          <Pagination
            itemsQuantity={filteredData?.length}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => handleChangePage(page)}
            isLoading={isLoading}
          />
          {/* {data && exportData && (
            <div
              ref={exportRef}
              className={`flex relative rounded-full bg-gray5 ${
                data.length > 0 && "cursor-pointer"
              }`}
              onClick={() => data.length > 0 && setShowExport(!showExport)}
            >
              <Icon name="ThreeDots" size={28} className="hover:fill-secondary" />

              {showExport && filteredData && (
                <ExportSection
                  data={filteredData}
                  setShowExport={setShowExport}
                  showExport={showExport}
                  exportData={exportData}
                  filtersSelected={filtersSelected}
                  exportRef={exportRef}
                />
              )}
            </div>
          )} */}
        </div>
      </div>

      {/* {filtersTable && <FilterTypes filtersTable={filtersTable} />} */}

      <TableComponent>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            {columns.map((column) => (
              <TableHead key={String(column.key)} style={column.columnStyle}>
                {column.name && (column.name as string)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <SkeletonTable row={itemsPerPage} />
          ) : (
            data &&
            paginatedData &&
            paginatedData.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={String(column.key)} style={column.rowStyle}>
                    {column.render(row, index)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </TableComponent>
    </div>
  );
}
