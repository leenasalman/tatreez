import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import Cursor from "../Cursor";
import MovieCard from "../MovieCard";
import axios from "axios";
import Footer from "../sections/Footer";

function PalestinianFilms() {
  // Define a state variable to store the data from the APIs
  const API_URL = "https://api.themoviedb.org/3";
  const keyword_id = "537-palestine";

  const apiUrls = [];
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState();

  const fetchPages = async () => {
    // fetch data from the link
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/keyword/537-palestine/movies`,
      {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
        },
      }
    );
    // save all 6 links retrieved in array to fetch data from them later
    let updatedUrls = [...apiUrls];
    for (let i = 1; i <= data.total_pages; i++) {
      updatedUrls.push(
        `${API_URL}/keyword/${keyword_id}/movies?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${i}`
      );
    }
    //fetch data from all six links and then push them in array and at the end save in state
    let allResults = [];
    updatedUrls.map((url) =>
      fetch(url)
        .then((res) => res.json())
        .then((data) => allResults.push(data.results))
        .then((err) => setLoading(err))
    );
    setApiData(allResults);
  };
  useEffect(() => {
    fetchPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          <div className="row">
            {apiData &&
              apiData.flat().map((array) => (
                //array of objects [{},{},{}]
                <MovieCard
                  key={array.id + "_" + Math.random()}
                  movieTitle={array.title}
                  movieImg={array.poster_path}
                  movieRelaseDate={array.release_date}
                  movieKey={array.key}
                />
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PalestinianFilms;
