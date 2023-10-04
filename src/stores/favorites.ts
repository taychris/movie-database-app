import { MovieCardType } from "@/types/types";
import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

type MovieStore = {
  favorites: MovieCardType[];
  prevQuery: string,
  toggleFavorite: (product: MovieCardType) => void;
  setPrevQuery: (prevQuery: string) => void;
};

type PersistStore = (
  config: StateCreator<MovieStore>,
  options: PersistOptions<MovieStore>
) => StateCreator<MovieStore>;

export const useMovieStore = create<MovieStore, []>(
  (persist as PersistStore)(
    (set, get): MovieStore => ({
      favorites: [],
      prevQuery: "",
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
      setPrevQuery: (prevQuery) => set({ prevQuery })
    }),
    {
      name: "favorite-store",
    }
  )
);
