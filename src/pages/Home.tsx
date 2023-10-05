import FavoritesButton from "@/components/home/FavoritesButton";
import MovieList from "@/components/home/MovieList";
import SearchBar from "@/components/home/SearchBar";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Movie Database</title>
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
export default Home;
