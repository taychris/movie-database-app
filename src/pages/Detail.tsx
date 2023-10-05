import BackButton from "@/components/BackButton";
import FavoritesButton from "@/components/home/FavoritesButton";
import Cast from "@/components/movie/Cast";
import Heading from "@/components/movie/Heading";
import MovieDetails from "@/components/movie/MovieDetails";
import MovieSkeleton from "@/components/movie/MovieSkeleton";
import Ratings from "@/components/movie/Ratings";
import { Separator } from "@/components/ui/separator";
import { loadMovieDetails } from "@/services/apiCalls";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Error from "../assets/imgs/error.svg";
import StatusMessage from "@/components/StatusMessage";
import { motion } from "framer-motion";
import { fadeInScale, parentVariants } from "@/lib/animations";

const Detail = () => {
  const [title, setTitle] = useState("");
  const { imdbID } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["movie-detail", imdbID],
    queryFn: async () => loadMovieDetails(imdbID || ""),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) setTitle(data.Title);
  }, [data]);

  return (
    <>
      <Helmet>
        <title>{title || ""} - Movie Database</title>
      </Helmet>
      <motion.section
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-5 text-left"
      >
        <div className="flex justify-between w-full gap-5">
          <BackButton />
          <FavoritesButton />
        </div>
        {isLoading ? (
          <MovieSkeleton />
        ) : data?.Error ? (
          <StatusMessage
            text="Something went wrong. Try again later."
            imgSource={Error}
          />
        ) : (
          data && (
            <>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
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
                <Ratings rating={data.Ratings} votes={data.imdbVotes} />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <motion.div variants={fadeInScale} className="flex flex-col gap-5 lg:flex-row">
                  <img
                    src={data.Poster}
                    className="w-full max-w-xs shadow-lg rounded-xl shadow-slate-400"
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
                </motion.div>
                <motion.div variants={fadeInScale} className="space-y-4">
                  <p className="text-lg font-light">{data.Plot}</p>
                  <Separator />
                  <Cast
                    Director={data.Director}
                    Writer={data.Writer}
                    Actors={data.Actors}
                  />
                </motion.div>
              </div>
            </>
          )
        )}
      </motion.section>
    </>
  );
};
export default Detail;
