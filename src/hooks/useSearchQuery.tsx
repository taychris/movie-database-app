import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearchQuery = () => {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMovies = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ query: searchText.trimEnd() });
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      setSearchText(query);
    } else {
      searchParams.delete("query");
      setSearchParams(searchParams);
      setSearchText("");
    }
  }, [searchParams]);

  return { searchText, setSearchText, searchMovies };
};
