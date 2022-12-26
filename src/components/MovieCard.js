import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <>
      <div className="card" key={movie.key}>
        {movie.poster_path ? (
          <img
            className="card-img-top"
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            alt={movie.title + " backdrop"}
          />
        ) : null}
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.release_date}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
