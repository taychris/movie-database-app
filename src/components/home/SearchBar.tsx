import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMovies = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ query: searchText });
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      setSearchText(query);
    } else {
      setSearchText("");
    }
  }, [searchParams]);

  return (
    <form
      className="relative order-2 w-full sm:order-1"
      onSubmit={searchMovies}
    >
      <Input
        placeholder="Batman.."
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
