import { useInfiniteQuery } from "@tanstack/react-query";
import MovieCard from "./MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { loadSearchedMovies } from "@/services/apiCalls";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MovieCardType } from "@/types/types";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { useMovieStore } from "@/stores/favorites";
import Popcorn from "../../assets/imgs/popcorn.svg";
import Loupe from "../../assets/imgs/loupe.svg";
import Error from "../../assets/imgs/error.svg";
import StatusMessage from "../StatusMessage";

const MovieList = () => {
  const { prevQuery, setPrevQuery } = useMovieStore();
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("query") || "";

  const removeFromCache = () => {
    return new Promise((resolve) => resolve(remove()));
  };

  useEffect(() => {
    if (query.length > 0 && query !== prevQuery) {
      removeFromCache().then(() => {
        refetch();
      });
      setPrevQuery(query);
    }
    //the part below is necessary, to avoid a specific search bug
    if(!query) {
      setPrevQuery("")
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

  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          <MovieCardSkeleton />
        </div>
      ) : isError ? (
        <StatusMessage
          text="Something went wrong. Try again later."
          imgSource={Error}
        />
      ) : movieList?.length! > 0 ? (
        <>
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
          {!hasNextPage && <p className="mt-10 text-sm font-light text-center">You've reached the end 🤌</p>}
        </>
      ) : query && movieList?.length === 0 ? (
        <StatusMessage text="No results. Try to be more exact." imgSource={Loupe} />
      ) : (
        <StatusMessage
          text="Start by typing in your desired movie title."
          imgSource={Popcorn}
        />
      )}
    </>
  );
};

export default MovieList;
