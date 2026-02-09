import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

const KEY = "338f2c65";

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId,
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: runtime.split(" ").at(0),
      userRating,
    };
    onAddWatched(newWatchedMovie);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`,
      );
      const data = await response.json();
      console.log(data);
      setMovie(data);
      setIsLoading(false);
    };
    fetchMovieDetails();
  }, [selectedId]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                <strong>Release Date: </strong>
                {released}
              </p>
              <p>
                <strong>Runtime: </strong> {runtime}
              </p>
              <p>
                <strong>Genres: </strong>
                {genre}
              </p>
              <p>
                <strong>IMDB Rating:</strong>
                <span>⭐</span>
                {imdbRating}
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>You rated this movie {watchedUserRating} 🌟</p>
              )}
            </div>
            <p>
              <strong>Description: </strong>
              <em>{plot}</em>
            </p>
            <p>
              <strong>Starring</strong> {actors}
            </p>
            <p>
              <strong>Directed by</strong> {director}
            </p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
