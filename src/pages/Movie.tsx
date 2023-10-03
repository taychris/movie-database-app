import BackButton from "@/components/BackButton";
import FavoritesButton from "@/components/home/FavoritesButton";
import Cast from "@/components/movie/Cast";
import Heading from "@/components/movie/Heading";
import MovieDetails from "@/components/movie/MovieDetails";
import Ratings from "@/components/movie/Ratings";
import { Separator } from "@/components/ui/separator";
import { loadMovieDetails } from "@/services/apiCalls";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { imdbID } = useParams();
  const {data, isLoading, isSuccess} = useQuery({
    queryKey: ["movie-detail", imdbID],
    queryFn: async () => loadMovieDetails(imdbID || "")
  })

  return (
    <section className="flex flex-col gap-5 text-left">
      <div className="flex justify-between w-full gap-5">
        <BackButton />
        <FavoritesButton />
      </div>
      {isLoading && <p>Loading...</p>}
      {isSuccess && 
      <>
        <div className="grid gap-5 md:grid-cols-2">
          <Heading
            Title={data.Title}
            imdbID={data.imdbID}
            Year={data.Year}
            Runtime={data.Runtime}
            Poster={data.Poster}
            Released={data.Released}
            Genre={data.Genre}
            Rated={data.Rated}
          />
          <Ratings rating={data.Ratings} votes={data.imdbVotes}/>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-5 lg:flex-row">
            <img
              src={data.Poster}
              className="w-full max-w-xs rounded-xl"
              alt={`${data.Title} poster`}
            />
            <MovieDetails
              Language={data.Language}
              Country={data.Country}
              Awards={data.Awards}
              BoxOffice={data.BoxOffice}
              Production={data.Production}
              DVD={data.DVD}
              Type={data.Type}
              Website={data.Website}
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg font-light">{data.Plot}</p>
            <Separator />
            <Cast
              Director={data.Director}
              Writer={data.Writer}
              Actors={data.Actors}
            />
          </div>
        </div>
      </>
      }
    </section>
  );
};
export default Movie;
