import { useInfiniteQuery } from "@tanstack/react-query";
import MovieCard from "./MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { loadSearchedMovies } from "@/services/apiCalls";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MovieCardType } from "@/types/types";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { useMovieStore } from "@/stores/favorites";

const MovieList = () => {
  const {prevQuery, setPrevQuery} = useMovieStore()
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("query") || "";

  function removeFromCache() {
    return new Promise((resolve) => resolve(remove()));
  }

  useEffect(() => {
    if (query.length > 0 && query !== prevQuery) {
      removeFromCache().then(() => {
        refetch();
      });
      setPrevQuery(query)
    }
  }, [query, prevQuery]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    error,
    refetch,
    remove,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }) => loadSearchedMovies(query, pageParam),
    getNextPageParam: (prevPage) => {
      const totalPages = Math.ceil(prevPage.totalResults / 10);
      return totalPages >= prevPage.page ? prevPage.page : null;
    }
  });

  const movieList = data?.pages
    .map((page) => (page.Search ? page.Search : []))
    .flat();

  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          <MovieCardSkeleton />
        </div>
      ) : error ? (
        <p className="font-light text-center">
          Oops, something went wrong. 😳 Try again later.
        </p>
      ) : movieList?.length! > 0 ? (
          <InfiniteScroll
            dataLength={movieList?.length || 0}
            next={fetchNextPage}
            hasMore={hasNextPage || false}
            loader={<MovieCardSkeleton />}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3"

          >
            {movieList?.map((movie: MovieCardType, index: number) => (
              <MovieCard
                key={index}
                Title={movie.Title}
                Year={movie.Year}
                imdbID={movie.imdbID}
                Poster={movie.Poster}
              />
            ))}
          </InfiniteScroll>
      ) : query && movieList?.length === 0 ? (
        <p className="font-light text-center">
          No results. Try to search for the exact movie name 🔎
        </p>
      ) : (
        <p className="text-lg font-light text-center">
          Start by typing in your desired movie title 🍿
        </p>
      )}
    </>
  );
};
export default MovieList;
