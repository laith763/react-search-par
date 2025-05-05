import { useContext } from "react";
import SearchDataContext from "./SearchDataContext";

export const useSearch = () => {
  debugger;
  const context = useContext(SearchDataContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
