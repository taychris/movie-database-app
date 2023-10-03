import { useInfiniteQuery } from "@tanstack/react-query";
import MovieCard from "./MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { loadSearchedMovies } from "@/services/apiCalls";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MovieCardType } from "@/types/types";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieList = () => {
  const search = useLocation().search;
  const q = new URLSearchParams(search).get("query") || "";

  function removeFromCache() {
    return new Promise((resolve) => resolve(remove()));
  }

  useEffect(() => {
    if (q) {
      removeFromCache().then(() => {
        refetch();
      });
    }
  }, [q]);

  const { data, fetchNextPage, hasNextPage, status, refetch, remove } =
    useInfiniteQuery({
      queryKey: ["movies"],
      queryFn: ({ pageParam = 1 }) => loadSearchedMovies(q, pageParam),
      getNextPageParam: (prevPage) => {
        const totalPages = Math.ceil(prevPage.totalResults / 10);
        return totalPages >= prevPage.page ? prevPage.page : null;
      },
      staleTime: Infinity,
    });

  const movieList = data?.pages
    .map((page) => (page.Search ? page.Search : []))
    .flat();

  return (
    <>
      {status === "loading" ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          <MovieCardSkeleton />
        </div>
      ) : status === "error" ? (
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
      ) : q && movieList?.length === 0 ? (
        <p className="font-light text-center">
          No results. Try to search for the exact movie name.
        </p>
      ) : (
        <p className="font-light text-center">
          Start by typing in your desired movie title 😉
        </p>
      )}
    </>
  );
};
export default MovieList;
