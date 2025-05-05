import { useRef } from "react";
import { Suggestion } from "../../constants/interfaces";
import useFetchSuggestion from "../../components/SearchPar/customHooks/useFetchSuggestion";
import SearchPar from "../../components/SearchPar/SearchPar";
import { useSearch } from "../../components/SearchPar/context/useSearchDataContext";

function SearchParContainer() {
  const { searchValue, setSearchValue } = useSearch();
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    filteredSuggestions,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useFetchSuggestion(searchValue);

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setSearchValue(suggestion?.name);
  };

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el || !hasNextPage || isFetchingNextPage) return;

    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 20) {
      fetchNextPage();
    }
  };

  return (
    <SearchPar
      searchValue={searchValue}
      filteredSuggestions={filteredSuggestions}
      isLoading={isLoading || isFetchingNextPage}
      containerRef={containerRef}
      onSuggestionClick={handleSuggestionClick}
      onScroll={handleScroll}
    />
  );
}

export default SearchParContainer;
