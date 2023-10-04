import { Calendar, PlayCircleIcon } from "lucide-react";
import AddToFavoritesButton from "./AddToFavoritesButton";
import { Separator } from "@/components/ui/separator";
import { Text } from "./DetailsText";

type Details = {
  Title: string;
  imdbID: string;
  Year: string;
  Runtime: string;
  Poster: string;
  Released: string;
  Genre: string;
  Rated: string;
};

const Heading = ({
  Title,
  imdbID,
  Year,
  Runtime,
  Poster,
  Released,
  Genre,
  Rated,
}: Details) => {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-medium">
        {Title}
        {" "}
        <AddToFavoritesButton
          Title={Title}
          imdbID={imdbID}
          Year={Year}
          Poster={Poster}
        />
      </h1>
      <div className="flex flex-wrap">
        <Text entry={Genre} />
        <div className="px-2">
          <Separator orientation="vertical" />
        </div>
        <Text entry={Released} />
        <div className="px-2">
          <Separator orientation="vertical" />
        </div>
        <Text entry={Rated} />
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2" title="Year">
          <Calendar className="w-4 h-4 text-gray-600" />
          <p>{Year}</p>
        </div>
        <div className="flex items-center gap-2" title="Runtime">
          <PlayCircleIcon className="w-4 h-4 text-gray-600" />
          <p>{Runtime}</p>
        </div>
      </div>
    </div>
  );
};
export default Heading;
