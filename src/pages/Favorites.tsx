import BackButton from "@/components/BackButton";
import MovieCard from "@/components/home/MovieCard";
import AddToFavoritesButton from "@/components/movie/AddToFavoritesButton";
import { useFavoriteStore } from "@/stores/favorites";

const Favorites = () => {
  const { favorites } = useFavoriteStore();

  return (
    <section className="space-y-4">
      <BackButton/>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
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
        </div>
      ) : (
        <p className="font-light">
          Looks like your favorite movie list is empty 🫠
        </p>
      )}
    </section>
  );
};
export default Favorites;
