import { useRef } from "react";
import { useKey } from "../hooks/useKey";

const Search = ({ query, setQuery }) => {
  const searchRef = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === searchRef.current) return;
    searchRef.current.focus();
    setQuery("");
  });
  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search movies..."
        ref={searchRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
export default Search;
