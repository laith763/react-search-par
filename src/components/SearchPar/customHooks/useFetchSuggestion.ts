import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { Data, SuggestionResponse } from "../../../constants/interfaces";
import { API_BASE_URL } from "../../../config/api";

function useFetchSuggestion(searchValue: string) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery<SuggestionResponse, Error, Data>({
      queryKey: ["suggestions", searchValue],
      queryFn: async ({ pageParam }) => {
        debugger;
        const page = pageParam as number;

        if (!searchValue || searchValue.length < 3) {
          return { data: [], hasMore: false, nextPage: null };
        }

        const response = await axios.get({ API_BASE_URL } + "/proudect", {
          params: {
            search: searchValue,
            limit: 5,
            page: page,
          },
        });

        return {
          data: response.data,
          hasMore: response.data.length === 5,
          nextPage: response.data.length === 5 ? page + 1 : null,
        };
      },
      getNextPageParam: (lastPage) => lastPage.nextPage,
      initialPageParam: 1,
      enabled: searchValue.length >= 3,
    });
  const filteredSuggestions = data?.pages?.flatMap((page) => page.data) ?? [];

  return {
    filteredSuggestions,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
}

export default useFetchSuggestion;
