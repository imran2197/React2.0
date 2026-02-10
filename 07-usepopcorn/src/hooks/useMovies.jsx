import { useEffect, useState } from "react";

const KEY = "338f2c65";

export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          {
            signal: controller.signal,
          },
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Something went wrong with fetching movies");
        }
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    // handleCloseMovie();
    fetchData();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
};
