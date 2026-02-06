import React, { useState } from "react";

const Navbar = ({ movies }) => {
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </nav>
    </>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
};

const Search = () => {
  const [query, setQuery] = useState("");
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

const NumResults = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
};

export default Navbar;
