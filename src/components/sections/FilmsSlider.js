import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieCard from "../MovieCard";
import "./FilmsSlider.css";
function FilmsSlider() {
  const [movies, setMovies] = useState();
  let cardsNum = 4;
  const fetchMovies = async () => {
      try {
        
      //   const {
      //     data: { results },
      //   } = await axios.get(
      // `https://api.themoviedb.org/3/keyword/537-palestine/movies`,
      // {
      //   params: {
      //     api_key: process.env.REACT_APP_MOVIE_API_KEY,
      //   },
      // });
        const results = await fetch(`https://api.themoviedb.org/3/keyword/537-palestine/movies?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
        setMovies(results);
      } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    fetchMovies();
    console.log(movies);
  }, []);
  (window.innerWidth < '567') ? (cardsNum = 5) : (cardsNum = 4)
  const renderMovies = () =>
  movies.map((movie, index) =>
      index <= cardsNum ? (
        <MovieCard key={movie.id + "_" + index + Math.random()} movieTitle={movie.title} movieImg={movie.poster_path} movieRelaseDate={movie.release_date} movieKey={movie.key} />
      ) : null
    );
  return (
    <>
      <section className="film-section">
        <div className="container">
          <div className="row pb-3 justify-content-center align-items-center">
            <div className="col">
              <h4>Palestinian Movies</h4>
            </div>
            <div className="col text-right">
              <Link className="view-more-btn" to="/palestinian-films">
                View More
              </Link>
            </div>
          </div>
          <div className="row">{renderMovies()}</div>
        </div>
      </section>
    </>
  );
}

export default FilmsSlider;
