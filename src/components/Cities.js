import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Cities.css";
function Cities() {
  useEffect(() => {
    var cities = document.querySelectorAll(".cites-section__text");
    setTimeout(() => {
      for (let i = 0; i < cities.length; i++) {
        cities[i].style.top = `${Math.random() * 90}%`;
        cities[i].style.bottom = `${Math.random() * 90}%`;
        cities[i].style.left = `${Math.random() * 90}%`;
        cities[i].style.right = `${Math.random() * 90}%`;
        cities[i].style.opacity = `${Math.random() * 1}`;
      }
    }, 100);
  }, []);
  return (
    <>
      <section className="cities-sections" id="citiesID">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col">
              <div className="cities-section__container">
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/acre">Acre</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/tulkarem">Tulkarem</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/haifa">Haifa</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/beersheba">Beersheba</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/hebron">Hebron</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/beisan">Beisan</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/jenin">Jenin</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/ramallah">Ramallah</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/nablus">Nablus</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/jerusalem">Jerusalem</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/nazareth">Nazareth</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/jaffa">Jaffa</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/safad">Safad</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/ramla">Ramla</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/tiberias">Tiberias</Link>
                  </h2>
                </div>
                <div className="cites-section__text">
                  <h2>
                    <Link to="/embroidery/gaza">Gaza</Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cities;
