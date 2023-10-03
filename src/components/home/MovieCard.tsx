import { Link } from "react-router-dom";

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Favorite?: JSX.Element;
};

const MovieCard = ({ Title, Year, imdbID, Poster, Favorite }: Movie) => {
  return (
    <div className="relative overflow-hidden font-light text-left text-white bg-gray-400 aspect-square rounded-xl group">
      <Link
        to={`/movie/${imdbID}`}
        title={Title}
        className="relative w-full h-full"
      >
        <div className="absolute w-full bottom-0 left-0 z-[1] bg-gradient-to-t from-black to-black/0 px-3 pb-2">
          <h1 className="text-xl truncate">{Title}</h1>
          <p className="text-gray-200 font-extralight">{Year}</p>
        </div>
        <img
          src={Poster}
          className="relative z-0 object-cover w-full h-full duration-500 group-hover:scale-105"
          alt={`${Title} poster`}
        />
      </Link>
      {Favorite &&
        <div className="absolute top-0 right-0 p-2 z-[2]">{Favorite}</div>
      }
    </div>
  );
};
export default MovieCard;
