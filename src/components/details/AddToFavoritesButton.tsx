import { useMovieStore } from "@/stores/movie";
import { Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { MovieCardType } from "@/types/types";

const AddToFavoritesButton = ({
  Title,
  imdbID,
  Year,
  Poster,
}: MovieCardType) => {
  const { favorites, toggleFavorite } = useMovieStore();
  const { toast } = useToast();
  const isInFavorites = favorites.some(
    (favorite) => favorite.imdbID === imdbID
  );

  const handleFavorite = () => {
    toggleFavorite({ Title, imdbID, Year, Poster });
    if (isInFavorites) {
      toast({
        title: "Removed from favorites 🗑️",
        description: `${Title} was removed.`,
      });
    } else {
      toast({
        title: "Added to favorites 🎉",
        description: `${Title} was added.`,
      });
    }
  };

  return (
    <button title="Add to favorites" onClick={handleFavorite}>
      <Star
        className={`duration-500 stroke-yellow-400 ${
          isInFavorites ? "fill-yellow-400" : "fill-yellow-50"
        }`}
      />
    </button>
  );
};
export default AddToFavoritesButton;
