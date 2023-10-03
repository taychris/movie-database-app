import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

type Props = {
    searchMovies: (e: React.FormEvent) => void,
    searchText: string,
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({searchMovies, searchText, setSearchText} : Props) => {
  return (
    <form className="relative w-full" onSubmit={searchMovies}>
      <Input
        placeholder="Search.."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        required
      />
      <button
        className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2"
        type="submit"
      >
        <SearchIcon />
      </button>
    </form>
  );
};
export default SearchBar;
