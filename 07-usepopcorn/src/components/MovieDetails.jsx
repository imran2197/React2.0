import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

const KEY = "338f2c65";

const MovieDetails = ({ selectedId, onCloseMovie }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

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
              <StarRating maxRating={10} size={24} />
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
