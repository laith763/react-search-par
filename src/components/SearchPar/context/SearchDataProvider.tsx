import { useState } from "react";
import SearchContext from "./SearchDataContext";
import { Suggestion } from "../../../constants/interfaces";

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] =
    useState<Suggestion | null>(null);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        selectedSuggestion,
        setSelectedSuggestion,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
