import FavoritesButton from "@/components/search/FavoritesButton";
import MovieList from "@/components/search/MovieList";
import SearchBar from "@/components/search/SearchBar";
import { Helmet } from "react-helmet";

const Search = () => {
  return (
    <>
      <Helmet>
        <title>Search - Movie Database</title>
      </Helmet>
      <section>
        <div className="flex flex-wrap justify-end w-full gap-2 mb-10 sm:gap-5 sm:flex-nowrap sm:justify-between">
          <SearchBar />
          <FavoritesButton />
        </div>
        <MovieList />
      </section>
    </>
  );
};
export default Search;
