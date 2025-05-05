import { SuggestionsListProps } from "../../constants/interfaces";
import { SuggestionItem } from "./SuggestionItem";

export const SuggestionsList = ({
  suggestions,
  searchValue,
  containerRef,
  onSuggestionClick,
  onScroll,
}: SuggestionsListProps) => {
  return (
    <div
      ref={containerRef}
      className="absolute top-full left-0 right-0 bg-white shadow-lg pt-2.5 pb-3 z-[100] rounded-b-2xl max-h-[300px] overflow-y-auto"
      onScroll={onScroll}
    >
      {suggestions.map((suggestion) => (
        <SuggestionItem
          key={suggestion?.id}
          suggestion={suggestion}
          searchValue={searchValue}
          onClick={onSuggestionClick}
        />
      ))}
    </div>
  );
};
