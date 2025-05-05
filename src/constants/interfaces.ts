import { RefObject } from "react";

export interface Suggestion {
  id: string;
  name: string;
  avatar: string;
}

export interface SuggestionResponse {
  data: Data;
  hasMore: boolean;
  nextPage: number | null;
}

export interface Data {
  pages: Suggestions[];
  pageParams: number[];
}

export interface Suggestions {
  data: Suggestion[];
}

export interface SearchParPresenterProps {
  searchValue: string;
  filteredSuggestions: Suggestion[];
  isLoading: boolean;
  containerRef: RefObject<HTMLDivElement>;
  onSuggestionClick: (suggestion: Suggestion) => void;
  onScroll: () => void;
}

export interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export interface SuggestionItemProps {
  suggestion: Suggestion;
  searchValue: string;
  onClick: (suggestion: Suggestion) => void;
}

export interface SuggestionsListProps {
  suggestions: Suggestion[];
  searchValue: string;
  containerRef: React.RefObject<HTMLDivElement>;
  onSuggestionClick: (suggestion: Suggestion) => void;
  onScroll: () => void;
}
