import { useState, useRef } from "react";
import "./SearchPar.css";
import useFetchSuggestion from "./useFetchSuggestion";

interface Suggestion {
  id: string;
  name: string;
  avatar: string;
}

function SearchPar() {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const { filteredSuggestions, setFilteredSuggestions, isLoading } =
    useFetchSuggestion(searchValue, page);

  const handleClear = () => {
    setSearchValue("");
    setFilteredSuggestions([]);
    setPage(1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setFilteredSuggestions([]);
    setPage(1);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setSearchValue(suggestion.name);
  };

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el || isLoading) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 20) {
      setPage((prev) => prev + 1);
    }
  };

  const highlightMatch = (text: string, search: string) => {
    const index = text.toLowerCase().indexOf(search.toLowerCase());
    if (index === -1) return text;

    return (
      <>
        {text.slice(0, index)}
        <strong className="font-bold">
          {text.slice(index, index + search.length)}
        </strong>
        {text.slice(index + search.length)}
      </>
    );
  };

  return (
    <div className="search-container">
      <div
        className={`search-wrapper ${
          filteredSuggestions.length > 0 ? "rounded-t-2xl" : "rounded-2xl"
        }`}
      >
        <div className="search-input-container">
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search..."
            className="search-input"
          />
          {searchValue && (
            <button onClick={handleClear} className="clear-button">
              X
            </button>
          )}
        </div>

        {
          <>
            {!isLoading && filteredSuggestions.length > 0 && (
              <div
                ref={containerRef}
                className="suggestions-container rounded-b-2xl"
                style={{ maxHeight: "300px", overflowY: "auto" }}
                onScroll={handleScroll}
              >
                {filteredSuggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className={`suggestion-item`}
                    onMouseDown={() => handleSuggestionClick(suggestion)}
                  >
                    <div className="suggestion-content-wrapper">
                      <img
                        src={suggestion.avatar}
                        alt={`${suggestion.name}'s avatar`}
                        className="avatar"
                      />
                      <div className="suggestion-content">
                        <span className="suggestion-text">
                          {highlightMatch(suggestion.name, searchValue)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        }
      </div>
    </div>
  );
}

export default SearchPar;
