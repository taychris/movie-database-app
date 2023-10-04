import { Fragment } from "react";
import { Text } from "./DetailsText";

type MovieDetails = {
  Language: string;
  Country: string;
  Awards: string;
  BoxOffice: string;
  Type: string;
  DVD: string;
  Production: string;
  Website: string;
};

const MovieDetails = ({
  Language,
  Country,
  Awards,
  BoxOffice,
  Type,
  DVD,
  Production,
  Website,
}: MovieDetails) => {
  const movie = [
    { label: "type", data: Type },
    { label: "language", data: Language },
    { label: "country", data: Country },
    { label: "awards", data: Awards },
    { label: "box office", data: BoxOffice },
    { label: "DVD", data: DVD },
    { label: "production", data: Production },
    { label: "website", data: Website },
  ];
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-1 h-max w-full md:max-w-[200px] gap-3">
      {movie.map((item, index) => (
        <Fragment key={index}>
          {item.data && (
            <li key={item.label}>
              <h1 className="capitalize">{item.label}</h1>
              <Text entry={item.data} />
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default MovieDetails;
