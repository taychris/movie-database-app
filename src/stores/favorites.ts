import { MovieCardType } from "@/types/types";
import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

type FavoriteStore = {
  favorites: MovieCardType[];
  toggleFavorite: (product: MovieCardType) => void;
};

type PersistStore = (
  config: StateCreator<FavoriteStore>,
  options: PersistOptions<FavoriteStore>
) => StateCreator<FavoriteStore>;

export const useFavoriteStore = create<FavoriteStore, []>(
  (persist as PersistStore)(
    (set, get): FavoriteStore => ({
      favorites: [],
      toggleFavorite: (favorite) => {
        const { favorites } = get();
        const indexOfFavorite = favorites.findIndex(
          (fav) => fav.imdbID === favorite.imdbID
        );
        // const findProduct = favorites.find((fav) => fav.imdbID === favorite.imdbID);
        if (indexOfFavorite > -1) {
          favorites.splice(indexOfFavorite, 1);
        } else {
          favorites.push(favorite);
        }
        set({
          favorites,
        });
      },
    }),
    {
      name: "favorite-store",
    }
  )
);
