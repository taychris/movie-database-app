import FavoritesButton from "@/components/home/FavoritesButton";
import MovieList from "@/components/home/MovieList";
import SearchBar from "@/components/home/SearchBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  // const [movieList, setMovieList] = useState([
  //   {
  //     Title: "Batman Begins",
  //     Year: "2005",
  //     imdbID: "tt0372784",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Batman v Superman: Dawn of Justice",
  //     Year: "2016",
  //     imdbID: "tt2975590",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "The Batman",
  //     Year: "2022",
  //     imdbID: "tt1877830",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Batman",
  //     Year: "1989",
  //     imdbID: "tt0096895",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Batman Returns",
  //     Year: "1992",
  //     imdbID: "tt0103776",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Batman & Robin",
  //     Year: "1997",
  //     imdbID: "tt0118688",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Batman Forever",
  //     Year: "1995",
  //     imdbID: "tt0112462",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "The Lego Batman Movie",
  //     Year: "2017",
  //     imdbID: "tt4116284",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Batman: The Animated Series",
  //     Year: "1992–1995",
  //     imdbID: "tt0103359",
  //     Type: "series",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
  //     Year: "2016",
  //     imdbID: "tt18689424",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
  //   },
  // ]);

  function searchMovies(e: React.FormEvent) {
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
    <section className="space-y-5">
      <div className="flex w-full gap-5">
        <SearchBar
          searchMovies={searchMovies}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <FavoritesButton/>
      </div>
      <MovieList />
    </section>
  );
};
export default Home;
