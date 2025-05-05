import { useTranslation } from "react-i18next";
import { SearchParPresenterProps } from "../../constants/interfaces";
import { SearchInput } from "./SearchInput";
import { SuggestionsList } from "./SuggestionsList";

function SearchPar({
  searchValue,
  filteredSuggestions,
  isLoading,
  containerRef,
  onSuggestionClick,
  onScroll,
}: SearchParPresenterProps) {
  const { t } = useTranslation();
  let count = searchValue.length || 0;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] px-5">
      <div
        className={`relative bg-white shadow-md w-full ${
          filteredSuggestions?.length > 0 ? "rounded-t-2xl" : "rounded-2xl"
        }`}
      >
        <SearchInput />

        {!isLoading && filteredSuggestions?.length > 0 && (
          <SuggestionsList
            suggestions={filteredSuggestions}
            searchValue={searchValue}
            containerRef={containerRef}
            onSuggestionClick={onSuggestionClick}
            onScroll={onScroll}
          />
        )}
      </div>
      <p>{t("key", { count })}</p>
    </div>
  );
}

export default SearchPar;
