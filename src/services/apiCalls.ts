import axios from "axios";

const URL = `https://omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;

export async function loadSearchedMovies(query: string, page: number) {
  const { data } = await axios.get(`${URL}&s=${query}&page=${page}`);
  const { Search, totalResults } = data;
  return { Search, totalResults, page: page + 1 };
}

export async function loadMovieDetails(imdbID: string) {
  const { data } = await axios.get(`${URL}&i=${imdbID}&plot=full`);
  return data;
}
