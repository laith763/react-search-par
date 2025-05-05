import { createContext } from "react";
import { Suggestion } from "../../../constants/interfaces";

interface SearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
  selectedSuggestion: Suggestion | null;
  setSelectedSuggestion: (suggestion: Suggestion | null) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default SearchContext;
