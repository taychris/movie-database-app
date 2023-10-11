import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchQuery } from "@/hooks/useSearchQuery";

const SearchBar = () => {
  const { searchMovies, searchText, setSearchText } = useSearchQuery();

  return (
    <form
      className="relative order-2 w-full sm:order-1"
      onSubmit={searchMovies}
    >
      <Input
        placeholder="Batman.."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
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
