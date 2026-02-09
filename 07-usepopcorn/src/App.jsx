import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import NumResults from "./components/NumResults";
import Search from "./components/Search";
import { useEffect } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

const KEY = "338f2c65";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   console.log("After Initial Render");
  // }, []);

  // useEffect(() => {
  //   console.log("After every Render");
  // });

  // useEffect(() => {
  //   console.log("D");
  // }, [query]);

  // console.log("During Render");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Something went wrong with fetching movies");
        }
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        setMovies(data.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchData();
  }, [query]);

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {movies.length == 0 && (
            <p className="movieNotFound">Please search the movie</p>
          )}
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
