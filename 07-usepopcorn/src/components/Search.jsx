import { useEffect, useRef } from "react";

const Search = ({ query, setQuery }) => {
  const searchRef = useRef(null);

  useEffect(() => {
    const eventListenerForEnter = (e) => {
      if (document.activeElement === searchRef.current) return;

      if (e.key == "Enter") {
        setQuery("");
        searchRef.current.focus();
      }
    };
    document.addEventListener("keydown", eventListenerForEnter);
    searchRef.current.focus();

    return () => {
      document.removeEventListener("keydown", eventListenerForEnter);
    };
  }, []);
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
