import FavoritesButton from "@/components/home/FavoritesButton";
import MovieList from "@/components/home/MovieList";
import SearchBar from "@/components/home/SearchBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMovies = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ query: searchText });
  }

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      setSearchText(query);
    } else {
      setSearchText("");
    }
  }, [searchParams]);

  return (
    <>
      <Helmet>
        <title>Home - Movie Database</title>
      </Helmet>
      <section>
        <div className="flex flex-wrap justify-end w-full gap-2 mb-10 sm:gap-5 sm:flex-nowrap sm:justify-between">
          <SearchBar
            searchMovies={searchMovies}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <FavoritesButton/>
        </div>
        <MovieList />
      </section>
    </>
  );
};
export default Home;
