import { useMovieStore } from "@/stores/favorites";
import { Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { MovieCardType } from "@/types/types";

const AddToFavoritesButton = ({ Title, imdbID, Year, Poster }: MovieCardType) => {
  const { favorites, toggleFavorite } = useMovieStore();
  const { toast } = useToast();

  const handleFavorite = () => {
    toggleFavorite({ Title, imdbID, Year, Poster });
    if (favorites.some((favorite) => favorite.imdbID === imdbID)) {
      toast({
        title: "Added to favorites 🎉",
        description: `${Title} was added.`
      });
    } else {
      toast({
        title: "Removed from favorites 🗑️",
        description: `${Title} was removed.`,
      });
    }
  }

  return (
    <button title="Add to favorites" onClick={handleFavorite}>
      <Star
        className={`duration-500 stroke-yellow-400 ${
          favorites.some((favorite) => favorite.imdbID === imdbID)
            ? "fill-yellow-400"
            : "fill-yellow-50"
        }`}
      />
    </button>
  );
};
export default AddToFavoritesButton;
