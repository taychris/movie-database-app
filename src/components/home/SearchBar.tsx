import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {
    searchMovies: (e: React.FormEvent) => void,
    searchText: string,
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({searchMovies, searchText, setSearchText} : Props) => {
  return (
    <form className="relative order-2 w-full sm:order-1" onSubmit={searchMovies}>
      <Input
        placeholder="Search.."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        required
        className="pr-10"
      />
      <button
        className="absolute text-gray-500 duration-300 -translate-y-1/2 right-3 top-1/2 hover:scale-110"
        type="submit"
      >
        <SearchIcon />
      </button>
    </form>
  );
};
export default SearchBar;
