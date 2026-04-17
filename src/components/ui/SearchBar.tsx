import { JSX } from "react";
import { SearchIcon } from "../icons";

type SearchBarProps = {
  className?: string;
};

export const SearchBar = ({
  className,
}: Readonly<SearchBarProps>): JSX.Element => {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={`flex items-center gap-3 rounded-md bg-gray-100 px-2 py-2 w-full ${className ?? ""}`}
    >
      <input
        className="min-w-0 flex-1 bg-transparent text-xs text-gray-900 placeholder:text-gray-500 focus-visible:outline-none"
        type="search"
        placeholder="What are you looking for?"
        aria-label="Search products"
      />
      <button
        type="submit"
        aria-label="Search"
        className="inline-flex items-center justify-center rounded-md p-1 text-gray-700 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
      >
        <SearchIcon fillColor="currentColor" className="h-5 w-5" />
      </button>
    </form>
  );
};
