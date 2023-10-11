import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ease, fadeIn, fadeUp, parentVariants } from "@/lib/animations";

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Favorite?: JSX.Element;
};

const MovieCard = ({ Title, Year, imdbID, Poster, Favorite }: Movie) => {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      className="relative overflow-hidden font-light text-left text-white bg-gray-200 aspect-[2/3] rounded-xl border"
    >
      <Link
        to={`/details/${imdbID}`}
        title={Title}
        className="relative w-full h-full"
      >
        <motion.img
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5, ease },
          }}
          variants={fadeIn}
          src={Poster}
          className="relative z-0 object-cover w-full h-full"
          alt={`${Title} poster`}
        />
      </Link>
      {Favorite && (
        <motion.div
          variants={fadeIn}
          className="absolute top-0 right-0 p-2 z-[2]"
        >
          {Favorite}
        </motion.div>
      )}
      <div className="absolute bottom-0 left-0 z-10 w-full px-3 pb-2 bg-gradient-to-t from-black to-black/0">
        <motion.h1 variants={fadeUp} className="text-xl text-white truncate">
          {Title}
        </motion.h1>
        <motion.p variants={fadeUp} className="text-gray-200 font-extralight">
          {Year}
        </motion.p>
      </div>
    </motion.div>
  );
};
export default MovieCard;
