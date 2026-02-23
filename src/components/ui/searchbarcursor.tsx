import { SearchIcon } from "../icons";

type SearchBarProps = {
  className?: string;
};

export const SearchBar = ({ className }: Readonly<SearchBarProps>) => {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={`flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 ${className ?? ""}`}
    >
      <input
        className="min-w-0 flex-1 bg-transparent text-xs text-gray-900 placeholder:text-gray-500 focus-visible:outline-none"
        type="search"
        name="q"
        placeholder="What are you looking for?"
        aria-label="Buscar productos"
      />
      <button
        type="submit"
        aria-label="Buscar"
        className="inline-flex items-center justify-center rounded-md p-1 text-gray-700 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
      >
        <SearchIcon fillColor="currentColor" className="h-5 w-5" />
      </button>
    </form>
  );
};
