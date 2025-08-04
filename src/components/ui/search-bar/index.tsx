"use client";

import { debounce } from "@/shared/utils/debounce";
import { ChangeEvent, useCallback, useState } from "react";
import { Icon } from "../icon";

interface SearchBarProps {
  handleSearch?: (searchTerm: string) => void;
  style?: React.CSSProperties;
  shadow?: boolean;
  value?: string;
}

export function SearchBar({
  handleSearch,
  style,
  shadow = false,
  value,
}: SearchBarProps) {
  // const { handleSearchFilter, searchTerm, setSearchTerm } = useFilter();
  const [searchTerm, setSearchTerm] = useState("");
  function handleSearchFilter(term: string) {
    setSearchTerm(term.toLowerCase());
  }

  const debouncedFetchData = useCallback(
    debounce(handleSearch ?? handleSearchFilter, 100),
    [searchTerm]
  );

  const isControlled = value !== undefined;

  const inputValue = isControlled ? value : searchTerm;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputVal = event.target.value.toLowerCase();

    if (isControlled) {
      handleSearch && handleSearch(inputVal);
    } else {
      //setSearchTerm(inputVal);
      debouncedFetchData(inputVal);
    }
  }

  return (
    <div className="relative items-center group">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <Icon
          name="Search"
          size={10}
          className="fill-gray3 transition-colors duration-200 group-hover:fill-gray1"
        />
      </div>
      <input
        placeholder={"Pesquisar"}
        className={`pl-8 py-1.5 border-1 border-gray4 bg-white rounded-full transition-all duration-150 focus:outline-none focus:border-gray1 hover:border-gray1 text-gray1 text-xs w-auto ${
          shadow && "shadow-lg shadow-darkBlack/40"
        }`}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
