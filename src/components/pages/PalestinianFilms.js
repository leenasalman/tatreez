import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import Cursor from "../Cursor";
import MovieCard from "../MovieCard";
import axios from "axios";
import Footer from '../sections/Footer';

function PalestinianFilms() {
  const API_URL = "https://api.themoviedb.org/3/";
  const keyword_id = "537-palestine";
  // Define a state variable to store the data from the APIs
  const [pages, setPages] = useState();
  const [apiData, setApiData] = useState({});
  const [apiUrls, setApiUrls] = useState([]);

  const fetchPages = async () => {
    const {
      data: { total_pages },
    } = await axios.get(`${API_URL}/keyword/${keyword_id}/movies`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    });
    setPages(total_pages);
  };

  const fetchApiUrls = () => {
    const updatedUrls = [...apiUrls];
    for (let i = 1; i <= pages; i++) {
      updatedUrls.push(
        `${API_URL}keyword/${keyword_id}/movies?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${i}`
      );
    }
    setApiUrls(updatedUrls);
  };

  //   Use the useEffect hook to fetch data from the APIs when the component mounts
  useEffect(() => {
    fetchPages();
    fetchApiUrls();
    // Use the map() method to fetch data from each API in parallel
    Promise.all(
      apiUrls.map((url) => fetch(url).then((response) => response.json()))
    ).then((data) => {
      // Once all the data has been fetched, update the state
      setApiData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrls]);

  const renderAllMovies = () =>
    Object.values(apiData).map((movie) =>
      movie.results.map((movie) => (
        <MovieCard key={movie.id + "_" + Math.random()} movie={movie} />
      ))
    );
  return (
    <>
      <Loader />
      <Cursor />
      <section className="film-section">
        <div className="container">
          <div className="row pb-3 justify-content-center align-items-center text-center">
            <div className="col">
              <h4>Palestinian Movies</h4>
            </div>
          </div>
          <div className="row">{ renderAllMovies() }</div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PalestinianFilms;
