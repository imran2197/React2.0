const Search = ({ query, setQuery }) => {
  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
export default Search;
