import { Rating } from "@/types/types";
import { Text } from "./DetailsText";
import { motion } from "framer-motion";
import { fadeInScale } from "@/lib/animations";

const Ratings = ({ rating, votes }: { rating: Rating[]; votes: string }) => {
  return (
    <motion.div variants={fadeInScale} className="space-y-1 rounded-xl h-max">
      <h1 className="text-2xl font-medium">Ratings</h1>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {rating.map((rating, index) => (
          <li
            className="p-2 bg-gray-200 rounded-lg shadow-lg shadow-slate-200"
            key={index}
          >
            <h1>{rating.Value}</h1>
            <Text entry={rating.Source} />
          </li>
        ))}
        <li className="p-2 bg-gray-200 rounded-lg shadow-lg shadow-slate-200">
          <h1>IMDB Votes</h1>
          <Text entry={votes} />
        </li>
      </ul>
    </motion.div>
  );
};
export default Ratings;
