import MovieCard from "./MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { MovieCardType } from "@/types/types";
import MovieCardSkeleton from "./MovieCardSkeleton";
import Popcorn from "../../assets/imgs/popcorn.svg";
import Loupe from "../../assets/imgs/loupe.svg";
import Error from "../../assets/imgs/error.svg";
import StatusMessage from "../StatusMessage";
import { useMovieList } from "@/hooks/useMovieList";

const MovieList = () => {
  const { query, movieList, isLoading, isError, fetchNextPage, hasNextPage } =
    useMovieList();

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
          {!hasNextPage && (
            <p className="mt-10 text-sm font-light text-center">
              You've reached the end 🤌
            </p>
          )}
        </>
      ) : query && movieList?.length === 0 ? (
        <StatusMessage
          text="No results. Try to be more exact."
          imgSource={Loupe}
        />
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
