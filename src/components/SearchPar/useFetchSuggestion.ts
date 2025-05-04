import { useEffect, useState } from "react";

interface Suggestion {
  id: string;
  name: string;
  avatar: string;
}

function useFetchSuggestion(searchValue: string, page: number) {
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchValue.length >= 3) {
        setIsLoading(true);

        try {
          const response = await fetch(
            `http://localhost:3003/proudect?search=${encodeURIComponent(
              searchValue
            )}&limit=5&page=${page}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data: Suggestion[] = await response.json();
          setFilteredSuggestions((prev) => [...prev, ...data]);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setFilteredSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [searchValue, page]);

  return {
    filteredSuggestions,
    setFilteredSuggestions,
    isLoading,
  };
}

export default useFetchSuggestion;
