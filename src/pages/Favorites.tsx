import BackButton from "@/components/BackButton";
import StatusMessage from "@/components/StatusMessage";
import MovieCard from "@/components/home/MovieCard";
import AddToFavoritesButton from "@/components/movie/AddToFavoritesButton";
import { useMovieStore } from "@/stores/favorites";
import { Helmet } from "react-helmet";
import Ghost from "../assets/imgs/ghost.svg";
import { AnimatePresence } from "framer-motion";

const Favorites = () => {
  const { favorites } = useMovieStore();

  return (
    <>
      <Helmet>
        <title>Favorites - Movie Database</title>
      </Helmet>
      <section className="space-y-4">
        <BackButton />
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            <AnimatePresence>
              {favorites.map((favorite) => (
                <MovieCard
                  key={favorite.imdbID}
                  Title={favorite.Title}
                  Year={favorite.Year}
                  imdbID={favorite.imdbID}
                  Poster={favorite.Poster}
                  Favorite={
                    <AddToFavoritesButton
                      Title={favorite.Title}
                      Year={favorite.Year}
                      imdbID={favorite.imdbID}
                      Poster={favorite.Poster}
                    />
                  }
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <StatusMessage
            text="Your favorite movie list is empty."
            imgSource={Ghost}
          />
        )}
      </section>
    </>
  );
};
export default Favorites;
