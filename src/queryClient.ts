import { QueryCache, QueryClient } from "@tanstack/react-query";

import { isAxiosError } from "axios";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      let errorMessage = "";
      if (isAxiosError(error)) {
        const axiosError = {
          method: error?.config?.method?.toUpperCase(),
          url: error?.config?.url,
          params: error?.config?.params,
          data: error?.config?.data,
          status: error.response?.status,
          message: error.message,
        };
        errorMessage = axiosError.message;
      } else {
        errorMessage = "Something went wrong";
      }
    },
  }),
});

export default queryClient;
