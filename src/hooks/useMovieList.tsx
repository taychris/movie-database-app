import { loadSearchedMovies } from "@/services/apiCalls";
import { useMovieStore } from "@/stores/movie";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useMovieList = () => {
  const { prevQuery, setPrevQuery } = useMovieStore();
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("query") || "";

  const removeFromCache = () => {
    return new Promise((resolve) => resolve(remove()));
  };

  const removeAndRefetch = async () => {
    await removeFromCache();
    refetch();
  };

  useEffect(() => {
    if (query.length > 0 && query !== prevQuery) {
      setPrevQuery(query);
      removeAndRefetch();
    }
    //the part below is necessary, to avoid a specific search bug
    if (!query) {
      setPrevQuery("");
      removeAndRefetch();
    }
  }, [query, prevQuery]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    refetch,
    remove,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }) => loadSearchedMovies(query, pageParam),
    getNextPageParam: (prevPage) => {
      //calculate how many pages there are
      const totalPages = Math.ceil(prevPage.totalResults / 10);
      return totalPages >= prevPage.page ? prevPage.page : null;
    },
  });

  const movieList = data?.pages
    .map((page) => (page.Search ? page.Search : []))
    .flat();

  return { query, movieList, isLoading, isError, fetchNextPage, hasNextPage };
};
