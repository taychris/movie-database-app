import { Text } from "./DetailsText";

type Cast = {
  Director: string;
  Writer: string;
  Actors: string;
};

const Cast = ({ Director, Writer, Actors }: Cast) => {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      <li>
        <h1>Director</h1>
        <Text entry={Director} />
      </li>
      <li>
        <h1>Writer</h1>
        <Text entry={Writer} />
      </li>
      <li>
        <h1>Actors</h1>
        <Text entry={Actors} />
      </li>
    </ul>
  );
};
export default Cast;
