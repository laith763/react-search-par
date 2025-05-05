import queryClient from "../../queryClient";
import { useSearch } from "./context/useSearchDataContext";

export const SearchInput = () => {
  const { searchValue, setSearchValue } = useSearch();
  const handleClear = () => {
    setSearchValue("");
    queryClient.removeQueries({ queryKey: ["suggestions", searchValue] });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return (
    <div className="flex items-center py-2.5 px-5">
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search..."
        className="flex-1 border-0 outline-none text-base text-[#202124] bg-transparent placeholder:text-[#9aa0a6]"
      />
      {searchValue && (
        <button
          onClick={handleClear}
          className="bg-transparent border-0 cursor-pointer p-0 ml-2 text-[#9aa0a6] flex items-center justify-center hover:text-[#202124]"
        >
          X
        </button>
      )}
    </div>
  );
};
