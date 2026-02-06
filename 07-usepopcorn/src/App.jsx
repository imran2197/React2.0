import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./mockjson/MoviesData";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar movies={movies} />
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <>
            <WatchedSummary watched={watched} />
            <WatchedMoviesList watched={watched} />
          </>
        </Box>
      </Main>
    </>
  );
}
