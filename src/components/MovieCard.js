import React from "react";
import "./MovieCard.css";

function MovieCard(props) {
  return (
    <>
      <div className="card" key={props.movieKey}>
        {props.movieImg ? (
          <img
            className="card-img-top"
            src={"https://image.tmdb.org/t/p/w500/" + props.movieImg}
            alt={props.movieTitle + " backdrop"}
          />
        ) : null}
        <div className="card-body">
          <h5 className="card-title">{props.movieTitle}</h5>
          <p className="card-text">{props.movieRelaseDate}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
